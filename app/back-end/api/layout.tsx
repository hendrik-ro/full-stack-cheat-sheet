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
    <div>
      <div className="sidebar">
        <SideNav links={apiLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
