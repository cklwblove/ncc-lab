import { defineConfig } from 'father';

export default defineConfig({
  prebundle: {
    // 需要预打包的依赖包名，需要安装在 `devDependencies` 中
    deps: [
      'autoprefixer'
    ],
    // 默认输出目录，有自定义需求时才需配置
    output: 'compiled',
  },
});
