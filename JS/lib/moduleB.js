/*
 * @Author: YuWen.tao 
 * @Date: 2018-11-30 14:21:39 
 * @Last Modified by: YuWen.tao
 * @Last Modified time: 2018-11-30 16:34:52
 */
define(function(){
    var B="我是模块B！快来点我！";//定义
    var C="我是模块C！我依赖了B，所以在C里要先引入我！";//定义
    return {//出口
        B:B,
        C:C
    }
});