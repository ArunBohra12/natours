// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { codeTheme } = require('./tokenColors');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natours Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://natours-docs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/ArunBohra12/natours/tree/docs/documentation',
        },
        theme: {
          customCss: require.resolve('./src/css/theme.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/favicon.png',
      navbar: {
        title: 'Natours',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/ArunBohra12/natours/tree/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Natours, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: codeTheme,
        darkTheme: codeTheme,
      },
    }),
};

module.exports = config;
