const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Cross Framework Docs',
  tagline: '',
  url: 'https://datachainlab.github.io',
  baseUrl: '/cross-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'datachainlab', // Usually your GitHub org/user name.
  projectName: 'cross-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cross Framework Docs',
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          /*
          {
            type: 'doc',
            docId: '01-intro',
            position: 'left',
            label: 'Doc',
          },
          */
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/datachainlab/cross',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
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
                label: 'Docs',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/datachain_en',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/datachainlab/cross',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Datachain, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ja'],
      localeConfigs: {
        en: {
          label: 'English',
          direction: 'ltr',
        },
        fr: {
          label: '日本語',
          direction: 'ltr',
        },
      },
    },
});
