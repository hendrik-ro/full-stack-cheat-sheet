"use client";

import styles from "./topnav.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const path = GetPath();
  return (
    <div className={styles.nav}>
      <ul className={styles.breadcrumb}>
        <li>
          <Link href="/" title="Cheat Sheet Content">
            Full Stack Engineer Cheat Sheet
          </Link>
        </li>
        {path.map((p) => (
          <li key={p}>{p.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}

function GetPath(): string[] {
  const pathname = usePathname();
  if (pathname === "/") return ["Home"];
  const path = pathname.split("/");
  return path.slice(1, path.length);
}
