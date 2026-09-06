import SideNav from "@/app/ui/shared/sidenav";

const frameworkLinks = [
  {
    name: "Node.js",
    href: "/back-end/nodejs",
  },
  {
    name: "Modules",
    href: "/back-end/nodejs/modules",
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
