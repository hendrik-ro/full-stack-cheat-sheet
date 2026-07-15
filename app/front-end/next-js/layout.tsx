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
    <div className='gridLevelTwo'>
      <div className="itemSidebar">
        <SideNav links={nextJsLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
