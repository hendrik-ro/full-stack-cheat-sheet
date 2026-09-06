import SideNav from "@/app/ui/shared/sidenav";

const serverLinks = [
  {
    name: "Server",
    href: "/back-end/server",
  },
  {
    name: "Boiler Plate",
    href: "/back-end/server/boiler_plate",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={serverLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
