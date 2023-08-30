// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/palenight');
// const darkCodeTheme = require('prism-react-renderer/themes/planeight');

var theme = {
  plain: {
    background: '#2a2139',
    backgroundColor: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
    backgroundImage: '#34294f',
    color: '#f92aad',
    textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
  },
  styles: [
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#495495',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#ccc',
      },
    },
    {
      types: ['tag', 'attr-name', 'namespace', 'number', 'unit', 'hexcode', 'deleted'],
      style: {
        color: '#e2777a',
      },
    },
    {
      types: ['property', 'selector'],
      style: {
        color: '#72f1b8',
        textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
      },
    },
    {
      types: ['function-name'],
      style: {
        color: '#6196cc',
      },
    },
    {
      types: ['boolean', 'selector-id', 'function'],
      style: {
        color: '#fdfdfd',
        textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
      },
    },
    {
      types: ['class-name', 'maybe-class-name', 'builtin'],
      style: {
        color: '#fff5f6',
        textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75',
      },
    },
    {
      types: ['constant', 'symbol'],
      style: {
        color: '#f92aad',
        textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
      },
    },
    {
      types: ['important', 'atrule', 'keyword', 'selector-class'],
      style: {
        color: '#f4eee4',
        textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex', 'variable'],
      style: {
        color: '#f87c32',
      },
    },
    {
      types: ['parameter'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity', 'url'],
      style: {
        color: '#67cdcc',
      },
    },
    {
      types: ['operator'],
      style: {
        color: 'ffffffee',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'green',
      },
    },
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Natours Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
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
          editUrl: 'https://github.com/ArunBohra12/natours/tree/docs',
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
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: theme,
        darkTheme: theme,
      },
    }),
};

module.exports = config;
