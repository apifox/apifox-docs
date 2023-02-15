import { defineConfig } from 'vitepress';

export default defineConfig({
  // App related configs
  title: 'Apifox 官方文档',
  description: 'Apifox official product documentation, based on vitepress.',

  // theme related configs
  themeConfig: {
    // nav,
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '21 分钟学会 Apifox', link: '/introduction' },
          { text: 'Apifox 介绍', link: '/getting-started' },
          { text: '快速上手', link: '/getting-started' },
          { text: '软件使用介绍', link: '/getting-started' },
        ],
      },
      {
        text: '接口管理',
        items: [
          { text: '接口设计', link: '/introduction' },
          { text: '接口调试/用例', link: '/getting-started' },
          { text: '调试模式', link: '/getting-started' },
          { text: '数据模型', link: '/getting-started' },
          { text: '前置/后置操作', link: '/getting-started' },
          { text: '快捷请求', link: '/getting-started' },
          { text: '环境管理', link: '/getting-started' },
          { text: '环境变量', link: '/getting-started' },
          { text: '动态变量', link: '/getting-started' },
          { text: '接口修改历史', link: '/getting-started' },
          { text: '自定义字段', link: '/getting-started' },
          { text: '接口唯一标识', link: '/getting-started' },
          { text: '接口批量管理', link: '/getting-started' },
        ],
      },
      {
        text: 'IDE 插件',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: 'Socket 接口',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: '团队管理',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: '最佳实践',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: '导入/导出',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: '发布文档',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],
    nav: [
      {
        text: '产品手册',
        items: [
          { text: '入门', link: '/introduction' },
          { text: '接口管理', link: '/getting-started' },
          { text: 'IDE 插件', link: '/getting-started' },
          { text: 'Socket 接口', link: '/getting-started' },
          { text: '团队管理', link: '/getting-started' },
          { text: '发布文档', link: '/getting-started' },
        ],
      },
      {
        text: '推荐阅读',
        items: [
          {
            text: '参考资料',
            items: [
              { text: 'Apifox Swaggeer 扩展', link: '/introduction' },
              { text: 'JSON Schema 介绍', link: '/getting-started' },
              { text: 'JSON Path 介绍', link: '/getting-started' },
              { text: 'XPath 介绍', link: '/getting-started' },
              { text: '正则表达式', link: '/getting-started' },
              { text: 'CSV 格式规范', link: '/getting-started' },
              { text: 'Socket 粘包与分包问题', link: '/getting-started' },
              { text: '安装 Java 环境', link: '/getting-started' },
            ],
          },
          {
            text: '相关文章',
            items: [
              { text: '扔掉 Postman...', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },
            ],
          },
        ],
      },
      {
        text: 'v2.2.2',
        items: [
          { text: '升级到新版...', link: '/introduction' },
          { text: '更新日志', link: '/introduction' },
          { text: '产品路线图', link: '/getting-started' },
        ],
      },
      {
        text: '联系我们',
        items: [
          { text: '用户支持', link: '/introduction' },
          { text: '私有化部署', link: '/getting-started' },
        ],
      },
    ],
    outline: [2, 3],
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    editLink: {
      pattern: 'https://github.com/apifox/apifox-docs/blob/main/:path',
      text: '在 GitHub 编辑此页',
    },
    algolia: {
      appId: '#',
      apiKey: '#',
      indexName: '#',
    },
  },
});
