/*
 * @Author: YuWen.tao 
 * @Date: 2018-11-30 14:21:39 
 * @Last Modified by: YuWen.tao
 * @Last Modified time: 2018-11-30 16:49:37
 */
//配置路径
require.config({
    shim: {//配置不是AMD规范的JS,不过路径也要照常配置
        "D": {
            exports: 'D',//出口D模块的暴露入口
        },
        "E": {
            deps: ['D'],//E模块依赖于D模块所以需要提前声明,声明的名称是 路径配置名称 
            exports: 'E',
        },
    },
    paths: {//路径
        "A": 'moduleA',
        "B": 'lib/moduleB',
        "C": 'lib/moduleC',
        "D": 'lib/moduleD',
        "E": 'lib/moduleE',
    }
})

//没有依赖关系 就直接写
console.log("使用dta-main成功！");

//有依赖关系 就利用 require 函数直接加载，两个参数一个模块数组，一个执行方法，执行方法里写上引入的模块名，就可以直接用了


require(['A', 'B', 'C','D','E'], 
function (A, B, C,D,E) {//函数传参这里，当时AMD的规范的话直接传路径配置好的名称，如果是在shim里配置的需要写shim配置的名称
    console.log(C);
    console.log(B);//B先执行，说明引入模块后 JS执行顺序 与 执行事件顺序有关
    console.log(A);//第一次测试 没用AMD规范写，也没有配置路径，打印直接成功，第二次配置路径后必须遵循AMD规范才打印成功
    console.log(D);//未用AMD规范写的JS
    console.log(E);//未用AMD规范写的JS，且依赖D
})