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
    <div>
      <div className="sidebar">
        <SideNav links={dbLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
