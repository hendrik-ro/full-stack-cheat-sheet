import NavLinks from '@/app/ui/shared/nav-links';

interface SideNavProps {
  links: Array<{ name: string; href: string }>;
}

export default function SideNav({ links }: SideNavProps) {
  return (
    <div>
      <NavLinks links={links} />
    </div>
  );
}
