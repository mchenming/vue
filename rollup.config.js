import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
    input: './src/index.js', // 以那个文件作为打包的入口
    output:{
        file: 'dist/umd/vue.js', //出口路径
        name: 'Vue', // 指定打包后全局变量的名称
        format:'umd',//统一模块规范
        sourcemap:true, //es6=>es5开启源码调试可以找到源代码报错位置
    },
    plugins:[
        babel({
            exclude: "node_modules/**"
        }),
        process.env.Env === 'development' ? serve({
            open:true,
            openPage: '/public/index.html', //默认打开html路径
            port: 3000,
            contentBase: ''
        }) : null
    ]
}