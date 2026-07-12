import SideNav from '@/app/ui/shared/sidenav';

const javascriptLinks = [
  {
    name: 'JavaScript',
    href: '/language/javascript',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebar">
        <SideNav links={javascriptLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
