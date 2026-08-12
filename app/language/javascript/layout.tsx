import SideNav from "@/app/ui/shared/sidenav";

const javascriptLinks = [
  {
    name: "JavaScript",
    href: "#",
  },
  {
    name: "Arrays",
    href: "/language/javascript/arrays",
  },
  {
    name: "Classes",
    href: "/language/javascript/classes",
  },
  {
    name: "Node",
    href: "/language/javascript/node",
  },
  {
    name: "Objects",
    href: "/language/javascript/objects",
  },
  {
    name: "Testing",
    href: "/language/javascript/testing",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={javascriptLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
