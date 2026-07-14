import SideNav from '@/app/ui/shared/sidenav';

const cssLinks = [
  {
    name: 'CSS',
    href: '#',
  },
  {
    name: 'Breadcrumbs',
    href: '#breadcrumbCSS',
  },
  {
    name: 'Flexbox',
    href: '#flexbox',
  },
  {
    name: 'Properties',
    href: '#properties',
  },
  {
    name: 'Selectors',
    href: '#selectors',
  },
  {
    name: 'Skeuomorphism',
    href: '#skeuomorphism',
  },
  {
    name: 'Transitions',
    href: '#transitions',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebar">
        <SideNav links={cssLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
