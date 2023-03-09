// @ts-nocheck
import { create } from 'zustand';
import { classic, nintendo } from '../styles/themes';
import { ITheme } from '../styles/themes/theme.interface';

interface IState {
  theme: ITheme;
  changeTheme: (theme: string) => void;
}

const themes = {
  "classic": classic,
  "nintendo": nintendo,
};

export const useStore = create<IState>()((set) => ({
  theme: classic,
  changeTheme: (theme) => set(() => ({ theme: themes[theme] })),
}));