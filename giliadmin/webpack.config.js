import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

export const resolve = {
  fallback: {
    "assert": require.resolve("assert/"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "net": require.resolve("net-browserify"),
    "tls": require.resolve("tls-browserify")
  }
};

export const plugins = [
  new NodePolyfillPlugin()
];
