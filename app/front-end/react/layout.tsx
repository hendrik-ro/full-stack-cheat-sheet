import SideNav from '@/app/ui/shared/sidenav';

const reactLinks = [
  {
    name: 'React',
    href: '#',
  },
  {
    name: 'DOM',
    href: '#dom',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebar">
        <SideNav links={reactLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
