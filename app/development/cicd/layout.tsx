import SideNav from "@/app/ui/shared/sidenav";

const cicdLinks = [
  {
    name: "CI/CD",
    href: "/development/cicd/",
  },
  {
    name: "Github Workflows",
    href: "/development/cicd/github/",
  }
]

export default function CicdLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={cicdLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
