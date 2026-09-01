import SideNav from "@/app/ui/shared/sidenav";

const reactLinks = [
  {
    name: "React",
    href: "/front-end/react",
  },
  {
    name: "Components",
    href: "/front-end/react/components",
  },
  {
    name: "Forms",
    href: "/front-end/react/forms",
  },
  {
    name: "Frameworks",
    href: "/front-end/react/frameworks",
  },
  {
    name: "Hooks",
    href: "/front-end/react/hooks",
  },
  {
    name: "JSX",
    href: "/front-end/react/jsx",
  },
  {
    name: "Props",
    href: "/front-end/react/props",
  },
  {
    name: "Redux",
    href: "/front-end/react/redux",
  },
  {
    name: "Redux Toolkit",
    href: "/front-end/react/redux_toolkit",
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
