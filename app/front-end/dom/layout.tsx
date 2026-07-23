import SideNav from "@/app/ui/shared/sidenav";

const reactLinks = [
  {
    name: "DOM",
    href: "/front-end/dom",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={reactLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
