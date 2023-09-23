/*! For license information please see renderer.js.LICENSE.txt */
// 请支持正版: https://lunarclient.com/
// by CubeWhy(鸭皇) on github
// https://github.com/CubeWhyMC/LunarClient-CN/
// Official download: https://lunarcn.top

// 启动参数已移动 -> %userprofile%/.cubewhy/lunarcn/config.json

// supported
			// //检查环境
			// const fs = require('fs');
			//
			// const directoryPath = process.cwd();
			//
			// if (directoryPath.includes(' ')) {
			//   alert('文件目录包含空格，无法正常运行。');
			//   const confirmButton = document.createElement('button');
			//   confirmButton.textContent = '确认';
			//   confirmButton.addEventListener('click', () => {
			// 	window.close();
			// 	process.exit();
			//   });
			//   alert('文件目录包含空格，无法正常运行。');
			//   const confirmButton1 = document.createElement('button');
			//   confirmButton1.textContent = '确认';
			//   confirmButton1.addEventListener('click', () => {
			// 	window.close();
			// 	process.exit();
			//   });
			//   alert('文件目录包含空格，无法正常运行。');
			//   const confirmButton2 = document.createElement('button');
			//   confirmButton2.textContent = '确认';
			//   confirmButton2.addEventListener('click', () => {
			// 	window.close();
			// 	process.exit();
			//   });
			//
			// }


function getLunarCnExec() {
	return process.cwd() + "/resources/LunarCn.jar"
}
/*! For license information please see renderer.js.LICENSE.txt */
module.exports = function(oe) {
	var se = {};

	function __webpack_require__(_e) {
		if (se[_e]) return se[_e].exports;
		var ke = se[_e] = {
			i: _e,
			l: !1,
			exports: {}
		};
		return oe[_e].call(ke.exports, ke, ke.exports, __webpack_require__), ke.l = !0, ke.exports
	}
	return __webpack_require__.m = oe, __webpack_require__.c = se, __webpack_require__.d = function(oe, se, _e) {
		__webpack_require__.o(oe, se) || Object.defineProperty(oe, se, {
			enumerable: !0,
			get: _e
		})
	}, __webpack_require__.r = function(oe) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(oe, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(oe, "__esModule", {
			value: !0
		})
	}, __webpack_require__.t = function(oe, se) {
		if (1 & se && (oe = __webpack_require__(oe)), 8 & se) return oe;
		if (4 & se && "object" == typeof oe && oe && oe.__esModule) return oe;
		var _e = Object.create(null);
		if (__webpack_require__.r(_e), Object.defineProperty(_e, "default", {
			enumerable: !0,
			value: oe
		}), 2 & se && "string" != typeof oe)
			for (var ke in oe) __webpack_require__.d(_e, ke, function(se) {
				return oe[se]
			}.bind(null, ke));
		return _e
	}, __webpack_require__.n = function(oe) {
		var se = oe && oe.__esModule ? function getDefault() {
			return oe.default
		} : function getModuleExports() {
			return oe
		};
		return __webpack_require__.d(se, "a", se), se
	}, __webpack_require__.o = function(oe, se) {
		return Object.prototype.hasOwnProperty.call(oe, se)
	}, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 29)
}([function(oe, se, _e) {
	"use strict";
	oe.exports = _e(30)
}, function(oe, se) {
	oe.exports = require("electron-log")
}, function(oe, se) {
	oe.exports = require("path")
}, function(oe, se) {
	oe.exports = require("electron")
}, function(oe, se) {
	oe.exports = require("fs")
}, function(oe, se) {
	oe.exports = require("os")
}, function(oe, se) {
	oe.exports = require("jquery")
}, function(oe, se) {
	oe.exports = require("node-fetch")
}, function(oe, se) {
	oe.exports = require("unzip-stream")
}, function(oe, se) {
	oe.exports = require("uuid")
}, function(oe, se) {
	oe.exports = require("zlib")
}, function(oe, se) {
	oe.exports = require("p-queue")
}, function(oe, se) {
	oe.exports = require("rimraf")
}, function(oe, se) {
	oe.exports = require("@sentry/react")
}, function(oe, se) {
	oe.exports = require("@sentry/integrations")
}, function(oe, se, _e) {
	"use strict";
	var ke = Object.getOwnPropertySymbols,
		Te = Object.prototype.hasOwnProperty,
		Ne = Object.prototype.propertyIsEnumerable;

	function toObject(oe) {
		if (null == oe) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(oe)
	}
	oe.exports = function shouldUseNative() {
		try {
			if (!Object.assign) return !1;
			var oe = new String("abc");
			if (oe[5] = "de", "5" === Object.getOwnPropertyNames(oe)[0]) return !1;
			for (var se = {}, _e = 0; _e < 10; _e++) se["_" + String.fromCharCode(_e)] = _e;
			if ("0123456789" !== Object.getOwnPropertyNames(se)
				.map((function(oe) {
					return se[oe]
				}))
				.join("")) return !1;
			var ke = {};
			return "abcdefghijklmnopqrst".split("")
				.forEach((function(oe) {
					ke[oe] = oe
				})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, ke))
				.join("")
		} catch (oe) {
			return !1
		}
	}() ? Object.assign : function(oe, se) {
		for (var _e, Oe, Ae = toObject(oe), Re = 1; Re < arguments.length; Re++) {
			for (var je in _e = Object(arguments[Re])) Te.call(_e, je) && (Ae[je] = _e[je]);
			if (ke) {
				Oe = ke(_e);
				for (var Me = 0; Me < Oe.length; Me++) Ne.call(_e, Oe[Me]) && (Ae[Oe[Me]] = _e[Oe[Me]])
			}
		}
		return Ae
	}
}, function(oe, se) {
	oe.exports = require("node-machine-id")
}, function(oe, se) {
	oe.exports = require("universal-analytics")
}, function(oe, se) {
	oe.exports = require("electron-store")
}, function(oe, se) {
	oe.exports = require("node-downloader-helper")
}, function(oe, se) {
	oe.exports = require("bsdiff-node")
}, function(oe, se) {
	oe.exports = require("https")
}, function(oe, se) {
	oe.exports = require("crypto")
}, function(oe, se) {
	oe.exports = require("child_process")
}, function(oe, se) {
	oe.exports = require("tar-fs")
}, function(oe, se) {
	oe.exports = require("folder-hash")
}, function(oe, se, _e) {
	const ke = _e(31),
		Te = _e(32),
		{
			PacketDecoder: Ne,
			createHandshakePacket: Oe,
			createPingPacket: Ae
		} = _e(33),
		Re = oe.exports.ping = (oe, se, _e) => {
			(function checkSrvRecord(oe) {
				return new Promise((se, _e) => {
					0 !== ke.isIP(oe) ? _e(new Error("主机名应该是一个IP地址")) : Te.resolveSrv("_minecraft._tcp." + oe, (oe, ke) => {
						void 0 === ke || 0 !== Object.keys(ke)
							.length ? oe ? _e(oe) : se({
								hostname: ke[0].name,
								port: ke[0].port
							}) : _e(null)
					})
				})
			})(oe)
			.then(openConnection, _e => openConnection({
					hostname: oe,
					port: se
				}))
				.then(oe => _e(null, oe))
				.catch(_e)
		};

	function openConnection(oe) {
		const {
			hostname: se,
			port: _e
		} = oe;
		return new Promise((oe, Te) => {
			let Re = ke.createConnection(_e, se, () => {
				let ke = new Ne;
				Re.pipe(ke), Re.write(Oe(se, _e)), ke.once("error", oe => {
					Re.destroy(), clearTimeout(je), Te(oe)
				}), ke.once("packet", se => {
					Re.write(Ae(Date.now())), ke.once("packet", _e => {
						Re.end(), clearTimeout(je), se.ping = _e, oe(se)
					})
				})
			});
			Re.once("error", oe => {
				Re.destroy(), clearTimeout(je), Te(oe)
			}), Re.once("timeout", () => {
				Re.destroy(), clearTimeout(je), Te(new Error("超时"))
			});
			let je = setTimeout(() => {
				Re.end(), Te(new Error("超时(10秒)"))
			}, 1e4)
		})
	}
	oe.exports.pingPromise = (oe, se) => new Promise((_e, ke) => {
		Re(oe, se, (oe, se) => {
			oe ? ke(oe) : _e(se)
		})
	})
}, function(oe, se) {
	oe.exports = require("react-tsparticles")
}, function(oe, se, _e) {
	"use strict";
	! function checkDCE() {
		if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
			0;
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)
			} catch (oe) {
				console.error(oe)
			}
		}
	}(), oe.exports = _e(40)
}, function(oe, se, _e) {
	oe.exports = _e(51)
}, function(oe, se, _e) {
	"use strict";
	var ke = _e(15),
		Te = "function" == typeof Symbol && Symbol.for,
		Ne = Te ? Symbol.for("react.element") : 60103,
		Oe = Te ? Symbol.for("react.portal") : 60106,
		Ae = Te ? Symbol.for("react.fragment") : 60107,
		Re = Te ? Symbol.for("react.strict_mode") : 60108,
		je = Te ? Symbol.for("react.profiler") : 60114,
		Me = Te ? Symbol.for("react.provider") : 60109,
		Fe = Te ? Symbol.for("react.context") : 60110,
		Ue = Te ? Symbol.for("react.forward_ref") : 60112,
		Be = Te ? Symbol.for("react.suspense") : 60113,
		We = Te ? Symbol.for("react.memo") : 60115,
		Ve = Te ? Symbol.for("react.lazy") : 60116,
		Ye = "function" == typeof Symbol && Symbol.iterator;

	function C(oe) {
		for (var se = "https://reactjs.org/docs/error-decoder.html?invariant=" + oe, _e = 1; _e < arguments.length; _e++) se += "&args[]=" + encodeURIComponent(arguments[_e]);
		return "小型化的React错误#" + oe + "; 访问 " + se + " 获取完整的消息，或者使用非小型化的开发环境获取完整的错误和其他有用的警告。"
	}
	var Xe = {
			isMounted: function() {
				return !1
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		},
		$e = {};

	function F(oe, se, _e) {
		this.props = oe, this.context = se, this.refs = $e, this.updater = _e || Xe
	}

	function G() {}

	function H(oe, se, _e) {
		this.props = oe, this.context = se, this.refs = $e, this.updater = _e || Xe
	}
	F.prototype.isReactComponent = {}, F.prototype.setState = function(oe, se) {
		if ("object" != typeof oe && "function" != typeof oe && null != oe) throw Error(C(85));
		this.updater.enqueueSetState(this, oe, se, "setState")
	}, F.prototype.forceUpdate = function(oe) {
		this.updater.enqueueForceUpdate(this, oe, "forceUpdate")
	}, G.prototype = F.prototype;
	var et = H.prototype = new G;
	et.constructor = H, ke(et, F.prototype), et.isPureReactComponent = !0;
	var tt = {
			current: null
		},
		nt = Object.prototype.hasOwnProperty,
		rt = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};

	function M(oe, se, _e) {
		var ke, Te = {},
			Oe = null,
			Ae = null;
		if (null != se)
			for (ke in void 0 !== se.ref && (Ae = se.ref), void 0 !== se.key && (Oe = "" + se.key), se) nt.call(se, ke) && !rt.hasOwnProperty(ke) && (Te[ke] = se[ke]);
		var Re = arguments.length - 2;
		if (1 === Re) Te.children = _e;
		else if (1 < Re) {
			for (var je = Array(Re), Me = 0; Me < Re; Me++) je[Me] = arguments[Me + 2];
			Te.children = je
		}
		if (oe && oe.defaultProps)
			for (ke in Re = oe.defaultProps) void 0 === Te[ke] && (Te[ke] = Re[ke]);
		return {
			$$typeof: Ne,
			type: oe,
			key: Oe,
			ref: Ae,
			props: Te,
			_owner: tt.current
		}
	}

	function O(oe) {
		return "object" == typeof oe && null !== oe && oe.$$typeof === Ne
	}
	var it = /\/+/g,
		ot = [];

	function R(oe, se, _e, ke) {
		if (ot.length) {
			var Te = ot.pop();
			return Te.result = oe, Te.keyPrefix = se, Te.func = _e, Te.context = ke, Te.count = 0, Te
		}
		return {
			result: oe,
			keyPrefix: se,
			func: _e,
			context: ke,
			count: 0
		}
	}

	function S(oe) {
		oe.result = null, oe.keyPrefix = null, oe.func = null, oe.context = null, oe.count = 0, 10 > ot.length && ot.push(oe)
	}

	function V(oe, se, _e) {
		return null == oe ? 0 : function T(oe, se, _e, ke) {
			var Te = typeof oe;
			"undefined" !== Te && "boolean" !== Te || (oe = null);
			var Ae = !1;
			if (null === oe) Ae = !0;
			else switch (Te) {
				case "string":
				case "number":
					Ae = !0;
					break;
				case "object":
					switch (oe.$$typeof) {
						case Ne:
						case Oe:
							Ae = !0
					}
			}
			if (Ae) return _e(ke, oe, "" === se ? "." + U(oe, 0) : se), 1;
			if (Ae = 0, se = "" === se ? "." : se + ":", Array.isArray(oe))
				for (var Re = 0; Re < oe.length; Re++) {
					var je = se + U(Te = oe[Re], Re);
					Ae += T(Te, je, _e, ke)
				} else if (null === oe || "object" != typeof oe ? je = null : je = "function" == typeof(je = Ye && oe[Ye] || oe["@@iterator"]) ? je : null, "function" == typeof je)
					for (oe = je.call(oe), Re = 0; !(Te = oe.next())
						.done;) Ae += T(Te = Te.value, je = se + U(Te, Re++), _e, ke);
				else if ("object" === Te) throw _e = "" + oe, Error(C(31, "[object Object]" === _e ? "object with keys {" + Object.keys(oe)
				.join(", ") + "}" : _e, ""));
			return Ae
		}(oe, "", se, _e)
	}

	function U(oe, se) {
		return "object" == typeof oe && null !== oe && null != oe.key ? function escape(oe) {
			var se = {
				"=": "=0",
				":": "=2"
			};
			return "$" + ("" + oe)
				.replace(/[=:]/g, (function(oe) {
					return se[oe]
				}))
		}(oe.key) : se.toString(36)
	}

	function W(oe, se) {
		oe.func.call(oe.context, se, oe.count++)
	}

	function aa(oe, se, _e) {
		var ke = oe.result,
			Te = oe.keyPrefix;
		oe = oe.func.call(oe.context, se, oe.count++), Array.isArray(oe) ? X(oe, ke, _e, (function(oe) {
			return oe
		})) : null != oe && (O(oe) && (oe = function N(oe, se) {
			return {
				$$typeof: Ne,
				type: oe.type,
				key: se,
				ref: oe.ref,
				props: oe.props,
				_owner: oe._owner
			}
		}(oe, Te + (!oe.key || se && se.key === oe.key ? "" : ("" + oe.key)
			.replace(it, "$&/") + "/") + _e)), ke.push(oe))
	}

	function X(oe, se, _e, ke, Te) {
		var Ne = "";
		null != _e && (Ne = ("" + _e)
			.replace(it, "$&/") + "/"), V(oe, aa, se = R(se, Ne, ke, Te)), S(se)
	}
	var at = {
		current: null
	};

	function Z() {
		var oe = at.current;
		if (null === oe) throw Error(C(321));
		return oe
	}
	var lt = {
		ReactCurrentDispatcher: at,
		ReactCurrentBatchConfig: {
			suspense: null
		},
		ReactCurrentOwner: tt,
		IsSomeRendererActing: {
			current: !1
		},
		assign: ke
	};
	se.Children = {
		map: function(oe, se, _e) {
			if (null == oe) return oe;
			var ke = [];
			return X(oe, ke, null, se, _e), ke
		},
		forEach: function(oe, se, _e) {
			if (null == oe) return oe;
			V(oe, W, se = R(null, null, se, _e)), S(se)
		},
		count: function(oe) {
			return V(oe, (function() {
				return null
			}), null)
		},
		toArray: function(oe) {
			var se = [];
			return X(oe, se, null, (function(oe) {
				return oe
			})), se
		},
		only: function(oe) {
			if (!O(oe)) throw Error(C(143));
			return oe
		}
	}, se.Component = F, se.Fragment = Ae, se.Profiler = je, se.PureComponent = H, se.StrictMode = Re, se.Suspense = Be, se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lt, se.cloneElement = function(oe, se, _e) {
		if (null == oe) throw Error(C(267, oe));
		var Te = ke({}, oe.props),
			Oe = oe.key,
			Ae = oe.ref,
			Re = oe._owner;
		if (null != se) {
			if (void 0 !== se.ref && (Ae = se.ref, Re = tt.current), void 0 !== se.key && (Oe = "" + se.key), oe.type && oe.type.defaultProps) var je = oe.type.defaultProps;
			for (Me in se) nt.call(se, Me) && !rt.hasOwnProperty(Me) && (Te[Me] = void 0 === se[Me] && void 0 !== je ? je[Me] : se[Me])
		}
		var Me = arguments.length - 2;
		if (1 === Me) Te.children = _e;
		else if (1 < Me) {
			je = Array(Me);
			for (var Fe = 0; Fe < Me; Fe++) je[Fe] = arguments[Fe + 2];
			Te.children = je
		}
		return {
			$$typeof: Ne,
			type: oe.type,
			key: Oe,
			ref: Ae,
			props: Te,
			_owner: Re
		}
	}, se.createContext = function(oe, se) {
		return void 0 === se && (se = null), (oe = {
				$$typeof: Fe,
				_calculateChangedBits: se,
				_currentValue: oe,
				_currentValue2: oe,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			})
			.Provider = {
				$$typeof: Me,
				_context: oe
			}, oe.Consumer = oe
	}, se.createElement = M, se.createFactory = function(oe) {
		var se = M.bind(null, oe);
		return se.type = oe, se
	}, se.createRef = function() {
		return {
			current: null
		}
	}, se.forwardRef = function(oe) {
		return {
			$$typeof: Ue,
			render: oe
		}
	}, se.isValidElement = O, se.lazy = function(oe) {
		return {
			$$typeof: Ve,
			_ctor: oe,
			_status: -1,
			_result: null
		}
	}, se.memo = function(oe, se) {
		return {
			$$typeof: We,
			type: oe,
			compare: void 0 === se ? null : se
		}
	}, se.useCallback = function(oe, se) {
		return Z()
			.useCallback(oe, se)
	}, se.useContext = function(oe, se) {
		return Z()
			.useContext(oe, se)
	}, se.useDebugValue = function() {}, se.useEffect = function(oe, se) {
		return Z()
			.useEffect(oe, se)
	}, se.useImperativeHandle = function(oe, se, _e) {
		return Z()
			.useImperativeHandle(oe, se, _e)
	}, se.useLayoutEffect = function(oe, se) {
		return Z()
			.useLayoutEffect(oe, se)
	}, se.useMemo = function(oe, se) {
		return Z()
			.useMemo(oe, se)
	}, se.useReducer = function(oe, se, _e) {
		return Z()
			.useReducer(oe, se, _e)
	}, se.useRef = function(oe) {
		return Z()
			.useRef(oe)
	}, se.useState = function(oe) {
		return Z()
			.useState(oe)
	}, se.version = "16.14.0"
}, function(oe, se) {
	oe.exports = require("net")
}, function(oe, se) {
	oe.exports = require("dns")
}, function(oe, se, _e) {
	const {
		Writable: ke
	} = _e(34), Te = _e(35), Ne = _e(39);

	function createPacket(oe, se) {
		return Buffer.concat([Buffer.from(Te.encode(Te.encodingLength(oe) + se.length)), Buffer.from(Te.encode(oe)), se])
	}
	oe.exports.createHandshakePacket = (oe, se) => {
		let _e = Buffer.allocUnsafe(2);
		return _e.writeUInt16BE(se, 0), Buffer.concat([createPacket(0, Buffer.concat([Buffer.from(Te.encode(736)), Buffer.from(Te.encode(oe.length)), Buffer.from(oe, "utf8"), _e, Buffer.from(Te.encode(1))])), createPacket(0, Buffer.alloc(0))])
	}, oe.exports.createPingPacket = oe => createPacket(1, new Ne(oe)
		.toBuffer()), oe.exports.PacketDecoder = class PacketDecoder extends ke {
		constructor(oe) {
			super(oe), this.buffer = Buffer.alloc(0)
		}
		_write(oe, se, _e) {
			this.buffer = Buffer.concat([this.buffer, oe]),
				function decodePacket(oe) {
					return new Promise((se, _e) => {
						let ke = Te.decode(oe, 0);
						if (void 0 === ke) return _e(new Error("无法解码数据包长度"));
						if (oe.length < Te.encodingLength(ke) + ke) return _e(new Error("数据包不完整"));
						let Ne = Te.decode(oe, Te.encodingLength(ke));
						if (void 0 === Ne) return _e(new Error("无法解码数据包id"));
						let Oe = oe.slice(Te.encodingLength(ke) + Te.encodingLength(Ne));
						se({
							id: Ne,
							bytes: Te.encodingLength(ke) + ke,
							data: Oe
						})
					})
				}(this.buffer)
				.catch(oe => _e())
				.then(oe => {
					if (oe) return 0 === oe.id ? function decodeHandshakeResponse(oe) {
						return new Promise((se, _e) => {
							let ke = Te.decode(oe.data, 0),
								Ne = oe.data.slice(Te.encodingLength(ke), Te.encodingLength(ke) + ke);
							oe.result = JSON.parse(Ne), se(oe)
						})
					}(oe) : 1 === oe.id ? function decodePong(oe) {
						return new Promise((se, _e) => {
							let ke = new Ne(oe.data);
							oe.result = Date.now() - ke, se(oe)
						})
					}(oe) : void 0
				})
				.then(oe => {
					oe && (this.buffer = this.buffer.slice(oe.bytes), this.emit("packet", oe.result), _e())
				})
				.catch(_e)
		}
	}
}, function(oe, se) {
	oe.exports = require("stream")
}, function(oe, se, _e) {
	oe.exports = {
		encode: _e(36),
		decode: _e(37),
		encodingLength: _e(38)
	}
}, function(oe, se) {
	oe.exports = function encode(oe, se, ke) {
		se = se || [];
		var Te = ke = ke || 0;
		for (; oe >= _e;) se[ke++] = 255 & oe | 128, oe /= 128;
		for (; - 128 & oe;) se[ke++] = 255 & oe | 128, oe >>>= 7;
		return se[ke] = 0 | oe, encode.bytes = ke - Te + 1, se
	};
	var _e = Math.pow(2, 31)
}, function(oe, se) {
	oe.exports = function read(oe, se) {
		var _e, ke = 0,
			Te = 0,
			Ne = se = se || 0,
			Oe = oe.length;
		do {
			if (Ne >= Oe) return read.bytes = 0, void(read.bytesRead = 0);
			_e = oe[Ne++], ke += Te < 28 ? (127 & _e) << Te : (127 & _e) * Math.pow(2, Te), Te += 7
		} while (_e >= 128);
		return read.bytes = Ne - se, ke
	}
}, function(oe, se) {
	var _e = Math.pow(2, 7),
		ke = Math.pow(2, 14),
		Te = Math.pow(2, 21),
		Ne = Math.pow(2, 28),
		Oe = Math.pow(2, 35),
		Ae = Math.pow(2, 42),
		Re = Math.pow(2, 49),
		je = Math.pow(2, 56),
		Me = Math.pow(2, 63);
	oe.exports = function(oe) {
		return oe < _e ? 1 : oe < ke ? 2 : oe < Te ? 3 : oe < Ne ? 4 : oe < Oe ? 5 : oe < Ae ? 6 : oe < Re ? 7 : oe < je ? 8 : oe < Me ? 9 : 10
	}
}, function(oe, se) {
	for (var _e = 4294967296, ke = [], Te = 0; Te < 256; Te++) ke[Te] = (Te > 15 ? "" : "0") + Te.toString(16);
	var Ne = oe.exports = function(oe, se) {
		oe instanceof Buffer ? (this.buffer = oe, this.offset = se || 0) : "[object Uint8Array]" == Object.prototype.toString.call(oe) ? (this.buffer = new Buffer(oe), this.offset = se || 0) : (this.buffer = this.buffer || new Buffer(8), this.offset = 0, this.setValue.apply(this, arguments))
	};
	Ne.MAX_INT = Math.pow(2, 53), Ne.MIN_INT = -Math.pow(2, 53), Ne.prototype = {
		constructor: Ne,
		_2scomp: function() {
			for (var oe = this.buffer, se = this.offset, _e = 1, ke = se + 7; ke >= se; ke--) {
				var Te = (255 ^ oe[ke]) + _e;
				oe[ke] = 255 & Te, _e = Te >> 8
			}
		},
		setValue: function(oe, se) {
			var ke = !1;
			if (1 == arguments.length)
				if ("number" == typeof oe) {
					if (ke = oe < 0, se = (oe = Math.abs(oe)) % _e, (oe /= _e) > _e) throw new RangeError(oe + " 在Int64范围之外");
					oe |= 0
				} else {
					if ("string" != typeof oe) throw new Error(oe + " 必须是一个数字或字符串");
					se = (oe = (oe + "")
							.replace(/^0x/, ""))
						.substr(-8), oe = oe.length > 8 ? oe.substr(0, oe.length - 8) : "", oe = parseInt(oe, 16), se = parseInt(se, 16)
				} for (var Te = this.buffer, Ne = this.offset, Oe = 7; Oe >= 0; Oe--) Te[Ne + Oe] = 255 & se, se = 4 == Oe ? oe : se >>> 8;
			ke && this._2scomp()
		},
		toNumber: function(oe) {
			for (var se = this.buffer, _e = this.offset, ke = 128 & se[_e], Te = 0, Oe = 1, Ae = 7, Re = 1; Ae >= 0; Ae--, Re *= 256) {
				var je = se[_e + Ae];
				ke && (Oe = (je = (255 ^ je) + Oe) >> 8, je &= 255), Te += je * Re
			}
			return !oe && Te >= Ne.MAX_INT ? ke ? -1 / 0 : 1 / 0 : ke ? -Te : Te
		},
		valueOf: function() {
			return this.toNumber(!1)
		},
		toString: function(oe) {
			return this.valueOf()
				.toString(oe || 10)
		},
		toOctetString: function(oe) {
			for (var se = new Array(8), _e = this.buffer, Te = this.offset, Ne = 0; Ne < 8; Ne++) se[Ne] = ke[_e[Te + Ne]];
			return se.join(oe || "")
		},
		toBuffer: function(oe) {
			if (oe && 0 === this.offset) return this.buffer;
			var se = new Buffer(8);
			return this.buffer.copy(se, 0, this.offset, this.offset + 8), se
		},
		copy: function(oe, se) {
			this.buffer.copy(oe, se || 0, this.offset, this.offset + 8)
		},
		compare: function(oe) {
			if ((128 & this.buffer[this.offset]) != (128 & oe.buffer[oe.offset])) return oe.buffer[oe.offset] - this.buffer[this.offset];
			for (var se = 0; se < 8; se++)
				if (this.buffer[this.offset + se] !== oe.buffer[oe.offset + se]) return this.buffer[this.offset + se] - oe.buffer[oe.offset + se];
			return 0
		},
		equals: function(oe) {
			return 0 === this.compare(oe)
		},
		inspect: function() {
			return "[Int64 value:" + this + " octets:" + this.toOctetString(" ") + "]"
		}
	}
}, function(oe, se, _e) {
	"use strict";
	var ke = _e(0),
		Te = _e(15),
		Ne = _e(41);

	function u(oe) {
		for (var se = "https://reactjs.org/docs/error-decoder.html?invariant=" + oe, _e = 1; _e < arguments.length; _e++) se += "&args[]=" + encodeURIComponent(arguments[_e]);
		return "React错误#" + oe + "; 访问 " + se + " 获取完整的消息，或者使用非小型化的开发环境获取完整的错误和其他有用的警告。"
	}
	if (!ke) throw Error(u(227));

	function ba(oe, se, _e, ke, Te, Ne, Oe, Ae, Re) {
		var je = Array.prototype.slice.call(arguments, 3);
		try {
			se.apply(_e, je)
		} catch (oe) {
			this.onError(oe)
		}
	}
	var Oe = !1,
		Ae = null,
		Re = !1,
		je = null,
		Me = {
			onError: function(oe) {
				Oe = !0, Ae = oe
			}
		};

	function ja(oe, se, _e, ke, Te, Ne, Re, je, Fe) {
		Oe = !1, Ae = null, ba.apply(Me, arguments)
	}
	var Fe = null,
		Ue = null,
		Be = null;

	function oa(oe, se, _e) {
		var ke = oe.type || "unknown-event";
		oe.currentTarget = Be(_e),
			function ka(oe, se, _e, ke, Te, Ne, Me, Fe, Ue) {
				if (ja.apply(this, arguments), Oe) {
					if (!Oe) throw Error(u(198));
					var Be = Ae;
					Oe = !1, Ae = null, Re || (Re = !0, je = Be)
				}
			}(ke, se, void 0, oe), oe.currentTarget = null
	}
	var We = null,
		Ve = {};

	function ra() {
		if (We)
			for (var oe in Ve) {
				var se = Ve[oe],
					_e = We.indexOf(oe);
				if (!(-1 < _e)) throw Error(u(96, oe));
				if (!Ye[_e]) {
					if (!se.extractEvents) throw Error(u(97, oe));
					for (var ke in Ye[_e] = se, _e = se.eventTypes) {
						var Te = void 0,
							Ne = _e[ke],
							Oe = se,
							Ae = ke;
						if (Xe.hasOwnProperty(Ae)) throw Error(u(99, Ae));
						Xe[Ae] = Ne;
						var Re = Ne.phasedRegistrationNames;
						if (Re) {
							for (Te in Re) Re.hasOwnProperty(Te) && ua(Re[Te], Oe, Ae);
							Te = !0
						} else Ne.registrationName ? (ua(Ne.registrationName, Oe, Ae), Te = !0) : Te = !1;
						if (!Te) throw Error(u(98, ke, oe))
					}
				}
			}
	}

	function ua(oe, se, _e) {
		if ($e[oe]) throw Error(u(100, oe));
		$e[oe] = se, et[oe] = se.eventTypes[_e].dependencies
	}
	var Ye = [],
		Xe = {},
		$e = {},
		et = {};

	function xa(oe) {
		var se, _e = !1;
		for (se in oe)
			if (oe.hasOwnProperty(se)) {
				var ke = oe[se];
				if (!Ve.hasOwnProperty(se) || Ve[se] !== ke) {
					if (Ve[se]) throw Error(u(102, se));
					Ve[se] = ke, _e = !0
				}
			} _e && ra()
	}
	var tt = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
		nt = null,
		rt = null,
		it = null;

	function Ca(oe) {
		if (oe = Ue(oe)) {
			if ("function" != typeof nt) throw Error(u(280));
			var se = oe.stateNode;
			se && (se = Fe(se), nt(oe.stateNode, oe.type, se))
		}
	}

	function Da(oe) {
		rt ? it ? it.push(oe) : it = [oe] : rt = oe
	}

	function Ea() {
		if (rt) {
			var oe = rt,
				se = it;
			if (it = rt = null, Ca(oe), se)
				for (oe = 0; oe < se.length; oe++) Ca(se[oe])
		}
	}

	function Fa(oe, se) {
		return oe(se)
	}

	function Ga(oe, se, _e, ke, Te) {
		return oe(se, _e, ke, Te)
	}

	function Ha() {}
	var ot = Fa,
		at = !1,
		lt = !1;

	function La() {
		null === rt && null === it || (Ha(), Ea())
	}

	function Ma(oe, se, _e) {
		if (lt) return oe(se, _e);
		lt = !0;
		try {
			return ot(oe, se, _e)
		} finally {
			lt = !1, La()
		}
	}
	var st = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		ct = Object.prototype.hasOwnProperty,
		ut = {},
		dt = {};

	function v(oe, se, _e, ke, Te, Ne) {
		this.acceptsBooleans = 2 === se || 3 === se || 4 === se, this.attributeName = ke, this.attributeNamespace = Te, this.mustUseProperty = _e, this.propertyName = oe, this.type = se, this.sanitizeURL = Ne
	}
	var ft = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ")
		.forEach((function(oe) {
			ft[oe] = new v(oe, 0, !1, oe, null, !1)
		})), [
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach((function(oe) {
			var se = oe[0];
			ft[se] = new v(se, 1, !1, oe[1], null, !1)
		})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(oe) {
			ft[oe] = new v(oe, 2, !1, oe.toLowerCase(), null, !1)
		})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(oe) {
			ft[oe] = new v(oe, 2, !1, oe, null, !1)
		})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ")
		.forEach((function(oe) {
			ft[oe] = new v(oe, 3, !1, oe.toLowerCase(), null, !1)
		})), ["checked", "multiple", "muted", "selected"].forEach((function(oe) {
			ft[oe] = new v(oe, 3, !0, oe, null, !1)
		})), ["capture", "download"].forEach((function(oe) {
			ft[oe] = new v(oe, 4, !1, oe, null, !1)
		})), ["cols", "rows", "size", "span"].forEach((function(oe) {
			ft[oe] = new v(oe, 6, !1, oe, null, !1)
		})), ["rowSpan", "start"].forEach((function(oe) {
			ft[oe] = new v(oe, 5, !1, oe.toLowerCase(), null, !1)
		}));
	var ht = /[\-:]([a-z])/g;

	function Va(oe) {
		return oe[1].toUpperCase()
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ")
		.forEach((function(oe) {
			var se = oe.replace(ht, Va);
			ft[se] = new v(se, 1, !1, oe, null, !1)
		})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ")
		.forEach((function(oe) {
			var se = oe.replace(ht, Va);
			ft[se] = new v(se, 1, !1, oe, "http://www.w3.org/1999/xlink", !1)
		})), ["xml:base", "xml:lang", "xml:space"].forEach((function(oe) {
			var se = oe.replace(ht, Va);
			ft[se] = new v(se, 1, !1, oe, "http://www.w3.org/XML/1998/namespace", !1)
		})), ["tabIndex", "crossOrigin"].forEach((function(oe) {
			ft[oe] = new v(oe, 1, !1, oe.toLowerCase(), null, !1)
		})), ft.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(oe) {
			ft[oe] = new v(oe, 1, !1, oe.toLowerCase(), null, !0)
		}));
	var pt = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function Xa(oe, se, _e, ke) {
		var Te = ft.hasOwnProperty(se) ? ft[se] : null;
		(null !== Te ? 0 === Te.type : !ke && (2 < se.length && ("o" === se[0] || "O" === se[0]) && ("n" === se[1] || "N" === se[1]))) || (function Ta(oe, se, _e, ke) {
			if (null == se || function Sa(oe, se, _e, ke) {
				if (null !== _e && 0 === _e.type) return !1;
				switch (typeof se) {
					case "function":
					case "symbol":
						return !0;
					case "boolean":
						return !ke && (null !== _e ? !_e.acceptsBooleans : "data-" !== (oe = oe.toLowerCase()
							.slice(0, 5)) && "aria-" !== oe);
					default:
						return !1
				}
			}(oe, se, _e, ke)) return !0;
			if (ke) return !1;
			if (null !== _e) switch (_e.type) {
				case 3:
					return !se;
				case 4:
					return !1 === se;
				case 5:
					return isNaN(se);
				case 6:
					return isNaN(se) || 1 > se
			}
			return !1
		}(se, _e, Te, ke) && (_e = null), ke || null === Te ? function Ra(oe) {
			return !!ct.call(dt, oe) || !ct.call(ut, oe) && (st.test(oe) ? dt[oe] = !0 : (ut[oe] = !0, !1))
		}(se) && (null === _e ? oe.removeAttribute(se) : oe.setAttribute(se, "" + _e)) : Te.mustUseProperty ? oe[Te.propertyName] = null === _e ? 3 !== Te.type && "" : _e : (se = Te.attributeName, ke = Te.attributeNamespace, null === _e ? oe.removeAttribute(se) : (_e = 3 === (Te = Te.type) || 4 === Te && !0 === _e ? "" : "" + _e, ke ? oe.setAttributeNS(ke, se, _e) : oe.setAttribute(se, _e))))
	}
	pt.hasOwnProperty("ReactCurrentDispatcher") || (pt.ReactCurrentDispatcher = {
		current: null
	}), pt.hasOwnProperty("ReactCurrentBatchConfig") || (pt.ReactCurrentBatchConfig = {
		suspense: null
	});
	var mt = /^(.*)[\\\/]/,
		gt = "function" == typeof Symbol && Symbol.for,
		vt = gt ? Symbol.for("react.element") : 60103,
		bt = gt ? Symbol.for("react.portal") : 60106,
		yt = gt ? Symbol.for("react.fragment") : 60107,
		Et = gt ? Symbol.for("react.strict_mode") : 60108,
		wt = gt ? Symbol.for("react.profiler") : 60114,
		_t = gt ? Symbol.for("react.provider") : 60109,
		St = gt ? Symbol.for("react.context") : 60110,
		kt = gt ? Symbol.for("react.concurrent_mode") : 60111,
		Tt = gt ? Symbol.for("react.forward_ref") : 60112,
		xt = gt ? Symbol.for("react.suspense") : 60113,
		Ct = gt ? Symbol.for("react.suspense_list") : 60120,
		Nt = gt ? Symbol.for("react.memo") : 60115,
		It = gt ? Symbol.for("react.lazy") : 60116,
		Pt = gt ? Symbol.for("react.block") : 60121,
		Ot = "function" == typeof Symbol && Symbol.iterator;

	function nb(oe) {
		return null === oe || "object" != typeof oe ? null : "function" == typeof(oe = Ot && oe[Ot] || oe["@@iterator"]) ? oe : null
	}

	function pb(oe) {
		if (null == oe) return null;
		if ("function" == typeof oe) return oe.displayName || oe.name || null;
		if ("string" == typeof oe) return oe;
		switch (oe) {
			case yt:
				return "Fragment";
			case bt:
				return "Portal";
			case wt:
				return "Profiler";
			case Et:
				return "StrictMode";
			case xt:
				return "Suspense";
			case Ct:
				return "SuspenseList"
		}
		if ("object" == typeof oe) switch (oe.$$typeof) {
			case St:
				return "Context.Consumer";
			case _t:
				return "Context.Provider";
			case Tt:
				var se = oe.render;
				return se = se.displayName || se.name || "", oe.displayName || ("" !== se ? "ForwardRef(" + se + ")" : "ForwardRef");
			case Nt:
				return pb(oe.type);
			case Pt:
				return pb(oe.render);
			case It:
				if (oe = 1 === oe._status ? oe._result : null) return pb(oe)
		}
		return null
	}

	function qb(oe) {
		var se = "";
		do {
			e: switch (oe.tag) {
				case 3:
				case 4:
				case 6:
				case 7:
				case 10:
				case 9:
					var _e = "";
					break e;
				default:
					var ke = oe._debugOwner,
						Te = oe._debugSource,
						Ne = pb(oe.type);
					_e = null, ke && (_e = pb(ke.type)), ke = Ne, Ne = "", Te ? Ne = " (at " + Te.fileName.replace(mt, "") + ":" + Te.lineNumber + ")" : _e && (Ne = " (created by " + _e + ")"), _e = "\n    in " + (ke || "Unknown") + Ne
			}
			se += _e,
			oe = oe.return
		} while (oe);
		return se
	}

	function rb(oe) {
		switch (typeof oe) {
			case "boolean":
			case "number":
			case "object":
			case "string":
			case "undefined":
				return oe;
			default:
				return ""
		}
	}

	function sb(oe) {
		var se = oe.type;
		return (oe = oe.nodeName) && "input" === oe.toLowerCase() && ("checkbox" === se || "radio" === se)
	}

	function xb(oe) {
		oe._valueTracker || (oe._valueTracker = function tb(oe) {
			var se = sb(oe) ? "checked" : "value",
				_e = Object.getOwnPropertyDescriptor(oe.constructor.prototype, se),
				ke = "" + oe[se];
			if (!oe.hasOwnProperty(se) && void 0 !== _e && "function" == typeof _e.get && "function" == typeof _e.set) {
				var Te = _e.get,
					Ne = _e.set;
				return Object.defineProperty(oe, se, {
					configurable: !0,
					get: function() {
						return Te.call(this)
					},
					set: function(oe) {
						ke = "" + oe, Ne.call(this, oe)
					}
				}), Object.defineProperty(oe, se, {
					enumerable: _e.enumerable
				}), {
					getValue: function() {
						return ke
					},
					setValue: function(oe) {
						ke = "" + oe
					},
					stopTracking: function() {
						oe._valueTracker = null, delete oe[se]
					}
				}
			}
		}(oe))
	}

	function yb(oe) {
		if (!oe) return !1;
		var se = oe._valueTracker;
		if (!se) return !0;
		var _e = se.getValue(),
			ke = "";
		return oe && (ke = sb(oe) ? oe.checked ? "true" : "false" : oe.value), (oe = ke) !== _e && (se.setValue(oe), !0)
	}

	function zb(oe, se) {
		var _e = se.checked;
		return Te({}, se, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != _e ? _e : oe._wrapperState.initialChecked
		})
	}

	function Ab(oe, se) {
		var _e = null == se.defaultValue ? "" : se.defaultValue,
			ke = null != se.checked ? se.checked : se.defaultChecked;
		_e = rb(null != se.value ? se.value : _e), oe._wrapperState = {
			initialChecked: ke,
			initialValue: _e,
			controlled: "checkbox" === se.type || "radio" === se.type ? null != se.checked : null != se.value
		}
	}

	function Bb(oe, se) {
		null != (se = se.checked) && Xa(oe, "checked", se, !1)
	}

	function Cb(oe, se) {
		Bb(oe, se);
		var _e = rb(se.value),
			ke = se.type;
		if (null != _e) "number" === ke ? (0 === _e && "" === oe.value || oe.value != _e) && (oe.value = "" + _e) : oe.value !== "" + _e && (oe.value = "" + _e);
		else if ("submit" === ke || "reset" === ke) return void oe.removeAttribute("value");
		se.hasOwnProperty("value") ? Db(oe, se.type, _e) : se.hasOwnProperty("defaultValue") && Db(oe, se.type, rb(se.defaultValue)), null == se.checked && null != se.defaultChecked && (oe.defaultChecked = !!se.defaultChecked)
	}

	function Eb(oe, se, _e) {
		if (se.hasOwnProperty("value") || se.hasOwnProperty("defaultValue")) {
			var ke = se.type;
			if (!("submit" !== ke && "reset" !== ke || void 0 !== se.value && null !== se.value)) return;
			se = "" + oe._wrapperState.initialValue, _e || se === oe.value || (oe.value = se), oe.defaultValue = se
		}
		"" !== (_e = oe.name) && (oe.name = ""), oe.defaultChecked = !!oe._wrapperState.initialChecked, "" !== _e && (oe.name = _e)
	}

	function Db(oe, se, _e) {
		"number" === se && oe.ownerDocument.activeElement === oe || (null == _e ? oe.defaultValue = "" + oe._wrapperState.initialValue : oe.defaultValue !== "" + _e && (oe.defaultValue = "" + _e))
	}

	function Gb(oe, se) {
		return oe = Te({
			children: void 0
		}, se), (se = function Fb(oe) {
			var se = "";
			return ke.Children.forEach(oe, (function(oe) {
				null != oe && (se += oe)
			})), se
		}(se.children)) && (oe.children = se), oe
	}

	function Hb(oe, se, _e, ke) {
		if (oe = oe.options, se) {
			se = {};
			for (var Te = 0; Te < _e.length; Te++) se["$" + _e[Te]] = !0;
			for (_e = 0; _e < oe.length; _e++) Te = se.hasOwnProperty("$" + oe[_e].value), oe[_e].selected !== Te && (oe[_e].selected = Te), Te && ke && (oe[_e].defaultSelected = !0)
		} else {
			for (_e = "" + rb(_e), se = null, Te = 0; Te < oe.length; Te++) {
				if (oe[Te].value === _e) return oe[Te].selected = !0, void(ke && (oe[Te].defaultSelected = !0));
				null !== se || oe[Te].disabled || (se = oe[Te])
			}
			null !== se && (se.selected = !0)
		}
	}

	function Ib(oe, se) {
		if (null != se.dangerouslySetInnerHTML) throw Error(u(91));
		return Te({}, se, {
			value: void 0,
			defaultValue: void 0,
			children: "" + oe._wrapperState.initialValue
		})
	}

	function Jb(oe, se) {
		var _e = se.value;
		if (null == _e) {
			if (_e = se.children, se = se.defaultValue, null != _e) {
				if (null != se) throw Error(u(92));
				if (Array.isArray(_e)) {
					if (!(1 >= _e.length)) throw Error(u(93));
					_e = _e[0]
				}
				se = _e
			}
			null == se && (se = ""), _e = se
		}
		oe._wrapperState = {
			initialValue: rb(_e)
		}
	}

	function Kb(oe, se) {
		var _e = rb(se.value),
			ke = rb(se.defaultValue);
		null != _e && ((_e = "" + _e) !== oe.value && (oe.value = _e), null == se.defaultValue && oe.defaultValue !== _e && (oe.defaultValue = _e)), null != ke && (oe.defaultValue = "" + ke)
	}

	function Lb(oe) {
		var se = oe.textContent;
		se === oe._wrapperState.initialValue && "" !== se && null !== se && (oe.value = se)
	}
	var Dt = "http://www.w3.org/1999/xhtml",
		At = "http://www.w3.org/2000/svg";

	function Nb(oe) {
		switch (oe) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml"
		}
	}

	function Ob(oe, se) {
		return null == oe || "http://www.w3.org/1999/xhtml" === oe ? Nb(se) : "http://www.w3.org/2000/svg" === oe && "foreignObject" === se ? "http://www.w3.org/1999/xhtml" : oe
	}
	var Lt, Rt = function(oe) {
		return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(se, _e, ke, Te) {
			MSApp.execUnsafeLocalFunction((function() {
				return oe(se, _e)
			}))
		} : oe
	}((function(oe, se) {
		if (oe.namespaceURI !== At || "innerHTML" in oe) oe.innerHTML = se;
		else {
			for ((Lt = Lt || document.createElement("div"))
				.innerHTML = "<svg>" + se.valueOf()
				.toString() + "</svg>", se = Lt.firstChild; oe.firstChild;) oe.removeChild(oe.firstChild);
			for (; se.firstChild;) oe.appendChild(se.firstChild)
		}
	}));

	function Rb(oe, se) {
		if (se) {
			var _e = oe.firstChild;
			if (_e && _e === oe.lastChild && 3 === _e.nodeType) return void(_e.nodeValue = se)
		}
		oe.textContent = se
	}

	function Sb(oe, se) {
		var _e = {};
		return _e[oe.toLowerCase()] = se.toLowerCase(), _e["Webkit" + oe] = "webkit" + se, _e["Moz" + oe] = "moz" + se, _e
	}
	var jt = {
			animationend: Sb("Animation", "AnimationEnd"),
			animationiteration: Sb("Animation", "AnimationIteration"),
			animationstart: Sb("Animation", "AnimationStart"),
			transitionend: Sb("Transition", "TransitionEnd")
		},
		Mt = {},
		Ft = {};

	function Wb(oe) {
		if (Mt[oe]) return Mt[oe];
		if (!jt[oe]) return oe;
		var se, _e = jt[oe];
		for (se in _e)
			if (_e.hasOwnProperty(se) && se in Ft) return Mt[oe] = _e[se];
		return oe
	}
	tt && (Ft = document.createElement("div")
		.style, "AnimationEvent" in window || (delete jt.animationend.animation, delete jt.animationiteration.animation, delete jt.animationstart.animation), "TransitionEvent" in window || delete jt.transitionend.transition);
	var Ht = Wb("animationend"),
		Ut = Wb("animationiteration"),
		Bt = Wb("animationstart"),
		zt = Wb("transitionend"),
		Wt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		Vt = new("function" == typeof WeakMap ? WeakMap : Map);

	function cc(oe) {
		var se = Vt.get(oe);
		return void 0 === se && (se = new Map, Vt.set(oe, se)), se
	}

	function dc(oe) {
		var se = oe,
			_e = oe;
		if (oe.alternate)
			for (; se.return;) se = se.return;
		else {
			oe = se;
			do {
				0 != (1026 & (se = oe)
					.effectTag) && (_e = se.return), oe = se.return
			} while (oe)
		}
		return 3 === se.tag ? _e : null
	}

	function ec(oe) {
		if (13 === oe.tag) {
			var se = oe.memoizedState;
			if (null === se && (null !== (oe = oe.alternate) && (se = oe.memoizedState)), null !== se) return se.dehydrated
		}
		return null
	}

	function fc(oe) {
		if (dc(oe) !== oe) throw Error(u(188))
	}

	function hc(oe) {
		if (!(oe = function gc(oe) {
			var se = oe.alternate;
			if (!se) {
				if (null === (se = dc(oe))) throw Error(u(188));
				return se !== oe ? null : oe
			}
			for (var _e = oe, ke = se;;) {
				var Te = _e.return;
				if (null === Te) break;
				var Ne = Te.alternate;
				if (null === Ne) {
					if (null !== (ke = Te.return)) {
						_e = ke;
						continue
					}
					break
				}
				if (Te.child === Ne.child) {
					for (Ne = Te.child; Ne;) {
						if (Ne === _e) return fc(Te), oe;
						if (Ne === ke) return fc(Te), se;
						Ne = Ne.sibling
					}
					throw Error(u(188))
				}
				if (_e.return !== ke.return) _e = Te, ke = Ne;
				else {
					for (var Oe = !1, Ae = Te.child; Ae;) {
						if (Ae === _e) {
							Oe = !0, _e = Te, ke = Ne;
							break
						}
						if (Ae === ke) {
							Oe = !0, ke = Te, _e = Ne;
							break
						}
						Ae = Ae.sibling
					}
					if (!Oe) {
						for (Ae = Ne.child; Ae;) {
							if (Ae === _e) {
								Oe = !0, _e = Ne, ke = Te;
								break
							}
							if (Ae === ke) {
								Oe = !0, ke = Ne, _e = Te;
								break
							}
							Ae = Ae.sibling
						}
						if (!Oe) throw Error(u(189))
					}
				}
				if (_e.alternate !== ke) throw Error(u(190))
			}
			if (3 !== _e.tag) throw Error(u(188));
			return _e.stateNode.current === _e ? oe : se
		}(oe))) return null;
		for (var se = oe;;) {
			if (5 === se.tag || 6 === se.tag) return se;
			if (se.child) se.child.return = se, se = se.child;
			else {
				if (se === oe) break;
				for (; !se.sibling;) {
					if (!se.return || se.return === oe) return null;
					se = se.return
				}
				se.sibling.return = se.return, se = se.sibling
			}
		}
		return null
	}

	function ic(oe, se) {
		if (null == se) throw Error(u(30));
		return null == oe ? se : Array.isArray(oe) ? Array.isArray(se) ? (oe.push.apply(oe, se), oe) : (oe.push(se), oe) : Array.isArray(se) ? [oe].concat(se) : [oe, se]
	}

	function jc(oe, se, _e) {
		Array.isArray(oe) ? oe.forEach(se, _e) : oe && se.call(_e, oe)
	}
	var Qt = null;

	function lc(oe) {
		if (oe) {
			var se = oe._dispatchListeners,
				_e = oe._dispatchInstances;
			if (Array.isArray(se))
				for (var ke = 0; ke < se.length && !oe.isPropagationStopped(); ke++) oa(oe, se[ke], _e[ke]);
			else se && oa(oe, se, _e);
			oe._dispatchListeners = null, oe._dispatchInstances = null, oe.isPersistent() || oe.constructor.release(oe)
		}
	}

	function mc(oe) {
		if (null !== oe && (Qt = ic(Qt, oe)), oe = Qt, Qt = null, oe) {
			if (jc(oe, lc), Qt) throw Error(u(95));
			if (Re) throw oe = je, Re = !1, je = null, oe
		}
	}

	function nc(oe) {
		return (oe = oe.target || oe.srcElement || window)
			.correspondingUseElement && (oe = oe.correspondingUseElement), 3 === oe.nodeType ? oe.parentNode : oe
	}

	function oc(oe) {
		if (!tt) return !1;
		var se = (oe = "on" + oe) in document;
		return se || ((se = document.createElement("div"))
			.setAttribute(oe, "return;"), se = "function" == typeof se[oe]), se
	}
	var qt = [];

	function qc(oe) {
		oe.topLevelType = null, oe.nativeEvent = null, oe.targetInst = null, oe.ancestors.length = 0, 10 > qt.length && qt.push(oe)
	}

	function rc(oe, se, _e, ke) {
		if (qt.length) {
			var Te = qt.pop();
			return Te.topLevelType = oe, Te.eventSystemFlags = ke, Te.nativeEvent = se, Te.targetInst = _e, Te
		}
		return {
			topLevelType: oe,
			eventSystemFlags: ke,
			nativeEvent: se,
			targetInst: _e,
			ancestors: []
		}
	}

	function sc(oe) {
		var se = oe.targetInst,
			_e = se;
		do {
			if (!_e) {
				oe.ancestors.push(_e);
				break
			}
			var ke = _e;
			if (3 === ke.tag) ke = ke.stateNode.containerInfo;
			else {
				for (; ke.return;) ke = ke.return;
				ke = 3 !== ke.tag ? null : ke.stateNode.containerInfo
			}
			if (!ke) break;
			5 !== (se = _e.tag) && 6 !== se || oe.ancestors.push(_e), _e = tc(ke)
		} while (_e);
		for (_e = 0; _e < oe.ancestors.length; _e++) {
			se = oe.ancestors[_e];
			var Te = nc(oe.nativeEvent);
			ke = oe.topLevelType;
			var Ne = oe.nativeEvent,
				Oe = oe.eventSystemFlags;
			0 === _e && (Oe |= 64);
			for (var Ae = null, Re = 0; Re < Ye.length; Re++) {
				var je = Ye[Re];
				je && (je = je.extractEvents(ke, se, Ne, Te, Oe)) && (Ae = ic(Ae, je))
			}
			mc(Ae)
		}
	}

	function uc(oe, se, _e) {
		if (!_e.has(oe)) {
			switch (oe) {
				case "scroll":
					vc(se, "scroll", !0);
					break;
				case "focus":
				case "blur":
					vc(se, "focus", !0), vc(se, "blur", !0), _e.set("blur", null), _e.set("focus", null);
					break;
				case "cancel":
				case "close":
					oc(oe) && vc(se, oe, !0);
					break;
				case "invalid":
				case "submit":
				case "reset":
					break;
				default:
					-1 === Wt.indexOf(oe) && F(oe, se)
			}
			_e.set(oe, null)
		}
	}
	var Gt, Kt, Yt, Jt = !1,
		Xt = [],
		$t = null,
		Zt = null,
		en = null,
		tn = new Map,
		nn = new Map,
		rn = [],
		on = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
		an = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

	function Kc(oe, se, _e, ke, Te) {
		return {
			blockedOn: oe,
			topLevelType: se,
			eventSystemFlags: 32 | _e,
			nativeEvent: Te,
			container: ke
		}
	}

	function Lc(oe, se) {
		switch (oe) {
			case "focus":
			case "blur":
				$t = null;
				break;
			case "dragenter":
			case "dragleave":
				Zt = null;
				break;
			case "mouseover":
			case "mouseout":
				en = null;
				break;
			case "pointerover":
			case "pointerout":
				tn.delete(se.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				nn.delete(se.pointerId)
		}
	}

	function Mc(oe, se, _e, ke, Te, Ne) {
		return null === oe || oe.nativeEvent !== Ne ? (oe = Kc(se, _e, ke, Te, Ne), null !== se && (null !== (se = Nc(se)) && Kt(se)), oe) : (oe.eventSystemFlags |= ke, oe)
	}

	function Pc(oe) {
		var se = tc(oe.target);
		if (null !== se) {
			var _e = dc(se);
			if (null !== _e)
				if (13 === (se = _e.tag)) {
					if (null !== (se = ec(_e))) return oe.blockedOn = se, void Ne.unstable_runWithPriority(oe.priority, (function() {
						Yt(_e)
					}))
				} else if (3 === se && _e.stateNode.hydrate) return void(oe.blockedOn = 3 === _e.tag ? _e.stateNode.containerInfo : null)
		}
		oe.blockedOn = null
	}

	function Qc(oe) {
		if (null !== oe.blockedOn) return !1;
		var se = Rc(oe.topLevelType, oe.eventSystemFlags, oe.container, oe.nativeEvent);
		if (null !== se) {
			var _e = Nc(se);
			return null !== _e && Kt(_e), oe.blockedOn = se, !1
		}
		return !0
	}

	function Sc(oe, se, _e) {
		Qc(oe) && _e.delete(se)
	}

	function Tc() {
		for (Jt = !1; 0 < Xt.length;) {
			var oe = Xt[0];
			if (null !== oe.blockedOn) {
				null !== (oe = Nc(oe.blockedOn)) && Gt(oe);
				break
			}
			var se = Rc(oe.topLevelType, oe.eventSystemFlags, oe.container, oe.nativeEvent);
			null !== se ? oe.blockedOn = se : Xt.shift()
		}
		null !== $t && Qc($t) && ($t = null), null !== Zt && Qc(Zt) && (Zt = null), null !== en && Qc(en) && (en = null), tn.forEach(Sc), nn.forEach(Sc)
	}

	function Uc(oe, se) {
		oe.blockedOn === se && (oe.blockedOn = null, Jt || (Jt = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Tc)))
	}

	function Vc(oe) {
		function b(se) {
			return Uc(se, oe)
		}
		if (0 < Xt.length) {
			Uc(Xt[0], oe);
			for (var se = 1; se < Xt.length; se++) {
				var _e = Xt[se];
				_e.blockedOn === oe && (_e.blockedOn = null)
			}
		}
		for (null !== $t && Uc($t, oe), null !== Zt && Uc(Zt, oe), null !== en && Uc(en, oe), tn.forEach(b), nn.forEach(b), se = 0; se < rn.length; se++)(_e = rn[se])
			.blockedOn === oe && (_e.blockedOn = null);
		for (; 0 < rn.length && null === (se = rn[0])
			.blockedOn;) Pc(se), null === se.blockedOn && rn.shift()
	}
	var ln = {},
		sn = new Map,
		cn = new Map,
		un = ["abort", "abort", Ht, "animationEnd", Ut, "animationIteration", Bt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", zt, "transitionEnd", "waiting", "waiting"];

	function ad(oe, se) {
		for (var _e = 0; _e < oe.length; _e += 2) {
			var ke = oe[_e],
				Te = oe[_e + 1],
				Ne = "on" + (Te[0].toUpperCase() + Te.slice(1));
			Ne = {
				phasedRegistrationNames: {
					bubbled: Ne,
					captured: Ne + "Capture"
				},
				dependencies: [ke],
				eventPriority: se
			}, cn.set(ke, se), sn.set(ke, Ne), ln[Te] = Ne
		}
	}
	ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), ad(un, 2);
	for (var dn = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), fn = 0; fn < dn.length; fn++) cn.set(dn[fn], 0);
	var hn = Ne.unstable_UserBlockingPriority,
		pn = Ne.unstable_runWithPriority,
		mn = !0;

	function F(oe, se) {
		vc(se, oe, !1)
	}

	function vc(oe, se, _e) {
		var ke = cn.get(se);
		switch (void 0 === ke ? 2 : ke) {
			case 0:
				ke = gd.bind(null, se, 1, oe);
				break;
			case 1:
				ke = hd.bind(null, se, 1, oe);
				break;
			default:
				ke = id.bind(null, se, 1, oe)
		}
		_e ? oe.addEventListener(se, ke, !0) : oe.addEventListener(se, ke, !1)
	}

	function gd(oe, se, _e, ke) {
		at || Ha();
		var Te = id,
			Ne = at;
		at = !0;
		try {
			Ga(Te, oe, se, _e, ke)
		} finally {
			(at = Ne) || La()
		}
	}

	function hd(oe, se, _e, ke) {
		pn(hn, id.bind(null, oe, se, _e, ke))
	}

	function id(oe, se, _e, ke) {
		if (mn)
			if (0 < Xt.length && -1 < on.indexOf(oe)) oe = Kc(null, oe, se, _e, ke), Xt.push(oe);
			else {
				var Te = Rc(oe, se, _e, ke);
				if (null === Te) Lc(oe, ke);
				else if (-1 < on.indexOf(oe)) oe = Kc(Te, oe, se, _e, ke), Xt.push(oe);
				else if (! function Oc(oe, se, _e, ke, Te) {
					switch (se) {
						case "focus":
							return $t = Mc($t, oe, se, _e, ke, Te), !0;
						case "dragenter":
							return Zt = Mc(Zt, oe, se, _e, ke, Te), !0;
						case "mouseover":
							return en = Mc(en, oe, se, _e, ke, Te), !0;
						case "pointerover":
							var Ne = Te.pointerId;
							return tn.set(Ne, Mc(tn.get(Ne) || null, oe, se, _e, ke, Te)), !0;
						case "gotpointercapture":
							return Ne = Te.pointerId, nn.set(Ne, Mc(nn.get(Ne) || null, oe, se, _e, ke, Te)), !0
					}
					return !1
				}(Te, oe, se, _e, ke)) {
					Lc(oe, ke), oe = rc(oe, ke, null, se);
					try {
						Ma(sc, oe)
					} finally {
						qc(oe)
					}
				}
			}
	}

	function Rc(oe, se, _e, ke) {
		if (null !== (_e = tc(_e = nc(ke)))) {
			var Te = dc(_e);
			if (null === Te) _e = null;
			else {
				var Ne = Te.tag;
				if (13 === Ne) {
					if (null !== (_e = ec(Te))) return _e;
					_e = null
				} else if (3 === Ne) {
					if (Te.stateNode.hydrate) return 3 === Te.tag ? Te.stateNode.containerInfo : null;
					_e = null
				} else Te !== _e && (_e = null)
			}
		}
		oe = rc(oe, ke, _e, se);
		try {
			Ma(sc, oe)
		} finally {
			qc(oe)
		}
		return null
	}
	var gn = {
			animationIterationCount: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0
		},
		vn = ["Webkit", "ms", "Moz", "O"];

	function ld(oe, se, _e) {
		return null == se || "boolean" == typeof se || "" === se ? "" : _e || "number" != typeof se || 0 === se || gn.hasOwnProperty(oe) && gn[oe] ? ("" + se)
			.trim() : se + "px"
	}

	function md(oe, se) {
		for (var _e in oe = oe.style, se)
			if (se.hasOwnProperty(_e)) {
				var ke = 0 === _e.indexOf("--"),
					Te = ld(_e, se[_e], ke);
				"float" === _e && (_e = "cssFloat"), ke ? oe.setProperty(_e, Te) : oe[_e] = Te
			}
	}
	Object.keys(gn)
		.forEach((function(oe) {
			vn.forEach((function(se) {
				se = se + oe.charAt(0)
					.toUpperCase() + oe.substring(1), gn[se] = gn[oe]
			}))
		}));
	var bn = Te({
		menuitem: !0
	}, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});

	function od(oe, se) {
		if (se) {
			if (bn[oe] && (null != se.children || null != se.dangerouslySetInnerHTML)) throw Error(u(137, oe, ""));
			if (null != se.dangerouslySetInnerHTML) {
				if (null != se.children) throw Error(u(60));
				if ("object" != typeof se.dangerouslySetInnerHTML || !("__html" in se.dangerouslySetInnerHTML)) throw Error(u(61))
			}
			if (null != se.style && "object" != typeof se.style) throw Error(u(62, ""))
		}
	}

	function pd(oe, se) {
		if (-1 === oe.indexOf("-")) return "string" == typeof se.is;
		switch (oe) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var yn = Dt;

	function rd(oe, se) {
		var _e = cc(oe = 9 === oe.nodeType || 11 === oe.nodeType ? oe : oe.ownerDocument);
		se = et[se];
		for (var ke = 0; ke < se.length; ke++) uc(se[ke], oe, _e)
	}

	function sd() {}

	function td(oe) {
		if (void 0 === (oe = oe || ("undefined" != typeof document ? document : void 0))) return null;
		try {
			return oe.activeElement || oe.body
		} catch (se) {
			return oe.body
		}
	}

	function ud(oe) {
		for (; oe && oe.firstChild;) oe = oe.firstChild;
		return oe
	}

	function vd(oe, se) {
		var _e, ke = ud(oe);
		for (oe = 0; ke;) {
			if (3 === ke.nodeType) {
				if (_e = oe + ke.textContent.length, oe <= se && _e >= se) return {
					node: ke,
					offset: se - oe
				};
				oe = _e
			}
			e: {
				for (; ke;) {
					if (ke.nextSibling) {
						ke = ke.nextSibling;
						break e
					}
					ke = ke.parentNode
				}
				ke = void 0
			}
			ke = ud(ke)
		}
	}

	function xd() {
		for (var oe = window, se = td(); se instanceof oe.HTMLIFrameElement;) {
			try {
				var _e = "string" == typeof se.contentWindow.location.href
			} catch (oe) {
				_e = !1
			}
			if (!_e) break;
			se = td((oe = se.contentWindow)
				.document)
		}
		return se
	}

	function yd(oe) {
		var se = oe && oe.nodeName && oe.nodeName.toLowerCase();
		return se && ("input" === se && ("text" === oe.type || "search" === oe.type || "tel" === oe.type || "url" === oe.type || "password" === oe.type) || "textarea" === se || "true" === oe.contentEditable)
	}
	var En = null,
		wn = null;

	function Fd(oe, se) {
		switch (oe) {
			case "button":
			case "input":
			case "select":
			case "textarea":
				return !!se.autoFocus
		}
		return !1
	}

	function Gd(oe, se) {
		return "textarea" === oe || "option" === oe || "noscript" === oe || "string" == typeof se.children || "number" == typeof se.children || "object" == typeof se.dangerouslySetInnerHTML && null !== se.dangerouslySetInnerHTML && null != se.dangerouslySetInnerHTML.__html
	}
	var _n = "function" == typeof setTimeout ? setTimeout : void 0,
		Sn = "function" == typeof clearTimeout ? clearTimeout : void 0;

	function Jd(oe) {
		for (; null != oe; oe = oe.nextSibling) {
			var se = oe.nodeType;
			if (1 === se || 3 === se) break
		}
		return oe
	}

	function Kd(oe) {
		oe = oe.previousSibling;
		for (var se = 0; oe;) {
			if (8 === oe.nodeType) {
				var _e = oe.data;
				if ("$" === _e || "$!" === _e || "$?" === _e) {
					if (0 === se) return oe;
					se--
				} else "/$" === _e && se++
			}
			oe = oe.previousSibling
		}
		return null
	}
	var kn = Math.random()
		.toString(36)
		.slice(2),
		Tn = "__reactInternalInstance$" + kn,
		xn = "__reactEventHandlers$" + kn,
		Cn = "__reactContainere$" + kn;

	function tc(oe) {
		var se = oe[Tn];
		if (se) return se;
		for (var _e = oe.parentNode; _e;) {
			if (se = _e[Cn] || _e[Tn]) {
				if (_e = se.alternate, null !== se.child || null !== _e && null !== _e.child)
					for (oe = Kd(oe); null !== oe;) {
						if (_e = oe[Tn]) return _e;
						oe = Kd(oe)
					}
				return se
			}
			_e = (oe = _e)
				.parentNode
		}
		return null
	}

	function Nc(oe) {
		return !(oe = oe[Tn] || oe[Cn]) || 5 !== oe.tag && 6 !== oe.tag && 13 !== oe.tag && 3 !== oe.tag ? null : oe
	}

	function Pd(oe) {
		if (5 === oe.tag || 6 === oe.tag) return oe.stateNode;
		throw Error(u(33))
	}

	function Qd(oe) {
		return oe[xn] || null
	}

	function Rd(oe) {
		do {
			oe = oe.return
		} while (oe && 5 !== oe.tag);
		return oe || null
	}

	function Sd(oe, se) {
		var _e = oe.stateNode;
		if (!_e) return null;
		var ke = Fe(_e);
		if (!ke) return null;
		_e = ke[se];
		e: switch (se) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(ke = !ke.disabled) || (ke = !("button" === (oe = oe.type) || "input" === oe || "select" === oe || "textarea" === oe)), oe = !ke;
				break e;
			default:
				oe = !1
		}
		if (oe) return null;
		if (_e && "function" != typeof _e) throw Error(u(231, se, typeof _e));
		return _e
	}

	function Td(oe, se, _e) {
		(se = Sd(oe, _e.dispatchConfig.phasedRegistrationNames[se])) && (_e._dispatchListeners = ic(_e._dispatchListeners, se), _e._dispatchInstances = ic(_e._dispatchInstances, oe))
	}

	function Ud(oe) {
		if (oe && oe.dispatchConfig.phasedRegistrationNames) {
			for (var se = oe._targetInst, _e = []; se;) _e.push(se), se = Rd(se);
			for (se = _e.length; 0 < se--;) Td(_e[se], "captured", oe);
			for (se = 0; se < _e.length; se++) Td(_e[se], "bubbled", oe)
		}
	}

	function Vd(oe, se, _e) {
		oe && _e && _e.dispatchConfig.registrationName && (se = Sd(oe, _e.dispatchConfig.registrationName)) && (_e._dispatchListeners = ic(_e._dispatchListeners, se), _e._dispatchInstances = ic(_e._dispatchInstances, oe))
	}

	function Wd(oe) {
		oe && oe.dispatchConfig.registrationName && Vd(oe._targetInst, null, oe)
	}

	function Xd(oe) {
		jc(oe, Ud)
	}
	var Nn = null,
		In = null,
		Pn = null;

	function ae() {
		if (Pn) return Pn;
		var oe, se, _e = In,
			ke = _e.length,
			Te = "value" in Nn ? Nn.value : Nn.textContent,
			Ne = Te.length;
		for (oe = 0; oe < ke && _e[oe] === Te[oe]; oe++);
		var Oe = ke - oe;
		for (se = 1; se <= Oe && _e[ke - se] === Te[Ne - se]; se++);
		return Pn = Te.slice(oe, 1 < se ? 1 - se : void 0)
	}

	function be() {
		return !0
	}

	function ce() {
		return !1
	}

	function G(oe, se, _e, ke) {
		for (var Te in this.dispatchConfig = oe, this._targetInst = se, this.nativeEvent = _e, oe = this.constructor.Interface) oe.hasOwnProperty(Te) && ((se = oe[Te]) ? this[Te] = se(_e) : "target" === Te ? this.target = ke : this[Te] = _e[Te]);
		return this.isDefaultPrevented = (null != _e.defaultPrevented ? _e.defaultPrevented : !1 === _e.returnValue) ? be : ce, this.isPropagationStopped = ce, this
	}

	function ee(oe, se, _e, ke) {
		if (this.eventPool.length) {
			var Te = this.eventPool.pop();
			return this.call(Te, oe, se, _e, ke), Te
		}
		return new this(oe, se, _e, ke)
	}

	function fe(oe) {
		if (!(oe instanceof this)) throw Error(u(279));
		oe.destructor(), 10 > this.eventPool.length && this.eventPool.push(oe)
	}

	function de(oe) {
		oe.eventPool = [], oe.getPooled = ee, oe.release = fe
	}
	Te(G.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var oe = this.nativeEvent;
			oe && (oe.preventDefault ? oe.preventDefault() : "unknown" != typeof oe.returnValue && (oe.returnValue = !1), this.isDefaultPrevented = be)
		},
		stopPropagation: function() {
			var oe = this.nativeEvent;
			oe && (oe.stopPropagation ? oe.stopPropagation() : "unknown" != typeof oe.cancelBubble && (oe.cancelBubble = !0), this.isPropagationStopped = be)
		},
		persist: function() {
			this.isPersistent = be
		},
		isPersistent: ce,
		destructor: function() {
			var oe, se = this.constructor.Interface;
			for (oe in se) this[oe] = null;
			this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = ce, this._dispatchInstances = this._dispatchListeners = null
		}
	}), G.Interface = {
		type: null,
		target: null,
		currentTarget: function() {
			return null
		},
		eventPhase: null,
		bubbles: null,
		cancelable: null,
		timeStamp: function(oe) {
			return oe.timeStamp || Date.now()
		},
		defaultPrevented: null,
		isTrusted: null
	}, G.extend = function(oe) {
		function b() {}

		function c() {
			return se.apply(this, arguments)
		}
		var se = this;
		b.prototype = se.prototype;
		var _e = new b;
		return Te(_e, c.prototype), c.prototype = _e, c.prototype.constructor = c, c.Interface = Te({}, se.Interface, oe), c.extend = se.extend, de(c), c
	}, de(G);
	var On = G.extend({
			data: null
		}),
		Dn = G.extend({
			data: null
		}),
		An = [9, 13, 27, 32],
		Ln = tt && "CompositionEvent" in window,
		Rn = null;
	tt && "documentMode" in document && (Rn = document.documentMode);
	var jn = tt && "TextEvent" in window && !Rn,
		Mn = tt && (!Ln || Rn && 8 < Rn && 11 >= Rn),
		Fn = String.fromCharCode(32),
		Hn = {
			beforeInput: {
				phasedRegistrationNames: {
					bubbled: "onBeforeInput",
					captured: "onBeforeInputCapture"
				},
				dependencies: ["compositionend", "keypress", "textInput", "paste"]
			},
			compositionEnd: {
				phasedRegistrationNames: {
					bubbled: "onCompositionEnd",
					captured: "onCompositionEndCapture"
				},
				dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
			},
			compositionStart: {
				phasedRegistrationNames: {
					bubbled: "onCompositionStart",
					captured: "onCompositionStartCapture"
				},
				dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
			},
			compositionUpdate: {
				phasedRegistrationNames: {
					bubbled: "onCompositionUpdate",
					captured: "onCompositionUpdateCapture"
				},
				dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
			}
		},
		Un = !1;

	function qe(oe, se) {
		switch (oe) {
			case "keyup":
				return -1 !== An.indexOf(se.keyCode);
			case "keydown":
				return 229 !== se.keyCode;
			case "keypress":
			case "mousedown":
			case "blur":
				return !0;
			default:
				return !1
		}
	}

	function re(oe) {
		return "object" == typeof(oe = oe.detail) && "data" in oe ? oe.data : null
	}
	var Bn = !1;
	var zn = {
			eventTypes: Hn,
			extractEvents: function(oe, se, _e, ke) {
				var Te;
				if (Ln) e: {
					switch (oe) {
						case "compositionstart":
							var Ne = Hn.compositionStart;
							break e;
						case "compositionend":
							Ne = Hn.compositionEnd;
							break e;
						case "compositionupdate":
							Ne = Hn.compositionUpdate;
							break e
					}
					Ne = void 0
				}
				else Bn ? qe(oe, _e) && (Ne = Hn.compositionEnd) : "keydown" === oe && 229 === _e.keyCode && (Ne = Hn.compositionStart);
				return Ne ? (Mn && "ko" !== _e.locale && (Bn || Ne !== Hn.compositionStart ? Ne === Hn.compositionEnd && Bn && (Te = ae()) : (In = "value" in (Nn = ke) ? Nn.value : Nn.textContent, Bn = !0)), Ne = On.getPooled(Ne, se, _e, ke), Te ? Ne.data = Te : null !== (Te = re(_e)) && (Ne.data = Te), Xd(Ne), Te = Ne) : Te = null, (oe = jn ? function te(oe, se) {
					switch (oe) {
						case "compositionend":
							return re(se);
						case "keypress":
							return 32 !== se.which ? null : (Un = !0, Fn);
						case "textInput":
							return (oe = se.data) === Fn && Un ? null : oe;
						default:
							return null
					}
				}(oe, _e) : function ue(oe, se) {
					if (Bn) return "compositionend" === oe || !Ln && qe(oe, se) ? (oe = ae(), Pn = In = Nn = null, Bn = !1, oe) : null;
					switch (oe) {
						case "paste":
							return null;
						case "keypress":
							if (!(se.ctrlKey || se.altKey || se.metaKey) || se.ctrlKey && se.altKey) {
								if (se.char && 1 < se.char.length) return se.char;
								if (se.which) return String.fromCharCode(se.which)
							}
							return null;
						case "compositionend":
							return Mn && "ko" !== se.locale ? null : se.data;
						default:
							return null
					}
				}(oe, _e)) ? ((se = Dn.getPooled(Hn.beforeInput, se, _e, ke))
					.data = oe, Xd(se)) : se = null, null === Te ? se : null === se ? Te : [Te, se]
			}
		},
		Wn = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		};

	function xe(oe) {
		var se = oe && oe.nodeName && oe.nodeName.toLowerCase();
		return "input" === se ? !!Wn[oe.type] : "textarea" === se
	}
	var Vn = {
		change: {
			phasedRegistrationNames: {
				bubbled: "onChange",
				captured: "onChangeCapture"
			},
			dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
		}
	};

	function ze(oe, se, _e) {
		return (oe = G.getPooled(Vn.change, oe, se, _e))
			.type = "change", Da(_e), Xd(oe), oe
	}
	var Qn = null,
		qn = null;

	function Ce(oe) {
		mc(oe)
	}

	function De(oe) {
		if (yb(Pd(oe))) return oe
	}

	function Ee(oe, se) {
		if ("change" === oe) return se
	}
	var Gn = !1;

	function Ge() {
		Qn && (Qn.detachEvent("onpropertychange", He), qn = Qn = null)
	}

	function He(oe) {
		if ("value" === oe.propertyName && De(qn))
			if (oe = ze(qn, oe, nc(oe)), at) mc(oe);
			else {
				at = !0;
				try {
					Fa(Ce, oe)
				} finally {
					at = !1, La()
				}
			}
	}

	function Ie(oe, se, _e) {
		"focus" === oe ? (Ge(), qn = _e, (Qn = se)
			.attachEvent("onpropertychange", He)) : "blur" === oe && Ge()
	}

	function Je(oe) {
		if ("selectionchange" === oe || "keyup" === oe || "keydown" === oe) return De(qn)
	}

	function Ke(oe, se) {
		if ("click" === oe) return De(se)
	}

	function Le(oe, se) {
		if ("input" === oe || "change" === oe) return De(se)
	}
	tt && (Gn = oc("input") && (!document.documentMode || 9 < document.documentMode));
	var Kn = {
			eventTypes: Vn,
			_isInputEventSupported: Gn,
			extractEvents: function(oe, se, _e, ke) {
				var Te = se ? Pd(se) : window,
					Ne = Te.nodeName && Te.nodeName.toLowerCase();
				if ("select" === Ne || "input" === Ne && "file" === Te.type) var Oe = Ee;
				else if (xe(Te))
					if (Gn) Oe = Le;
					else {
						Oe = Je;
						var Ae = Ie
					}
				else(Ne = Te.nodeName) && "input" === Ne.toLowerCase() && ("checkbox" === Te.type || "radio" === Te.type) && (Oe = Ke);
				if (Oe && (Oe = Oe(oe, se))) return ze(Oe, _e, ke);
				Ae && Ae(oe, Te, se), "blur" === oe && (oe = Te._wrapperState) && oe.controlled && "number" === Te.type && Db(Te, "number", Te.value)
			}
		},
		Yn = G.extend({
			view: null,
			detail: null
		}),
		Jn = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function Pe(oe) {
		var se = this.nativeEvent;
		return se.getModifierState ? se.getModifierState(oe) : !!(oe = Jn[oe]) && !!se[oe]
	}

	function Qe() {
		return Pe
	}
	var Xn = 0,
		$n = 0,
		Zn = !1,
		er = !1,
		tr = Yn.extend({
			screenX: null,
			screenY: null,
			clientX: null,
			clientY: null,
			pageX: null,
			pageY: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			getModifierState: Qe,
			button: null,
			buttons: null,
			relatedTarget: function(oe) {
				return oe.relatedTarget || (oe.fromElement === oe.srcElement ? oe.toElement : oe.fromElement)
			},
			movementX: function(oe) {
				if ("movementX" in oe) return oe.movementX;
				var se = Xn;
				return Xn = oe.screenX, Zn ? "mousemove" === oe.type ? oe.screenX - se : 0 : (Zn = !0, 0)
			},
			movementY: function(oe) {
				if ("movementY" in oe) return oe.movementY;
				var se = $n;
				return $n = oe.screenY, er ? "mousemove" === oe.type ? oe.screenY - se : 0 : (er = !0, 0)
			}
		}),
		nr = tr.extend({
			pointerId: null,
			width: null,
			height: null,
			pressure: null,
			tangentialPressure: null,
			tiltX: null,
			tiltY: null,
			twist: null,
			pointerType: null,
			isPrimary: null
		}),
		rr = {
			mouseEnter: {
				registrationName: "onMouseEnter",
				dependencies: ["mouseout", "mouseover"]
			},
			mouseLeave: {
				registrationName: "onMouseLeave",
				dependencies: ["mouseout", "mouseover"]
			},
			pointerEnter: {
				registrationName: "onPointerEnter",
				dependencies: ["pointerout", "pointerover"]
			},
			pointerLeave: {
				registrationName: "onPointerLeave",
				dependencies: ["pointerout", "pointerover"]
			}
		},
		ir = {
			eventTypes: rr,
			extractEvents: function(oe, se, _e, ke, Te) {
				var Ne = "mouseover" === oe || "pointerover" === oe,
					Oe = "mouseout" === oe || "pointerout" === oe;
				if (Ne && 0 == (32 & Te) && (_e.relatedTarget || _e.fromElement) || !Oe && !Ne) return null;
				(Ne = ke.window === ke ? ke : (Ne = ke.ownerDocument) ? Ne.defaultView || Ne.parentWindow : window, Oe) ? (Oe = se, null !== (se = (se = _e.relatedTarget || _e.toElement) ? tc(se) : null) && (se !== dc(se) || 5 !== se.tag && 6 !== se.tag) && (se = null)) : Oe = null;
				if (Oe === se) return null;
				if ("mouseout" === oe || "mouseover" === oe) var Ae = tr,
					Re = rr.mouseLeave,
					je = rr.mouseEnter,
					Me = "mouse";
				else "pointerout" !== oe && "pointerover" !== oe || (Ae = nr, Re = rr.pointerLeave, je = rr.pointerEnter, Me = "pointer");
				if (oe = null == Oe ? Ne : Pd(Oe), Ne = null == se ? Ne : Pd(se), (Re = Ae.getPooled(Re, Oe, _e, ke))
					.type = Me + "leave", Re.target = oe, Re.relatedTarget = Ne, (_e = Ae.getPooled(je, se, _e, ke))
					.type = Me + "enter", _e.target = Ne, _e.relatedTarget = oe, Me = se, (ke = Oe) && Me) e: {
					for (je = Me, Oe = 0, oe = Ae = ke; oe; oe = Rd(oe)) Oe++;
					for (oe = 0, se = je; se; se = Rd(se)) oe++;
					for (; 0 < Oe - oe;) Ae = Rd(Ae),
					Oe--;
					for (; 0 < oe - Oe;) je = Rd(je),
					oe--;
					for (; Oe--;) {
						if (Ae === je || Ae === je.alternate) break e;
						Ae = Rd(Ae), je = Rd(je)
					}
					Ae = null
				}
				else Ae = null;
				for (je = Ae, Ae = []; ke && ke !== je && (null === (Oe = ke.alternate) || Oe !== je);) Ae.push(ke), ke = Rd(ke);
				for (ke = []; Me && Me !== je && (null === (Oe = Me.alternate) || Oe !== je);) ke.push(Me), Me = Rd(Me);
				for (Me = 0; Me < Ae.length; Me++) Vd(Ae[Me], "bubbled", Re);
				for (Me = ke.length; 0 < Me--;) Vd(ke[Me], "captured", _e);
				return 0 == (64 & Te) ? [Re] : [Re, _e]
			}
		};
	var or = "function" == typeof Object.is ? Object.is : function Ze(oe, se) {
			return oe === se && (0 !== oe || 1 / oe == 1 / se) || oe != oe && se != se
		},
		ar = Object.prototype.hasOwnProperty;

	function bf(oe, se) {
		if (or(oe, se)) return !0;
		if ("object" != typeof oe || null === oe || "object" != typeof se || null === se) return !1;
		var _e = Object.keys(oe),
			ke = Object.keys(se);
		if (_e.length !== ke.length) return !1;
		for (ke = 0; ke < _e.length; ke++)
			if (!ar.call(se, _e[ke]) || !or(oe[_e[ke]], se[_e[ke]])) return !1;
		return !0
	}
	var lr = tt && "documentMode" in document && 11 >= document.documentMode,
		sr = {
			select: {
				phasedRegistrationNames: {
					bubbled: "onSelect",
					captured: "onSelectCapture"
				},
				dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
			}
		},
		cr = null,
		ur = null,
		dr = null,
		fr = !1;

	function jf(oe, se) {
		var _e = se.window === se ? se.document : 9 === se.nodeType ? se : se.ownerDocument;
		return fr || null == cr || cr !== td(_e) ? null : ("selectionStart" in (_e = cr) && yd(_e) ? _e = {
			start: _e.selectionStart,
			end: _e.selectionEnd
		} : _e = {
			anchorNode: (_e = (_e.ownerDocument && _e.ownerDocument.defaultView || window)
					.getSelection())
				.anchorNode,
			anchorOffset: _e.anchorOffset,
			focusNode: _e.focusNode,
			focusOffset: _e.focusOffset
		}, dr && bf(dr, _e) ? null : (dr = _e, (oe = G.getPooled(sr.select, ur, oe, se))
			.type = "select", oe.target = cr, Xd(oe), oe))
	}
	var hr = {
			eventTypes: sr,
			extractEvents: function(oe, se, _e, ke, Te, Ne) {
				if (!(Ne = !(Te = Ne || (ke.window === ke ? ke.document : 9 === ke.nodeType ? ke : ke.ownerDocument)))) {
					e: {
						Te = cc(Te),
						Ne = et.onSelect;
						for (var Oe = 0; Oe < Ne.length; Oe++)
							if (!Te.has(Ne[Oe])) {
								Te = !1;
								break e
							} Te = !0
					}
					Ne = !Te
				}
				if (Ne) return null;
				switch (Te = se ? Pd(se) : window, oe) {
					case "focus":
						(xe(Te) || "true" === Te.contentEditable) && (cr = Te, ur = se, dr = null);
						break;
					case "blur":
						dr = ur = cr = null;
						break;
					case "mousedown":
						fr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						return fr = !1, jf(_e, ke);
					case "selectionchange":
						if (lr) break;
					case "keydown":
					case "keyup":
						return jf(_e, ke)
				}
				return null
			}
		},
		pr = G.extend({
			animationName: null,
			elapsedTime: null,
			pseudoElement: null
		}),
		mr = G.extend({
			clipboardData: function(oe) {
				return "clipboardData" in oe ? oe.clipboardData : window.clipboardData
			}
		}),
		gr = Yn.extend({
			relatedTarget: null
		});

	function of (oe) {
		var se = oe.keyCode;
		return "charCode" in oe ? 0 === (oe = oe.charCode) && 13 === se && (oe = 13) : oe = se, 10 === oe && (oe = 13), 32 <= oe || 13 === oe ? oe : 0
	}
	var vr = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		br = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		yr = Yn.extend({
			key: function(oe) {
				if (oe.key) {
					var se = vr[oe.key] || oe.key;
					if ("Unidentified" !== se) return se
				}
				return "keypress" === oe.type ? 13 === (oe = of (oe)) ? "Enter" : String.fromCharCode(oe) : "keydown" === oe.type || "keyup" === oe.type ? br[oe.keyCode] || "Unidentified" : ""
			},
			location: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			repeat: null,
			locale: null,
			getModifierState: Qe,
			charCode: function(oe) {
				return "keypress" === oe.type ? of (oe) : 0
			},
			keyCode: function(oe) {
				return "keydown" === oe.type || "keyup" === oe.type ? oe.keyCode : 0
			},
			which: function(oe) {
				return "keypress" === oe.type ? of (oe) : "keydown" === oe.type || "keyup" === oe.type ? oe.keyCode : 0
			}
		}),
		Er = tr.extend({
			dataTransfer: null
		}),
		wr = Yn.extend({
			touches: null,
			targetTouches: null,
			changedTouches: null,
			altKey: null,
			metaKey: null,
			ctrlKey: null,
			shiftKey: null,
			getModifierState: Qe
		}),
		_r = G.extend({
			propertyName: null,
			elapsedTime: null,
			pseudoElement: null
		}),
		Sr = tr.extend({
			deltaX: function(oe) {
				return "deltaX" in oe ? oe.deltaX : "wheelDeltaX" in oe ? -oe.wheelDeltaX : 0
			},
			deltaY: function(oe) {
				return "deltaY" in oe ? oe.deltaY : "wheelDeltaY" in oe ? -oe.wheelDeltaY : "wheelDelta" in oe ? -oe.wheelDelta : 0
			},
			deltaZ: null,
			deltaMode: null
		}),
		kr = {
			eventTypes: ln,
			extractEvents: function(oe, se, _e, ke) {
				var Te = sn.get(oe);
				if (!Te) return null;
				switch (oe) {
					case "keypress":
						if (0 === of (_e)) return null;
					case "keydown":
					case "keyup":
						oe = yr;
						break;
					case "blur":
					case "focus":
						oe = gr;
						break;
					case "click":
						if (2 === _e.button) return null;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						oe = tr;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						oe = Er;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						oe = wr;
						break;
					case Ht:
					case Ut:
					case Bt:
						oe = pr;
						break;
					case zt:
						oe = _r;
						break;
					case "scroll":
						oe = Yn;
						break;
					case "wheel":
						oe = Sr;
						break;
					case "copy":
					case "cut":
					case "paste":
						oe = mr;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						oe = nr;
						break;
					default:
						oe = G
				}
				return Xd(se = oe.getPooled(Te, se, _e, ke)), se
			}
		};
	if (We) throw Error(u(101));
	We = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), ra(), Fe = Qd, Ue = Nc, Be = Pd, xa({
		SimpleEventPlugin: kr,
		EnterLeaveEventPlugin: ir,
		ChangeEventPlugin: Kn,
		SelectEventPlugin: hr,
		BeforeInputEventPlugin: zn
	});
	var Tr = [],
		xr = -1;

	function H(oe) {
		0 > xr || (oe.current = Tr[xr], Tr[xr] = null, xr--)
	}

	function I(oe, se) {
		xr++, Tr[xr] = oe.current, oe.current = se
	}
	var Cr = {},
		Nr = {
			current: Cr
		},
		Ir = {
			current: !1
		},
		Pr = Cr;

	function Cf(oe, se) {
		var _e = oe.type.contextTypes;
		if (!_e) return Cr;
		var ke = oe.stateNode;
		if (ke && ke.__reactInternalMemoizedUnmaskedChildContext === se) return ke.__reactInternalMemoizedMaskedChildContext;
		var Te, Ne = {};
		for (Te in _e) Ne[Te] = se[Te];
		return ke && ((oe = oe.stateNode)
			.__reactInternalMemoizedUnmaskedChildContext = se, oe.__reactInternalMemoizedMaskedChildContext = Ne), Ne
	}

	function L(oe) {
		return null != (oe = oe.childContextTypes)
	}

	function Df() {
		H(Ir), H(Nr)
	}

	function Ef(oe, se, _e) {
		if (Nr.current !== Cr) throw Error(u(168));
		I(Nr, se), I(Ir, _e)
	}

	function Ff(oe, se, _e) {
		var ke = oe.stateNode;
		if (oe = se.childContextTypes, "function" != typeof ke.getChildContext) return _e;
		for (var Ne in ke = ke.getChildContext())
			if (!(Ne in oe)) throw Error(u(108, pb(se) || "Unknown", Ne));
		return Te({}, _e, {}, ke)
	}

	function Gf(oe) {
		return oe = (oe = oe.stateNode) && oe.__reactInternalMemoizedMergedChildContext || Cr, Pr = Nr.current, I(Nr, oe), I(Ir, Ir.current), !0
	}

	function Hf(oe, se, _e) {
		var ke = oe.stateNode;
		if (!ke) throw Error(u(169));
		_e ? (oe = Ff(oe, se, Pr), ke.__reactInternalMemoizedMergedChildContext = oe, H(Ir), H(Nr), I(Nr, oe)) : H(Ir), I(Ir, _e)
	}
	var Or = Ne.unstable_runWithPriority,
		Dr = Ne.unstable_scheduleCallback,
		Ar = Ne.unstable_cancelCallback,
		Lr = Ne.unstable_requestPaint,
		Rr = Ne.unstable_now,
		jr = Ne.unstable_getCurrentPriorityLevel,
		Mr = Ne.unstable_ImmediatePriority,
		Fr = Ne.unstable_UserBlockingPriority,
		Hr = Ne.unstable_NormalPriority,
		Ur = Ne.unstable_LowPriority,
		Br = Ne.unstable_IdlePriority,
		zr = {},
		Wr = Ne.unstable_shouldYield,
		Vr = void 0 !== Lr ? Lr : function() {},
		Qr = null,
		qr = null,
		Gr = !1,
		Kr = Rr(),
		Yr = 1e4 > Kr ? Rr : function() {
			return Rr() - Kr
		};

	function ag() {
		switch (jr()) {
			case Mr:
				return 99;
			case Fr:
				return 98;
			case Hr:
				return 97;
			case Ur:
				return 96;
			case Br:
				return 95;
			default:
				throw Error(u(332))
		}
	}

	function bg(oe) {
		switch (oe) {
			case 99:
				return Mr;
			case 98:
				return Fr;
			case 97:
				return Hr;
			case 96:
				return Ur;
			case 95:
				return Br;
			default:
				throw Error(u(332))
		}
	}

	function cg(oe, se) {
		return oe = bg(oe), Or(oe, se)
	}

	function dg(oe, se, _e) {
		return oe = bg(oe), Dr(oe, se, _e)
	}

	function eg(oe) {
		return null === Qr ? (Qr = [oe], qr = Dr(Mr, fg)) : Qr.push(oe), zr
	}

	function gg() {
		if (null !== qr) {
			var oe = qr;
			qr = null, Ar(oe)
		}
		fg()
	}

	function fg() {
		if (!Gr && null !== Qr) {
			Gr = !0;
			var oe = 0;
			try {
				var se = Qr;
				cg(99, (function() {
					for (; oe < se.length; oe++) {
						var _e = se[oe];
						do {
							_e = _e(!0)
						} while (null !== _e)
					}
				})), Qr = null
			} catch (se) {
				throw null !== Qr && (Qr = Qr.slice(oe + 1)), Dr(Mr, gg), se
			} finally {
				Gr = !1
			}
		}
	}

	function hg(oe, se, _e) {
		return 1073741821 - (1 + ((1073741821 - oe + se / 10) / (_e /= 10) | 0)) * _e
	}

	function ig(oe, se) {
		if (oe && oe.defaultProps)
			for (var _e in se = Te({}, se), oe = oe.defaultProps) void 0 === se[_e] && (se[_e] = oe[_e]);
		return se
	}
	var Jr = {
			current: null
		},
		Xr = null,
		$r = null,
		Zr = null;

	function ng() {
		Zr = $r = Xr = null
	}

	function og(oe) {
		var se = Jr.current;
		H(Jr), oe.type._context._currentValue = se
	}

	function pg(oe, se) {
		for (; null !== oe;) {
			var _e = oe.alternate;
			if (oe.childExpirationTime < se) oe.childExpirationTime = se, null !== _e && _e.childExpirationTime < se && (_e.childExpirationTime = se);
			else {
				if (!(null !== _e && _e.childExpirationTime < se)) break;
				_e.childExpirationTime = se
			}
			oe = oe.return
		}
	}

	function qg(oe, se) {
		Xr = oe, Zr = $r = null, null !== (oe = oe.dependencies) && null !== oe.firstContext && (oe.expirationTime >= se && (fo = !0), oe.firstContext = null)
	}

	function sg(oe, se) {
		if (Zr !== oe && !1 !== se && 0 !== se)
			if ("number" == typeof se && 1073741823 !== se || (Zr = oe, se = 1073741823), se = {
				context: oe,
				observedBits: se,
				next: null
			}, null === $r) {
				if (null === Xr) throw Error(u(308));
				$r = se, Xr.dependencies = {
					expirationTime: 0,
					firstContext: se,
					responders: null
				}
			} else $r = $r.next = se;
		return oe._currentValue
	}
	var ti = !1;

	function ug(oe) {
		oe.updateQueue = {
			baseState: oe.memoizedState,
			baseQueue: null,
			shared: {
				pending: null
			},
			effects: null
		}
	}

	function vg(oe, se) {
		oe = oe.updateQueue, se.updateQueue === oe && (se.updateQueue = {
			baseState: oe.baseState,
			baseQueue: oe.baseQueue,
			shared: oe.shared,
			effects: oe.effects
		})
	}

	function wg(oe, se) {
		return (oe = {
				expirationTime: oe,
				suspenseConfig: se,
				tag: 0,
				payload: null,
				callback: null,
				next: null
			})
			.next = oe
	}

	function xg(oe, se) {
		if (null !== (oe = oe.updateQueue)) {
			var _e = (oe = oe.shared)
				.pending;
			null === _e ? se.next = se : (se.next = _e.next, _e.next = se), oe.pending = se
		}
	}

	function yg(oe, se) {
		var _e = oe.alternate;
		null !== _e && vg(_e, oe), null === (_e = (oe = oe.updateQueue)
			.baseQueue) ? (oe.baseQueue = se.next = se, se.next = se) : (se.next = _e.next, _e.next = se)
	}

	function zg(oe, se, _e, ke) {
		var Ne = oe.updateQueue;
		ti = !1;
		var Oe = Ne.baseQueue,
			Ae = Ne.shared.pending;
		if (null !== Ae) {
			if (null !== Oe) {
				var Re = Oe.next;
				Oe.next = Ae.next, Ae.next = Re
			}
			Oe = Ae, Ne.shared.pending = null, null !== (Re = oe.alternate) && (null !== (Re = Re.updateQueue) && (Re.baseQueue = Ae))
		}
		if (null !== Oe) {
			Re = Oe.next;
			var je = Ne.baseState,
				Me = 0,
				Fe = null,
				Ue = null,
				Be = null;
			if (null !== Re)
				for (var We = Re;;) {
					if ((Ae = We.expirationTime) < ke) {
						var Ve = {
							expirationTime: We.expirationTime,
							suspenseConfig: We.suspenseConfig,
							tag: We.tag,
							payload: We.payload,
							callback: We.callback,
							next: null
						};
						null === Be ? (Ue = Be = Ve, Fe = je) : Be = Be.next = Ve, Ae > Me && (Me = Ae)
					} else {
						null !== Be && (Be = Be.next = {
							expirationTime: 1073741823,
							suspenseConfig: We.suspenseConfig,
							tag: We.tag,
							payload: We.payload,
							callback: We.callback,
							next: null
						}), Ag(Ae, We.suspenseConfig);
						e: {
							var Ye = oe,
								Xe = We;
							switch (Ae = se, Ve = _e, Xe.tag) {
								case 1:
									if ("function" == typeof(Ye = Xe.payload)) {
										je = Ye.call(Ve, je, Ae);
										break e
									}
									je = Ye;
									break e;
								case 3:
									Ye.effectTag = -4097 & Ye.effectTag | 64;
								case 0:
									if (null == (Ae = "function" == typeof(Ye = Xe.payload) ? Ye.call(Ve, je, Ae) : Ye)) break e;
									je = Te({}, je, Ae);
									break e;
								case 2:
									ti = !0
							}
						}
						null !== We.callback && (oe.effectTag |= 32, null === (Ae = Ne.effects) ? Ne.effects = [We] : Ae.push(We))
					}
					if (null === (We = We.next) || We === Re) {
						if (null === (Ae = Ne.shared.pending)) break;
						We = Oe.next = Ae.next, Ae.next = Re, Ne.baseQueue = Oe = Ae, Ne.shared.pending = null
					}
				}
			null === Be ? Fe = je : Be.next = Ue, Ne.baseState = Fe, Ne.baseQueue = Be, Bg(Me), oe.expirationTime = Me, oe.memoizedState = je
		}
	}

	function Cg(oe, se, _e) {
		if (oe = se.effects, se.effects = null, null !== oe)
			for (se = 0; se < oe.length; se++) {
				var ke = oe[se],
					Te = ke.callback;
				if (null !== Te) {
					if (ke.callback = null, ke = Te, Te = _e, "function" != typeof ke) throw Error(u(191, ke));
					ke.call(Te)
				}
			}
	}
	var ni = pt.ReactCurrentBatchConfig,
		ii = (new ke.Component)
		.refs;

	function Fg(oe, se, _e, ke) {
		_e = null == (_e = _e(ke, se = oe.memoizedState)) ? se : Te({}, se, _e), oe.memoizedState = _e, 0 === oe.expirationTime && (oe.updateQueue.baseState = _e)
	}
	var oi = {
		isMounted: function(oe) {
			return !!(oe = oe._reactInternalFiber) && dc(oe) === oe
		},
		enqueueSetState: function(oe, se, _e) {
			oe = oe._reactInternalFiber;
			var ke = Gg(),
				Te = ni.suspense;
			(Te = wg(ke = Hg(ke, oe, Te), Te))
			.payload = se, null != _e && (Te.callback = _e), xg(oe, Te), Ig(oe, ke)
		},
		enqueueReplaceState: function(oe, se, _e) {
			oe = oe._reactInternalFiber;
			var ke = Gg(),
				Te = ni.suspense;
			(Te = wg(ke = Hg(ke, oe, Te), Te))
			.tag = 1, Te.payload = se, null != _e && (Te.callback = _e), xg(oe, Te), Ig(oe, ke)
		},
		enqueueForceUpdate: function(oe, se) {
			oe = oe._reactInternalFiber;
			var _e = Gg(),
				ke = ni.suspense;
			(ke = wg(_e = Hg(_e, oe, ke), ke))
			.tag = 2, null != se && (ke.callback = se), xg(oe, ke), Ig(oe, _e)
		}
	};

	function Kg(oe, se, _e, ke, Te, Ne, Oe) {
		return "function" == typeof(oe = oe.stateNode)
			.shouldComponentUpdate ? oe.shouldComponentUpdate(ke, Ne, Oe) : !se.prototype || !se.prototype.isPureReactComponent || (!bf(_e, ke) || !bf(Te, Ne))
	}

	function Lg(oe, se, _e) {
		var ke = !1,
			Te = Cr,
			Ne = se.contextType;
		return "object" == typeof Ne && null !== Ne ? Ne = sg(Ne) : (Te = L(se) ? Pr : Nr.current, Ne = (ke = null != (ke = se.contextTypes)) ? Cf(oe, Te) : Cr), se = new se(_e, Ne), oe.memoizedState = null !== se.state && void 0 !== se.state ? se.state : null, se.updater = oi, oe.stateNode = se, se._reactInternalFiber = oe, ke && ((oe = oe.stateNode)
			.__reactInternalMemoizedUnmaskedChildContext = Te, oe.__reactInternalMemoizedMaskedChildContext = Ne), se
	}

	function Mg(oe, se, _e, ke) {
		oe = se.state, "function" == typeof se.componentWillReceiveProps && se.componentWillReceiveProps(_e, ke), "function" == typeof se.UNSAFE_componentWillReceiveProps && se.UNSAFE_componentWillReceiveProps(_e, ke), se.state !== oe && oi.enqueueReplaceState(se, se.state, null)
	}

	function Ng(oe, se, _e, ke) {
		var Te = oe.stateNode;
		Te.props = _e, Te.state = oe.memoizedState, Te.refs = ii, ug(oe);
		var Ne = se.contextType;
		"object" == typeof Ne && null !== Ne ? Te.context = sg(Ne) : (Ne = L(se) ? Pr : Nr.current, Te.context = Cf(oe, Ne)), zg(oe, _e, Te, ke), Te.state = oe.memoizedState, "function" == typeof(Ne = se.getDerivedStateFromProps) && (Fg(oe, se, Ne, _e), Te.state = oe.memoizedState), "function" == typeof se.getDerivedStateFromProps || "function" == typeof Te.getSnapshotBeforeUpdate || "function" != typeof Te.UNSAFE_componentWillMount && "function" != typeof Te.componentWillMount || (se = Te.state, "function" == typeof Te.componentWillMount && Te.componentWillMount(), "function" == typeof Te.UNSAFE_componentWillMount && Te.UNSAFE_componentWillMount(), se !== Te.state && oi.enqueueReplaceState(Te, Te.state, null), zg(oe, _e, Te, ke), Te.state = oe.memoizedState), "function" == typeof Te.componentDidMount && (oe.effectTag |= 4)
	}
	var ui = Array.isArray;

	function Pg(oe, se, _e) {
		if (null !== (oe = _e.ref) && "function" != typeof oe && "object" != typeof oe) {
			if (_e._owner) {
				if (_e = _e._owner) {
					if (1 !== _e.tag) throw Error(u(309));
					var ke = _e.stateNode
				}
				if (!ke) throw Error(u(147, oe));
				var Te = "" + oe;
				return null !== se && null !== se.ref && "function" == typeof se.ref && se.ref._stringRef === Te ? se.ref : ((se = function(oe) {
						var se = ke.refs;
						se === ii && (se = ke.refs = {}), null === oe ? delete se[Te] : se[Te] = oe
					})
					._stringRef = Te, se)
			}
			if ("string" != typeof oe) throw Error(u(284));
			if (!_e._owner) throw Error(u(290, oe))
		}
		return oe
	}

	function Qg(oe, se) {
		if ("textarea" !== oe.type) throw Error(u(31, "[object Object]" === Object.prototype.toString.call(se) ? "object with keys {" + Object.keys(se)
			.join(", ") + "}" : se, ""))
	}

	function Rg(oe) {
		function b(se, _e) {
			if (oe) {
				var ke = se.lastEffect;
				null !== ke ? (ke.nextEffect = _e, se.lastEffect = _e) : se.firstEffect = se.lastEffect = _e, _e.nextEffect = null, _e.effectTag = 8
			}
		}

		function c(se, _e) {
			if (!oe) return null;
			for (; null !== _e;) b(se, _e), _e = _e.sibling;
			return null
		}

		function d(oe, se) {
			for (oe = new Map; null !== se;) null !== se.key ? oe.set(se.key, se) : oe.set(se.index, se), se = se.sibling;
			return oe
		}

		function e(oe, se) {
			return (oe = Sg(oe, se))
				.index = 0, oe.sibling = null, oe
		}

		function f(se, _e, ke) {
			return se.index = ke, oe ? null !== (ke = se.alternate) ? (ke = ke.index) < _e ? (se.effectTag = 2, _e) : ke : (se.effectTag = 2, _e) : _e
		}

		function g(se) {
			return oe && null === se.alternate && (se.effectTag = 2), se
		}

		function h(oe, se, _e, ke) {
			return null === se || 6 !== se.tag ? ((se = Tg(_e, oe.mode, ke))
				.return = oe, se) : ((se = e(se, _e))
				.return = oe, se)
		}

		function k(oe, se, _e, ke) {
			return null !== se && se.elementType === _e.type ? ((ke = e(se, _e.props))
				.ref = Pg(oe, se, _e), ke.return = oe, ke) : ((ke = Ug(_e.type, _e.key, _e.props, null, oe.mode, ke))
				.ref = Pg(oe, se, _e), ke.return = oe, ke)
		}

		function l(oe, se, _e, ke) {
			return null === se || 4 !== se.tag || se.stateNode.containerInfo !== _e.containerInfo || se.stateNode.implementation !== _e.implementation ? ((se = Vg(_e, oe.mode, ke))
				.return = oe, se) : ((se = e(se, _e.children || []))
				.return = oe, se)
		}

		function m(oe, se, _e, ke, Te) {
			return null === se || 7 !== se.tag ? ((se = Wg(_e, oe.mode, ke, Te))
				.return = oe, se) : ((se = e(se, _e))
				.return = oe, se)
		}

		function p(oe, se, _e) {
			if ("string" == typeof se || "number" == typeof se) return (se = Tg("" + se, oe.mode, _e))
				.return = oe, se;
			if ("object" == typeof se && null !== se) {
				switch (se.$$typeof) {
					case vt:
						return (_e = Ug(se.type, se.key, se.props, null, oe.mode, _e))
							.ref = Pg(oe, null, se), _e.return = oe, _e;
					case bt:
						return (se = Vg(se, oe.mode, _e))
							.return = oe, se
				}
				if (ui(se) || nb(se)) return (se = Wg(se, oe.mode, _e, null))
					.return = oe, se;
				Qg(oe, se)
			}
			return null
		}

		function x(oe, se, _e, ke) {
			var Te = null !== se ? se.key : null;
			if ("string" == typeof _e || "number" == typeof _e) return null !== Te ? null : h(oe, se, "" + _e, ke);
			if ("object" == typeof _e && null !== _e) {
				switch (_e.$$typeof) {
					case vt:
						return _e.key === Te ? _e.type === yt ? m(oe, se, _e.props.children, ke, Te) : k(oe, se, _e, ke) : null;
					case bt:
						return _e.key === Te ? l(oe, se, _e, ke) : null
				}
				if (ui(_e) || nb(_e)) return null !== Te ? null : m(oe, se, _e, ke, null);
				Qg(oe, _e)
			}
			return null
		}

		function z(oe, se, _e, ke, Te) {
			if ("string" == typeof ke || "number" == typeof ke) return h(se, oe = oe.get(_e) || null, "" + ke, Te);
			if ("object" == typeof ke && null !== ke) {
				switch (ke.$$typeof) {
					case vt:
						return oe = oe.get(null === ke.key ? _e : ke.key) || null, ke.type === yt ? m(se, oe, ke.props.children, Te, ke.key) : k(se, oe, ke, Te);
					case bt:
						return l(se, oe = oe.get(null === ke.key ? _e : ke.key) || null, ke, Te)
				}
				if (ui(ke) || nb(ke)) return m(se, oe = oe.get(_e) || null, ke, Te, null);
				Qg(se, ke)
			}
			return null
		}

		function ca(se, _e, ke, Te) {
			for (var Ne = null, Oe = null, Ae = _e, Re = _e = 0, je = null; null !== Ae && Re < ke.length; Re++) {
				Ae.index > Re ? (je = Ae, Ae = null) : je = Ae.sibling;
				var Me = x(se, Ae, ke[Re], Te);
				if (null === Me) {
					null === Ae && (Ae = je);
					break
				}
				oe && Ae && null === Me.alternate && b(se, Ae), _e = f(Me, _e, Re), null === Oe ? Ne = Me : Oe.sibling = Me, Oe = Me, Ae = je
			}
			if (Re === ke.length) return c(se, Ae), Ne;
			if (null === Ae) {
				for (; Re < ke.length; Re++) null !== (Ae = p(se, ke[Re], Te)) && (_e = f(Ae, _e, Re), null === Oe ? Ne = Ae : Oe.sibling = Ae, Oe = Ae);
				return Ne
			}
			for (Ae = d(se, Ae); Re < ke.length; Re++) null !== (je = z(Ae, se, Re, ke[Re], Te)) && (oe && null !== je.alternate && Ae.delete(null === je.key ? Re : je.key), _e = f(je, _e, Re), null === Oe ? Ne = je : Oe.sibling = je, Oe = je);
			return oe && Ae.forEach((function(oe) {
				return b(se, oe)
			})), Ne
		}

		function D(se, _e, ke, Te) {
			var Ne = nb(ke);
			if ("function" != typeof Ne) throw Error(u(150));
			if (null == (ke = Ne.call(ke))) throw Error(u(151));
			for (var Oe = Ne = null, Ae = _e, Re = _e = 0, je = null, Me = ke.next(); null !== Ae && !Me.done; Re++, Me = ke.next()) {
				Ae.index > Re ? (je = Ae, Ae = null) : je = Ae.sibling;
				var Fe = x(se, Ae, Me.value, Te);
				if (null === Fe) {
					null === Ae && (Ae = je);
					break
				}
				oe && Ae && null === Fe.alternate && b(se, Ae), _e = f(Fe, _e, Re), null === Oe ? Ne = Fe : Oe.sibling = Fe, Oe = Fe, Ae = je
			}
			if (Me.done) return c(se, Ae), Ne;
			if (null === Ae) {
				for (; !Me.done; Re++, Me = ke.next()) null !== (Me = p(se, Me.value, Te)) && (_e = f(Me, _e, Re), null === Oe ? Ne = Me : Oe.sibling = Me, Oe = Me);
				return Ne
			}
			for (Ae = d(se, Ae); !Me.done; Re++, Me = ke.next()) null !== (Me = z(Ae, se, Re, Me.value, Te)) && (oe && null !== Me.alternate && Ae.delete(null === Me.key ? Re : Me.key), _e = f(Me, _e, Re), null === Oe ? Ne = Me : Oe.sibling = Me, Oe = Me);
			return oe && Ae.forEach((function(oe) {
				return b(se, oe)
			})), Ne
		}
		return function(oe, se, _e, ke) {
			var Te = "object" == typeof _e && null !== _e && _e.type === yt && null === _e.key;
			Te && (_e = _e.props.children);
			var Ne = "object" == typeof _e && null !== _e;
			if (Ne) switch (_e.$$typeof) {
				case vt:
					e: {
						for (Ne = _e.key, Te = se; null !== Te;) {
							if (Te.key === Ne) {
								switch (Te.tag) {
									case 7:
										if (_e.type === yt) {
											c(oe, Te.sibling), (se = e(Te, _e.props.children))
												.return = oe, oe = se;
											break e
										}
										break;
									default:
										if (Te.elementType === _e.type) {
											c(oe, Te.sibling), (se = e(Te, _e.props))
												.ref = Pg(oe, Te, _e), se.return = oe, oe = se;
											break e
										}
								}
								c(oe, Te);
								break
							}
							b(oe, Te), Te = Te.sibling
						}
						_e.type === yt ? ((se = Wg(_e.props.children, oe.mode, ke, _e.key))
							.return = oe, oe = se) : ((ke = Ug(_e.type, _e.key, _e.props, null, oe.mode, ke))
							.ref = Pg(oe, se, _e), ke.return = oe, oe = ke)
					}
					return g(oe);
				case bt:
					e: {
						for (Te = _e.key; null !== se;) {
							if (se.key === Te) {
								if (4 === se.tag && se.stateNode.containerInfo === _e.containerInfo && se.stateNode.implementation === _e.implementation) {
									c(oe, se.sibling), (se = e(se, _e.children || []))
										.return = oe, oe = se;
									break e
								}
								c(oe, se);
								break
							}
							b(oe, se), se = se.sibling
						}(se = Vg(_e, oe.mode, ke))
						.return = oe,
						oe = se
					}
					return g(oe)
			}
			if ("string" == typeof _e || "number" == typeof _e) return _e = "" + _e, null !== se && 6 === se.tag ? (c(oe, se.sibling), (se = e(se, _e))
				.return = oe, oe = se) : (c(oe, se), (se = Tg(_e, oe.mode, ke))
				.return = oe, oe = se), g(oe);
			if (ui(_e)) return ca(oe, se, _e, ke);
			if (nb(_e)) return D(oe, se, _e, ke);
			if (Ne && Qg(oe, _e), void 0 === _e && !Te) switch (oe.tag) {
				case 1:
				case 0:
					throw oe = oe.type, Error(u(152, oe.displayName || oe.name || "Component"))
			}
			return c(oe, se)
		}
	}
	var pi = Rg(!0),
		vi = Rg(!1),
		wi = {},
		_i = {
			current: wi
		},
		Ti = {
			current: wi
		},
		Li = {
			current: wi
		};

	function ch(oe) {
		if (oe === wi) throw Error(u(174));
		return oe
	}

	function dh(oe, se) {
		switch (I(Li, se), I(Ti, oe), I(_i, wi), oe = se.nodeType) {
			case 9:
			case 11:
				se = (se = se.documentElement) ? se.namespaceURI : Ob(null, "");
				break;
			default:
				se = Ob(se = (oe = 8 === oe ? se.parentNode : se)
					.namespaceURI || null, oe = oe.tagName)
		}
		H(_i), I(_i, se)
	}

	function eh() {
		H(_i), H(Ti), H(Li)
	}

	function fh(oe) {
		ch(Li.current);
		var se = ch(_i.current),
			_e = Ob(se, oe.type);
		se !== _e && (I(Ti, oe), I(_i, _e))
	}

	function gh(oe) {
		Ti.current === oe && (H(_i), H(Ti))
	}
	var Bi = {
		current: 0
	};

	function hh(oe) {
		for (var se = oe; null !== se;) {
			if (13 === se.tag) {
				var _e = se.memoizedState;
				if (null !== _e && (null === (_e = _e.dehydrated) || "$?" === _e.data || "$!" === _e.data)) return se
			} else if (19 === se.tag && void 0 !== se.memoizedProps.revealOrder) {
				if (0 != (64 & se.effectTag)) return se
			} else if (null !== se.child) {
				se.child.return = se, se = se.child;
				continue
			}
			if (se === oe) break;
			for (; null === se.sibling;) {
				if (null === se.return || se.return === oe) return null;
				se = se.return
			}
			se.sibling.return = se.return, se = se.sibling
		}
		return null
	}

	function ih(oe, se) {
		return {
			responder: oe,
			props: se
		}
	}
	var Wi = pt.ReactCurrentDispatcher,
		qi = pt.ReactCurrentBatchConfig,
		Yi = 0,
		Zi = null,
		eo = null,
		to = null,
		no = !1;

	function Q() {
		throw Error(u(321))
	}

	function nh(oe, se) {
		if (null === se) return !1;
		for (var _e = 0; _e < se.length && _e < oe.length; _e++)
			if (!or(oe[_e], se[_e])) return !1;
		return !0
	}

	function oh(oe, se, _e, ke, Te, Ne) {
		if (Yi = Ne, Zi = se, se.memoizedState = null, se.updateQueue = null, se.expirationTime = 0, Wi.current = null === oe || null === oe.memoizedState ? io : oo, oe = _e(ke, Te), se.expirationTime === Yi) {
			Ne = 0;
			do {
				if (se.expirationTime = 0, !(25 > Ne)) throw Error(u(301));
				Ne += 1, to = eo = null, se.updateQueue = null, Wi.current = ao, oe = _e(ke, Te)
			} while (se.expirationTime === Yi)
		}
		if (Wi.current = ro, se = null !== eo && null !== eo.next, Yi = 0, to = eo = Zi = null, no = !1, se) throw Error(u(300));
		return oe
	}

	function th() {
		var oe = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return null === to ? Zi.memoizedState = to = oe : to = to.next = oe, to
	}

	function uh() {
		if (null === eo) {
			var oe = Zi.alternate;
			oe = null !== oe ? oe.memoizedState : null
		} else oe = eo.next;
		var se = null === to ? Zi.memoizedState : to.next;
		if (null !== se) to = se, eo = oe;
		else {
			if (null === oe) throw Error(u(310));
			oe = {
				memoizedState: (eo = oe)
					.memoizedState,
				baseState: eo.baseState,
				baseQueue: eo.baseQueue,
				queue: eo.queue,
				next: null
			}, null === to ? Zi.memoizedState = to = oe : to = to.next = oe
		}
		return to
	}

	function vh(oe, se) {
		return "function" == typeof se ? se(oe) : se
	}

	function wh(oe) {
		var se = uh(),
			_e = se.queue;
		if (null === _e) throw Error(u(311));
		_e.lastRenderedReducer = oe;
		var ke = eo,
			Te = ke.baseQueue,
			Ne = _e.pending;
		if (null !== Ne) {
			if (null !== Te) {
				var Oe = Te.next;
				Te.next = Ne.next, Ne.next = Oe
			}
			ke.baseQueue = Te = Ne, _e.pending = null
		}
		if (null !== Te) {
			Te = Te.next, ke = ke.baseState;
			var Ae = Oe = Ne = null,
				Re = Te;
			do {
				var je = Re.expirationTime;
				if (je < Yi) {
					var Me = {
						expirationTime: Re.expirationTime,
						suspenseConfig: Re.suspenseConfig,
						action: Re.action,
						eagerReducer: Re.eagerReducer,
						eagerState: Re.eagerState,
						next: null
					};
					null === Ae ? (Oe = Ae = Me, Ne = ke) : Ae = Ae.next = Me, je > Zi.expirationTime && (Zi.expirationTime = je, Bg(je))
				} else null !== Ae && (Ae = Ae.next = {
					expirationTime: 1073741823,
					suspenseConfig: Re.suspenseConfig,
					action: Re.action,
					eagerReducer: Re.eagerReducer,
					eagerState: Re.eagerState,
					next: null
				}), Ag(je, Re.suspenseConfig), ke = Re.eagerReducer === oe ? Re.eagerState : oe(ke, Re.action);
				Re = Re.next
			} while (null !== Re && Re !== Te);
			null === Ae ? Ne = ke : Ae.next = Oe, or(ke, se.memoizedState) || (fo = !0), se.memoizedState = ke, se.baseState = Ne, se.baseQueue = Ae, _e.lastRenderedState = ke
		}
		return [se.memoizedState, _e.dispatch]
	}

	function xh(oe) {
		var se = uh(),
			_e = se.queue;
		if (null === _e) throw Error(u(311));
		_e.lastRenderedReducer = oe;
		var ke = _e.dispatch,
			Te = _e.pending,
			Ne = se.memoizedState;
		if (null !== Te) {
			_e.pending = null;
			var Oe = Te = Te.next;
			do {
				Ne = oe(Ne, Oe.action), Oe = Oe.next
			} while (Oe !== Te);
			or(Ne, se.memoizedState) || (fo = !0), se.memoizedState = Ne, null === se.baseQueue && (se.baseState = Ne), _e.lastRenderedState = Ne
		}
		return [Ne, ke]
	}

	function yh(oe) {
		var se = th();
		return "function" == typeof oe && (oe = oe()), se.memoizedState = se.baseState = oe, oe = (oe = se.queue = {
				pending: null,
				dispatch: null,
				lastRenderedReducer: vh,
				lastRenderedState: oe
			})
			.dispatch = zh.bind(null, Zi, oe), [se.memoizedState, oe]
	}

	function Ah(oe, se, _e, ke) {
		return oe = {
			tag: oe,
			create: se,
			destroy: _e,
			deps: ke,
			next: null
		}, null === (se = Zi.updateQueue) ? (se = {
			lastEffect: null
		}, Zi.updateQueue = se, se.lastEffect = oe.next = oe) : null === (_e = se.lastEffect) ? se.lastEffect = oe.next = oe : (ke = _e.next, _e.next = oe, oe.next = ke, se.lastEffect = oe), oe
	}

	function Bh() {
		return uh()
			.memoizedState
	}

	function Ch(oe, se, _e, ke) {
		var Te = th();
		Zi.effectTag |= oe, Te.memoizedState = Ah(1 | se, _e, void 0, void 0 === ke ? null : ke)
	}

	function Dh(oe, se, _e, ke) {
		var Te = uh();
		ke = void 0 === ke ? null : ke;
		var Ne = void 0;
		if (null !== eo) {
			var Oe = eo.memoizedState;
			if (Ne = Oe.destroy, null !== ke && nh(ke, Oe.deps)) return void Ah(se, _e, Ne, ke)
		}
		Zi.effectTag |= oe, Te.memoizedState = Ah(1 | se, _e, Ne, ke)
	}

	function Eh(oe, se) {
		return Ch(516, 4, oe, se)
	}

	function Fh(oe, se) {
		return Dh(516, 4, oe, se)
	}

	function Gh(oe, se) {
		return Dh(4, 2, oe, se)
	}

	function Hh(oe, se) {
		return "function" == typeof se ? (oe = oe(), se(oe), function() {
			se(null)
		}) : null != se ? (oe = oe(), se.current = oe, function() {
			se.current = null
		}) : void 0
	}

	function Ih(oe, se, _e) {
		return _e = null != _e ? _e.concat([oe]) : null, Dh(4, 2, Hh.bind(null, se, oe), _e)
	}

	function Jh() {}

	function Kh(oe, se) {
		return th()
			.memoizedState = [oe, void 0 === se ? null : se], oe
	}

	function Lh(oe, se) {
		var _e = uh();
		se = void 0 === se ? null : se;
		var ke = _e.memoizedState;
		return null !== ke && null !== se && nh(se, ke[1]) ? ke[0] : (_e.memoizedState = [oe, se], oe)
	}

	function Mh(oe, se) {
		var _e = uh();
		se = void 0 === se ? null : se;
		var ke = _e.memoizedState;
		return null !== ke && null !== se && nh(se, ke[1]) ? ke[0] : (oe = oe(), _e.memoizedState = [oe, se], oe)
	}

	function Nh(oe, se, _e) {
		var ke = ag();
		cg(98 > ke ? 98 : ke, (function() {
			oe(!0)
		})), cg(97 < ke ? 97 : ke, (function() {
			var ke = qi.suspense;
			qi.suspense = void 0 === se ? null : se;
			try {
				oe(!1), _e()
			} finally {
				qi.suspense = ke
			}
		}))
	}

	function zh(oe, se, _e) {
		var ke = Gg(),
			Te = ni.suspense;
		Te = {
			expirationTime: ke = Hg(ke, oe, Te),
			suspenseConfig: Te,
			action: _e,
			eagerReducer: null,
			eagerState: null,
			next: null
		};
		var Ne = se.pending;
		if (null === Ne ? Te.next = Te : (Te.next = Ne.next, Ne.next = Te), se.pending = Te, Ne = oe.alternate, oe === Zi || null !== Ne && Ne === Zi) no = !0, Te.expirationTime = Yi, Zi.expirationTime = Yi;
		else {
			if (0 === oe.expirationTime && (null === Ne || 0 === Ne.expirationTime) && null !== (Ne = se.lastRenderedReducer)) try {
				var Oe = se.lastRenderedState,
					Ae = Ne(Oe, _e);
				if (Te.eagerReducer = Ne, Te.eagerState = Ae, or(Ae, Oe)) return
			} catch (oe) {}
			Ig(oe, ke)
		}
	}
	var ro = {
			readContext: sg,
			useCallback: Q,
			useContext: Q,
			useEffect: Q,
			useImperativeHandle: Q,
			useLayoutEffect: Q,
			useMemo: Q,
			useReducer: Q,
			useRef: Q,
			useState: Q,
			useDebugValue: Q,
			useResponder: Q,
			useDeferredValue: Q,
			useTransition: Q
		},
		io = {
			readContext: sg,
			useCallback: Kh,
			useContext: sg,
			useEffect: Eh,
			useImperativeHandle: function(oe, se, _e) {
				return _e = null != _e ? _e.concat([oe]) : null, Ch(4, 2, Hh.bind(null, se, oe), _e)
			},
			useLayoutEffect: function(oe, se) {
				return Ch(4, 2, oe, se)
			},
			useMemo: function(oe, se) {
				var _e = th();
				return se = void 0 === se ? null : se, oe = oe(), _e.memoizedState = [oe, se], oe
			},
			useReducer: function(oe, se, _e) {
				var ke = th();
				return se = void 0 !== _e ? _e(se) : se, ke.memoizedState = ke.baseState = se, oe = (oe = ke.queue = {
						pending: null,
						dispatch: null,
						lastRenderedReducer: oe,
						lastRenderedState: se
					})
					.dispatch = zh.bind(null, Zi, oe), [ke.memoizedState, oe]
			},
			useRef: function(oe) {
				return oe = {
						current: oe
					}, th()
					.memoizedState = oe
			},
			useState: yh,
			useDebugValue: Jh,
			useResponder: ih,
			useDeferredValue: function(oe, se) {
				var _e = yh(oe),
					ke = _e[0],
					Te = _e[1];
				return Eh((function() {
					var _e = qi.suspense;
					qi.suspense = void 0 === se ? null : se;
					try {
						Te(oe)
					} finally {
						qi.suspense = _e
					}
				}), [oe, se]), ke
			},
			useTransition: function(oe) {
				var se = yh(!1),
					_e = se[0];
				return se = se[1], [Kh(Nh.bind(null, se, oe), [se, oe]), _e]
			}
		},
		oo = {
			readContext: sg,
			useCallback: Lh,
			useContext: sg,
			useEffect: Fh,
			useImperativeHandle: Ih,
			useLayoutEffect: Gh,
			useMemo: Mh,
			useReducer: wh,
			useRef: Bh,
			useState: function() {
				return wh(vh)
			},
			useDebugValue: Jh,
			useResponder: ih,
			useDeferredValue: function(oe, se) {
				var _e = wh(vh),
					ke = _e[0],
					Te = _e[1];
				return Fh((function() {
					var _e = qi.suspense;
					qi.suspense = void 0 === se ? null : se;
					try {
						Te(oe)
					} finally {
						qi.suspense = _e
					}
				}), [oe, se]), ke
			},
			useTransition: function(oe) {
				var se = wh(vh),
					_e = se[0];
				return se = se[1], [Lh(Nh.bind(null, se, oe), [se, oe]), _e]
			}
		},
		ao = {
			readContext: sg,
			useCallback: Lh,
			useContext: sg,
			useEffect: Fh,
			useImperativeHandle: Ih,
			useLayoutEffect: Gh,
			useMemo: Mh,
			useReducer: xh,
			useRef: Bh,
			useState: function() {
				return xh(vh)
			},
			useDebugValue: Jh,
			useResponder: ih,
			useDeferredValue: function(oe, se) {
				var _e = xh(vh),
					ke = _e[0],
					Te = _e[1];
				return Fh((function() {
					var _e = qi.suspense;
					qi.suspense = void 0 === se ? null : se;
					try {
						Te(oe)
					} finally {
						qi.suspense = _e
					}
				}), [oe, se]), ke
			},
			useTransition: function(oe) {
				var se = xh(vh),
					_e = se[0];
				return se = se[1], [Lh(Nh.bind(null, se, oe), [se, oe]), _e]
			}
		},
		lo = null,
		so = null,
		co = !1;

	function Rh(oe, se) {
		var _e = Sh(5, null, null, 0);
		_e.elementType = "DELETED", _e.type = "DELETED", _e.stateNode = se, _e.return = oe, _e.effectTag = 8, null !== oe.lastEffect ? (oe.lastEffect.nextEffect = _e, oe.lastEffect = _e) : oe.firstEffect = oe.lastEffect = _e
	}

	function Th(oe, se) {
		switch (oe.tag) {
			case 5:
				var _e = oe.type;
				return null !== (se = 1 !== se.nodeType || _e.toLowerCase() !== se.nodeName.toLowerCase() ? null : se) && (oe.stateNode = se, !0);
			case 6:
				return null !== (se = "" === oe.pendingProps || 3 !== se.nodeType ? null : se) && (oe.stateNode = se, !0);
			case 13:
			default:
				return !1
		}
	}

	function Uh(oe) {
		if (co) {
			var se = so;
			if (se) {
				var _e = se;
				if (!Th(oe, se)) {
					if (!(se = Jd(_e.nextSibling)) || !Th(oe, se)) return oe.effectTag = -1025 & oe.effectTag | 2, co = !1, void(lo = oe);
					Rh(lo, _e)
				}
				lo = oe, so = Jd(se.firstChild)
			} else oe.effectTag = -1025 & oe.effectTag | 2, co = !1, lo = oe
		}
	}

	function Vh(oe) {
		for (oe = oe.return; null !== oe && 5 !== oe.tag && 3 !== oe.tag && 13 !== oe.tag;) oe = oe.return;
		lo = oe
	}

	function Wh(oe) {
		if (oe !== lo) return !1;
		if (!co) return Vh(oe), co = !0, !1;
		var se = oe.type;
		if (5 !== oe.tag || "head" !== se && "body" !== se && !Gd(se, oe.memoizedProps))
			for (se = so; se;) Rh(oe, se), se = Jd(se.nextSibling);
		if (Vh(oe), 13 === oe.tag) {
			if (!(oe = null !== (oe = oe.memoizedState) ? oe.dehydrated : null)) throw Error(u(317));
			e: {
				for (oe = oe.nextSibling, se = 0; oe;) {
					if (8 === oe.nodeType) {
						var _e = oe.data;
						if ("/$" === _e) {
							if (0 === se) {
								so = Jd(oe.nextSibling);
								break e
							}
							se--
						} else "$" !== _e && "$!" !== _e && "$?" !== _e || se++
					}
					oe = oe.nextSibling
				}
				so = null
			}
		} else so = lo ? Jd(oe.stateNode.nextSibling) : null;
		return !0
	}

	function Xh() {
		so = lo = null, co = !1
	}
	var uo = pt.ReactCurrentOwner,
		fo = !1;

	function R(oe, se, _e, ke) {
		se.child = null === oe ? vi(se, null, _e, ke) : pi(se, oe.child, _e, ke)
	}

	function Zh(oe, se, _e, ke, Te) {
		_e = _e.render;
		var Ne = se.ref;
		return qg(se, Te), ke = oh(oe, se, _e, ke, Ne, Te), null === oe || fo ? (se.effectTag |= 1, R(oe, se, ke, Te), se.child) : (se.updateQueue = oe.updateQueue, se.effectTag &= -517, oe.expirationTime <= Te && (oe.expirationTime = 0), $h(oe, se, Te))
	}

	function ai(oe, se, _e, ke, Te, Ne) {
		if (null === oe) {
			var Oe = _e.type;
			return "function" != typeof Oe || bi(Oe) || void 0 !== Oe.defaultProps || null !== _e.compare || void 0 !== _e.defaultProps ? ((oe = Ug(_e.type, null, ke, null, se.mode, Ne))
				.ref = se.ref, oe.return = se, se.child = oe) : (se.tag = 15, se.type = Oe, ci(oe, se, Oe, ke, Te, Ne))
		}
		return Oe = oe.child, Te < Ne && (Te = Oe.memoizedProps, (_e = null !== (_e = _e.compare) ? _e : bf)(Te, ke) && oe.ref === se.ref) ? $h(oe, se, Ne) : (se.effectTag |= 1, (oe = Sg(Oe, ke))
			.ref = se.ref, oe.return = se, se.child = oe)
	}

	function ci(oe, se, _e, ke, Te, Ne) {
		return null !== oe && bf(oe.memoizedProps, ke) && oe.ref === se.ref && (fo = !1, Te < Ne) ? (se.expirationTime = oe.expirationTime, $h(oe, se, Ne)) : di(oe, se, _e, ke, Ne)
	}

	function ei(oe, se) {
		var _e = se.ref;
		(null === oe && null !== _e || null !== oe && oe.ref !== _e) && (se.effectTag |= 128)
	}

	function di(oe, se, _e, ke, Te) {
		var Ne = L(_e) ? Pr : Nr.current;
		return Ne = Cf(se, Ne), qg(se, Te), _e = oh(oe, se, _e, ke, Ne, Te), null === oe || fo ? (se.effectTag |= 1, R(oe, se, _e, Te), se.child) : (se.updateQueue = oe.updateQueue, se.effectTag &= -517, oe.expirationTime <= Te && (oe.expirationTime = 0), $h(oe, se, Te))
	}

	function fi(oe, se, _e, ke, Te) {
		if (L(_e)) {
			var Ne = !0;
			Gf(se)
		} else Ne = !1;
		if (qg(se, Te), null === se.stateNode) null !== oe && (oe.alternate = null, se.alternate = null, se.effectTag |= 2), Lg(se, _e, ke), Ng(se, _e, ke, Te), ke = !0;
		else if (null === oe) {
			var Oe = se.stateNode,
				Ae = se.memoizedProps;
			Oe.props = Ae;
			var Re = Oe.context,
				je = _e.contextType;
			"object" == typeof je && null !== je ? je = sg(je) : je = Cf(se, je = L(_e) ? Pr : Nr.current);
			var Me = _e.getDerivedStateFromProps,
				Fe = "function" == typeof Me || "function" == typeof Oe.getSnapshotBeforeUpdate;
			Fe || "function" != typeof Oe.UNSAFE_componentWillReceiveProps && "function" != typeof Oe.componentWillReceiveProps || (Ae !== ke || Re !== je) && Mg(se, Oe, ke, je), ti = !1;
			var Ue = se.memoizedState;
			Oe.state = Ue, zg(se, ke, Oe, Te), Re = se.memoizedState, Ae !== ke || Ue !== Re || Ir.current || ti ? ("function" == typeof Me && (Fg(se, _e, Me, ke), Re = se.memoizedState), (Ae = ti || Kg(se, _e, Ae, ke, Ue, Re, je)) ? (Fe || "function" != typeof Oe.UNSAFE_componentWillMount && "function" != typeof Oe.componentWillMount || ("function" == typeof Oe.componentWillMount && Oe.componentWillMount(), "function" == typeof Oe.UNSAFE_componentWillMount && Oe.UNSAFE_componentWillMount()), "function" == typeof Oe.componentDidMount && (se.effectTag |= 4)) : ("function" == typeof Oe.componentDidMount && (se.effectTag |= 4), se.memoizedProps = ke, se.memoizedState = Re), Oe.props = ke, Oe.state = Re, Oe.context = je, ke = Ae) : ("function" == typeof Oe.componentDidMount && (se.effectTag |= 4), ke = !1)
		} else Oe = se.stateNode, vg(oe, se), Ae = se.memoizedProps, Oe.props = se.type === se.elementType ? Ae : ig(se.type, Ae), Re = Oe.context, "object" == typeof(je = _e.contextType) && null !== je ? je = sg(je) : je = Cf(se, je = L(_e) ? Pr : Nr.current), (Fe = "function" == typeof(Me = _e.getDerivedStateFromProps) || "function" == typeof Oe.getSnapshotBeforeUpdate) || "function" != typeof Oe.UNSAFE_componentWillReceiveProps && "function" != typeof Oe.componentWillReceiveProps || (Ae !== ke || Re !== je) && Mg(se, Oe, ke, je), ti = !1, Re = se.memoizedState, Oe.state = Re, zg(se, ke, Oe, Te), Ue = se.memoizedState, Ae !== ke || Re !== Ue || Ir.current || ti ? ("function" == typeof Me && (Fg(se, _e, Me, ke), Ue = se.memoizedState), (Me = ti || Kg(se, _e, Ae, ke, Re, Ue, je)) ? (Fe || "function" != typeof Oe.UNSAFE_componentWillUpdate && "function" != typeof Oe.componentWillUpdate || ("function" == typeof Oe.componentWillUpdate && Oe.componentWillUpdate(ke, Ue, je), "function" == typeof Oe.UNSAFE_componentWillUpdate && Oe.UNSAFE_componentWillUpdate(ke, Ue, je)), "function" == typeof Oe.componentDidUpdate && (se.effectTag |= 4), "function" == typeof Oe.getSnapshotBeforeUpdate && (se.effectTag |= 256)) : ("function" != typeof Oe.componentDidUpdate || Ae === oe.memoizedProps && Re === oe.memoizedState || (se.effectTag |= 4), "function" != typeof Oe.getSnapshotBeforeUpdate || Ae === oe.memoizedProps && Re === oe.memoizedState || (se.effectTag |= 256), se.memoizedProps = ke, se.memoizedState = Ue), Oe.props = ke, Oe.state = Ue, Oe.context = je, ke = Me) : ("function" != typeof Oe.componentDidUpdate || Ae === oe.memoizedProps && Re === oe.memoizedState || (se.effectTag |= 4), "function" != typeof Oe.getSnapshotBeforeUpdate || Ae === oe.memoizedProps && Re === oe.memoizedState || (se.effectTag |= 256), ke = !1);
		return gi(oe, se, _e, ke, Ne, Te)
	}

	function gi(oe, se, _e, ke, Te, Ne) {
		ei(oe, se);
		var Oe = 0 != (64 & se.effectTag);
		if (!ke && !Oe) return Te && Hf(se, _e, !1), $h(oe, se, Ne);
		ke = se.stateNode, uo.current = se;
		var Ae = Oe && "function" != typeof _e.getDerivedStateFromError ? null : ke.render();
		return se.effectTag |= 1, null !== oe && Oe ? (se.child = pi(se, oe.child, null, Ne), se.child = pi(se, null, Ae, Ne)) : R(oe, se, Ae, Ne), se.memoizedState = ke.state, Te && Hf(se, _e, !0), se.child
	}

	function hi(oe) {
		var se = oe.stateNode;
		se.pendingContext ? Ef(0, se.pendingContext, se.pendingContext !== se.context) : se.context && Ef(0, se.context, !1), dh(oe, se.containerInfo)
	}
	var ho, po, mo, go = {
		dehydrated: null,
		retryTime: 0
	};

	function ji(oe, se, _e) {
		var ke, Te = se.mode,
			Ne = se.pendingProps,
			Oe = Bi.current,
			Ae = !1;
		if ((ke = 0 != (64 & se.effectTag)) || (ke = 0 != (2 & Oe) && (null === oe || null !== oe.memoizedState)), ke ? (Ae = !0, se.effectTag &= -65) : null !== oe && null === oe.memoizedState || void 0 === Ne.fallback || !0 === Ne.unstable_avoidThisFallback || (Oe |= 1), I(Bi, 1 & Oe), null === oe) {
			if (void 0 !== Ne.fallback && Uh(se), Ae) {
				if (Ae = Ne.fallback, (Ne = Wg(null, Te, 0, null))
					.return = se, 0 == (2 & se.mode))
					for (oe = null !== se.memoizedState ? se.child.child : se.child, Ne.child = oe; null !== oe;) oe.return = Ne, oe = oe.sibling;
				return (_e = Wg(Ae, Te, _e, null))
					.return = se, Ne.sibling = _e, se.memoizedState = go, se.child = Ne, _e
			}
			return Te = Ne.children, se.memoizedState = null, se.child = vi(se, null, Te, _e)
		}
		if (null !== oe.memoizedState) {
			if (Te = (oe = oe.child)
				.sibling, Ae) {
				if (Ne = Ne.fallback, (_e = Sg(oe, oe.pendingProps))
					.return = se, 0 == (2 & se.mode) && (Ae = null !== se.memoizedState ? se.child.child : se.child) !== oe.child)
					for (_e.child = Ae; null !== Ae;) Ae.return = _e, Ae = Ae.sibling;
				return (Te = Sg(Te, Ne))
					.return = se, _e.sibling = Te, _e.childExpirationTime = 0, se.memoizedState = go, se.child = _e, Te
			}
			return _e = pi(se, oe.child, Ne.children, _e), se.memoizedState = null, se.child = _e
		}
		if (oe = oe.child, Ae) {
			if (Ae = Ne.fallback, (Ne = Wg(null, Te, 0, null))
				.return = se, Ne.child = oe, null !== oe && (oe.return = Ne), 0 == (2 & se.mode))
				for (oe = null !== se.memoizedState ? se.child.child : se.child, Ne.child = oe; null !== oe;) oe.return = Ne, oe = oe.sibling;
			return (_e = Wg(Ae, Te, _e, null))
				.return = se, Ne.sibling = _e, _e.effectTag |= 2, Ne.childExpirationTime = 0, se.memoizedState = go, se.child = Ne, _e
		}
		return se.memoizedState = null, se.child = pi(se, oe, Ne.children, _e)
	}

	function ki(oe, se) {
		oe.expirationTime < se && (oe.expirationTime = se);
		var _e = oe.alternate;
		null !== _e && _e.expirationTime < se && (_e.expirationTime = se), pg(oe.return, se)
	}

	function li(oe, se, _e, ke, Te, Ne) {
		var Oe = oe.memoizedState;
		null === Oe ? oe.memoizedState = {
			isBackwards: se,
			rendering: null,
			renderingStartTime: 0,
			last: ke,
			tail: _e,
			tailExpiration: 0,
			tailMode: Te,
			lastEffect: Ne
		} : (Oe.isBackwards = se, Oe.rendering = null, Oe.renderingStartTime = 0, Oe.last = ke, Oe.tail = _e, Oe.tailExpiration = 0, Oe.tailMode = Te, Oe.lastEffect = Ne)
	}

	function mi(oe, se, _e) {
		var ke = se.pendingProps,
			Te = ke.revealOrder,
			Ne = ke.tail;
		if (R(oe, se, ke.children, _e), 0 != (2 & (ke = Bi.current))) ke = 1 & ke | 2, se.effectTag |= 64;
		else {
			if (null !== oe && 0 != (64 & oe.effectTag)) e: for (oe = se.child; null !== oe;) {
				if (13 === oe.tag) null !== oe.memoizedState && ki(oe, _e);
				else if (19 === oe.tag) ki(oe, _e);
				else if (null !== oe.child) {
					oe.child.return = oe, oe = oe.child;
					continue
				}
				if (oe === se) break e;
				for (; null === oe.sibling;) {
					if (null === oe.return || oe.return === se) break e;
					oe = oe.return
				}
				oe.sibling.return = oe.return, oe = oe.sibling
			}
			ke &= 1
		}
		if (I(Bi, ke), 0 == (2 & se.mode)) se.memoizedState = null;
		else switch (Te) {
			case "forwards":
				for (_e = se.child, Te = null; null !== _e;) null !== (oe = _e.alternate) && null === hh(oe) && (Te = _e), _e = _e.sibling;
				null === (_e = Te) ? (Te = se.child, se.child = null) : (Te = _e.sibling, _e.sibling = null), li(se, !1, Te, _e, Ne, se.lastEffect);
				break;
			case "backwards":
				for (_e = null, Te = se.child, se.child = null; null !== Te;) {
					if (null !== (oe = Te.alternate) && null === hh(oe)) {
						se.child = Te;
						break
					}
					oe = Te.sibling, Te.sibling = _e, _e = Te, Te = oe
				}
				li(se, !0, _e, null, Ne, se.lastEffect);
				break;
			case "together":
				li(se, !1, null, null, void 0, se.lastEffect);
				break;
			default:
				se.memoizedState = null
		}
		return se.child
	}

	function $h(oe, se, _e) {
		null !== oe && (se.dependencies = oe.dependencies);
		var ke = se.expirationTime;
		if (0 !== ke && Bg(ke), se.childExpirationTime < _e) return null;
		if (null !== oe && se.child !== oe.child) throw Error(u(153));
		if (null !== se.child) {
			for (_e = Sg(oe = se.child, oe.pendingProps), se.child = _e, _e.return = se; null !== oe.sibling;) oe = oe.sibling, (_e = _e.sibling = Sg(oe, oe.pendingProps))
				.return = se;
			_e.sibling = null
		}
		return se.child
	}

	function ri(oe, se) {
		switch (oe.tailMode) {
			case "hidden":
				se = oe.tail;
				for (var _e = null; null !== se;) null !== se.alternate && (_e = se), se = se.sibling;
				null === _e ? oe.tail = null : _e.sibling = null;
				break;
			case "collapsed":
				_e = oe.tail;
				for (var ke = null; null !== _e;) null !== _e.alternate && (ke = _e), _e = _e.sibling;
				null === ke ? se || null === oe.tail ? oe.tail = null : oe.tail.sibling = null : ke.sibling = null
		}
	}

	function si(oe, se, _e) {
		var ke = se.pendingProps;
		switch (se.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return null;
			case 1:
				return L(se.type) && Df(), null;
			case 3:
				return eh(), H(Ir), H(Nr), (_e = se.stateNode)
					.pendingContext && (_e.context = _e.pendingContext, _e.pendingContext = null), null !== oe && null !== oe.child || !Wh(se) || (se.effectTag |= 4), null;
			case 5:
				gh(se), _e = ch(Li.current);
				var Ne = se.type;
				if (null !== oe && null != se.stateNode) po(oe, se, Ne, ke, _e), oe.ref !== se.ref && (se.effectTag |= 128);
				else {
					if (!ke) {
						if (null === se.stateNode) throw Error(u(166));
						return null
					}
					if (oe = ch(_i.current), Wh(se)) {
						ke = se.stateNode, Ne = se.type;
						var Oe = se.memoizedProps;
						switch (ke[Tn] = se, ke[xn] = Oe, Ne) {
							case "iframe":
							case "object":
							case "embed":
								F("load", ke);
								break;
							case "video":
							case "audio":
								for (oe = 0; oe < Wt.length; oe++) F(Wt[oe], ke);
								break;
							case "source":
								F("error", ke);
								break;
							case "img":
							case "image":
							case "link":
								F("error", ke), F("load", ke);
								break;
							case "form":
								F("reset", ke), F("submit", ke);
								break;
							case "details":
								F("toggle", ke);
								break;
							case "input":
								Ab(ke, Oe), F("invalid", ke), rd(_e, "onChange");
								break;
							case "select":
								ke._wrapperState = {
									wasMultiple: !!Oe.multiple
								}, F("invalid", ke), rd(_e, "onChange");
								break;
							case "textarea":
								Jb(ke, Oe), F("invalid", ke), rd(_e, "onChange")
						}
						for (var Ae in od(Ne, Oe), oe = null, Oe)
							if (Oe.hasOwnProperty(Ae)) {
								var Re = Oe[Ae];
								"children" === Ae ? "string" == typeof Re ? ke.textContent !== Re && (oe = ["children", Re]) : "number" == typeof Re && ke.textContent !== "" + Re && (oe = ["children", "" + Re]) : $e.hasOwnProperty(Ae) && null != Re && rd(_e, Ae)
							} switch (Ne) {
							case "input":
								xb(ke), Eb(ke, Oe, !0);
								break;
							case "textarea":
								xb(ke), Lb(ke);
								break;
							case "select":
							case "option":
								break;
							default:
								"function" == typeof Oe.onClick && (ke.onclick = sd)
						}
						_e = oe, se.updateQueue = _e, null !== _e && (se.effectTag |= 4)
					} else {
						switch (Ae = 9 === _e.nodeType ? _e : _e.ownerDocument, oe === yn && (oe = Nb(Ne)), oe === yn ? "script" === Ne ? ((oe = Ae.createElement("div"))
							.innerHTML = "<script><\/script>", oe = oe.removeChild(oe.firstChild)) : "string" == typeof ke.is ? oe = Ae.createElement(Ne, {
							is: ke.is
						}) : (oe = Ae.createElement(Ne), "select" === Ne && (Ae = oe, ke.multiple ? Ae.multiple = !0 : ke.size && (Ae.size = ke.size))) : oe = Ae.createElementNS(oe, Ne), oe[Tn] = se, oe[xn] = ke, ho(oe, se), se.stateNode = oe, Ae = pd(Ne, ke), Ne) {
							case "iframe":
							case "object":
							case "embed":
								F("load", oe), Re = ke;
								break;
							case "video":
							case "audio":
								for (Re = 0; Re < Wt.length; Re++) F(Wt[Re], oe);
								Re = ke;
								break;
							case "source":
								F("error", oe), Re = ke;
								break;
							case "img":
							case "image":
							case "link":
								F("error", oe), F("load", oe), Re = ke;
								break;
							case "form":
								F("reset", oe), F("submit", oe), Re = ke;
								break;
							case "details":
								F("toggle", oe), Re = ke;
								break;
							case "input":
								Ab(oe, ke), Re = zb(oe, ke), F("invalid", oe), rd(_e, "onChange");
								break;
							case "option":
								Re = Gb(oe, ke);
								break;
							case "select":
								oe._wrapperState = {
									wasMultiple: !!ke.multiple
								}, Re = Te({}, ke, {
									value: void 0
								}), F("invalid", oe), rd(_e, "onChange");
								break;
							case "textarea":
								Jb(oe, ke), Re = Ib(oe, ke), F("invalid", oe), rd(_e, "onChange");
								break;
							default:
								Re = ke
						}
						od(Ne, Re);
						var je = Re;
						for (Oe in je)
							if (je.hasOwnProperty(Oe)) {
								var Me = je[Oe];
								"style" === Oe ? md(oe, Me) : "dangerouslySetInnerHTML" === Oe ? null != (Me = Me ? Me.__html : void 0) && Rt(oe, Me) : "children" === Oe ? "string" == typeof Me ? ("textarea" !== Ne || "" !== Me) && Rb(oe, Me) : "number" == typeof Me && Rb(oe, "" + Me) : "suppressContentEditableWarning" !== Oe && "suppressHydrationWarning" !== Oe && "autoFocus" !== Oe && ($e.hasOwnProperty(Oe) ? null != Me && rd(_e, Oe) : null != Me && Xa(oe, Oe, Me, Ae))
							} switch (Ne) {
							case "input":
								xb(oe), Eb(oe, ke, !1);
								break;
							case "textarea":
								xb(oe), Lb(oe);
								break;
							case "option":
								null != ke.value && oe.setAttribute("value", "" + rb(ke.value));
								break;
							case "select":
								oe.multiple = !!ke.multiple, null != (_e = ke.value) ? Hb(oe, !!ke.multiple, _e, !1) : null != ke.defaultValue && Hb(oe, !!ke.multiple, ke.defaultValue, !0);
								break;
							default:
								"function" == typeof Re.onClick && (oe.onclick = sd)
						}
						Fd(Ne, ke) && (se.effectTag |= 4)
					}
					null !== se.ref && (se.effectTag |= 128)
				}
				return null;
			case 6:
				if (oe && null != se.stateNode) mo(0, se, oe.memoizedProps, ke);
				else {
					if ("string" != typeof ke && null === se.stateNode) throw Error(u(166));
					_e = ch(Li.current), ch(_i.current), Wh(se) ? (_e = se.stateNode, ke = se.memoizedProps, _e[Tn] = se, _e.nodeValue !== ke && (se.effectTag |= 4)) : ((_e = (9 === _e.nodeType ? _e : _e.ownerDocument)
						.createTextNode(ke))[Tn] = se, se.stateNode = _e)
				}
				return null;
			case 13:
				return H(Bi), ke = se.memoizedState, 0 != (64 & se.effectTag) ? (se.expirationTime = _e, se) : (_e = null !== ke, ke = !1, null === oe ? void 0 !== se.memoizedProps.fallback && Wh(se) : (ke = null !== (Ne = oe.memoizedState), _e || null === Ne || null !== (Ne = oe.child.sibling) && (null !== (Oe = se.firstEffect) ? (se.firstEffect = Ne, Ne.nextEffect = Oe) : (se.firstEffect = se.lastEffect = Ne, Ne.nextEffect = null), Ne.effectTag = 8)), _e && !ke && 0 != (2 & se.mode) && (null === oe && !0 !== se.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Bi.current) ? Po === So && (Po = ko) : (Po !== So && Po !== ko || (Po = To), 0 !== Ro && null !== Co && (xi(Co, Io), yi(Co, Ro)))), (_e || ke) && (se.effectTag |= 4), null);
			case 4:
				return eh(), null;
			case 10:
				return og(se), null;
			case 17:
				return L(se.type) && Df(), null;
			case 19:
				if (H(Bi), null === (ke = se.memoizedState)) return null;
				if (Ne = 0 != (64 & se.effectTag), null === (Oe = ke.rendering)) {
					if (Ne) ri(ke, !1);
					else if (Po !== So || null !== oe && 0 != (64 & oe.effectTag))
						for (Oe = se.child; null !== Oe;) {
							if (null !== (oe = hh(Oe))) {
								for (se.effectTag |= 64, ri(ke, !1), null !== (Ne = oe.updateQueue) && (se.updateQueue = Ne, se.effectTag |= 4), null === ke.lastEffect && (se.firstEffect = null), se.lastEffect = ke.lastEffect, ke = se.child; null !== ke;) Oe = _e, (Ne = ke)
									.effectTag &= 2, Ne.nextEffect = null, Ne.firstEffect = null, Ne.lastEffect = null, null === (oe = Ne.alternate) ? (Ne.childExpirationTime = 0, Ne.expirationTime = Oe, Ne.child = null, Ne.memoizedProps = null, Ne.memoizedState = null, Ne.updateQueue = null, Ne.dependencies = null) : (Ne.childExpirationTime = oe.childExpirationTime, Ne.expirationTime = oe.expirationTime, Ne.child = oe.child, Ne.memoizedProps = oe.memoizedProps, Ne.memoizedState = oe.memoizedState, Ne.updateQueue = oe.updateQueue, Oe = oe.dependencies, Ne.dependencies = null === Oe ? null : {
										expirationTime: Oe.expirationTime,
										firstContext: Oe.firstContext,
										responders: Oe.responders
									}), ke = ke.sibling;
								return I(Bi, 1 & Bi.current | 2), se.child
							}
							Oe = Oe.sibling
						}
				} else {
					if (!Ne)
						if (null !== (oe = hh(Oe))) {
							if (se.effectTag |= 64, Ne = !0, null !== (_e = oe.updateQueue) && (se.updateQueue = _e, se.effectTag |= 4), ri(ke, !0), null === ke.tail && "hidden" === ke.tailMode && !Oe.alternate) return null !== (se = se.lastEffect = ke.lastEffect) && (se.nextEffect = null), null
						} else 2 * Yr() - ke.renderingStartTime > ke.tailExpiration && 1 < _e && (se.effectTag |= 64, Ne = !0, ri(ke, !1), se.expirationTime = se.childExpirationTime = _e - 1);
					ke.isBackwards ? (Oe.sibling = se.child, se.child = Oe) : (null !== (_e = ke.last) ? _e.sibling = Oe : se.child = Oe, ke.last = Oe)
				}
				return null !== ke.tail ? (0 === ke.tailExpiration && (ke.tailExpiration = Yr() + 500), _e = ke.tail, ke.rendering = _e, ke.tail = _e.sibling, ke.lastEffect = se.lastEffect, ke.renderingStartTime = Yr(), _e.sibling = null, se = Bi.current, I(Bi, Ne ? 1 & se | 2 : 1 & se), _e) : null
		}
		throw Error(u(156, se.tag))
	}

	function zi(oe) {
		switch (oe.tag) {
			case 1:
				L(oe.type) && Df();
				var se = oe.effectTag;
				return 4096 & se ? (oe.effectTag = -4097 & se | 64, oe) : null;
			case 3:
				if (eh(), H(Ir), H(Nr), 0 != (64 & (se = oe.effectTag))) throw Error(u(285));
				return oe.effectTag = -4097 & se | 64, oe;
			case 5:
				return gh(oe), null;
			case 13:
				return H(Bi), 4096 & (se = oe.effectTag) ? (oe.effectTag = -4097 & se | 64, oe) : null;
			case 19:
				return H(Bi), null;
			case 4:
				return eh(), null;
			case 10:
				return og(oe), null;
			default:
				return null
		}
	}

	function Ai(oe, se) {
		return {
			value: oe,
			source: se,
			stack: qb(se)
		}
	}
	ho = function(oe, se) {
		for (var _e = se.child; null !== _e;) {
			if (5 === _e.tag || 6 === _e.tag) oe.appendChild(_e.stateNode);
			else if (4 !== _e.tag && null !== _e.child) {
				_e.child.return = _e, _e = _e.child;
				continue
			}
			if (_e === se) break;
			for (; null === _e.sibling;) {
				if (null === _e.return || _e.return === se) return;
				_e = _e.return
			}
			_e.sibling.return = _e.return, _e = _e.sibling
		}
	}, po = function(oe, se, _e, ke, Ne) {
		var Oe = oe.memoizedProps;
		if (Oe !== ke) {
			var Ae, Re, je = se.stateNode;
			switch (ch(_i.current), oe = null, _e) {
				case "input":
					Oe = zb(je, Oe), ke = zb(je, ke), oe = [];
					break;
				case "option":
					Oe = Gb(je, Oe), ke = Gb(je, ke), oe = [];
					break;
				case "select":
					Oe = Te({}, Oe, {
						value: void 0
					}), ke = Te({}, ke, {
						value: void 0
					}), oe = [];
					break;
				case "textarea":
					Oe = Ib(je, Oe), ke = Ib(je, ke), oe = [];
					break;
				default:
					"function" != typeof Oe.onClick && "function" == typeof ke.onClick && (je.onclick = sd)
			}
			for (Ae in od(_e, ke), _e = null, Oe)
				if (!ke.hasOwnProperty(Ae) && Oe.hasOwnProperty(Ae) && null != Oe[Ae])
					if ("style" === Ae)
						for (Re in je = Oe[Ae]) je.hasOwnProperty(Re) && (_e || (_e = {}), _e[Re] = "");
					else "dangerouslySetInnerHTML" !== Ae && "children" !== Ae && "suppressContentEditableWarning" !== Ae && "suppressHydrationWarning" !== Ae && "autoFocus" !== Ae && ($e.hasOwnProperty(Ae) ? oe || (oe = []) : (oe = oe || [])
						.push(Ae, null));
			for (Ae in ke) {
				var Me = ke[Ae];
				if (je = null != Oe ? Oe[Ae] : void 0, ke.hasOwnProperty(Ae) && Me !== je && (null != Me || null != je))
					if ("style" === Ae)
						if (je) {
							for (Re in je) !je.hasOwnProperty(Re) || Me && Me.hasOwnProperty(Re) || (_e || (_e = {}), _e[Re] = "");
							for (Re in Me) Me.hasOwnProperty(Re) && je[Re] !== Me[Re] && (_e || (_e = {}), _e[Re] = Me[Re])
						} else _e || (oe || (oe = []), oe.push(Ae, _e)), _e = Me;
				else "dangerouslySetInnerHTML" === Ae ? (Me = Me ? Me.__html : void 0, je = je ? je.__html : void 0, null != Me && je !== Me && (oe = oe || [])
						.push(Ae, Me)) : "children" === Ae ? je === Me || "string" != typeof Me && "number" != typeof Me || (oe = oe || [])
					.push(Ae, "" + Me) : "suppressContentEditableWarning" !== Ae && "suppressHydrationWarning" !== Ae && ($e.hasOwnProperty(Ae) ? (null != Me && rd(Ne, Ae), oe || je === Me || (oe = [])) : (oe = oe || [])
						.push(Ae, Me))
			}
			_e && (oe = oe || [])
				.push("style", _e), Ne = oe, (se.updateQueue = Ne) && (se.effectTag |= 4)
		}
	}, mo = function(oe, se, _e, ke) {
		_e !== ke && (se.effectTag |= 4)
	};
	var vo = "function" == typeof WeakSet ? WeakSet : Set;

	function Ci(oe, se) {
		var _e = se.source,
			ke = se.stack;
		null === ke && null !== _e && (ke = qb(_e)), null !== _e && pb(_e.type), se = se.value, null !== oe && 1 === oe.tag && pb(oe.type);
		try {
			console.error(se)
		} catch (oe) {
			setTimeout((function() {
				throw oe
			}))
		}
	}

	function Fi(oe) {
		var se = oe.ref;
		if (null !== se)
			if ("function" == typeof se) try {
				se(null)
			} catch (se) {
				Ei(oe, se)
			} else se.current = null
	}

	function Gi(oe, se) {
		switch (se.tag) {
			case 0:
			case 11:
			case 15:
			case 22:
				return;
			case 1:
				if (256 & se.effectTag && null !== oe) {
					var _e = oe.memoizedProps,
						ke = oe.memoizedState;
					se = (oe = se.stateNode)
						.getSnapshotBeforeUpdate(se.elementType === se.type ? _e : ig(se.type, _e), ke), oe.__reactInternalSnapshotBeforeUpdate = se
				}
				return;
			case 3:
			case 5:
			case 6:
			case 4:
			case 17:
				return
		}
		throw Error(u(163))
	}

	function Hi(oe, se) {
		if (null !== (se = null !== (se = se.updateQueue) ? se.lastEffect : null)) {
			var _e = se = se.next;
			do {
				if ((_e.tag & oe) === oe) {
					var ke = _e.destroy;
					_e.destroy = void 0, void 0 !== ke && ke()
				}
				_e = _e.next
			} while (_e !== se)
		}
	}

	function Ii(oe, se) {
		if (null !== (se = null !== (se = se.updateQueue) ? se.lastEffect : null)) {
			var _e = se = se.next;
			do {
				if ((_e.tag & oe) === oe) {
					var ke = _e.create;
					_e.destroy = ke()
				}
				_e = _e.next
			} while (_e !== se)
		}
	}

	function Ji(oe, se, _e) {
		switch (_e.tag) {
			case 0:
			case 11:
			case 15:
			case 22:
				return void Ii(3, _e);
			case 1:
				if (oe = _e.stateNode, 4 & _e.effectTag)
					if (null === se) oe.componentDidMount();
					else {
						var ke = _e.elementType === _e.type ? se.memoizedProps : ig(_e.type, se.memoizedProps);
						oe.componentDidUpdate(ke, se.memoizedState, oe.__reactInternalSnapshotBeforeUpdate)
					} return void(null !== (se = _e.updateQueue) && Cg(_e, se, oe));
			case 3:
				if (null !== (se = _e.updateQueue)) {
					if (oe = null, null !== _e.child) switch (_e.child.tag) {
						case 5:
							oe = _e.child.stateNode;
							break;
						case 1:
							oe = _e.child.stateNode
					}
					Cg(_e, se, oe)
				}
				return;
			case 5:
				return oe = _e.stateNode, void(null === se && 4 & _e.effectTag && Fd(_e.type, _e.memoizedProps) && oe.focus());
			case 6:
			case 4:
			case 12:
				return;
			case 13:
				return void(null === _e.memoizedState && (_e = _e.alternate, null !== _e && (_e = _e.memoizedState, null !== _e && (_e = _e.dehydrated, null !== _e && Vc(_e)))));
			case 19:
			case 17:
			case 20:
			case 21:
				return
		}
		throw Error(u(163))
	}

	function Ki(oe, se, _e) {
		switch ("function" == typeof Jo && Jo(se), se.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 22:
				if (null !== (oe = se.updateQueue) && null !== (oe = oe.lastEffect)) {
					var ke = oe.next;
					cg(97 < _e ? 97 : _e, (function() {
						var oe = ke;
						do {
							var _e = oe.destroy;
							if (void 0 !== _e) {
								var Te = se;
								try {
									_e()
								} catch (oe) {
									Ei(Te, oe)
								}
							}
							oe = oe.next
						} while (oe !== ke)
					}))
				}
				break;
			case 1:
				Fi(se), "function" == typeof(_e = se.stateNode)
					.componentWillUnmount && function Di(oe, se) {
						try {
							se.props = oe.memoizedProps, se.state = oe.memoizedState, se.componentWillUnmount()
						} catch (se) {
							Ei(oe, se)
						}
					}(se, _e);
				break;
			case 5:
				Fi(se);
				break;
			case 4:
				Mi(oe, se, _e)
		}
	}

	function Ni(oe) {
		var se = oe.alternate;
		oe.return = null, oe.child = null, oe.memoizedState = null, oe.updateQueue = null, oe.dependencies = null, oe.alternate = null, oe.firstEffect = null, oe.lastEffect = null, oe.pendingProps = null, oe.memoizedProps = null, oe.stateNode = null, null !== se && Ni(se)
	}

	function Oi(oe) {
		return 5 === oe.tag || 3 === oe.tag || 4 === oe.tag
	}

	function Pi(oe) {
		e: {
			for (var se = oe.return; null !== se;) {
				if (Oi(se)) {
					var _e = se;
					break e
				}
				se = se.return
			}
			throw Error(u(160))
		}
		switch (se = _e.stateNode, _e.tag) {
			case 5:
				var ke = !1;
				break;
			case 3:
			case 4:
				se = se.containerInfo, ke = !0;
				break;
			default:
				throw Error(u(161))
		}
		16 & _e.effectTag && (Rb(se, ""), _e.effectTag &= -17);e: t: for (_e = oe;;) {
			for (; null === _e.sibling;) {
				if (null === _e.return || Oi(_e.return)) {
					_e = null;
					break e
				}
				_e = _e.return
			}
			for (_e.sibling.return = _e.return, _e = _e.sibling; 5 !== _e.tag && 6 !== _e.tag && 18 !== _e.tag;) {
				if (2 & _e.effectTag) continue t;
				if (null === _e.child || 4 === _e.tag) continue t;
				_e.child.return = _e, _e = _e.child
			}
			if (!(2 & _e.effectTag)) {
				_e = _e.stateNode;
				break e
			}
		}
		ke ? function Qi(oe, se, _e) {
			var ke = oe.tag,
				Te = 5 === ke || 6 === ke;
			if (Te) oe = Te ? oe.stateNode : oe.stateNode.instance, se ? 8 === _e.nodeType ? _e.parentNode.insertBefore(oe, se) : _e.insertBefore(oe, se) : (8 === _e.nodeType ? (se = _e.parentNode)
				.insertBefore(oe, _e) : (se = _e)
				.appendChild(oe), null !== (_e = _e._reactRootContainer) && void 0 !== _e || null !== se.onclick || (se.onclick = sd));
			else if (4 !== ke && null !== (oe = oe.child))
				for (Qi(oe, se, _e), oe = oe.sibling; null !== oe;) Qi(oe, se, _e), oe = oe.sibling
		}(oe, _e, se) : function Ri(oe, se, _e) {
			var ke = oe.tag,
				Te = 5 === ke || 6 === ke;
			if (Te) oe = Te ? oe.stateNode : oe.stateNode.instance, se ? _e.insertBefore(oe, se) : _e.appendChild(oe);
			else if (4 !== ke && null !== (oe = oe.child))
				for (Ri(oe, se, _e), oe = oe.sibling; null !== oe;) Ri(oe, se, _e), oe = oe.sibling
		}(oe, _e, se)
	}

	function Mi(oe, se, _e) {
		for (var ke, Te, Ne = se, Oe = !1;;) {
			if (!Oe) {
				Oe = Ne.return;
				e: for (;;) {
					if (null === Oe) throw Error(u(160));
					switch (ke = Oe.stateNode, Oe.tag) {
						case 5:
							Te = !1;
							break e;
						case 3:
						case 4:
							ke = ke.containerInfo, Te = !0;
							break e
					}
					Oe = Oe.return
				}
				Oe = !0
			}
			if (5 === Ne.tag || 6 === Ne.tag) {
				e: for (var Ae = oe, Re = Ne, je = _e, Me = Re;;)
					if (Ki(Ae, Me, je), null !== Me.child && 4 !== Me.tag) Me.child.return = Me, Me = Me.child;
					else {
						if (Me === Re) break e;
						for (; null === Me.sibling;) {
							if (null === Me.return || Me.return === Re) break e;
							Me = Me.return
						}
						Me.sibling.return = Me.return, Me = Me.sibling
					}Te ? (Ae = ke, Re = Ne.stateNode, 8 === Ae.nodeType ? Ae.parentNode.removeChild(Re) : Ae.removeChild(Re)) : ke.removeChild(Ne.stateNode)
			}
			else if (4 === Ne.tag) {
				if (null !== Ne.child) {
					ke = Ne.stateNode.containerInfo, Te = !0, Ne.child.return = Ne, Ne = Ne.child;
					continue
				}
			} else if (Ki(oe, Ne, _e), null !== Ne.child) {
				Ne.child.return = Ne, Ne = Ne.child;
				continue
			}
			if (Ne === se) break;
			for (; null === Ne.sibling;) {
				if (null === Ne.return || Ne.return === se) return;
				4 === (Ne = Ne.return)
					.tag && (Oe = !1)
			}
			Ne.sibling.return = Ne.return, Ne = Ne.sibling
		}
	}

	function Si(oe, se) {
		switch (se.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 22:
				return void Hi(3, se);
			case 1:
				return;
			case 5:
				var _e = se.stateNode;
				if (null != _e) {
					var ke = se.memoizedProps,
						Te = null !== oe ? oe.memoizedProps : ke;
					oe = se.type;
					var Ne = se.updateQueue;
					if (se.updateQueue = null, null !== Ne) {
						for (_e[xn] = ke, "input" === oe && "radio" === ke.type && null != ke.name && Bb(_e, ke), pd(oe, Te), se = pd(oe, ke), Te = 0; Te < Ne.length; Te += 2) {
							var Oe = Ne[Te],
								Ae = Ne[Te + 1];
							"style" === Oe ? md(_e, Ae) : "dangerouslySetInnerHTML" === Oe ? Rt(_e, Ae) : "children" === Oe ? Rb(_e, Ae) : Xa(_e, Oe, Ae, se)
						}
						switch (oe) {
							case "input":
								Cb(_e, ke);
								break;
							case "textarea":
								Kb(_e, ke);
								break;
							case "select":
								se = _e._wrapperState.wasMultiple, _e._wrapperState.wasMultiple = !!ke.multiple, null != (oe = ke.value) ? Hb(_e, !!ke.multiple, oe, !1) : se !== !!ke.multiple && (null != ke.defaultValue ? Hb(_e, !!ke.multiple, ke.defaultValue, !0) : Hb(_e, !!ke.multiple, ke.multiple ? [] : "", !1))
						}
					}
				}
				return;
			case 6:
				if (null === se.stateNode) throw Error(u(162));
				return void(se.stateNode.nodeValue = se.memoizedProps);
			case 3:
				return void((se = se.stateNode)
					.hydrate && (se.hydrate = !1, Vc(se.containerInfo)));
			case 12:
				return;
			case 13:
				if (_e = se, null === se.memoizedState ? ke = !1 : (ke = !0, _e = se.child, Mo = Yr()), null !== _e) e: for (oe = _e;;) {
					if (5 === oe.tag) Ne = oe.stateNode, ke ? "function" == typeof(Ne = Ne.style)
						.setProperty ? Ne.setProperty("display", "none", "important") : Ne.display = "none" : (Ne = oe.stateNode, Te = null != (Te = oe.memoizedProps.style) && Te.hasOwnProperty("display") ? Te.display : null, Ne.style.display = ld("display", Te));
					else if (6 === oe.tag) oe.stateNode.nodeValue = ke ? "" : oe.memoizedProps;
					else {
						if (13 === oe.tag && null !== oe.memoizedState && null === oe.memoizedState.dehydrated) {
							(Ne = oe.child.sibling)
							.return = oe, oe = Ne;
							continue
						}
						if (null !== oe.child) {
							oe.child.return = oe, oe = oe.child;
							continue
						}
					}
					if (oe === _e) break;
					for (; null === oe.sibling;) {
						if (null === oe.return || oe.return === _e) break e;
						oe = oe.return
					}
					oe.sibling.return = oe.return, oe = oe.sibling
				}
				return void Ui(se);
			case 19:
				return void Ui(se);
			case 17:
				return
		}
		throw Error(u(163))
	}

	function Ui(oe) {
		var se = oe.updateQueue;
		if (null !== se) {
			oe.updateQueue = null;
			var _e = oe.stateNode;
			null === _e && (_e = oe.stateNode = new vo), se.forEach((function(se) {
				var ke = Vi.bind(null, oe, se);
				_e.has(se) || (_e.add(se), se.then(ke, ke))
			}))
		}
	}
	var bo = "function" == typeof WeakMap ? WeakMap : Map;

	function Xi(oe, se, _e) {
		(_e = wg(_e, null))
		.tag = 3, _e.payload = {
			element: null
		};
		var ke = se.value;
		return _e.callback = function() {
			Ho || (Ho = !0, Uo = ke), Ci(oe, se)
		}, _e
	}

	function $i(oe, se, _e) {
		(_e = wg(_e, null))
		.tag = 3;
		var ke = oe.type.getDerivedStateFromError;
		if ("function" == typeof ke) {
			var Te = se.value;
			_e.payload = function() {
				return Ci(oe, se), ke(Te)
			}
		}
		var Ne = oe.stateNode;
		return null !== Ne && "function" == typeof Ne.componentDidCatch && (_e.callback = function() {
			"function" != typeof ke && (null === Bo ? Bo = new Set([this]) : Bo.add(this), Ci(oe, se));
			var _e = se.stack;
			this.componentDidCatch(se.value, {
				componentStack: null !== _e ? _e : ""
			})
		}), _e
	}
	var yo, Eo = Math.ceil,
		wo = pt.ReactCurrentDispatcher,
		_o = pt.ReactCurrentOwner,
		So = 0,
		ko = 3,
		To = 4,
		xo = 0,
		Co = null,
		No = null,
		Io = 0,
		Po = So,
		Oo = null,
		Do = 1073741823,
		Ao = 1073741823,
		Lo = null,
		Ro = 0,
		jo = !1,
		Mo = 0,
		Fo = null,
		Ho = !1,
		Uo = null,
		Bo = null,
		zo = !1,
		Wo = null,
		Vo = 90,
		Qo = null,
		qo = 0,
		Go = null,
		Ko = 0;

	function Gg() {
		return 0 != (48 & xo) ? 1073741821 - (Yr() / 10 | 0) : 0 !== Ko ? Ko : Ko = 1073741821 - (Yr() / 10 | 0)
	}

	function Hg(oe, se, _e) {
		if (0 == (2 & (se = se.mode))) return 1073741823;
		var ke = ag();
		if (0 == (4 & se)) return 99 === ke ? 1073741823 : 1073741822;
		if (0 != (16 & xo)) return Io;
		if (null !== _e) oe = hg(oe, 0 | _e.timeoutMs || 5e3, 250);
		else switch (ke) {
			case 99:
				oe = 1073741823;
				break;
			case 98:
				oe = hg(oe, 150, 100);
				break;
			case 97:
			case 96:
				oe = hg(oe, 5e3, 250);
				break;
			case 95:
				oe = 2;
				break;
			default:
				throw Error(u(326))
		}
		return null !== Co && oe === Io && --oe, oe
	}

	function Ig(oe, se) {
		if (50 < qo) throw qo = 0, Go = null, Error(u(185));
		if (null !== (oe = xj(oe, se))) {
			var _e = ag();
			1073741823 === se ? 0 != (8 & xo) && 0 == (48 & xo) ? yj(oe) : (Z(oe), 0 === xo && gg()) : Z(oe), 0 == (4 & xo) || 98 !== _e && 99 !== _e || (null === Qo ? Qo = new Map([
				[oe, se]
			]) : (void 0 === (_e = Qo.get(oe)) || _e > se) && Qo.set(oe, se))
		}
	}

	function xj(oe, se) {
		oe.expirationTime < se && (oe.expirationTime = se);
		var _e = oe.alternate;
		null !== _e && _e.expirationTime < se && (_e.expirationTime = se);
		var ke = oe.return,
			Te = null;
		if (null === ke && 3 === oe.tag) Te = oe.stateNode;
		else
			for (; null !== ke;) {
				if (_e = ke.alternate, ke.childExpirationTime < se && (ke.childExpirationTime = se), null !== _e && _e.childExpirationTime < se && (_e.childExpirationTime = se), null === ke.return && 3 === ke.tag) {
					Te = ke.stateNode;
					break
				}
				ke = ke.return
			}
		return null !== Te && (Co === Te && (Bg(se), Po === To && xi(Te, Io)), yi(Te, se)), Te
	}

	function zj(oe) {
		var se = oe.lastExpiredTime;
		if (0 !== se) return se;
		if (!Aj(oe, se = oe.firstPendingTime)) return se;
		var _e = oe.lastPingedTime;
		return 2 >= (oe = _e > (oe = oe.nextKnownPendingLevel) ? _e : oe) && se !== oe ? 0 : oe
	}

	function Z(oe) {
		if (0 !== oe.lastExpiredTime) oe.callbackExpirationTime = 1073741823, oe.callbackPriority = 99, oe.callbackNode = eg(yj.bind(null, oe));
		else {
			var se = zj(oe),
				_e = oe.callbackNode;
			if (0 === se) null !== _e && (oe.callbackNode = null, oe.callbackExpirationTime = 0, oe.callbackPriority = 90);
			else {
				var ke = Gg();
				if (1073741823 === se ? ke = 99 : 1 === se || 2 === se ? ke = 95 : ke = 0 >= (ke = 10 * (1073741821 - se) - 10 * (1073741821 - ke)) ? 99 : 250 >= ke ? 98 : 5250 >= ke ? 97 : 95, null !== _e) {
					var Te = oe.callbackPriority;
					if (oe.callbackExpirationTime === se && Te >= ke) return;
					_e !== zr && Ar(_e)
				}
				oe.callbackExpirationTime = se, oe.callbackPriority = ke, se = 1073741823 === se ? eg(yj.bind(null, oe)) : dg(ke, Bj.bind(null, oe), {
					timeout: 10 * (1073741821 - se) - Yr()
				}), oe.callbackNode = se
			}
		}
	}

	function Bj(oe, se) {
		if (Ko = 0, se) return Cj(oe, se = Gg()), Z(oe), null;
		var _e = zj(oe);
		if (0 !== _e) {
			if (se = oe.callbackNode, 0 != (48 & xo)) throw Error(u(327));
			if (Dj(), oe === Co && _e === Io || Ej(oe, _e), null !== No) {
				var ke = xo;
				xo |= 16;
				for (var Te = Fj();;) try {
					Gj();
					break
				} catch (se) {
					Hj(oe, se)
				}
				if (ng(), xo = ke, wo.current = Te, 1 === Po) throw se = Oo, Ej(oe, _e), xi(oe, _e), Z(oe), se;
				if (null === No) switch (Te = oe.finishedWork = oe.current.alternate, oe.finishedExpirationTime = _e, ke = Po, Co = null, ke) {
					case So:
					case 1:
						throw Error(u(345));
					case 2:
						Cj(oe, 2 < _e ? 2 : _e);
						break;
					case ko:
						if (xi(oe, _e), _e === (ke = oe.lastSuspendedTime) && (oe.nextKnownPendingLevel = Ij(Te)), 1073741823 === Do && 10 < (Te = Mo + 500 - Yr())) {
							if (jo) {
								var Ne = oe.lastPingedTime;
								if (0 === Ne || Ne >= _e) {
									oe.lastPingedTime = _e, Ej(oe, _e);
									break
								}
							}
							if (0 !== (Ne = zj(oe)) && Ne !== _e) break;
							if (0 !== ke && ke !== _e) {
								oe.lastPingedTime = ke;
								break
							}
							oe.timeoutHandle = _n(Jj.bind(null, oe), Te);
							break
						}
						Jj(oe);
						break;
					case To:
						if (xi(oe, _e), _e === (ke = oe.lastSuspendedTime) && (oe.nextKnownPendingLevel = Ij(Te)), jo && (0 === (Te = oe.lastPingedTime) || Te >= _e)) {
							oe.lastPingedTime = _e, Ej(oe, _e);
							break
						}
						if (0 !== (Te = zj(oe)) && Te !== _e) break;
						if (0 !== ke && ke !== _e) {
							oe.lastPingedTime = ke;
							break
						}
						if (1073741823 !== Ao ? ke = 10 * (1073741821 - Ao) - Yr() : 1073741823 === Do ? ke = 0 : (ke = 10 * (1073741821 - Do) - 5e3, 0 > (ke = (Te = Yr()) - ke) && (ke = 0), (_e = 10 * (1073741821 - _e) - Te) < (ke = (120 > ke ? 120 : 480 > ke ? 480 : 1080 > ke ? 1080 : 1920 > ke ? 1920 : 3e3 > ke ? 3e3 : 4320 > ke ? 4320 : 1960 * Eo(ke / 1960)) - ke) && (ke = _e)), 10 < ke) {
							oe.timeoutHandle = _n(Jj.bind(null, oe), ke);
							break
						}
						Jj(oe);
						break;
					case 5:
						if (1073741823 !== Do && null !== Lo) {
							Ne = Do;
							var Oe = Lo;
							if (0 >= (ke = 0 | Oe.busyMinDurationMs) ? ke = 0 : (Te = 0 | Oe.busyDelayMs, ke = (Ne = Yr() - (10 * (1073741821 - Ne) - (0 | Oe.timeoutMs || 5e3))) <= Te ? 0 : Te + ke - Ne), 10 < ke) {
								xi(oe, _e), oe.timeoutHandle = _n(Jj.bind(null, oe), ke);
								break
							}
						}
						Jj(oe);
						break;
					default:
						throw Error(u(329))
				}
				if (Z(oe), oe.callbackNode === se) return Bj.bind(null, oe)
			}
		}
		return null
	}

	function yj(oe) {
		var se = oe.lastExpiredTime;
		if (se = 0 !== se ? se : 1073741823, 0 != (48 & xo)) throw Error(u(327));
		if (Dj(), oe === Co && se === Io || Ej(oe, se), null !== No) {
			var _e = xo;
			xo |= 16;
			for (var ke = Fj();;) try {
				Kj();
				break
			} catch (se) {
				Hj(oe, se)
			}
			if (ng(), xo = _e, wo.current = ke, 1 === Po) throw _e = Oo, Ej(oe, se), xi(oe, se), Z(oe), _e;
			if (null !== No) throw Error(u(261));
			oe.finishedWork = oe.current.alternate, oe.finishedExpirationTime = se, Co = null, Jj(oe), Z(oe)
		}
		return null
	}

	function Mj(oe, se) {
		var _e = xo;
		xo |= 1;
		try {
			return oe(se)
		} finally {
			0 === (xo = _e) && gg()
		}
	}

	function Nj(oe, se) {
		var _e = xo;
		xo &= -2, xo |= 8;
		try {
			return oe(se)
		} finally {
			0 === (xo = _e) && gg()
		}
	}

	function Ej(oe, se) {
		oe.finishedWork = null, oe.finishedExpirationTime = 0;
		var _e = oe.timeoutHandle;
		if (-1 !== _e && (oe.timeoutHandle = -1, Sn(_e)), null !== No)
			for (_e = No.return; null !== _e;) {
				var ke = _e;
				switch (ke.tag) {
					case 1:
						null != (ke = ke.type.childContextTypes) && Df();
						break;
					case 3:
						eh(), H(Ir), H(Nr);
						break;
					case 5:
						gh(ke);
						break;
					case 4:
						eh();
						break;
					case 13:
					case 19:
						H(Bi);
						break;
					case 10:
						og(ke)
				}
				_e = _e.return
			}
		Co = oe, No = Sg(oe.current, null), Io = se, Po = So, Oo = null, Ao = Do = 1073741823, Lo = null, Ro = 0, jo = !1
	}

	function Hj(oe, se) {
		for (;;) {
			try {
				if (ng(), Wi.current = ro, no)
					for (var _e = Zi.memoizedState; null !== _e;) {
						var ke = _e.queue;
						null !== ke && (ke.pending = null), _e = _e.next
					}
				if (Yi = 0, to = eo = Zi = null, no = !1, null === No || null === No.return) return Po = 1, Oo = se, No = null;
				e: {
					var Te = oe,
						Ne = No.return,
						Oe = No,
						Ae = se;
					if (se = Io, Oe.effectTag |= 2048, Oe.firstEffect = Oe.lastEffect = null, null !== Ae && "object" == typeof Ae && "function" == typeof Ae.then) {
						var Re = Ae;
						if (0 == (2 & Oe.mode)) {
							var je = Oe.alternate;
							je ? (Oe.updateQueue = je.updateQueue, Oe.memoizedState = je.memoizedState, Oe.expirationTime = je.expirationTime) : (Oe.updateQueue = null, Oe.memoizedState = null)
						}
						var Me = 0 != (1 & Bi.current),
							Fe = Ne;
						do {
							var Ue;
							if (Ue = 13 === Fe.tag) {
								var Be = Fe.memoizedState;
								if (null !== Be) Ue = null !== Be.dehydrated;
								else {
									var We = Fe.memoizedProps;
									Ue = void 0 !== We.fallback && (!0 !== We.unstable_avoidThisFallback || !Me)
								}
							}
							if (Ue) {
								var Ve = Fe.updateQueue;
								if (null === Ve) {
									var Ye = new Set;
									Ye.add(Re), Fe.updateQueue = Ye
								} else Ve.add(Re);
								if (0 == (2 & Fe.mode)) {
									if (Fe.effectTag |= 64, Oe.effectTag &= -2981, 1 === Oe.tag)
										if (null === Oe.alternate) Oe.tag = 17;
										else {
											var Xe = wg(1073741823, null);
											Xe.tag = 2, xg(Oe, Xe)
										} Oe.expirationTime = 1073741823;
									break e
								}
								Ae = void 0, Oe = se;
								var $e = Te.pingCache;
								if (null === $e ? ($e = Te.pingCache = new bo, Ae = new Set, $e.set(Re, Ae)) : void 0 === (Ae = $e.get(Re)) && (Ae = new Set, $e.set(Re, Ae)), !Ae.has(Oe)) {
									Ae.add(Oe);
									var et = Oj.bind(null, Te, Re, Oe);
									Re.then(et, et)
								}
								Fe.effectTag |= 4096, Fe.expirationTime = se;
								break e
							}
							Fe = Fe.return
						} while (null !== Fe);
						Ae = Error((pb(Oe.type) || "React组件") + " 在渲染时挂起,但没有指定回退UI。\n\nAdd a <悬念回退=…>组件以提供要显示的加载指示符或占位符。" + qb(Oe))
					}
					5 !== Po && (Po = 2),
					Ae = Ai(Ae, Oe),
					Fe = Ne;do {
						switch (Fe.tag) {
							case 3:
								Re = Ae, Fe.effectTag |= 4096, Fe.expirationTime = se, yg(Fe, Xi(Fe, Re, se));
								break e;
							case 1:
								Re = Ae;
								var tt = Fe.type,
									nt = Fe.stateNode;
								if (0 == (64 & Fe.effectTag) && ("function" == typeof tt.getDerivedStateFromError || null !== nt && "function" == typeof nt.componentDidCatch && (null === Bo || !Bo.has(nt)))) {
									Fe.effectTag |= 4096, Fe.expirationTime = se, yg(Fe, $i(Fe, Re, se));
									break e
								}
						}
						Fe = Fe.return
					} while (null !== Fe)
				}
				No = Pj(No)
			} catch (oe) {
				se = oe;
				continue
			}
			break
		}
	}

	function Fj() {
		var oe = wo.current;
		return wo.current = ro, null === oe ? ro : oe
	}

	function Ag(oe, se) {
		oe < Do && 2 < oe && (Do = oe), null !== se && oe < Ao && 2 < oe && (Ao = oe, Lo = se)
	}

	function Bg(oe) {
		oe > Ro && (Ro = oe)
	}

	function Kj() {
		for (; null !== No;) No = Qj(No)
	}

	function Gj() {
		for (; null !== No && !Wr();) No = Qj(No)
	}

	function Qj(oe) {
		var se = yo(oe.alternate, oe, Io);
		return oe.memoizedProps = oe.pendingProps, null === se && (se = Pj(oe)), _o.current = null, se
	}

	function Pj(oe) {
		No = oe;
		do {
			var se = No.alternate;
			if (oe = No.return, 0 == (2048 & No.effectTag)) {
				if (se = si(se, No, Io), 1 === Io || 1 !== No.childExpirationTime) {
					for (var _e = 0, ke = No.child; null !== ke;) {
						var Te = ke.expirationTime,
							Ne = ke.childExpirationTime;
						Te > _e && (_e = Te), Ne > _e && (_e = Ne), ke = ke.sibling
					}
					No.childExpirationTime = _e
				}
				if (null !== se) return se;
				null !== oe && 0 == (2048 & oe.effectTag) && (null === oe.firstEffect && (oe.firstEffect = No.firstEffect), null !== No.lastEffect && (null !== oe.lastEffect && (oe.lastEffect.nextEffect = No.firstEffect), oe.lastEffect = No.lastEffect), 1 < No.effectTag && (null !== oe.lastEffect ? oe.lastEffect.nextEffect = No : oe.firstEffect = No, oe.lastEffect = No))
			} else {
				if (null !== (se = zi(No))) return se.effectTag &= 2047, se;
				null !== oe && (oe.firstEffect = oe.lastEffect = null, oe.effectTag |= 2048)
			}
			if (null !== (se = No.sibling)) return se;
			No = oe
		} while (null !== No);
		return Po === So && (Po = 5), null
	}

	function Ij(oe) {
		var se = oe.expirationTime;
		return se > (oe = oe.childExpirationTime) ? se : oe
	}

	function Jj(oe) {
		var se = ag();
		return cg(99, Sj.bind(null, oe, se)), null
	}

	function Sj(oe, se) {
		do {
			Dj()
		} while (null !== Wo);
		if (0 != (48 & xo)) throw Error(u(327));
		var _e = oe.finishedWork,
			ke = oe.finishedExpirationTime;
		if (null === _e) return null;
		if (oe.finishedWork = null, oe.finishedExpirationTime = 0, _e === oe.current) throw Error(u(177));
		oe.callbackNode = null, oe.callbackExpirationTime = 0, oe.callbackPriority = 90, oe.nextKnownPendingLevel = 0;
		var Te = Ij(_e);
		if (oe.firstPendingTime = Te, ke <= oe.lastSuspendedTime ? oe.firstSuspendedTime = oe.lastSuspendedTime = oe.nextKnownPendingLevel = 0 : ke <= oe.firstSuspendedTime && (oe.firstSuspendedTime = ke - 1), ke <= oe.lastPingedTime && (oe.lastPingedTime = 0), ke <= oe.lastExpiredTime && (oe.lastExpiredTime = 0), oe === Co && (No = Co = null, Io = 0), 1 < _e.effectTag ? null !== _e.lastEffect ? (_e.lastEffect.nextEffect = _e, Te = _e.firstEffect) : Te = _e : Te = _e.firstEffect, null !== Te) {
			var Ne = xo;
			xo |= 32, _o.current = null, En = mn;
			var Oe = xd();
			if (yd(Oe)) {
				if ("selectionStart" in Oe) var Ae = {
					start: Oe.selectionStart,
					end: Oe.selectionEnd
				};
				else e: {
					var Re = (Ae = (Ae = Oe.ownerDocument) && Ae.defaultView || window)
						.getSelection && Ae.getSelection();
					if (Re && 0 !== Re.rangeCount) {
						Ae = Re.anchorNode;
						var je = Re.anchorOffset,
							Me = Re.focusNode;
						Re = Re.focusOffset;
						try {
							Ae.nodeType, Me.nodeType
						} catch (oe) {
							Ae = null;
							break e
						}
						var Fe = 0,
							Ue = -1,
							Be = -1,
							We = 0,
							Ve = 0,
							Ye = Oe,
							Xe = null;
						t: for (;;) {
							for (var $e; Ye !== Ae || 0 !== je && 3 !== Ye.nodeType || (Ue = Fe + je), Ye !== Me || 0 !== Re && 3 !== Ye.nodeType || (Be = Fe + Re), 3 === Ye.nodeType && (Fe += Ye.nodeValue.length), null !== ($e = Ye.firstChild);) Xe = Ye, Ye = $e;
							for (;;) {
								if (Ye === Oe) break t;
								if (Xe === Ae && ++We === je && (Ue = Fe), Xe === Me && ++Ve === Re && (Be = Fe), null !== ($e = Ye.nextSibling)) break;
								Xe = (Ye = Xe)
									.parentNode
							}
							Ye = $e
						}
						Ae = -1 === Ue || -1 === Be ? null : {
							start: Ue,
							end: Be
						}
					} else Ae = null
				}
				Ae = Ae || {
					start: 0,
					end: 0
				}
			} else Ae = null;
			wn = {
				activeElementDetached: null,
				focusedElem: Oe,
				selectionRange: Ae
			}, mn = !1, Fo = Te;
			do {
				try {
					Tj()
				} catch (oe) {
					if (null === Fo) throw Error(u(330));
					Ei(Fo, oe), Fo = Fo.nextEffect
				}
			} while (null !== Fo);
			Fo = Te;
			do {
				try {
					for (Oe = oe, Ae = se; null !== Fo;) {
						var et = Fo.effectTag;
						if (16 & et && Rb(Fo.stateNode, ""), 128 & et) {
							var tt = Fo.alternate;
							if (null !== tt) {
								var nt = tt.ref;
								null !== nt && ("function" == typeof nt ? nt(null) : nt.current = null)
							}
						}
						switch (1038 & et) {
							case 2:
								Pi(Fo), Fo.effectTag &= -3;
								break;
							case 6:
								Pi(Fo), Fo.effectTag &= -3, Si(Fo.alternate, Fo);
								break;
							case 1024:
								Fo.effectTag &= -1025;
								break;
							case 1028:
								Fo.effectTag &= -1025, Si(Fo.alternate, Fo);
								break;
							case 4:
								Si(Fo.alternate, Fo);
								break;
							case 8:
								Mi(Oe, je = Fo, Ae), Ni(je)
						}
						Fo = Fo.nextEffect
					}
				} catch (oe) {
					if (null === Fo) throw Error(u(330));
					Ei(Fo, oe), Fo = Fo.nextEffect
				}
			} while (null !== Fo);
			if (nt = wn, tt = xd(), et = nt.focusedElem, Ae = nt.selectionRange, tt !== et && et && et.ownerDocument && function wd(oe, se) {
				return !(!oe || !se) && (oe === se || (!oe || 3 !== oe.nodeType) && (se && 3 === se.nodeType ? wd(oe, se.parentNode) : "contains" in oe ? oe.contains(se) : !!oe.compareDocumentPosition && !!(16 & oe.compareDocumentPosition(se))))
			}(et.ownerDocument.documentElement, et)) {
				null !== Ae && yd(et) && (tt = Ae.start, void 0 === (nt = Ae.end) && (nt = tt), "selectionStart" in et ? (et.selectionStart = tt, et.selectionEnd = Math.min(nt, et.value.length)) : (nt = (tt = et.ownerDocument || document) && tt.defaultView || window)
					.getSelection && (nt = nt.getSelection(), je = et.textContent.length, Oe = Math.min(Ae.start, je), Ae = void 0 === Ae.end ? Oe : Math.min(Ae.end, je), !nt.extend && Oe > Ae && (je = Ae, Ae = Oe, Oe = je), je = vd(et, Oe), Me = vd(et, Ae), je && Me && (1 !== nt.rangeCount || nt.anchorNode !== je.node || nt.anchorOffset !== je.offset || nt.focusNode !== Me.node || nt.focusOffset !== Me.offset) && ((tt = tt.createRange())
						.setStart(je.node, je.offset), nt.removeAllRanges(), Oe > Ae ? (nt.addRange(tt), nt.extend(Me.node, Me.offset)) : (tt.setEnd(Me.node, Me.offset), nt.addRange(tt))))), tt = [];
				for (nt = et; nt = nt.parentNode;) 1 === nt.nodeType && tt.push({
					element: nt,
					left: nt.scrollLeft,
					top: nt.scrollTop
				});
				for ("function" == typeof et.focus && et.focus(), et = 0; et < tt.length; et++)(nt = tt[et])
					.element.scrollLeft = nt.left, nt.element.scrollTop = nt.top
			}
			mn = !!En, wn = En = null, oe.current = _e, Fo = Te;
			do {
				try {
					for (et = oe; null !== Fo;) {
						var rt = Fo.effectTag;
						if (36 & rt && Ji(et, Fo.alternate, Fo), 128 & rt) {
							tt = void 0;
							var it = Fo.ref;
							if (null !== it) {
								var ot = Fo.stateNode;
								switch (Fo.tag) {
									case 5:
										tt = ot;
										break;
									default:
										tt = ot
								}
								"function" == typeof it ? it(tt) : it.current = tt
							}
						}
						Fo = Fo.nextEffect
					}
				} catch (oe) {
					if (null === Fo) throw Error(u(330));
					Ei(Fo, oe), Fo = Fo.nextEffect
				}
			} while (null !== Fo);
			Fo = null, Vr(), xo = Ne
		} else oe.current = _e;
		if (zo) zo = !1, Wo = oe, Vo = se;
		else
			for (Fo = Te; null !== Fo;) se = Fo.nextEffect, Fo.nextEffect = null, Fo = se;
		if (0 === (se = oe.firstPendingTime) && (Bo = null), 1073741823 === se ? oe === Go ? qo++ : (qo = 0, Go = oe) : qo = 0, "function" == typeof Yo && Yo(_e.stateNode, ke), Z(oe), Ho) throw Ho = !1, oe = Uo, Uo = null, oe;
		return 0 != (8 & xo) || gg(), null
	}

	function Tj() {
		for (; null !== Fo;) {
			var oe = Fo.effectTag;
			0 != (256 & oe) && Gi(Fo.alternate, Fo), 0 == (512 & oe) || zo || (zo = !0, dg(97, (function() {
				return Dj(), null
			}))), Fo = Fo.nextEffect
		}
	}

	function Dj() {
		if (90 !== Vo) {
			var oe = 97 < Vo ? 97 : Vo;
			return Vo = 90, cg(oe, Vj)
		}
	}

	function Vj() {
		if (null === Wo) return !1;
		var oe = Wo;
		if (Wo = null, 0 != (48 & xo)) throw Error(u(331));
		var se = xo;
		for (xo |= 32, oe = oe.current.firstEffect; null !== oe;) {
			try {
				var _e = oe;
				if (0 != (512 & _e.effectTag)) switch (_e.tag) {
					case 0:
					case 11:
					case 15:
					case 22:
						Hi(5, _e), Ii(5, _e)
				}
			} catch (se) {
				if (null === oe) throw Error(u(330));
				Ei(oe, se)
			}
			_e = oe.nextEffect, oe.nextEffect = null, oe = _e
		}
		return xo = se, gg(), !0
	}

	function Wj(oe, se, _e) {
		xg(oe, se = Xi(oe, se = Ai(_e, se), 1073741823)), null !== (oe = xj(oe, 1073741823)) && Z(oe)
	}

	function Ei(oe, se) {
		if (3 === oe.tag) Wj(oe, oe, se);
		else
			for (var _e = oe.return; null !== _e;) {
				if (3 === _e.tag) {
					Wj(_e, oe, se);
					break
				}
				if (1 === _e.tag) {
					var ke = _e.stateNode;
					if ("function" == typeof _e.type.getDerivedStateFromError || "function" == typeof ke.componentDidCatch && (null === Bo || !Bo.has(ke))) {
						xg(_e, oe = $i(_e, oe = Ai(se, oe), 1073741823)), null !== (_e = xj(_e, 1073741823)) && Z(_e);
						break
					}
				}
				_e = _e.return
			}
	}

	function Oj(oe, se, _e) {
		var ke = oe.pingCache;
		null !== ke && ke.delete(se), Co === oe && Io === _e ? Po === To || Po === ko && 1073741823 === Do && Yr() - Mo < 500 ? Ej(oe, Io) : jo = !0 : Aj(oe, _e) && (0 !== (se = oe.lastPingedTime) && se < _e || (oe.lastPingedTime = _e, Z(oe)))
	}

	function Vi(oe, se) {
		var _e = oe.stateNode;
		null !== _e && _e.delete(se), 0 === (se = 0) && (se = Hg(se = Gg(), oe, null)), null !== (oe = xj(oe, se)) && Z(oe)
	}
	yo = function(oe, se, _e) {
		var ke = se.expirationTime;
		if (null !== oe) {
			var Te = se.pendingProps;
			if (oe.memoizedProps !== Te || Ir.current) fo = !0;
			else {
				if (ke < _e) {
					switch (fo = !1, se.tag) {
						case 3:
							hi(se), Xh();
							break;
						case 5:
							if (fh(se), 4 & se.mode && 1 !== _e && Te.hidden) return se.expirationTime = se.childExpirationTime = 1, null;
							break;
						case 1:
							L(se.type) && Gf(se);
							break;
						case 4:
							dh(se, se.stateNode.containerInfo);
							break;
						case 10:
							ke = se.memoizedProps.value, Te = se.type._context, I(Jr, Te._currentValue), Te._currentValue = ke;
							break;
						case 13:
							if (null !== se.memoizedState) return 0 !== (ke = se.child.childExpirationTime) && ke >= _e ? ji(oe, se, _e) : (I(Bi, 1 & Bi.current), null !== (se = $h(oe, se, _e)) ? se.sibling : null);
							I(Bi, 1 & Bi.current);
							break;
						case 19:
							if (ke = se.childExpirationTime >= _e, 0 != (64 & oe.effectTag)) {
								if (ke) return mi(oe, se, _e);
								se.effectTag |= 64
							}
							if (null !== (Te = se.memoizedState) && (Te.rendering = null, Te.tail = null), I(Bi, Bi.current), !ke) return null
					}
					return $h(oe, se, _e)
				}
				fo = !1
			}
		} else fo = !1;
		switch (se.expirationTime = 0, se.tag) {
			case 2:
				if (ke = se.type, null !== oe && (oe.alternate = null, se.alternate = null, se.effectTag |= 2), oe = se.pendingProps, Te = Cf(se, Nr.current), qg(se, _e), Te = oh(null, se, ke, oe, Te, _e), se.effectTag |= 1, "object" == typeof Te && null !== Te && "function" == typeof Te.render && void 0 === Te.$$typeof) {
					if (se.tag = 1, se.memoizedState = null, se.updateQueue = null, L(ke)) {
						var Ne = !0;
						Gf(se)
					} else Ne = !1;
					se.memoizedState = null !== Te.state && void 0 !== Te.state ? Te.state : null, ug(se);
					var Oe = ke.getDerivedStateFromProps;
					"function" == typeof Oe && Fg(se, ke, Oe, oe), Te.updater = oi, se.stateNode = Te, Te._reactInternalFiber = se, Ng(se, ke, oe, _e), se = gi(null, se, ke, !0, Ne, _e)
				} else se.tag = 0, R(null, se, Te, _e), se = se.child;
				return se;
			case 16:
				e: {
					if (Te = se.elementType, null !== oe && (oe.alternate = null, se.alternate = null, se.effectTag |= 2), oe = se.pendingProps, function ob(oe) {
						if (-1 === oe._status) {
							oe._status = 0;
							var se = oe._ctor;
							se = se(), oe._result = se, se.then((function(se) {
								0 === oe._status && (se = se.default, oe._status = 1, oe._result = se)
							}), (function(se) {
								0 === oe._status && (oe._status = 2, oe._result = se)
							}))
						}
					}(Te), 1 !== Te._status) throw Te._result;
					switch (Te = Te._result, se.type = Te, Ne = se.tag = function Xj(oe) {
						if ("function" == typeof oe) return bi(oe) ? 1 : 0;
						if (null != oe) {
							if ((oe = oe.$$typeof) === Tt) return 11;
							if (oe === Nt) return 14
						}
						return 2
					}(Te), oe = ig(Te, oe), Ne) {
						case 0:
							se = di(null, se, Te, oe, _e);
							break e;
						case 1:
							se = fi(null, se, Te, oe, _e);
							break e;
						case 11:
							se = Zh(null, se, Te, oe, _e);
							break e;
						case 14:
							se = ai(null, se, Te, ig(Te.type, oe), ke, _e);
							break e
					}
					throw Error(u(306, Te, ""))
				}
				return se;
			case 0:
				return ke = se.type, Te = se.pendingProps, di(oe, se, ke, Te = se.elementType === ke ? Te : ig(ke, Te), _e);
			case 1:
				return ke = se.type, Te = se.pendingProps, fi(oe, se, ke, Te = se.elementType === ke ? Te : ig(ke, Te), _e);
			case 3:
				if (hi(se), ke = se.updateQueue, null === oe || null === ke) throw Error(u(282));
				if (ke = se.pendingProps, Te = null !== (Te = se.memoizedState) ? Te.element : null, vg(oe, se), zg(se, ke, null, _e), (ke = se.memoizedState.element) === Te) Xh(), se = $h(oe, se, _e);
				else {
					if ((Te = se.stateNode.hydrate) && (so = Jd(se.stateNode.containerInfo.firstChild), lo = se, Te = co = !0), Te)
						for (_e = vi(se, null, ke, _e), se.child = _e; _e;) _e.effectTag = -3 & _e.effectTag | 1024, _e = _e.sibling;
					else R(oe, se, ke, _e), Xh();
					se = se.child
				}
				return se;
			case 5:
				return fh(se), null === oe && Uh(se), ke = se.type, Te = se.pendingProps, Ne = null !== oe ? oe.memoizedProps : null, Oe = Te.children, Gd(ke, Te) ? Oe = null : null !== Ne && Gd(ke, Ne) && (se.effectTag |= 16), ei(oe, se), 4 & se.mode && 1 !== _e && Te.hidden ? (se.expirationTime = se.childExpirationTime = 1, se = null) : (R(oe, se, Oe, _e), se = se.child), se;
			case 6:
				return null === oe && Uh(se), null;
			case 13:
				return ji(oe, se, _e);
			case 4:
				return dh(se, se.stateNode.containerInfo), ke = se.pendingProps, null === oe ? se.child = pi(se, null, ke, _e) : R(oe, se, ke, _e), se.child;
			case 11:
				return ke = se.type, Te = se.pendingProps, Zh(oe, se, ke, Te = se.elementType === ke ? Te : ig(ke, Te), _e);
			case 7:
				return R(oe, se, se.pendingProps, _e), se.child;
			case 8:
			case 12:
				return R(oe, se, se.pendingProps.children, _e), se.child;
			case 10:
				e: {
					ke = se.type._context,
					Te = se.pendingProps,
					Oe = se.memoizedProps,
					Ne = Te.value;
					var Ae = se.type._context;
					if (I(Jr, Ae._currentValue), Ae._currentValue = Ne, null !== Oe)
						if (Ae = Oe.value, 0 === (Ne = or(Ae, Ne) ? 0 : 0 | ("function" == typeof ke._calculateChangedBits ? ke._calculateChangedBits(Ae, Ne) : 1073741823))) {
							if (Oe.children === Te.children && !Ir.current) {
								se = $h(oe, se, _e);
								break e
							}
						} else
							for (null !== (Ae = se.child) && (Ae.return = se); null !== Ae;) {
								var Re = Ae.dependencies;
								if (null !== Re) {
									Oe = Ae.child;
									for (var je = Re.firstContext; null !== je;) {
										if (je.context === ke && 0 != (je.observedBits & Ne)) {
											1 === Ae.tag && ((je = wg(_e, null))
												.tag = 2, xg(Ae, je)), Ae.expirationTime < _e && (Ae.expirationTime = _e), null !== (je = Ae.alternate) && je.expirationTime < _e && (je.expirationTime = _e), pg(Ae.return, _e), Re.expirationTime < _e && (Re.expirationTime = _e);
											break
										}
										je = je.next
									}
								} else Oe = 10 === Ae.tag && Ae.type === se.type ? null : Ae.child;
								if (null !== Oe) Oe.return = Ae;
								else
									for (Oe = Ae; null !== Oe;) {
										if (Oe === se) {
											Oe = null;
											break
										}
										if (null !== (Ae = Oe.sibling)) {
											Ae.return = Oe.return, Oe = Ae;
											break
										}
										Oe = Oe.return
									}
								Ae = Oe
							}
					R(oe, se, Te.children, _e),
					se = se.child
				}
				return se;
			case 9:
				return Te = se.type, ke = (Ne = se.pendingProps)
					.children, qg(se, _e), ke = ke(Te = sg(Te, Ne.unstable_observedBits)), se.effectTag |= 1, R(oe, se, ke, _e), se.child;
			case 14:
				return Ne = ig(Te = se.type, se.pendingProps), ai(oe, se, Te, Ne = ig(Te.type, Ne), ke, _e);
			case 15:
				return ci(oe, se, se.type, se.pendingProps, ke, _e);
			case 17:
				return ke = se.type, Te = se.pendingProps, Te = se.elementType === ke ? Te : ig(ke, Te), null !== oe && (oe.alternate = null, se.alternate = null, se.effectTag |= 2), se.tag = 1, L(ke) ? (oe = !0, Gf(se)) : oe = !1, qg(se, _e), Lg(se, ke, Te), Ng(se, ke, Te, _e), gi(null, se, ke, !0, oe, _e);
			case 19:
				return mi(oe, se, _e)
		}
		throw Error(u(156, se.tag))
	};
	var Yo = null,
		Jo = null;

	function Zj(oe, se, _e, ke) {
		this.tag = oe, this.key = _e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = se, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = ke, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
	}

	function Sh(oe, se, _e, ke) {
		return new Zj(oe, se, _e, ke)
	}

	function bi(oe) {
		return !(!(oe = oe.prototype) || !oe.isReactComponent)
	}

	function Sg(oe, se) {
		var _e = oe.alternate;
		return null === _e ? ((_e = Sh(oe.tag, se, oe.key, oe.mode))
			.elementType = oe.elementType, _e.type = oe.type, _e.stateNode = oe.stateNode, _e.alternate = oe, oe.alternate = _e) : (_e.pendingProps = se, _e.effectTag = 0, _e.nextEffect = null, _e.firstEffect = null, _e.lastEffect = null), _e.childExpirationTime = oe.childExpirationTime, _e.expirationTime = oe.expirationTime, _e.child = oe.child, _e.memoizedProps = oe.memoizedProps, _e.memoizedState = oe.memoizedState, _e.updateQueue = oe.updateQueue, se = oe.dependencies, _e.dependencies = null === se ? null : {
			expirationTime: se.expirationTime,
			firstContext: se.firstContext,
			responders: se.responders
		}, _e.sibling = oe.sibling, _e.index = oe.index, _e.ref = oe.ref, _e
	}

	function Ug(oe, se, _e, ke, Te, Ne) {
		var Oe = 2;
		if (ke = oe, "function" == typeof oe) bi(oe) && (Oe = 1);
		else if ("string" == typeof oe) Oe = 5;
		else e: switch (oe) {
			case yt:
				return Wg(_e.children, Te, Ne, se);
			case kt:
				Oe = 8, Te |= 7;
				break;
			case Et:
				Oe = 8, Te |= 1;
				break;
			case wt:
				return (oe = Sh(12, _e, se, 8 | Te))
					.elementType = wt, oe.type = wt, oe.expirationTime = Ne, oe;
			case xt:
				return (oe = Sh(13, _e, se, Te))
					.type = xt, oe.elementType = xt, oe.expirationTime = Ne, oe;
			case Ct:
				return (oe = Sh(19, _e, se, Te))
					.elementType = Ct, oe.expirationTime = Ne, oe;
			default:
				if ("object" == typeof oe && null !== oe) switch (oe.$$typeof) {
					case _t:
						Oe = 10;
						break e;
					case St:
						Oe = 9;
						break e;
					case Tt:
						Oe = 11;
						break e;
					case Nt:
						Oe = 14;
						break e;
					case It:
						Oe = 16, ke = null;
						break e;
					case Pt:
						Oe = 22;
						break e
				}
				throw Error(u(130, null == oe ? oe : typeof oe, ""))
		}
		return (se = Sh(Oe, _e, se, Te))
			.elementType = oe, se.type = ke, se.expirationTime = Ne, se
	}

	function Wg(oe, se, _e, ke) {
		return (oe = Sh(7, oe, ke, se))
			.expirationTime = _e, oe
	}

	function Tg(oe, se, _e) {
		return (oe = Sh(6, oe, null, se))
			.expirationTime = _e, oe
	}

	function Vg(oe, se, _e) {
		return (se = Sh(4, null !== oe.children ? oe.children : [], oe.key, se))
			.expirationTime = _e, se.stateNode = {
				containerInfo: oe.containerInfo,
				pendingChildren: null,
				implementation: oe.implementation
			}, se
	}

	function ak(oe, se, _e) {
		this.tag = se, this.current = null, this.containerInfo = oe, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = _e, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
	}

	function Aj(oe, se) {
		var _e = oe.firstSuspendedTime;
		return oe = oe.lastSuspendedTime, 0 !== _e && _e >= se && oe <= se
	}

	function xi(oe, se) {
		var _e = oe.firstSuspendedTime,
			ke = oe.lastSuspendedTime;
		_e < se && (oe.firstSuspendedTime = se), (ke > se || 0 === _e) && (oe.lastSuspendedTime = se), se <= oe.lastPingedTime && (oe.lastPingedTime = 0), se <= oe.lastExpiredTime && (oe.lastExpiredTime = 0)
	}

	function yi(oe, se) {
		se > oe.firstPendingTime && (oe.firstPendingTime = se);
		var _e = oe.firstSuspendedTime;
		0 !== _e && (se >= _e ? oe.firstSuspendedTime = oe.lastSuspendedTime = oe.nextKnownPendingLevel = 0 : se >= oe.lastSuspendedTime && (oe.lastSuspendedTime = se + 1), se > oe.nextKnownPendingLevel && (oe.nextKnownPendingLevel = se))
	}

	function Cj(oe, se) {
		var _e = oe.lastExpiredTime;
		(0 === _e || _e > se) && (oe.lastExpiredTime = se)
	}

	function bk(oe, se, _e, ke) {
		var Te = se.current,
			Ne = Gg(),
			Oe = ni.suspense;
		Ne = Hg(Ne, Te, Oe);
		e: if (_e) {
			t: {
				if (dc(_e = _e._reactInternalFiber) !== _e || 1 !== _e.tag) throw Error(u(170));
				var Ae = _e;do {
					switch (Ae.tag) {
						case 3:
							Ae = Ae.stateNode.context;
							break t;
						case 1:
							if (L(Ae.type)) {
								Ae = Ae.stateNode.__reactInternalMemoizedMergedChildContext;
								break t
							}
					}
					Ae = Ae.return
				} while (null !== Ae);
				throw Error(u(171))
			}
			if (1 === _e.tag) {
				var Re = _e.type;
				if (L(Re)) {
					_e = Ff(_e, Re, Ae);
					break e
				}
			}
			_e = Ae
		}
		else _e = Cr;
		return null === se.context ? se.context = _e : se.pendingContext = _e, (se = wg(Ne, Oe))
			.payload = {
				element: oe
			}, null !== (ke = void 0 === ke ? null : ke) && (se.callback = ke), xg(Te, se), Ig(Te, Ne), Ne
	}

	function ck(oe) {
		if (!(oe = oe.current)
			.child) return null;
		switch (oe.child.tag) {
			case 5:
			default:
				return oe.child.stateNode
		}
	}

	function dk(oe, se) {
		null !== (oe = oe.memoizedState) && null !== oe.dehydrated && oe.retryTime < se && (oe.retryTime = se)
	}

	function ek(oe, se) {
		dk(oe, se), (oe = oe.alternate) && dk(oe, se)
	}

	function fk(oe, se, _e) {
		var ke = new ak(oe, se, _e = null != _e && !0 === _e.hydrate),
			Te = Sh(3, null, null, 2 === se ? 7 : 1 === se ? 3 : 0);
		ke.current = Te, Te.stateNode = ke, ug(Te), oe[Cn] = ke.current, _e && 0 !== se && function Jc(oe, se) {
			var _e = cc(se);
			on.forEach((function(oe) {
				uc(oe, se, _e)
			})), an.forEach((function(oe) {
				uc(oe, se, _e)
			}))
		}(0, 9 === oe.nodeType ? oe : oe.ownerDocument), this._internalRoot = ke
	}

	function gk(oe) {
		return !(!oe || 1 !== oe.nodeType && 9 !== oe.nodeType && 11 !== oe.nodeType && (8 !== oe.nodeType || " react-mount-point-unstable " !== oe.nodeValue))
	}

	function ik(oe, se, _e, ke, Te) {
		var Ne = _e._reactRootContainer;
		if (Ne) {
			var Oe = Ne._internalRoot;
			if ("function" == typeof Te) {
				var Ae = Te;
				Te = function() {
					var oe = ck(Oe);
					Ae.call(oe)
				}
			}
			bk(se, Oe, oe, Te)
		} else {
			if (Ne = _e._reactRootContainer = function hk(oe, se) {
				if (se || (se = !(!(se = oe ? 9 === oe.nodeType ? oe.documentElement : oe.firstChild : null) || 1 !== se.nodeType || !se.hasAttribute("data-reactroot"))), !se)
					for (var _e; _e = oe.lastChild;) oe.removeChild(_e);
				return new fk(oe, 0, se ? {
					hydrate: !0
				} : void 0)
			}(_e, ke), Oe = Ne._internalRoot, "function" == typeof Te) {
				var Re = Te;
				Te = function() {
					var oe = ck(Oe);
					Re.call(oe)
				}
			}
			Nj((function() {
				bk(se, Oe, oe, Te)
			}))
		}
		return ck(Oe)
	}

	function jk(oe, se, _e) {
		var ke = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: bt,
			key: null == ke ? null : "" + ke,
			children: oe,
			containerInfo: se,
			implementation: _e
		}
	}

	function kk(oe, se) {
		var _e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!gk(se)) throw Error(u(200));
		return jk(oe, se, null, _e)
	}
	fk.prototype.render = function(oe) {
		bk(oe, this._internalRoot, null, null)
	}, fk.prototype.unmount = function() {
		var oe = this._internalRoot,
			se = oe.containerInfo;
		bk(null, oe, null, (function() {
			se[Cn] = null
		}))
	}, Gt = function(oe) {
		if (13 === oe.tag) {
			var se = hg(Gg(), 150, 100);
			Ig(oe, se), ek(oe, se)
		}
	}, Kt = function(oe) {
		13 === oe.tag && (Ig(oe, 3), ek(oe, 3))
	}, Yt = function(oe) {
		if (13 === oe.tag) {
			var se = Gg();
			Ig(oe, se = Hg(se, oe, null)), ek(oe, se)
		}
	}, nt = function(oe, se, _e) {
		switch (se) {
			case "input":
				if (Cb(oe, _e), se = _e.name, "radio" === _e.type && null != se) {
					for (_e = oe; _e.parentNode;) _e = _e.parentNode;
					for (_e = _e.querySelectorAll("input[name=" + JSON.stringify("" + se) + '][type="radio"]'), se = 0; se < _e.length; se++) {
						var ke = _e[se];
						if (ke !== oe && ke.form === oe.form) {
							var Te = Qd(ke);
							if (!Te) throw Error(u(90));
							yb(ke), Cb(ke, Te)
						}
					}
				}
				break;
			case "textarea":
				Kb(oe, _e);
				break;
			case "select":
				null != (se = _e.value) && Hb(oe, !!_e.multiple, se, !1)
		}
	}, Fa = Mj, Ga = function(oe, se, _e, ke, Te) {
		var Ne = xo;
		xo |= 4;
		try {
			return cg(98, oe.bind(null, se, _e, ke, Te))
		} finally {
			0 === (xo = Ne) && gg()
		}
	}, Ha = function() {
		0 == (49 & xo) && (function Lj() {
			if (null !== Qo) {
				var oe = Qo;
				Qo = null, oe.forEach((function(oe, se) {
					Cj(se, oe), Z(se)
				})), gg()
			}
		}(), Dj())
	}, ot = function(oe, se) {
		var _e = xo;
		xo |= 2;
		try {
			return oe(se)
		} finally {
			0 === (xo = _e) && gg()
		}
	};
	var Xo, $o, Zo = {
		Events: [Nc, Pd, Qd, xa, Xe, Xd, function(oe) {
			jc(oe, Wd)
		}, Da, Ea, id, mc, Dj, {
			current: !1
		}]
	};
	$o = (Xo = {
			findFiberByHostInstance: tc,
			bundleType: 0,
			version: "16.14.0",
			rendererPackageName: "react-dom"
		})
		.findFiberByHostInstance,
		function Yj(oe) {
			if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
			var se = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (se.isDisabled || !se.supportsFiber) return !0;
			try {
				var _e = se.inject(oe);
				Yo = function(oe) {
					try {
						se.onCommitFiberRoot(_e, oe, void 0, 64 == (64 & oe.current.effectTag))
					} catch (oe) {}
				}, Jo = function(oe) {
					try {
						se.onCommitFiberUnmount(_e, oe)
					} catch (oe) {}
				}
			} catch (oe) {}
			return !0
		}(Te({}, Xo, {
			overrideHookState: null,
			overrideProps: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: pt.ReactCurrentDispatcher,
			findHostInstanceByFiber: function(oe) {
				return null === (oe = hc(oe)) ? null : oe.stateNode
			},
			findFiberByHostInstance: function(oe) {
				return $o ? $o(oe) : null
			},
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null
		})), se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zo, se.createPortal = kk, se.findDOMNode = function(oe) {
			if (null == oe) return null;
			if (1 === oe.nodeType) return oe;
			var se = oe._reactInternalFiber;
			if (void 0 === se) {
				if ("function" == typeof oe.render) throw Error(u(188));
				throw Error(u(268, Object.keys(oe)))
			}
			return oe = null === (oe = hc(se)) ? null : oe.stateNode
		}, se.flushSync = function(oe, se) {
			if (0 != (48 & xo)) throw Error(u(187));
			var _e = xo;
			xo |= 1;
			try {
				return cg(99, oe.bind(null, se))
			} finally {
				xo = _e, gg()
			}
		}, se.hydrate = function(oe, se, _e) {
			if (!gk(se)) throw Error(u(200));
			return ik(null, oe, se, !0, _e)
		}, se.render = function(oe, se, _e) {
			if (!gk(se)) throw Error(u(200));
			return ik(null, oe, se, !1, _e)
		}, se.unmountComponentAtNode = function(oe) {
			if (!gk(oe)) throw Error(u(40));
			return !!oe._reactRootContainer && (Nj((function() {
				ik(null, null, oe, !1, (function() {
					oe._reactRootContainer = null, oe[Cn] = null
				}))
			})), !0)
		}, se.unstable_batchedUpdates = Mj, se.unstable_createPortal = function(oe, se) {
			return kk(oe, se, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
		}, se.unstable_renderSubtreeIntoContainer = function(oe, se, _e, ke) {
			if (!gk(_e)) throw Error(u(200));
			if (null == oe || void 0 === oe._reactInternalFiber) throw Error(u(38));
			return ik(oe, se, _e, !1, ke)
		}, se.version = "16.14.0"
}, function(oe, se, _e) {
	"use strict";
	oe.exports = _e(42)
}, function(oe, se, _e) {
	"use strict";
	var ke, Te, Ne, Oe, Ae;
	if ("undefined" == typeof window || "function" != typeof MessageChannel) {
		var Re = null,
			je = null,
			t = function() {
				if (null !== Re) try {
					var oe = se.unstable_now();
					Re(!0, oe), Re = null
				} catch (oe) {
					throw setTimeout(t, 0), oe
				}
			},
			Me = Date.now();
		se.unstable_now = function() {
			return Date.now() - Me
		}, ke = function(oe) {
			null !== Re ? setTimeout(ke, 0, oe) : (Re = oe, setTimeout(t, 0))
		}, Te = function(oe, se) {
			je = setTimeout(oe, se)
		}, Ne = function() {
			clearTimeout(je)
		}, Oe = function() {
			return !1
		}, Ae = se.unstable_forceFrameRate = function() {}
	} else {
		var Fe = window.performance,
			Ue = window.Date,
			Be = window.setTimeout,
			We = window.clearTimeout;
		if ("undefined" != typeof console) {
			var Ve = window.cancelAnimationFrame;
			"function" != typeof window.requestAnimationFrame && console.error("这个浏览器不支持requestAnimationFrame。确保在较旧的浏览器中加载了polyfill。https://fb.me/react-polyfills"), "function" != typeof Ve && console.error("这个浏览器不支持cancelanimationframe。确保在较旧的浏览器中加载了polyfill。https://fb.me/react-polyfills")
		}
		if ("object" == typeof Fe && "function" == typeof Fe.now) se.unstable_now = function() {
			return Fe.now()
		};
		else {
			var Ye = Ue.now();
			se.unstable_now = function() {
				return Ue.now() - Ye
			}
		}
		var Xe = !1,
			$e = null,
			et = -1,
			tt = 5,
			nt = 0;
		Oe = function() {
			return se.unstable_now() >= nt
		}, Ae = function() {}, se.unstable_forceFrameRate = function(oe) {
			0 > oe || 125 < oe ? console.error("forceFrameRate接受0到125之间的正整数,强制高于125 fps的帧率并非不受支持") : tt = 0 < oe ? Math.floor(1e3 / oe) : 5
		};
		var rt = new MessageChannel,
			it = rt.port2;
		rt.port1.onmessage = function() {
			if (null !== $e) {
				var oe = se.unstable_now();
				nt = oe + tt;
				try {
					$e(!0, oe) ? it.postMessage(null) : (Xe = !1, $e = null)
				} catch (oe) {
					throw it.postMessage(null), oe
				}
			} else Xe = !1
		}, ke = function(oe) {
			$e = oe, Xe || (Xe = !0, it.postMessage(null))
		}, Te = function(oe, _e) {
			et = Be((function() {
				oe(se.unstable_now())
			}), _e)
		}, Ne = function() {
			We(et), et = -1
		}
	}

	function J(oe, se) {
		var _e = oe.length;
		oe.push(se);
		e: for (;;) {
			var ke = _e - 1 >>> 1,
				Te = oe[ke];
			if (!(void 0 !== Te && 0 < K(Te, se))) break e;
			oe[ke] = se, oe[_e] = Te, _e = ke
		}
	}

	function L(oe) {
		return void 0 === (oe = oe[0]) ? null : oe
	}

	function M(oe) {
		var se = oe[0];
		if (void 0 !== se) {
			var _e = oe.pop();
			if (_e !== se) {
				oe[0] = _e;
				e: for (var ke = 0, Te = oe.length; ke < Te;) {
					var Ne = 2 * (ke + 1) - 1,
						Oe = oe[Ne],
						Ae = Ne + 1,
						Re = oe[Ae];
					if (void 0 !== Oe && 0 > K(Oe, _e)) void 0 !== Re && 0 > K(Re, Oe) ? (oe[ke] = Re, oe[Ae] = _e, ke = Ae) : (oe[ke] = Oe, oe[Ne] = _e, ke = Ne);
					else {
						if (!(void 0 !== Re && 0 > K(Re, _e))) break e;
						oe[ke] = Re, oe[Ae] = _e, ke = Ae
					}
				}
			}
			return se
		}
		return null
	}

	function K(oe, se) {
		var _e = oe.sortIndex - se.sortIndex;
		return 0 !== _e ? _e : oe.id - se.id
	}
	var ot = [],
		at = [],
		lt = 1,
		st = null,
		ct = 3,
		ut = !1,
		dt = !1,
		ft = !1;

	function V(oe) {
		for (var se = L(at); null !== se;) {
			if (null === se.callback) M(at);
			else {
				if (!(se.startTime <= oe)) break;
				M(at), se.sortIndex = se.expirationTime, J(ot, se)
			}
			se = L(at)
		}
	}

	function W(oe) {
		if (ft = !1, V(oe), !dt)
			if (null !== L(ot)) dt = !0, ke(X);
			else {
				var se = L(at);
				null !== se && Te(W, se.startTime - oe)
			}
	}

	function X(oe, _e) {
		dt = !1, ft && (ft = !1, Ne()), ut = !0;
		var ke = ct;
		try {
			for (V(_e), st = L(ot); null !== st && (!(st.expirationTime > _e) || oe && !Oe());) {
				var Ae = st.callback;
				if (null !== Ae) {
					st.callback = null, ct = st.priorityLevel;
					var Re = Ae(st.expirationTime <= _e);
					_e = se.unstable_now(), "function" == typeof Re ? st.callback = Re : st === L(ot) && M(ot), V(_e)
				} else M(ot);
				st = L(ot)
			}
			if (null !== st) var je = !0;
			else {
				var Me = L(at);
				null !== Me && Te(W, Me.startTime - _e), je = !1
			}
			return je
		} finally {
			st = null, ct = ke, ut = !1
		}
	}

	function Y(oe) {
		switch (oe) {
			case 1:
				return -1;
			case 2:
				return 250;
			case 5:
				return 1073741823;
			case 4:
				return 1e4;
			default:
				return 5e3
		}
	}
	var ht = Ae;
	se.unstable_IdlePriority = 5, se.unstable_ImmediatePriority = 1, se.unstable_LowPriority = 4, se.unstable_NormalPriority = 3, se.unstable_Profiling = null, se.unstable_UserBlockingPriority = 2, se.unstable_cancelCallback = function(oe) {
		oe.callback = null
	}, se.unstable_continueExecution = function() {
		dt || ut || (dt = !0, ke(X))
	}, se.unstable_getCurrentPriorityLevel = function() {
		return ct
	}, se.unstable_getFirstCallbackNode = function() {
		return L(ot)
	}, se.unstable_next = function(oe) {
		switch (ct) {
			case 1:
			case 2:
			case 3:
				var se = 3;
				break;
			default:
				se = ct
		}
		var _e = ct;
		ct = se;
		try {
			return oe()
		} finally {
			ct = _e
		}
	}, se.unstable_pauseExecution = function() {}, se.unstable_requestPaint = ht, se.unstable_runWithPriority = function(oe, se) {
		switch (oe) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				oe = 3
		}
		var _e = ct;
		ct = oe;
		try {
			return se()
		} finally {
			ct = _e
		}
	}, se.unstable_scheduleCallback = function(oe, _e, Oe) {
		var Ae = se.unstable_now();
		if ("object" == typeof Oe && null !== Oe) {
			var Re = Oe.delay;
			Re = "number" == typeof Re && 0 < Re ? Ae + Re : Ae, Oe = "number" == typeof Oe.timeout ? Oe.timeout : Y(oe)
		} else Oe = Y(oe), Re = Ae;
		return oe = {
			id: lt++,
			callback: _e,
			priorityLevel: oe,
			startTime: Re,
			expirationTime: Oe = Re + Oe,
			sortIndex: -1
		}, Re > Ae ? (oe.sortIndex = Re, J(at, oe), null === L(ot) && oe === L(at) && (ft ? Ne() : ft = !0, Te(W, Re - Ae))) : (oe.sortIndex = Oe, J(ot, oe), dt || ut || (dt = !0, ke(X))), oe
	}, se.unstable_shouldYield = function() {
		var oe = se.unstable_now();
		V(oe);
		var _e = L(ot);
		return _e !== st && null !== st && null !== _e && null !== _e.callback && _e.startTime <= oe && _e.expirationTime < st.expirationTime || Oe()
	}, se.unstable_wrapCallback = function(oe) {
		var se = ct;
		return function() {
			var _e = ct;
			ct = se;
			try {
				return oe.apply(this, arguments)
			} finally {
				ct = _e
			}
		}
	}
}, function(oe, se, _e) {}, function(oe, se, _e) {
	! function(oe, se, _e) {
		"use strict";

		function i(oe, se) {
			for (var _e = 0; _e < se.length; _e++) {
				var ke = se[_e];
				ke.enumerable = ke.enumerable || !1, ke.configurable = !0, "value" in ke && (ke.writable = !0), Object.defineProperty(oe, ke.key, ke)
			}
		}

		function s(oe, se, _e) {
			return se && i(oe.prototype, se), _e && i(oe, _e), oe
		}

		function l(oe) {
			for (var se = 1; se < arguments.length; se++) {
				var _e = null != arguments[se] ? arguments[se] : {},
					ke = Object.keys(_e);
				"function" == typeof Object.getOwnPropertySymbols && (ke = ke.concat(Object.getOwnPropertySymbols(_e)
					.filter((function(oe) {
						return Object.getOwnPropertyDescriptor(_e, oe)
							.enumerable
					})))), ke.forEach((function(se) {
					var ke, Te, Ne;
					ke = oe, Ne = _e[Te = se], Te in ke ? Object.defineProperty(ke, Te, {
						value: Ne,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : ke[Te] = Ne
				}))
			}
			return oe
		}
		se = se && se.hasOwnProperty("default") ? se.default : se, _e = _e && _e.hasOwnProperty("default") ? _e.default : _e;
		var ke = "transitionend",
			Te = {
				TRANSITION_END: "bsTransitionEnd",
				getUID: function(oe) {
					for (; oe += ~~(1e6 * Math.random()), document.getElementById(oe););
					return oe
				},
				getSelectorFromElement: function(oe) {
					var se = oe.getAttribute("data-target");
					if (!se || "#" === se) {
						var _e = oe.getAttribute("href");
						se = _e && "#" !== _e ? _e.trim() : ""
					}
					try {
						return document.querySelector(se) ? se : null
					} catch (oe) {
						return null
					}
				},
				getTransitionDurationFromElement: function(oe) {
					if (!oe) return 0;
					var _e = se(oe)
						.css("transition-duration"),
						ke = se(oe)
						.css("transition-delay"),
						Te = parseFloat(_e),
						Ne = parseFloat(ke);
					return Te || Ne ? (_e = _e.split(",")[0], ke = ke.split(",")[0], 1e3 * (parseFloat(_e) + parseFloat(ke))) : 0
				},
				reflow: function(oe) {
					return oe.offsetHeight
				},
				triggerTransitionEnd: function(oe) {
					se(oe)
						.trigger(ke)
				},
				supportsTransitionEnd: function() {
					return Boolean(ke)
				},
				isElement: function(oe) {
					return (oe[0] || oe)
						.nodeType
				},
				typeCheckConfig: function(oe, se, _e) {
					for (var ke in _e)
						if (Object.prototype.hasOwnProperty.call(_e, ke)) {
							var Ne = _e[ke],
								Oe = se[ke],
								Ae = Oe && Te.isElement(Oe) ? "element" : (Re = Oe, {}.toString.call(Re)
									.match(/\s([a-z]+)/i)[1].toLowerCase());
							if (!new RegExp(Ne)
								.test(Ae)) throw new Error(oe.toUpperCase() + ': Option "' + ke + '" provided type "' + Ae + '" but expected type "' + Ne + '".')
						} var Re
				},
				findShadowRoot: function(oe) {
					if (!document.documentElement.attachShadow) return null;
					if ("function" != typeof oe.getRootNode) return oe instanceof ShadowRoot ? oe : oe.parentNode ? Te.findShadowRoot(oe.parentNode) : null;
					var se = oe.getRootNode();
					return se instanceof ShadowRoot ? se : null
				}
			};
		se.fn.emulateTransitionEnd = function n(oe) {
			var _e = this,
				ke = !1;
			return se(this)
				.one(Te.TRANSITION_END, (function() {
					ke = !0
				})), setTimeout((function() {
					ke || Te.triggerTransitionEnd(_e)
				}), oe), this
		}, se.event.special[Te.TRANSITION_END] = {
			bindType: ke,
			delegateType: ke,
			handle: function(oe) {
				if (se(oe.target)
					.is(this)) return oe.handleObj.handler.apply(this, arguments)
			}
		};
		var Ne = "alert",
			Oe = "bs.alert",
			Ae = "." + Oe,
			Re = se.fn[Ne],
			je = {
				CLOSE: "close" + Ae,
				CLOSED: "closed" + Ae,
				CLICK_DATA_API: "click" + Ae + ".data-api"
			},
			Me = function() {
				function i(oe) {
					this._element = oe
				}
				var oe = i.prototype;
				return oe.close = function(oe) {
					var se = this._element;
					oe && (se = this._getRootElement(oe)), this._triggerCloseEvent(se)
						.isDefaultPrevented() || this._removeElement(se)
				}, oe.dispose = function() {
					se.removeData(this._element, Oe), this._element = null
				}, oe._getRootElement = function(oe) {
					var _e = Te.getSelectorFromElement(oe),
						ke = !1;
					return _e && (ke = document.querySelector(_e)), ke || (ke = se(oe)
						.closest(".alert")[0]), ke
				}, oe._triggerCloseEvent = function(oe) {
					var _e = se.Event(je.CLOSE);
					return se(oe)
						.trigger(_e), _e
				}, oe._removeElement = function(oe) {
					var _e = this;
					if (se(oe)
						.removeClass("show"), se(oe)
						.hasClass("fade")) {
						var ke = Te.getTransitionDurationFromElement(oe);
						se(oe)
							.one(Te.TRANSITION_END, (function(se) {
								return _e._destroyElement(oe, se)
							}))
							.emulateTransitionEnd(ke)
					} else this._destroyElement(oe)
				}, oe._destroyElement = function(oe) {
					se(oe)
						.detach()
						.trigger(je.CLOSED)
						.remove()
				}, i._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this),
							ke = _e.data(Oe);
						ke || (ke = new i(this), _e.data(Oe, ke)), "close" === oe && ke[oe](this)
					}))
				}, i._handleDismiss = function(oe) {
					return function(se) {
						se && se.preventDefault(), oe.close(this)
					}
				}, s(i, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}]), i
			}();
		se(document)
			.on(je.CLICK_DATA_API, '[data-dismiss="alert"]', Me._handleDismiss(new Me)), se.fn[Ne] = Me._jQueryInterface, se.fn[Ne].Constructor = Me, se.fn[Ne].noConflict = function() {
				return se.fn[Ne] = Re, Me._jQueryInterface
			};
		var Fe = "button",
			Ue = "bs.button",
			Be = "." + Ue,
			We = ".data-api",
			Ve = se.fn[Fe],
			Ye = "active",
			Xe = '[data-toggle^="button"]',
			$e = ".btn",
			et = {
				CLICK_DATA_API: "click" + Be + We,
				FOCUS_BLUR_DATA_API: "focus" + Be + We + " blur" + Be + We
			},
			tt = function() {
				function n(oe) {
					this._element = oe
				}
				var oe = n.prototype;
				return oe.toggle = function() {
					var oe = !0,
						_e = !0,
						ke = se(this._element)
						.closest('[data-toggle="buttons"]')[0];
					if (ke) {
						var Te = this._element.querySelector('input:not([type="hidden"])');
						if (Te) {
							if ("radio" === Te.type)
								if (Te.checked && this._element.classList.contains(Ye)) oe = !1;
								else {
									var Ne = ke.querySelector(".active");
									Ne && se(Ne)
										.removeClass(Ye)
								} if (oe) {
								if (Te.hasAttribute("disabled") || ke.hasAttribute("disabled") || Te.classList.contains("disabled") || ke.classList.contains("disabled")) return;
								Te.checked = !this._element.classList.contains(Ye), se(Te)
									.trigger("change")
							}
							Te.focus(), _e = !1
						}
					}
					_e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(Ye)), oe && se(this._element)
						.toggleClass(Ye)
				}, oe.dispose = function() {
					se.removeData(this._element, Ue), this._element = null
				}, n._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this)
							.data(Ue);
						_e || (_e = new n(this), se(this)
							.data(Ue, _e)), "toggle" === oe && _e[oe]()
					}))
				}, s(n, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}]), n
			}();
		se(document)
			.on(et.CLICK_DATA_API, Xe, (function(oe) {
				oe.preventDefault();
				var _e = oe.target;
				se(_e)
					.hasClass("btn") || (_e = se(_e)
						.closest($e)), tt._jQueryInterface.call(se(_e), "toggle")
			}))
			.on(et.FOCUS_BLUR_DATA_API, Xe, (function(oe) {
				var _e = se(oe.target)
					.closest($e)[0];
				se(_e)
					.toggleClass("focus", /^focus(in)?$/.test(oe.type))
			})), se.fn[Fe] = tt._jQueryInterface, se.fn[Fe].Constructor = tt, se.fn[Fe].noConflict = function() {
				return se.fn[Fe] = Ve, tt._jQueryInterface
			};
		var nt = "carousel",
			rt = "bs.carousel",
			it = "." + rt,
			ot = ".data-api",
			at = se.fn[nt],
			lt = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0
			},
			st = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean"
			},
			ct = "next",
			ut = "prev",
			dt = {
				SLIDE: "slide" + it,
				SLID: "slid" + it,
				KEYDOWN: "keydown" + it,
				MOUSEENTER: "mouseenter" + it,
				MOUSELEAVE: "mouseleave" + it,
				TOUCHSTART: "touchstart" + it,
				TOUCHMOVE: "touchmove" + it,
				TOUCHEND: "touchend" + it,
				POINTERDOWN: "pointerdown" + it,
				POINTERUP: "pointerup" + it,
				DRAG_START: "dragstart" + it,
				LOAD_DATA_API: "load" + it + ot,
				CLICK_DATA_API: "click" + it + ot
			},
			ft = "active",
			ht = ".active.carousel-item",
			pt = {
				TOUCH: "touch",
				PEN: "pen"
			},
			mt = function() {
				function r(oe, se) {
					this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(se), this._element = oe, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
				}
				var oe = r.prototype;
				return oe.next = function() {
					this._isSliding || this._slide(ct)
				}, oe.nextWhenVisible = function() {
					!document.hidden && se(this._element)
						.is(":visible") && "hidden" !== se(this._element)
						.css("visibility") && this.next()
				}, oe.prev = function() {
					this._isSliding || this._slide(ut)
				}, oe.pause = function(oe) {
					oe || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (Te.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
				}, oe.cycle = function(oe) {
					oe || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next)
						.bind(this), this._config.interval))
				}, oe.to = function(oe) {
					var _e = this;
					this._activeElement = this._element.querySelector(ht);
					var ke = this._getItemIndex(this._activeElement);
					if (!(oe > this._items.length - 1 || oe < 0))
						if (this._isSliding) se(this._element)
							.one(dt.SLID, (function() {
								return _e.to(oe)
							}));
						else {
							if (ke === oe) return this.pause(), void this.cycle();
							var Te = ke < oe ? ct : ut;
							this._slide(Te, this._items[oe])
						}
				}, oe.dispose = function() {
					se(this._element)
						.off(it), se.removeData(this._element, rt), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
				}, oe._getConfig = function(oe) {
					return oe = l({}, lt, oe), Te.typeCheckConfig(nt, oe, st), oe
				}, oe._handleSwipe = function() {
					var oe = Math.abs(this.touchDeltaX);
					if (!(oe <= 40)) {
						var se = oe / this.touchDeltaX;
						0 < se && this.prev(), se < 0 && this.next()
					}
				}, oe._addEventListeners = function() {
					var oe = this;
					this._config.keyboard && se(this._element)
						.on(dt.KEYDOWN, (function(se) {
							return oe._keydown(se)
						})), "hover" === this._config.pause && se(this._element)
						.on(dt.MOUSEENTER, (function(se) {
							return oe.pause(se)
						}))
						.on(dt.MOUSELEAVE, (function(se) {
							return oe.cycle(se)
						})), this._config.touch && this._addTouchEventListeners()
				}, oe._addTouchEventListeners = function() {
					var oe = this;
					if (this._touchSupported) {
						var e = function(se) {
								oe._pointerEvent && pt[se.originalEvent.pointerType.toUpperCase()] ? oe.touchStartX = se.originalEvent.clientX : oe._pointerEvent || (oe.touchStartX = se.originalEvent.touches[0].clientX)
							},
							i = function(se) {
								oe._pointerEvent && pt[se.originalEvent.pointerType.toUpperCase()] && (oe.touchDeltaX = se.originalEvent.clientX - oe.touchStartX), oe._handleSwipe(), "hover" === oe._config.pause && (oe.pause(), oe.touchTimeout && clearTimeout(oe.touchTimeout), oe.touchTimeout = setTimeout((function(se) {
									return oe.cycle(se)
								}), 500 + oe._config.interval))
							};
						se(this._element.querySelectorAll(".carousel-item img"))
							.on(dt.DRAG_START, (function(oe) {
								return oe.preventDefault()
							})), this._pointerEvent ? (se(this._element)
								.on(dt.POINTERDOWN, (function(oe) {
									return e(oe)
								})), se(this._element)
								.on(dt.POINTERUP, (function(oe) {
									return i(oe)
								})), this._element.classList.add("pointer-event")) : (se(this._element)
								.on(dt.TOUCHSTART, (function(oe) {
									return e(oe)
								})), se(this._element)
								.on(dt.TOUCHMOVE, (function(se) {
									var _e;
									(_e = se)
									.originalEvent.touches && 1 < _e.originalEvent.touches.length ? oe.touchDeltaX = 0 : oe.touchDeltaX = _e.originalEvent.touches[0].clientX - oe.touchStartX
								})), se(this._element)
								.on(dt.TOUCHEND, (function(oe) {
									return i(oe)
								})))
					}
				}, oe._keydown = function(oe) {
					if (!/input|textarea/i.test(oe.target.tagName)) switch (oe.which) {
						case 37:
							oe.preventDefault(), this.prev();
							break;
						case 39:
							oe.preventDefault(), this.next()
					}
				}, oe._getItemIndex = function(oe) {
					return this._items = oe && oe.parentNode ? [].slice.call(oe.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(oe)
				}, oe._getItemByDirection = function(oe, se) {
					var _e = oe === ct,
						ke = oe === ut,
						Te = this._getItemIndex(se),
						Ne = this._items.length - 1;
					if ((ke && 0 === Te || _e && Te === Ne) && !this._config.wrap) return se;
					var Oe = (Te + (oe === ut ? -1 : 1)) % this._items.length;
					return -1 === Oe ? this._items[this._items.length - 1] : this._items[Oe]
				}, oe._triggerSlideEvent = function(oe, _e) {
					var ke = this._getItemIndex(oe),
						Te = this._getItemIndex(this._element.querySelector(ht)),
						Ne = se.Event(dt.SLIDE, {
							relatedTarget: oe,
							direction: _e,
							from: Te,
							to: ke
						});
					return se(this._element)
						.trigger(Ne), Ne
				}, oe._setActiveIndicatorElement = function(oe) {
					if (this._indicatorsElement) {
						var _e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
						se(_e)
							.removeClass(ft);
						var ke = this._indicatorsElement.children[this._getItemIndex(oe)];
						ke && se(ke)
							.addClass(ft)
					}
				}, oe._slide = function(oe, _e) {
					var ke, Ne, Oe, Ae = this,
						Re = this._element.querySelector(ht),
						je = this._getItemIndex(Re),
						Me = _e || Re && this._getItemByDirection(oe, Re),
						Fe = this._getItemIndex(Me),
						Ue = Boolean(this._interval);
					if (Oe = oe === ct ? (ke = "carousel-item-left", Ne = "carousel-item-next", "left") : (ke = "carousel-item-right", Ne = "carousel-item-prev", "right"), Me && se(Me)
						.hasClass(ft)) this._isSliding = !1;
					else if (!this._triggerSlideEvent(Me, Oe)
						.isDefaultPrevented() && Re && Me) {
						this._isSliding = !0, Ue && this.pause(), this._setActiveIndicatorElement(Me);
						var Be = se.Event(dt.SLID, {
							relatedTarget: Me,
							direction: Oe,
							from: je,
							to: Fe
						});
						if (se(this._element)
							.hasClass("slide")) {
							se(Me)
								.addClass(Ne), Te.reflow(Me), se(Re)
								.addClass(ke), se(Me)
								.addClass(ke);
							var We = parseInt(Me.getAttribute("data-interval"), 10);
							this._config.interval = We ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, We) : this._config.defaultInterval || this._config.interval;
							var Ve = Te.getTransitionDurationFromElement(Re);
							se(Re)
								.one(Te.TRANSITION_END, (function() {
									se(Me)
										.removeClass(ke + " " + Ne)
										.addClass(ft), se(Re)
										.removeClass(ft + " " + Ne + " " + ke), Ae._isSliding = !1, setTimeout((function() {
											return se(Ae._element)
												.trigger(Be)
										}), 0)
								}))
								.emulateTransitionEnd(Ve)
						} else se(Re)
							.removeClass(ft), se(Me)
							.addClass(ft), this._isSliding = !1, se(this._element)
							.trigger(Be);
						Ue && this.cycle()
					}
				}, r._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this)
							.data(rt),
							ke = l({}, lt, se(this)
								.data());
						"object" == typeof oe && (ke = l({}, ke, oe));
						var Te = "string" == typeof oe ? oe : ke.slide;
						if (_e || (_e = new r(this, ke), se(this)
							.data(rt, _e)), "number" == typeof oe) _e.to(oe);
						else if ("string" == typeof Te) {
							if (void 0 === _e[Te]) throw new TypeError('No method named "' + Te + '"');
							_e[Te]()
						} else ke.interval && ke.ride && (_e.pause(), _e.cycle())
					}))
				}, r._dataApiClickHandler = function(oe) {
					var _e = Te.getSelectorFromElement(this);
					if (_e) {
						var ke = se(_e)[0];
						if (ke && se(ke)
							.hasClass("carousel")) {
							var Ne = l({}, se(ke)
									.data(), se(this)
									.data()),
								Oe = this.getAttribute("data-slide-to");
							Oe && (Ne.interval = !1), r._jQueryInterface.call(se(ke), Ne), Oe && se(ke)
								.data(rt)
								.to(Oe), oe.preventDefault()
						}
					}
				}, s(r, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return lt
					}
				}]), r
			}();
		se(document)
			.on(dt.CLICK_DATA_API, "[data-slide], [data-slide-to]", mt._dataApiClickHandler), se(window)
			.on(dt.LOAD_DATA_API, (function() {
				for (var oe = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), _e = 0, ke = oe.length; _e < ke; _e++) {
					var Te = se(oe[_e]);
					mt._jQueryInterface.call(Te, Te.data())
				}
			})), se.fn[nt] = mt._jQueryInterface, se.fn[nt].Constructor = mt, se.fn[nt].noConflict = function() {
				return se.fn[nt] = at, mt._jQueryInterface
			};
		var gt = "collapse",
			vt = "bs.collapse",
			bt = "." + vt,
			yt = se.fn[gt],
			Et = {
				toggle: !0,
				parent: ""
			},
			wt = {
				toggle: "boolean",
				parent: "(string|element)"
			},
			_t = {
				SHOW: "show" + bt,
				SHOWN: "shown" + bt,
				HIDE: "hide" + bt,
				HIDDEN: "hidden" + bt,
				CLICK_DATA_API: "click" + bt + ".data-api"
			},
			St = "show",
			kt = "collapse",
			Tt = "collapsing",
			xt = "collapsed",
			Ct = '[data-toggle="collapse"]',
			Nt = function() {
				function a(oe, se) {
					this._isTransitioning = !1, this._element = oe, this._config = this._getConfig(se), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + oe.id + '"],[data-toggle="collapse"][data-target="#' + oe.id + '"]'));
					for (var _e = [].slice.call(document.querySelectorAll(Ct)), ke = 0, Ne = _e.length; ke < Ne; ke++) {
						var Oe = _e[ke],
							Ae = Te.getSelectorFromElement(Oe),
							Re = [].slice.call(document.querySelectorAll(Ae))
							.filter((function(se) {
								return se === oe
							}));
						null !== Ae && 0 < Re.length && (this._selector = Ae, this._triggerArray.push(Oe))
					}
					this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
				}
				var oe = a.prototype;
				return oe.toggle = function() {
					se(this._element)
						.hasClass(St) ? this.hide() : this.show()
				}, oe.show = function() {
					var oe, _e, ke = this;
					if (!(this._isTransitioning || se(this._element)
						.hasClass(St) || (this._parent && 0 === (oe = [].slice.call(this._parent.querySelectorAll(".show, .collapsing"))
								.filter((function(oe) {
									return "string" == typeof ke._config.parent ? oe.getAttribute("data-parent") === ke._config.parent : oe.classList.contains(kt)
								})))
							.length && (oe = null), oe && (_e = se(oe)
								.not(this._selector)
								.data(vt)) && _e._isTransitioning))) {
						var Ne = se.Event(_t.SHOW);
						if (se(this._element)
							.trigger(Ne), !Ne.isDefaultPrevented()) {
							oe && (a._jQueryInterface.call(se(oe)
									.not(this._selector), "hide"), _e || se(oe)
								.data(vt, null));
							var Oe = this._getDimension();
							se(this._element)
								.removeClass(kt)
								.addClass(Tt), this._element.style[Oe] = 0, this._triggerArray.length && se(this._triggerArray)
								.removeClass(xt)
								.attr("aria-expanded", !0), this.setTransitioning(!0);
							var Ae = "scroll" + (Oe[0].toUpperCase() + Oe.slice(1)),
								Re = Te.getTransitionDurationFromElement(this._element);
							se(this._element)
								.one(Te.TRANSITION_END, (function() {
									se(ke._element)
										.removeClass(Tt)
										.addClass(kt)
										.addClass(St), ke._element.style[Oe] = "", ke.setTransitioning(!1), se(ke._element)
										.trigger(_t.SHOWN)
								}))
								.emulateTransitionEnd(Re), this._element.style[Oe] = this._element[Ae] + "px"
						}
					}
				}, oe.hide = function() {
					var oe = this;
					if (!this._isTransitioning && se(this._element)
						.hasClass(St)) {
						var _e = se.Event(_t.HIDE);
						if (se(this._element)
							.trigger(_e), !_e.isDefaultPrevented()) {
							var ke = this._getDimension();
							this._element.style[ke] = this._element.getBoundingClientRect()[ke] + "px", Te.reflow(this._element), se(this._element)
								.addClass(Tt)
								.removeClass(kt)
								.removeClass(St);
							var Ne = this._triggerArray.length;
							if (0 < Ne)
								for (var Oe = 0; Oe < Ne; Oe++) {
									var Ae = this._triggerArray[Oe],
										Re = Te.getSelectorFromElement(Ae);
									null !== Re && (se([].slice.call(document.querySelectorAll(Re)))
										.hasClass(St) || se(Ae)
										.addClass(xt)
										.attr("aria-expanded", !1))
								}
							this.setTransitioning(!0), this._element.style[ke] = "";
							var je = Te.getTransitionDurationFromElement(this._element);
							se(this._element)
								.one(Te.TRANSITION_END, (function() {
									oe.setTransitioning(!1), se(oe._element)
										.removeClass(Tt)
										.addClass(kt)
										.trigger(_t.HIDDEN)
								}))
								.emulateTransitionEnd(je)
						}
					}
				}, oe.setTransitioning = function(oe) {
					this._isTransitioning = oe
				}, oe.dispose = function() {
					se.removeData(this._element, vt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
				}, oe._getConfig = function(oe) {
					return (oe = l({}, Et, oe))
						.toggle = Boolean(oe.toggle), Te.typeCheckConfig(gt, oe, wt), oe
				}, oe._getDimension = function() {
					return se(this._element)
						.hasClass("width") ? "width" : "height"
				}, oe._getParent = function() {
					var oe, _e = this;
					Te.isElement(this._config.parent) ? (oe = this._config.parent, void 0 !== this._config.parent.jquery && (oe = this._config.parent[0])) : oe = document.querySelector(this._config.parent);
					var ke = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
						Ne = [].slice.call(oe.querySelectorAll(ke));
					return se(Ne)
						.each((function(oe, se) {
							_e._addAriaAndCollapsedClass(a._getTargetFromElement(se), [se])
						})), oe
				}, oe._addAriaAndCollapsedClass = function(oe, _e) {
					var ke = se(oe)
						.hasClass(St);
					_e.length && se(_e)
						.toggleClass(xt, !ke)
						.attr("aria-expanded", ke)
				}, a._getTargetFromElement = function(oe) {
					var se = Te.getSelectorFromElement(oe);
					return se ? document.querySelector(se) : null
				}, a._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this),
							ke = _e.data(vt),
							Te = l({}, Et, _e.data(), "object" == typeof oe && oe ? oe : {});
						if (!ke && Te.toggle && /show|hide/.test(oe) && (Te.toggle = !1), ke || (ke = new a(this, Te), _e.data(vt, ke)), "string" == typeof oe) {
							if (void 0 === ke[oe]) throw new TypeError('No method named "' + oe + '"');
							ke[oe]()
						}
					}))
				}, s(a, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return Et
					}
				}]), a
			}();
		se(document)
			.on(_t.CLICK_DATA_API, Ct, (function(oe) {
				"A" === oe.currentTarget.tagName && oe.preventDefault();
				var _e = se(this),
					ke = Te.getSelectorFromElement(this),
					Ne = [].slice.call(document.querySelectorAll(ke));
				se(Ne)
					.each((function() {
						var oe = se(this),
							ke = oe.data(vt) ? "toggle" : _e.data();
						Nt._jQueryInterface.call(oe, ke)
					}))
			})), se.fn[gt] = Nt._jQueryInterface, se.fn[gt].Constructor = Nt, se.fn[gt].noConflict = function() {
				return se.fn[gt] = yt, Nt._jQueryInterface
			};
		var It = "dropdown",
			Pt = "bs.dropdown",
			Ot = "." + Pt,
			Dt = ".data-api",
			At = se.fn[It],
			Lt = new RegExp("38|40|27"),
			Rt = {
				HIDE: "hide" + Ot,
				HIDDEN: "hidden" + Ot,
				SHOW: "show" + Ot,
				SHOWN: "shown" + Ot,
				CLICK: "click" + Ot,
				CLICK_DATA_API: "click" + Ot + Dt,
				KEYDOWN_DATA_API: "keydown" + Ot + Dt,
				KEYUP_DATA_API: "keyup" + Ot + Dt
			},
			jt = "disabled",
			Mt = "show",
			Ft = "dropdown-menu-right",
			Ht = '[data-toggle="dropdown"]',
			Ut = ".dropdown-menu",
			Bt = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent",
				reference: "toggle",
				display: "dynamic"
			},
			zt = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)",
				reference: "(string|element)",
				display: "string"
			},
			Wt = function() {
				function c(oe, se) {
					this._element = oe, this._popper = null, this._config = this._getConfig(se), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
				}
				var oe = c.prototype;
				return oe.toggle = function() {
					if (!this._element.disabled && !se(this._element)
						.hasClass(jt)) {
						var oe = c._getParentFromElement(this._element),
							ke = se(this._menu)
							.hasClass(Mt);
						if (c._clearMenus(), !ke) {
							var Ne = {
									relatedTarget: this._element
								},
								Oe = se.Event(Rt.SHOW, Ne);
							if (se(oe)
								.trigger(Oe), !Oe.isDefaultPrevented()) {
								if (!this._inNavbar) {
									if (void 0 === _e) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
									var Ae = this._element;
									"parent" === this._config.reference ? Ae = oe : Te.isElement(this._config.reference) && (Ae = this._config.reference, void 0 !== this._config.reference.jquery && (Ae = this._config.reference[0])), "scrollParent" !== this._config.boundary && se(oe)
										.addClass("position-static"), this._popper = new _e(Ae, this._menu, this._getPopperConfig())
								}
								"ontouchstart" in document.documentElement && 0 === se(oe)
									.closest(".navbar-nav")
									.length && se(document.body)
									.children()
									.on("mouseover", null, se.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), se(this._menu)
									.toggleClass(Mt), se(oe)
									.toggleClass(Mt)
									.trigger(se.Event(Rt.SHOWN, Ne))
							}
						}
					}
				}, oe.show = function() {
					if (!(this._element.disabled || se(this._element)
						.hasClass(jt) || se(this._menu)
						.hasClass(Mt))) {
						var oe = {
								relatedTarget: this._element
							},
							_e = se.Event(Rt.SHOW, oe),
							ke = c._getParentFromElement(this._element);
						se(ke)
							.trigger(_e), _e.isDefaultPrevented() || (se(this._menu)
								.toggleClass(Mt), se(ke)
								.toggleClass(Mt)
								.trigger(se.Event(Rt.SHOWN, oe)))
					}
				}, oe.hide = function() {
					if (!this._element.disabled && !se(this._element)
						.hasClass(jt) && se(this._menu)
						.hasClass(Mt)) {
						var oe = {
								relatedTarget: this._element
							},
							_e = se.Event(Rt.HIDE, oe),
							ke = c._getParentFromElement(this._element);
						se(ke)
							.trigger(_e), _e.isDefaultPrevented() || (se(this._menu)
								.toggleClass(Mt), se(ke)
								.toggleClass(Mt)
								.trigger(se.Event(Rt.HIDDEN, oe)))
					}
				}, oe.dispose = function() {
					se.removeData(this._element, Pt), se(this._element)
						.off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
				}, oe.update = function() {
					this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
				}, oe._addEventListeners = function() {
					var oe = this;
					se(this._element)
						.on(Rt.CLICK, (function(se) {
							se.preventDefault(), se.stopPropagation(), oe.toggle()
						}))
				}, oe._getConfig = function(oe) {
					return oe = l({}, this.constructor.Default, se(this._element)
						.data(), oe), Te.typeCheckConfig(It, oe, this.constructor.DefaultType), oe
				}, oe._getMenuElement = function() {
					if (!this._menu) {
						var oe = c._getParentFromElement(this._element);
						oe && (this._menu = oe.querySelector(Ut))
					}
					return this._menu
				}, oe._getPlacement = function() {
					var oe = se(this._element.parentNode),
						_e = "bottom-start";
					return oe.hasClass("dropup") ? (_e = "top-start", se(this._menu)
							.hasClass(Ft) && (_e = "top-end")) : oe.hasClass("dropright") ? _e = "right-start" : oe.hasClass("dropleft") ? _e = "left-start" : se(this._menu)
						.hasClass(Ft) && (_e = "bottom-end"), _e
				}, oe._detectNavbar = function() {
					return 0 < se(this._element)
						.closest(".navbar")
						.length
				}, oe._getOffset = function() {
					var oe = this,
						se = {};
					return "function" == typeof this._config.offset ? se.fn = function(se) {
						return se.offsets = l({}, se.offsets, oe._config.offset(se.offsets, oe._element) || {}), se
					} : se.offset = this._config.offset, se
				}, oe._getPopperConfig = function() {
					var oe = {
						placement: this._getPlacement(),
						modifiers: {
							offset: this._getOffset(),
							flip: {
								enabled: this._config.flip
							},
							preventOverflow: {
								boundariesElement: this._config.boundary
							}
						}
					};
					return "static" === this._config.display && (oe.modifiers.applyStyle = {
						enabled: !1
					}), oe
				}, c._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this)
							.data(Pt);
						if (_e || (_e = new c(this, "object" == typeof oe ? oe : null), se(this)
							.data(Pt, _e)), "string" == typeof oe) {
							if (void 0 === _e[oe]) throw new TypeError('No method named "' + oe + '"');
							_e[oe]()
						}
					}))
				}, c._clearMenus = function(oe) {
					if (!oe || 3 !== oe.which && ("keyup" !== oe.type || 9 === oe.which))
						for (var _e = [].slice.call(document.querySelectorAll(Ht)), ke = 0, Te = _e.length; ke < Te; ke++) {
							var Ne = c._getParentFromElement(_e[ke]),
								Oe = se(_e[ke])
								.data(Pt),
								Ae = {
									relatedTarget: _e[ke]
								};
							if (oe && "click" === oe.type && (Ae.clickEvent = oe), Oe) {
								var Re = Oe._menu;
								if (se(Ne)
									.hasClass(Mt) && !(oe && ("click" === oe.type && /input|textarea/i.test(oe.target.tagName) || "keyup" === oe.type && 9 === oe.which) && se.contains(Ne, oe.target))) {
									var je = se.Event(Rt.HIDE, Ae);
									se(Ne)
										.trigger(je), je.isDefaultPrevented() || ("ontouchstart" in document.documentElement && se(document.body)
											.children()
											.off("mouseover", null, se.noop), _e[ke].setAttribute("aria-expanded", "false"), se(Re)
											.removeClass(Mt), se(Ne)
											.removeClass(Mt)
											.trigger(se.Event(Rt.HIDDEN, Ae)))
								}
							}
						}
				}, c._getParentFromElement = function(oe) {
					var se, _e = Te.getSelectorFromElement(oe);
					return _e && (se = document.querySelector(_e)), se || oe.parentNode
				}, c._dataApiKeydownHandler = function(oe) {
					if ((/input|textarea/i.test(oe.target.tagName) ? !(32 === oe.which || 27 !== oe.which && (40 !== oe.which && 38 !== oe.which || se(oe.target)
						.closest(Ut)
						.length)) : Lt.test(oe.which)) && (oe.preventDefault(), oe.stopPropagation(), !this.disabled && !se(this)
						.hasClass(jt))) {
						var _e = c._getParentFromElement(this),
							ke = se(_e)
							.hasClass(Mt);
						if (ke && (!ke || 27 !== oe.which && 32 !== oe.which)) {
							var Te = [].slice.call(_e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
							if (0 !== Te.length) {
								var Ne = Te.indexOf(oe.target);
								38 === oe.which && 0 < Ne && Ne--, 40 === oe.which && Ne < Te.length - 1 && Ne++, Ne < 0 && (Ne = 0), Te[Ne].focus()
							}
						} else {
							if (27 === oe.which) {
								var Oe = _e.querySelector(Ht);
								se(Oe)
									.trigger("focus")
							}
							se(this)
								.trigger("click")
						}
					}
				}, s(c, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return Bt
					}
				}, {
					key: "DefaultType",
					get: function() {
						return zt
					}
				}]), c
			}();
		se(document)
			.on(Rt.KEYDOWN_DATA_API, Ht, Wt._dataApiKeydownHandler)
			.on(Rt.KEYDOWN_DATA_API, Ut, Wt._dataApiKeydownHandler)
			.on(Rt.CLICK_DATA_API + " " + Rt.KEYUP_DATA_API, Wt._clearMenus)
			.on(Rt.CLICK_DATA_API, Ht, (function(oe) {
				oe.preventDefault(), oe.stopPropagation(), Wt._jQueryInterface.call(se(this), "toggle")
			}))
			.on(Rt.CLICK_DATA_API, ".dropdown form", (function(oe) {
				oe.stopPropagation()
			})), se.fn[It] = Wt._jQueryInterface, se.fn[It].Constructor = Wt, se.fn[It].noConflict = function() {
				return se.fn[It] = At, Wt._jQueryInterface
			};
		var Vt = "modal",
			Qt = "bs.modal",
			qt = "." + Qt,
			Gt = se.fn[Vt],
			Kt = {
				backdrop: !0,
				keyboard: !0,
				focus: !0,
				show: !0
			},
			Yt = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean"
			},
			Jt = {
				HIDE: "hide" + qt,
				HIDDEN: "hidden" + qt,
				SHOW: "show" + qt,
				SHOWN: "shown" + qt,
				FOCUSIN: "focusin" + qt,
				RESIZE: "resize" + qt,
				CLICK_DISMISS: "click.dismiss" + qt,
				KEYDOWN_DISMISS: "keydown.dismiss" + qt,
				MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
				MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
				CLICK_DATA_API: "click" + qt + ".data-api"
			},
			Xt = "modal-open",
			$t = "fade",
			Zt = "show",
			en = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			tn = ".sticky-top",
			nn = function() {
				function o(oe, se) {
					this._config = this._getConfig(se), this._element = oe, this._dialog = oe.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
				}
				var oe = o.prototype;
				return oe.toggle = function(oe) {
					return this._isShown ? this.hide() : this.show(oe)
				}, oe.show = function(oe) {
					var _e = this;
					if (!this._isShown && !this._isTransitioning) {
						se(this._element)
							.hasClass($t) && (this._isTransitioning = !0);
						var ke = se.Event(Jt.SHOW, {
							relatedTarget: oe
						});
						se(this._element)
							.trigger(ke), this._isShown || ke.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), se(this._element)
								.on(Jt.CLICK_DISMISS, '[data-dismiss="modal"]', (function(oe) {
									return _e.hide(oe)
								})), se(this._dialog)
								.on(Jt.MOUSEDOWN_DISMISS, (function() {
									se(_e._element)
										.one(Jt.MOUSEUP_DISMISS, (function(oe) {
											se(oe.target)
												.is(_e._element) && (_e._ignoreBackdropClick = !0)
										}))
								})), this._showBackdrop((function() {
									return _e._showElement(oe)
								})))
					}
				}, oe.hide = function(oe) {
					var _e = this;
					if (oe && oe.preventDefault(), this._isShown && !this._isTransitioning) {
						var ke = se.Event(Jt.HIDE);
						if (se(this._element)
							.trigger(ke), this._isShown && !ke.isDefaultPrevented()) {
							this._isShown = !1;
							var Ne = se(this._element)
								.hasClass($t);
							if (Ne && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), se(document)
								.off(Jt.FOCUSIN), se(this._element)
								.removeClass(Zt), se(this._element)
								.off(Jt.CLICK_DISMISS), se(this._dialog)
								.off(Jt.MOUSEDOWN_DISMISS), Ne) {
								var Oe = Te.getTransitionDurationFromElement(this._element);
								se(this._element)
									.one(Te.TRANSITION_END, (function(oe) {
										return _e._hideModal(oe)
									}))
									.emulateTransitionEnd(Oe)
							} else this._hideModal()
						}
					}
				}, oe.dispose = function() {
					[window, this._element, this._dialog].forEach((function(oe) {
							return se(oe)
								.off(qt)
						})), se(document)
						.off(Jt.FOCUSIN), se.removeData(this._element, Qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
				}, oe.handleUpdate = function() {
					this._adjustDialog()
				}, oe._getConfig = function(oe) {
					return oe = l({}, Kt, oe), Te.typeCheckConfig(Vt, oe, Yt), oe
				}, oe._showElement = function(oe) {
					var _e = this,
						ke = se(this._element)
						.hasClass($t);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), se(this._dialog)
						.hasClass("modal-dialog-scrollable") ? this._dialog.querySelector(".modal-body")
						.scrollTop = 0 : this._element.scrollTop = 0, ke && Te.reflow(this._element), se(this._element)
						.addClass(Zt), this._config.focus && this._enforceFocus();
					var Ne = se.Event(Jt.SHOWN, {
							relatedTarget: oe
						}),
						o = function() {
							_e._config.focus && _e._element.focus(), _e._isTransitioning = !1, se(_e._element)
								.trigger(Ne)
						};
					if (ke) {
						var Oe = Te.getTransitionDurationFromElement(this._dialog);
						se(this._dialog)
							.one(Te.TRANSITION_END, o)
							.emulateTransitionEnd(Oe)
					} else o()
				}, oe._enforceFocus = function() {
					var oe = this;
					se(document)
						.off(Jt.FOCUSIN)
						.on(Jt.FOCUSIN, (function(_e) {
							document !== _e.target && oe._element !== _e.target && 0 === se(oe._element)
								.has(_e.target)
								.length && oe._element.focus()
						}))
				}, oe._setEscapeEvent = function() {
					var oe = this;
					this._isShown && this._config.keyboard ? se(this._element)
						.on(Jt.KEYDOWN_DISMISS, (function(se) {
							27 === se.which && (se.preventDefault(), oe.hide())
						})) : this._isShown || se(this._element)
						.off(Jt.KEYDOWN_DISMISS)
				}, oe._setResizeEvent = function() {
					var oe = this;
					this._isShown ? se(window)
						.on(Jt.RESIZE, (function(se) {
							return oe.handleUpdate(se)
						})) : se(window)
						.off(Jt.RESIZE)
				}, oe._hideModal = function() {
					var oe = this;
					this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
						se(document.body)
							.removeClass(Xt), oe._resetAdjustments(), oe._resetScrollbar(), se(oe._element)
							.trigger(Jt.HIDDEN)
					}))
				}, oe._removeBackdrop = function() {
					this._backdrop && (se(this._backdrop)
						.remove(), this._backdrop = null)
				}, oe._showBackdrop = function(oe) {
					var _e = this,
						ke = se(this._element)
						.hasClass($t) ? $t : "";
					if (this._isShown && this._config.backdrop) {
						if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", ke && this._backdrop.classList.add(ke), se(this._backdrop)
							.appendTo(document.body), se(this._element)
							.on(Jt.CLICK_DISMISS, (function(oe) {
								_e._ignoreBackdropClick ? _e._ignoreBackdropClick = !1 : oe.target === oe.currentTarget && ("static" === _e._config.backdrop ? _e._element.focus() : _e.hide())
							})), ke && Te.reflow(this._backdrop), se(this._backdrop)
							.addClass(Zt), !oe) return;
						if (!ke) return void oe();
						var Ne = Te.getTransitionDurationFromElement(this._backdrop);
						se(this._backdrop)
							.one(Te.TRANSITION_END, oe)
							.emulateTransitionEnd(Ne)
					} else if (!this._isShown && this._backdrop) {
						se(this._backdrop)
							.removeClass(Zt);
						var o = function() {
							_e._removeBackdrop(), oe && oe()
						};
						if (se(this._element)
							.hasClass($t)) {
							var Oe = Te.getTransitionDurationFromElement(this._backdrop);
							se(this._backdrop)
								.one(Te.TRANSITION_END, o)
								.emulateTransitionEnd(Oe)
						} else o()
					} else oe && oe()
				}, oe._adjustDialog = function() {
					var oe = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && oe && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !oe && (this._element.style.paddingRight = this._scrollbarWidth + "px")
				}, oe._resetAdjustments = function() {
					this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
				}, oe._checkScrollbar = function() {
					var oe = document.body.getBoundingClientRect();
					this._isBodyOverflowing = oe.left + oe.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
				}, oe._setScrollbar = function() {
					var oe = this;
					if (this._isBodyOverflowing) {
						var _e = [].slice.call(document.querySelectorAll(en)),
							ke = [].slice.call(document.querySelectorAll(tn));
						se(_e)
							.each((function(_e, ke) {
								var Te = ke.style.paddingRight,
									Ne = se(ke)
									.css("padding-right");
								se(ke)
									.data("padding-right", Te)
									.css("padding-right", parseFloat(Ne) + oe._scrollbarWidth + "px")
							})), se(ke)
							.each((function(_e, ke) {
								var Te = ke.style.marginRight,
									Ne = se(ke)
									.css("margin-right");
								se(ke)
									.data("margin-right", Te)
									.css("margin-right", parseFloat(Ne) - oe._scrollbarWidth + "px")
							}));
						var Te = document.body.style.paddingRight,
							Ne = se(document.body)
							.css("padding-right");
						se(document.body)
							.data("padding-right", Te)
							.css("padding-right", parseFloat(Ne) + this._scrollbarWidth + "px")
					}
					se(document.body)
						.addClass(Xt)
				}, oe._resetScrollbar = function() {
					var oe = [].slice.call(document.querySelectorAll(en));
					se(oe)
						.each((function(oe, _e) {
							var ke = se(_e)
								.data("padding-right");
							se(_e)
								.removeData("padding-right"), _e.style.paddingRight = ke || ""
						}));
					var _e = [].slice.call(document.querySelectorAll("" + tn));
					se(_e)
						.each((function(oe, _e) {
							var ke = se(_e)
								.data("margin-right");
							void 0 !== ke && se(_e)
								.css("margin-right", ke)
								.removeData("margin-right")
						}));
					var ke = se(document.body)
						.data("padding-right");
					se(document.body)
						.removeData("padding-right"), document.body.style.paddingRight = ke || ""
				}, oe._getScrollbarWidth = function() {
					var oe = document.createElement("div");
					oe.className = "modal-scrollbar-measure", document.body.appendChild(oe);
					var se = oe.getBoundingClientRect()
						.width - oe.clientWidth;
					return document.body.removeChild(oe), se
				}, o._jQueryInterface = function(oe, _e) {
					return this.each((function() {
						var ke = se(this)
							.data(Qt),
							Te = l({}, Kt, se(this)
								.data(), "object" == typeof oe && oe ? oe : {});
						if (ke || (ke = new o(this, Te), se(this)
							.data(Qt, ke)), "string" == typeof oe) {
							if (void 0 === ke[oe]) throw new TypeError('No method named "' + oe + '"');
							ke[oe](_e)
						} else Te.show && ke.show(_e)
					}))
				}, s(o, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return Kt
					}
				}]), o
			}();
		se(document)
			.on(Jt.CLICK_DATA_API, '[data-toggle="modal"]', (function(oe) {
				var _e, ke = this,
					Ne = Te.getSelectorFromElement(this);
				Ne && (_e = document.querySelector(Ne));
				var Oe = se(_e)
					.data(Qt) ? "toggle" : l({}, se(_e)
						.data(), se(this)
						.data());
				"A" !== this.tagName && "AREA" !== this.tagName || oe.preventDefault();
				var Ae = se(_e)
					.one(Jt.SHOW, (function(oe) {
						oe.isDefaultPrevented() || Ae.one(Jt.HIDDEN, (function() {
							se(ke)
								.is(":visible") && ke.focus()
						}))
					}));
				nn._jQueryInterface.call(se(_e), Oe, this)
			})), se.fn[Vt] = nn._jQueryInterface, se.fn[Vt].Constructor = nn, se.fn[Vt].noConflict = function() {
				return se.fn[Vt] = Gt, nn._jQueryInterface
			};
		var rn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
			on = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
			an = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

		function Se(oe, se, _e) {
			if (0 === oe.length) return oe;
			if (_e && "function" == typeof _e) return _e(oe);
			for (var ke = (new window.DOMParser)
				.parseFromString(oe, "text/html"), Te = Object.keys(se), Ne = [].slice.call(ke.body.querySelectorAll("*")), i = function(oe, _e) {
					var ke = Ne[oe],
						Oe = ke.nodeName.toLowerCase();
					if (-1 === Te.indexOf(ke.nodeName.toLowerCase())) return ke.parentNode.removeChild(ke), "continue";
					var Ae = [].slice.call(ke.attributes),
						Re = [].concat(se["*"] || [], se[Oe] || []);
					Ae.forEach((function(oe) {
						(function(oe, se) {
							var _e = oe.nodeName.toLowerCase();
							if (-1 !== se.indexOf(_e)) return -1 === rn.indexOf(_e) || Boolean(oe.nodeValue.match(on) || oe.nodeValue.match(an));
							for (var ke = se.filter((function(oe) {
								return oe instanceof RegExp
							})), Te = 0, Ne = ke.length; Te < Ne; Te++)
								if (_e.match(ke[Te])) return !0;
							return !1
						})(oe, Re) || ke.removeAttribute(oe.nodeName)
					}))
				}, Oe = 0, Ae = Ne.length; Oe < Ae; Oe++) i(Oe);
			return ke.body.innerHTML
		}
		var ln = "tooltip",
			sn = "bs.tooltip",
			cn = "." + sn,
			un = se.fn[ln],
			dn = "bs-tooltip",
			fn = new RegExp("(^|\\s)" + dn + "\\S+", "g"),
			hn = ["sanitize", "whiteList", "sanitizeFn"],
			pn = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string|function)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)",
				sanitize: "boolean",
				sanitizeFn: "(null|function)",
				whiteList: "object"
			},
			mn = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left"
			},
			gn = {
				animation: !0,
				template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent",
				sanitize: !0,
				sanitizeFn: null,
				whiteList: {
					"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
					a: ["target", "href", "title", "rel"],
					area: [],
					b: [],
					br: [],
					col: [],
					code: [],
					div: [],
					em: [],
					hr: [],
					h1: [],
					h2: [],
					h3: [],
					h4: [],
					h5: [],
					h6: [],
					i: [],
					img: ["src", "alt", "title", "width", "height"],
					li: [],
					ol: [],
					p: [],
					pre: [],
					s: [],
					small: [],
					span: [],
					sub: [],
					sup: [],
					strong: [],
					u: [],
					ul: []
				}
			},
			vn = "show",
			bn = {
				HIDE: "hide" + cn,
				HIDDEN: "hidden" + cn,
				SHOW: "show" + cn,
				SHOWN: "shown" + cn,
				INSERTED: "inserted" + cn,
				CLICK: "click" + cn,
				FOCUSIN: "focusin" + cn,
				FOCUSOUT: "focusout" + cn,
				MOUSEENTER: "mouseenter" + cn,
				MOUSELEAVE: "mouseleave" + cn
			},
			yn = "fade",
			En = "show",
			wn = "hover",
			_n = "focus",
			Sn = function() {
				function i(oe, se) {
					if (void 0 === _e) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
					this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = oe, this.config = this._getConfig(se), this.tip = null, this._setListeners()
				}
				var oe = i.prototype;
				return oe.enable = function() {
					this._isEnabled = !0
				}, oe.disable = function() {
					this._isEnabled = !1
				}, oe.toggleEnabled = function() {
					this._isEnabled = !this._isEnabled
				}, oe.toggle = function(oe) {
					if (this._isEnabled)
						if (oe) {
							var _e = this.constructor.DATA_KEY,
								ke = se(oe.currentTarget)
								.data(_e);
							ke || (ke = new this.constructor(oe.currentTarget, this._getDelegateConfig()), se(oe.currentTarget)
								.data(_e, ke)), ke._activeTrigger.click = !ke._activeTrigger.click, ke._isWithActiveTrigger() ? ke._enter(null, ke) : ke._leave(null, ke)
						} else {
							if (se(this.getTipElement())
								.hasClass(En)) return void this._leave(null, this);
							this._enter(null, this)
						}
				}, oe.dispose = function() {
					clearTimeout(this._timeout), se.removeData(this.element, this.constructor.DATA_KEY), se(this.element)
						.off(this.constructor.EVENT_KEY), se(this.element)
						.closest(".modal")
						.off("hide.bs.modal"), this.tip && se(this.tip)
						.remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
				}, oe.show = function() {
					var oe = this;
					if ("none" === se(this.element)
						.css("display")) throw new Error("Please use show on visible elements");
					var ke = se.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
						se(this.element)
							.trigger(ke);
						var Ne = Te.findShadowRoot(this.element),
							Oe = se.contains(null !== Ne ? Ne : this.element.ownerDocument.documentElement, this.element);
						if (ke.isDefaultPrevented() || !Oe) return;
						var Ae = this.getTipElement(),
							Re = Te.getUID(this.constructor.NAME);
						Ae.setAttribute("id", Re), this.element.setAttribute("aria-describedby", Re), this.setContent(), this.config.animation && se(Ae)
							.addClass(yn);
						var je = "function" == typeof this.config.placement ? this.config.placement.call(this, Ae, this.element) : this.config.placement,
							Me = this._getAttachment(je);
						this.addAttachmentClass(Me);
						var Fe = this._getContainer();
						se(Ae)
							.data(this.constructor.DATA_KEY, this), se.contains(this.element.ownerDocument.documentElement, this.tip) || se(Ae)
							.appendTo(Fe), se(this.element)
							.trigger(this.constructor.Event.INSERTED), this._popper = new _e(this.element, Ae, {
								placement: Me,
								modifiers: {
									offset: this._getOffset(),
									flip: {
										behavior: this.config.fallbackPlacement
									},
									arrow: {
										element: ".arrow"
									},
									preventOverflow: {
										boundariesElement: this.config.boundary
									}
								},
								onCreate: function(se) {
									se.originalPlacement !== se.placement && oe._handlePopperPlacementChange(se)
								},
								onUpdate: function(se) {
									return oe._handlePopperPlacementChange(se)
								}
							}), se(Ae)
							.addClass(En), "ontouchstart" in document.documentElement && se(document.body)
							.children()
							.on("mouseover", null, se.noop);
						var c = function() {
							oe.config.animation && oe._fixTransition();
							var _e = oe._hoverState;
							oe._hoverState = null, se(oe.element)
								.trigger(oe.constructor.Event.SHOWN), "out" === _e && oe._leave(null, oe)
						};
						if (se(this.tip)
							.hasClass(yn)) {
							var Ue = Te.getTransitionDurationFromElement(this.tip);
							se(this.tip)
								.one(Te.TRANSITION_END, c)
								.emulateTransitionEnd(Ue)
						} else c()
					}
				}, oe.hide = function(oe) {
					var _e = this,
						ke = this.getTipElement(),
						Ne = se.Event(this.constructor.Event.HIDE),
						o = function() {
							_e._hoverState !== vn && ke.parentNode && ke.parentNode.removeChild(ke), _e._cleanTipClass(), _e.element.removeAttribute("aria-describedby"), se(_e.element)
								.trigger(_e.constructor.Event.HIDDEN), null !== _e._popper && _e._popper.destroy(), oe && oe()
						};
					if (se(this.element)
						.trigger(Ne), !Ne.isDefaultPrevented()) {
						if (se(ke)
							.removeClass(En), "ontouchstart" in document.documentElement && se(document.body)
							.children()
							.off("mouseover", null, se.noop), this._activeTrigger.click = !1, this._activeTrigger[_n] = !1, this._activeTrigger[wn] = !1, se(this.tip)
							.hasClass(yn)) {
							var Oe = Te.getTransitionDurationFromElement(ke);
							se(ke)
								.one(Te.TRANSITION_END, o)
								.emulateTransitionEnd(Oe)
						} else o();
						this._hoverState = ""
					}
				}, oe.update = function() {
					null !== this._popper && this._popper.scheduleUpdate()
				}, oe.isWithContent = function() {
					return Boolean(this.getTitle())
				}, oe.addAttachmentClass = function(oe) {
					se(this.getTipElement())
						.addClass(dn + "-" + oe)
				}, oe.getTipElement = function() {
					return this.tip = this.tip || se(this.config.template)[0], this.tip
				}, oe.setContent = function() {
					var oe = this.getTipElement();
					this.setElementContent(se(oe.querySelectorAll(".tooltip-inner")), this.getTitle()), se(oe)
						.removeClass(yn + " " + En)
				}, oe.setElementContent = function(oe, _e) {
					"object" != typeof _e || !_e.nodeType && !_e.jquery ? this.config.html ? (this.config.sanitize && (_e = Se(_e, this.config.whiteList, this.config.sanitizeFn)), oe.html(_e)) : oe.text(_e) : this.config.html ? se(_e)
						.parent()
						.is(oe) || oe.empty()
						.append(_e) : oe.text(se(_e)
							.text())
				}, oe.getTitle = function() {
					var oe = this.element.getAttribute("data-original-title");
					return oe || (oe = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), oe
				}, oe._getOffset = function() {
					var oe = this,
						se = {};
					return "function" == typeof this.config.offset ? se.fn = function(se) {
						return se.offsets = l({}, se.offsets, oe.config.offset(se.offsets, oe.element) || {}), se
					} : se.offset = this.config.offset, se
				}, oe._getContainer = function() {
					return !1 === this.config.container ? document.body : Te.isElement(this.config.container) ? se(this.config.container) : se(document)
						.find(this.config.container)
				}, oe._getAttachment = function(oe) {
					return mn[oe.toUpperCase()]
				}, oe._setListeners = function() {
					var oe = this;
					this.config.trigger.split(" ")
						.forEach((function(_e) {
							if ("click" === _e) se(oe.element)
								.on(oe.constructor.Event.CLICK, oe.config.selector, (function(se) {
									return oe.toggle(se)
								}));
							else if ("manual" !== _e) {
								var ke = _e === wn ? oe.constructor.Event.MOUSEENTER : oe.constructor.Event.FOCUSIN,
									Te = _e === wn ? oe.constructor.Event.MOUSELEAVE : oe.constructor.Event.FOCUSOUT;
								se(oe.element)
									.on(ke, oe.config.selector, (function(se) {
										return oe._enter(se)
									}))
									.on(Te, oe.config.selector, (function(se) {
										return oe._leave(se)
									}))
							}
						})), se(this.element)
						.closest(".modal")
						.on("hide.bs.modal", (function() {
							oe.element && oe.hide()
						})), this.config.selector ? this.config = l({}, this.config, {
							trigger: "manual",
							selector: ""
						}) : this._fixTitle()
				}, oe._fixTitle = function() {
					var oe = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== oe) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
				}, oe._enter = function(oe, _e) {
					var ke = this.constructor.DATA_KEY;
					(_e = _e || se(oe.currentTarget)
						.data(ke)) || (_e = new this.constructor(oe.currentTarget, this._getDelegateConfig()), se(oe.currentTarget)
						.data(ke, _e)), oe && (_e._activeTrigger["focusin" === oe.type ? _n : wn] = !0), se(_e.getTipElement())
						.hasClass(En) || _e._hoverState === vn ? _e._hoverState = vn : (clearTimeout(_e._timeout), _e._hoverState = vn, _e.config.delay && _e.config.delay.show ? _e._timeout = setTimeout((function() {
							_e._hoverState === vn && _e.show()
						}), _e.config.delay.show) : _e.show())
				}, oe._leave = function(oe, _e) {
					var ke = this.constructor.DATA_KEY;
					(_e = _e || se(oe.currentTarget)
						.data(ke)) || (_e = new this.constructor(oe.currentTarget, this._getDelegateConfig()), se(oe.currentTarget)
						.data(ke, _e)), oe && (_e._activeTrigger["focusout" === oe.type ? _n : wn] = !1), _e._isWithActiveTrigger() || (clearTimeout(_e._timeout), _e._hoverState = "out", _e.config.delay && _e.config.delay.hide ? _e._timeout = setTimeout((function() {
						"out" === _e._hoverState && _e.hide()
					}), _e.config.delay.hide) : _e.hide())
				}, oe._isWithActiveTrigger = function() {
					for (var oe in this._activeTrigger)
						if (this._activeTrigger[oe]) return !0;
					return !1
				}, oe._getConfig = function(oe) {
					var _e = se(this.element)
						.data();
					return Object.keys(_e)
						.forEach((function(oe) {
							-1 !== hn.indexOf(oe) && delete _e[oe]
						})), "number" == typeof(oe = l({}, this.constructor.Default, _e, "object" == typeof oe && oe ? oe : {}))
						.delay && (oe.delay = {
							show: oe.delay,
							hide: oe.delay
						}), "number" == typeof oe.title && (oe.title = oe.title.toString()), "number" == typeof oe.content && (oe.content = oe.content.toString()), Te.typeCheckConfig(ln, oe, this.constructor.DefaultType), oe.sanitize && (oe.template = Se(oe.template, oe.whiteList, oe.sanitizeFn)), oe
				}, oe._getDelegateConfig = function() {
					var oe = {};
					if (this.config)
						for (var se in this.config) this.constructor.Default[se] !== this.config[se] && (oe[se] = this.config[se]);
					return oe
				}, oe._cleanTipClass = function() {
					var oe = se(this.getTipElement()),
						_e = oe.attr("class")
						.match(fn);
					null !== _e && _e.length && oe.removeClass(_e.join(""))
				}, oe._handlePopperPlacementChange = function(oe) {
					var se = oe.instance;
					this.tip = se.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(oe.placement))
				}, oe._fixTransition = function() {
					var oe = this.getTipElement(),
						_e = this.config.animation;
					null === oe.getAttribute("x-placement") && (se(oe)
						.removeClass(yn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = _e)
				}, i._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this)
							.data(sn),
							ke = "object" == typeof oe && oe;
						if ((_e || !/dispose|hide/.test(oe)) && (_e || (_e = new i(this, ke), se(this)
							.data(sn, _e)), "string" == typeof oe)) {
							if (void 0 === _e[oe]) throw new TypeError('No method named "' + oe + '"');
							_e[oe]()
						}
					}))
				}, s(i, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return gn
					}
				}, {
					key: "NAME",
					get: function() {
						return ln
					}
				}, {
					key: "DATA_KEY",
					get: function() {
						return sn
					}
				}, {
					key: "Event",
					get: function() {
						return bn
					}
				}, {
					key: "EVENT_KEY",
					get: function() {
						return cn
					}
				}, {
					key: "DefaultType",
					get: function() {
						return pn
					}
				}]), i
			}();
		se.fn[ln] = Sn._jQueryInterface, se.fn[ln].Constructor = Sn, se.fn[ln].noConflict = function() {
			return se.fn[ln] = un, Sn._jQueryInterface
		};
		var kn = "popover",
			Tn = "bs.popover",
			xn = "." + Tn,
			Cn = se.fn[kn],
			Nn = "bs-popover",
			In = new RegExp("(^|\\s)" + Nn + "\\S+", "g"),
			Pn = l({}, Sn.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
			}),
			On = l({}, Sn.DefaultType, {
				content: "(string|element|function)"
			}),
			Dn = {
				HIDE: "hide" + xn,
				HIDDEN: "hidden" + xn,
				SHOW: "show" + xn,
				SHOWN: "shown" + xn,
				INSERTED: "inserted" + xn,
				CLICK: "click" + xn,
				FOCUSIN: "focusin" + xn,
				FOCUSOUT: "focusout" + xn,
				MOUSEENTER: "mouseenter" + xn,
				MOUSELEAVE: "mouseleave" + xn
			},
			An = function(oe) {
				var _e, ke;

				function i() {
					return oe.apply(this, arguments) || this
				}
				ke = oe, (_e = i)
					.prototype = Object.create(ke.prototype), (_e.prototype.constructor = _e)
					.__proto__ = ke;
				var Te = i.prototype;
				return Te.isWithContent = function() {
					return this.getTitle() || this._getContent()
				}, Te.addAttachmentClass = function(oe) {
					se(this.getTipElement())
						.addClass(Nn + "-" + oe)
				}, Te.getTipElement = function() {
					return this.tip = this.tip || se(this.config.template)[0], this.tip
				}, Te.setContent = function() {
					var oe = se(this.getTipElement());
					this.setElementContent(oe.find(".popover-header"), this.getTitle());
					var _e = this._getContent();
					"function" == typeof _e && (_e = _e.call(this.element)), this.setElementContent(oe.find(".popover-body"), _e), oe.removeClass("fade show")
				}, Te._getContent = function() {
					return this.element.getAttribute("data-content") || this.config.content
				}, Te._cleanTipClass = function() {
					var oe = se(this.getTipElement()),
						_e = oe.attr("class")
						.match(In);
					null !== _e && 0 < _e.length && oe.removeClass(_e.join(""))
				}, i._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this)
							.data(Tn),
							ke = "object" == typeof oe ? oe : null;
						if ((_e || !/dispose|hide/.test(oe)) && (_e || (_e = new i(this, ke), se(this)
							.data(Tn, _e)), "string" == typeof oe)) {
							if (void 0 === _e[oe]) throw new TypeError('No method named "' + oe + '"');
							_e[oe]()
						}
					}))
				}, s(i, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return Pn
					}
				}, {
					key: "NAME",
					get: function() {
						return kn
					}
				}, {
					key: "DATA_KEY",
					get: function() {
						return Tn
					}
				}, {
					key: "Event",
					get: function() {
						return Dn
					}
				}, {
					key: "EVENT_KEY",
					get: function() {
						return xn
					}
				}, {
					key: "DefaultType",
					get: function() {
						return On
					}
				}]), i
			}(Sn);
		se.fn[kn] = An._jQueryInterface, se.fn[kn].Constructor = An, se.fn[kn].noConflict = function() {
			return se.fn[kn] = Cn, An._jQueryInterface
		};
		var Ln = "scrollspy",
			Rn = "bs.scrollspy",
			jn = "." + Rn,
			Mn = se.fn[Ln],
			Fn = {
				offset: 10,
				method: "auto",
				target: ""
			},
			Hn = {
				offset: "number",
				method: "string",
				target: "(string|element)"
			},
			Un = {
				ACTIVATE: "activate" + jn,
				SCROLL: "scroll" + jn,
				LOAD_DATA_API: "load" + jn + ".data-api"
			},
			Bn = "active",
			zn = ".nav, .list-group",
			Wn = ".nav-link",
			Vn = ".list-group-item",
			Qn = "position",
			qn = function() {
				function n(oe, _e) {
					var ke = this;
					this._element = oe, this._scrollElement = "BODY" === oe.tagName ? window : oe, this._config = this._getConfig(_e), this._selector = this._config.target + " " + Wn + "," + this._config.target + " " + Vn + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, se(this._scrollElement)
						.on(Un.SCROLL, (function(oe) {
							return ke._process(oe)
						})), this.refresh(), this._process()
				}
				var oe = n.prototype;
				return oe.refresh = function() {
					var oe = this,
						_e = this._scrollElement === this._scrollElement.window ? "offset" : Qn,
						ke = "auto" === this._config.method ? _e : this._config.method,
						Ne = ke === Qn ? this._getScrollTop() : 0;
					this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector))
						.map((function(oe) {
							var _e, Oe = Te.getSelectorFromElement(oe);
							if (Oe && (_e = document.querySelector(Oe)), _e) {
								var Ae = _e.getBoundingClientRect();
								if (Ae.width || Ae.height) return [se(_e)[ke]()
									.top + Ne, Oe
								]
							}
							return null
						}))
						.filter((function(oe) {
							return oe
						}))
						.sort((function(oe, se) {
							return oe[0] - se[0]
						}))
						.forEach((function(se) {
							oe._offsets.push(se[0]), oe._targets.push(se[1])
						}))
				}, oe.dispose = function() {
					se.removeData(this._element, Rn), se(this._scrollElement)
						.off(jn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
				}, oe._getConfig = function(oe) {
					if ("string" != typeof(oe = l({}, Fn, "object" == typeof oe && oe ? oe : {}))
						.target) {
						var _e = se(oe.target)
							.attr("id");
						_e || (_e = Te.getUID(Ln), se(oe.target)
							.attr("id", _e)), oe.target = "#" + _e
					}
					return Te.typeCheckConfig(Ln, oe, Hn), oe
				}, oe._getScrollTop = function() {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
				}, oe._getScrollHeight = function() {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}, oe._getOffsetHeight = function() {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect()
						.height
				}, oe._process = function() {
					var oe = this._getScrollTop() + this._config.offset,
						se = this._getScrollHeight(),
						_e = this._config.offset + se - this._getOffsetHeight();
					if (this._scrollHeight !== se && this.refresh(), _e <= oe) {
						var ke = this._targets[this._targets.length - 1];
						this._activeTarget !== ke && this._activate(ke)
					} else {
						if (this._activeTarget && oe < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
						for (var Te = this._offsets.length; Te--;) this._activeTarget !== this._targets[Te] && oe >= this._offsets[Te] && (void 0 === this._offsets[Te + 1] || oe < this._offsets[Te + 1]) && this._activate(this._targets[Te])
					}
				}, oe._activate = function(oe) {
					this._activeTarget = oe, this._clear();
					var _e = this._selector.split(",")
						.map((function(se) {
							return se + '[data-target="' + oe + '"],' + se + '[href="' + oe + '"]'
						})),
						ke = se([].slice.call(document.querySelectorAll(_e.join(","))));
					ke.hasClass("dropdown-item") ? (ke.closest(".dropdown")
							.find(".dropdown-toggle")
							.addClass(Bn), ke.addClass(Bn)) : (ke.addClass(Bn), ke.parents(zn)
							.prev(Wn + ", " + Vn)
							.addClass(Bn), ke.parents(zn)
							.prev(".nav-item")
							.children(Wn)
							.addClass(Bn)), se(this._scrollElement)
						.trigger(Un.ACTIVATE, {
							relatedTarget: oe
						})
				}, oe._clear = function() {
					[].slice.call(document.querySelectorAll(this._selector))
						.filter((function(oe) {
							return oe.classList.contains(Bn)
						}))
						.forEach((function(oe) {
							return oe.classList.remove(Bn)
						}))
				}, n._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this)
							.data(Rn);
						if (_e || (_e = new n(this, "object" == typeof oe && oe), se(this)
							.data(Rn, _e)), "string" == typeof oe) {
							if (void 0 === _e[oe]) throw new TypeError('No method named "' + oe + '"');
							_e[oe]()
						}
					}))
				}, s(n, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "Default",
					get: function() {
						return Fn
					}
				}]), n
			}();
		se(window)
			.on(Un.LOAD_DATA_API, (function() {
				for (var oe = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), _e = oe.length; _e--;) {
					var ke = se(oe[_e]);
					qn._jQueryInterface.call(ke, ke.data())
				}
			})), se.fn[Ln] = qn._jQueryInterface, se.fn[Ln].Constructor = qn, se.fn[Ln].noConflict = function() {
				return se.fn[Ln] = Mn, qn._jQueryInterface
			};
		var Gn = "bs.tab",
			Kn = "." + Gn,
			Yn = se.fn.tab,
			Jn = {
				HIDE: "hide" + Kn,
				HIDDEN: "hidden" + Kn,
				SHOW: "show" + Kn,
				SHOWN: "shown" + Kn,
				CLICK_DATA_API: "click" + Kn + ".data-api"
			},
			Xn = "active",
			$n = ".active",
			Zn = "> li > .active",
			er = function() {
				function i(oe) {
					this._element = oe
				}
				var oe = i.prototype;
				return oe.show = function() {
					var oe = this;
					if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && se(this._element)
						.hasClass(Xn) || se(this._element)
						.hasClass("disabled"))) {
						var _e, ke, Ne = se(this._element)
							.closest(".nav, .list-group")[0],
							Oe = Te.getSelectorFromElement(this._element);
						if (Ne) {
							var Ae = "UL" === Ne.nodeName || "OL" === Ne.nodeName ? Zn : $n;
							ke = (ke = se.makeArray(se(Ne)
								.find(Ae)))[ke.length - 1]
						}
						var Re = se.Event(Jn.HIDE, {
								relatedTarget: this._element
							}),
							je = se.Event(Jn.SHOW, {
								relatedTarget: ke
							});
						if (ke && se(ke)
							.trigger(Re), se(this._element)
							.trigger(je), !je.isDefaultPrevented() && !Re.isDefaultPrevented()) {
							Oe && (_e = document.querySelector(Oe)), this._activate(this._element, Ne);
							var l = function() {
								var _e = se.Event(Jn.HIDDEN, {
										relatedTarget: oe._element
									}),
									Te = se.Event(Jn.SHOWN, {
										relatedTarget: ke
									});
								se(ke)
									.trigger(_e), se(oe._element)
									.trigger(Te)
							};
							_e ? this._activate(_e, _e.parentNode, l) : l()
						}
					}
				}, oe.dispose = function() {
					se.removeData(this._element, Gn), this._element = null
				}, oe._activate = function(oe, _e, ke) {
					var Ne = this,
						Oe = (!_e || "UL" !== _e.nodeName && "OL" !== _e.nodeName ? se(_e)
							.children($n) : se(_e)
							.find(Zn))[0],
						Ae = ke && Oe && se(Oe)
						.hasClass("fade"),
						s = function() {
							return Ne._transitionComplete(oe, Oe, ke)
						};
					if (Oe && Ae) {
						var Re = Te.getTransitionDurationFromElement(Oe);
						se(Oe)
							.removeClass("show")
							.one(Te.TRANSITION_END, s)
							.emulateTransitionEnd(Re)
					} else s()
				}, oe._transitionComplete = function(oe, _e, ke) {
					if (_e) {
						se(_e)
							.removeClass(Xn);
						var Ne = se(_e.parentNode)
							.find("> .dropdown-menu .active")[0];
						Ne && se(Ne)
							.removeClass(Xn), "tab" === _e.getAttribute("role") && _e.setAttribute("aria-selected", !1)
					}
					if (se(oe)
						.addClass(Xn), "tab" === oe.getAttribute("role") && oe.setAttribute("aria-selected", !0), Te.reflow(oe), oe.classList.contains("fade") && oe.classList.add("show"), oe.parentNode && se(oe.parentNode)
						.hasClass("dropdown-menu")) {
						var Oe = se(oe)
							.closest(".dropdown")[0];
						if (Oe) {
							var Ae = [].slice.call(Oe.querySelectorAll(".dropdown-toggle"));
							se(Ae)
								.addClass(Xn)
						}
						oe.setAttribute("aria-expanded", !0)
					}
					ke && ke()
				}, i._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this),
							ke = _e.data(Gn);
						if (ke || (ke = new i(this), _e.data(Gn, ke)), "string" == typeof oe) {
							if (void 0 === ke[oe]) throw new TypeError('No method named "' + oe + '"');
							ke[oe]()
						}
					}))
				}, s(i, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}]), i
			}();
		se(document)
			.on(Jn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(oe) {
				oe.preventDefault(), er._jQueryInterface.call(se(this), "show")
			})), se.fn.tab = er._jQueryInterface, se.fn.tab.Constructor = er, se.fn.tab.noConflict = function() {
				return se.fn.tab = Yn, er._jQueryInterface
			};
		var tr = "toast",
			nr = "bs.toast",
			rr = "." + nr,
			ir = se.fn[tr],
			or = {
				CLICK_DISMISS: "click.dismiss" + rr,
				HIDE: "hide" + rr,
				HIDDEN: "hidden" + rr,
				SHOW: "show" + rr,
				SHOWN: "shown" + rr
			},
			ar = "show",
			lr = "showing",
			sr = {
				animation: "boolean",
				autohide: "boolean",
				delay: "number"
			},
			cr = {
				animation: !0,
				autohide: !0,
				delay: 500
			},
			ur = function() {
				function i(oe, se) {
					this._element = oe, this._config = this._getConfig(se), this._timeout = null, this._setListeners()
				}
				var oe = i.prototype;
				return oe.show = function() {
					var oe = this;
					se(this._element)
						.trigger(or.SHOW), this._config.animation && this._element.classList.add("fade");
					var e = function() {
						oe._element.classList.remove(lr), oe._element.classList.add(ar), se(oe._element)
							.trigger(or.SHOWN), oe._config.autohide && oe.hide()
					};
					if (this._element.classList.remove("hide"), this._element.classList.add(lr), this._config.animation) {
						var _e = Te.getTransitionDurationFromElement(this._element);
						se(this._element)
							.one(Te.TRANSITION_END, e)
							.emulateTransitionEnd(_e)
					} else e()
				}, oe.hide = function(oe) {
					var _e = this;
					this._element.classList.contains(ar) && (se(this._element)
						.trigger(or.HIDE), oe ? this._close() : this._timeout = setTimeout((function() {
							_e._close()
						}), this._config.delay))
				}, oe.dispose = function() {
					clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(ar) && this._element.classList.remove(ar), se(this._element)
						.off(or.CLICK_DISMISS), se.removeData(this._element, nr), this._element = null, this._config = null
				}, oe._getConfig = function(oe) {
					return oe = l({}, cr, se(this._element)
						.data(), "object" == typeof oe && oe ? oe : {}), Te.typeCheckConfig(tr, oe, this.constructor.DefaultType), oe
				}, oe._setListeners = function() {
					var oe = this;
					se(this._element)
						.on(or.CLICK_DISMISS, '[data-dismiss="toast"]', (function() {
							return oe.hide(!0)
						}))
				}, oe._close = function() {
					var oe = this,
						e = function() {
							oe._element.classList.add("hide"), se(oe._element)
								.trigger(or.HIDDEN)
						};
					if (this._element.classList.remove(ar), this._config.animation) {
						var _e = Te.getTransitionDurationFromElement(this._element);
						se(this._element)
							.one(Te.TRANSITION_END, e)
							.emulateTransitionEnd(_e)
					} else e()
				}, i._jQueryInterface = function(oe) {
					return this.each((function() {
						var _e = se(this),
							ke = _e.data(nr);
						if (ke || (ke = new i(this, "object" == typeof oe && oe), _e.data(nr, ke)), "string" == typeof oe) {
							if (void 0 === ke[oe]) throw new TypeError('No method named "' + oe + '"');
							ke[oe](this)
						}
					}))
				}, s(i, null, [{
					key: "VERSION",
					get: function() {
						return "4.3.1"
					}
				}, {
					key: "DefaultType",
					get: function() {
						return sr
					}
				}, {
					key: "Default",
					get: function() {
						return cr
					}
				}]), i
			}();
		se.fn[tr] = ur._jQueryInterface, se.fn[tr].Constructor = ur, se.fn[tr].noConflict = function() {
				return se.fn[tr] = ir, ur._jQueryInterface
			},
			function() {
				if (void 0 === se) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
				var oe = se.fn.jquery.split(" ")[0].split(".");
				if (oe[0] < 2 && oe[1] < 9 || 1 === oe[0] && 9 === oe[1] && oe[2] < 1 || 4 <= oe[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
			}(), oe.Util = Te, oe.Alert = Me, oe.Button = tt, oe.Carousel = mt, oe.Collapse = Nt, oe.Dropdown = Wt, oe.Modal = nn, oe.Popover = An, oe.Scrollspy = qn, oe.Tab = er, oe.Toast = ur, oe.Tooltip = Sn, Object.defineProperty(oe, "__esModule", {
				value: !0
			})
	}(se, _e(6), _e(45))
}, function(oe, se) {
	oe.exports = require("popper.js")
}, function(oe, se, _e) {}, function(oe, se, _e) {}, function(oe, se, _e) {}, function(oe, se, _e) {}, function(oe, se, _e) {}, function(oe, se, _e) {
	"use strict";
	_e.r(se);
	var ke = _e(0),
		Te = _e(6),
		Ne = _e.n(Te),
		Oe = _e(3),
		Ae = _e(16),
		Re = _e(5),
		je = _e(2),
		Me = _e(4),
		Fe = _e.n(Me),
		Ue = _e(9),
		Be = _e(17),
		We = _e.n(Be);
	const Ve = [{
			title: "内存分配失败",
			message: "你的Lunar客户端没有分配足够的内存来启动,请去settings里面调大内存",
			url: "https://lunarclient.com/guide/memory-allocation",
			errors: ["无法为对象堆保留足够的空间", "不能预留足够的空间", "位图用于请求的并行垃圾收集", "没有足够的内存供Java运行时环境继续运行。"]
		}, {
			title: "渲染器 启动失败",
			message: "您的计算机似乎有不正确的显卡驱动程序.",
			url: "https://lunarclient.com/guide/pixel-format",
			errors: ["org.lwjgl.LWJGLException: 渲染器加速失败"]
		}, {
			title: "无效的主机文件",
			message: "您的系统主机文件似乎无效.",
			url: "https://lunarclient.com/guide/self-signed-cert",
			errors: [" 失败，原因:自签名证书"]
		}],
		Ye = "https://api.badlion.top/launcher/",
		Xe = process.env.npm_package_version || Oe.remote.app.getVersion(),
		$e = "Lunar Client Launcher v" + Xe,
		et = function defaultMinecraftDirectory() {
			switch (Object(Re.type)()) {
				case "Darwin":
					return Object(je.join)(Object(Re.homedir)(), "/Library/Application Support/minecraft");
				case "win32":
				case "Windows_NT":
					return Object(je.join)(process.env.APPDATA || "", ".minecraft");
				default:
					return Object(je.join)(Object(Re.homedir)(), ".minecraft")
			}
		}(),
		tt = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "settings"),
		nt = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "jre"),
		rt = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "offline"),
		it = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "textures"),
		ot = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "ui"),
		at = Object(je.join)(rt, "multiver", "natives"),
		lt = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "launcher-cache"),
		st = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "licenses");
	var ct;
	try {
		ct = Object(Ae.machineIdSync)()
	} catch (oe) {
		ct = constants_installationId()
	}
	const ut = ct,
		dt = We()("UA-134796025-3", ut, {
			uid: ut,
			strictCidFormat: !1
		});
	const ft = function hwidPrivate() {
		const oe = Object(je.join)(lt, "不要向他人分享你的机器码");
		try {
			return Fe.a.readFileSync(oe, {
				encoding: "utf-8"
			})
		} catch (se) {
			const _e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			let ke = "";
			for (let oe = 0; oe < 512; oe++) ke += _e.charAt(Math.floor(Math.random() * _e.length));
			try {
				Fe.a.mkdirSync(lt, {
					recursive: !0
				}), Fe.a.writeFileSync(oe, ke, {
					encoding: "utf-8"
				})
			} catch (oe) {
				throw {
					short: "创建或保存失败",
					description: "无法创建或保存文件. " + oe
				}
			}
			return ke
		}
	}();

	function constants_installationId() {
		const oe = Object(je.join)(lt, "installation-id");
		try {
			const se = Fe.a.readFileSync(oe, {
				encoding: "utf-8"
			});
			if (!Object(Ue.validate)(se)) throw new Error("无效的安装ID，正在生成…");
			return se
		} catch (se) {
			const _e = Object(Ue.v4)();
			try {
				Fe.a.mkdirSync(lt, {
					recursive: !0
				}), Fe.a.writeFileSync(oe, _e, {
					encoding: "utf-8"
				})
			} catch (oe) {
				throw {
					short: "创建或读取失败",
					description: "无法创建或读取安装ID" + oe
				}
			}
			return _e
		}
	}
	const ht = constants_installationId();
	var pt = _e(1),
		mt = _e.n(pt),
		gt = _e(7),
		vt = _e.n(gt),
		bt = _e(18);
	const yt = new(_e.n(bt)
		.a)({
		cwd: tt,
		name: "launcher"
	});

	function getAfterLaunchAction() {
		return yt.get("afterLaunchAction", "HIDE")
	}

	function setExperimentalEnabled(oe) {
		yt.set("experimental.enabled", oe)
	}

	function getExperimentalEnabled() {
		return yt.get("experimental.enabled", !1)
	}

	function setExperimentalBranch(oe) {
		yt.set("experimental.branch", oe)
	}

	function getExperimentalBranch() {
		return yt.get("experimental.branch", "development")
	}

	function getAllocatedMemory() {
		return yt.get("allocatedMemory", 3072)
	}

	function getSelectedVersion() {
		let oe = yt.get("selectedVersion", "1.8");
		const se = oe.split(".");
		return 3 === se.length && (oe = se[0] + "." + se[1]), oe
	}

	function setSelectedSubversion(oe) {
		yt.set("selectedSubversion", oe)
	}

	function getSelectedSubversion() {
		return yt.get("selectedSubversion", "")
	}

	function setSelectedModule(oe) {
		yt.set("selectedModule", oe)
	}

	function getSelectedModule() {
		return yt.get("selectedModule", "")
	}

	function getLaunchDirectory() {
		return yt.get("launchDirectory", et)
	}

	function setResolution(oe, se) {
		yt.set("resolution.width", oe), yt.set("resolution.height", se)
	}

	function getResolution() {
		return [yt.get("resolution.width", 854), yt.get("resolution.height", 480)]
	}

	function setUserTheme(oe, se) {
		se && sendGA4Event("update_theme", {
			launcher_theme: oe
		})
	}

	function sendGA4Event(oe, se) {
		const _e = {
			client_id: ut,
			user_id: ut,
			non_personalized_ads: !1,
			user_properties: {
				launcher_theme: {
					value: "default"
				},
				launcher_version: {
					value: Xe
				},
				environment: {
					value: "production"
				},
				selected_version: {
					value: getSelectedVersion()
				},
				experimental_mode: {
					value: getExperimentalEnabled()
				}
			},
			events: [{
				name: oe,
				params: Object.assign({
					engagement_time_msec: "1"
				}, se)
			}],
			timestamp_micros: 1e3 * Date.now()
		};
		vt()("http://127.0.0.1", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(_e)
			})
			.catch(oe => {
				mt.a.error("发送GA4失败: " + oe)
			})
	}

	function sendPageView(oe) {
		dt.pageview("/" + oe.toLowerCase())
			.send(), sendGA4Event("page_view", {
				page: "/" + oe.toLowerCase(),
				page_name: "" + oe.toLowerCase()
			})
	}

	function sendVersionSwitchEvent(oe, se, _e, ke, Te, Ne) {
		dt.event("首页", `Switch version from ${oe}:${se}:${_e} to ${ke}:${Te}:${Ne}`), sendGA4Event("switch_version", {
			from_version: oe,
			from_subversion: "" !== se ? se : oe,
			from_module: "" !== _e ? _e : "lunar",
			to_version: ke,
			to_subversion: "" !== Te ? Te : ke,
			to_module: "" !== Ne ? Ne : "lunar"
		})
	}

	function sendCloseLaunchOptions(oe) {
		dt.event("关于", "Close launch options by " + oe)
			.send(), sendGA4Event("close_launch_options", {
				close_method: oe
			})
	}

	function sendQuickJoinServer(oe, se, _e) {
		dt.event(oe, "Quick join server " + se.name)
			.send(), sendGA4Event("quick_join_server", {
				from: oe,
				serverName: se.name,
				position: _e,
				region: se.region,
				gamemode: se.gameMode
			})
	}

	function sendHoverQuickJoinServer(oe, se, _e) {
		dt.event(oe, "Hover quick join server " + se.name)
			.send(), sendGA4Event("hover_quick_join_server", {
				from: oe,
				serverName: se.name,
				position: _e,
				region: se.region,
				gamemode: se.gameMode
			})
	}
	async function fetchWithRetry(oe, se) {
		return async function fetchWithRetry0(oe, se, _e) {
			try {
				return await vt()(oe, se)
			} catch (ke) {
				if (_e > 1) return mt.a.warn("请求重试中 " + oe), await fetchWithRetry0(oe, se, _e - 1); {
					const oe = Ve.find(oe => oe.errors.some(oe => ke.message.includes(oe)));
					if (oe) throw {
						short: oe.title,
						description: oe.message,
						url: oe.url
					};
					if (ke.message.includes("无法获取地址信息")) throw {
						short: "多次尝试后请求失败",
						description: "无法连接网络.请重试."
					};
					throw {
						short: "多次尝试后请求失败",
						description: ke.message
					}
				}
			}
		}(oe, se, 3)
	}
	var Et;
	async function reportLaunchSuccess(oe) {
		await reportLaunchStatus(!0, oe),
			function sendGameSessionStartEvent(oe, se, _e) {
				dt.event("首页", `Game session start ${oe}:${se}:${_e}`), sendGA4Event("game_session_start", {
					launch_id: oe,
					timeToInit: se,
					timeToStarted: _e
				})
			}(oe.launchId, oe.timeToInit, oe.timeToStarted)
	}
	async function reportLaunchStatus(oe, se) {
		mt.a.info("发送报告中... " + JSON.stringify(se)), await fetchWithRetry(Ye + "reportLaunchStatus", {
			method: "POST",
			headers: {
				"User-Agent": $e
			},
			body: JSON.stringify({
				hwid: ut,
				installation_id: ht,
				hwid_private: ft,
				os: process.platform,
				os_release: Object(Re.release)(),
				arch: process.arch,
				launcher_version: Xe,
				success: oe,
				data: se
			})
		})
	}! function(oe) {
		oe.OFFLINE = "OFFLINE"
	}(Et || (Et = {}));
	class FooterLink_FooterLink extends ke.Component {
		render() {
			return ke.createElement("a", {
				className: "clickable",
				onClick: () => {
					! function sendOpenFooterLink(oe, se) {
						dt.event("Footer", "Open footer link " + oe)
							.send(), sendGA4Event("open_footer_link", {
								name: oe,
								url: se
							})
					}(this.props.name, this.props.link), Oe.shell.openExternal(this.props.link)
				}
			}, ke.createElement("i", {
				className: "fa-lg " + this.props.icon
			}))
		}
	}
	var wt = "data:image/png;base64,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";
	class Footer_Footer extends ke.Component {
		constructor(oe) {
			super(oe), this.mouseDownHandler = oe => {
				(1 === oe.button || 0 === oe.button && oe.ctrlKey) && this.setState({
					showModal: !0
				})
			}, this.state = {
				showModal: !1
			}
		}
		render() {
			return ke.createElement(ke.Fragment, null, this.state.showModal && ke.createElement("div", {
				id: "about-modal"
			}, ke.createElement("div", {
				className: "container row"
			}, ke.createElement("div", {
				className: "modal-content"
			}, ke.createElement("div", {
				className: "modal-header"
			}, ke.createElement("h5", {
				className: "modal-title"
			}, ke.createElement("i", {
				className: "fas fa-exclamation-triangle mr-2"
			}), "你真的要这样做吗?"), ke.createElement("button", {
				type: "button",
				onClick: () => this.setState({
					showModal: !1
				})
			}, ke.createElement("div", null))), ke.createElement("div", {
				className: "modal-body"
			}, "不推荐分享你的安装ID给他人!", ke.createElement("p", null, "您的安装ID用于在Lunar Client系统上识别您,不要与任何人共享!"), ke.createElement("div", {
				id: "modal-btns"
			}, ke.createElement("button", {
				type: "button",
				className: "btn btn-danger lunar-text",
				onClick: () => {
					navigator.clipboard.writeText(ht),
						function sendCopyHWID(oe) {
							dt.event(oe, "复制HWID到剪贴板")
								.send(), sendGA4Event("copy_hwid", {
									from: oe
								})
						}(this.props.activeTab), this.setState({
							showModal: !1
						})
				}
			}, "复制到剪贴板"), ke.createElement("button", {
				type: "button",
				className: "btn btn-primary lunar-text",
				onClick: () => this.setState({
					showModal: !1
				})
			}, "返回安全模式"))))))), ke.createElement(
				"footer",
				{ id: "footer" },
				ke.createElement(
					"div",
					{ className: "container-fluid" },
					ke.createElement(
						"div",
						{ id: "footer-inner", className: "row" },
						ke.createElement(
							"div",
							{ className: "col" },
							ke.createElement("img", {
								draggable: !1,
								src: "https://pic.imgdb.cn/item/64d4de051ddac507cc32ebf6.jpg",
								className: "mr-1",
								alt: "Moonsworth Logo",
								onMouseDown: this.mouseDownHandler
							}),
							"CubeWhyMC",
							" NextGen-v1.0"

						),
						ke.createElement(
							"div",
							{ id: "footer-right", className: "col" },
							"不归属于Mojang或Moonsworth"
						)
					)
				)
			)
		}
	}
	var _t = _e.p + "imgs/corner-ice--christmas.png",
		St = _e.p + "imgs/overlay--halloween.png";
	class CloseButton_CloseButton extends ke.Component {
		render() {
			return ke.createElement("a", {
				id: "exit-button",
				type: "button",
				className: "btn active ml-2 nav-btn",
				onClick: () => Oe.remote.getCurrentWindow()
					.close()
			}, ke.createElement("i", {
				className: "fas fa-times"
			}))
		}
	}
	class ThemeSelector_ThemeSelector extends ke.Component {
		render() {
			return ke.createElement("a", {
				id: "theme-button",
				type: "button",
				className: "btn active ml-2 nav-btn",
				onClick: this.props.onClick
			}, ke.createElement("i", {
				className: "fas fa-brush"
			}))
		}
	}
	class NavigationBar_NavigationBar extends ke.Component {
		render() {
			return ke.createElement("nav", {
				className: "navbar"
			}, ke.createElement("div", {
				className: "container-fluid"
			}, ke.createElement("a", {
				id: "navbar-title",
				className: "col navbar-brand"
			}, ke.createElement("img", {
				draggable: !1,
				src: this.props.images[this.props.activeTheme || "default"].logo,
				alt: "logo"
			}), ke.createElement("img", {
				src: _t,
				id: "christmas-top-curve",
				draggable: !1,
				style: {
					display: "none"
				}
			}), "halloween" === this.props.activeTheme && ke.createElement("img", {
				id: "logo-overlay",
				draggable: !1,
				src: St
			}), ke.createElement("h2", null, "Lunar Client CN")), ke.createElement("div", {
				id: "navbar-links",
				className: "col-7"
			}, this.props.tabs.map(oe => ke.createElement("a", {
				key: oe.name,
				type: "button",
				className: `btn${this.props.activeTab === oe.name ? " active" : ""}${this.props.alertHighlighted == oe.name ? " alert-highlighted" : ""}${this.props.alertHighlightedColor ? " alert-highlighted-" + this.props.alertHighlightedColor : ""}`,
				onClick: oe.onClick
			}, oe.name))), ke.createElement("div", {
				id: "navbar-right",
				className: "col"
			}, "default" != this.props.theme && ke.createElement(ThemeSelector_ThemeSelector, {
				onClick: this.props.onClick
			}), ke.createElement(CloseButton_CloseButton, null))))
		}
	}
	var kt = _e(11),
		Tt = _e.n(kt),
		xt = _e(19),
		Ct = _e(20),
		Nt = _e.n(Ct),
		It = _e(10),
		Pt = _e.n(It);
	const Ot = new(_e(21)
		.Agent)({
		keepAlive: !0,
		maxSockets: 99999
	});
	async function bulkDownloadFiles(oe, se, _e, ke) {
		if (0 !== _e.length) return new Promise(async (Te, Ne) => {
			mt.a.info("开始下载 " + _e.length + " " + oe + " 的并发文件 " + se);
			const Oe = new Tt.a({
					concurrency: se
				}),
				triggerProgressCallback = () => function sendProgressCallback(oe, se, _e, ke) {
					let Te = 0;
					for (const oe of _e) Te += oe.progress || 0;
					const Ne = Te / _e.length;
					ke("更新中", `下载 ${oe}: ${_e.length - se}/${_e.length} - ${(100 * Ne).toFixed(1)}%中`)
				}(oe, Oe.size, _e, ke);
			Oe.on("add", () => triggerProgressCallback), Oe.on("next", () => triggerProgressCallback);
			for (const oe of _e) Oe.add(async () => {
				await downloadFile(oe, triggerProgressCallback)
					.catch(oe => {
						Oe.clear(), Ne(oe)
					})
			});
			mt.a.info("正在排队下载文件,请等待..."), await Oe.onIdle(), mt.a.info("下载完成"), Te()
		});
		mt.a.info("跳过批量下载阶段 " + oe)
	}
	async function downloadFile(oe, se) {
		const _e = null === oe.differential ? "完整的下载" : "(url: " + oe.differential.url + ", 当前文件: " + oe.differential.currentFile + ")",
			ke = oe.url + " (保存到: " + oe.saveTo + ", 差异文件: " + _e + ")";
		mt.a.info("开始下载 " + ke);
		try {
			await Me.promises.mkdir(Object(je.dirname)(oe.saveTo), {
				recursive: !0
			})
		} catch (oe) {
			throw {
				short: "创建失败",
				description: "创建目录失败. " + oe
			}
		}
		const progressCallback = _e => {
			oe.progress = _e, se()
		};
		if (null === oe.differential) return await downloadFileFull(oe, ke, "no-differential", progressCallback);
		try {
			return await async function downloadFileDifferential(oe, se, _e) {
				var ke, Te, Ne;
				const Oe = oe.saveTo + ".patch";
				if (!(null === (ke = oe.differential) || void 0 === ke ? void 0 : ke.url)) throw Error("差异文件地址不存在");
				await internalDownloadUrlToFile(null === (Te = oe.differential) || void 0 === Te ? void 0 : Te.url, Oe, "尝试差异文件", _e), mt.a.info("成功下载补丁 " + se);
				try {
					await Nt.a.patch(null === (Ne = oe.differential) || void 0 === Ne ? void 0 : Ne.currentFile, oe.saveTo, Oe)
				} catch (oe) {
					throw {
						short: "应用补丁失败",
						description: "应用补丁失败: " + oe.message
					}
				}
				mt.a.info("已成功应用补丁 " + se), await Me.promises.unlink(Oe)
			}(oe, ke, progressCallback)
		} catch (se) {
			return mt.a.error("未能完成差异文件下载，请为 " + ke + ": " + JSON.stringify(se)), await downloadFileFull(oe, ke, "差异文件下载失败", progressCallback)
		}
	}
	async function downloadFileFull(oe, se, _e, ke) {
		await internalDownloadUrlToFile(oe.url, oe.saveTo, _e, ke), mt.a.info("已成功下载完整文件 " + se)
	}
	async function internalDownloadUrlToFile(oe, se, _e, ke) {
		const Te = new URLSearchParams({
				reason: _e
			}),
			Ne = `${oe}?${Te}`,
			Oe = new xt.DownloaderHelper(Ne, Object(je.dirname)(se), {
				headers: {
					"User-Agent": $e,
					"Accept-Encoding": "br, gzip"
				},
				fileName: Object(je.basename)(se),
				retry: {
					maxRetries: 3,
					delay: 1e3
				},
				override: !0,
				progressThrottle: 100,
				httpsRequestOptions: {
					agent: Ot
				}
			});
		return Oe.on("progress.throttled", oe => ke(oe.progress / 100)), new Promise((se, _e) => {
			Oe.on("end", async () => {
				mt.a.info("下载项目成功 " + oe), ke(1), se()
			}), Oe.on("error", se => {
				_e({
					short: "下载项目失败",
					description: "下载项目失败 (" + oe + "): " + se.message
				})
			}), Oe.on("download", () => {
				const se = Oe.__response.headers["content-encoding"];
				void 0 === se || ("gzip" === se ? Oe.pipe(Object(It.createGunzip)()) : "br" === se ? Oe.pipe(Object(It.createBrotliDecompress)()) : (Oe.stop(), _e({
					short: "解压项目失败",
					description: "未知压缩类型 " + se + " for " + oe
				})))
			}), Oe.start()
		})
	}
	var Dt = _e(22);
	async function filterBulkDownloadFiles(oe) {
		const se = [],
			_e = new Tt.a({
				concurrency: 50
			});
		for (const ke of oe) _e.add(async () => {
			const oe = await singleSha1Hash(ke.file.saveTo);
			oe !== ke.ifSha1IsNot && (null !== ke.file.differential && (null === oe ? ke.file.differential = null : ke.file.differential.url = ke.file.differential.url.replace("PREVIOUS_HASH", oe)), se.push(ke.file))
		});
		return await _e.onIdle(), se
	}
	async function singleSha1Hash(oe) {
		const se = Object(Dt.createHash)("sha1");
		try {
			se.update(await Me.promises.readFile(oe))
		} catch (oe) {
			if ("ENOENT" === oe.code) return null;
			throw {
				short: "读取失败",
				description: "无法读取哈希文件 " + oe
			}
		}
		return se.digest("hex")
	}
	async function downloadAssets(oe, se) {
		const _e = (new Date)
			.getTime();
		mt.a.info("[资源] 开始检查资源");
		const ke = Object(je.join)(getLaunchDirectory(), "assets"),
			Te = Object(je.join)(ke, "indexes");
		await Me.promises.mkdir(Te, {
			recursive: !0
		});
		const Ne = Object(je.join)(Te, oe.id + ".json");
		let Oe;
		mt.a.info("[资源] 正在请求资源...");
		try {
			const se = await fetchWithRetry(oe.url, {});
			mt.a.info("[资源] 收到资源响应,状态为 " + se.status), Oe = await se.json()
		} catch (oe) {
			return void mt.a.warn("[资源] 忽略资源失败: " + JSON.stringify(oe))
		}
		try {
			await Me.promises.writeFile(Ne, JSON.stringify(Oe))
		} catch (oe) {
			throw {
				short: "写入失败",
				description: "无法写入资源文件 " + oe
			}
		}
		const Ae = [],
			Re = Oe.objects;
		for (const oe in Re) {
			const se = Re[oe].hash,
				_e = Object(je.join)(ke, "objects", se.substring(0, 2), se);
			Ae.push({
				file: {
					url: "https://resources.download.minecraft.net/" + se.substring(0, 2) + "/" + se,
					differential: null,
					saveTo: _e
				},
				ifSha1IsNot: se
			})
		}
		const Fe = await filterBulkDownloadFiles(Ae);
		await bulkDownloadFiles("assets", 20, Fe, se);
		const Ue = (new Date)
			.getTime() - _e;
		mt.a.info("[资源] 完成资源检查 (" + Ue + "ms)")
	}
	var At, Lt = _e(23),
		Rt = _e(8),
		jt = _e.n(Rt),
		Mt = _e(12),
		Ft = _e.n(Mt);

	function gatherClassPath(oe) {
		const se = [];
		for (const _e of oe) "CLASS_PATH" === _e.type && se.push(_e.name);
		return se
	}! function(oe) {
		oe.EXTERNAL_FILE = "EXTERNAL_FILE", oe.CLASS_PATH = "CLASS_PATH'", oe.NATIVES = "NATIVES"
	}(At || (At = {}));
	var Ht = _e(24),
		Ut = _e.n(Ht),
		Bt = _e(25);

	function getJavaExecutable(oe) {
		const se = oe.executablePathInArchive.slice();
		return se.unshift(Object(je.join)(nt, oe.folderChecksum)), Object(je.join)(...se)
	}
	async function ensureJavaInstalled(oe, se) {
		const _e = Object(je.join)(nt, oe.folderChecksum);
		Object(Me.mkdirSync)(_e, {
			recursive: !0
		});
		const ke = await Object(Bt.hashElement)(_e, {
			algo: "sha1",
			encoding: "hex",
			files: {
				ignoreRootName: !0,
				ignorePathNameOnce: !0,
				exclude: [".*"]
			},
			folders: {
				ignoreRootName: !0,
				ignorePathNameOnce: !0
			},
			symbolicLinks: {
				include: !1
			}
		});
		if (ke.hash != oe.folderChecksum ? (mt.a.info("替换 JRE! (预期的: " + oe.folderChecksum + ", 实际的: " + ke.hash + ")"), mt.a.info("完整的JRE结构是 " + JSON.stringify(ke)), await async function install(oe, se) {
			const _e = Object(je.join)(nt, oe.folderChecksum);
			Object(Me.mkdirSync)(_e, {
				recursive: !0
			}), se(0), Ft.a.sync(_e), mt.a.info("下载JRE从 " + oe.download.url);
			const ke = await vt()(oe.download.url);
			if (mt.a.info("JRE下载响应状态码 " + ke.status), 200 !== ke.status) throw mt.a.info(ke), {
				short: "JRE 下载失败",
				description: "JRE 下载失败状态 " + ke.status
			};
			const Te = parseInt(ke.headers.get("content-length"));
			let Ne = 0;
			return ke.body.on("data", oe => {
				Ne += oe.length, se(Ne / Te)
			}), new Promise((se, Te) => {
				if ("tar.gz" === oe.download.extension) {
					const oe = Ut.a.extract(_e);
					ke.body.pipe(Pt.a.createUnzip())
						.pipe(oe), oe.on("finish", se), oe.on("error", Te)
				} else if ("zip" === oe.download.extension) {
					const oe = jt.a.Extract({
						path: _e
					});
					ke.body.pipe(oe), oe.on("close", se), oe.on("error", Te)
				}
				ke.body.on("error", Te)
			})
		}(oe, oe => {
			se("更新中", "正在下载 JRE: " + (100 * oe)
				.toFixed(1) + "%")
		})) : mt.a.info("JRE 哈希值匹配! (" + oe.folderChecksum + ")"), "win32" === process.platform && oe.javawExeChecksum && oe.javawDownload) {
			const se = getJavaExecutable(oe),
				_e = await singleSha1Hash(se);
			_e && _e !== oe.javawExeChecksum && (mt.a.info("替换Javaw！ （预期的： " + oe.javawExeChecksum + ", 实际的: " + _e + ")"), await async function replaceJavaw(oe, se) {
				Object(Me.unlinkSync)(se);
				const _e = Object(Me.createWriteStream)(se),
					ke = await vt()(oe);
				return new Promise((oe, se) => {
					ke.body.pipe(_e), ke.body.on("error", se), _e.on("finish", oe)
				})
			}(new URL(oe.javawDownload), se))
		}
	}
	async function launch(oe, se, _e, ke, Te) {
		mt.a.info("🔨 启动中"), mt.a.info("更新贴图缓存"), Te.progress("🔨 启动中", "更新依赖缓存"), await Me.promises.mkdir(ke, {
			recursive: !0
		}), await async function updateFileCache(oe, se, _e) {
			const ke = [];
			for (const _e of oe) {
				const oe = Object(je.join)(se, _e.name);
				let Te = null;
				_e.differentialUrl && (Te = {
					url: _e.differentialUrl,
					currentFile: oe
				}), ke.push({
					file: {
						url: _e.url,
						differential: Te,
						saveTo: oe
					},
					ifSha1IsNot: _e.sha1
				})
			}
			const Te = await filterBulkDownloadFiles(ke);
			await bulkDownloadFiles("artifacts", 1, Te, _e)
		}(se.artifacts, ke, Te.progress), mt.a.info("提取natives中"), Te.progress("🔨 启动中", "提取natives中"), await async function extractNatives(oe, se) {
			const _e = [];
			for (const se of oe) se.type === At.NATIVES && _e.push(se.name);
			if (!_e.length) return;
			const ke = Object(je.join)(se, "natives");
			return new Promise((oe, Te) => {
				Ft()(ke, {}, Ne => {
					if (Ne) return void Te({
						short: "natives提取失败",
						description: "游戏似乎已经启动了?? " + Ne
					});
					let Oe = 0;
					for (const Ne of _e) {
						const Ae = Object(je.join)(se, Ne),
							Re = jt.a.Extract({
								path: ke
							});
						Object(Me.createReadStream)(Ae)
							.pipe(Re), Re.on("close", (function() {
								++Oe === _e.length && oe()
							})), Re.on("error", Te)
					}
				})
			})
		}(se.artifacts, ke), mt.a.info("检查 客户端"), Te.progress("🔨 启动中", "检查 客户端"), await ensureJavaInstalled(_e, Te.progress), mt.a.info("准备 客户端"), Te.progress("🔨 启动中", "准备 客户端");
		mt.a.info("获取 Java 可执行文件");
		const Ne = getJavaExecutable(_e),
			Oe = ["-Dloader=" + process.cwd() + "/resources/loader" + getSelectedVersion() + ".jar", "-jar", getLunarCnExec(), `-Xms${oe.allocatedMemoryMb}m`, `-Xmx${oe.allocatedMemoryMb}m`, "-Djava.library.path=natives", "-cp", (Ae = gatherClassPath(se.artifacts), Ae.join("win32" === process.platform ? ";" : ":")), se.mainClass].concat(oe.programArgs);
		var Ae;
		Oe.unshift(..._e.extraArguments), mt.a.info("启动 客户端"), Te.progress("🔨 启动中", "启动 客户端");
		const Re = Object(Lt.spawn)(Ne, Oe, {
			cwd: ke,
			detached: !0,
			env: Object.assign(process.env, {
				_JAVA_OPTIONS: "-XX:+DisableAttachMechanism",
				JAVA_TOOL_OPTIONS: "-XX:+DisableAttachMechanism",
				JDK_JAVA_OPTIONS: "-XX:+DisableAttachMechanism"
			})
		});
		Re.stdout.on("data", Te.log), Re.stderr.on("data", Te.log), Re.on("exit", oe => {
			mt.a.info("客户端退出代码 " + oe), Te.exit()
		}), Re.on("error", oe => {
			Te.error("Java调用错误", "无法调用 Java: " + oe)
		})
	}
	var __asyncValues = function(oe) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var se, _e = oe[Symbol.asyncIterator];
			return _e ? _e.call(oe) : (oe = "function" == typeof __values ? __values(oe) : oe[Symbol.iterator](), se = {}, verb("next"), verb("throw"), verb("return"), se[Symbol.asyncIterator] = function() {
				return this
			}, se);

			function verb(_e) {
				se[_e] = oe[_e] && function(se) {
					return new Promise((function(ke, Te) {
						(function settle(oe, se, _e, ke) {
							Promise.resolve(ke)
								.then((function(se) {
									oe({
										value: se,
										done: _e
									})
								}), se)
						})(ke, Te, (se = oe[_e](se))
							.done, se.value)
					}))
				}
			}
		},
		__await = function(oe) {
			return this instanceof __await ? (this.v = oe, this) : new __await(oe)
		},
		__asyncDelegator = function(oe) {
			var se, _e;
			return se = {}, verb("next"), verb("throw", (function(oe) {
				throw oe
			})), verb("return"), se[Symbol.iterator] = function() {
				return this
			}, se;

			function verb(ke, Te) {
				se[ke] = oe[ke] ? function(se) {
					return (_e = !_e) ? {
						value: __await(oe[ke](se)),
						done: "return" === ke
					} : Te ? Te(se) : se
				} : Te
			}
		},
		__asyncGenerator = function(oe, se, _e) {
			if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
			var ke, Te = _e.apply(oe, se || []),
				Ne = [];
			return ke = {}, verb("next"), verb("throw"), verb("return"), ke[Symbol.asyncIterator] = function() {
				return this
			}, ke;

			function verb(oe) {
				Te[oe] && (ke[oe] = function(se) {
					return new Promise((function(_e, ke) {
						Ne.push([oe, se, _e, ke]) > 1 || resume(oe, se)
					}))
				})
			}

			function resume(oe, se) {
				try {
					! function step(oe) {
						oe.value instanceof __await ? Promise.resolve(oe.value.v)
							.then(fulfill, reject) : settle(Ne[0][2], oe)
					}(Te[oe](se))
				} catch (oe) {
					settle(Ne[0][3], oe)
				}
			}

			function fulfill(oe) {
				resume("next", oe)
			}

			function reject(oe) {
				resume("throw", oe)
			}

			function settle(oe, se) {
				oe(se), Ne.shift(), Ne.length && resume(Ne[0][0], Ne[0][1])
			}
		};
	async function downloadIndexedFiles(oe, se, _e, ke, Te, Ne, Oe) {
		const Ae = (new Date)
			.getTime();
		mt.a.info(`[${Ne}] 开始检查材质`);
		try {
			await Me.promises.mkdir(lt, {
				recursive: !0
			}), await Me.promises.mkdir(Te, {
				recursive: !0
			})
		} catch (oe) {
			throw {
				short: "创建失败",
				description: "无法创建材质目录.. " + oe
			}
		}
		const Re = await async function getIndex(oe, se, _e) {
			const ke = await singleSha1Hash(_e);
			if (ke === se) {
				mt.a.info("材质索引是有效的, 正在使用它...");
				try {
					return await Me.promises.readFile(_e, "utf-8")
				} catch (oe) {
					throw {
						short: "读取失败",
						description: "无法读取材质缓存. " + oe
					}
				}
			}
			mt.a.info(`材质索引是无效的 (${ke} vs ${se}) - 请求材质索引中...`);
			const Te = await fetchWithRetry(oe, {});
			mt.a.info("收到纹理索引响应，状态为 " + Te.status);
			const Ne = await Te.text();
			try {
				await Me.promises.writeFile(_e, Ne)
			} catch (oe) {
				throw {
					short: "写入失败",
					description: "无法写入材质文件. " + oe
				}
			}
			return Ne
		}(se, _e, ke);
		await Promise.all([deleteUnreferencedFiles(Re, Te), downloadMissingFiles(Re, Te, oe, Oe)]);
		const je = (new Date)
			.getTime() - Ae;
		mt.a.info(`[${Ne}] 完成材质检查 (${je}ms)`)
	}
	async function downloadMissingFiles(oe, se, _e, ke) {
		const Te = [];
		for (const ke of oe.split("\n")) {
			const [oe, Ne] = ke.split(" "), Oe = Object(je.join)(se, oe);
			Te.push({
				file: {
					url: _e + Ne,
					differential: null,
					saveTo: Oe
				},
				ifSha1IsNot: Ne
			})
		}
		const Ne = await filterBulkDownloadFiles(Te);
		await bulkDownloadFiles("textures", 20, Ne, ke)
	}
	async function deleteUnreferencedFiles(oe, se) {
		var _e, ke;
		const Te = new Set;
		for (const _e of oe.split("\n")) {
			const oe = _e.split(" ")[0];
			Te.add(Object(je.join)(se, oe))
		}
		try {
			for (var Ne, Oe = __asyncValues(walk(se)); !(Ne = await Oe.next())
				.done;) {
				const oe = Ne.value;
				if (!Te.has(oe)) {
					mt.a.info("删除旧材质目录: " + oe);
					try {
						await Me.promises.unlink(oe)
					} catch (se) {
						throw {
							short: "删除失败",
							description: "无法删除材质目录中的旧文件: " + oe + " - " + se
						}
					}
				}
			}
		} catch (oe) {
			_e = {
				error: oe
			}
		} finally {
			try {
				Ne && !Ne.done && (ke = Oe.return) && await ke.call(Oe)
			} finally {
				if (_e) throw _e.error
			}
		}
	}

	function walk(oe) {
		return __asyncGenerator(this, arguments, (function* walk_1() {
			var se, _e;
			try {
				for (var ke, Te = __asyncValues(yield __await(Me.promises.opendir(oe))); !(ke = yield __await(Te.next()))
					.done;) {
					const se = ke.value,
						_e = Object(je.join)(oe, se.name);
					se.isDirectory() ? yield __await(yield* __asyncDelegator(__asyncValues(walk(_e)))): se.isFile() && (yield yield __await(_e))
				}
			} catch (oe) {
				se = {
					error: oe
				}
			} finally {
				try {
					ke && !ke.done && (_e = Te.return) && (yield __await(_e.call(Te)))
				} finally {
					if (se) throw se.error
				}
			}
		}))
	}
	async function downloadTextures(oe, se, _e, ke) {
		await downloadIndexedFiles(_e, oe, se, Object(je.join)(lt, "texturesIndex.txt"), it, "TEXTURES", ke)
	}
	async function downloadLicenses(oe, se) {
		const _e = (new Date)
			.getTime();
		mt.a.info("[证书] 检查证书中");
		try {
			await Me.promises.mkdir(st, {
				recursive: !0
			})
		} catch (oe) {
			throw {
				short: "写入失败",
				description: "无法写入证书文件. " + oe
			}
		}
		const ke = [];
		for (const se of oe) {
			const oe = Object(je.join)(st, se.file);
			ke.push({
				file: {
					url: se.url,
					differential: null,
					saveTo: oe
				},
				ifSha1IsNot: se.sha1
			})
		}
		const Te = await filterBulkDownloadFiles(ke);
		await bulkDownloadFiles("licenses", 5, Te, se);
		const Ne = (new Date)
			.getTime() - _e;
		mt.a.info("[证书] 完成证书检查 (" + Ne + "ms)")
	}
	var ui_asyncValues = function(oe) {
		if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
		var se, _e = oe[Symbol.asyncIterator];
		return _e ? _e.call(oe) : (oe = "function" == typeof __values ? __values(oe) : oe[Symbol.iterator](), se = {}, verb("next"), verb("throw"), verb("return"), se[Symbol.asyncIterator] = function() {
			return this
		}, se);

		function verb(_e) {
			se[_e] = oe[_e] && function(se) {
				return new Promise((function(ke, Te) {
					(function settle(oe, se, _e, ke) {
						Promise.resolve(ke)
							.then((function(se) {
								oe({
									value: se,
									done: _e
								})
							}), se)
					})(ke, Te, (se = oe[_e](se))
						.done, se.value)
				}))
			}
		}
	};
	async function downloadUI(oe, se) {
		oe ? (mt.a.info("[UI] 开始 UI 检查"), await Me.promises.mkdir(ot, {
			recursive: !0
		}), mt.a.info("[UI] 下载源码"), await async function extractSource(oe, se) {
			var _e, ke;
			const Te = await singleSha1Hash(Object(je.join)(lt, "ui.zip")),
				Ne = Object(je.join)(lt, "ui.zip");
			Te !== oe.sourceSha1 ? (mt.a.info(`[UI] 来源无效 (${Te} vs ${oe.sourceSha1}) - 发出源请求...`), await bulkDownloadFiles("UI", 1, [{
				url: oe.sourceUrl,
				saveTo: Ne,
				differential: null,
				progress: 0
			}], se)) : mt.a.info("[UI] 来源有效，正在使用...");
			try {
				for (var Oe, Ae = ui_asyncValues(walk(ot)); !(Oe = await Ae.next())
					.done;) {
					const oe = Oe.value;
					oe.replace(ot, "")
						.replace(/\\/g, "/")
						.startsWith("/assets") || await Me.promises.unlink(oe)
				}
			} catch (oe) {
				_e = {
					error: oe
				}
			} finally {
				try {
					Oe && !Oe.done && (ke = Ae.return) && await ke.call(Ae)
				} finally {
					if (_e) throw _e.error
				}
			}
			await new Promise((oe, se) => {
				const _e = jt.a.Extract({
					path: ot
				});
				Object(Me.createReadStream)(Ne)
					.pipe(_e), _e.on("close", oe), _e.on("error", se)
			})
		}(oe, se), mt.a.info("[UI] 下载资源"), await downloadIndexedFiles(oe.assets.baseUrl, oe.assets.indexUrl, oe.assets.indexSha1, Object(je.join)(lt, "uiAssetsIndex.txt"), Object(je.join)(ot, "assets"), "UI", se)) : mt.a.info("[UI] 没有用户界面可供下载")
	}
	async function launchClient(oe, se, _e, ke, Te, Ne, Oe, Ae) {
		mt.a.info("启动客户端启动序列: " + se + " / " + _e.id + " / " + Te);
		var Me = -1,
			Fe = -1,
			Ue = !1;
		let Be = [];
		const We = (new Date)
			.getTime(),
			et = {
				progress: Oe.progress,
				success: Oe.success,
				log: oe => {
					oe = oe.toString(), -1 === Me && oe.includes("LUNARCLIENT_STATUS_BUILD_CACHE") ? (Ue = !0, Oe.progress("建立缓存", ["更新您的游戏.", "更新您的游戏..", "更新您的游戏..."], {
						delay: 500
					})) : -1 === Me && oe.includes("LUNARCLIENT_STATUS_INIT") ? (Me = (new Date)
						.getTime(), Oe.success()) : -1 === Fe && oe.includes("LUNARCLIENT_STATUS_STARTED") && (Fe = (new Date)
						.getTime(), Be = [], reportLaunchSuccess({
							type: se,
							timeToInit: Me - We,
							timeToStarted: Fe - We,
							cacheGenerated: Ue,
							os: process.platform,
							version: _e.id,
							launchId: Ae
						})), -1 === Fe && Be.push(oe), oe && Oe.log(oe)
				},
				exit: () => {
					if (-1 !== Fe) return Oe.exit();
					var oe = null;
					if (Be.forEach(se => {
						oe = Ve.find(oe => oe.errors.some(oe => se.includes(oe)))
					}), oe) return Oe.error(oe.title, oe.message);
					mt.a.info("报告启动失败..."), async function reportLaunchFail(oe) {
							await reportLaunchStatus(!1, oe)
						}({
							type: se,
							timeToInit: Me - We,
							timeToStarted: Fe - We,
							cacheGenerated: Ue,
							os: process.platform,
							version: _e.id,
							launchId: Ae
						})
						.then(() => {
							mt.a.info("报告启动失败."), Oe.error("启动成功", "客户端启动成功")
						})
						.catch(() => {
							mt.a.info("报告失败"), Oe.error("启动成功", "客户端启动成功.")
						})
				},
				error: Oe.error
			};
		Oe.progress("身份验证", "连接LC服务器");
		const [tt, nt, lt, st, ct, dt] = await async function makeLaunchRequest(oe, se, _e, ke) {
			mt.a.info("Making launch request...");
			const Te = await fetchWithRetry(Ye + "launch", {
				method: "POST",
				headers: {
					"User-Agent": $e
				},
				body: JSON.stringify({
					hwid: ut,
					installation_id: ht,
					hwid_private: ft,
					os: process.platform,
					os_release: Object(Re.release)(),
					arch: process.arch,
					launcher_version: Xe,
					version: oe.id,
					branch: _e,
					args: ke,
					module: se.id
				})
			});
			var Ne;
			mt.a.info("收到启动响应，状态为 " + Te.status);
			try {
				Ne = await Te.json(), mt.a.info("启动响应: " + JSON.stringify(Ne))
			} catch (oe) {
				throw {
					short: "无法从服务器获取启动响应",
					description: "尝试联系我们的服务器时出现错误，请稍后再试" + oe
				}
			}
			if (!Ne.success) throw {
				short: Ne.error.short,
				description: Ne.error.message
			};
			return [Ne.launchTypeData, Ne.textures, Ne.jre, Ne.licenses, Ne.ui, Ne.updateAssets]
		}(_e, ke, Te, Ne);
		Oe.progress("🔨 更新中", "下载LC资源"), dt && await Promise.all([downloadUI(ct, et.progress), downloadLicenses(st, et.progress), downloadTextures(nt.indexUrl, nt.indexSha1, nt.baseUrl, et.progress), downloadAssets(_e.assets, et.progress)]), Oe.progress("🔨 启动中", "准备启动");
		const [pt, gt] = getResolution(), vt = getLaunchDirectory(), bt = getAllocatedMemory(), yt = ["--version", _e.id, "--accessToken", "0", "--assetIndex", _e.assets.id, "--userProperties", "{}", "--gameDir", vt, "--texturesDir", it, "--uiDir", ot, "--webosrDir", at, "--launcherVersion", Xe, "--hwid", ut, "--installationId", ht, "--width", pt.toString(), "--height", gt.toString(), "--workingDirectory", ".", "--classpathDir", "."], wt = [], _t = [];
		for (const oe of tt.artifacts) "CLASS_PATH" === oe.type ? wt.push(oe.name) : "EXTERNAL_FILE" === oe.type && _t.push(oe.name);
		0 !== wt.length && (yt.push("--ichorClassPath"), yt.push(wt.join(","))), 0 !== _t.length && (yt.push("--ichorExternalFiles"), yt.push(_t.join(","))), null != oe && (yt.push("--server"), yt.push(oe.joinIp || oe.ip));
		const St = {
			programArgs: yt,
			allocatedMemoryMb: bt
		};
		switch (se) {
			case Et.OFFLINE:
				return void await launch(St, tt, lt, Object(je.join)(rt, "multiver"), et)
		}
	}
	const zt = {
		BOOK: "fas fa-book",
		SHOPPING_CART: "fas fa-shopping-cart",
		BULLHORN: "fas fa-bullhorn",
		STAR: "fas fa-star",
		HEART: "fas fa-heart",
		GIFT: "fas fa-gift",
		TWITCH: "fab fa-twitch",
		YOUTUBE: "fab fa-youtube",
		DISCORD: "fab fa-discord",
		TWITTER: "fab fa-twitter"
	};
	class BlogPostTile_BlogPostTile extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "col-4"
			}, ke.createElement("div", {
				className: "card post-card",
				onMouseEnter: () => {
					! function sendHoverBlogPost(oe, se, _e, ke, Te, Ne) {
						dt.event("Home", "Hover blog post " + oe)
							.send(), sendGA4Event("hover_blog_post", {
								title: oe,
								author: se,
								url: _e,
								excerpt: ke,
								position: Te,
								forced: Ne
							})
					}(this.props.blogPost.title, this.props.blogPost.author, this.props.blogPost.link, this.props.blogPost.excerpt, this.props.index + 1, this.props.blogPost.forced || !1)
				}
			}, ke.createElement("div", {
				className: "inner"
			}, ke.createElement("img", {
				draggable: !1,
				className: "card-img-top",
				src: this.props.blogPost.image,
				alt: this.props.blogPost.title
			})), ke.createElement("div", {
				className: "card-body"
			}, ke.createElement("p", {
				className: "card-text"
			}, this.props.blogPost.excerpt), ke.createElement("h6", {
				className: "card-subtitle mb-2 " + (this.props.blogPost.author_image && "blog-no-overide")
			}, "Posted by", ke.createElement("img", {
				draggable: !1,
				className: "ml-2 mr-1 " + (this.props.blogPost.author_image && "author-no-overide"),
				src: this.props.blogPost.author_image ? this.props.blogPost.author_image : "https://skins.mcstats.com/face/" + this.props.blogPost.author_uuid
			}), ke.createElement("span", {
				className: "author " + (this.props.blogPost.author_image && "author-no-overide")
			}, this.props.blogPost.author)), ke.createElement("a", {
				className: `read-more read-more-${this.props.blogPost.button_color || "BLUE"} card-link lunar-text clickable`,
				onClick: () => {
					! function sendOpenBlogPost(oe, se, _e, ke, Te, Ne) {
						dt.event("Home", "Open blog post " + oe)
							.send(), sendGA4Event("open_blog_post", {
								title: oe,
								author: se,
								url: _e,
								excerpt: ke,
								position: Te,
								forced: Ne
							})
					}(this.props.blogPost.title, this.props.blogPost.author, this.props.blogPost.link, this.props.blogPost.excerpt, this.props.index + 1, this.props.blogPost.forced || !1), Oe.shell.openExternal(this.props.blogPost.link)
				}
			}, ke.createElement("i", {
				className: zt[this.props.blogPost.button_icon || "BOOK"] + " mr-1"
			}), this.props.blogPost.button_text || "Read more"))))
		}
	}
	class QuickServer_QuickServer extends ke.Component {
		getHoverText() {
			return this.props.playable ? "<i class='fas fa-2x fa-gamepad compat-ver mr-2'></i>" + this.props.server.name + "<br>点击启动客户端!" : "<i class='fas fa-2x fa-times incompat-ver mr-2'></i>" + this.props.server.name + "<br>不兼容的版本 " + getSelectedVersion()
		}
		render() {
			return ke.createElement("div", {
				className: "quick-holder " + (this.props.playable ? "" : "disabled"),
				"data-toggle": "tooltip",
				"data-trigger": "hover",
				"data-html": "true",
				"data-placement": "right",
				title: "",
				"data-original-title": this.getHoverText(),
				onMouseEnter: () => {
					sendHoverQuickJoinServer("Home", this.props.server, this.props.index + 1)
				},
				onClick: () => {
					sendQuickJoinServer("Home", this.props.server, this.props.index + 1), this.props.onClick()
				}
			}, ke.createElement("img", {
				draggable: !1,
				src: this.props.server.icon,
				alt: this.props.server.name
			}))
		}
	}
	class HomePage_HomePage extends ke.Component {
		checkIfPlayable(oe) {
			const se = getSelectedVersion(),
				_e = getSelectedSubversion(),
				ke = this.props.versions.find(oe => oe.id === se);
			if (!ke) return !1;
			const Te = ke.subversions.find(oe => oe.id == _e);
			return !!Te && oe.supportedVersions.includes(Te.id)
		}
		render() {
			return ke.createElement("div", {
				id: "home-container"
			}, ke.createElement("div", {
					id: "quick-servers"
				}, this.props.servers.slice(0, 9)
				.filter(oe => oe.placement.includes("LAUNCHER_HOME"))
				.map((oe, se) => ke.createElement(QuickServer_QuickServer, {
					key: oe.name,
					server: oe,
					playable: this.checkIfPlayable(oe),
					onClick: () => this.props.serversOnClick(oe),
					index: se
				})), ke.createElement("svg", {
					viewBox: "0 0 500 80",
					preserveAspectRatio: "none",
					style: {
						display: "none"
					}
				}, ke.createElement("path", {
					d: "M -0.482 9.603 L -0.677 80.008 C 79.657 62.14 137.788 74.957 233.458 77.332 C 309.163 79.211 419.492 62.987 500.321 80.254 L 500.451 0.925 C 505.398 -0.598 428.406 10.611 324.697 13.527 C 246.272 15.732 57.524 -12.057 -0.482 9.603 Z",
					fill: "white"
				}))), ke.createElement("div", {
				id: "recent-news"
			}, ke.createElement("h5", null, "公告"), ke.createElement("div", {
				className: "row"
			}, this.props.blogPosts.map((oe, se) => ke.createElement(BlogPostTile_BlogPostTile, {
				key: oe.title,
				blogPost: oe,
				index: se
			})))))
		}
	}
	var Wt = _e(26),
		Vt = _e.n(Wt);
	class ServerTile_ServerTile extends ke.Component {
		constructor(oe) {
			super(oe), this.intervalId = null, this.state = {
				playersOnline: -1
			}
		}
		componentDidMount() {
			this.intervalId = setInterval(() => this.tick(), 6e4), this.tick()
		}
		componentWillUnmount() {
			this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
		}
		tick() {
			Vt.a.ping(this.props.server.pingIp, 25565, (oe, se) => {
				let _e = -1;
				oe ? console.log("Could not ping " + this.props.server.pingIp + ": " + oe) : _e = se.players.online, null !== this.intervalId && this.setState({
					playersOnline: _e
				})
			})
		}
		getServerBackground() {
			return "christmas" === this.props.activeTheme ? "linear-gradient(to top, #98c5e68a, #98c5e657), url('" + this.props.server.background + "')" : "url('" + this.props.server.background + "')"
		}
		render() {
			var oe;
			return oe = -1 == this.state.playersOnline ? ke.createElement("div", {
				className: "spinner-border text-light",
				role: "status"
			}, ke.createElement("span", {
				className: "sr-only"
			}, "Loading...")) : this.state.playersOnline.toLocaleString(), ke.createElement("div", {
				className: "col-4 " + (this.props.disableRegion ? "disable-region" : "")
			}, ke.createElement("div", {
				className: "card server-card",
				onClick: () => {
					sendQuickJoinServer("Servers Tab", this.props.server, this.props.index + 1), this.props.onClick()
				},
				onMouseEnter: () => {
					sendHoverQuickJoinServer("Servers Tab", this.props.server, this.props.index + 1)
				}
			}, ke.createElement("div", {
				className: "card-body py-4 server-body",
				style: {
					backgroundImage: this.getServerBackground()
				}
			}, ke.createElement("div", {
				className: "server-inner"
			}, ke.createElement("div", {
				className: "logo-holder"
			}, ke.createElement("img", {
				draggable: !1,
				src: this.props.server.icon,
				alt: "Logo"
			})), ke.createElement("div", {
				className: "server-information lunar-text"
			}, ke.createElement("h5", {
				className: "card-title"
			}, this.props.server.name), ke.createElement("p", {
				className: "card-text"
			}, "Players Online: ", ke.createElement("span", null, oe)), ke.createElement("p", {
				className: "card-text"
			}, "IP: ", ke.createElement("span", null, this.props.server.ip)), !this.props.disableRegion && ke.createElement("p", {
				className: "card-text"
			}, "Region: ", ke.createElement("span", null, this.props.server.region)), ke.createElement("p", {
				className: "card-text"
			}, "Games: ", ke.createElement("span", null, this.props.server.gameMode))), ke.createElement("div", {
				className: "server-play lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-play fa-lg"
			}), ke.createElement("h4", null, "PLAY"))))))
		}
	}
	class SpacerServerTile_SpacerServerTile extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "col-4",
				style: {
					height: "16.25vh"
				}
			})
		}
	}
	class ServersPage_ServersPage extends ke.Component {
		constructor(oe) {
			super(oe);
			const se = this.props.servers.filter(oe => oe.placement.includes("LAUNCHER_SERVERS"));
			this.state = {
				page: 0,
				servers: se,
				maxIndex: Math.max(Math.ceil(se.length / 9) - 1, 0)
			}
		}
		modifyPage(oe) {
			const se = this.state.page + oe;
			se < 0 || se > this.state.maxIndex || (! function sendServerPageSwitch(oe, se) {
				dt.event("Servers", "Server page switch from " + oe + " to " + se)
					.send(), sendGA4Event("server_page_switch", {
						from: oe,
						to: se
					})
			}(this.state.page + 1, se + 1), this.setState({
				page: se
			}))
		}
		render() {
			var oe;
			const se = this.state.servers.slice(9 * this.state.page, 9 * (this.state.page + 1));
			for (; se.length < 9;) se.push(null);
			return ke.createElement("div", {
				id: "servers-container",
				className: "container-fluid"
			}, ke.createElement("div", {
				className: "servers-page-button " + (0 === this.state.page ? "disabled" : ""),
				onClick: () => this.modifyPage(-1)
			}, ke.createElement("i", {
				className: "fas fa-chevron-left fa-3x"
			})), ke.createElement("div", {
				className: "row container-fluid",
				id: "servers"
			}, this.props.serversCtaEnabled && ke.createElement("div", {
				className: "servers-cta col-12"
			}, ke.createElement("img", {
				src: null === (oe = this.props.serversCta) || void 0 === oe ? void 0 : oe.image[this.props.activeTheme || "default"],
				onMouseEnter: () => {
					var oe;
					! function sendServersCTAHover(oe) {
						dt.event("Servers", "Hovered over Servers CTA")
							.send(), sendGA4Event("servers_cta_hover", {
								url: oe
							})
					}(null === (oe = this.props.serversCta) || void 0 === oe ? void 0 : oe.url)
				},
				onClick: () => {
					var oe, se;
					this.props.serversCta && Oe.shell.openExternal(null === (oe = this.props.serversCta) || void 0 === oe ? void 0 : oe.url),
						function sendServersCTAClick(oe) {
							dt.event("Servers", "Clicked Servers CTA")
								.send(), sendGA4Event("servers_cta_click", {
									url: oe
								})
						}(null === (se = this.props.serversCta) || void 0 === se ? void 0 : se.url)
				}
			})), se.map((oe, se) => oe ? ke.createElement(ServerTile_ServerTile, {
				key: oe.name,
				server: oe,
				index: 9 * this.state.page + se,
				activeTheme: this.props.activeTheme,
				onClick: () => this.props.serversOnClick(oe),
				disableRegion: this.props.serversCtaEnabled
			}) : ke.createElement(SpacerServerTile_SpacerServerTile, {
				key: se
			}))), ke.createElement("div", {
				className: "servers-page-button " + (this.state.page === this.state.maxIndex ? "disabled" : ""),
				onClick: () => this.modifyPage(1)
			}, ke.createElement("i", {
				className: "fas fa-chevron-right fa-3x"
			})))
		}
	}
	class LaunchButton_LaunchButton extends ke.Component {
		render() {
			const oe = this.props.touchBarButton;
			oe.label = this.props.text + " " + {
				准备启动: "🚀",
				启动中: "🔨",
				错误: "⚠️"
			} [this.props.state], oe.backgroundColor = {
				准备启动: "#179d44",
				启动中: "#800080",
				错误: "#db4040"
			} [this.props.state], oe.enabled = "ready" === this.props.state;
			let se = "ready" === this.props.state;
			return ke.createElement("div", {
				id: "launch-container",
				style: {
					height: this.props.height + "%"
				}
			}, ke.createElement("div", {
				id: "launch-btn",
				className: this.props.state,
				style: {
					backgroundImage: `url(${this.props.images[this.props.activeTheme || "default"].background})`
				}
			}, ke.createElement("div", {
				className: "btn-group"
			}, ke.createElement("button", {
				id: "main-btn",
				type: "button",
				role: "group",
				className: "btn lunar-text",
				onClick: () => this.props.buttonOnClick()
			}, ke.createElement("div", {
				className: "inner-text"
			}, ke.createElement("h2", null, this.props.text), ke.createElement("p", null, this.props.subtext))), se && ke.createElement("button", {
				type: "button",
				className: "btn",
				onClick: () => this.props.dropdownOnClick(),
				"data-toggle": "tooltip",
				"data-trigger": "hover",
				"data-html": "true",
				"data-placement": "right",
				title: "",
				"data-original-title": "<i class='fas fa-cogs mr-2'></i>点击查看版本设置"
			}, ke.createElement("i", {
				className: "fas fa-caret-down"
			})))))
		}
	}
	class VersionTile_VersionTile extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "card version-card " + (this.props.selected ? "selected-version " : "") + (this.props.higher ? "selected-card" : "")
			}, ke.createElement("div", {
				className: "wrapper clickable",
				onClick: () => this.props.onClick && this.props.onClick()
			}, ke.createElement("img", {
				className: "version-background",
				src: this.props.version.images.background,
				draggable: !1
			}), ke.createElement("div", {
				className: "version-description"
			}, ke.createElement("h1", {
				className: this.props.higher ? "selected-card" : ""
			}, "Version ", this.props.version.id)), ke.createElement("img", {
				className: "version-foreground",
				src: this.props.version.images.foreground,
				draggable: !1
			})))
		}
	}
	class LaunchOptionsOverlay_LaunchOptionsOverlay extends ke.Component {
		constructor(oe) {
			super(oe), this.state = {
				selectedVersion: getSelectedVersion(),
				selectedSubversion: getSelectedSubversion(),
				selectedModule: getSelectedModule()
			}, this.escapeButton = this.escapeButton.bind(this), this.mouseClicked = this.mouseClicked.bind(this)
		}
		escapeButton(oe) {
			"Escape" === oe.code && (sendCloseLaunchOptions("Escape Key"), this.props.onExit())
		}
		componentDidUpdate() {
			Ne()('[data-toggle="tooltip"]')
				.tooltip()
		}
		mouseClicked(oe) {
			const se = document.getElementById("launch-options-overlay"),
				_e = document.getElementById("launch-options-layout");
			oe.target instanceof Node && [se, _e].some(se => se === oe.target) && (sendCloseLaunchOptions("Void Click"), this.props.onExit())
		}
		componentDidMount() {
			document.addEventListener("keydown", this.escapeButton, !1), document.addEventListener("click", this.mouseClicked, !1)
		}
		componentWillUnmount() {
			document.removeEventListener("keydown", this.escapeButton, !1), document.removeEventListener("click", this.mouseClicked, !1)
		}
		render() {
			var oe = this.props.versions.find(oe => oe.id == this.state.selectedVersion);
			oe || (oe = this.props.versions.find(oe => oe.default));
			var se = oe.subversions.find(oe => oe.id == this.state.selectedSubversion);
			se || (se = oe.subversions.find(oe => oe.default));
			var _e = se.modules.find(oe => oe.id == this.state.selectedModule);
			return _e || (_e = se.modules.find(oe => oe.default)), ke.createElement("div", {
				id: "launch-options-overlay"
			}, ke.createElement("div", {
				id: "launch-options-layout"
			}, ke.createElement("div", null, ke.createElement("div", {
				id: "launch-options-title"
			}, ke.createElement("h5", null, "选择一个版本来设置新的默认值")), ke.createElement("div", {
				id: "versions-grid"
			}, this.props.versions.map(oe => ke.createElement(VersionTile_VersionTile, {
				key: oe.id,
				version: oe,
				selected: oe.id == this.state.selectedVersion,
				onClick: () => {
					var se = oe.subversions.find(oe => oe.default),
						_e = se.modules.find(oe => oe.id == this.state.selectedModule);
					_e || (_e = se.modules.find(oe => oe.default)), sendVersionSwitchEvent(getSelectedVersion(), getSelectedSubversion(), getSelectedModule(), oe.id, se.id, _e.id), this.setState({
							selectedVersion: oe.id,
							selectedSubversion: se.id,
							selectedModule: _e.id
						}),
						function setSelectedVersion(oe) {
							yt.set("selectedVersion", oe)
						}(oe.id), setSelectedSubversion(se.id), setSelectedModule(_e.id)
				}
			})))), ke.createElement("div", null, ke.createElement("div", {
				id: "launch-options-title"
			}, ke.createElement("h2", null, "游戏设置")), ke.createElement(VersionTile_VersionTile, {
				key: oe.id,
				version: oe,
				selected: !0,
				higher: !0
			}), ke.createElement("div", {
				id: "version-description"
			}, oe.description), ke.createElement("div", {
				id: "version-options"
			}, oe.subversions.map((oe, _e) => ke.createElement("div", {
				key: _e,
				className: "btn lunar-text " + (se.id === oe.id ? "selected" : ""),
				onClick: () => {
					sendVersionSwitchEvent(getSelectedVersion(), getSelectedSubversion(), getSelectedModule(), getSelectedVersion(), oe.id, getSelectedModule()), this.setState({
						selectedSubversion: oe.id
					}), setSelectedSubversion(oe.id)
				}
			}, oe.id))), ke.createElement("div", {
				className: "version-modules"
			}, ke.createElement("div", {
				id: "modules-row"
			}, ke.createElement(ke.Fragment, null, ke.createElement("span", {
				id: "modules-text"
			}, "版本:"), ke.createElement("div", {
				id: "modules-options"
			}, se.modules.map(oe => ke.createElement("div", {
				key: `subversion-${se.id}-module-${oe.id}`,
				id: "version-module",
				className: "btn lunar-text " + (_e.id === oe.id ? "selected" : ""),
				"data-toggle": "tooltip",
				"data-trigger": "hover",
				"data-html": "true",
				"data-placement": "right",
				"data-template": '<div class="tooltip version-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				title: "",
				"data-original-title": `<b>${oe.name}</b>\n                                                    ${oe.description}<br>\n                                                    ${oe.credits ? "Author: " + oe.credits : ""}`,
				onClick: () => {
					sendVersionSwitchEvent(getSelectedVersion(), getSelectedSubversion(), getSelectedModule(), getSelectedVersion(), getSelectedSubversion(), oe.id), this.setState({
						selectedModule: oe.id
					}), setSelectedModule(oe.id)
				}
			}, ke.createElement("img", {
				src: oe.image,
				draggable: !1
			}), _e.id === oe.id && ke.createElement("i", {
				className: "fas fa-check"
			})))))), ke.createElement("div", {
				id: "select-version"
			}, ke.createElement("a", {
				className: "btn lunar-text",
				onClick: () => {
					sendCloseLaunchOptions("Save Button"), this.props.onExit()
				}
			}, ke.createElement("i", {
				className: "fas fa-arrow-alt-circle-right"
			}), "保存"))))))
		}
	}
	class LaunchErrorOverlay_LaunchErrorOverlay extends ke.Component {
		constructor(oe) {
			super(oe), this.escapeButton = this.escapeButton.bind(this)
		}
		escapeButton(oe) {
			"Escape" === oe.code && this.props.onExit()
		}
		componentDidMount() {
			document.addEventListener("keydown", this.escapeButton, !1)
		}
		componentWillUnmount() {
			document.removeEventListener("keydown", this.escapeButton, !1)
		}
		render() {
			return ke.createElement("div", {
				id: "launch-error"
			}, ke.createElement("div", {
				className: "container row"
			}, ke.createElement("div", {
				className: "modal-content"
			}, ke.createElement("div", {
				className: "modal-header"
			}, ke.createElement("h5", {
				className: "modal-title"
			}, ke.createElement("i", {
				className: "fas fa-exclamation-triangle mr-2"
			}), "启动成功"), ke.createElement("button", {
				type: "button",
				onClick: () => this.props.onExit()
			}, ke.createElement("div", null))), ke.createElement("div", {
				className: "modal-body"
			}, this.props.title, ke.createElement("h3", {
				id: "errorDescription"
			}, this.props.description, this.props.url && ke.createElement(ke.Fragment, null, ke.createElement("br", null), ke.createElement("a", {
				onClick: () => Oe.shell.openExternal(this.props.url)
			}, "找出解决问题的方法. ", ke.createElement("i", {
				className: "fas fa-external-link-alt"
			}))))), ke.createElement("div", {
				className: "modal-controls"
			}, this.props.launchError && ke.createElement("button", {
				type: "button",
				className: "btn lunar-text",
				onClick: () => {
					Oe.clipboard.writeText(void 0 !== this.props.launchError ? this.props.launchError : ""), this.props.onExit()
				}
			}, ke.createElement("i", {
				className: "fas fa-copy mr-1"
			}), "复制错误"), ke.createElement("button", {
				type: "button",
				className: "btn lunar-text",
				onClick: () => Oe.shell.openExternal("https://www.lunarcn.top/help")
			}, ke.createElement("i", {
				className: "fas fa-ticket-alt mr-1"
			}), "寻求支持")), ke.createElement("div", {
				className: "modal-footer"
			}, ke.createElement("h5", null, "如果您经常遇到此问题，请就此错误联系支持人员.")))))
		}
	}
	class AfterLaunchActionSetting_AfterLaunchActionSetting extends ke.Component {
		constructor(oe) {
			super(oe), this.state = {
				action: getAfterLaunchAction()
			}
		}
		buttonClicked(oe) {
			this.setState({
					action: oe
				}),
				function setAfterLaunchAction(oe) {
					yt.set("afterLaunchAction", oe)
				}(oe)
		}
		render() {
			return ke.createElement("div", {
				id: "on-launch-settings",
				className: "mini-card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-play-circle mr-1"
			}), "启动之后"), ke.createElement("h5", {
				className: "mini-card-subtitle"
			}, "启动之后会发生什么"), ke.createElement("button", {
				type: "button",
				role: "group",
				className: "btn lunar-text mb-2 " + ("HIDE" == this.state.action ? "selected-setting" : ""),
				onClick: () => this.buttonClicked("HIDE")
			}, "隐藏启动器"), ke.createElement("br", null), ke.createElement("button", {
				type: "button",
				"data-toggle": "tooltip",
				"data-trigger": "hover",
				"data-html": "true",
				"data-placement": "right",
				title: "",
				"data-original-title": "<i class='fas fa-2x fa-info-circle mr-2'></i>游戏启动后，启动器将保持打开状态。.",
				role: "group",
				className: "btn lunar-text mb-2 " + ("KEEP_OPEN" == this.state.action ? "selected-setting" : ""),
				onClick: () => this.buttonClicked("KEEP_OPEN")
			}, "保持不变"))
		}
	}
	class AllocatedMemorySetting_AllocatedMemorySetting extends ke.Component {
		constructor(oe) {
			super(oe), this.pendingSave = null, this.state = {
				allocatedMemoryMb: getAllocatedMemory()
			}
		}
		sliderChanged(oe) {
			let se = parseInt(oe.target.value);
			this.setState({
				allocatedMemoryMb: se
			}), null != this.pendingSave && clearTimeout(this.pendingSave), this.pendingSave = setTimeout(() => function setAllocatedMemory(oe) {
				yt.set("allocatedMemory", oe)
			}(se), 500)
		}
		render() {
			let oe = this.state.allocatedMemoryMb / 1024,
				se = (this.props.maxMemoryMb - this.state.allocatedMemoryMb) / 1024;
			return ke.createElement("div", {
				className: "mini-card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-sliders-h mr-1"
			}), "分配内存"), ke.createElement("h5", {
				className: "mini-card-subtitle"
			}, "我们应该为游戏分配多少内存"), ke.createElement("input", {
				type: "range",
				className: "custom-range py-3",
				min: this.props.minMemoryMb,
				value: this.state.allocatedMemoryMb,
				max: this.props.maxMemoryMb,
				onChange: oe => this.sliderChanged(oe)
			}), ke.createElement("h3", null, oe.toFixed(1), "GB"), ke.createElement("h4", null, "电脑还有 ", se.toFixed(1), "GB 可以分配"))
		}
	}
	class LaunchDirectorySetting_LaunchDirectorySetting extends ke.Component {
		constructor(oe) {
			super(oe), this.state = {
				directory: getLaunchDirectory()
			}
		}
		async openDialog() {
			const oe = await Oe.remote.dialog.showOpenDialog({
				title: "选择客户端文件夹",
				defaultPath: getLaunchDirectory(),
				properties: ["openDirectory", "createDirectory", "showHiddenFiles"]
			});
			if (oe.filePaths.length > 0) {
				const se = oe.filePaths[0];
				try {
					Object(Me.writeFileSync)(Object(je.join)(se, "test"), ""), Object(Me.unlinkSync)(Object(je.join)(se, "test")), this.setState({
							directory: se
						}),
						function setLaunchDirectory(oe) {
							yt.set("launchDirectory", oe)
						}(se)
				} catch (oe) {
					Oe.remote.dialog.showMessageBox({
						type: "error",
						title: "无法访问文件夹",
						message: "您试图选择的目录无法访问,请选择不同的目录."
					})
				}
			}
		}
		render() {
			const oe = Object(Re.userInfo)()
				.username,
				se = "*".repeat(oe.length),
				_e = this.state.directory.replace(oe, se);
			return ke.createElement("div", {
				id: "launch-directory",
				className: "mini-card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "far fa-folder-open mr-1"
			}), "客户端目录"), ke.createElement("h5", {
				className: "mini-card-subtitle"
			}, "选择客户端目录"), ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button mb-3",
				onClick: () => this.openDialog()
			}, ke.createElement("i", {
				className: "fas fa-gamepad"
			}), "改变目录"), ke.createElement("h4", null, "您当前的目录设置为:"), ke.createElement("h3", null, _e))
		}
	}
	class ResolutionPresetItem_ResolutionPresetItem extends ke.Component {
		onClick() {
			this.props.onSelect(this.props.width, this.props.height)
		}
		render() {
			return ke.createElement("a", {
				className: "dropdown-item",
				onClick: () => this.onClick()
			}, this.props.width, "x", this.props.height, !0 === this.props.isDefault ? ke.createElement("span", {
				style: {
					fontSize: "x-small"
				}
			}, " (Default)") : null)
		}
	}
	class ResolutionPresetMenu_ResolutionPresetMenu extends ke.Component {
		constructor(oe) {
			super(oe), this.state = {
				expanded: !1
			}, this.onSelect = this.onSelect.bind(this), this.toggle = this.toggle.bind(this), this.escapeButton = this.escapeButton.bind(this), this.mouseClicked = this.mouseClicked.bind(this)
		}
		onSelect(oe, se) {
			this.setState({
				expanded: !1
			}), this.props.onSelect(oe, se)
		}
		toggle() {
			this.setState({
				expanded: !this.state.expanded
			})
		}
		escapeButton(oe) {
			"Escape" === oe.code && this.setState({
				expanded: !1
			})
		}
		mouseClicked(oe) {
			const se = document.getElementById("presetsArea");
			oe.target instanceof Node && se && !se.contains(oe.target) && this.setState({
				expanded: !1
			})
		}
		componentDidMount() {
			document.addEventListener("keydown", this.escapeButton, !1), document.addEventListener("click", this.mouseClicked, !0)
		}
		componentWillUnmount() {
			document.removeEventListener("keydown", this.escapeButton, !1), document.removeEventListener("click", this.mouseClicked, !0)
		}
		render() {
			return ke.createElement("div", {
				id: "presetsArea",
				className: "btn-group dropup mr-2"
			}, ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button dropdown-toggle",
				onClick: this.toggle
			}, ke.createElement("i", {
				className: "fas fa-desktop"
			}), "Presets"), ke.createElement("div", {
				id: "presets-menu",
				className: "dropdown-menu" + (this.state.expanded ? " show" : "")
			}, ke.createElement("h1", null, ke.createElement("i", {
				className: "fas fa-desktop mr-2"
			}), "分辨率预设"), ke.createElement("h5", null, "为你的客户端窗口选择一个预设的分辨率"), ke.createElement("div", {
				className: "row no-gutters"
			}, ke.createElement("div", {
				className: "col-4"
			}, ke.createElement("h6", {
				className: "dropdown-header"
			}, "4:3"), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 640,
				height: 480,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 800,
				height: 600,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1024,
				height: 768,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1280,
				height: 960,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1280,
				height: 1024,
				onSelect: this.onSelect
			})), ke.createElement("div", {
				className: "col-4"
			}, ke.createElement("h6", {
				className: "dropdown-header"
			}, "16:9"), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 854,
				height: 480,
				onSelect: this.onSelect,
				isDefault: !0
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1280,
				height: 720,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1360,
				height: 768,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1600,
				height: 900,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1920,
				height: 1080,
				onSelect: this.onSelect
			})), ke.createElement("div", {
				className: "col-4"
			}, ke.createElement("h6", {
				className: "dropdown-header"
			}, "16:10"), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1280,
				height: 768,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1280,
				height: 800,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1440,
				height: 900,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1600,
				height: 1024,
				onSelect: this.onSelect
			}), ke.createElement(ResolutionPresetItem_ResolutionPresetItem, {
				width: 1680,
				height: 1050,
				onSelect: this.onSelect
			})))))
		}
	}
	class ResolutionSetting_ResolutionSetting extends ke.Component {
		constructor(oe) {
			super(oe);
			const [se, _e] = getResolution();
			this.state = {
				width: se,
				height: _e
			}, this.widthRef = ke.createRef(), this.heightRef = ke.createRef(), this.selectResolution = this.selectResolution.bind(this), this.saveResolution = this.saveResolution.bind(this)
		}
		selectResolution(oe, se) {
			this.widthRef.current && (this.widthRef.current.value = ""), this.heightRef.current && (this.heightRef.current.value = ""), this.setState({
				width: oe,
				height: se
			}), setResolution(oe, se)
		}
		saveResolution() {
			let oe = this.state.width,
				se = this.state.height;
			const _e = this.widthRef.current ? Number.parseInt(this.widthRef.current.value) : 0,
				ke = this.heightRef.current ? Number.parseInt(this.heightRef.current.value) : 0;
			_e > 0 && _e < 1e4 && (oe = _e), ke > 0 && ke < 1e4 && (se = ke), this.widthRef.current && (this.widthRef.current.value = ""), this.heightRef.current && (this.heightRef.current.value = ""), this.setState({
				width: oe,
				height: se
			}), setResolution(oe, se)
		}
		render() {
			return ke.createElement("div", {
				id: "resolution",
				className: "mini-card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-compress mr-1"
			}), "Resolution"), ke.createElement("h5", {
				className: "mini-card-subtitle"
			}, "输入启动游戏的分辨率"), ke.createElement("div", {
				id: "resolution-input-headers",
				className: "row no-gutters"
			}, ke.createElement("div", {
				className: "col-3"
			}, ke.createElement("p", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-text-width mr-1"
			}), "宽度")), ke.createElement("div", {
				className: "col-1"
			}), ke.createElement("div", {
				className: "col-3"
			}, ke.createElement("p", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-text-height mr-1"
			}), "高度"))), ke.createElement("div", {
				id: "resolution-input-boxes",
				className: "row no-gutters"
			}, ke.createElement("div", {
				className: "col-3"
			}, ke.createElement("input", {
				id: "width-input",
				ref: this.widthRef,
				className: "form-control",
				type: "text",
				placeholder: this.state.width.toString()
			})), ke.createElement("div", {
				className: "col-1"
			}, ke.createElement("p", null, "X")), ke.createElement("div", {
				className: "col-3"
			}, ke.createElement("input", {
				id: "height-input",
				ref: this.heightRef,
				className: "form-control",
				type: "text",
				placeholder: this.state.height.toString()
			}))), ke.createElement("div", {
				className: "mt-2"
			}, ke.createElement(ResolutionPresetMenu_ResolutionPresetMenu, {
				onSelect: this.selectResolution
			}), ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button",
				onClick: this.saveResolution
			}, ke.createElement("i", {
				className: "fas fa-save"
			}), "保存")))
		}
	}
	class ExperimentalUpdatesSetting_ExperimentalUpdatesSetting extends ke.Component {
		constructor(oe) {
			super(oe), this.state = {
				enabled: getExperimentalEnabled(),
				invalid: !1,
				branch: getExperimentalBranch(),
				prettyBranch: yt.get("experimental.branchPretty", yt.get("experimental.branch", "development"))
			}, this.branchInputRef = ke.createRef(), this.enterKey = this.enterKey.bind(this)
		}
		enterKey(oe) {
			"Enter" === oe.code && (this.saveBranch(), this.updateMeta())
		}
		componentDidMount() {
			document.addEventListener("keydown", this.enterKey, !1)
		}
		componentWillUnmount() {
			document.removeEventListener("keydown", this.enterKey, !1)
		}
		buttonClicked(oe) {
			this.setState({
				enabled: oe
			}), setExperimentalEnabled(oe), this.saveBranch(), this.updateMeta()
		}
		async saveBranch() {
			if (!this.state.enabled) return;
			const oe = this.branchInputRef.current;
			if (!oe) return;
			const se = oe.value.replace(/[\/\.\+]/g, "_");
			se.match(/^[a-zA-Z0-9:_~-]{2,128}$/) && (this.setState({
				branch: se,
				prettyBranch: oe.value
			}), setExperimentalBranch(se), function setPrettyExperimentalBranch(oe) {
				yt.set("experimental.branchPretty", oe)
			}(oe.value), oe.value = "")
		}
		async updateMeta() {
			(await this.props.requestLauncherMetadata(!0))
			.branchReset ? this.setState({
				branch: "master",
				prettyBranch: "master",
				enabled: !1,
				invalid: !0
			}) : this.setState({
				invalid: !1
			})
		}
		render() {
			return ke.createElement("div", {
				id: "branch-settings",
				className: "mini-card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-flask mr-1"
			}), "试验功能"), ke.createElement("h5", {
				className: "mini-card-subtitle"
			}, "你想要新的，但是可能有问题的功能吗？"), ke.createElement("div", null, ke.createElement("button", {
				type: "button",
				role: "group",
				className: "btn lunar-text mb-2 " + (this.state.enabled ? "" : "selected-setting"),
				onClick: () => this.buttonClicked(!1)
			}, "稳定分支"), ke.createElement("button", {
				type: "button",
				role: "group",
				className: "btn lunar-text mb-3 " + (this.state.enabled ? "selected-setting" : ""),
				onClick: () => this.buttonClicked(!0)
			}, "试验分支"), ke.createElement("div", {
				className: "desc"
			}, this.state.invalid ? ke.createElement("div", {
				"data-mode": "stable"
			}, ke.createElement("i", {
				className: "fas fa-2x fa-times-circle mr-1"
			}), ke.createElement("p", null, "未找到请求的分支，默认为master。")) : this.state.enabled ? ke.createElement("div", {
				"data-mode": "experimental"
			}, ke.createElement("i", {
				className: "fas fa-2x fa-exclamation-triangle mr-1"
			}), ke.createElement("p", null, "警告:客户端的实验分支将包含错误.")) : ke.createElement("div", {
				"data-mode": "stable"
			}, ke.createElement("i", {
				className: "fas fa-2x fa-times-circle mr-1"
			}), ke.createElement("p", null, "您必须打开实验模式才能输入自定义分支名称。"))), ke.createElement("div", {
				id: "branch-section",
				className: this.state.enabled ? "" : "disabled"
			}, ke.createElement("div", {
				className: "mx-4"
			}, ke.createElement("h1", null, "实验分支名称"), ke.createElement("div", {
				className: "input-group"
			}, ke.createElement("div", {
				className: "input-group-prepend"
			}, ke.createElement("span", {
				className: "input-group-text pl-3"
			}, ke.createElement("i", {
				className: "fas fa-code-branch"
			}))), ke.createElement("input", {
				type: "text",
				id: "branchNameInput",
				placeholder: "输入分支名...",
				ref: this.branchInputRef,
				disabled: !this.state.enabled
			}), ke.createElement("div", {
				className: "input-group-append"
			}, ke.createElement("span", {
				className: "input-group-text"
			}, ke.createElement("i", {
				className: "fas fa-save",
				onClick: () => {
					this.saveBranch(), this.updateMeta()
				}
			}))))), ke.createElement("h5", null, "您当前的分支设置为 ", ke.createElement("span", null, this.state.prettyBranch)))))
		}
	}
	class SettingsPage_SettingsPage extends ke.Component {
		render() {
			let oe = Object(Re.totalmem)() / 1024 / 1024;
			return ke.createElement("div", {
				className: "large-container container-fluid"
			}, ke.createElement("div", {
				className: "row"
			}, ke.createElement("div", {
				id: "client-settings",
				className: "col-12"
			}, ke.createElement("div", {
				className: "card"
			}, ke.createElement("div", {
				id: "client-settings-title",
				className: "large-card-title lunar-text"
			}, ke.createElement("h1", null, ke.createElement("i", {
				className: "fas fa-sliders-h"
			}), "客户端设置"), ke.createElement("h6", null, "内存分配和启动器首选项")), ke.createElement("div", {
				id: "client-settings-content",
				className: "card-body"
			}, ke.createElement("div", null, ke.createElement("div", {
				className: "col-8 left"
			}, ke.createElement("div", {
				className: "col-6 mb-3"
			}, ke.createElement(AfterLaunchActionSetting_AfterLaunchActionSetting, null)), ke.createElement("div", {
				className: "col-6 mb-3"
			}, ke.createElement(AllocatedMemorySetting_AllocatedMemorySetting, {
				minMemoryMb: 512,
				maxMemoryMb: oe
			})), ke.createElement("div", {
				className: "col-6"
			}, ke.createElement(LaunchDirectorySetting_LaunchDirectorySetting, null)), ke.createElement("div", {
				className: "col-6"
			}, ke.createElement(ResolutionSetting_ResolutionSetting, null))), ke.createElement("div", {
				className: "col-4"
			}, ke.createElement(ExperimentalUpdatesSetting_ExperimentalUpdatesSetting, Object.assign({}, this.props)))))))))
		}
	}
	class LegalCard_LegalCard extends ke.Component {
		render() {
			const oe = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "licenses");
			return ke.createElement("div", {
				className: "card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-file-contract mr-1"
			}), "LEGAL"), ke.createElement("div", {
				className: "terms-bullet-holder"
			}, ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button",
				onClick: () => Oe.shell.openExternal("https://www.lunarclient.com/terms/")
			}, ke.createElement("i", {
				className: "fas fa-gavel"
			}), "条款"), ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button",
				onClick: () => {
					Oe.shell.openPath(oe)
				}
			}, ke.createElement("i", {
				className: "fas fa-file-contract"
			}), "许可证")), ke.createElement("p", null, "确保您遵守我们的服务条款和第三方许可."))
		}
	}
	class LauncherVersionCard_LauncherVersionCard extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-code-branch mr-1"
			}), "启动器版本"), ke.createElement("h4", null, "v", Xe), ke.createElement("p", null, "Electron: v", process.versions.electron, " • Chrome: v", process.versions.chrome, " • Node: v", process.versions.node))
		}
	}
	class FolderCard_FolderCard extends ke.Component {
		constructor(oe) {
			super(oe), this.state = {
				showModal: !1
			}
		}
		render() {
			const oe = mt.a.transports.file.getFile()
				.path,
				se = Object(je.join)(Object(Re.homedir)(), ".lunarclient", "offline", "multiver", "overrides");
			return ke.createElement(ke.Fragment, null, ke.createElement("div", {
				className: "card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-folder"
			}), "文件夹"), ke.createElement("div", {
				className: "terms-bullet-holder"
			}, ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button",
				onClick: () => {
					! function sendOpenLogFolder() {
						dt.event("关于", "打开日志文件夹")
							.send(), sendGA4Event("open_log_folder", {})
					}(), Oe.shell.showItemInFolder(oe)
				}
			}, ke.createElement("i", {
				className: "fas fa-folder-open"
			}), "日志"), this.props.overrides && ke.createElement("button", {
				type: "button",
				className: "btn lunar-text bullet-button",
				onClick: () => {
					this.setState({
						showModal: !0
					})
				}
			}, ke.createElement("i", {
				className: "fas fa-file-upload"
			}), "Overrides")), ke.createElement("p", null, "启动时遇到问题？使用支持系统将您的日志发送给我们！")), this.state.showModal && ke.createElement("div", {
				id: "about-modal"
			}, ke.createElement("div", {
				className: "container row"
			}, ke.createElement("div", {
				className: "modal-content"
			}, ke.createElement("div", {
				className: "modal-header"
			}, ke.createElement("h5", {
				className: "modal-title"
			}, ke.createElement("i", {
				className: "fas fa-exclamation-triangle mr-2"
			}), "你确定你要这么做吗？"), ke.createElement("button", {
				type: "button",
				onClick: () => this.setState({
					showModal: !1
				})
			}, ke.createElement("div", null))), ke.createElement("div", {
				className: "modal-body"
			}, "覆盖 JAR 文件有潜在危险!", ke.createElement("p", null, "如果您对此不确定，请访问 ", ke.createElement("a", {
				onClick: () => Oe.shell.openExternal("https://www.lunarclient.com/overrides/")
			}, "我们的支持页面"), " for more information."), ke.createElement("div", {
				id: "modal-btns"
			}, ke.createElement("button", {
				type: "button",
				className: "btn btn-danger lunar-text",
				onClick: () => {
					Oe.shell.openPath(se), this.setState({
						showModal: !1
					})
				}
			}, "打开"), ke.createElement("button", {
				type: "button",
				className: "btn btn-primary lunar-text",
				onClick: () => this.setState({
					showModal: !1
				})
			}, "返回安全")))))))
		}
	}
	class AboutUsCard_AboutUsCard extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "col-12 card"
			}, ke.createElement("h1", {
				className: "lunar-text"
			}, ke.createElement("i", {
				className: "fas fa-user-shield mr-1"
			}), "关于我们"), ke.createElement("p", {
				id: "about-blurb"
			}, "Lunar Client是一个免费的Mod pack, 是由一群热爱PVP的玩家创造的", ke.createElement("br", null), "你只需安装启动器, 游戏就会自动更新, 我们的目标是", ke.createElement("br", null), "创造最佳的Minecraft PVP客户端, 如果有任何疑问, 可以点击下面的链接与我们联系"))
		}
	}
	class QuickLink_QuickLink extends ke.Component {
		render() {
			return ke.createElement("button", {
				className: "btn lunar-text",
				onClick: () => {
					! function sendOpenQuickLink(oe, se) {
						dt.event("关于", "Open quick link " + oe)
							.send(), sendGA4Event("open_quick_link", {
								name: oe,
								url: se
							})
					}(this.props.name, this.props.link), Oe.shell.openExternal(this.props.link)
				}
			}, ke.createElement("i", {
				className: "mr-1 fas " + this.props.icon
			}), this.props.name)
		}
	}
	class QuickLinksCard_QuickLinksCard extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "col-12 card"
			}, ke.createElement("h1", {
				className: "mb-3"
			}, ke.createElement("i", {
				className: "fas fa-external-link-alt mr-1"
			}), "链接"), ke.createElement("div", {
				id: "quick-links"
			}, 	ke.createElement(QuickLink_QuickLink, {
                name: "官方群",
                icon: "fa-ticket-alt",
                link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=fMljGgqGxlY1YXEqx8Kh5BeubV6llnxA&authKey=3qPrdfjK8mnu%2BxmystTM%2B4jYvp1G571Pj4Jn8FWMQCwoMahzXrOymYVyIl6RP85H&noverify=0&group_code=716975958"
            }),
            ke.createElement(QuickLink_QuickLink, {
                name: "Wiki",
                icon: "fa-question",
                link: "https://lunarcn.top/help"
            }),
            ke.createElement(QuickLink_QuickLink, {
                name: "官网",
                icon: "fa-globe-americas",
                link: "https://lunarcn.top/"
			})))
		}
	}
	class AboutPage_AboutPage extends ke.Component {
		render() {
			return ke.createElement("div", {
				className: "large-container container-fluid"
			}, ke.createElement("div", {
				className: "row"
			}, ke.createElement("div", {
				id: "about-information",
				className: "col-12"
			}, ke.createElement("div", {
				className: "card"
			}, ke.createElement("div", {
				id: "about-information-title",
				className: "large-card-title lunar-text"
			}, ke.createElement("h1", null, ke.createElement("i", {
				className: "fas fa-info-circle mr-1"
			}), "启动器信息"), ke.createElement("h6", null, "启动器版本、日志文件夹和链接")), ke.createElement("div", {
				id: "about-information-content",
				className: "card-body"
			}, ke.createElement("div", null, ke.createElement(AboutUsCard_AboutUsCard, null), ke.createElement("div", {
				className: "row my-3"
			}, ke.createElement("div", {
				className: "col-4"
			}, ke.createElement(LegalCard_LegalCard, null)), ke.createElement("div", {
				className: "col-4"
			}, ke.createElement(LauncherVersionCard_LauncherVersionCard, null)), ke.createElement("div", {
				className: "col-4"
			}, ke.createElement(FolderCard_FolderCard, {
				overrides: this.props.overrides
			}))), ke.createElement(QuickLinksCard_QuickLinksCard, null)))))))
		}
	}

	
	class NewQuickLink_QuickLink extends ke.Component {
	  constructor(props) {
		super(props);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	  }
	
	  handleButtonClick() {
		this.props.onClick();
	  }
	
	  render() {
		return ke.createElement("button", {
		  className: "btn lunar-text",
		  onClick: this.handleButtonClick
		}, ke.createElement("i", {
		  className: "mr-1 fas " + this.props.icon
		}), this.props.name);
	  }
	}


	//LunarCN页面
	const { shell, ipcRenderer, remote } = require('electron');
const fs = require('fs').promises;
const path = require('path');
class ImportModsCard extends ke.Component {
  constructor(props) {
    super(props);
    this.handleModClick = this.handleModClick.bind(this);
    this.handleJavaagentClick = this.handleJavaagentClick.bind(this);
	this.handleOpenDirectoryClick = this.handleOpenDirectoryClick.bind(this);
	this.handleCheckUpdateClick = this.handleCheckUpdateClick.bind(this);
    this.state = {
      localVersion: 'v1.0', //版本
      latestVersion: ''
	  };
  }

  async handleModClick() {
    const dialogOptions = {
      title: '选择Mod文件',
      properties: ['openFile'],
      filters: [{ name: 'Mod Files', extensions: ['jar'] }]
    };

    try {
      const result = await remote.dialog.showOpenDialog(dialogOptions);
      if (!result.canceled && result.filePaths.length > 0) {
        const sourceFilePath = result.filePaths[0];``
        const destinationPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', 'mods', path.basename(sourceFilePath));

        await fs.copyFile(sourceFilePath, destinationPath);
        console.log('Mod file copied successfully');

        alert('Mod导入成功！');
      }
    } catch (error) {
      console.error('Error handling mod click:', error);
    }
  }

  async handleJavaagentClick() {
    const dialogOptions = {
      title: '选择Mod或Javaagent文件',
      properties: ['openFile'],
      filters: [{ name: 'Javaagent Files', extensions: ['jar'] }]
    };

    try {
      const result = await remote.dialog.showOpenDialog(dialogOptions);
      if (!result.canceled && result.filePaths.length > 0) {
        const sourceFilePath = result.filePaths[0];
        const destinationPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', 'javaagents', path.basename(sourceFilePath));

        await fs.copyFile(sourceFilePath, destinationPath);
        console.log('Javaagent file copied successfully');

        alert('导入成功！');
      }
    } catch (error) {
      console.error('Error handling javaagent click:', error);
    }
  }
  async handleOpenDirectoryClick() {
    const directoryPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn');
    shell.openPath(directoryPath);
  }


   async handleCheckUpdateClick() {
    try {
      const response = await fetch('https://www.lunarcn.top/api/version.php');
      const responseText = await response.text();
      if (responseText.includes('document.write')) {
        const latestVersion = responseText.match(/"([^"]+)"/)[1];
        this.setState({ latestVersion }, () => {
          if (latestVersion === this.state.localVersion) {
            alert('您当前使用的是最新版。');
          } else {
            const shouldUpdate = confirm('您当前的版本不是最新版，是否要更新？');
            if (shouldUpdate) {
              shell.openExternal('https://github.com/cubewhymc/lunarclient-cn/releases/latest');
            }
          }
        });
      } else {
        alert('获取最新版本失败');
      }
    } catch (error) {
      console.error('Error checking for updates:', error);
      alert('获取最新版本失败');
    }
  }

  render() {
    return ke.createElement("div", { className: "col-12 card" },
      ke.createElement("h1", { className: "mb-3" },
        ke.createElement("i", { className: "fas fa-external-link-alt mr-1" }),
        "导入Mod或Javaagent"),
      ke.createElement("div", { id: "quick-links" },
        ke.createElement(NewQuickLink_QuickLink, {
          name: "导入Mod",
          icon: "fa-cube",
          onClick: this.handleModClick
        }),
        ke.createElement(NewQuickLink_QuickLink, {
          name: "导入Javaagent",
          icon: "fa-code",
          onClick: this.handleJavaagentClick
        }),
        ke.createElement("button", {
          id: "quick-links",
          className: "btn",
          icon: "fa-code",
          onClick: this.handleOpenDirectoryClick
        }, "打开目录"),
        ke.createElement("button", {
          id: "quick-links",
          className: "btn",
          onClick: this.handleCheckUpdateClick
        }, "检查更新")
      )
    );
  }
}
//Mod manager


class ModManager extends ke.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		mods: [],
		javaagents: [],
	  };
	  this.loadFiles = this.loadFiles.bind(this);
	  this.toggleFileStatus = this.toggleFileStatus.bind(this);
	}
  
	componentDidMount() {
	  this.loadFiles();
	}
  
	async loadFiles() {
	  const modsPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', 'mods');
	  const javaagentsPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', 'javaagents');
	  
	  try {
		const modFiles = await fs.readdir(modsPath);
		const javaagentFiles = await fs.readdir(javaagentsPath);
		
		const mods = modFiles.filter(file => file.endsWith('.jar') || file.endsWith('.jar.cn'));
		const javaagents = javaagentFiles.filter(file => file.endsWith('.jar') || file.endsWith('.jar.cn'));
		
		this.setState({ mods, javaagents });
	  } catch (error) {
		console.error('Error loading files:', error);
	  }
	}
  
	async toggleFileStatus(directory, fileName) {
	  const filePath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', directory, fileName);
	  const newFileName = fileName.endsWith('.cn') ? fileName.slice(0, -3) : `${fileName}.cn`;
	  const newFilePath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', directory, newFileName);
	  
	  try {
		await fs.rename(filePath, newFilePath);
		this.loadFiles();
	  } catch (error) {
		console.error('Error toggling file status:', error);
	  }
	}
  
	async handleDeleteClick(directory, fileName) {
		const shouldDelete = window.confirm(`是否删除文件 ${fileName}?`);
		if (shouldDelete) {
		  const filePath = path.join(
			process.env.USERPROFILE,
			'.cubewhy',
			'lunarcn',
			directory,
			fileName
		  );
	
		  try {
			await fs.unlink(filePath);
			this.loadFiles();
		  } catch (error) {
			console.error('Error deleting file:', error);
		  }
		}
	  }

	  render() {
		return ke.createElement("div", { className: "mod-manager" },
		  ke.createElement("h2", null, "加载项管理器"),
		  ke.createElement("div", { className: "mod-list", style: { maxHeight: '230px', overflowY: 'scroll', scrollbarColor: '#888 #f0f0f0', borderRadius: '5px', paddingRight: '10px', borderRadius: '5px', scrollbarWidth: 'thin' } },
			this.state.mods.map(mod => (
			  ke.createElement("div", { key: mod, className: "mod-entry" },
				ke.createElement("div", { className: "mod-name" },
				  mod.startsWith("[Mod]") ? mod : `[Mod] ${mod}`
				),
				ke.createElement("button", {
				  className: mod.endsWith('.cn') ? "btn disable-btn" : "btn enable-btn",
				  onClick: () => this.toggleFileStatus('mods', mod)
				}, mod.endsWith('.cn') ? '启用' : '禁用'),
				ke.createElement("button", {
				  className: "btn delete-btn",
				  onClick: () => this.handleDeleteClick('mods', mod)
				}, '删除')
			  )
			)),
			this.state.javaagents.map(agent => (
			  ke.createElement("div", { key: agent, className: "mod-entry" },
				ke.createElement("div", { className: "mod-name" },
				  agent.startsWith("[Agent]") ? agent : `[Agent] ${agent}`
				),
				ke.createElement("button", {
				  className: agent.endsWith('.cn') ? "btn disable-btn" : "btn enable-btn",
				  onClick: () => this.toggleFileStatus('javaagents', agent)
				}, agent.endsWith('.cn') ? '启用' : '禁用'),
				ke.createElement("button", {
				  className: "btn delete-btn",
				  onClick: () => this.handleDeleteClick('javaagents', agent)
				}, '删除')
			  )
			))
		  ),
		  this.state.showDeleteConfirmation && ke.createElement("div", { className: "delete-confirmation" },
			ke.createElement("p", null, `确认删除文件 ${this.state.fileToDelete.fileName}?`),
			ke.createElement("button", { className: "btn confirm-btn", onClick: this.confirmDelete }, '是'),
			ke.createElement("button", { className: "btn cancel-btn", onClick: this.cancelDelete }, '取消')
		  )
		);
	  }
	}
	
	class LunarCnPage extends ke.Component {
		render() {
		  return ke.createElement("div", { className: "large-container container-fluid" },
			ke.createElement("div", { className: "row" },
			  ke.createElement("div", { className: "LunarCN" },
				ke.createElement("div", { id: "quick-links-information", className: "col-12" },
				  ke.createElement(ImportModsCard, null),
				  ke.createElement(ModManager, null)
				)
			  )
			)
		  );
		}
	  }
  
	
	/* LunarCN页面结束 */
	  
//插件市场

class MarketPage extends ke.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		jarList: [],
		downloadedJars: [],
	  };
	  this.loadJarList = this.loadJarList.bind(this);
	  this.loadDownloadedJars = this.loadDownloadedJars.bind(this);
	  this.checkDownloadStatus = this.checkDownloadStatus.bind(this);
	  this.handleDownloadClick = this.handleDownloadClick.bind(this);
	}
  
	componentDidMount() {
	  this.loadJarList();
	  this.loadDownloadedJars();
	}
  
	async loadJarList() {
	  try {
		const response = await fetch('https://market.badlion.top/api/jars'); // Change the URL accordingly
		const jarList = await response.json();
		this.setState({ jarList });
	  } catch (error) {
		console.error('Error loading jar list:', error);
	  }
	}
  
	async loadDownloadedJars() {
	  const modsPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', 'mods');
	  const javaagentsPath = path.join(process.env.USERPROFILE, '.cubewhy', 'lunarcn', 'javaagents');
  
	  try {
		const modFiles = await fs.readdir(modsPath);
		const javaagentFiles = await fs.readdir(javaagentsPath);
  
		const downloadedJars = [...modFiles, ...javaagentFiles];
		this.setState({ downloadedJars });
	  } catch (error) {
		console.error('Error loading downloaded jars:', error);
	  }
	}
  
	checkDownloadStatus(jarName) {
	  return this.state.downloadedJars.some(downloadedJar => {
		const similarityThreshold = Math.floor(downloadedJar.length * 0.9);
		return jarName.slice(0, similarityThreshold) === downloadedJar.slice(0, similarityThreshold);
	  });
	}
  

	async handleDownloadClick(downloadLink, jarName, category) {
		try {
			const destinationFolder = path.join(
				process.env.USERPROFILE,
				'.cubewhy',
				'lunarcn',
				category === 'mod' ? 'mods' : 'javaagents'
			);
			const destinationPath = path.join(destinationFolder, jarName);
			const url = `https://market.badlion.top${downloadLink}`;
	
			const response = await fetch(url, {
				method: 'GET',
				headers: { 'Content-Type': 'application/octet-stream' },
			});
			const fileData = await response.arrayBuffer();
	
			// 将文件数据保存到指定路径
			fs.writeFile(destinationPath, Buffer.from(fileData), 'binary', err => {
				if (err) {
					console.error('文件下载失败:', err);
				} else {
					console.log('文件下载成功:', jarName);
	
					// 更新下载列表和状态
					this.loadDownloadedJars();
	
					// 设置定时器，在3秒后刷新列表
					setTimeout(() => {
						this.loadDownloadedJars(); // 刷新下载列表
					}, 3000);
				}
			});
		} catch (error) {
			console.error('下载时发生错误:', error);
		}
	}
	handleLinkClick() {
        // 在系统浏览器中打开指定页面
        const url = "https://github.com/CubeWhyMC/LunarClient-CN/wiki/Publish-your-mod";
        window.open(url, '_blank');
    }
	  render() {
		return ke.createElement("div", { className: "market-page" },
		  ke.createElement("h2", null, "市场"),
		  ke.createElement("h5", null, "切换其他页面来刷新此页面查看是否下载成功"),
		  ke.createElement("div", { className: "footer-text", onClick: () => this.handleLinkClick(), style: { cursor: 'pointer' } },
		  "点击提交你的mod"
	  ),
		  ke.createElement("div", { className: "jar-list", style: { maxHeight: '530px', overflowY: 'scroll', scrollbarColor: '#888 #f0f0f0', borderRadius: '5px', paddingRight: '10px', borderRadius: '5px', scrollbarWidth: 'thin' } },
			this.state.jarList.map(jar => (
			  ke.createElement("div", { key: jar.name, className: "jar-entry" },
				ke.createElement("div", { className: "jar-info" },
				  ke.createElement("span", { className: "jar-category" }, jar.category),
				  ke.createElement("span", { className: "jar-name" }, jar.name),
				),
				ke.createElement("button", {
				  className: this.checkDownloadStatus(jar.name) ? "btn downloaded-btn" : "btn download-btn",
				  onClick: () => this.handleDownloadClick(jar.downloadLink, jar.name, jar.category),
				}, this.checkDownloadStatus(jar.name) ? '已下载' : '下载'),
			  )
			))
		  )
		);
	  }
	}
  




	
	class Alert_Alert extends ke.Component {
		constructor(oe) {
			super(oe), this.intervalId = null, this.onAlertClick = oe => {
				this.props.link && (! function sendOpenAlert(oe, se) {
					dt.event("首页", "Open alert " + oe)
						.send(), sendGA4Event("open_alert", {
							name: oe,
							url: se
						})
				}(this.props.name, this.props.link), Oe.shell.openExternal(this.props.link))
			}, this.onAlertHover = oe => {
				! function sendAlertHover(oe, se, _e, ke) {
					dt.event(oe, "Hover alert " + se)
						.send(), sendGA4Event("alert_hover", {
							name: se,
							text: _e,
							link: ke
						})
				}(this.props.activeTab, this.props.name, this.props.text, this.props.link)
			}, this.state = {
				processedText: ""
			}
		}
		componentDidMount() {
			this.setState({
				processedText: this.processAlertText(this.props.text)
			}), this.isAlertDynamic(this.props.text) && (this.intervalId = setInterval(() => {
				this.setState({
					processedText: this.processAlertText(this.props.text)
				})
			}, 1e3))
		}
		componentWillUnmount() {
			this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
		}
		processAlertText(oe) {
			let se = oe.match(/{COUNTDOWN:[0-9]+}/gi);
			if (null == se || 0 == se.length) return oe;
			let _e = parseInt(se[0].substring(11, se[0].length - 1)),
				ke = Math.floor(Date.now() / 1e3),
				Te = "now";
			if (_e > ke) {
				let oe = _e - ke;
				Te = Math.floor(oe / 86400) + "d " + Math.floor(oe % 86400 / 3600) + "h " + Math.floor(oe % 3600 / 60) + "m " + Math.floor(oe % 60) + "s"
			}
			return oe.replace(/{COUNTDOWN:[0-9]+}/gi, Te)
		}
		isAlertDynamic(oe) {
			let se = oe.match(/{COUNTDOWN:[0-9]+}/gi);
			return null != se && se.length > 0
		}
		getAlertClass() {
			let oe = "";
			return this.props.link && (oe += "has-link "), this.props.color && (oe = oe + "alert-color-" + this.props.color), oe
		}
		render() {
			return ke.createElement("div", {
				id: "alert",
				onClick: this.onAlertClick,
				onMouseEnter: this.onAlertHover,
				className: this.getAlertClass()
			}, ke.createElement("i", {
				className: zt[this.props.icon]
			}), this.state.processedText)
		}
	}
	class LoadingScreen_LoadingScreen extends ke.Component {
		render() {
			return ke.createElement("div", {
				id: "loading-screen-wrapper"
			}, ke.createElement("img", {
				draggable: !1,
				src:wt,
				alt: "Moonsworth Logo"
			}))
		}
	}
	class LoadError_LoadError extends ke.Component {
		render() {
			return ke.createElement(ke.Fragment, null, ke.createElement("div", {
				className: "navbar simple"
			}, ke.createElement("div", {
				className: "container-fluid"
			}, ke.createElement("div", {
				id: "navbar-right",
				className: "col"
			}, ke.createElement(CloseButton_CloseButton, null)))), ke.createElement("div", {
				id: "loading-screen-wrapper",
				className: "error"
			}, ke.createElement("img", {
				draggable: !1,
				src: "https://www.lunarcn.top/src/images/61075476.jfif",
				alt: "Moonsworth Logo"
			}), ke.createElement("h5", null, ke.createElement("i", {
				className: "fas fa-exclamation-triangle mr-2"
			}), "Failed to load the Launcher"), ke.createElement("p", null, this.props.error), ke.createElement("div", {
				className: "load-error-controls"
			}, ke.createElement("button", {
				type: "button",
				className: "btn lunar-text",
				onClick: () => Oe.shell.openExternal("https://support.lunarclient.com/")
			}, ke.createElement("i", {
				className: "fas fa-ticket-alt mr-1"
			}), "联系支持人员"))))
		}
	}
	var Qt = _e(27),
		qt = _e.n(Qt);
	class Snow_Snow extends ke.Component {
		render() {
			return ke.createElement(qt.a, {
				id: "snow-particles",
				canvasClassName: "snow-canvas",
				options: {
					pauseOnBlur: !0,
					pauseOnOutsideViewport: !0,
					detectRetina: !0,
					fpsLimit: 60,
					particles: {
						number: {
							value: 100,
							density: {
								enable: !0,
								value_area: 900
							}
						},
						color: {
							value: "#ffffff"
						},
						opacity: {
							value: .7,
							random: !1
						},
						size: {
							value: 6,
							random: !0
						},
						line_linked: {
							enable: !1
						},
						move: {
							enable: !0,
							speed: 4,
							direction: "bottom",
							random: !0,
							straight: !1,
							out_mode: "out",
							bounce: !1
						}
					}
				}
			})
		}
	}
	class Application_Application extends ke.Component {
		constructor(oe) {
			super(oe), this.handleRandomClick = () => {
					this.setState({
						sessionClicksToLaunch: this.state.sessionClicksToLaunch + 1
					})
				}, this.state = {
					metadata: void 0,
					activeTab: "首页",
					activeTheme: "",
					launchOptionsOverlay: !1,
					launchErrorOverlay: !1,
					launchButtonText: "",
					launchButtonSubtext: "",
					launchButtonState: "ready",
					errorTitle: "Unknown error",
					errorDescription: "An unknown error has occurred.",
					launchError: void 0,
					launcherSessionId: Object(Ue.v4)(),
					sessionClicksToLaunch: 0
				}, this.requestLauncherMetadata = this.requestLauncherMetadata.bind(this), this.requestLauncherMetadata(!1),
				function sendLauncherSessionStart(oe) {
					dt.event("首页", "Launcher session start " + oe)
						.send(), sendGA4Event("launcher_session_start", {
							launcherSessionId: oe
						})
				}(this.state.launcherSessionId), sendPageView("Home"), document.documentElement.classList.add("page-home"), this.touchBarLaunchButton = new Oe.remote.TouchBar.TouchBarButton({
					label: "加载中...",
					click: () => this.launchButtonOnClick()
				});
			const se = new Oe.remote.TouchBar({
				items: [new Oe.remote.TouchBar.TouchBarSpacer({
					size: "flexible"
				}), this.touchBarLaunchButton, new Oe.remote.TouchBar.TouchBarSpacer({
					size: "flexible"
				})]
			});
			Oe.remote.getCurrentWindow()
				.setTouchBar(se)
		}
		requestLauncherMetadata(oe) {
			return new Promise(se => {
				(async function requestMetadata({
					branch: oe,
					branchChange: se
				}) {
					mt.a.info("请求资源服务器...");
					const _e = await fetchWithRetry(Ye + "metadata?" + new URLSearchParams({
						os: process.platform,
						os_release: Object(Re.release)(),
						arch: process.arch,
						launcher_version: Xe,
						branch: oe,
						branch_changed: se.toString(),
						private: getExperimentalEnabled()
					}), {
						method: "GET",
						headers: {
							"User-Agent": $e,
							"X-Installation-Id": ht,
							"X-HWID": ut,
							"X-HWID-Private": ft
						}
					});
					mt.a.info("资源服务器状态码 " + _e.status);
					var ke = await _e.json();
					return mt.a.info("内容是 " + JSON.stringify(ke)), ke
				})({
					branch: (getExperimentalEnabled() ? getExperimentalBranch() : "master")
						.split(":")
						.pop(),
					branchChange: oe
				})
				.then(_e => {
						if (_e = Object.assign(Object.assign({}, this.state.metadata), _e), this.setState({
							metadata: _e
						}), !oe) {
							if (_e.theme && ["halloween", "christmas"].includes(_e.theme)) {
								if (function getDisabledTheme() {
									return yt.get("disabledTheme", "")
								}() == _e.theme) return;
								document.documentElement.classList.remove("theme-default"), document.documentElement.classList.add("theme-" + _e.theme), this.setState({
									activeTheme: _e.theme
								})
							}
							setUserTheme("" == this.state.activeTheme ? "default" : this.state.activeTheme, !1), _e.alert && (document.documentElement.classList.add("has-alert"), function sendAlertImpression(oe, se, _e) {
								dt.event("Home", "View alert " + oe)
									.send(), sendGA4Event("alert_impression", {
										name: oe,
										text: se,
										link: _e
									})
							}(_e.alert.name, _e.alert.text, _e.alert.link))
						}
						_e.branchReset && (setExperimentalEnabled(!1), setExperimentalBranch("master")), se(_e)
					})
					.catch(oe => {
						var se;
						this.setState({
							loadError: null !== (se = oe.description) && void 0 !== se ? se : oe.toString()
						})
					})
			})
		}
		toggleThemeOnClick() {
			var oe, se;
			if (!(null === (oe = this.state.metadata) || void 0 === oe ? void 0 : oe.theme)) return;
			const _e = this.state.activeTheme,
				ke = this.state.activeTheme == (null === (se = this.state.metadata) || void 0 === se ? void 0 : se.theme) ? "default" : this.state.metadata.theme;
			document.documentElement.classList.add("disable-theme-trans"),
				function setDisabledTheme(oe) {
					yt.set("disabledTheme", oe)
				}(_e), this.setState({
					activeTheme: ke
				}), setUserTheme(ke, !0), document.documentElement.classList.remove("theme-" + _e), document.documentElement.classList.add("theme-" + ke), setTimeout(() => {
					document.documentElement.classList.remove("disable-theme-trans")
				}, 100)
		}
		async launchButtonOnClick(oe) {
			var se, _e;
			if ("ready" !== this.state.launchButtonState) return;
			const ke = getSelectedVersion(),
				Te = getSelectedSubversion(),
				Ne = getSelectedModule();
			var Ae = null === (se = this.state.metadata) || void 0 === se ? void 0 : se.versions.find(oe => oe.id == ke);
			if (Ae || (Ae = null === (_e = this.state.metadata) || void 0 === _e ? void 0 : _e.versions.find(oe => oe.default)), !Ae) throw Error(`Unable to locate version ${ke} within metadata`);
			var Re = Ae.subversions.find(oe => oe.id == Te);
			if (Re || (Re = Ae.subversions.find(oe => oe.default)), !Re) throw Error(`Unable to locate subversion ${Te} within metadata`);
			var je = Re.modules.find(oe => oe.id == Ne);
			if (je || (je = Re.modules.find(oe => oe.default)), !je) throw Error(`Unable to locate module ${Ne} within metadata`);
			if (oe && !oe.supportedVersions.includes(Te)) {
				const se = oe.supportedVersions.join(", ")
					.replace(/, ([^,]*)$/, " or $1");
				return this.displayError("不兼容的 Minecraft 版本", oe.name + " 不支持的我的世界版本 " + Te + ". 尝试使用 " + se + "."), void
				function sendLaunchError(oe, se) {
					dt.exception("Launch Error: " + oe)
						.send(), sendGA4Event("launch_error", {
							title: oe,
							description: se
						})
				}("不兼容的 Minecraft 版本", oe.name + " 不支持的我的世界版本 " + Te + ". 尝试使用 " + se + ".")
			}
			const launchProgress = (oe, se, _e = {
					delay: 0
				}) => {
					if (Array.isArray(se)) {
						const nextStatus = (oe, ke = 0) => {
							ke == se.length && (ke = 0), this.setState({
								launchButtonText: oe,
								launchButtonSubtext: se[ke],
								launchButtonState: "working"
							}), setTimeout(() => {
								this.state.launchButtonText == oe && nextStatus(oe, ke + 1)
							}, _e.delay)
						};
						nextStatus(oe)
					} else this.setState({
						launchButtonText: oe,
						launchButtonSubtext: se,
						launchButtonState: "working"
					})
				},
				alertUserToError = (oe, se, _e) => {
					const ke = ["Lunar 客户端启动错误", "Short: " + oe, "Description: " + se, "Launcher Version: " + Xe, "OS: " + process.platform + " " + process.arch, "Game Module: " + Ne, "Game Version: " + Te + "/" + Fe];
					this.setState({
							launchButtonText: "启动成功",
							launchButtonSubtext: oe,
							launchButtonState: "working",
							launchError: ke.join("\n")
						}), Oe.remote.getCurrentWindow()
						.show(), this.displayError(oe, se, _e)
				},
				Me = getExperimentalEnabled() ? getExperimentalBranch() : "master",
				Fe = Me.split(":")
				.pop(),
				Be = Me.split(":")
				.slice(0, -1),
				We = Et.OFFLINE,
				Ve = (new Date)
				.getTime(),
				Ye = Object(Ue.v4)();
			this.setState({
					sessionClicksToLaunch: 0
				}),
				function sendLaunchEvent(oe, se, _e, ke, Te, Ne, Oe, Ae) {
					dt.event(oe, `Launch game ${se}:${_e}:${ke}`)
						.send(), sendGA4Event("launch_game", {
							from: oe,
							version: se,
							subversion: "" !== _e ? _e : se,
							module: "" !== ke ? ke : "lunar",
							branch: Te,
							launch_directory: getLaunchDirectory(),
							allocated_memory: getAllocatedMemory(),
							after_launch_action: getAfterLaunchAction(),
							launch_resolution: getResolution()[0].toString() + "x" + getResolution()[1].toString(),
							launch_id: Ne,
							session_clicks_to_launch: Oe,
							launcher_session_id: Ae
						})
				}(this.state.activeTab, ke, Te, Ne, Fe, Ye, this.state.sessionClicksToLaunch, this.state.launcherSessionId);
			try {
				await launchClient(null != oe ? oe : null, We, Re, je, Fe, Be, {
					progress: launchProgress,
					error: alertUserToError,
					success: () => {
						switch (launchProgress("Launched", "Game is running"), getAfterLaunchAction()) {
							case "HIDE":
								Oe.remote.getCurrentWindow()
									.hide()
						}
					},
					log: oe => mt.a.info("[OUTPUT] " + oe),
					exit: () => {
						this.setState({
								launchButtonText: "",
								launchButtonSubtext: "",
								launchButtonState: "ready"
							}), Oe.remote.getCurrentWindow()
							.show();
						! function sendGameSessionCompleteEvent(oe, se) {
							dt.event("首页", `Game session complete ${se}:${oe}`), sendGA4Event("game_session_complete", {
								launch_id: se,
								duration: oe
							})
						}((new Date)
							.getTime() - Ve, Ye)
					}
				}, Ye)
			} catch (oe) {
				oe.short && oe.description ? (mt.a.info(oe.short + ": " + oe.description), alertUserToError(oe.short, oe.description, oe.url)) : (mt.a.info(oe.stack), alertUserToError("未知错误", "出现未知错误: " + oe))
			}
		}
		displayError(oe, se, _e) {
			this.setState({
				launchErrorOverlay: !0,
				errorTitle: oe,
				errorDescription: se,
				errorUrl: _e
			})
		}
		componentDidUpdate() {
			Ne()('[data-toggle="tooltip"]')
				.tooltip()
		}
		componentDidMount() {
			document.documentElement.classList.add("theme-default"), Ne()(document)
				.mousemove((function(oe) {
					let se = oe.pageX + 20,
						_e = oe.pageY;
					const ke = Ne()(".tooltip")
						.width();
					se + ke > Ne()(".app-container")
						.width() && (se -= ke + 40);
					const Te = Ne()(".tooltip")
						.height();
					_e + Te > Ne()(".app-container")
						.height() && (_e -= Te), Ne()(".tooltip")
						.css("transform", `translate(${se}px, ${_e}px)`)
				})), Ne()(document)
				.keydown((function(oe) {
					oe.ctrlKey && [61, 107, 173, 109, 187, 189].includes(oe.which) && oe.preventDefault()
				}))
		}
		render() {
			var oe, se, _e, Te;
			if (this.state.loadError) return ke.createElement(LoadError_LoadError, {
				error: this.state.loadError
			});
			if (!this.state.metadata) return ke.createElement(LoadingScreen_LoadingScreen, null);
			const Ne = this.state.metadata,
				Ae = this.state.metadata.navItems.map(oe => ({
					name: oe.name,
					onClick: () => {
						document.documentElement.classList.remove("page-" + this.state.activeTab.toLowerCase()), oe.remote ? Oe.shell.openExternal(oe.remote) : (this.setState({
							activeTab: oe.name
						}), document.documentElement.classList.add("page-" + oe.name.toLowerCase())), this.state.launchOptionsOverlay && sendCloseLaunchOptions("Tab Switch"), this.setState({
							launchOptionsOverlay: !1
						}), sendPageView(oe.name)
					}
				}));
			let Re;
			switch (this.state.activeTab) {
				case "首页":
					Re = ke.createElement(HomePage_HomePage, {
						versions: Ne.versions,
						servers: Ne.servers,
						blogPosts: Ne.blogPosts,
						serversOnClick: oe => this.launchButtonOnClick(oe)
					});
					break;
				case "设置":
					Re = ke.createElement(SettingsPage_SettingsPage, {
						requestLauncherMetadata: this.requestLauncherMetadata
					});
					break;
				case "关于":
					const Te = this.state.metadata.featureFlags.find(oe => "overrides" == oe.identifier);
					Re = ke.createElement(AboutPage_AboutPage, {
						overrides: null !== (se = null == Te ? void 0 : Te.value) && void 0 !== se && se
					});break;
				case "LunarCN":
					Re = ke.createElement(LunarCnPage, {
						requestLauncherMetadata: this.requestLauncherMetadata
					});break
				case "市场":
					Re = ke.createElement(MarketPage, {
						requestLauncherMetadata: this.requestLauncherMetadata
					}
						)
			}
			let je = this.state.launchButtonText,
				Me = this.state.launchButtonSubtext;
			if ("ready" === this.state.launchButtonState) {
				var Fe = this.state.metadata.versions.find(oe => oe.id == getSelectedVersion());
				Fe || (Fe = this.state.metadata.versions[0]);
				var Ue = Fe.subversions.find(oe => oe.id == getSelectedSubversion());
				Ue || (Ue = Fe.subversions.find(oe => oe.default)), je = "🚀 启动 " + Ue.id, Me = ke.createElement(ke.Fragment, null, ke.createElement("i", {
					className: "mr-1 fas fa-gamepad"
				}), "准备启动")
			}
			

			return ke.createElement("div", {
				className: "app-container",
				onClick: this.handleRandomClick
			}, Ne && Ne.alert && ke.createElement(Alert_Alert, {
				activeTab: this.state.activeTab,
				name: Ne.alert.name,
				text: Ne.alert.text,
				link: Ne.alert.link,
				color: Ne.alert.color || "RED",
				icon: Ne.alert.icon || "BULLHORN"
			}), "christmas" === this.state.activeTheme && ke.createElement(Snow_Snow, null), ke.createElement("div", {
				className: "app-container-inner"
			}, ke.createElement(NavigationBar_NavigationBar, {
				tabs: Ae,
				activeTab: this.state.activeTab,
				activeTheme: this.state.activeTheme,
				theme: this.state.metadata.theme,
				onClick: () => this.toggleThemeOnClick(),
				images: Ne.images,
				alertHighlighted: null === (_e = Ne.alert) || void 0 === _e ? void 0 : _e.highlightTab,
				alertHighlightedColor: null === (Te = Ne.alert) || void 0 === Te ? void 0 : Te.color
			}), this.state.launchOptionsOverlay && ke.createElement(LaunchOptionsOverlay_LaunchOptionsOverlay, {
				versions: Ne.versions,
				onExit: () => {
					this.setState({
						launchOptionsOverlay: !1
					})
				}
			}), this.state.launchErrorOverlay && ke.createElement(LaunchErrorOverlay_LaunchErrorOverlay, {
				title: this.state.errorTitle,
				description: this.state.errorDescription,
				url: this.state.errorUrl,
				launchError: this.state.launchError,
				onExit: () => this.setState({
					launchErrorOverlay: !1,
					launchButtonText: "",
					launchButtonSubtext: "",
					launchButtonState: "ready",
					errorTitle: "",
					errorDescription: "",
					launchError: void 0
				})
			}), ke.createElement("div", {
				id: "content"
			}, ke.createElement(LaunchButton_LaunchButton, {
				text: je,
				subtext: Me,
				state: this.state.launchButtonState,
				images: Ne.images,
				activeTheme: this.state.activeTheme,
				height: "Home" === this.state.activeTab ? 42.5 : 22.5,
				touchBarButton: this.touchBarLaunchButton,
				dropdownOnClick: () => {
					this.setState({
							launchOptionsOverlay: !0
						}),
						function sendOpenLaunchOptions() {
							dt.event("关于", "Open launch options")
								.send(), sendGA4Event("open_launch_options", {})
						}()
				},
				buttonOnClick: () => this.launchButtonOnClick()
			}), Re), ke.createElement(Footer_Footer, {
				activeTab: this.state.activeTab
			})))
		}
	}
	var Gt = _e(28),
		Kt = _e(13),
		Yt = _e(14),
		Jt = "undefined" != typeof window && "undefined" != typeof document;
	const Xt = ["Edge", "Trident", "Firefox"];
	let $t = 0;
	for (let oe = 0; oe < Xt.length; oe += 1)
		if (Jt && 0 <= navigator.userAgent.indexOf(Xt[oe])) {
			$t = 1;
			break
		} var Zt = Jt && window.Promise ? function n(oe) {
		let se = !1;
		return () => {
			se || (se = !0, window.Promise.resolve()
				.then(() => {
					se = !1, oe()
				}))
		}
	} : function popper_min_i(oe) {
		let se = !1;
		return () => {
			se || (se = !0, setTimeout(() => {
				se = !1, oe()
			}, $t))
		}
	};

	function popper_min_d(oe) {
		return oe && "[object Function]" === {}.toString.call(oe)
	}

	function popper_min_s(oe, se) {
		if (1 !== oe.nodeType) return [];
		const _e = oe.ownerDocument.defaultView.getComputedStyle(oe, null);
		return se ? _e[se] : _e
	}

	function f(oe) {
		return "HTML" === oe.nodeName ? oe : oe.parentNode || oe.host
	}

	function a(oe) {
		if (!oe) return document.body;
		switch (oe.nodeName) {
			case "HTML":
			case "BODY":
				return oe.ownerDocument.body;
			case "#document":
				return oe.body
		}
		const {
			overflow: se,
			overflowX: _e,
			overflowY: ke
		} = popper_min_s(oe);
		return /(auto|scroll|overlay)/.test(se + ke + _e) ? oe : a(f(oe))
	}
	const en = Jt && !(!window.MSInputMethodContext || !document.documentMode),
		tn = Jt && /MSIE 10/.test(navigator.userAgent);

	function h(oe) {
		return 11 === oe ? en : 10 === oe ? tn : en || tn
	}

	function c(oe) {
		if (!oe) return document.documentElement;
		const se = h(10) ? document.body : null;
		let _e = oe.offsetParent || null;
		for (; _e === se && oe.nextElementSibling;) _e = (oe = oe.nextElementSibling)
			.offsetParent;
		const ke = _e && _e.nodeName;
		return ke && "BODY" !== ke && "HTML" !== ke ? -1 !== ["TH", "TD", "TABLE"].indexOf(_e.nodeName) && "static" === popper_min_s(_e, "position") ? c(_e) : _e : oe ? oe.ownerDocument.documentElement : document.documentElement
	}

	function g(oe) {
		return null === oe.parentNode ? oe : g(oe.parentNode)
	}

	function b(oe, se) {
		if (!(oe && oe.nodeType && se && se.nodeType)) return document.documentElement;
		const _e = oe.compareDocumentPosition(se) & Node.DOCUMENT_POSITION_FOLLOWING,
			ke = _e ? oe : se,
			Te = _e ? se : oe,
			Ne = document.createRange();
		Ne.setStart(ke, 0), Ne.setEnd(Te, 0);
		const {
			commonAncestorContainer: Oe
		} = Ne;
		if (oe !== Oe && se !== Oe || ke.contains(Te)) return function u(oe) {
			const {
				nodeName: se
			} = oe;
			return "BODY" !== se && ("HTML" === se || c(oe.firstElementChild) === oe)
		}(Oe) ? Oe : c(Oe);
		const Ae = g(oe);
		return Ae.host ? b(Ae.host, se) : b(oe, g(se)
			.host)
	}

	function w(oe, se = "top") {
		const _e = "top" === se ? "scrollTop" : "scrollLeft",
			ke = oe.nodeName;
		if ("BODY" === ke || "HTML" === ke) {
			const se = oe.ownerDocument.documentElement;
			return (oe.ownerDocument.scrollingElement || se)[_e]
		}
		return oe[_e]
	}

	function E(oe, se) {
		const _e = "x" === se ? "Left" : "Top",
			ke = "Left" == _e ? "Right" : "Bottom";
		return parseFloat(oe[`border${_e}Width`], 10) + parseFloat(oe[`border${ke}Width`], 10)
	}

	function x(oe, se, _e, ke) {
		return Math.max(se["offset" + oe], se["scroll" + oe], _e["client" + oe], _e["offset" + oe], _e["scroll" + oe], h(10) ? parseInt(_e["offset" + oe]) + parseInt(ke["margin" + ("Height" === oe ? "Top" : "Left")]) + parseInt(ke["margin" + ("Height" === oe ? "Bottom" : "Right")]) : 0)
	}

	function popper_min_v(oe) {
		const se = oe.body,
			_e = oe.documentElement,
			ke = h(10) && getComputedStyle(_e);
		return {
			height: x("Height", se, _e, ke),
			width: x("Width", se, _e, ke)
		}
	}
	var nn = Object.assign || function(oe) {
		for (var se, _e = 1; _e < arguments.length; _e++)
			for (var ke in se = arguments[_e]) Object.prototype.hasOwnProperty.call(se, ke) && (oe[ke] = se[ke]);
		return oe
	};

	function L(oe) {
		return nn({}, oe, {
			right: oe.left + oe.width,
			bottom: oe.top + oe.height
		})
	}

	function S(oe) {
		let se = {};
		try {
			if (h(10)) {
				se = oe.getBoundingClientRect();
				const _e = w(oe, "top"),
					ke = w(oe, "left");
				se.top += _e, se.left += ke, se.bottom += _e, se.right += ke
			} else se = oe.getBoundingClientRect()
		} catch (se) {}
		const _e = {
				left: se.left,
				top: se.top,
				width: se.right - se.left,
				height: se.bottom - se.top
			},
			ke = "HTML" === oe.nodeName ? popper_min_v(oe.ownerDocument) : {},
			Te = ke.width || oe.clientWidth || _e.right - _e.left,
			Ne = ke.height || oe.clientHeight || _e.bottom - _e.top;
		let Oe = oe.offsetWidth - Te,
			Ae = oe.offsetHeight - Ne;
		if (Oe || Ae) {
			const se = popper_min_s(oe);
			Oe -= E(se, "x"), Ae -= E(se, "y"), _e.width -= Oe, _e.height -= Ae
		}
		return L(_e)
	}

	function T(oe, se, _e = !1) {
		var ke = Math.max;
		const Te = h(10),
			Ne = "HTML" === se.nodeName,
			Oe = S(oe),
			Ae = S(se),
			Re = a(oe),
			je = popper_min_s(se),
			Me = parseFloat(je.borderTopWidth, 10),
			Fe = parseFloat(je.borderLeftWidth, 10);
		_e && Ne && (Ae.top = ke(Ae.top, 0), Ae.left = ke(Ae.left, 0));
		let Ue = L({
			top: Oe.top - Ae.top - Me,
			left: Oe.left - Ae.left - Fe,
			width: Oe.width,
			height: Oe.height
		});
		if (Ue.marginTop = 0, Ue.marginLeft = 0, !Te && Ne) {
			const oe = parseFloat(je.marginTop, 10),
				se = parseFloat(je.marginLeft, 10);
			Ue.top -= Me - oe, Ue.bottom -= Me - oe, Ue.left -= Fe - se, Ue.right -= Fe - se, Ue.marginTop = oe, Ue.marginLeft = se
		}
		return (Te && !_e ? se.contains(Re) : se === Re && "BODY" !== Re.nodeName) && (Ue = function y(oe, se, _e = !1) {
			const ke = w(se, "top"),
				Te = w(se, "left"),
				Ne = _e ? -1 : 1;
			return oe.top += ke * Ne, oe.bottom += ke * Ne, oe.left += Te * Ne, oe.right += Te * Ne, oe
		}(Ue, se)), Ue
	}

	function N(oe) {
		if (!oe || !oe.parentElement || h()) return document.documentElement;
		let se = oe.parentElement;
		for (; se && "none" === popper_min_s(se, "transform");) se = se.parentElement;
		return se || document.documentElement
	}

	function P(oe, se, _e, ke, Te = !1) {
		let Ne = {
			top: 0,
			left: 0
		};
		const Oe = Te ? N(oe) : b(oe, se);
		if ("viewport" === ke) Ne = function D(oe, se = !1) {
			var _e = Math.max;
			const ke = oe.ownerDocument.documentElement,
				Te = T(oe, ke),
				Ne = _e(ke.clientWidth, window.innerWidth || 0),
				Oe = _e(ke.clientHeight, window.innerHeight || 0),
				Ae = se ? 0 : w(ke),
				Re = se ? 0 : w(ke, "left");
			return L({
				top: Ae - Te.top + Te.marginTop,
				left: Re - Te.left + Te.marginLeft,
				width: Ne,
				height: Oe
			})
		}(Oe, Te);
		else {
			let _e;
			"scrollParent" === ke ? (_e = a(f(se)), "BODY" === _e.nodeName && (_e = oe.ownerDocument.documentElement)) : _e = "window" === ke ? oe.ownerDocument.documentElement : ke;
			const Ae = T(_e, Oe, Te);
			if ("HTML" !== _e.nodeName || function C(oe) {
				const se = oe.nodeName;
				if ("BODY" === se || "HTML" === se) return !1;
				if ("fixed" === popper_min_s(oe, "position")) return !0;
				const _e = f(oe);
				return !!_e && C(_e)
			}(Oe)) Ne = Ae;
			else {
				const {
					height: se,
					width: _e
				} = popper_min_v(oe.ownerDocument);
				Ne.top += Ae.top - Ae.marginTop, Ne.bottom = se + Ae.top, Ne.left += Ae.left - Ae.marginLeft, Ne.right = _e + Ae.left
			}
		}
		const Ae = "number" == typeof(_e = _e || 0);
		return Ne.left += Ae ? _e : _e.left || 0, Ne.top += Ae ? _e : _e.top || 0, Ne.right -= Ae ? _e : _e.right || 0, Ne.bottom -= Ae ? _e : _e.bottom || 0, Ne
	}

	function H({
		width: oe,
		height: se
	}) {
		return oe * se
	}

	function B(oe, se, _e, ke, Te, Ne = 0) {
		if (-1 === oe.indexOf("auto")) return oe;
		const Oe = P(_e, ke, Ne, Te),
			Ae = {
				top: {
					width: Oe.width,
					height: se.top - Oe.top
				},
				right: {
					width: Oe.right - se.right,
					height: Oe.height
				},
				bottom: {
					width: Oe.width,
					height: Oe.bottom - se.bottom
				},
				left: {
					width: se.left - Oe.left,
					height: Oe.height
				}
			},
			Re = Object.keys(Ae)
			.map(oe => nn({
				key: oe
			}, Ae[oe], {
				area: H(Ae[oe])
			}))
			.sort((oe, se) => se.area - oe.area),
			je = Re.filter(({
				width: oe,
				height: se
			}) => oe >= _e.clientWidth && se >= _e.clientHeight),
			Me = 0 < je.length ? je[0].key : Re[0].key,
			Fe = oe.split("-")[1];
		return Me + (Fe ? "-" + Fe : "")
	}

	function W(oe, se, _e, ke = null) {
		return T(_e, ke ? N(se) : b(se, _e), ke)
	}

	function k(oe) {
		const se = oe.ownerDocument.defaultView.getComputedStyle(oe),
			_e = parseFloat(se.marginTop || 0) + parseFloat(se.marginBottom || 0),
			ke = parseFloat(se.marginLeft || 0) + parseFloat(se.marginRight || 0);
		return {
			width: oe.offsetWidth + ke,
			height: oe.offsetHeight + _e
		}
	}

	function A(oe) {
		const se = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};
		return oe.replace(/left|right|bottom|top/g, oe => se[oe])
	}

	function M(oe, se, _e) {
		_e = _e.split("-")[0];
		const ke = k(oe),
			Te = {
				width: ke.width,
				height: ke.height
			},
			Ne = -1 !== ["right", "left"].indexOf(_e),
			Oe = Ne ? "top" : "left",
			Ae = Ne ? "left" : "top",
			Re = Ne ? "height" : "width",
			je = Ne ? "width" : "height";
		return Te[Oe] = se[Oe] + se[Re] / 2 - ke[Re] / 2, Te[Ae] = _e === Ae ? se[Ae] - ke[je] : se[A(Ae)], Te
	}

	function F(oe, se) {
		return Array.prototype.find ? oe.find(se) : oe.filter(se)[0]
	}

	function R(oe, se, _e) {
		return (void 0 === _e ? oe : oe.slice(0, function I(oe, se, _e) {
				if (Array.prototype.findIndex) return oe.findIndex(oe => oe[se] === _e);
				const ke = F(oe, oe => oe[se] === _e);
				return oe.indexOf(ke)
			}(oe, "name", _e)))
			.forEach(oe => {
				oe.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
				const _e = oe.function || oe.fn;
				oe.enabled && popper_min_d(_e) && (se.offsets.popper = L(se.offsets.popper), se.offsets.reference = L(se.offsets.reference), se = _e(se, oe))
			}), se
	}

	function U() {
		if (this.state.isDestroyed) return;
		let oe = {
			instance: this,
			styles: {},
			arrowStyles: {},
			attributes: {},
			flipped: !1,
			offsets: {}
		};
		oe.offsets.reference = W(this.state, this.popper, this.reference, this.options.positionFixed), oe.placement = B(this.options.placement, oe.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), oe.originalPlacement = oe.placement, oe.positionFixed = this.options.positionFixed, oe.offsets.popper = M(this.popper, oe.offsets.reference, oe.placement), oe.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", oe = R(this.modifiers, oe), this.state.isCreated ? this.options.onUpdate(oe) : (this.state.isCreated = !0, this.options.onCreate(oe))
	}

	function Y(oe, se) {
		return oe.some(({
			name: oe,
			enabled: _e
		}) => _e && oe === se)
	}

	function V(oe) {
		const se = [!1, "ms", "Webkit", "Moz", "O"],
			_e = oe.charAt(0)
			.toUpperCase() + oe.slice(1);
		for (let ke = 0; ke < se.length; ke++) {
			const Te = se[ke],
				Ne = Te ? `${Te}${_e}` : oe;
			if (void 0 !== document.body.style[Ne]) return Ne
		}
		return null
	}

	function j() {
		return this.state.isDestroyed = !0, Y(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[V("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
	}

	function K(oe) {
		const se = oe.ownerDocument;
		return se ? se.defaultView : window
	}

	function z(oe, se, _e, ke) {
		_e.updateBound = ke, K(oe)
			.addEventListener("resize", _e.updateBound, {
				passive: !0
			});
		const Te = a(oe);
		return function q(oe, se, _e, ke) {
			const Te = "BODY" === oe.nodeName,
				Ne = Te ? oe.ownerDocument.defaultView : oe;
			Ne.addEventListener(se, _e, {
				passive: !0
			}), Te || q(a(Ne.parentNode), se, _e, ke), ke.push(Ne)
		}(Te, "scroll", _e.updateBound, _e.scrollParents), _e.scrollElement = Te, _e.eventsEnabled = !0, _e
	}

	function G() {
		this.state.eventsEnabled || (this.state = z(this.reference, this.options, this.state, this.scheduleUpdate))
	}

	function X() {
		this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function _(oe, se) {
			return K(oe)
				.removeEventListener("resize", se.updateBound), se.scrollParents.forEach(oe => {
					oe.removeEventListener("scroll", se.updateBound)
				}), se.updateBound = null, se.scrollParents = [], se.scrollElement = null, se.eventsEnabled = !1, se
		}(this.reference, this.state))
	}

	function J(oe) {
		return "" !== oe && !isNaN(parseFloat(oe)) && isFinite(oe)
	}

	function Q(oe, se) {
		Object.keys(se)
			.forEach(_e => {
				let ke = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(_e) && J(se[_e]) && (ke = "px"), oe.style[_e] = se[_e] + ke
			})
	}
	const rn = Jt && /Firefox/i.test(navigator.userAgent);

	function ie(oe, se, _e) {
		const ke = F(oe, ({
				name: oe
			}) => oe === se),
			Te = !!ke && oe.some(oe => oe.name === _e && oe.enabled && oe.order < ke.order);
		if (!Te) {
			const oe = `\`${se}\``,
				ke = `\`${_e}\``;
			console.warn(`${ke} modifier is required by ${oe} modifier in order to work, be sure to include it before ${oe}!`)
		}
		return Te
	}
	var on = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
	const an = on.slice(3);

	function fe(oe, se = !1) {
		const _e = an.indexOf(oe),
			ke = an.slice(_e + 1)
			.concat(an.slice(0, _e));
		return se ? ke.reverse() : ke
	}
	const ln = "flip",
		sn = "clockwise",
		cn = "counterclockwise";

	function ce(oe, se, _e, ke) {
		const Te = [0, 0],
			Ne = -1 !== ["right", "left"].indexOf(ke),
			Oe = oe.split(/(\+|\-)/)
			.map(oe => oe.trim()),
			Ae = Oe.indexOf(F(Oe, oe => -1 !== oe.search(/,|\s/)));
		Oe[Ae] && -1 === Oe[Ae].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
		const Re = /\s*,\s*|\s+/;
		let je = -1 === Ae ? [Oe] : [Oe.slice(0, Ae)
			.concat([Oe[Ae].split(Re)[0]]), [Oe[Ae].split(Re)[1]].concat(Oe.slice(Ae + 1))
		];
		return je = je.map((oe, ke) => {
			const Te = (1 === ke ? !Ne : Ne) ? "height" : "width";
			let Oe = !1;
			return oe.reduce((oe, se) => "" === oe[oe.length - 1] && -1 !== ["+", "-"].indexOf(se) ? (oe[oe.length - 1] = se, Oe = !0, oe) : Oe ? (oe[oe.length - 1] += se, Oe = !1, oe) : oe.concat(se), [])
				.map(oe => function he(oe, se, _e, ke) {
					var Te = Math.max;
					const Ne = oe.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
						Oe = +Ne[1],
						Ae = Ne[2];
					if (!Oe) return oe;
					if (0 === Ae.indexOf("%")) {
						let oe;
						switch (Ae) {
							case "%p":
								oe = _e;
								break;
							case "%":
							case "%r":
							default:
								oe = ke
						}
						return L(oe)[se] / 100 * Oe
					}
					if ("vh" === Ae || "vw" === Ae) {
						let oe;
						return oe = "vh" === Ae ? Te(document.documentElement.clientHeight, window.innerHeight || 0) : Te(document.documentElement.clientWidth, window.innerWidth || 0), oe / 100 * Oe
					}
					return Oe
				}(oe, Te, se, _e))
		}), je.forEach((oe, se) => {
			oe.forEach((_e, ke) => {
				J(_e) && (Te[se] += _e * ("-" === oe[ke - 1] ? -1 : 1))
			})
		}), Te
	}
	var un = {
		placement: "bottom",
		positionFixed: !1,
		eventsEnabled: !0,
		removeOnDestroy: !1,
		onCreate: () => {},
		onUpdate: () => {},
		modifiers: {
			shift: {
				order: 100,
				enabled: !0,
				fn: function be(oe) {
					const se = oe.placement,
						_e = se.split("-")[0],
						ke = se.split("-")[1];
					if (ke) {
						const {
							reference: se,
							popper: Te
						} = oe.offsets, Ne = -1 !== ["bottom", "top"].indexOf(_e), Oe = Ne ? "left" : "top", Ae = Ne ? "width" : "height", Re = {
							start: {
								[Oe]: se[Oe]
							},
							end: {
								[Oe]: se[Oe] + se[Ae] - Te[Ae]
							}
						};
						oe.offsets.popper = nn({}, Te, Re[ke])
					}
					return oe
				}
			},
			offset: {
				order: 200,
				enabled: !0,
				fn: function ue(oe, {
					offset: se
				}) {
					const {
						placement: _e,
						offsets: {
							popper: ke,
							reference: Te
						}
					} = oe, Ne = _e.split("-")[0];
					let Oe;
					return Oe = J(+se) ? [+se, 0] : ce(se, ke, Te, Ne), "left" === Ne ? (ke.top += Oe[0], ke.left -= Oe[1]) : "right" === Ne ? (ke.top += Oe[0], ke.left += Oe[1]) : "top" === Ne ? (ke.left += Oe[0], ke.top -= Oe[1]) : "bottom" === Ne && (ke.left += Oe[0], ke.top += Oe[1]), oe.popper = ke, oe
				},
				offset: 0
			},
			preventOverflow: {
				order: 300,
				enabled: !0,
				fn: function ge(oe, se) {
					let _e = se.boundariesElement || c(oe.instance.popper);
					oe.instance.reference === _e && (_e = c(_e));
					const ke = V("transform"),
						Te = oe.instance.popper.style,
						{
							top: Ne,
							left: Oe,
							[ke]: Ae
						} = Te;
					Te.top = "", Te.left = "", Te[ke] = "";
					const Re = P(oe.instance.popper, oe.instance.reference, se.padding, _e, oe.positionFixed);
					Te.top = Ne, Te.left = Oe, Te[ke] = Ae, se.boundaries = Re;
					const je = se.priority;
					let Me = oe.offsets.popper;
					const Fe = {
						primary(oe) {
							let _e = Me[oe];
							return Me[oe] < Re[oe] && !se.escapeWithReference && (_e = Math.max(Me[oe], Re[oe])), {
								[oe]: _e
							}
						},
						secondary(oe) {
							const _e = "right" === oe ? "left" : "top";
							let ke = Me[_e];
							return Me[oe] > Re[oe] && !se.escapeWithReference && (ke = Math.min(Me[_e], Re[oe] - ("right" === oe ? Me.width : Me.height))), {
								[_e]: ke
							}
						}
					};
					return je.forEach(oe => {
						const se = -1 === ["left", "top"].indexOf(oe) ? "secondary" : "primary";
						Me = nn({}, Me, Fe[se](oe))
					}), oe.offsets.popper = Me, oe
				},
				priority: ["left", "right", "top", "bottom"],
				padding: 5,
				boundariesElement: "scrollParent"
			},
			keepTogether: {
				order: 400,
				enabled: !0,
				fn: function me(oe) {
					const {
						popper: se,
						reference: _e
					} = oe.offsets, ke = oe.placement.split("-")[0], Te = Math.floor, Ne = -1 !== ["top", "bottom"].indexOf(ke), Oe = Ne ? "right" : "bottom", Ae = Ne ? "left" : "top", Re = Ne ? "width" : "height";
					return se[Oe] < Te(_e[Ae]) && (oe.offsets.popper[Ae] = Te(_e[Ae]) - se[Re]), se[Ae] > Te(_e[Oe]) && (oe.offsets.popper[Ae] = Te(_e[Oe])), oe
				}
			},
			arrow: {
				order: 500,
				enabled: !0,
				fn: function re(oe, se) {
					if (!ie(oe.instance.modifiers, "arrow", "keepTogether")) return oe;
					let _e = se.element;
					if ("string" == typeof _e) {
						if (_e = oe.instance.popper.querySelector(_e), !_e) return oe
					} else if (!oe.instance.popper.contains(_e)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), oe;
					const ke = oe.placement.split("-")[0],
						{
							popper: Te,
							reference: Ne
						} = oe.offsets,
						Oe = -1 !== ["left", "right"].indexOf(ke),
						Ae = Oe ? "height" : "width",
						Re = Oe ? "Top" : "Left",
						je = Re.toLowerCase(),
						Me = Oe ? "left" : "top",
						Fe = Oe ? "bottom" : "right",
						Ue = k(_e)[Ae];
					Ne[Fe] - Ue < Te[je] && (oe.offsets.popper[je] -= Te[je] - (Ne[Fe] - Ue)), Ne[je] + Ue > Te[Fe] && (oe.offsets.popper[je] += Ne[je] + Ue - Te[Fe]), oe.offsets.popper = L(oe.offsets.popper);
					const Be = Ne[je] + Ne[Ae] / 2 - Ue / 2,
						We = popper_min_s(oe.instance.popper),
						Ve = parseFloat(We["margin" + Re], 10),
						Ye = parseFloat(We[`border${Re}Width`], 10);
					let Xe = Be - oe.offsets.popper[je] - Ve - Ye;
					return Xe = Math.max(Math.min(Te[Ae] - Ue, Xe), 0), oe.arrowElement = _e, oe.offsets.arrow = {
						[je]: Math.round(Xe),
						[Me]: ""
					}, oe
				},
				element: "[x-arrow]"
			},
			flip: {
				order: 600,
				enabled: !0,
				fn: function le(oe, se) {
					if (Y(oe.instance.modifiers, "inner")) return oe;
					if (oe.flipped && oe.placement === oe.originalPlacement) return oe;
					const _e = P(oe.instance.popper, oe.instance.reference, se.padding, se.boundariesElement, oe.positionFixed);
					let ke = oe.placement.split("-")[0],
						Te = A(ke),
						Ne = oe.placement.split("-")[1] || "",
						Oe = [];
					switch (se.behavior) {
						case ln:
							Oe = [ke, Te];
							break;
						case sn:
							Oe = fe(ke);
							break;
						case cn:
							Oe = fe(ke, !0);
							break;
						default:
							Oe = se.behavior
					}
					return Oe.forEach((Ae, Re) => {
						if (ke !== Ae || Oe.length === Re + 1) return oe;
						ke = oe.placement.split("-")[0], Te = A(ke);
						const je = oe.offsets.popper,
							Me = oe.offsets.reference,
							Fe = Math.floor,
							Ue = "left" === ke && Fe(je.right) > Fe(Me.left) || "right" === ke && Fe(je.left) < Fe(Me.right) || "top" === ke && Fe(je.bottom) > Fe(Me.top) || "bottom" === ke && Fe(je.top) < Fe(Me.bottom),
							Be = Fe(je.left) < Fe(_e.left),
							We = Fe(je.right) > Fe(_e.right),
							Ve = Fe(je.top) < Fe(_e.top),
							Ye = Fe(je.bottom) > Fe(_e.bottom),
							Xe = "left" === ke && Be || "right" === ke && We || "top" === ke && Ve || "bottom" === ke && Ye,
							$e = -1 !== ["top", "bottom"].indexOf(ke),
							et = !!se.flipVariations && ($e && "start" === Ne && Be || $e && "end" === Ne && We || !$e && "start" === Ne && Ve || !$e && "end" === Ne && Ye);
						(Ue || Xe || et) && (oe.flipped = !0, (Ue || Xe) && (ke = Oe[Re + 1]), et && (Ne = function pe(oe) {
							return "end" === oe ? "start" : "start" === oe ? "end" : oe
						}(Ne)), oe.placement = ke + (Ne ? "-" + Ne : ""), oe.offsets.popper = nn({}, oe.offsets.popper, M(oe.instance.popper, oe.offsets.reference, oe.placement)), oe = R(oe.instance.modifiers, oe, "flip"))
					}), oe
				},
				behavior: "flip",
				padding: 5,
				boundariesElement: "viewport"
			},
			inner: {
				order: 700,
				enabled: !1,
				fn: function ye(oe) {
					const se = oe.placement,
						_e = se.split("-")[0],
						{
							popper: ke,
							reference: Te
						} = oe.offsets,
						Ne = -1 !== ["left", "right"].indexOf(_e),
						Oe = -1 === ["top", "left"].indexOf(_e);
					return ke[Ne ? "left" : "top"] = Te[_e] - (Oe ? ke[Ne ? "width" : "height"] : 0), oe.placement = A(se), oe.offsets.popper = L(ke), oe
				}
			},
			hide: {
				order: 800,
				enabled: !0,
				fn: function we(oe) {
					if (!ie(oe.instance.modifiers, "hide", "preventOverflow")) return oe;
					const se = oe.offsets.reference,
						_e = F(oe.instance.modifiers, oe => "preventOverflow" === oe.name)
						.boundaries;
					if (se.bottom < _e.top || se.left > _e.right || se.top > _e.bottom || se.right < _e.left) {
						if (!0 === oe.hide) return oe;
						oe.hide = !0, oe.attributes["x-out-of-boundaries"] = ""
					} else {
						if (!1 === oe.hide) return oe;
						oe.hide = !1, oe.attributes["x-out-of-boundaries"] = !1
					}
					return oe
				}
			},
			computeStyle: {
				order: 850,
				enabled: !0,
				fn: function ne(oe, se) {
					const {
						x: _e,
						y: ke
					} = se, {
						popper: Te
					} = oe.offsets, Ne = F(oe.instance.modifiers, oe => "applyStyle" === oe.name)
						.gpuAcceleration;
					void 0 !== Ne && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
					const Oe = void 0 === Ne ? se.gpuAcceleration : Ne,
						Ae = c(oe.instance.popper),
						Re = S(Ae),
						je = {
							position: Te.position
						},
						Me = function te(oe, se) {
							const {
								popper: _e,
								reference: ke
							} = oe.offsets, {
								round: Te,
								floor: Ne
							} = Math, p = oe => oe, Oe = Te(ke.width), Ae = Te(_e.width), Re = -1 !== ["left", "right"].indexOf(oe.placement), je = -1 !== oe.placement.indexOf("-"), Me = se ? Re || je || Oe % 2 == Ae % 2 ? Te : Ne : p, Fe = se ? Te : p;
							return {
								left: Me(1 == Oe % 2 && 1 == Ae % 2 && !je && se ? _e.left - 1 : _e.left),
								top: Fe(_e.top),
								bottom: Fe(_e.bottom),
								right: Me(_e.right)
							}
						}(oe, 2 > window.devicePixelRatio || !rn),
						Fe = "bottom" === _e ? "top" : "bottom",
						Ue = "right" === ke ? "left" : "right",
						Be = V("transform");
					let We, Ve;
					if (Ve = "bottom" == Fe ? "HTML" === Ae.nodeName ? -Ae.clientHeight + Me.bottom : -Re.height + Me.bottom : Me.top, We = "right" == Ue ? "HTML" === Ae.nodeName ? -Ae.clientWidth + Me.right : -Re.width + Me.right : Me.left, Oe && Be) je[Be] = `translate3d(${We}px, ${Ve}px, 0)`, je[Fe] = 0, je[Ue] = 0, je.willChange = "transform";
					else {
						const oe = "bottom" == Fe ? -1 : 1,
							se = "right" == Ue ? -1 : 1;
						je[Fe] = Ve * oe, je[Ue] = We * se, je.willChange = `${Fe}, ${Ue}`
					}
					const Ye = {
						"x-placement": oe.placement
					};
					return oe.attributes = nn({}, Ye, oe.attributes), oe.styles = nn({}, je, oe.styles), oe.arrowStyles = nn({}, oe.offsets.arrow, oe.arrowStyles), oe
				},
				gpuAcceleration: !0,
				x: "bottom",
				y: "right"
			},
			applyStyle: {
				order: 900,
				enabled: !0,
				fn: function $(oe) {
					return Q(oe.instance.popper, oe.styles),
						function Z(oe, se) {
							Object.keys(se)
								.forEach((function(_e) {
									!1 === se[_e] ? oe.removeAttribute(_e) : oe.setAttribute(_e, se[_e])
								}))
						}(oe.instance.popper, oe.attributes), oe.arrowElement && Object.keys(oe.arrowStyles)
						.length && Q(oe.arrowElement, oe.arrowStyles), oe
				},
				onLoad: function ee(oe, se, _e, ke, Te) {
					const Ne = W(0, se, oe, _e.positionFixed),
						Oe = B(_e.placement, Ne, se, oe, _e.modifiers.flip.boundariesElement, _e.modifiers.flip.padding);
					return se.setAttribute("x-placement", Oe), Q(se, {
						position: _e.positionFixed ? "fixed" : "absolute"
					}), _e
				},
				gpuAcceleration: void 0
			}
		}
	};
	class ve {
		constructor(oe, se, _e = {}) {
			this.scheduleUpdate = () => requestAnimationFrame(this.update), this.update = Zt(this.update.bind(this)), this.options = nn({}, ve.Defaults, _e), this.state = {
					isDestroyed: !1,
					isCreated: !1,
					scrollParents: []
				}, this.reference = oe && oe.jquery ? oe[0] : oe, this.popper = se && se.jquery ? se[0] : se, this.options.modifiers = {}, Object.keys(nn({}, ve.Defaults.modifiers, _e.modifiers))
				.forEach(oe => {
					this.options.modifiers[oe] = nn({}, ve.Defaults.modifiers[oe] || {}, _e.modifiers ? _e.modifiers[oe] : {})
				}), this.modifiers = Object.keys(this.options.modifiers)
				.map(oe => nn({
					name: oe
				}, this.options.modifiers[oe]))
				.sort((oe, se) => oe.order - se.order), this.modifiers.forEach(oe => {
					oe.enabled && popper_min_d(oe.onLoad) && oe.onLoad(this.reference, this.popper, this.options, oe, this.state)
				}), this.update();
			const ke = this.options.eventsEnabled;
			ke && this.enableEventListeners(), this.state.eventsEnabled = ke
		}
		update() {
			return U.call(this)
		}
		destroy() {
			return j.call(this)
		}
		enableEventListeners() {
			return G.call(this)
		}
		disableEventListeners() {
			return X.call(this)
		}
	}
	ve.Utils = ("undefined" == typeof window ? global : window)
		.PopperUtils, ve.placements = on, ve.Defaults = un;
	_e(43), _e(44), _e(46), _e(47), _e(48), _e(49), _e(50);
	mt.a.transports.file.resolvePath = () => Object(je.join)(Object(Re.homedir)(), ".lunarclient", "logs", "launcher", mt.a.transports.file.fileName), mt.a.info("Launcher ID: " + ut + ". Used for analytics / log tracing."), Kt.init({
		dsn: "https://7be33c8c105d49ddb40007f58cdaa89a@o923049.ingest.sentry.io/6029601",
		tracesSampleRate: 1,
		release: Oe.remote.app.getVersion(),
		integrations: [new Yt.CaptureConsole({
			levels: ["warn", "error"]
		}), new Yt.ExtraErrorData],
		ignoreErrors: ["Non-Error promise rejection captured"]
	}), Kt.setUser({
		id: ut
	}), Gt.render(ke.createElement(Application_Application, null), document.getElementById("app"))
}]);
//# sourceMappingURL=renderer.js.map

