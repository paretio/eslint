interface Config {
  [Symbol.iterator](): ArrayIterator<unknown>;
}

declare module "@paretio/eslint" {
  declare const globals: unknown;
  declare const config: Config;

  export default config;
  export { globals };
}
