// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _unleashProxyClient = require("unleash-proxy-client");
const unleash = new (0, _unleashProxyClient.UnleashClient)({
    url: "https://app.unleash-hosted.com/demo/api/frontend",
    clientKey: "codesandbox:dev.b32907f5ced021c0443ad770b371c81191683c96e6ae8e003876d509",
    appName: "javascript-codesandbox"
});
unleash.start();
setInterval(()=>{
    document.getElementById("app").innerHTML = `Flag is ${unleash.isEnabled("example-flag") ? "enabled" : "disabled"}`;
}, 1000);

},{"unleash-proxy-client":"7Kd8S"}],"7Kd8S":[function(require,module,exports) {
!function(t, e) {
    e(exports);
}(this, function(t) {
    "use strict";
    var e = function(t, r) {
        return e = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for(var r in e)Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }, e(t, r);
    };
    var r = function() {
        return r = Object.assign || function(t) {
            for(var e, r = 1, n = arguments.length; r < n; r++)for(var o in e = arguments[r])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
        }, r.apply(this, arguments);
    };
    function n(t, e, r, n) {
        return new (r || (r = Promise))(function(o, i) {
            function s(t) {
                try {
                    c(n.next(t));
                } catch (t) {
                    i(t);
                }
            }
            function a(t) {
                try {
                    c(n.throw(t));
                } catch (t) {
                    i(t);
                }
            }
            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e);
                })).then(s, a);
            }
            c((n = n.apply(t, e || [])).next());
        });
    }
    function o(t, e) {
        var r, n, o, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1];
            },
            trys: [],
            ops: []
        }, s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this;
        }), s;
        function a(a) {
            return function(c) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for(; s && (s = 0, a[0] && (i = 0)), i;)try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch(n = 0, o && (a = [
                            2 & a[0],
                            o.value
                        ]), a[0]){
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [
                                    0
                                ];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    i = 0;
                                    continue;
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break;
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break;
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break;
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue;
                        }
                        a = e.call(t, i);
                    } catch (t) {
                        a = [
                            6,
                            t
                        ], n = 0;
                    } finally{
                        r = o = 0;
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    };
                }([
                    a,
                    c
                ]);
            };
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var i = {
        exports: {}
    };
    function s() {}
    s.prototype = {
        on: function(t, e, r) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: r
            }), this;
        },
        once: function(t, e, r) {
            var n = this;
            function o() {
                n.off(t, o), e.apply(r, arguments);
            }
            return o._ = e, this.on(t, o, r);
        },
        emit: function(t) {
            for(var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, o = r.length; n < o; n++)r[n].fn.apply(r[n].ctx, e);
            return this;
        },
        off: function(t, e) {
            var r = this.e || (this.e = {}), n = r[t], o = [];
            if (n && e) for(var i = 0, s = n.length; i < s; i++)n[i].fn !== e && n[i].fn._ !== e && o.push(n[i]);
            return o.length ? r[t] = o : delete r[t], this;
        }
    }, i.exports = s;
    var a = i.exports.TinyEmitter = s, c = function(t) {
        var e = t[1];
        return null != e;
    }, u = function(t) {
        var e = t.properties, r = void 0 === e ? {} : e, n = function(t, e) {
            var r = {};
            for(var n in t)Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for(n = Object.getOwnPropertySymbols(t); o < n.length; o++)e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
            }
            return r;
        }(t, [
            "properties"
        ]), o = function(t) {
            return Object.entries(t).sort(function(t, e) {
                var r = t[0], n = e[0];
                return r.localeCompare(n, void 0);
            });
        };
        return JSON.stringify([
            o(n),
            o(r)
        ]);
    }, l = function(t) {
        return n(void 0, void 0, void 0, function() {
            var e;
            return o(this, function(r) {
                switch(r.label){
                    case 0:
                        e = u(t), r.label = 1;
                    case 1:
                        return r.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]), [
                            4,
                            (i = e, n(void 0, void 0, void 0, function() {
                                var t, e, r, n, s;
                                return o(this, function(o) {
                                    switch(o.label){
                                        case 0:
                                            if (t = "undefined" != typeof globalThis && (null === (n = globalThis.crypto) || void 0 === n ? void 0 : n.subtle) ? null === (s = globalThis.crypto) || void 0 === s ? void 0 : s.subtle : void 0, "undefined" == typeof TextEncoder || !(null == t ? void 0 : t.digest) || "undefined" == typeof Uint8Array) throw new Error("Hashing function not available");
                                            return e = (new TextEncoder).encode(i), [
                                                4,
                                                t.digest("SHA-256", e)
                                            ];
                                        case 1:
                                            return r = o.sent(), [
                                                2,
                                                Array.from(new Uint8Array(r)).map(function(t) {
                                                    return t.toString(16).padStart(2, "0");
                                                }).join("")
                                            ];
                                    }
                                });
                            }))
                        ];
                    case 2:
                        return [
                            2,
                            r.sent()
                        ];
                    case 3:
                        return r.sent(), [
                            2,
                            e
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
                var i;
            });
        });
    }, h = function() {}, p = function() {
        function t(t) {
            var e = t.onError, r = t.onSent, n = t.appName, o = t.metricsInterval, i = t.disableMetrics, s = void 0 !== i && i, a = t.url, c = t.clientKey, u = t.fetch, l = t.headerName, p = t.customHeaders, f = void 0 === p ? {} : p, d = t.metricsIntervalInitial;
            this.onError = e, this.onSent = r || h, this.disabled = s, this.metricsInterval = 1e3 * o, this.metricsIntervalInitial = 1e3 * d, this.appName = n, this.url = a instanceof URL ? a : new URL(a), this.clientKey = c, this.bucket = this.createEmptyBucket(), this.fetch = u, this.headerName = l, this.customHeaders = f;
        }
        return t.prototype.start = function() {
            var t = this;
            if (this.disabled) return !1;
            "number" == typeof this.metricsInterval && this.metricsInterval > 0 && (this.metricsIntervalInitial > 0 ? setTimeout(function() {
                t.startTimer(), t.sendMetrics();
            }, this.metricsIntervalInitial) : this.startTimer());
        }, t.prototype.stop = function() {
            this.timer && (clearTimeout(this.timer), delete this.timer);
        }, t.prototype.createEmptyBucket = function() {
            return {
                start: new Date,
                stop: null,
                toggles: {}
            };
        }, t.prototype.getHeaders = function() {
            var t, e = ((t = {})[this.headerName] = this.clientKey, t.Accept = "application/json", t["Content-Type"] = "application/json", t);
            return Object.entries(this.customHeaders).filter(c).forEach(function(t) {
                var r = t[0], n = t[1];
                return e[r] = n;
            }), e;
        }, t.prototype.sendMetrics = function() {
            return n(this, void 0, void 0, function() {
                var t, e, r;
                return o(this, function(n) {
                    switch(n.label){
                        case 0:
                            if (t = "".concat(this.url, "/client/metrics"), e = this.getPayload(), this.bucketIsEmpty(e)) return [
                                2
                            ];
                            n.label = 1;
                        case 1:
                            return n.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]), [
                                4,
                                this.fetch(t, {
                                    cache: "no-cache",
                                    method: "POST",
                                    headers: this.getHeaders(),
                                    body: JSON.stringify(e)
                                })
                            ];
                        case 2:
                            return n.sent(), this.onSent(e), [
                                3,
                                4
                            ];
                        case 3:
                            return r = n.sent(), console.error("Unleash: unable to send feature metrics", r), this.onError(r), [
                                3,
                                4
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
        }, t.prototype.count = function(t, e) {
            return !(this.disabled || !this.bucket) && (this.assertBucket(t), this.bucket.toggles[t][e ? "yes" : "no"]++, !0);
        }, t.prototype.countVariant = function(t, e) {
            return !(this.disabled || !this.bucket) && (this.assertBucket(t), this.bucket.toggles[t].variants[e] ? this.bucket.toggles[t].variants[e] += 1 : this.bucket.toggles[t].variants[e] = 1, !0);
        }, t.prototype.assertBucket = function(t) {
            if (this.disabled || !this.bucket) return !1;
            this.bucket.toggles[t] || (this.bucket.toggles[t] = {
                yes: 0,
                no: 0,
                variants: {}
            });
        }, t.prototype.startTimer = function() {
            var t = this;
            this.timer = setInterval(function() {
                t.sendMetrics();
            }, this.metricsInterval);
        }, t.prototype.bucketIsEmpty = function(t) {
            return 0 === Object.keys(t.bucket.toggles).length;
        }, t.prototype.getPayload = function() {
            var t = r(r({}, this.bucket), {
                stop: new Date
            });
            return this.bucket = this.createEmptyBucket(), {
                bucket: t,
                appName: this.appName,
                instanceId: "browser"
            };
        }, t;
    }(), f = function() {
        function t() {
            this.store = new Map;
        }
        return t.prototype.save = function(t, e) {
            return n(this, void 0, void 0, function() {
                return o(this, function(r) {
                    return this.store.set(t, e), [
                        2
                    ];
                });
            });
        }, t.prototype.get = function(t) {
            return n(this, void 0, void 0, function() {
                return o(this, function(e) {
                    return [
                        2,
                        this.store.get(t)
                    ];
                });
            });
        }, t;
    }(), d = function() {
        function t(t) {
            void 0 === t && (t = "unleash:repository"), this.prefix = t;
        }
        return t.prototype.save = function(t, e) {
            return n(this, void 0, void 0, function() {
                var r, n;
                return o(this, function(o) {
                    r = JSON.stringify(e), n = "".concat(this.prefix, ":").concat(t);
                    try {
                        window.localStorage.setItem(n, r);
                    } catch (t) {
                        console.error(t);
                    }
                    return [
                        2
                    ];
                });
            });
        }, t.prototype.get = function(t) {
            try {
                var e = "".concat(this.prefix, ":").concat(t), r = window.localStorage.getItem(e);
                return r ? JSON.parse(r) : void 0;
            } catch (t) {
                console.error(t);
            }
        }, t;
    }();
    let v;
    const m = new Uint8Array(16);
    function g() {
        if (!v && (v = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !v)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return v(m);
    }
    const y = [];
    for(let t = 0; t < 256; ++t)y.push((t + 256).toString(16).slice(1));
    var b = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
    };
    function T(t, e, r) {
        if (b.randomUUID && !e && !t) return b.randomUUID();
        const n = (t = t || {}).random || (t.rng || g)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
            r = r || 0;
            for(let t = 0; t < 16; ++t)e[r + t] = n[t];
            return e;
        }
        return function(t, e = 0) {
            return y[t[e + 0]] + y[t[e + 1]] + y[t[e + 2]] + y[t[e + 3]] + "-" + y[t[e + 4]] + y[t[e + 5]] + "-" + y[t[e + 6]] + y[t[e + 7]] + "-" + y[t[e + 8]] + y[t[e + 9]] + "-" + y[t[e + 10]] + y[t[e + 11]] + y[t[e + 12]] + y[t[e + 13]] + y[t[e + 14]] + y[t[e + 15]];
        }(n);
    }
    var w = function() {
        function t() {}
        return t.prototype.generateEventId = function() {
            return T();
        }, t.prototype.createImpressionEvent = function(t, e, n, o, i, s) {
            var a = this.createBaseEvent(t, e, n, o, i);
            return s ? r(r({}, a), {
                variant: s
            }) : a;
        }, t.prototype.createBaseEvent = function(t, e, r, n, o) {
            return {
                eventType: n,
                eventId: this.generateEventId(),
                context: t,
                enabled: e,
                featureName: r,
                impressionData: o
            };
        }, t;
    }(), E = [
        "userId",
        "sessionId",
        "remoteAddress",
        "currentTime"
    ], S = function(t) {
        return E.includes(t);
    }, I = {
        INIT: "initialized",
        ERROR: "error",
        READY: "ready",
        UPDATE: "update",
        IMPRESSION: "impression",
        SENT: "sent",
        RECOVERED: "recovered"
    }, x = "isEnabled", R = "getVariant", O = {
        name: "disabled",
        enabled: !1,
        feature_enabled: !1
    }, k = "repo", N = "repoLastUpdateTimestamp", A = function() {
        try {
            if ("undefined" != typeof window && "fetch" in window) return fetch.bind(window);
            if ("fetch" in globalThis) return fetch.bind(globalThis);
        } catch (t) {
            console.error('Unleash failed to resolve "fetch"', t);
        }
    }, U = function(t) {
        function i(e) {
            var n = e.storageProvider, o = e.url, i = e.clientKey, s = e.disableRefresh, a = void 0 !== s && s, c = e.refreshInterval, u = void 0 === c ? 30 : c, l = e.metricsInterval, h = void 0 === l ? 30 : l, v = e.metricsIntervalInitial, m = void 0 === v ? 2 : v, g = e.disableMetrics, y = void 0 !== g && g, b = e.appName, T = e.environment, E = void 0 === T ? "default" : T, S = e.context, x = e.fetch, R = void 0 === x ? A() : x, O = e.createAbortController, k = void 0 === O ? function() {
                try {
                    if ("undefined" != typeof window && "AbortController" in window) return function() {
                        return new window.AbortController;
                    };
                    if ("fetch" in globalThis) return function() {
                        return new globalThis.AbortController;
                    };
                } catch (t) {
                    console.error('Unleash failed to resolve "AbortController" factory', t);
                }
            }() : O, N = e.bootstrap, U = e.bootstrapOverride, D = void 0 === U || U, P = e.headerName, j = void 0 === P ? "Authorization" : P, C = e.customHeaders, L = void 0 === C ? {} : C, H = e.impressionDataAll, M = void 0 !== H && H, F = e.usePOSTrequests, _ = void 0 !== F && F, K = e.experimental, V = t.call(this) || this;
            if (V.toggles = [], V.etag = "", V.readyEventEmitted = !1, V.fetchedFromServer = !1, V.usePOSTrequests = !1, V.started = !1, !o) throw new Error("url is required");
            if (!i) throw new Error("clientKey is required");
            if (!b) throw new Error("appName is required.");
            return V.eventsHandler = new w, V.impressionDataAll = M, V.toggles = N && N.length > 0 ? N : [], V.url = o instanceof URL ? o : new URL(o), V.clientKey = i, V.headerName = j, V.customHeaders = L, V.storage = n || ("undefined" != typeof window ? new d : new f), V.refreshInterval = a ? 0 : 1e3 * u, V.context = r({
                appName: b,
                environment: E
            }, S), V.usePOSTrequests = _, V.sdkState = "initializing", V.experimental = r({}, K), (null == K ? void 0 : K.togglesStorageTTL) && (null == K ? void 0 : K.togglesStorageTTL) > 0 && (V.experimental.togglesStorageTTL = 1e3 * K.togglesStorageTTL), V.lastRefreshTimestamp = 0, V.ready = new Promise(function(t) {
                V.init().then(t).catch(function(e) {
                    console.error(e), V.sdkState = "error", V.emit(I.ERROR, e), V.lastError = e, t();
                });
            }), R || console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'), k || console.error('Unleash: You must either provide your own "AbortController" implementation or run in an environment where "AbortController" is available.'), V.fetch = R, V.createAbortController = k, V.bootstrap = N && N.length > 0 ? N : void 0, V.bootstrapOverride = D, V.metrics = new p({
                onError: V.emit.bind(V, I.ERROR),
                onSent: V.emit.bind(V, I.SENT),
                appName: b,
                metricsInterval: h,
                disableMetrics: y,
                url: V.url,
                clientKey: i,
                fetch: R,
                headerName: j,
                customHeaders: L,
                metricsIntervalInitial: m
            }), V;
        }
        return function(t, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
            function n() {
                this.constructor = t;
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n);
        }(i, t), i.prototype.getAllToggles = function() {
            return function(t, e, r) {
                if (r || 2 === arguments.length) for(var n, o = 0, i = e.length; o < i; o++)!n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                return t.concat(n || Array.prototype.slice.call(e));
            }([], this.toggles, !0);
        }, i.prototype.isEnabled = function(t) {
            var e, r = this.toggles.find(function(e) {
                return e.name === t;
            }), n = !!r && r.enabled;
            if (this.metrics.count(t, n), (null == r ? void 0 : r.impressionData) || this.impressionDataAll) {
                var o = this.eventsHandler.createImpressionEvent(this.context, n, t, x, null !== (e = null == r ? void 0 : r.impressionData) && void 0 !== e ? e : void 0);
                this.emit(I.IMPRESSION, o);
            }
            return n;
        }, i.prototype.getVariant = function(t) {
            var e, n = this.toggles.find(function(e) {
                return e.name === t;
            }), o = (null == n ? void 0 : n.enabled) || !1, i = n ? n.variant : O;
            if (i.name && this.metrics.countVariant(t, i.name), this.metrics.count(t, o), (null == n ? void 0 : n.impressionData) || this.impressionDataAll) {
                var s = this.eventsHandler.createImpressionEvent(this.context, o, t, R, null !== (e = null == n ? void 0 : n.impressionData) && void 0 !== e ? e : void 0, i.name);
                this.emit(I.IMPRESSION, s);
            }
            return r(r({}, i), {
                feature_enabled: o
            });
        }, i.prototype.updateToggles = function() {
            return n(this, void 0, void 0, function() {
                var t = this;
                return o(this, function(e) {
                    switch(e.label){
                        case 0:
                            return this.timerRef || this.fetchedFromServer ? [
                                4,
                                this.fetchToggles()
                            ] : [
                                3,
                                2
                            ];
                        case 1:
                            return e.sent(), [
                                3,
                                4
                            ];
                        case 2:
                            return this.started ? [
                                4,
                                new Promise(function(e) {
                                    var r = function() {
                                        t.fetchToggles().then(function() {
                                            t.off(I.READY, r), e();
                                        });
                                    };
                                    t.once(I.READY, r);
                                })
                            ] : [
                                3,
                                4
                            ];
                        case 3:
                            e.sent(), e.label = 4;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
        }, i.prototype.updateContext = function(t) {
            return n(this, void 0, void 0, function() {
                var e;
                return o(this, function(n) {
                    switch(n.label){
                        case 0:
                            return (t.appName || t.environment) && console.warn("appName and environment are static. They can't be updated with updateContext."), e = {
                                environment: this.context.environment,
                                appName: this.context.appName,
                                sessionId: this.context.sessionId
                            }, this.context = r(r({}, e), t), [
                                4,
                                this.updateToggles()
                            ];
                        case 1:
                            return n.sent(), [
                                2
                            ];
                    }
                });
            });
        }, i.prototype.getContext = function() {
            return r({}, this.context);
        }, i.prototype.setContextField = function(t, e) {
            var n, o;
            if (S(t)) this.context = r(r({}, this.context), ((n = {})[t] = e, n));
            else {
                var i = r(r({}, this.context.properties), ((o = {})[t] = e, o));
                this.context = r(r({}, this.context), {
                    properties: i
                });
            }
            this.updateToggles();
        }, i.prototype.removeContextField = function(t) {
            var e;
            S(t) ? this.context = r(r({}, this.context), ((e = {})[t] = void 0, e)) : "object" == typeof this.context.properties && delete this.context.properties[t], this.updateToggles();
        }, i.prototype.setReady = function() {
            this.readyEventEmitted = !0, this.emit(I.READY);
        }, i.prototype.init = function() {
            return n(this, void 0, void 0, function() {
                var t, e, n;
                return o(this, function(o) {
                    switch(o.label){
                        case 0:
                            return [
                                4,
                                this.resolveSessionId()
                            ];
                        case 1:
                            return t = o.sent(), this.context = r({
                                sessionId: t
                            }, this.context), e = this, [
                                4,
                                this.storage.get(k)
                            ];
                        case 2:
                            return e.toggles = o.sent() || [], n = this, [
                                4,
                                this.getLastRefreshTimestamp()
                            ];
                        case 3:
                            return n.lastRefreshTimestamp = o.sent(), !this.bootstrap || !this.bootstrapOverride && 0 !== this.toggles.length ? [
                                3,
                                6
                            ] : [
                                4,
                                this.storage.save(k, this.bootstrap)
                            ];
                        case 4:
                            return o.sent(), this.toggles = this.bootstrap, this.sdkState = "healthy", [
                                4,
                                this.storeLastRefreshTimestamp()
                            ];
                        case 5:
                            o.sent(), this.setReady(), o.label = 6;
                        case 6:
                            return this.sdkState = "healthy", this.emit(I.INIT), [
                                2
                            ];
                    }
                });
            });
        }, i.prototype.start = function() {
            return n(this, void 0, void 0, function() {
                var t, e = this;
                return o(this, function(r) {
                    switch(r.label){
                        case 0:
                            return this.started = !0, this.timerRef ? (console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."), [
                                2
                            ]) : [
                                4,
                                this.ready
                            ];
                        case 1:
                            return r.sent(), this.metrics.start(), t = this.refreshInterval, [
                                4,
                                this.initialFetchToggles()
                            ];
                        case 2:
                            return r.sent(), t > 0 && (this.timerRef = setInterval(function() {
                                return e.fetchToggles();
                            }, t)), [
                                2
                            ];
                    }
                });
            });
        }, i.prototype.stop = function() {
            this.timerRef && (clearInterval(this.timerRef), this.timerRef = void 0), this.metrics.stop();
        }, i.prototype.isReady = function() {
            return this.readyEventEmitted;
        }, i.prototype.getError = function() {
            return "error" === this.sdkState ? this.lastError : void 0;
        }, i.prototype.sendMetrics = function() {
            return this.metrics.sendMetrics();
        }, i.prototype.resolveSessionId = function() {
            return n(this, void 0, void 0, function() {
                var t;
                return o(this, function(e) {
                    switch(e.label){
                        case 0:
                            return this.context.sessionId ? [
                                2,
                                this.context.sessionId
                            ] : [
                                4,
                                this.storage.get("sessionId")
                            ];
                        case 1:
                            return (t = e.sent()) ? [
                                3,
                                3
                            ] : (t = Math.floor(1e9 * Math.random()), [
                                4,
                                this.storage.save("sessionId", t.toString(10))
                            ]);
                        case 2:
                            e.sent(), e.label = 3;
                        case 3:
                            return [
                                2,
                                t.toString(10)
                            ];
                    }
                });
            });
        }, i.prototype.getHeaders = function() {
            var t, e = this.usePOSTrequests, r = ((t = {})[this.headerName] = this.clientKey, t.Accept = "application/json", t);
            return e && (r["Content-Type"] = "application/json"), this.etag && (r["If-None-Match"] = this.etag), Object.entries(this.customHeaders).filter(c).forEach(function(t) {
                var e = t[0], n = t[1];
                return r[e] = n;
            }), r;
        }, i.prototype.storeToggles = function(t) {
            return n(this, void 0, void 0, function() {
                return o(this, function(e) {
                    switch(e.label){
                        case 0:
                            return this.toggles = t, this.emit(I.UPDATE), [
                                4,
                                this.storage.save(k, t)
                            ];
                        case 1:
                            return e.sent(), [
                                2
                            ];
                    }
                });
            });
        }, i.prototype.isTogglesStorageTTLEnabled = function() {
            var t;
            return !!((null === (t = this.experimental) || void 0 === t ? void 0 : t.togglesStorageTTL) && this.experimental.togglesStorageTTL > 0);
        }, i.prototype.isUpToDate = function() {
            var t;
            if (!this.isTogglesStorageTTLEnabled()) return !1;
            var e = Date.now(), r = (null === (t = this.experimental) || void 0 === t ? void 0 : t.togglesStorageTTL) || 0;
            return this.lastRefreshTimestamp > 0 && this.lastRefreshTimestamp <= e && e - this.lastRefreshTimestamp <= r;
        }, i.prototype.getLastRefreshTimestamp = function() {
            return n(this, void 0, void 0, function() {
                var t, e;
                return o(this, function(r) {
                    switch(r.label){
                        case 0:
                            return this.isTogglesStorageTTLEnabled() ? [
                                4,
                                this.storage.get(N)
                            ] : [
                                3,
                                3
                            ];
                        case 1:
                            return t = r.sent(), [
                                4,
                                l(this.context)
                            ];
                        case 2:
                            return e = r.sent(), [
                                2,
                                (null == t ? void 0 : t.key) === e ? t.timestamp : 0
                            ];
                        case 3:
                            return [
                                2,
                                0
                            ];
                    }
                });
            });
        }, i.prototype.storeLastRefreshTimestamp = function() {
            return n(this, void 0, void 0, function() {
                var t, e;
                return o(this, function(r) {
                    switch(r.label){
                        case 0:
                            return this.isTogglesStorageTTLEnabled() ? (this.lastRefreshTimestamp = Date.now(), e = {}, [
                                4,
                                l(this.context)
                            ]) : [
                                3,
                                3
                            ];
                        case 1:
                            return e.key = r.sent(), e.timestamp = this.lastRefreshTimestamp, t = e, [
                                4,
                                this.storage.save(N, t)
                            ];
                        case 2:
                            r.sent(), r.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
        }, i.prototype.initialFetchToggles = function() {
            if (!this.isUpToDate()) return this.fetchToggles();
            this.fetchedFromServer || (this.fetchedFromServer = !0, this.setReady());
        }, i.prototype.fetchToggles = function() {
            return n(this, void 0, void 0, function() {
                var t, e, r, n, i, s, a, u, l;
                return o(this, function(o) {
                    switch(o.label){
                        case 0:
                            if (!this.fetch) return [
                                3,
                                9
                            ];
                            this.abortController && this.abortController.abort(), this.abortController = null === (l = this.createAbortController) || void 0 === l ? void 0 : l.call(this), t = this.abortController ? this.abortController.signal : void 0, o.label = 1;
                        case 1:
                            return o.trys.push([
                                1,
                                7,
                                8,
                                9
                            ]), e = this.usePOSTrequests, r = e ? this.url : function(t, e) {
                                var r = new URL(t.toString());
                                return Object.entries(e).filter(c).forEach(function(t) {
                                    var e = t[0], n = t[1];
                                    "properties" === e && n ? Object.entries(n).filter(c).forEach(function(t) {
                                        var e = t[0], n = t[1];
                                        return r.searchParams.append("properties[".concat(e, "]"), n);
                                    }) : r.searchParams.append(e, n);
                                }), r;
                            }(this.url, this.context), n = e ? "POST" : "GET", i = e ? JSON.stringify({
                                context: this.context
                            }) : void 0, [
                                4,
                                this.fetch(r.toString(), {
                                    method: n,
                                    cache: "no-cache",
                                    headers: this.getHeaders(),
                                    body: i,
                                    signal: t
                                })
                            ];
                        case 2:
                            return s = o.sent(), "error" === this.sdkState && s.status < 400 && (this.sdkState = "healthy", this.emit(I.RECOVERED)), s.ok ? (this.etag = s.headers.get("ETag") || "", [
                                4,
                                s.json()
                            ]) : [
                                3,
                                5
                            ];
                        case 3:
                            return a = o.sent(), [
                                4,
                                this.storeToggles(a.toggles)
                            ];
                        case 4:
                            return o.sent(), "healthy" !== this.sdkState && (this.sdkState = "healthy"), this.fetchedFromServer || (this.fetchedFromServer = !0, this.setReady()), this.storeLastRefreshTimestamp(), [
                                3,
                                6
                            ];
                        case 5:
                            304 === s.status ? this.storeLastRefreshTimestamp() : (console.error("Unleash: Fetching feature toggles did not have an ok response"), this.sdkState = "error", this.emit(I.ERROR, {
                                type: "HttpError",
                                code: s.status
                            }), this.lastError = {
                                type: "HttpError",
                                code: s.status
                            }), o.label = 6;
                        case 6:
                            return [
                                3,
                                9
                            ];
                        case 7:
                            return "object" == typeof (u = o.sent()) && null !== u && "name" in u && "AbortError" === u.name || (console.error("Unleash: unable to fetch feature toggles", u), this.sdkState = "error", this.emit(I.ERROR, u), this.lastError = u), [
                                3,
                                9
                            ];
                        case 8:
                            return this.abortController = null, [
                                7
                            ];
                        case 9:
                            return [
                                2
                            ];
                    }
                });
            });
        }, i;
    }(a);
    t.EVENTS = I, t.InMemoryStorageProvider = f, t.LocalStorageProvider = d, t.UnleashClient = U, t.lastUpdateKey = N, t.resolveFetch = A;
});

},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequireed51")

//# sourceMappingURL=index.975ef6c8.js.map
