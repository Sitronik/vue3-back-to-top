import BackToTop from './BackToTop.vue'

const install = function installMyComponent(app, options) {
  if (!options) {
    options = {}
  }

  // Don't install if already installed, or SSR
  if (install.installed || app.prototype.$isServer) return;
  install.installed = true;

  // TODO add directives

  app.component(BackToTop.name, BackToTop);

  // app.config.globalProperties.
};

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
BackToTop.install = install;

// To allow use as module (npm/webpack/etc.) export component
export default BackToTop;
