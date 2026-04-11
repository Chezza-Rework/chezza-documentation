import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// ─── Data ─────────────────────────────────────────────────────────────────────

const columns = [
  {
    title: 'Resources',
    links: [
      { label: 'Inventory v4', to: '/docs/inventory-v4/getting-started' },
      { label: 'Phone v2', to: '/docs/phone-v2/getting-started' },
    ],
  },
  {
    title: 'Documentation',
    links: [
      { label: 'Events', to: '/docs/inventory-v4/Events/inventory-openinventory' },
      { label: 'Exports', to: '/docs/inventory-v4/Exports/additemtoplayer' },
      { label: 'Getting Started', to: '/docs' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Dashboard', to: 'https://www.chezza.dev' },
      { label: 'Discord', to: 'https://discord.com/invite/Cm9NNk2486' },
    ],
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.brandLink}>
            <img
              src="/chezza-docs/img/logo.png"
              alt="Chezza Logo"
              className={styles.brandLogo}
            />
            <span className={styles.brandName}>Chezza Documentation</span>
          </Link>
          <p className={styles.brandTagline}>
            Unofficial documentation for Chezza Studios FiveM resources.
          </p>
          <div className={styles.brandBadge}>Unofficial</div>
        </div>

        {/* Link Columns */}
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <p className={styles.columnTitle}>{col.title}</p>
              <ul className={styles.columnList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link className={styles.columnLink} to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} Chezza Rework. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          This is an unofficial documentation site and is not affiliated with or endorsed by Chezza Studios.
        </p>
      </div>
    </footer>
  );
}
