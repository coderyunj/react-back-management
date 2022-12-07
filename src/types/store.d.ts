// 类型声明文件里面不要直接使用引入 import... from...
// import xx from "/" 这种不要写
// 改成这样的语法 import("xxx")
type RootState = ReturnType<typeof import("@/store").getState> // 全局声明

interface Window{
  __REDUX_DEVTOOLS_EXTENSION__: function;
}