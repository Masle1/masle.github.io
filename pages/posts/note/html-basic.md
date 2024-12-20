---
title: HTML基础笔记
date: 2022-02-10 15:40:08
updated: 2022-02-10 15:40:08
tags:
    - HTML
    - 学习
    - 记录
categories:
    - 站长的小笔记
# description: 在家无聊的时候，学习了一点HTML的基础语法。怕时间一久就忘了，所以在博客记录一下笔记。
keywords: 
    - HTML
    - 学习笔记
---

## 前言
这几天在家很无聊，在各种站点不断的反复横跳。不过昨天在一个叫[三钻](https://obsidian.tridiamond.tech/)的站点上，看到了一篇[共同HTML闯关的文章](https://obsidian.tridiamond.tech/post/frontend/fcc-html5-basics.html)，“关卡”源于一个叫**freeCodeCamp**的免费学习编程的网站。其中有[官方英文版](https://www.freecodecamp.org/)|[中文论坛版](https://www.freecodecamp.one/),其中中文论坛版打不开。所以我只能用英文版，配合大佬三钻的文章来学习。

闯关的过程同时也是不断搭建一个叫做CatPhotoApp的过程噢~ 

> 好记性不如烂键盘2333

<!-- more -->

![最终成品](https://cdn.jsdelivr.net/gh/masle1/p@main/img/html-basic/CatPhotoApp.png)

## HTML

<div class="info">

> HTML 的全称是 HyperText Markup Language（超文本标签语言），它是一种用来描述网页结构的标签语言。
它采用一种特殊的语法或符号来组织网页的内容，元素通常都有开始标签和结束标签，例如标题、段落、列表。

</div>

而HTML5其实就是第五版的 HTML 规范，也是目前最新的版本。

HTML可以比作网页的基本骨架，而JavaScript可以比作让骨架动起来的关节，CSS相当于骨架外面包裹的皮肤。

那么现在就可以开始HTML的笔记了

## 开头Doctype的使用
Dovtype能够告诉浏览器，我们用的什么版本的html编写。让浏览器知道需要使用哪一个版本的html。
我们需要在 HTML 文件的头部添加`<!DOCTYPE ...>`，这里的...可以写入 HTML 的某个版本。如果是 HTML5 的话，那就是<!DOCTYPE html>即可。

注意：
- 在这个声明的代码中!和DOCTYPE都是非常重要的，而DOCTYPE也是必须大写的。然后html这个就无大小写限制了。
- 跟着这段文件 HTML 版本声明就是html元素。所有我们网页的代码和元素都必须在html元素内编写。

## HTML的结构
HTML分为头部head元素和主体body元素。

```bash
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
    <!-- CSS引用，字体引用，网页标题等等元素 -->
  </head>
  <body>
    <!-- page contents -->
    <!--页面的布局元素 -->
  </body>
</html>
```

## 标题的使用
``` bash
<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
```
HTML提供的标题有`<h1>`到`<h6>`

注意：
- h1一般作为网页的大标题
- 必须要有结束标签

## 段落标签

p是paragragh（段落）的缩写，就是我们在写文章中的段落一样，一般都是用来放信息内容的。

`<p>……</p>`

注意：
- 必须要有结束标签

## “占位”文字

<div class="info">

> Lorem ipsum 从 15 世纪开始就被广泛地使用在西方的印刷、设计领域中，在电脑排版盛行之后，这段被传统印刷产业使用几百年的无意义文字又再度流行。由于这段文字以“Lorem ipsum”起头，并且常被用于标题的测试中，所以一般称为 Lorem ipsum，简称为 Lipsum。

</div>

注意：
- lorem ipsum text”经常用于设计和排版的占位文案

## 代码注释
HTML 的注释写法开始是`<!--`，结束使用`-->`。

``` bash
<!-- <p> abc </p> -->
```

注意：
- 包裹的部分即作为注释

## HTML5元素
HTML5 具备更多丰富代表性的 HTML 标签。如：main（主要内容）、header（头部）、footer（页脚）、nav（导航）、video（视频）、article（文章）、section（区域/分段内容）等等 | [HTML标签参考手册](https://www.w3school.com.cn/tags/html_ref_byfunc.asp)

合理的使用标签，有利于方便搜索引擎优化(SEO)

使用举例
```bash
<main>
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

## 插入图片
网页中插入图片，我们使用的是img元素,然后使用元素中的src属性来指定图片地址。alt属性作为图片加载不出来时的描述。

使用举例
```bash
<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">
```
<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">
显示不出来很正常，我故意的~

注意：
- img元素是不需要结束标签的，它是属于自动关闭型元素。

## 使用锚元素实现链接跳转
a (锚) 元素是用于跳转页面，a 元素需要一个网页地址的属性叫href。也需要一个 anchor text（锚文字）。

使用举例
```bash
<a href="https://masle.top/" target="_blank">这个链接会跳转到 老哲的小客栈</a>
```
<a href="https://masle.top/" target="_blank">这个链接会跳转到 老哲的小客栈</a>

其中a元素还有一个属性target
>target属性的常用值有：
_blank：在新窗口中打开被链接文档。
_self：默认。在相同的框架中打开被链接文档。
_parent：在父框架集中打开被链接文档。
_top：在整个窗口中打开被链接文档。
_framename_：在指定的框架中打开被链接文档。

其中锚元素还可以跳转文章中的页面区域,使用哈希符号#和与标题绑定的id号进行定位。
使用举例
```bash
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

其中，我们也可以使用哈希符号添加一个死链接。这种链接有几个用途，第一种在排版的过程中还不知道需要链接哪里，第二种就是后面这个链接交给 JavaScript 处理。
```bash
<a href="#">死链接</a>
```
<a href="#">死链接</a>

当我们使用锚元素包裹img元素的时候，那么我们点击这个图片的时候就可以跳转页面了。
使用举例
```bash
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
```
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

注意:
- 锚元素必须要结束标签

## 添加有序和无序列表
添加有序列表用`<ol>`元素，添加无序列表用`<ul>`。两者都需要结束标签，两标签夹着若干个`<li>`元素作为内容。
使用举例
```BASH
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
  <p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
```
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
  <p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>

##  如何建立一个表单
表单，常用的就是给用户选项，或者给用户输入框。

表单，需要用户输入内容。那么就需要用到input元素。
注意：
- input元素是一个自我关闭型标签，所以不需要结束标签的。
- input元素中有一个type属性，这个是用来定义这个输入框的类型，这里因为我们需要文本类型，所以就是text。
- input元素中的name属性也是非常重要的，后端接受表单的输入框数据时，用的就是name属性值来获取数据的。

input还有一个属性`placeholder`（占位字符），也就是输入框中的提示词。当我们需要把一个文本输入框变成必填的时候，我们只需要在input元素中添加一个require属性,注意require属性不需要属性值，直接填写就行了。
使用举例
```bash
<input type="text" placeholder="cat photo URL" required>
```
<input type="text" placeholder="cat photo URL" required>

现在需要我们用form元素来建立一个表单,表单需要我们用一个action属性来提供一个表单提交的地址。
使用举例
```bash
<form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" required>
</form>
```
现在表单还没有提交按钮，我们需要使用button元素。并且给他的type属性一个"submit"（提交动作）。

使用举例
```bash
<form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
</form>
```
<form action="https://www.freecatphotoapp.com/submit-cat-photo" target="_blank">
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button> <!-- 注意button元素必须要结束标签包裹-->
</form>

表单中单选和多选
- 要使用单选按钮，我们需要把每一个单选的input元素包裹在一个label元素中。这时label元素就会与input元素绑定上。意思就是label中的任何文字，在点击的时候都可以选中这个选项。
- 所有相关的单选项需要有同一个name属性值才能把这些单选项组成一组选项。
- 单选项被列为一组后，才能选择这组其中一个单选项时，才会自动去除选中其他这组里面的选项。

1. 当type属性值为radio时为单选，当type属性值为checkbox时为多选。
2. 我们需要在lable元素中设置一个for属性与在input元素中的id属性值相同来使其建立链接关系。
3. 无论是多选还是单选，后端接收到的都是选项输入框的value值，所以我们需要给输入框一个value值。
4. 当我们需要默认选中的时候，可以在input元素后面，使用checked元素。

使用举例
```bash
<form action="https://www.freecatphotoapp.com/submit-cat-photo">
  <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
  <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
  <!--上面部分为单选，下面部分为多选。-->
  <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
  <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
  <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
```
<form action="https://www.freecatphotoapp.com/submit-cat-photo">
  <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
  <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
  <!--上面部分为单选，下面部分为多选。-->
  <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
  <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
  <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button> 
</form>

## 将其他元素嵌套在div元素中
知识点
- div元素，也称为分割元素，是其他元素的通用容器。
- div元素也是最常用的 HTML 元素之一。
- 与其他非自我结束元素一样，可以使用div元素来开始，然后在另一行使用`</div>`来结束。

## 终

```bash
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio"       name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

就像开头的图片一样，现在这个页面的样子十分的简陋，所以需要后续的CSS关卡来美化修饰。

等下次有时间再来吧~

***参考资料***
- [28关学会HTML与HTML5基础](https://obsidian.tridiamond.tech/post/frontend/fcc-html5-basics.html)
- [freecodecamp-basic-html](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5)
