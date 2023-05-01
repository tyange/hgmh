import { ReactNode } from "react";
import Header from "./Header";
import Drawer from "./Drawer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <Drawer />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
