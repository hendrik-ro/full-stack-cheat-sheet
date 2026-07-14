import SideNav from '@/app/ui/shared/sidenav';

const nextJsLinks = [
  {
    name: 'Next.js',
    href: '#',
  },
  {
    name: 'Setup',
    href: '#setup',
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
