import type { ReactNode } from "react";
import Header from "../_components/header/header";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
