import SideNav from '@/app/ui/shared/sidenav';

const cssLinks = [
  {
    name: 'CSS',
    href: '/front-end/css',
  },
  {
    name: 'Selectors',
    href: '/front-end/css#selectors',
  },
  {
    name: 'Properties',
    href: '/front-end/css#properties',
  },
  {
    name: 'Skeuomorphism',
    href: '/front-end/css#skeuomorphism',
  },
  {
    name: 'Transitions',
    href: '/front-end/css#transitions',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="sidebar h-full flex-none md:w-64">
        <SideNav links={cssLinks} />
      </div>
      <div className="content grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
