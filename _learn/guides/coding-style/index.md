---
title: 代码风格
permalink: /guides/coding-style/
banner:
  url: banners/code
image: banners/code
---

风格一致的代码，看起来像是一个人写的。

## 总则

### 命名

总的来说，在开发中任何与「命名」相关的事情都会基于「驼峰式（camel case）」和「肉串式（kebab case）」来命名。

#### 目录 & 文件

组件相关的 JS 和 SCSS 文件使用大驼峰式命名，如：`ComponentName.js`、`ComponentName.scss`。

目录及与组件无关的文件用肉串式命名，如：`directory-name`、`file-name.js`、`file-name.jpg` 等。

#### 全局 VS 业务

开发时所涉及的组件和模型都分为全局的和业务级的，如果命名很随意，不仅会造成认知上的困扰，还会增加应用的不稳定性。

全局的组件或模型在命名时尽可能简洁、达意，能用一个单词就不要用两个；业务级的则必须加上带有业务场景的词汇，用两个及以上的单词命名。

## 细则

各语言的具体请见：

- [HTML & CSS 风格指南](/guides/coding-style/html-and-css/)
- [JavaScript 风格指南](/guides/coding-style/javascript/)

某个视图层库/框架相关的请看：

- [Angular](https://angular.io/guide/styleguide){:target="_blank"}{:rel="external nofollow"}
- [Vue](https://vuejs.org/v2/style-guide/){:target="_blank"}{:rel="external nofollow"}
