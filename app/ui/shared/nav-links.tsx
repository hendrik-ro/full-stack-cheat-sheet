'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from './sidenav.module.css'

interface NavLinksProps {
  links: Array<{ name: string; href: string }>;
}

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <div>
      <div style={{marginBottom: '5px'}}>
        <ButtonCollapse />
      </div>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p className={styles.sidebarLink}>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

function ButtonCollapse() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    const gridLevelTwo = document.querySelector('.gridLevelTwo') as HTMLElement | null;
    const itemSidebar = document.querySelector('.itemSidebar') as HTMLElement | null;
    if (gridLevelTwo && itemSidebar) {
      if (isSidebarOpen) {
        gridLevelTwo.style.gridTemplate = '1fr / 50px 1fr';
        itemSidebar.style.overflow = 'hidden';
      } else {
        gridLevelTwo.style.gridTemplate = '1fr / 200px 1fr';
        itemSidebar.style.overflow = 'auto';
      }
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <button className={styles.sidebarButton} onClick={toggleSidebar}>
      {isSidebarOpen ? '<<' : '>>'}
    </button>
  );
}
