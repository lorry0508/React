## React 学习内容

### 1.JSX语法的学习
    1.1 react提供Fragment标签，用于解决JSX语法中最外层使用div不被显示的问题
    1.2 元素遍历通过map方法操作
    1.3 通过bind改变函数的this指向
    1.4 元素的行内样式通过对象的形式，例如style={{ marginLeft: 10 }}
    1.5 JSX中注释的写法，例如{/* 这是一个JSX */}
    1.6 样式类的使用，className='input'，注意不要使用class='input',react会认为和类型类class重名
    1.7 dangerouslySetInnerHTML={{ __html: item }}, 用来净化用户不合时宜的使用innerHTML可能导致的cross-site scripting (XSS)攻击
    1.8 label一般用来扩大点击的区域，input上绑定id="insertArea"，原生html可以使用label标签上使用for="insertArea"，即可扩大点击的区域的效果；在react中仍然这样使用会报错，需要使用htmlFor="insertArea"