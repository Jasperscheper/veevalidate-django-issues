import Vue from "vue"; // See note about import below
import App from './App'

import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false;

/* NOTE: in order to retrieve props from static HTML, we must instantiate Vue with
el/component style below instead of the render(h) -> h(MyWidget) / $mount syntax. However, doing so will
utilize a runtime build without the template compiler. To work around this, vue must be imported
from dist/vue/vue. Be careful about changing this import or the way vue is instantiated. */

new Vue({
  render: h => h(App),
}).$mount('#form-no-dist');


