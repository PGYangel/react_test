安装jsx预处理器
npm install babel-cli@6 babel-preset-react-app@3

执行以下命令，监听src文件夹的js，将jsx的预编译到根目录
npx babel --watch src --out-dir . --presets react-app/prod
