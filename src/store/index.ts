// @ts-nocheck
import { create } from 'zustand';
import { beach, classic, nintendo } from '../styles/themes';
import { ITheme } from '../styles/themes/theme.interface';

interface IState {
  theme: ITheme;
  themeIndex: number;
  setThemeIndex: (theme: number) => void;
  changeTheme: (theme: string) => void;
}

const themes = {
  "beach": beach,
  "classic": classic,
  "nintendo": nintendo,
};

export const useStore = create<IState>()((set) => ({
  theme: classic,
  themeIndex: parseInt(localStorage.getItem("themeIndex")) || 0,
  setThemeIndex: (index) => set(() => {
    localStorage.setItem("themeIndex", index);
    return { themeIndex: index };
  }),
  changeTheme: (theme) => set(() => ({ theme: themes[theme] }))
}));