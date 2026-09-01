import type { ReactNode } from "react";
import ScrollRestorer from "@/components/ScrollRestorer";
import SiteNav from "@/components/site-nav";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="site-frame">
    <SiteNav />
    <ScrollRestorer />
    <main className="site-main">{children}</main>
  </div>
);

export default SiteLayout;
