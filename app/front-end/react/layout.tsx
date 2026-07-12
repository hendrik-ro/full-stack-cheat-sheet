import SideNav from '@/app/ui/shared/sidenav';

const reactLinks = [
  {
    name: 'React',
    href: '/front-end/react',
  },
  {
    name: 'DOM',
    href: '/front-end/react#dom',
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
