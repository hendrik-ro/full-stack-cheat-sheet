import SideNav from '@/app/ui/shared/sidenav';

const dbLinks = [
  {
    name: 'Database',
    href: '#',
  },
  {
    name: 'PostgreSQL',
    href: '#postgres',
  },
  {
    name: 'SQLite',
    href: '#sqlite',
  },
  {
    name: 'SQLi',
    href: '#sqli',
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
