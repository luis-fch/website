// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  }),

  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]
    ],
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-frappe',
      },
      wrap: true,
    },
    syntaxHighlight: 'shiki',
    gfm: true,
    smartypants: true,
  },
  prefetch: {
    prefetchAll: true
  }
});