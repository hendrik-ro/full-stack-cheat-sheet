import SideNav from "@/app/ui/shared/sidenav";

const reactLinks = [
  {
    name: "React",
    href: "/front-end/react",
  },
  {
    name: "Frameworks",
    href: "/front-end/react/frameworks",
  },
  {
    name: "vDOM",
    href: "/front-end/react/vDOM",
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
