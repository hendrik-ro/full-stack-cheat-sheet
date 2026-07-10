import NavLinks from '@/app/ui/shared/nav-links';

interface SideNavProps {
  links: Array<{ name: string; href: string }>;
}

export default function SideNav({ links }: SideNavProps) {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks links={links} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
