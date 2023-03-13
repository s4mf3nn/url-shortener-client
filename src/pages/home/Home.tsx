import { useEffect, useState } from 'react';
import FirebaseAuthService from '../../firebase/FirebaseAuthService';
import FirebaseFirestoreService from '../../firebase/FirebaseFirestoreService';
import { useStore } from '../../store';
import { Link, Stat } from './home.interface';
import { View } from './Home.view';
import { customAlphabet } from 'nanoid';

const themes = ["sweet", "mario", /*"dark",*/ "autumn", "sunset", "vintage"];

export const Home = () => {
  const store = useStore();

  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [user, setUser] = useState<unknown | null>(null);
  const [originUrl, setOriginUrl] = useState<string>("");
  const [links, setLinks] = useState<Link[] | null>(null);
  const [stats, setStats] = useState<Stat>({ totalLinks: 0, totalViews: 0 });

  // Check if user is logged in and fetch links
  useEffect(() => {
    document.body.style.overflow = 'unset'; // Enable scroll bar that could be disabled when previous modal has been opened
    FirebaseAuthService.subscribeToAuthChanges(setUser, setIsLoadingAuth);
    if (user) fetchLinks();
    fetchStats();
  }, [user]);

  // Get the list of links created by the current user
  const fetchLinks = async () => {
    const response = await FirebaseFirestoreService.getListOfDocuments('urls');

    const data = response.docs.map((linkDoc) => {
      const data = linkDoc.data();
      data.createdAt = new Date(data.createdAt.seconds * 1000);
      return { ...data };
    });

    setLinks(data as Link[]);
  };

  // Get the stats
  const fetchStats = async () => {
    const response = await FirebaseFirestoreService.readDocuments('statistics');

    const data = response.docs.map((doc) => {
      return doc.data();
    });

    setStats({
      totalLinks: data[0].totalLinks,
      totalViews: data[1].totalViews,
    });
  };

  // Open signup modal when user click on "Signup" button
  const handleOpenSignupModal = (): void => {
    store.setIsSignupModalOpen(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  };

  // Open login modal when user click on "Login" button
  const handleOpenLoginModal = (): void => {
    store.setIsLoginModalOpen(true);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'hidden';
  };

  // Close modal when user click "Close" button
  const handleCloseModal = (): void => {
    store.setIsSignupModalOpen(false);
    store.setIsLoginModalOpen(false);
    window.scrollTo({ top: 0 });
    document.body.style.overflow = 'unset';
  };

  // Logout user
  const handleLogout = (): void => {
    FirebaseAuthService.logoutUser();
    setLinks(null);
  };

  // Create short Url when user click on "Shorten" button
  const handleSubmitUrl = async (e: any): Promise<void> => {
    e.preventDefault();
    if (!originUrl) return;

    if (!user) return alert('You must log in or create an account before shortening a URL.');

    try {
      // TODO: Si l'utilisateur est déjà connecté, vérifier qu'il' n'a pas déjà crée un id avec une url déjà existante en BDD
      // TODO: Si l'utilisateur n'est pas connecté, vérifier qu'il' n'a pas déjà crée un id avec une url déjà existante dans le local storage
      const shortId = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 7);
      FirebaseFirestoreService.createDocument('urls', {
        originUrl,
        shortId: shortId(),
        createdAt: new Date(),
        views: 0,
      });

      setOriginUrl("");
      if (user) {
        fetchLinks();
        setStats({
          ...stats,
          totalLinks: stats.totalLinks + 1,
        });
      };
    } catch (error) {
      if (error instanceof Error) return alert(error.message);
    }
  };

  // Change the app theme when user clicks the logo
  const themeSwitcher = (): void => {
    const newIndex = store.themeIndex + 1;
    newIndex > themes.length - 1
      ? store.setThemeIndex(0)
      : store.setThemeIndex(store.themeIndex + 1);
  };

  // Update the store with the new theme
  useEffect(() => {
    store.setTheme(themes[store.themeIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.themeIndex, store.setTheme]);

  return <View {...{
    user,
    links,
    stats,
    store,
    originUrl,
    setOriginUrl,
    handleOpenSignupModal,
    handleOpenLoginModal,
    handleCloseModal,
    handleLogout,
    handleSubmitUrl,
    themeSwitcher,
    isLoadingAuth,
  }} />;
};