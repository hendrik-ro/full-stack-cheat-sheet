import SideNav from '@/app/ui/shared/sidenav';

const nextJsLinks = [
  {
    name: 'Next.js',
    href: '/front-end/next-js',
  },
  {
    name: 'Setup',
    href: '/front-end/next-js#setup',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sidebar">
        <SideNav links={nextJsLinks} />
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
