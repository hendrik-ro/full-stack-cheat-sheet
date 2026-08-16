import SideNav from "@/app/ui/shared/sidenav";

const apiLinks = [
  {
    name: "APIs",
    href: "/back-end/api",
  },
  {
    name: "REST API",
    href: "/back-end/api/rest",
  },
  {
    name: "Web APIs",
    href: "/back-end/api/web",
  },
  {
    name: "WebSockets",
    href: "/back-end/api/websockets",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={apiLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
