import { Router } from 'vitepress'
const whiteList = ['/','/company','/workHour','/company/cs','/company/dcp']
const installRouter = (router: Router) => {
  router.onBeforeRouteChange = (to) => {
    let path = to.split('?')[0].replace('/notebook', '');
    // 去掉哈希值
    path = path.split('#')[0];
    if (path!=='/'&&path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    console.log('path',path)
    if(whiteList.includes(path)){
      return true
    }else{
      return false
    }
  }
}
export default installRouter