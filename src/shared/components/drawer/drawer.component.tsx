import Image from "next/image";
import Link from "next/link";
import React from "react";

type SharedDrawerComponentProps = {
  children: React.ReactNode;
};

export function SharedDrawerComponent({
  children,
}: SharedDrawerComponentProps): JSX.Element {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="flex flex-row gap-3 justify-between mb-10 p-4">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
            <span className="text-lg font-bold leading-8">Smart CAA</span>
          </div>
          {/* Sidebar content here */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
