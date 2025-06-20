import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yonghushangji from '@/views/modules/yonghushangji/list'
    import diannaoxinxi from '@/views/modules/diannaoxinxi/list'
    import wangguan from '@/views/modules/wangguan/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import hujiaowangguan from '@/views/modules/hujiaowangguan/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import goumaishangpin from '@/views/modules/goumaishangpin/list'
    import yonghuxiaji from '@/views/modules/yonghuxiaji/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yonghushangji',
        name: '用户上机',
        component: yonghushangji
      }
      ,{
	path: '/diannaoxinxi',
        name: '电脑信息',
        component: diannaoxinxi
      }
      ,{
	path: '/wangguan',
        name: '网管',
        component: wangguan
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/hujiaowangguan',
        name: '呼叫网管',
        component: hujiaowangguan
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/goumaishangpin',
        name: '购买商品',
        component: goumaishangpin
      }
      ,{
	path: '/yonghuxiaji',
        name: '用户下机',
        component: yonghuxiaji
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
