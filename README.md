数智平台项目

项目启动
npm start/yarn start

打包开发测试包

npm run build_pre
yarn build_pre

打包上线正式包(上线前一定是正式包，最后几轮测试要正式包交给测试测试验证) 最重要！！！！！！！

npm run build
yarn build

登录说明

先配置 host 地址
127.0.0.1 t.cnsuning.com

先登录测试环境 然后再打开本地地址

切换测试环境

webpack.common.js 配置里面  
proxy： "http://mock.cnsuning.com/mock/http://witdev.cnsuning.com:8080/" mock 环境
"http://witpre.admin.cnsuning.com/", pre 测试环境
"http://witsit.admin.cnsuning.com/", pre 测试环境

1、登录测试环境地址

pre 环境地址
http://witpre.admin.cnsuning.com/app.htm#/

sit 环境地址
http://witsit.admin.cnsuning.com/app.htm#/

分支问题

Ft_Br_Dip_715_18089773

示例说明：

Ft_Br：特性分支
Dip：项目名称
715：项目上线时间
18089773：开发人工号 ，一人一分支，需要合并开发分支，打包测试、或者发布！！！！！！

Dev_Br_Dip_5： Dev 开头代表开发分支，不要在此分支开发！！！！！切记。更不要说 master 了。
