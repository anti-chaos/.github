---
title: 开发套件
---

「反混沌」在工具层面的几大体系。

## Infra

与日常开发息息相关的各类底层基础设施，如代码校验与格式化、开发套件等：

| NPM 包 | 说明 |
| --- | --- |
| [`@ntks/stylelint-config`](https://www.npmjs.com/package/@ntks/stylelint-config){:target="_blank"}{:rel="external nofollow"} | 符合[推荐的 CSS/Sass 风格](/guides/coding-style/html-and-css/)的 Stylelint 配置 |
| [`@ntks/eslint-config`](https://www.npmjs.com/package/@ntks/eslint-config){:target="_blank"}{:rel="external nofollow"} | 符合[推荐的 JavaScript/TypeScript 风格](/guides/coding-style/javascript/)的 ESLint 配置 |
| [`@ntks/toolbox`](https://www.npmjs.com/package/@ntks/toolbox){:target="_blank"}{:rel="external nofollow"} | 日常开发工具包，可用 API 详见[使用手册](/projects/toolbox/) |
| [`@ntks/event-emitter`](https://www.npmjs.com/package/@ntks/event-emitter){:target="_blank"}{:rel="external nofollow"} | 简易的事件触发器 |
{:.table.table-bordered}

## [Fxxk Design](https://fxxk.design/){:target="_blank"}{:rel="external nofollow"}

以「设计即代码」为目标的跨 JS-based 技术栈、跨平台 GUI 开发体系：

| 子体系/模块 | 说明 |
| --- | --- |
| [Petals](https://petals.fxxk.design/){:target="_blank"}{:rel="external nofollow"} | 原子化的 UI 组件基础设施，包括[风格组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-1){:target="_blank"}{:rel="external nofollow"}、[视觉组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-2){:target="_blank"}{:rel="external nofollow"}和[无头组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-3){:target="_blank"}{:rel="external nofollow"} |
| [Kokiri](https://github.com/kokiri-ui){:target="_blank"}{:rel="external nofollow"} | 与 Vue 绑定的[结构组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-4){:target="_blank"}{:rel="external nofollow"}，提供部分既有 UI 组件库的适配包 |
| [Zora](https://github.com/zora-ui){:target="_blank"}{:rel="external nofollow"} | 与 React 绑定的[结构组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-4){:target="_blank"}{:rel="external nofollow"}，提供部分既有 UI 组件库的适配包 |
{:.table.table-bordered}

## Future.js

以「需求即代码」为目标，将前端应用各个层次、各个环节之间的通信规范化、标准化的开发体系：

| 子体系/模块 | 说明 |
| --- | --- |
| [Organik](https://github.com/ourai/organik){:target="_blank"}{:rel="external nofollow"} | 元数据逻辑引擎，用来收集元数据并生成上下文 |
| [Handie](https://www.yuque.com/handie){:target="_blank"}{:rel="external nofollow"} | 渐进式配置驱动企业级中后台前端应用开发框架 |
{:.table.table-bordered}

{% contentfor footer %}
  {% include widgets/social.html %}
  {% include widgets/toc.html %}
{% endcontentfor %}
