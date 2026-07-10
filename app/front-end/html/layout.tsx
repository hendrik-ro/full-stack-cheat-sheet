import SideNav from '@/app/ui/shared/sidenav';

const htmlLinks = [
  {
    name: 'HTML',
    href: '/front-end/html',
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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="sidebar h-full flex-none md:w-64">
        <SideNav links={htmlLinks} />
      </div>
      <div className="content grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
