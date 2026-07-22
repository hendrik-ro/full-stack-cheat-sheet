import SideNav from "@/app/ui/shared/sidenav";

const serverLinks = [
  {
    name: "Server",
    href: "#",
  },
  {
    name: "Boiler Plate",
    href: "#boiler-plate",
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
