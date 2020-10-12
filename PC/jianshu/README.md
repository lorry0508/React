# 简书模拟项目学习笔记
## 一、初始化项目
    1.使用styled-components，实现组件化思想实现全局样式; 解决一些潜在的样式冲突问题
    2.使用reset.css做到全局样式在各浏览器的统一
    3.immutable.js库，用于解决state是原始js对象，一旦被修改，对应原始对象也会被修改，使用深拷贝也会带来性能的损耗；所以使用immutable将js对象转换成immutable对象，能够很好的解决这些问题；immutable对象的get()和set()方法，immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个新的对象
    4.redux-thunk是redux的中间间，使得能够在action中去写函数
    5.使用react-router-dom中的BrowserRouter和Route进行路由实现，BrowserRouter中只能有一个元素
    6.Provider中尽量只包裹一个元素
    7.Router路由标签中，使用exact表示路由的唯一性