'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // blog
  // 新增
  // 显示博客列表
  // 博客详情
  // url / method get 控制器
  router.get('/', controller.home.index);
  // 显示博客列表 所有的博客都查出来
  router.get('/posts', controller.post.index);
  // 显示某篇博客
  // router.get('/posts/:id');
  router.get('/posts/create', controller.post.new);
  router.post('/posts', controller.post.create);
  // router.delete('/posts/:id');
  // router.put('/posts/:id');

};
