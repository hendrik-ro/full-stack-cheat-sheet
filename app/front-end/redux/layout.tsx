import SideNav from "@/app/ui/shared/sidenav";

const reduxLinks = [
  {
    name: "Redux",
    href: "/front-end/redux",
  },
  {
    name: "Concepts",
    href: "/front-end/redux/core",
  },
  {
    name: "Reducer Composition",
    href: "/front-end/redux/composition",
  },
  {
    name: "Redux-React",
    href: "/front-end/redux/react",
  },
  {
    name: "Redux Toolkit",
    href: "/front-end/redux/redux_toolkit",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={reduxLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
