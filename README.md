# euv

why euv? because:
```js
'vue'.split('').sort().join('') // euv
```
source:
```js
'node'.split('').sort().join('') // deno
```

# Quick Start

> 目前还有 `case` 没有测试

安装
```
npm install
```
运行
```
npm run dev
```

# 目前支持功能

- [x] `虚拟DOM`
- [x] `Diff更新`
- [x] `{{ data }}` or `{{ data + 'test' }}` or `{{ fn(data) }}`
- [x] `v-for` // `v-for="(item, index) in list"` or `v-for="(item, index) in 10"` or `v-for="(item, index) in 'string'"`
- [x] `v-if` `v-else-if` `v-else`
- [x] `v-show`
- [x] `v-html`
- [x] `v-model`
- [x]  `@click` `v-on:click` 事件(支持绑定其他事件) `@click="fn('a',$event)"` `@click="fn"` `@click="show = false"` `@click="function(){console.log(1)}"`
- [x] `methods` 方法
- [x] `computed` 计算属性
- [x] `watch` 监听
- [x] `beforeCreate`、`created`、`beforeMount`、`mounted`、`beforeUpdate`、`updated`
- [x] `:class`
- [x] `:style`
- [x] `$nextTick`

[comment]: <> (# 补充)

[comment]: <> (`虚拟dom` 不懂的可以看看我之前发的文章&#40;相关代码相比现在有部分改动&#41;：http://www.wclimb.site/2020/03/19/simple-virtual-dom/)
