module.export = function (app) {
  app.router.get('/', 'home.index') // 交给 controller
}
