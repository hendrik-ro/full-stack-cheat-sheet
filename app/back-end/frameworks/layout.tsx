import SideNav from "@/app/ui/shared/sidenav";

const frameworkLinks = [
  {
    name: "Frameworks",
    href: "/back-end/frameworks",
  },
  {
    name: "Node.js",
    href: "/back-end/frameworks/nodejs",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={frameworkLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
