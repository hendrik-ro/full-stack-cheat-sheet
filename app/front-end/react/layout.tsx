import SideNav from '@/app/ui/shared/sidenav';

const reactLinks = [
  {
    name: 'React',
    href: '/front-end/react',
  },
  {
    name: 'Frameworks',
    href: '/front-end/react/frameworks',
  },
  {
    name: 'Next.js',
    href: '/front-end/react/next-js',
  }
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
