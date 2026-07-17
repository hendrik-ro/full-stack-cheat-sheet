import SideNav from '@/app/ui/shared/sidenav';

const reactLinks = [
  {
    name: 'React',
    href: '/front-end/react',
  },
  {
    name: 'Next.js',
    href: '/front-end/react/next-js',
  },
  {
    name: 'Vite',
    href: '/front-end/react/vite',
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
