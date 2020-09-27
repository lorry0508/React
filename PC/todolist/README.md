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
    1.10 setState 函数中既能接收一个对象，也能接收一个函数; 它是一个异步函数; 它的第二个参数也是一个函数,是回调函数,可用于ref操作dom节点
    1.11 PropTypes 对父组件传递给子组件参数进行类型校验, 在使用时记得小写propTypes; test: PropTypes.string.isRequired, isRequired要求必传; 使用defaultProps设置默认值
    1.12 React严格模式下，<React.StrictMode></React.StrictMode>中的组件render都会执行两次；
    1.13 当组件的state或props发生改变时，render函数就会重新执行；当父组件的render函数被运行时，它的子组件的render都被重新运行
    1.14 React.createElement 也可以用来创建虚拟DOM，与JSX相比，代码更加复杂

### 2.React与虚拟DOM之间的关系
    1. state 数据
    2. JSX 模版
    3. 数据 + 模版 结合，生成真实的DOM，来显示
    4. state 发生改变
    5. 数据 + 模版 结合，生成真实的DOM，替换原始的DOM

    缺陷：
        第一次生成了一个完整的DOM片段
        第二次生成了一个完整的DOM片段
        第二次的DOM替换第一次的DOM，非常耗性能
    
    1. state 数据
    2. JSX 模版
    3. 数据 + 模版 结合，生成真实的DOM，来显示
    4. state 发生改变
    5. 数据 + 模版 结合，生成真实的DOM，并不直接替换原始的DOM
    6. 新的DOM（DoucumentFragment） 和原始的DOM 做比对，找差异
    7. 找出input框发生了变化
    8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

    缺陷：
        性能的提升并不明显

    React生成虚拟DOM性能提升:
        1. state 数据
        2. JSX 模版
        3. 数据 + 模版 结合，生成真实的DOM，来显示 
            <div id='abc'><span>hello world</span></div>
        4. 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）（损耗了性能）
            ['div', {id: 'abc'}, ['span', {}, 'hello world']]
        5. state 发生变化
        6. 数据 + 模版 生成新的虚拟DOM （极大的提升了性能）
            ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
        7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容（极大的提升性能）
        8. 直接操作DOM，改变span中的内容

    深入了解React中的虚拟DOM:
        1. state 数据
        2. JSX 模版
        3. 数据 + 模版 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）（损耗了性能）
            ['div', {id: 'abc'}, ['span', {}, 'hello world']]
        4. 用虚拟DOM的结构生成真实的DOM，来显示 
            <div id='abc'><span>hello world</span></div>
        5. state 发生变化
        6. 数据 + 模版 生成新的虚拟DOM （极大的提升了性能）
            ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
        7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容（极大的提升性能）
        8. 直接操作DOM，改变span中的内容

        优点：
        1. 性能提升了。
        2. 它使得跨端应用得以实现。React Native

### 3.React的生命周期函数
    3.1 生命周期函数指在某一时刻组件会自动执行的函数
    3.2 生命周期函数（按照执行顺序排序）：
        一、Mounting
            1.componentWillMount() // 在组件即将被挂载到页面的时刻自动执行,***新版react中被废除***
            2.render() 函数渲染
            3.componentDidMount() 在组件即将被挂载到页面的时刻自动执行
        二、Updation
            4.shouldComponentUpdate() 组件被更新之前，它会自动执行;要求返回一个boolean类型的值,true则调用render,false反之
            5.componentWillUpdate() // 组件被更新之前，在shouldComponentUpdate()之后和render()之前，它会自动执行；但是它在shouldComponentUpdate()之后被执行；如果        shouldComponentUpdate返回true才会被执行，如果返回false这个函数就不会被执行啦，***新版react中被废除***
            6.componentDidUpdate() 组件被更新完毕之后，在render之后，它会自动执行
            7.componentWillReceiveProps() // 当一个组件从父组件接收了参数；只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行；如果这个组件第一次存在父组件中，不会执行；如果这个组件之前已经存在于父组件中，才会执行
        三、Unmounting
            8.componentWillUnmount() 当一个组件即将被从页面剔除的时候，会被执行

### 4.React的生命周期函数的使用场景
    4.1 shouldComponentUpdate(nextProps, nextState)可用作父组件改变时，子组件render是否跟随重新渲染，用作性能提升
    4.2 componentDidMount()中一般发起ajax请求，该生命周期只执行一次；不能再render中发起ajax,会造成死循环

### 5.React中动画效果的使用
    5.1 使用yarn add react-transition-group

### 6.Redux的使用
    6.1 Redux的工作流程：
        例如：React Components 借书的人
              Actions Creators 行为（说的话、借的书等等）
              Store 图书馆管理员
              Reducers 图书馆记录
        1.reducer 可以接收state, 但是绝对不能修改state
    6.2 reducer是纯函数，纯函数指的是给定固定的输入，就一定会有固定的输出，而且一定不会有任何副作用（没有对接收的参数进行修改）
    6.3 UI组件更多的是一些页面内容的暂时；容器组件用于包含UI组件，一些业务逻辑的处理；无状态组件，说白了就是一个函数，没有constructor以及生命周期函数
    6.4 