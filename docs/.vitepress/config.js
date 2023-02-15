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
          { text: '21 分钟学会 Apifox', link: '/getting-started/index' },
          {
            text: '我是接口调用者',
            link: '/getting-started/as-api-caller',
            items: [
              {
                text: '使用快捷请求',
                link: '/getting-started/quick-debugging',
              },
            ],
          },
          {
            text: '我是接口设计者...',
            link: '/getting-started/as-api-designer',
          },
          {
            text: '了解使用界面',
            items: [
              {
                text: '文档模式与调试模式',
                link: '/user-interface/index',
              },
              { text: '快捷键', link: '/user-interface/shortcuts' },
            ],
          },
          {
            text: '迁移到 Apifox',
            collapsed: false,
            items: [
              { text: '我用过 Postman ...', link: '/migration/from-postman' },
              {
                text: '我用过 Swagger ...',
                link: '/migration/from-swagger-or-oas',
              },
            ],
          },
        ],
      },
      {
        text: '接口管理',
        items: [
          { text: '接口设计', link: '/api-manage/create-and-edit-apis' },
          { text: '接口调试/用例', link: '/api-manage/api-debugging' },
          { text: '数据模型/复用 Schema', link: '/api-manage/schemas' },
          { text: '前置/后置操作', link: '/getting-started' },
          { text: '环境与环境变量', link: '/api-manage/variables' },
          { text: '动态变量(魔法棒)', link: '/api-manage/dynamic-variables' },
          {
            text: 'Socket 接口',
            collapsed: false,
            items: [
              { text: '创建 Socket 接口', link: '/introduction' },
              { text: '报文数据处理器', link: '/getting-started' },
            ],
          },
        ],
      },
      {
        text: '自动化测试',
        items: [
          { text: '组织和管理测试用例', link: '/introduction' },
          { text: '测试流程编排', link: '/introduction' },
          { text: '测试数据', link: '/introduction' },
          { text: '性能测试', link: '/getting-started' },
          { text: '持续集成(Jenkins..?)', link: '/getting-started' },
        ],
      },
      {
        text: '团队协同',
        items: [
          { text: '成员与权限管理', link: '/introduction' },
          { text: '项目管理', link: '/introduction' },
          { text: '接口修改历史', link: '/getting-started' },
        ],
      },
      {
        text: '分享 API 文档',
        items: [
          { text: '发布 API 文档站点', link: '/introduction' },
          { text: 'API Hub', link: '/getting-started' },
        ],
      },
      {
        text: '进阶功能',
        items: [
          {
            text: 'Fox 脚本引擎',
            items: [
              { text: 'Introduction', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },
            ],
          },
          { text: '网络代理', link: '/getting-started' },
          { text: '自定义字段', link: '/getting-started' },
          { text: '批量管理接口', link: '/getting-started' },
          {
            text: '接口唯一标识',
            link: '/getting-started',
          },
          { text: '导入/导出', link: '/getting-started' },
        ],
      },
      {
        text: '扩展与插件',
        items: [
          { text: 'Apifox CLI', link: '/introduction' },
          { text: 'IDEA 插件', link: '/introduction' },
          { text: '浏览器扩展/Agent', link: '/introduction' },
        ],
      },
      {
        text: '最佳实践',
        items: [{ text: '适配 Action 风格的接口', link: '/getting-started' }],
      },
    ],
    nav: [
      {
        text: 'v2.2.23',
        items: [
          { text: '升级到新版...', link: '/introduction' },
          { text: '更新日志', link: '/introduction' },
          { text: '产品路线图', link: 'https://www.apifox.cn/help/openapi/' },
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
              { text: 'Apifox 设计理念', link: '/introduction' },
              { text: 'Getting Started', link: '/getting-started' },
            ],
          },
        ],
      },
      { text: '开放 API', link: 'https://www.apifox.cn/help/openapi/' },
      {
        text: '联系我们',
        items: [
          { text: '用户支持', link: '/introduction' },
          { text: '私有化部署', link: '/getting-started' },
          { text: '关于 Apifox 公司', link: '/about-company' },
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
