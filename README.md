# taro-time-countdown

## 介绍

 本项目是基于Taro
 倒计时控件

## 使用

npm i taro-time-countdown

在运行本项目前，确保系统已经全局安装了taro，

车牌号键盘  

示例 

import ZyCountdown from "countdown";

<ZyCountdown
  isShowDay={true}
  format={{day: "天",hours: "时", minutes: "分", seconds: "秒"}}
  seconds={666}
/>


