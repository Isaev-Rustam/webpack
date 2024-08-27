!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.MyLibrary = t())
    : (e.MyLibrary = t());
})(self, () =>
  (() => {
    'use strict';
    var e = {
        195: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.buildDevServer = function (e) {
              var t;
              return {
                port: null !== (t = e.port) && void 0 !== t ? t : 8e3,
                open: !0,
                historyApiFallback: !0,
                hot: !0,
              };
            });
        },
        436: (e, t) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.buildResolvers = function (e) {
              return {
                extensions: ['.tsx', '.ts', '.js'],
                alias: { '@': e.paths.src },
              };
            });
        },
        944: (e, t, r) => {
          Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.buildWebpack = function (e) {
              const { mode: t, paths: r } = e,
                u = 'development' === t;
              return {
                mode: null != t ? t : 'development',
                entry: r.entry,
                output: {
                  path: r.output,
                  filename: '[name].[contenthash].js',
                  clean: !0,
                },
                resolve: (0, n.buildResolvers)(e),
                devtool: u ? 'eval-cheap-module-source-map' : 'source-map',
                devServer: u ? (0, o.buildDevServer)(e) : void 0,
              };
            });
          const o = r(195),
            n = r(436);
        },
      },
      t = {};
    function r(o) {
      var n = t[o];
      if (void 0 !== n) return n.exports;
      var u = (t[o] = { exports: {} });
      return e[o](u, u.exports, r), u.exports;
    }
    var o = {};
    return (
      (() => {
        var e = o;
        Object.defineProperty(e, '__esModule', { value: !0 }),
          (e.buildWebpack = void 0);
        var t = r(944);
        Object.defineProperty(e, 'buildWebpack', {
          enumerable: !0,
          get: function () {
            return t.buildWebpack;
          },
        });
      })(),
      o
    );
  })()
);
