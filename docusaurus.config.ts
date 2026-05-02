import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Chezza Documentation',
  tagline: 'Dokumentation & Guides',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docu-chezza.musiker15.de',
  baseUrl: '/',

  organizationName: 'Chezza-Rework',
  projectName: 'chezza-documentation',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['docusaurus-lunr-search', {}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: './sidebars-guides.ts',
        editUrl: 'https://github.com/Chezza-Rework/chezza-documentation/tree/main/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Chezza-Rework/chezza-documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/chezza-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Chezza Documentation',
      logo: {
        alt: 'Chezza Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          docsPluginId: 'guides',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://www.chezza.dev',
          label: 'Dashboard',
          position: 'right',
        },
        {
          href: 'https://discord.com/invite/Cm9NNk2486',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dokumentation',
              to: '/docs',
            },
            {
              label: 'Guides',
              to: '/guides',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Dashboard',
              href: 'https://www.chezza.dev',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Cm9NNk2486',
            },
            {
              label: 'Github',
              href: 'https://github.com/Chezza-Rework',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chezza Rework. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'ini', 'sql', 'apacheconf', 'java', 'json', 'yaml', 'lua'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
