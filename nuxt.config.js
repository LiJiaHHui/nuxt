 module.exports = {
    router: {
         // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清楚nuxt.js基于pages目录默认生成的路由表
            routes.splice(0)
          routes.push(...[{
            path: '/',
            component: resolve(__dirname, 'pages/layout/'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: resolve(__dirname, 'pages/home/')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: resolve(__dirname, 'pages/login/')
                },
                {
                    path: '/regiest',
                    name: 'regiest',
                    component: resolve(__dirname, 'pages/login/')
                }
            ]
        }])
        }
      }
 }