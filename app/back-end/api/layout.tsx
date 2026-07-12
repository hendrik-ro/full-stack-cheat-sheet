import SideNav from '@/app/ui/shared/sidenav';

const apiLinks = [
  {
    name: 'APIs',
    href: '/back-end/api',
  },
  {
    name: 'REST',
    href: '/back-end/api#rest',
  },
  {
    name: 'WebSockets',
    href: '/back-end/api#websockets',
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
