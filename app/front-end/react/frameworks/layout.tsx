import SideNav from '@/app/ui/shared/sidenav';

const frameworksLinks = [
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
    href: '/front-end/react/frameworks/next-js',
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="gridFrameworks">
      <div className="gridNav">
        <SideNav links={frameworksLinks} />
      </div>
      <div className="itemContent">{children}</div>
    </div>
  );
}
