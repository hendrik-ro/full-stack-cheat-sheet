import SideNav from '@/app/ui/shared/sidenav';

const dbLinks = [
  {
    name: 'Database',
    href: '/back-end/database',
  },
  {
    name: 'PostgreSQL',
    href: '/back-end/database/#postgres',
  },
  {
    name: 'SQLite',
    href: '/back-end/database/#sqlite',
  },
  {
    name: 'SQLi',
    href: '/back-end/database/#sqli',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="sidebar h-full flex-none md:w-64">
        <SideNav links={dbLinks} />
      </div>
      <div className="content grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
