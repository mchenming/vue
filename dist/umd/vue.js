(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

    // 把data中的数据都使用Object.defineProperty重新定义es5
    // Object.defineProperty 不能兼容ie8及以下vue2无法兼容ie8版本
    function Observe(data) {
      console.log(data, 'observe');
    }

    function initState(vm) {
      const opts = vm.$options;
      console.log(opts); // vue的数据来源 属性 方法 数据 计算属性 watch

      if (opts.props) ;

      if (opts.methods) ;

      if (opts.data) {
        initData(vm);
      }

      if (opts.computed) ;

      if (opts.watch) ;
    }

    function initData(vm) {
      console.log('初始化数据');
      let data = vm.$options.data;
      data = vm._data = typeof data === 'function' ? data.call(vm) : data;
      console.log(data); // 对象劫持 用户改变了数据 MVVM模式数据改变可以额驱动试图改变
      // Object.defineProperty()

      Observe(data);
    }

    function initMixin(Vue) {
      // 初始化流程
      Vue.prototype._init = function (options) {
        console.log(options);
        const vm = this; // vue中使用this.$options就是用户传递的属性

        vm.$options = options;
        initState(vm);
      };
    }

    function Vue(options) {
      // console.log('hello world')
      // console.log(options)
      this._init(options);
    }

    initMixin(Vue);

    return Vue;

})));
//# sourceMappingURL=vue.js.map
