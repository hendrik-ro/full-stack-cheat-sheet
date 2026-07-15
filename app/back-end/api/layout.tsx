import SideNav from '@/app/ui/shared/sidenav';

const apiLinks = [
  {
    name: 'APIs',
    href: '#',
  },
  {
    name: 'REST',
    href: '#rest',
  },
  {
    name: 'WebSockets',
    href: '#websockets',
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
