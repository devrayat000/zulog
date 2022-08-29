import create from "zustand";
import { devtools } from "zustand/middleware";

interface Store {
  drawer: {
    open: boolean;
    toggle(payload?: boolean): void;
  };
}

export const useZStore = create<Store>()(
  devtools(
    (set) => ({
      drawer: {
        open: false,
        toggle(payload) {
          set((prev) => ({
            drawer: {
              ...prev.drawer,
              open: payload ?? !prev.drawer.open,
            },
          }));
        },
      },
    }),
    {
      enabled: process.env.NODE_ENV !== "production",
      name: "zulog-store",
      anonymousActionType: "@zulog/store",
    }
  )
);
