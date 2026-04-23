import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Konvoq Docs',
  tagline: 'Set up, train, and scale your AI support assistant',
  favicon: 'img/favicon.ico',
  url: 'https://docs.konvoq.com',
  baseUrl: '/',
  organizationName: 'konvoq',
  projectName: 'konvoq-docs',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  future: { v4: true },
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    ['classic', {
      docs: {
        sidebarPath: './sidebars.ts',
        routeBasePath: '/',
      },
      blog: false,
      theme: { customCss: './src/css/custom.css' },
    } satisfies Preset.Options],
  ],

  themeConfig: {
    image: 'img/og-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Konvoq',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', label: 'Documentation', position: 'left' },
        { href: 'https://konvoq.com/', label: 'konvoq.com', position: 'right' },
        { href: 'https://app.konvoq.com', label: 'Dashboard →', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Quick Start', to: '/getting-started/install-widget' },
            { label: 'Train the AI', to: '/getting-started/train-ai' },
            { label: 'HubSpot', to: '/integrations/hubspot' },
            { label: 'Slack', to: '/integrations/webhooks' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Dashboard', href: 'https://app.konvoq.com' },
            { label: 'Website', href: 'https://konvoq.com/' },
            { label: 'Pricing', href: 'https://konvoq.com/pricing' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', href: 'https://konvoq.com/about' },
            { label: 'Contact', href: 'https://konvoq.com/contact' },
            { label: 'Privacy', href: 'https://konvoq.com/privacy' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Konvoq. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'typescript', 'javascript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
