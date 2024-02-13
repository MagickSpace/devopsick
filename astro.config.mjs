import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import astroExpressiveCode from 'astro-expressive-code'
import million from 'million/compiler'
import yaml from '@rollup/plugin-yaml'
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import partytown from '@astrojs/partytown'
import { remarkReadingTime } from './src/utils/readTime.ts'
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      million.vite({
        mode: 'react',
        server: true,
        auto: {
          threshold: 0.05,
          skip: ['useBadHook', /badVariable/g],
        },
      }),
      yaml(),
    ],
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-link",
          },
        },
      ],
    ],
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  site: 'https://devopsick.vercel.app',
  integrations: [
    astroExpressiveCode({
      themes: ['material-theme-palenight', 'material-theme-palenight'],
      shiki: {},
    }),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    sitemap({
      entryLimit: 10000,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown(),
  ],
})
