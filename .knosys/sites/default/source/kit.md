---
title: 开发套件
permalink: /kit/
---

「反混沌」在工具层面的几大体系。

## Infra

与日常开发息息相关的各类底层基础设施，如代码校验与格式化、开发套件等：

| NPM 包 | 说明 |
| --- | --- |
| [`@ntks/stylelint-config`](https://www.npmjs.com/package/@ntks/stylelint-config) | 符合[推荐的 CSS/Sass 风格](/guides/html-and-css-coding-style/)的 Stylelint 配置 |
| [`@ntks/eslint-config`](https://www.npmjs.com/package/@ntks/eslint-config) | 符合[推荐的 JavaScript/TypeScript 风格](/guides/javascript-coding-style/)的 ESLint 配置 |
| [`@ntks/toolbox`](https://www.npmjs.com/package/@ntks/toolbox) | 日常开发工具包，可用 API 详见[使用手册](/projects/toolbox/) |
| [`@ntks/event-emitter`](https://www.npmjs.com/package/@ntks/event-emitter) | 简易的事件触发器 |

## Fxxk Design

以「设计即代码」为目标的跨 JS-based 技术栈、跨平台 GUI 开发体系：

| 子体系/模块 | 说明 |
| --- | --- |
| [Petals](https://petals-ui.github.io/) | 原子化的 UI 组件基础设施，包括[风格组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-1)、[视觉组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-2)和[无头组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-3) |
| [Kokiri](https://github.com/kokiri-ui) | 与 Vue 绑定的[结构组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-4)，提供部分既有 UI 组件库的适配包 |
| [Zora](https://github.com/zora-ui) | 与 React 绑定的[结构组件](https://ourai.ws/posts/the-system-of-frontend-ui-components/#section-4)，提供部分既有 UI 组件库的适配包 |

## Future.js

以「需求即代码」为目标，将前端应用各个层次、各个环节之间的通信规范化、标准化的开发体系：

| 子体系/模块 | 说明 |
| --- | --- |
| [Organik](https://github.com/ourai/organik) | 元数据逻辑引擎，用来收集元数据并生成上下文 |
| [Handie](https://handiejs.github.io/) | 渐进式配置驱动企业级中后台前端应用开发框架 |
