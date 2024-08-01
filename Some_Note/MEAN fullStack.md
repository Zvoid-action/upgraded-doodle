# MEAN

Node.js & Express & MongoDB & Angular

**博客引擎需求**

<img src="MEAN fullStack.assets/微信图片_20240723145923.png" style="zoom:50%;" />

**管理员页面**

使用REST API 与Angular 单页面进行交互

**博客日志使用混合架构**

<img src="MEAN fullStack.assets/e32010207f2032f61ff62ca77ef14fe.jpg" alt="e32010207f2032f61ff62ca77ef14fe" style="zoom: 33%;" />



<img src="MEAN fullStack.assets/906619ea641bd7bc6663aaea567f7d0-1721718310946.jpg" alt="906619ea641bd7bc6663aaea567f7d0" style="zoom:33%;" />



<img src="MEAN fullStack.assets/f5abab7dd741699236031c9b2035350.jpg" alt="f5abab7dd741699236031c9b2035350" style="zoom:33%;" />

## 整体规划应用程序

启动->迭代改进->直到满意

1.将视图组件封装成集合

<img src="MEAN fullStack.assets/d847ffe740e40da091c6d1aec6687bd.jpg" alt="d847ffe740e40da091c6d1aec6687bd" style="zoom:25%;" />

2.应用程序的架构

+ 从API开始

  <img src="MEAN fullStack.assets/9bc4bc91309cc929d16bae0c1f00ef5.jpg" alt="9bc4bc91309cc929d16bae0c1f00ef5" style="zoom:25%;" />

+ 架构选择

<img src="MEAN fullStack.assets/60ea07d82d903cb353947ebe20dbbd1.jpg" alt="60ea07d82d903cb353947ebe20dbbd1" style="zoom: 50%;" />

**将所有内容封装到Express项目中**



------

### 阶段

一、静态网站

快速确定布局

确保用户流程合理

二、设计数据模型并创建数据库

根据需求定义数据模型

三、建立数据API

REST API 允许应用程序与数据库交互

四、让应用程序与API通信

五、优化应用

### Express MVC

模型持有数据，控制器处理数据，视图渲染处理后的数据

<img src="MEAN fullStack.assets/4c745fdead34e33e3705bde6e54507e.jpg" alt="4c745fdead34e33e3705bde6e54507e" style="zoom:33%;" />



<img src="MEAN fullStack.assets/bc96b5e2b674b93609b187042dac1dd.jpg" alt="bc96b5e2b674b93609b187042dac1dd" style="zoom: 50%;" />



### Express 路由

页面与URL的映射关系

<img src="MEAN fullStack.assets/97a7c3eb6cca4121216009dc254c205.jpg" alt="97a7c3eb6cca4121216009dc254c205" style="zoom: 50%;" />



<img src="MEAN fullStack.assets/c979c7d954df7107f51d414e801f8c1-1721719263182.jpg" alt="c979c7d954df7107f51d414e801f8c1" style="zoom: 33%;" />

### 构建前端模板

<img src="MEAN fullStack.assets/f15c3359ca2bf7b4fbce870ec3e4390.jpg" alt="f15c3359ca2bf7b4fbce870ec3e4390" style="zoom:50%;" />



### Mongoose

![78313fc2b004b05f259f7b48585986d](MEAN fullStack.assets/78313fc2b004b05f259f7b48585986d.jpg)



### RESTful URL

+ 创建新条目
+ 读取包含多个条目的列表
+ 读取特定条目
+ 更新特定条目
+ 删除特定条目

创建 app_api文件夹 -> 路由、控制、模型

json



### 内部API 交互

request

### 前端集成Angular

#### 优化

解耦出 常用的类 单独定义