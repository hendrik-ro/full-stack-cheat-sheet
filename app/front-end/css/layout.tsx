import SideNav from '@/app/ui/shared/sidenav';

const cssLinks = [
  {
    name: 'CSS',
    href: '/front-end/css',
  },
  {
    name: 'Breadcrumbs',
    href: '/front-end/css/breadcrumbs',
  },
  {
    name: 'Flexbox',
    href: '/front-end/css/flexbox',
  },
  {
    name: 'Grid',
    href: '/front-end/css/grid',
  },
  {
    name: 'Properties',
    href: '/front-end/css/properties',
  },
  {
    name: 'Selectors',
    href: '/front-end/css/selectors',
  },
  {
    name: 'Skeuomorphism',
    href: '/front-end/css/skeuomorphism',
  },
  {
    name: 'Transitions',
    href: '/front-end/css/transitions',
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
