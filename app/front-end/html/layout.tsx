import SideNav from "@/app/ui/shared/sidenav";

const htmlLinks = [
  {
    name: "HTML",
    href: "/front-end/html",
  },
  {
    name: "Breadcrumbs",
    href: "/front-end/html/breadcrumbs",
  },
  {
    name: "Column Grid",
    href: "/front-end/html/grid",
  },
  {
    name: "Head",
    href: "/front-end/html/head",
  },
  {
    name: "Tables",
    href: "/front-end/html/tables",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={htmlLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
