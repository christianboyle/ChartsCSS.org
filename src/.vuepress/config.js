const { description } = require('../../package')

/**
 * Theme configuration reference.
 * https://v1.vuepress.vuejs.org/config/
 * https://v1.vuepress.vuejs.org/theme/
 * https://v1.vuepress.vuejs.org/plugin/
 */
module.exports = {

  title: 'Charts.css',

  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#f57' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/ChartsCSS/ChartsCSS.org',
    docsDir: '',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: false,
    logo: '/assets/img/logo.svg',
    displayAllHeaders: true,
    search: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Components',
        link: '/components/'
      },
      {
        text: 'Charts',
        link: '/charts/'
      },
      {
        text: 'GitHub repo',
        link: 'https://github.com/ChartsCSS/charts.css'
      }
    ],
    sidebar: [
      {
        title: 'Get Started',
        path: '/docs/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/docs/installation',
          '/docs/usage',
        ]
      },
      {
        title: 'Components',
        path: '/components/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/components/title',
          '/components/legend',
          '/components/wrapper',
          '/components/axes',
          // '/components/annotations',
          '/components/tooltips',
          '/components/motion-effects',
          '/components/animations',
        ]
      },
      {
        title: 'Charts',
        path: '/charts/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/charts/bar',
          '/charts/column',
          '/charts/line',
          '/charts/bubble',
          '/charts/pie',
          '/charts/donut',
          '/charts/radar',
          '/charts/polar',
        ]
      },
      {
        title: 'Development',
        path: '/development/',
        collapsable: false,
        sidebarDepth: -1,
        children: [
          '/development/design-principles',
          '/development/roadmap',
        ]
      }
    ],
  },

  markdown: {
    lineNumbers: true
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}