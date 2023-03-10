import { useEffect, useState } from 'react';
import FirebaseAuthService from '../../firebase/FirebaseAuthService';
import FirebaseFirestoreService from '../../firebase/FirebaseFirestoreService';
import { useStore } from '../../store';
import { Link } from './home.interface';
import { View } from './Home.view';
import { links as data } from './mocks/links.mock';
import { nanoid } from 'nanoid';

const themes = ["sweet", "mario", /*"dark",*/ "autumn", "sunset", "vintage"];

export const Home = () => {
  const store = useStore();

  const [user, setUser] = useState<any>(null);
  const [urlToShorten, setUrlToShorten] = useState<string>("");
  const [links] = useState<Link[]>(data);

  useEffect(() => {
    FirebaseAuthService.subscribeToAuthChanges(setUser);
  }, []);

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
  };

  // Create short Url when user click on "Shorten" button
  const handleSubmitUrl = async (e: any): Promise<void> => {
    e.preventDefault();
    if (!urlToShorten) return;

    try {
      // TODO: Si l'utilisateur est déjà connecté, vérifier qu'il' n'a pas déjà crée un id avec une url déjà existante en BDD
      // TODO: Si l'utilisateur n'est pas connecté, vérifier qu'il' n'a pas déjà crée un id avec une url déjà existante dans le local storage
      const shortId = nanoid(7);
      await FirebaseFirestoreService.createDocument('urls', { originUrl: urlToShorten, shortId });
      setUrlToShorten("");
      alert(`fiii.it/${shortId}`);
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
    store,
    urlToShorten,
    setUrlToShorten,
    handleOpenSignupModal,
    handleOpenLoginModal,
    handleCloseModal,
    handleLogout,
    handleSubmitUrl,
    themeSwitcher
  }} />;
};