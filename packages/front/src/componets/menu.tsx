import React from 'react';
import Link from 'next/link';

function Menu() {
  return (
    <ul>
      <li>
        <Link href="/dashboard"> Dashboard</Link>
      </li>
      <li>
        <Link href="/tanks"> Tanks</Link>
      </li>
      <li>
        <Link href="/devices"> Devices</Link>
      </li>
      <li>
        <Link href="/clients"> Clients</Link>
      </li>
      <li>
        <Link href="/users"> Users</Link>
      </li>
    </ul>
  );
}
export default Menu;
