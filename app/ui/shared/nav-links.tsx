'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLinksProps {
  links: Array<{ name: string; href: string }>;
}

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <div>
      <ButtonCollapse />
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
    </div>
  );
}

function ButtonCollapse() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    const content = document.querySelector('.content') as HTMLElement | null;
    if (sidebar && content) {
      if (isSidebarOpen) {
        sidebar.style.width = '50px';
        sidebar.style.overflow = 'hidden';
        content.style.marginLeft = '25px';
      } else {
        sidebar.style.width = '200px';
        sidebar.style.overflow = 'auto';
        content.style.marginLeft = '200px';
      }
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <button className="sidebarButton" onClick={toggleSidebar}>
      {isSidebarOpen ? '<<' : '>>'}
    </button>
  );
}
