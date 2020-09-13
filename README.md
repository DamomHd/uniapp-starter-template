# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 错误处理
Error: EPERM: operation not permitted, unlink
如若出现此问题，按下方步骤解决
1.删除项目根目录下的package-lock.json文件；
2.打开cmd，运行npm cache clean --force;
3.重新在cmd中执行cnpm install;
