import { create } from "zustand";

interface TabStore {
  tabIndex: number;
  setTabIndex: (index: number) => void;
}

export const useTabStore = create<TabStore>((set) => {
  const userDetailsString = localStorage.getItem("userDetails");
  let initialTabIndex = 0;

  if (userDetailsString) {
    const userDetails = JSON.parse(userDetailsString);
    const userProfile = userDetails.isProfileDone;

    if (userProfile) {
      initialTabIndex = 1;
    }
  }

  set({ tabIndex: initialTabIndex });

  return {
    tabIndex: initialTabIndex,
    setTabIndex: (index) => set({ tabIndex: index }),
  };
});
