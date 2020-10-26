// 把data中的数据都使用Object.defineProperty重新定义es5

// Object.defineProperty 不能兼容ie8及以下vue2无法兼容ie8版本

export function Observe(data){
    console.log(data,'observe')
}