import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Country-Info-Data",
  tagline: "Manage and retrieve continent and country information",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://copy-ninja1.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/country-info-data/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "copy-ninja1", // Usually your GitHub org/user name.
  projectName: "country-info-data", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/copy-ninja1/country-info-data",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // site meta data
    metadata: [
      {
        name: "keywords",
        content: "country, country data, country info, country info data",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    headTags: [
      {
        tagName: "title",
        innerHTML: "country-info-data",
      },
      {
        tagName: "meta",
        attributes: {
          name: "description",
          content: "manage and retrieve continent and country information",
        },
      },
      {
        tagName: "link",
        attributes: {
          rel: "preconnect",
          href: "#", //replace with github pages hosted url,
        },
      },
      {
        tagName: "script",
        attributes: {
          type: "application/ld+json",
        },
        innerHTML: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Organization",
          name: "country-info-data",
          url: "#", //replace with github pages hosted url
        }),
      },
    ],
    // Replace with your project's social card
    navbar: {
      title: "country-info-data",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "api", label: "API", position: "left" },

        {
          href: "https://github.com/copy-ninja1/country-info-data",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Getting Started",
              to: "/docs/category/-getting-started",
            },
            {
              label: "Examples",
              to: "/docs/example",
            },
            {
              label: "Community",
              to: "/docs/category/-community",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/copy-ninja1/country-info-data",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Country-Info-Data. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
