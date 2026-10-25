# Muse Desktop for PI-Desktop

这是一个用于学习、交流与兼容适配的迁移项目，基于 [Muse Desktop](https://github.com/robzilla1738/muse-desktop) 将其界面和交互迁移到 PI-Desktop 的插件体系中。原项目由 **Robert Courson（[@robzilla1738](https://github.com/robzilla1738)）** 开发，本项目保留原作者署名和 MIT 许可。感谢原作者的开源工作。

本分支是非官方的 PI-Desktop 适配版，与上游作者及 Meta 没有隶属或背书关系。`main` 分支保留原项目，`pi-desktop-plugin` 分支提供插件迁移版本。

## 为什么替换图标、Logo 和背景

上游在 [素材与许可说明](https://github.com/robzilla1738/muse-desktop/blob/main/NOTICE.md) 中明确指出：MIT 许可适用于源码和文档，并不授予第三方名称、商标、参考图片或角色设计的使用权。因此，本适配版没有将源码开源理解为这些图片也可以自由复用，而是将图标、Logo、背景及角色图片替换为维护者提供的独角兽素材，并保留对原项目的出处说明。

替换素材不改变本项目基于 Muse Desktop 迁移的事实，也不代表获得了上游品牌授权。替换图片不因源码的 MIT 许可自动获得相同授权；如需再次分发素材，请自行确认相应权利。详见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。

## 安装与使用

1. 从本仓库 Releases 下载 `local.muse-desktop-0.3.10.piplug`。
2. 在 PI-Desktop 插件管理中安装本地插件包，查看并确认所需权限。需要 PI-Desktop >= 0.21.0。
3. 点击侧栏独角兽图标，或在命令面板执行 **Muse Desktop: Open**。
4. 使用 PI-Desktop 中已配置的模型。设置项 `modelKey` 可填写 `providerId/modelId`，留空使用默认模型。

左上角提供关闭页面、最小化、最大化/还原按钮与简洁的返回入口。关闭 Muse 页面或点击返回箭头即可返回 PI-Desktop 原生界面。入口图标会自动寻找空位，不依赖 PI Bot。

## 迁移内容与能力边界

- 使用 PI-Desktop 的 manifest、插件主进程、renderer extension 和宿主 layer API。
- 将原 Electron preload API 适配到插件桥接；通过 Shadow DOM 隔离界面样式。
- 通过 `agent.complete` 使用宿主模型，不需要 Muse Code CLI 或额外 Meta 账号。回复为一次性返回。
- 支持会话、偏好、模型选择、项目文件预览、只读 Git 信息与对话压缩。
- 模型不执行工具，不自动读文件或执行命令；附件和麦克风暂不可用。
- 发送消息时，对话与项目路径会发送给宿主中配置的模型服务商。插件保存自己的会话及偏好，可以打开链接、定位目录与打开终端。
- 保留上游界面结构，并调整素材、亮色主题光标、窗口控件、中文适配和宿主界面切换。

本版本已在本机 PI-Desktop 上安装和使用；发布到 GitHub 不等于已通过官方插件市场审核。

## 目录与构建

- `main.js`：PI-Desktop 插件后端。
- `renderer/`：宿主界面入口、窗口控制和嵌入素材。
- `source/`：用于迁移构建的 Muse React 源码及共享类型。
- `views/muse/app/muse-app.mjs`：可直接运行的界面构建产物。
- `scripts/package.py`：按明确文件清单生成 `.piplug` ZIP 包。

插件运行不需要额外构建。重新构建 React 界面：

```powershell
npm ci
npm run build
py scripts/package.py
```

构建后仍应在 PI-Desktop 内验证插件桥接、权限、侧栏布局与窗口控件。

## 许可与出处

- 上游：[robzilla1738/muse-desktop](https://github.com/robzilla1738/muse-desktop)
- 原作者：Robert Courson
- 源码许可：[MIT](LICENSE)，保留原版权声明。
- 上游原始说明：[UPSTREAM-NOTICE.md](UPSTREAM-NOTICE.md)。
- 适配与素材说明：[THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。
