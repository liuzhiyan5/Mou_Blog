---
title: 开发工具 powershell
date: 2021-06-08
tags:
  - 开发工具
  - shell
categories:
  - 开发工具
---

## 前言

用过 oh-my-zsh 的小伙伴都知道有非常好看的主题和插件,其中我最喜欢的就是一个插件就是显示自己输入过的命令,但是在 windows 下面的命令行没有发现这个功能一直让我敲代码的快感 -1,一次偶然的机会发现 Powerline 有类似的功能以此介绍了大家

## Powerline安装

安装完成的效果

![image-20210608093958283](https://gitee.com/qianshilei/test/raw/master/img/image-20210608093958283.png)

![Windows 终端 Powerline PowerShell](https://gitee.com/qianshilei/test/raw/master/img/image-20210608092105902.png)

## 字体文件

开始安装之前请先安装字体文件

[Releases · microsoft/cascadia-code (github.com)](https://github.com/microsoft/cascadia-code/releases)

或

[Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher](https://www.nerdfonts.com/font-downloads)

## 安装步骤

1. 打开powershell
2. 执行命令

```shell
Install-Module posh-git -Scope CurrentUser
Install-Module oh-my-posh -Scope CurrentUser
Install-Module -Name PSReadLine -Scope CurrentUser -Force -SkipPublisherCheck
```

[Posh-Git](https://github.com/dahlbyk/posh-git) 将 Git 状态信息添加到提示，并为 Git 命令、参数、远程和分支名称添加 tab 自动补全。

[Oh-My-Posh](https://github.com/JanDeDobbeleer/oh-my-posh) 为 PowerShell 提示符提供主题功能。

![image-20210608092105902](https://gitee.com/qianshilei/test/raw/master/img/image-20210608092128256.png)



3. 全部安装完成之后导入配置

输入 `notepad $PROFILE` 打开配置文件

![image-20210608092128256](https://gitee.com/qianshilei/test/raw/master/img/image-20210608092541466.png)

点击是然后输入下面的代码

```shell
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt cert #设置主题  如果 Set-PoshPrompt 报错就使用 Set-Theme 设置主题
Set-PSReadLineOption -PredictionSource History # 设置预测文本来源为历史记录


Set-PSReadlineKeyHandler -Key Tab -Function Complete # 设置 Tab 键补全
Set-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete # 设置 Ctrl+d 为菜单补全和 Intellisense
Set-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo # 设置 Ctrl+z 为撤销
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward # 设置向上键为后向搜索历史记录
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward # 设置向下键为前向搜索历史纪录
```

4. 然后重启 powershell

![image-20210608092419436](https://gitee.com/qianshilei/test/raw/master/img/image-20210608092419436.png)



发现字体不对,此时右键标题栏选择属性-->字体修改之前拿到的字体文件

![image-20210608092541466](https://gitee.com/qianshilei/test/raw/master/img/image-20210608092548138.png)

![image-20210608092548138](https://gitee.com/qianshilei/test/raw/master/img/image-20210608093355960.png)

恢复正常

### 在 vscode 里面使用 powershell

- 在 vscode 中打开 powershell 你会发现又出现了乱码或者显示不正确,那么不用怀疑,一定是字体问题
- 打开 setting 搜索 terminal.integrated.fontFamily 修改值为  Cascadia Code PL 即可

![image-20210608093355960](https://gitee.com/qianshilei/test/raw/master/img/powerline-powershell.png)

 

### 主题预览

```shell
Get-PoshThemes #获取主题
```

[Themes | Oh My Posh](https://ohmyposh.dev/docs/themes)

## 可能遇到的问题

1. Restricted 执行策略不允许任何脚本运行。 

   AllSigned 和 RemoteSigned 执行策略可防止 Windows PowerShell 运行没有数字签名的脚本。

    本主题说明如何运行所选未签名脚本（即使在执行策略为 RemoteSigned 的情况下），还说明如何对 脚本进行签名以便您自己使用。

   有关 Windows PowerShell 执行策略的详细信息，请参阅 about_Execution_Policy。

   解决方案 :

   管理员打开 powershell

   ```shell
   get-executionpolicy
   set-executionpolicy remotesigned
   ```

   一路 Y 即可



## 参考

[Windows 终端 Powerline 设置 | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/terminal/tutorials/powerline-setup)

[PSReadLine Module - PowerShell | Microsoft Docs](https://docs.microsoft.com/zh-cn/powershell/module/psreadline/?view=powershell-7.1)

