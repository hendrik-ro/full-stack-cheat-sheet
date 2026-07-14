import SideNav from '@/app/ui/shared/sidenav';

const htmlLinks = [
  {
    name: 'HTML',
    href: '#',
  },
  {
    name: 'Breadcrumbs',
    href: '#breadcrumbsHTML',
  },
  {
    name: 'Column Grid',
    href: '#column-grid',
  },
  {
    name: 'Head',
    href: '#head',
  },
  {
    name: 'Tables',
    href: '#tables',
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
