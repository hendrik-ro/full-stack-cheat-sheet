import SideNav from '@/app/ui/shared/sidenav';

const htmlLinks = [
  {
    name: 'HTML',
    href: '/front-end/html',
  },
  {
    name: 'Breadcrumbs',
    href: '/front-end/html#breadcrumbsHTML',
  },
  {
    name: 'Head',
    href: '/front-end/html#head',
  },
  {
    name: 'Tables',
    href: '/front-end/html#tables',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebar">
        <SideNav links={htmlLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
