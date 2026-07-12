'use client';

import Link from 'next/link';

interface NavLinksProps {
  links: Array<{ name: string; href: string }>;
}

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p className="sidebarLink">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
