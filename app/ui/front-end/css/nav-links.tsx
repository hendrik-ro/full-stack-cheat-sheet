'use client';

import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'CSS',
    href: '/front-end/css',
  },
  {
    name: 'Properties',
    href: '/front-end/css/#properties',
  },
  {
    name: 'Skeuomorphism',
    href: '/front-end/css/#skeuomorphism',
  },
  {
    name: 'Transitions',
    href: '/front-end/css/#transitions',
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
