"use client";

import { ReactNode } from "react";

const SideMenu = ({ children }: { children: ReactNode }) => {
  console.log("side menu");
  return (
    <>
      {children}
      <button>送信</button>
    </>
  );
};

export default SideMenu;
