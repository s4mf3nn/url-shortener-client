import { IStore } from "../../store";

export interface Link {
  shortId: string;
  originUrl: string;
  createdAt: Date;
  views: number;
  userId: string | null;
}

export interface HomeViewProps {
  user: any;
  links: Link[] | null;
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