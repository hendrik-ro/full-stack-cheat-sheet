'use client';

import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Next.js',
    href: '/front-end/next-js',
  },
  {
    name: 'Setup',
    href: '/front-end/next-js/#setup',
  },
];

export default function NavLinks() {
  return (
    <>
      <p style={{color: 'white'}}>Content</p>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p className="sidebarLink hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
