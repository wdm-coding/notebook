import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

export default async () => {
  return defineConfig({
    lang: 'en-ZH',
    title: "文档",
    titleTemplate: 'wdm',
    description: "文档",
    head: [['link', { rel: 'icon', href: '/notebook/favicon.ico' }]],
    base: '/notebook/',
    cleanUrls: true,
    srcDir: './src',
    outDir: './dist',
    rewrites: {
      'pages/:path(.*)': ':path(.*)'
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
      ],

      sidebar: {
        '/company/': [
          {
            text: 'Company',
            items: [
              { text: '公司内部项目', link: '/company' },
              { text: '城市大数据', link: '/company/cs/' },
              { text: '区域功能节点', link: '/company/dcp/' },
            ]
          },
        ],
        '/workHour/': [
          { text: '工作任务', link: '/workHour' },
        ]
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    },
    vite: {
      resolve: {
        alias: [
          {
            find: '@',
            replacement: fileURLToPath(new URL('../src', import.meta.url)),
          },
          {
            find: /^.*\/VPNavBar\.vue$/,
            replacement: fileURLToPath(new URL('../src/components/Header/index.vue', import.meta.url)),
          },
        ]
      },
      plugins: [
        {
          // 给插件起个名字，方便调试
          name: 'ignore-favicon-404',
          // 配置 Vite 的中间件
          configureServer(server) {
            // 拦截所有请求
            server.middlewares.use((req, res, next) => {
              // 当请求的 url 正好是浏览器默认的 favicon.ico 时
              if (req.url === '/favicon.ico') {
                // 设置状态码为 204 (No Content)
                // 204 表示请求成功但无需返回任何内容，浏览器会完美接受且不报错
                res.writeHead(204);
                res.end();
              } else {
                // 其他请求正常放行
                next();
              }
            });
          }
        }
      ]
    }
  })
}
