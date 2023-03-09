// @ts-nocheck
import { create } from 'zustand';
import { autumn, beach, mario, nintendo, sunset, sweet, vintage } from '../styles/themes';
import { ITheme } from '../styles/themes/theme.interface';

interface IState {
  theme: ITheme;
  themeIndex: number;
  setThemeIndex: (theme: number) => void;
  changeTheme: (theme: string) => void;
}

const themes = {
  "autumn": autumn,
  "beach": beach,
  "mario": mario,
  "nintendo": nintendo,
  "sunset": sunset,
  "sweet": sweet,
  "vintage": vintage,
};

export const useStore = create<IState>()((set) => ({
  theme: mario,
  themeIndex: parseInt(localStorage.getItem("themeIndex")) || 0,
  setThemeIndex: (index) => set(() => {
    localStorage.setItem("themeIndex", index);
    return { themeIndex: index };
  }),
  changeTheme: (theme) => set(() => ({ theme: themes[theme] }))
}));