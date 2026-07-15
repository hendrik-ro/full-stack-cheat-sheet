import SideNav from '@/app/ui/shared/sidenav';

const htmlLinks = [
  {
    name: 'HTML',
    href: '#',
  },
  {
    name: 'Breadcrumbs',
    href: '/front-end/html/breadcrumbs',
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
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={htmlLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
