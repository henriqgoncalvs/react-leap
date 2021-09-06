import pipe from 'ramda/es/pipe';
import create, { StateCreator } from 'zustand';

import { immer } from '@/lib/zustand-middlewares';

interface Sidebar {
  state: {
    isOpen: boolean;
  };
  actions: {
    toggleSidebar: () => void;
    reset: () => void;
  };
}

const createStore = pipe(immer, create);

const initialState = {
  isOpen: false,
};

const store: StateCreator<Sidebar> = (set) => ({
  state: {
    ...initialState,
  },
  actions: {
    toggleSidebar: () =>
      set(({ state }) => {
        state.isOpen = !state.isOpen;
      }),
    reset: () => set({ state: { ...initialState } }),
  },
});

export const useSidebar = createStore(store);
