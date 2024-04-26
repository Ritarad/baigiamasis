import React from 'react';

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Hause Staff</span>
        <ul className="nav">
          <li>Apie mus</li>
          <li>Kontaktai</li>
          <li>Kabinetas</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
