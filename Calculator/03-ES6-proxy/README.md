webpack 打包工具

压缩代码 JS混淆代码

浏览器不支持

ES6 ES7 ES8 语法特性

webpack -> 安装一系列的依赖包解决翻译 编译 转换

less sass css结构化 逻辑化

webpack -> 依赖处理less sass -> css 编译转换打包

HTML压缩 模板 ejs pug

自动化方案
webpack

开发过程中 实时的编译
webpack-dev-server

First step

三大件

webpack
webpack-cli
webpack-dev-server

Second step

处理JS -> ES6 ES7 ES8 装饰器

babel-loader@7
babel-core
babel-preset-env

babel-plugin-transform-runtime
babel-plugin-transform-decorators
babel-plugin-transform-decorators-legacy

Third step

处理 sass -> css -> style

sass-loader
node-sass
css-loader
postcss-loader autoprefixer
style-loader


Forth step

处理模板 ejs-loader

Fifth step

html-webpack-plugin

--save-dev -D
安装在开发环境
--save -S
安装在生产环境