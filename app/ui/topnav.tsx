'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const page = GetPageName();
  return (
    <div className="nav">
      <ul className="breadcrumb">
        <li><Link href="/" title="Cheat Sheet Content">Full Stack Engineer Cheat Sheet</Link></li>
        <li>{page.toUpperCase()}</li>
      </ul>
    </div>
  );
}

function GetPageName(): string {
  const pathname = usePathname();
  if (pathname === '/') return 'Home';
  const page = pathname.split("/")
  return page[page.length - 1];
}
