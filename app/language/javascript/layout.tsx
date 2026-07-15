import SideNav from '@/app/ui/shared/sidenav';

const javascriptLinks = [
  {
    name: 'JavaScript',
    href: '#',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='gridLevelTwo'>
      <div className="itemSidebar">
        <SideNav links={javascriptLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
