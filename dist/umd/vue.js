(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

    function isObject(data) {
      return typeof data === 'object' && typeof data !== null;
    }

    // 把data中的数据都使用Object.defineProperty重新定义es5

    class Observe {
      constructor(data) {
        this.walk(data);
      }

      walk(data) {
        Object.keys(data).forEach(item => {
          defineReactive(data, item, data[item]);
        });
      }

    }

    function defineReactive(data, key, value) {
      observe(value); // 递归实现深度检测

      Object.defineProperty(data, key, {
        get() {
          // console.log('获取值')
          return value;
        },

        set(newval) {
          if (newval === value) return;
          console.log('设置值');
          observe(newval); // 继续劫持用户设置的值 因为用户可能设置的值是一个对象

          value = newval;
        }

      });
    }

    function observe(data) {
      // console.log(data,'observe')
      let isObj = isObject(data);
      if (!isObj) return;
      return new Observe(data);
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

      observe(data);
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
