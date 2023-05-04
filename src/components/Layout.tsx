import { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="relative flex-1">{children}</main>
    </div>
  );
};

export default Layout;
