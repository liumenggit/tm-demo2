import {RouterMount, createRouter} from 'uni-simple-router';

const router = createRouter({
    platform: 'mp-weixin',
    routes: [
        {
            path: '*',
            redirect: (to: any) => {
                return {name: '404'}
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    next();
});
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
    router,
    RouterMount
}