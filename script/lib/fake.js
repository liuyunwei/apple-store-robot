/**
 * Copy and edit based on apple.com's script. Make it to run on nodejs env. and produce a fake string
 * I don't know what this is, just use it for fun.
 * Mock the chrome browser's global objects: window, document, navigator and so on
 * 
 */


function getMocker(opt){

var documentUrl = opt.documentUrl;

var m = true
  , r = null;
var window = {
    document: {
        createElement: function(){ return {};},
        "fgColor": "",
        "linkColor": "",
        "vlinkColor": "",
        "alinkColor": "",
        "bgColor": "",
        "URL": documentUrl,
        "documentURI": documentUrl,
        "origin": documentUrl.match(/https?\:\/\/[^\/\?]+/)[0],
        "compatMode": "CSS1Compat",
        "characterSet": "UTF-8",
        "charset": "UTF-8",
        "inputEncoding": "UTF-8",
        "contentType": "text/html",
        "xmlEncoding": null,
        "xmlVersion": null,
        "xmlStandalone": false,
        "domain": documentUrl.match(/https?\:\/\/([^\/\?]+)/)[1],
        "referrer": "https://www.apple.com/cn/shop/bag",
        "lastModified": "10/17/2017 10:40:00",
        "readyState": "complete",
        "title": "登录 - Apple (中国)",
        "dir": "",
        "currentScript": null,
        "designMode": "off",
        "onreadystatechange": null,
        "selectedStylesheetSet": null,
        "preferredStylesheetSet": null,
        "onpointerlockchange": null,
        "onpointerlockerror": null,
        "hidden": false,
        "visibilityState": "visible",
        "webkitVisibilityState": "visible",
        "webkitHidden": false,
        "onbeforecopy": null,
        "onbeforecut": null,
        "onbeforepaste": null,
        "oncopy": null,
        "oncut": null,
        "onpaste": null,
        "onsearch": null,
        "onselectionchange": null,
        "onselectstart": null,
        "pointerLockElement": null,
        "onabort": null,
        "onblur": null,
        "oncancel": null,
        "oncanplay": null,
        "oncanplaythrough": null,
        "onchange": null,
        "onclick": null,
        "onclose": null,
        "oncontextmenu": null,
        "oncuechange": null,
        "ondblclick": null,
        "ondrag": null,
        "ondragend": null,
        "ondragenter": null,
        "ondragleave": null,
        "ondragover": null,
        "ondragstart": null,
        "ondrop": null,
        "ondurationchange": null,
        "onemptied": null,
        "onended": null,
        "onerror": null,
        "onfocus": null,
        "oninput": null,
        "oninvalid": null,
        "onkeydown": null,
        "onkeypress": null,
        "onkeyup": null,
        "onload": null,
        "onloadeddata": null,
        "onloadedmetadata": null,
        "onloadstart": null,
        "onmousedown": null,
        "onmouseenter": null,
        "onmouseleave": null,
        "onmousemove": null,
        "onmouseout": null,
        "onmouseover": null,
        "onmouseup": null,
        "onmousewheel": null,
        "onpause": null,
        "onplay": null,
        "onplaying": null,
        "onprogress": null,
        "onratechange": null,
        "onreset": null,
        "onresize": null,
        "onscroll": null,
        "onseeked": null,
        "onseeking": null,
        "onselect": null,
        "onstalled": null,
        "onsubmit": null,
        "onsuspend": null,
        "ontimeupdate": null,
        "ontoggle": null,
        "onvolumechange": null,
        "onwaiting": null,
        "onwheel": null,
        "ongotpointercapture": null,
        "onlostpointercapture": null,
        "onpointerdown": null,
        "onpointermove": null,
        "onpointerup": null,
        "onpointercancel": null,
        "onpointerover": null,
        "onpointerout": null,
        "onpointerenter": null,
        "onpointerleave": null,
        "childElementCount": 1,
        "webkitIsFullScreen": false,
        "webkitCurrentFullScreenElement": null,
        "webkitFullscreenEnabled": true,
        "webkitFullscreenElement": null,
        "onwebkitfullscreenchange": null,
        "onwebkitfullscreenerror": null,
        "rootElement": null,
        "onauxclick": null,
        "onsecuritypolicyviolation": null,
        "fullscreenElement": null,
        "fullscreenEnabled": true,
        "onfullscreenchange": null,
        "onfullscreenerror": null,
        "rootScroller": null,
        "suborigin": "",
        "ELEMENT_NODE": 1,
        "ATTRIBUTE_NODE": 2,
        "TEXT_NODE": 3,
        "CDATA_SECTION_NODE": 4,
        "ENTITY_REFERENCE_NODE": 5,
        "ENTITY_NODE": 6,
        "PROCESSING_INSTRUCTION_NODE": 7,
        "COMMENT_NODE": 8,
        "DOCUMENT_NODE": 9,
        "DOCUMENT_TYPE_NODE": 10,
        "DOCUMENT_FRAGMENT_NODE": 11,
        "NOTATION_NODE": 12,
        "DOCUMENT_POSITION_DISCONNECTED": 1,
        "DOCUMENT_POSITION_PRECEDING": 2,
        "DOCUMENT_POSITION_FOLLOWING": 4,
        "DOCUMENT_POSITION_CONTAINS": 8,
        "DOCUMENT_POSITION_CONTAINED_BY": 16,
        "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC": 32,
        "nodeType": 9,
        "nodeName": "#document",
        "baseURI": documentUrl,
        "isConnected": true,
        "ownerDocument": null,
        "parentNode": null,
        "parentElement": null,
        "previousSibling": null,
        "nextSibling": null,
        "nodeValue": null,
        "textContent": null
    },
    screen: {
        "availWidth": 1280,
        "availHeight": 719,
        "width": 1280,
        "height": 800,
        "colorDepth": 24,
        "pixelDepth": 24,
        "availLeft": 0,
        "availTop": 23,
        "orientation": {},
        "keepAwake": false
    },
    navigator: {
        "vendorSub": "",
        "productSub": "20030107",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "hardwareConcurrency": 4,
        "cookieEnabled": true,
        "appCodeName": "Mozilla",
        "appName": "Netscape",
        "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
        "platform": "MacIntel",
        "product": "Gecko",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
        "language": "en-US",
        "languages": [
            "zh-CN",
            "zh",
            "en",
            "zh-TW"
        ],
        "onLine": true,
        "doNotTrack": null,
        "geolocation": {},
        "mediaDevices": {},
        "connection": {},
        "plugins": {
            "0": {
                "0": {}
            },
            "1": {
                "0": {}
            },
            "2": {
                "0": {},
                "1": {}
            },
            "3": {
                "0": {},
                "1": {}
            },
            "4": {
                "0": {}
            }
        },
        "mimeTypes": {
            "0": {},
            "1": {},
            "2": {},
            "3": {},
            "4": {},
            "5": {},
            "6": {}
        },
        "webkitTemporaryStorage": {},
        "webkitPersistentStorage": {},
        "serviceWorker": {},
        "budget": {},
        "permissions": {},
        "presentation": {},
        "authentication": {},
        "bluetooth": {},
        "nfc": {},
        "clipboard": {},
        "credentials": {},
        "storage": {},
        "usb": {}
    }
};
var navigator = window.navigator;
var document = window.document;
var screen = window.screen;
var fake = (function(p) {

    function j(a) {
        try {
            if (navigator.plugins && navigator.plugins.length) {
                for (var c = 0; c < navigator.plugins.length; c++) {
                    var b = navigator.plugins[c];
                    if (b.name.indexOf(a) >= 0) {
                        return b.name + (b.description ? "|" + b.description : "")
                    }
                }
            }
        } catch (e) {}
        return ""
    }
    function E(a) {
        try {
            if (!a) {
                return F()
            }
            var c;
            a: {
                var b;
                try {
                    b = document.getElementById(a)
                } catch (e) {}
                if (b === r || typeof b === "undefined") {
                    try {
                        b = document.getElementsByName(a)[0]
                    } catch (f) {}
                }
                if (b === r || typeof b === "undefined") {
                    for (var d = 0; d < document.forms.length; d++) {
                        for (var g = document.forms[d], l = 0; l < g.elements.length; l++) {
                            var h = g[l];
                            if (h.name === a || h.id === a) {
                                c = h;
                                break a
                            }
                        }
                    }
                }
                c = b
            }
            if (c !== r) {
                try {
                    c.value = F()
                } catch (n) {
                    c.value = escape(n.message)
                }
            }
        } catch (x) {}
    }
    function J(a, c, b) {
        function e() {
            a.onreadystatechange = r;
            f !== r && clearTimeout(f);
            d = m
        }
        var f = r
          , d = false
          , g = false;
        try {
            var l = function() {
                if (a.status == 200 || a.status == 304) {
                    s = a.getResponseHeader("Last-Modified");
                    if (!s) {
                        var n = a.getResponseHeader("Expires");
                        if (n) {
                            n = new Date(n);
                            n.setTime(n.getTime() - 31536000000);
                            s = n.toUTCString()
                        } else {
                            s = ""
                        }
                    }
                }
            };
            if (c) {
                a.onreadystatechange = function() {
                    if (!d) {
                        if (a.readyState == 4) {
                            e();
                            l();
                            b()
                        }
                    }
                }
                ;
                f = setTimeout(function() {
                    if (!d) {
                        e();
                        a.abort();
                        b()
                    }
                }, 2000);
                a.send();
                g = m
            } else {
                a.send();
                l()
            }
        } catch (h) {
            e()
        } finally {
            g || b()
        }
    }
    function K(a) {
        if (a.match("^//")) {
            a = document.URL.match(/^[^:]+:/)[0] + a
        }
        var c = /^https?:\/\/[^/]+/;
        a = a.match(c);
        if (a === r) {
            return m
        }
        c = document.URL.match(c);
        return c !== r && c[0] === a[0]
    }
    function L() {
        var a = navigator.userAgent;
        if (a.match(/ Trident\/7\.0;.* rv:11\.0/)) {
            return 11
        }
        if (a = a.match(/ MSIE (\d+)/)) {
            return parseInt(a[1])
        }
        return r
    }
    function F(a) {
        var c = new Date
          , b = new Date
          , e = [y("TF1"), y("023"), function() {
            return ScriptEngineMajorVersion()
        }
        , function() {
            return ScriptEngineMinorVersion()
        }
        , function() {
            return ScriptEngineBuildVersion()
        }
        , function() {
            return k("{7790769C-0471-11D2-AF11-00C04FA35D02}")
        }
        , function() {
            return k("{89820200-ECBD-11CF-8B85-00AA005B4340}")
        }
        , function() {
            return k("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
        }
        , function() {
            return k("{4F216970-C90C-11D1-B5C7-0000F8051515}")
        }
        , function() {
            return k("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
        }
        , function() {
            return k("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
        }
        , function() {
            return k("{4F216970-C90C-11D1-B5C7-0000F8051515}")
        }
        , function() {
            return k("{5A8D6EE0-3E18-11D0-821E-444553540000}")
        }
        , function() {
            return k("{89820200-ECBD-11CF-8B85-00AA005B4383}")
        }
        , function() {
            return k("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
        }
        , function() {
            return k("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
        }
        , function() {
            return k("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
        }
        , function() {
            return k("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
        }
        , function() {
            return k("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
        }
        , function() {
            return k("{3AF36230-A269-11D1-B5BF-0000F8051515}")
        }
        , function() {
            return k("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
        }
        , function() {
            return k("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
        }
        , function() {
            return k("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
        }
        , function() {
            return eval("navigator.appCodeName")
        }
        , function() {
            return eval("navigator.appName")
        }
        , function() {
            return eval("navigator.appVersion")
        }
        , function() {
            return z(["navigator.productSub", "navigator.appMinorVersion"])
        }
        , function() {
            return eval("navigator.browserLanguage")
        }
        , function() {
            return eval("navigator.cookieEnabled")
        }
        , function() {
            return z(["navigator.oscpu", "navigator.cpuClass"])
        }
        , function() {
            return eval("navigator.onLine")
        }
        , function() {
            return eval("navigator.platform")
        }
        , function() {
            return eval("navigator.systemLanguage")
        }
        , function() {
            return eval("navigator.userAgent")
        }
        , function() {
            return z(["navigator.language", "navigator.userLanguage"])
        }
        , function() {
            return eval("document.defaultCharset")
        }
        , function() {
            return eval("document.domain")
        }
        , function() {
            return eval("screen.deviceXDPI")
        }
        , function() {
            return eval("screen.deviceYDPI")
        }
        , function() {
            return eval("screen.fontSmoothingEnabled")
        }
        , function() {
            return eval("screen.updateInterval")
        }
        , function() {
            return Math.abs(t - u) !== 0
        }
        , function() {
            return G(c)
        }
        , function() {
            return "@UTC@"
        }
        , function() {
            var h = 0;
            h = 0;
            if (G(c)) {
                h = Math.abs(t - u)
            }
            return h = -(c.getTimezoneOffset() + h) / 60
        }
        , function() {
            return (new Date(2005,5,7,21,33,44,888)).toLocaleString()
        }
        , function() {
            return eval("screen.width")
        }
        , function() {
            return eval("screen.height")
        }
        , function() {
            return q.Acrobat
        }
        , function() {
            return q.Flash
        }
        , function() {
            return q.QuickTime
        }
        , function() {
            return q["Java Plug-in"]
        }
        , function() {
            return q.Director
        }
        , function() {
            return q.Office
        }
        , function() {
            return "@CT@"
        }
        , function() {
            return t
        }
        , function() {
            return u
        }
        , function() {
            return c.toLocaleString()
        }
        , function() {
            return eval("screen.colorDepth")
        }
        , function() {
            return eval("window.screen.availWidth")
        }
        , function() {
            return eval("window.screen.availHeight")
        }
        , function() {
            return eval("window.screen.availLeft")
        }
        , function() {
            return eval("window.screen.availTop")
        }
        , function() {
            return j("Acrobat")
        }
        , function() {
            return j("Adobe SVG")
        }
        , function() {
            return j("Authorware")
        }
        , function() {
            return j("Citrix ICA")
        }
        , function() {
            return j("Director")
        }
        , function() {
            return j("Flash")
        }
        , function() {
            return j("MapGuide")
        }
        , function() {
            return j("MetaStream")
        }
        , function() {
            return j("PDF Viewer")
        }
        , function() {
            return j("QuickTime")
        }
        , function() {
            return j("RealOne")
        }
        , function() {
            return j("RealPlayer Enterprise")
        }
        , function() {
            return j("RealPlayer Plugin")
        }
        , function() {
            return j("Seagate Software Report")
        }
        , function() {
            return j("Silverlight")
        }
        , function() {
            return j("Windows Media")
        }
        , function() {
            return j("iPIX")
        }
        , function() {
            return j("nppdf.so")
        }
        , function() {
            var h = document.createElement("span");
            h.innerHTML = "&nbsp;";
            h.style.position = "absolute";
            h.style.left = "-9999px";
            document.body.appendChild(h);
            var n = h.offsetHeight;
            document.body.removeChild(h);
            return n
        }
        , i, i, i, i, i, i, i, i, i, i, i, i, i, i, function() {
            return "6.3.0-0"
        }
        , i, function() {
            return s
        }
        , i, i, i, i, i, function() {
            if (typeof v !== "boolean") {
                return ""
            }
            return 0 + v
        }
        ];
        M();
        for (var f = "", d = 0; d < e.length; d++) {
            if (a) {
                f += A(e[d].toString(), '"', "'", m);
                f += "="
            }
            var g;
            try {
                g = e[d](this)
            } catch (l) {
                g = ""
            }
            f += a ? g : escape(g);
            f += ";";
            if (a) {
                f += "\\n"
            }
        }
        f = A(f, escape("@UTC@"), (new Date).getTime());
        f = A(f, escape("@CT@"), (new Date).getTime() - b.getTime());
        //console.log(f);
        return H && B ? B(f) : f
    }
    function A(a, c, b, e) {
        if (typeof e !== "boolean") {
            e = false
        }
        for (var f = m, d; (d = a.indexOf(c)) >= 0 && (e || f); ) {
            a = a.substr(0, d) + b + a.substr(d + c.length);
            f = false
        }
        return a
    }
    function G(a) {
        var c = Math.min(t, u);
        return Math.abs(t - u) !== 0 && a.getTimezoneOffset() === c
    }
    function M() {
        for (var a = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"], c = 0; c < a.length; c++) {
            var b = a[c]
              , e = q
              , f = b
              , d = b;
            b = "";
            try {
                if (navigator.plugins && navigator.plugins.length) {
                    var g = RegExp(d + ".* ([0-9._]+)");
                    for (d = 0; d < navigator.plugins.length; d++) {
                        var l = g.exec(navigator.plugins[d].name);
                        if (l === r) {
                            l = g.exec(navigator.plugins[d].description)
                        }
                        if (l) {
                            b = l[1]
                        }
                    }
                } else {
                    if (window.ActiveXObject && C[d]) {
                        try {
                            var h = new ActiveXObject(C[d][0]);
                            b = C[d][1](h)
                        } catch (n) {
                            b = ""
                        }
                    }
                }
            } catch (x) {
                b = x.message
            }
            e[f] = b
        }
    }
    function z(a) {
        for (var c = 0; c < a.length; c++) {
            try {
                var b = eval(a[c]);
                if (b) {
                    return b
                }
            } catch (e) {}
        }
        return ""
    }
    function k(a) {
        var c = "";
        try {
            if (typeof o.a.getComponentVersion !== "undefined") {
                c = o.a.getComponentVersion(a, "ComponentID")
            }
        } catch (b) {
            a = b.message.length;
            a = a > 40 ? 40 : a;
            c = escape(b.message.substr(0, a))
        }
        return c
    }
    function y(a) {
        return function() {
            return a
        }
    }
    function N(a) {
        function c(g) {
            e = e << g[0] | g[1];
            for (f += g[0]; f >= 6; ) {
                g = e >> f - 6 & 63;
                b += w.substring(g, g + 1);
                f -= 6;
                e ^= g << f
            }
        }
        var b = ""
          , e = 0
          , f = 0;
        c([6, (a.length & 7) << 3 | 0]);
        c([6, a.length & 56 | 1]);
        for (var d = 0; d < a.length; d++) {
            if (D[a.charCodeAt(d)] == undefined) {
                return
            }
            c(D[a.charCodeAt(d)])
        }
        c(D[0]);
        f > 0 && c([6 - f, 0]);
        return b
    }
    function B(a) {
        for (var c = N, b = a, e = 0; I[e]; e++) {
            b = b.split(I[e]).join(String.fromCharCode(e + 1))
        }
        c = c(b);
        if (c == undefined) {
            return a
        } else {
            b = 65535;
            for (e = 0; e < a.length; e++) {
                b = (b >>> 8 | b << 8) & 65535;
                b ^= a.charCodeAt(e) & 255;
                b ^= (b & 255) >> 4;
                b ^= b << 12 & 65535;
                b ^= (b & 255) << 5 & 65535
            }
            b &= 65535;
            a = "";
            a += w.charAt(b >>> 12);
            a += w.charAt(b >>> 6 & 63);
            a += w.charAt(b & 63);
            c += a;
            return c
        }
    }
    options = p || {};
    p = options.ctx || window;
    var H = options.hasOwnProperty("compress") ? options.compress : m
      , o = {}
      , s = ""
      , v = r
      , t = (new Date(2005,0,15)).getTimezoneOffset()
      , u = (new Date(2005,6,15)).getTimezoneOffset()
      , q = []
      , i = y("")
      , C = {
        Flash: ["ShockwaveFlash.ShockwaveFlash", function(a) {
            return a.getVariable("$version")
        }
        ],
        Director: ["SWCtl.SWCtl", function(a) {
            return a.ShockwaveVersion("")
        }
        ]
    };
    try {
        o.a = document.createElement("span");
        typeof o.a.addBehavior !== "undefined" && o.a.addBehavior("#default#clientCaps")
    } catch (O) {}
    q = {};
    var D = {
        1: [4, 15],
        110: [8, 239],
        74: [8, 238],
        57: [7, 118],
        56: [7, 117],
        71: [8, 233],
        25: [8, 232],
        101: [5, 28],
        104: [7, 111],
        4: [7, 110],
        105: [6, 54],
        5: [7, 107],
        109: [7, 106],
        103: [9, 423],
        82: [9, 422],
        26: [8, 210],
        6: [7, 104],
        46: [6, 51],
        97: [6, 50],
        111: [6, 49],
        7: [7, 97],
        45: [7, 96],
        59: [5, 23],
        15: [7, 91],
        11: [8, 181],
        72: [8, 180],
        27: [8, 179],
        28: [8, 178],
        16: [7, 88],
        88: [10, 703],
        113: [11, 1405],
        89: [12, 2809],
        107: [13, 5617],
        90: [14, 11233],
        42: [15, 22465],
        64: [16, 44929],
        0: [16, 44928],
        81: [9, 350],
        29: [8, 174],
        118: [8, 173],
        30: [8, 172],
        98: [8, 171],
        12: [8, 170],
        99: [7, 84],
        117: [6, 41],
        112: [6, 40],
        102: [9, 319],
        68: [9, 318],
        31: [8, 158],
        100: [7, 78],
        84: [6, 38],
        55: [6, 37],
        17: [7, 73],
        8: [7, 72],
        9: [7, 71],
        77: [7, 70],
        18: [7, 69],
        65: [7, 68],
        48: [6, 33],
        116: [6, 32],
        10: [7, 63],
        121: [8, 125],
        78: [8, 124],
        80: [7, 61],
        69: [7, 60],
        119: [7, 59],
        13: [8, 117],
        79: [8, 116],
        19: [7, 57],
        67: [7, 56],
        114: [6, 27],
        83: [6, 26],
        115: [6, 25],
        14: [6, 24],
        122: [8, 95],
        95: [8, 94],
        76: [7, 46],
        24: [7, 45],
        37: [7, 44],
        50: [5, 10],
        51: [5, 9],
        108: [6, 17],
        22: [7, 33],
        120: [8, 65],
        66: [8, 64],
        21: [7, 31],
        106: [7, 30],
        47: [6, 14],
        53: [5, 6],
        49: [5, 5],
        86: [8, 39],
        85: [8, 38],
        23: [7, 18],
        75: [7, 17],
        20: [7, 16],
        2: [5, 3],
        73: [8, 23],
        43: [9, 45],
        87: [9, 44],
        70: [7, 10],
        3: [6, 4],
        52: [5, 1],
        54: [5, 0]
    }
      , I = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"]
      , w = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    o.aosform = E;
    o.f1b5 = B;
    o.setResource = function(a, c, b) {
        function e() {
            if (f) {
                try {
                    b()
                } catch (x) {}
            }
        }
        s = "";
        v = r;
        var f = typeof b === "function"
          , d = false;
        try {
            if (c) {
                var g = !K(a)
                  , l = L();
                if (!(l !== r && l < 10 && g)) {
                    var h;
                    h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    h.open("GET", a, f);
                    J(h, f, function() {
                        if (s) {
                            v = g
                        }
                        h = r;
                        e()
                    });
                    d = m
                }
            }
        } catch (n) {} finally {
            d || e()
        }
    }
    ;
    p.aosparm = o;
    if (H) {
        p = navigator.userAgent.toLowerCase();
        navigator.product === "Gecko" && parseInt(p.substring(p.indexOf("rv:") + 3, p.indexOf(")", p.indexOf("rv:") + 3)).split(".")[0]) <= 2 && E()
    }
    return o;
}
)();

return fake;


}

module.exports = getMocker;