---
title: 学python"第一天"，写一个抽号数程序
date: 2021-05-03 18:22:53
updated: 2021-10-6 18:22:53
tags: [python,学习]
categories: 站长的小笔记
# cover: https://cdn.jsdelivr.net/gh/masle1/p@main/img/%E6%8A%BD%E5%8F%B7%E6%95%B0%E7%A8%8B%E5%BA%8F/%E7%BC%96%E7%A8%8B%E5%9B%BE.png
# coverWidth: 1200
# coverHeight: 750
# description: 一个无聊时候用python写出来的简易抽号数的小程序。
hide: true
keywords: 
  - python
  - 随机抽号
---

> 这也是我第一次自己写程序，所以后续这个可能会根据我的认知来不断改进这个程序。

<!-- more -->

## 初始版本
这个版本感觉很粗糙，不过也没办法了。
``` bash
import random
print("---------抽号数---------")
start = input("请输入起始数字:")
last = input("请输入末尾数字:")
last = int(last)
start = int(start)
num = random.randint(start,last)
r = True
while r:
    temp = input("请按回车键抽取")
    print(num)
    print('')
    num = random.randint(start,last)
```
![vscode运行演示](https://cdn.jsdelivr.net/gh/masle1/p@main/img/how-to-write-a-random-number-program/%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA.png)
顺便打包成了exe文件，虽然只有十三行代码，但是导出为exe文件需要拖家带口打包。导致最后exe文件大小高达6.83m
![exe运行演示](https://cdn.jsdelivr.net/gh/masle1/p@main/img/how-to-write-a-random-number-program/exe%E6%BC%94%E7%A4%BA.png)
附上exe下载链接:https://cloud.189.cn/t/Y7VBrabiQbEz (访问码:8wbf)

## 第二版
这个版本引入了时间模块，抽取的时候不会显得那么生硬。并且把抽取随机数的部分给安排到循环里面，不会像原版本那么冗杂。
``` bash
import random
import time
print("-----------------------抽号数-----------------------")
start = input("请输入起始数字:")
last = input("请输入末尾数字:")
last = int(last)
start = int(start)
r = True
while r:
    num = random.randint(start,last)
    temp = input("请按回车键抽取")
    time.sleep(0.3)
    print("···")
    time.sleep(0.3)
    print("··")
    time.sleep(0.3)
    print("·")
    time.sleep(0.3)
    print(num)
    print('')

```

附上exe下载链接:
天翼云盘：https://cloud.189.cn/t/rm6ZNbE7ZVbu
蓝奏云盘：https://masle.lanzoui.com/i9yv1tgvo8d