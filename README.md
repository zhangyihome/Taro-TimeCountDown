# taro-keyboard-car

## 介绍

 本项目是基于Taro
 倒计时控件

## 使用

npm i taro-keyboard-car

在运行本项目前，确保系统已经全局安装了taro，

车牌号键盘  

示例 

import ZyCountdown from "countdown";

<ZyCountdown
  isShowHour={false}
  format={{hours: "时", minutes: "分", seconds: "秒"}}
  seconds={orderInfo.remainSeconds}
/>


