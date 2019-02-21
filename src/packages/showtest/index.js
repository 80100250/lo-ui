import showtest from './showtest.vue';
showtest.install = function (Vue) {
  Vue.component(showtest.name, showtest);
};
export default showtest;