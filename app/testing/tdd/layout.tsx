import SideNav from "@/app/ui/shared/sidenav";

const testingLinks = [
  {
    name: "TDD",
    href: "/testing/tdd",
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={testingLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  )
}
