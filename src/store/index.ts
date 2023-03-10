// @ts-nocheck
import { create } from 'zustand';
import * as theme from '../styles/themes';
import { ITheme } from '../styles/themes/theme.interface';

export interface IStore {
  theme: ITheme;
  setTheme: (theme: string) => void;
  themeIndex: number;
  setThemeIndex: (theme: number) => void;
  isSignupModalOpen: boolean;
  setIsSignupModalOpen: (bool: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (bool: boolean) => void;
}

const themes = {
  "autumn": theme.autumn,
  "dark": theme.dark,
  "mario": theme.mario,
  "sunset": theme.sunset,
  "sweet": theme.sweet,
  "vintage": theme.vintage,
};

export const useStore = create<IStore>()((set) => ({
  theme: theme.mario,
  setTheme: (theme) => set(() => ({ theme: themes[theme] })),
  themeIndex: parseInt(localStorage.getItem("themeIndex")) || 0,
  setThemeIndex: (index) => set(() => {
    localStorage.setItem("themeIndex", index);
    return { themeIndex: index };
  }),
  isSignupModalOpen: false,
  setIsSignupModalOpen: (bool) => set(() => ({ isSignupModalOpen: bool })),
  isLoginModalOpen: false,
  setIsLoginModalOpen: (bool) => set(() => ({ isLoginModalOpen: bool })),
}));