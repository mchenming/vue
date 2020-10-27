// 把data中的数据都使用Object.defineProperty重新定义es5

// Object.defineProperty 不能兼容ie8及以下vue2无法兼容ie8版本
import {isObject} from '../util/index'

class Observe{
    constructor(data){
        this.walk(data)
    }
    walk(data) {
        Object.keys(data).forEach(item=>{
            defineReactive(data,item,data[item])
        })
    }
}

function defineReactive(data,key,value) {
    observe(value) // 递归实现深度检测
    Object.defineProperty(data,key,{
        get(){
            // console.log('获取值')
            return value
        },
        set(newval) {
            if (newval ===value) return 
            console.log('设置值')
            observe(newval) // 继续劫持用户设置的值 因为用户可能设置的值是一个对象
            value = newval
        }
    })
}

export function observe(data){
    // console.log(data,'observe')
    let isObj = isObject(data)
    if (!isObj) return
    return new Observe(data)
}