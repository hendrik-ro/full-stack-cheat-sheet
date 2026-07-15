import SideNav from '@/app/ui/shared/sidenav';

const golangLinks = [
  {
    name: 'Golang',
    href: '#',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='gridLevelTwo'>
      <div className="itemSidebar">
        <SideNav links={golangLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
