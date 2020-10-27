import {observe} from './observer/index'
export function initState(vm){
    const opts = vm.$options
    console.log(opts)
    // vue的数据来源 属性 方法 数据 计算属性 watch
    if(opts.props) {
        initProps(vm)
    }
    if(opts.methods) {
        initMethods(vm)
    }
    if(opts.data) {
        initData(vm)
    }
    if(opts.computed) {
        initComputed(vm)
    }
    if(opts.watch) {
        initWatch(vm)
    }
}

function initProps(vm){

}

function initMethods(vm){

}
function initData(vm){
    console.log('初始化数据')
    let data = vm.$options.data
    data = vm._data = typeof data === 'function' ? data.call(vm) : data
    console.log(data)
    // 对象劫持 用户改变了数据 MVVM模式数据改变可以额驱动试图改变
    // Object.defineProperty()
    observe(data)
}
function initComputed(vm){

}
function initWatch(vm){

}