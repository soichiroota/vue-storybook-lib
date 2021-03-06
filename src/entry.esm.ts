import _Vue, { PluginFunction } from 'vue';

// Import vue components
import * as components from '@/stories/index';

// install function executed by Vue.use()
const install: PluginFunction<any> = function installVueStorybookLib(Vue: typeof _Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/stories/index';
