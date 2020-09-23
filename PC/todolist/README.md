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
    1.9 在constructor中this.handleInputChange.bind(this)，比在调用时bind改变this指向更加节省性能
    1.10 setState 函数中既能接收一个对象，也能接收一个函数
    1.11 PropTypes 对父组件传递给子组件参数进行类型校验, 在使用时记得小写propTypes; test: PropTypes.string.isRequired, isRequired要求必传; 使用defaultProps设置默认值
    1.12 React严格模式下，<React.StrictMode></React.StrictMode>中的组件render都会执行两次；
    1.13 当组件的state或props发生改变时，render函数就会重新执行；当父组件的render函数被运行时，它的子组件的render都被重新运行