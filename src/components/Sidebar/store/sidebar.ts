import create from 'zustand';

type Sidebar = {
  state: {
    isOpen: boolean;
  };
  actions: {
    toggleSidebar: () => void;
    reset: () => void;
  };
};

const initialState = {
  isOpen: false,
};

export const useSidebar = create<Sidebar>((set) => ({
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
}));
