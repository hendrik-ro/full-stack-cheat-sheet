import SideNav from "@/app/ui/shared/sidenav";

const testingLinks = [
  {
    name: "Testing",
    href: "/development/testing/",
  },
  {
    name: "TDD",
    href: "/development/testing/tdd",
  },
  {
    name: "Resources",
    href: "/development/testing/lib",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={testingLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
