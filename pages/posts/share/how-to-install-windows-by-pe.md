---
title: 关于使用Pe安装系统的图文教程，适用于新手小白
date: 2021-05-1 8:10:35
updated: 2022-1-22 8:10:35
tags: 系统安装
categories: 站长的小笔记
# cover: https://testingcf.jsdelivr.net/gh/masle1/p@main/img/pejiaocheng/%E5%B0%81%E9%9D%A2.png
# coverWidth: 1200
# coverHeight: 750
keywords: 
  - PE安装教程
  - PE系统
# description: 系统安装这个技能，已经慢慢的成为电脑用户需要学会的一项技能。所以本期教程就写关于使用PE重装系统的教程。
---


### 关于为什么要写这篇教程
系统安装这个技能，已经慢慢的成为电脑用户需要学会的一项技能。所以本期教程就写关于使用PE重装系统的教程。
### 为什么是使用PE
关于系统安装，目前我知道的有三种方式
<div class="info">

> 1. 在电脑系统中安装直接安装
  2. 用UltraISO软件将系统镜像写入优盘
  3. 使用PE安装
</div>

<!-- more -->


#### 原因
<div class="info">

> 1. 进入电脑系统直接安装，出错率较高，不建议
  2. 以iso方式写入优盘，感觉有点浪费优盘的空间，虽然目前已经有软件可以刻录多个iso。

 </div>

### 什么是PE
PE相当于是一个便捷的windows系统，不过是十分精简的系统，不然就不可能用优盘也可以流畅运行了。但是用来维护系统和重装系统已经足够了

## 教程正文

 ### 安装前准备
<div class="success">

> 1. 一个至少8G的优盘（推荐使用usb3.0的优盘，这样才能节省更多系统安装时间）
 2. 一台能联网的电脑
 3. 下载一个系统镜像 （系统文章[传送门](https://masle.top/categories/%E7%B3%BB%E7%BB%9F%E5%B0%81%E8%A3%85/))
 4. 举一反三的头脑（没有的话，就忽略这个第四点吧-0-）

</div>


 ### 制作PE启动盘
 关于pe启动盘我比较推荐[优启通](https://www.itsk.com/thread-416335-1-1.html)、[微PE](http://www.wepe.com.cn/)、[FirPE](https://firpe.cn/)这几个都是纯净的PE。如果你不想你安装的系统浏览器主页被劫持或者被安装流氓软件，那就别用某毛桃、某白菜等PE。本文演示使用的是[优启通](https://www.itsk.com/thread-416335-1-1.html)，进入官网下载之后，插入优盘，打开软件全新制作
 <div class="warning">

>   在此可以直接点击PE名称直接进入官网，防止自己搜索误入盗版网站

</div>

打开下载好的pe，直接全新制作
![PE安装界面](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/%E4%BC%98%E5%90%AF%E9%80%9A%E5%88%B6%E4%BD%9C1.png)
![全新制作](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/%E4%BC%98%E5%90%AF%E9%80%9A%E5%88%B6%E4%BD%9C2.png)
![制作完成](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/%E4%BC%98%E5%90%AF%E9%80%9A%E5%88%B6%E4%BD%9C3.png)

然后将下载的系统拷贝到刚刚做好的PE启动盘中，这时候之前文章的系统就可以使用啦~[传送门](https://masle.top/categories/%E7%B3%BB%E7%BB%9F%E5%B0%81%E8%A3%85/)
 ### 进入PE
进入PE这个对部分人来说可能有点难度。有一些电脑可能装机人员当时给你安装系统的时候已经把UEFI开启并且将其设置为第一启动项，那你直接优盘插入开机即可进入PE。
没有的话，笔记本电脑可以通过上网搜索电脑品牌的uefi快捷启动键（前提是主板uefi已经开启，没有开启的话进入bios开启即可）。![快捷启动键](https://exp-picture.cdn.bcebos.com/57af657f860e7c75b6077841650d3aceabd7bf4b.jpg)
台式机的话，开机的是一直按del键（狂戳），大多数台式机都可以通过这种方式进入bios。
电脑开机的是也有提示启动快捷键。
>  在此推荐使用uefi启动

如图，开机时会提示快捷键，不过这个显示快捷键的时间很短。del键就是进入bios设置，f12就是进入启动列表![开机启动提示](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/%E4%B8%BB%E6%9D%BF%E5%90%AF%E5%8A%A8%E6%8F%90%E7%A4%BA.jpg)
如果是通过UEFI启动，那就是出现这个界面，直接按回车就行了![UEFI启动界面](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/PE%20UEFI%E5%90%AF%E5%8A%A8.jpg)如果是Bios启动那就是这个界面，根据电脑配置来选择系统就行，正常都是选择win10![bios启动PE界面](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/PE%20bios%E5%90%AF%E5%8A%A8.jpg)这个时候我们就成功进入PE桌面了![pe桌面](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/PE%E6%A1%8C%E9%9D%A2.jpg)
 ### 安装系统
等待PE系统软件加载完成后，打开桌面的EIX系统安装这个软件。然后第一步选择要安装的系统镜像，第二步选择想要安装的系统分区，第三步点击一键恢复![eix安装](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/EIX1.png)然后其余设置根据下面的图片来![eix安装](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/EIX2.png)![eix安装](https://testingcf.jsdelivr.net/gh/masle1/p@main/img/how-to-install-windows-by-pe/pe%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85%E8%BF%9B%E8%A1%8C%E4%B8%AD.png)
 ### 完成安装
 由于系统是全程自动部署安装，所以自动等待安装完成即可。如果使用的是无万能驱动版或者官方原版镜像则需要进入系统后自行下载驱动精灵，将驱动打好。我封装的系统已经是优化完了的，如果是官方原版镜像安装的可以去百度或者酷安寻找新系统装完的优化教程。（如果你不在意或者是电脑性能强横，那这个优化就不是特别必要了）