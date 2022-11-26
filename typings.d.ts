// declare module '*.css' {
//   const exports: { [exportName: string]: string };
//   export = exports;
// }
declare module "*.module.css" {
  const exports: { [exportName: string]: string };
  export = exports;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
// declare module '*.module.css' {
//   const content: Record<string, string>;
//   export default content;
// }
