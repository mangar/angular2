(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Aqui eh o crime!!! N eh o creme!!</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));