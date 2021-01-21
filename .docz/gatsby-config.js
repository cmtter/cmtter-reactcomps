const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/cmtter-reactcomps',

  siteMetadata: {
    title: '中台前端开发引导',
    description: '前端集成化开发及构建工具',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './src',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        config: './docz/doczrc.js',
        port: 8888,
        p: 8888,
        root: 'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz',
        base: '/cmtter-reactcomps',
        source: './',
        'gatsby-root': null,
        files: ['src/**/*.{md,markdown,mdx}'],
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        title: '中台前端开发引导',
        description: '前端集成化开发及构建工具',
        host: 'localhost',
        separator: '-',
        paths: {
          root: 'D:\\cmtter-lib-master-test\\cmtter-reactcomps',
          templates:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz',
          cache: 'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\.cache',
          app: 'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\app',
          appPackageJson:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\package.json',
          appTsConfig:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\tsconfig.json',
          gatsbyConfig:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\gatsby-browser.js',
          gatsbyNode:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\gatsby-node.js',
          gatsbySSR:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\gatsby-ssr.js',
          importsJs:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\app\\imports.js',
          rootJs:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\app\\index.html',
          db:
            'D:\\cmtter-lib-master-test\\cmtter-reactcomps\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
