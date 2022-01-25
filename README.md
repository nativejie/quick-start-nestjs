
## 介绍

通用<a href="https://nestjs.com" target="_blank">Nest</a>的模板，省去不必要的时间。

## 功能
+ ✅ swagger 
+ ✅ typeorm - mysql
+ ✅ helmet
+ ✅ winston log
+ ✅ class-validator
+ ❌ 权限控制
+ ❌ 表结构到实体的生成
+ ❌ `utils`的完善
+ ...

## 安装
使用npm
```bash
$ npm install
```
使用yarn
```bash
$ yarn
```

## 启动
使用npm
```bash
# 开发环境
$ npm run start:dev

# 生产环境
$ npm run start:prod
```
使用yarn
```bash
# 开发环境
$ yarn start:dev

# 生产环境
$ yarn start:prod
```
使用pm2
```bash
# 开发环境
$ yarn pm2:dev

# 生产环境
$ yarn pm2:prod
```
## 测试

```bash
# 单元测试
$ npm run test

# ee2e测试
$ npm run test:e2e

# 覆盖率测试
$ npm run test:cov
```


## 环境变量配置

环境变量均写在`env`文件夹下，每添加一套配置文件都需要在`src/config`中添加一个类。


## 代码自动生成
执行
```bash
$ yarn plop
```
输入完名称后，会自动生成一套`entity`、`service`、`controller`、`module`层。
并且`service`和`controller`层中会有一套基础的CRUD接口。

如果想定制生成自己需要的可更改`plop-template`目录下的模板文件
