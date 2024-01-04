// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Codnect',
  tagline: 'We make golang simple, modern and productive.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.codnect.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codnect', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'Codnect',
        logo: {
          alt: 'Codnect',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Projects',
            position: 'right',
            items: [
              {
                label: 'Procyon',
                href: 'https://www.procyon.codnect.io',
              },
              {
                label: 'Logy',
                href: 'https://www.logy.codnect.io',
              },
              {
                label: 'Chrono',
                href: 'https://www.chrono.codnect.io',
              },
              {
                label: 'Reflector',
                href: 'https://www.reflector.codnect.io',
              },
              // ... more items
            ],
          },
          {
            href: 'https://github.com/codnect',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Procyon',
                href: 'https://www.procyon.codnect.io',
              },
              {
                label: 'Logy',
                href: 'https://www.logy.codnect.io',
              },
              {
                label: 'Chrono',
                href: 'https://www.chrono.codnect.io',
              },
              {
                label: 'Reflector',
                href: 'https://www.reflector.codnect.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/...',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/codnect',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Codnect`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
