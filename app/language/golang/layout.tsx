import SideNav from '@/app/ui/shared/sidenav';

const golangLinks = [
  {
    name: 'Golang',
    href: '#',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebar">
        <SideNav links={golangLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
