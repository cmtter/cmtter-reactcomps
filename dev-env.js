const { join } = require('path')
const cwd = process.cwd()
export default () => {
  return {
    doc: {
      title: '中台前端开发引导',
      src: './src',
      base: '/cmtter-reactcomps',
      files: ['src/**/*.{md,markdown,mdx}']
    }
  }
}