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
    <div className="gridLevelTwo">
      <div className="itemSidebar">
        <SideNav links={reactLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
