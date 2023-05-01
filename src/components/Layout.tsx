import { ReactNode } from "react";
import Header from "./Header";
import Drawer from "./Drawer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col w-full h-screen">
      <Header />
      <main className="relative flex-1">
        <Drawer />
        {children}
      </main>
    </div>
  );
};

export default Layout;
