import { IStore } from "../../store";

export interface Link {
  shortId: string;
  originUrl: string;
  createdAt: Date;
  views: number;
  userId: string | null;
}

export interface Stat {
  totalViews: number;
  totalLinks: number;
}

export interface HomeViewProps {
  user: any;
  links: Link[] | null;
  stats: Stat;
  store: IStore;
  originUrl: string;
  setOriginUrl: React.Dispatch<React.SetStateAction<string>>;
  handleOpenSignupModal: () => void;
  handleOpenLoginModal: () => void;
  handleCloseModal: () => void;
  handleLogout: () => void;
  handleSubmitUrl: (e: any) => void;
  themeSwitcher: () => void;
  isLoadingAuth: boolean;
}