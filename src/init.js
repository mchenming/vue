import {initState} from './state'

// 在原型上添加init方法Vue实例通过调用时传入
export function initMixin(Vue) {
    // 初始化流程
    Vue.prototype._init = function(options) {
        console.log(options)
        const vm = this
        // vue中使用this.$options就是用户传递的属性
        vm.$options = options
        initState(vm)
    }
}