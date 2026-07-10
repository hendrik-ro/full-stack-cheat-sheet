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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="sidebar h-full flex-none md:w-64">
        <SideNav links={reactLinks} />
      </div>
      <div className="content grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
