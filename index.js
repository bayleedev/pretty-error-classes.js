const classes = {}
module.exports = new Proxy({}, {
  get: function(_, name) {
    if (!classes[name]) {
      classes[name] = class MyDinamicallyNamedClass extends Error {
        static get name() {
          return name
        }
      }
    }
    return classes[name]
  }
});
