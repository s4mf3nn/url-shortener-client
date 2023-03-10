import { IStore } from "../../store";

export interface Link {
  shortId: string;
  originUrl: string;
  createdAt: string;
  views: number;
}

export interface HomeViewProps {
  user: any;
  links: Link[];
  store: IStore;
  urlToShorten: string;
  setUrlToShorten: React.Dispatch<React.SetStateAction<string>>;
  handleOpenSignupModal: () => void;
  handleOpenLoginModal: () => void;
  handleCloseModal: () => void;
  handleLogout: () => void;
  handleSubmitUrl: (e: any) => void;
  themeSwitcher: () => void;
}