# 网页二维码 Chrome插件

一个简洁优雅的Chrome浏览器插件，可以为当前网页生成带有网站图标的二维码。

## 功能特点

- 自动获取当前页面URL并生成二维码
- 在二维码中央优雅显示网站favicon图标
- 下方显示网站名称
- 精美的苹果风格界面设计
- 支持所有网页

## 安装方法

1. 下载本项目所有文件
2. 打开Chrome浏览器，进入扩展程序页面 (chrome://extensions/)
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择本项目文件夹

## 使用方法

1. 打开任意网页
2. 点击Chrome工具栏中的插件图标
3. 弹出窗口会显示当前网页的二维码
4. 使用手机扫描二维码即可访问该网页

## 技术实现

- 使用最新的Chrome Extension Manifest V3规范
- 使用qrcode.js库生成二维码
- 通过Chrome Extension API获取当前标签页信息
- 使用CSS实现苹果风格界面

## 项目结构 

project/
├── manifest.json // 插件配置文件
├── popup.html // 弹出窗口HTML
├── popup.css // 样式表
├── popup.js // 功能实现
├── lib/
│ └── qrcode.min.js // 二维码生成库
└── icons/ // 插件图标
├── icon16.png
├── icon48.png
└── icon128.png


## 文件说明

### manifest.json
插件的配置文件，定义了:
- 插件的基本信息(名称、版本等)
- 权限申请(activeTab)
- 图标配置
- popup页面设置

### popup.html
弹出窗口的HTML结构，包含:
- 二维码显示区域
- favicon图标位置
- 网站名称显示区域

### popup.css
定义了插件的视觉风格:
- 苹果风格的设计语言
- 优雅的阴影效果
- 精心调整的间距和圆角

### popup.js
实现了核心功能:
- 获取当前标签页的URL、标题和favicon
- 生成二维码
- 在二维码中央显示favicon
- 显示网站名称

## 开发说明

本插件使用了以下API:
- chrome.tabs: 获取当前标签页信息
- qrcode.js: 生成二维码

## 注意事项

- 插件需要访问当前标签页的权限
- 部分网站可能未设置favicon
- 确保网络连接正常以加载favicon

## 后续优化

- [ ] 添加二维码大小调节功能
- [ ] 支持自定义二维码颜色
- [ ] 添加二维码保存功能
- [ ] 优化favicon加载失败的处理