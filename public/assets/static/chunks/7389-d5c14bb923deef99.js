"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7389],
  {
    72499: function (t, e, n) {
      n.r(e),
        n.d(e, {
          CountUp: function () {
            return i;
          },
        });
      var r = function () {
          return (r =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }).apply(this, arguments);
        },
        i = (function () {
          function t(t, e, n) {
            var i = this;
            (this.endVal = e),
              (this.options = n),
              (this.version = "2.8.0"),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1,
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ""),
              (this.startVal = 0),
              (this.paused = !0),
              (this.once = !1),
              (this.count = function (t) {
                i.startTime || (i.startTime = t);
                var e = t - i.startTime;
                (i.remaining = i.duration - e),
                  i.useEasing
                    ? i.countDown
                      ? (i.frameVal =
                          i.startVal -
                          i.easingFn(e, 0, i.startVal - i.endVal, i.duration))
                      : (i.frameVal = i.easingFn(
                          e,
                          i.startVal,
                          i.endVal - i.startVal,
                          i.duration
                        ))
                    : (i.frameVal =
                        i.startVal +
                        (i.endVal - i.startVal) * (e / i.duration));
                var n = i.countDown
                  ? i.frameVal < i.endVal
                  : i.frameVal > i.endVal;
                (i.frameVal = n ? i.endVal : i.frameVal),
                  (i.frameVal = Number(
                    i.frameVal.toFixed(i.options.decimalPlaces)
                  )),
                  i.printValue(i.frameVal),
                  e < i.duration
                    ? (i.rAF = requestAnimationFrame(i.count))
                    : null !== i.finalEndVal
                    ? i.update(i.finalEndVal)
                    : i.options.onCompleteCallback &&
                      i.options.onCompleteCallback();
              }),
              (this.formatNumber = function (t) {
                var e,
                  n,
                  r,
                  s = (Math.abs(t).toFixed(i.options.decimalPlaces) + "").split(
                    "."
                  );
                if (
                  ((e = s[0]),
                  (n = s.length > 1 ? i.options.decimal + s[1] : ""),
                  i.options.useGrouping)
                ) {
                  r = "";
                  for (var o = 3, a = 0, u = 0, l = e.length; u < l; ++u)
                    i.options.useIndianSeparators &&
                      4 === u &&
                      ((o = 2), (a = 1)),
                      0 !== u && a % o == 0 && (r = i.options.separator + r),
                      a++,
                      (r = e[l - u - 1] + r);
                  e = r;
                }
                return (
                  i.options.numerals &&
                    i.options.numerals.length &&
                    ((e = e.replace(/[0-9]/g, function (t) {
                      return i.options.numerals[+t];
                    })),
                    (n = n.replace(/[0-9]/g, function (t) {
                      return i.options.numerals[+t];
                    }))),
                  (t < 0 ? "-" : "") +
                    i.options.prefix +
                    e +
                    n +
                    i.options.suffix
                );
              }),
              (this.easeOutExpo = function (t, e, n, r) {
                return (n * (1 - Math.pow(2, (-10 * t) / r)) * 1024) / 1023 + e;
              }),
              (this.options = r(r({}, this.defaults), n)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(e)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined"),
              "undefined" != typeof window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, t)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return i.handleScroll(i);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (t) {
                        return t();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (t.prototype.handleScroll = function (t) {
              if (t && window && !t.once) {
                var e = window.innerHeight + window.scrollY,
                  n = t.el.getBoundingClientRect(),
                  r = n.top + window.pageYOffset,
                  i = n.top + n.height + window.pageYOffset;
                i < e && i > window.scrollY && t.paused
                  ? ((t.paused = !1),
                    setTimeout(function () {
                      return t.start();
                    }, t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0))
                  : (window.scrollY > i || r > e) && !t.paused && t.reset();
              }
            }),
            (t.prototype.determineDirectionAndSmartEasing = function () {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              if (
                ((this.countDown = this.startVal > t),
                Math.abs(t - this.startVal) >
                  this.options.smartEasingThreshold && this.options.useEasing)
              ) {
                this.finalEndVal = t;
                var e = this.countDown ? 1 : -1;
                (this.endVal = t + e * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = t), (this.finalEndVal = null);
              null !== this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (t.prototype.start = function (t) {
              this.error ||
                (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function (t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  null == this.finalEndVal && this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function (t) {
              var e;
              if (this.el) {
                var n = this.formattingFn(t);
                (
                  null === (e = this.options.plugin) || void 0 === e
                    ? void 0
                    : e.render
                )
                  ? this.options.plugin.render(this.el, n)
                  : "INPUT" === this.el.tagName
                  ? (this.el.value = n)
                  : "text" === this.el.tagName || "tspan" === this.el.tagName
                  ? (this.el.textContent = n)
                  : (this.el.innerHTML = n);
              }
            }),
            (t.prototype.ensureNumber = function (t) {
              return "number" == typeof t && !isNaN(t);
            }),
            (t.prototype.validateValue = function (t) {
              var e = Number(t);
              return this.ensureNumber(e)
                ? e
                : ((this.error =
                    "[CountUp] invalid start or end value: ".concat(t)),
                  null);
            }),
            (t.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })();
    },
    51729: function (t, e, n) {
      var r = n(2265),
        i = n(72499);
      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? s(Object(n), !0).forEach(function (e) {
                var r, i;
                (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || null === t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              s = Object.keys(t);
            for (r = 0; r < s.length; r++)
              (n = s[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          for (r = 0; r < s.length; r++)
            (n = s[r]),
              !(e.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, n) &&
                (i[n] = t[n]);
        }
        return i;
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var c =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? r.useLayoutEffect
          : r.useEffect;
      function p(t) {
        var e = r.useRef(t);
        return (
          c(function () {
            e.current = t;
          }),
          r.useCallback(function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return e.current.apply(void 0, n);
          }, [])
        );
      }
      var f = function (t, e) {
          var n = e.decimal,
            r = e.decimals,
            s = e.duration,
            o = e.easingFn,
            a = e.end,
            u = e.formattingFn,
            l = e.numerals,
            c = e.prefix,
            p = e.separator,
            f = e.start,
            h = e.suffix,
            d = e.useEasing,
            m = e.useGrouping,
            g = e.useIndianSeparators,
            b = e.enableScrollSpy,
            y = e.scrollSpyDelay,
            v = e.scrollSpyOnce,
            V = e.plugin;
          return new i.CountUp(t, a, {
            startVal: f,
            duration: s,
            decimal: n,
            decimalPlaces: r,
            easingFn: o,
            formattingFn: u,
            numerals: l,
            separator: p,
            prefix: c,
            suffix: h,
            plugin: V,
            useEasing: d,
            useIndianSeparators: g,
            useGrouping: m,
            enableScrollSpy: b,
            scrollSpyDelay: y,
            scrollSpyOnce: v,
          });
        },
        h = [
          "ref",
          "startOnMount",
          "enableReinitialize",
          "delay",
          "onEnd",
          "onStart",
          "onPauseResume",
          "onReset",
          "onUpdate",
        ],
        d = {
          decimal: ".",
          separator: ",",
          delay: null,
          prefix: "",
          suffix: "",
          duration: 2,
          start: 0,
          decimals: 0,
          startOnMount: !0,
          enableReinitialize: !0,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
        },
        m = function (t) {
          var e = Object.fromEntries(
              Object.entries(t).filter(function (t) {
                return (
                  void 0 !==
                  ((function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                    (function (t, e) {
                      var n =
                        null == t
                          ? null
                          : ("undefined" != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t["@@iterator"];
                      if (null != n) {
                        var r,
                          i,
                          s,
                          o,
                          a = [],
                          u = !0,
                          l = !1;
                        try {
                          if (((s = (n = n.call(t)).next), 0 === e)) {
                            if (Object(n) !== n) return;
                            u = !1;
                          } else
                            for (
                              ;
                              !(u = (r = s.call(n)).done) &&
                              (a.push(r.value), a.length !== e);
                              u = !0
                            );
                        } catch (t) {
                          (l = !0), (i = t);
                        } finally {
                          try {
                            if (
                              !u &&
                              null != n.return &&
                              ((o = n.return()), Object(o) !== o)
                            )
                              return;
                          } finally {
                            if (l) throw i;
                          }
                        }
                        return a;
                      }
                    })(t, 2) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return l(t, e);
                      }
                    })(t, 2) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })())[1]
                );
              })
            ),
            n = r.useMemo(
              function () {
                return o(o({}, d), e);
              },
              [t]
            ),
            i = n.ref,
            s = n.startOnMount,
            a = n.enableReinitialize,
            c = n.delay,
            m = n.onEnd,
            g = n.onStart,
            b = n.onPauseResume,
            y = n.onReset,
            v = n.onUpdate,
            V = u(n, h),
            w = r.useRef(),
            E = r.useRef(),
            O = r.useRef(!1),
            S = p(function () {
              return f("string" == typeof i ? i : i.current, V);
            }),
            F = p(function (t) {
              var e = w.current;
              if (e && !t) return e;
              var n = S();
              return (w.current = n), n;
            }),
            C = p(function () {
              var t = function () {
                return F(!0).start(function () {
                  null == m ||
                    m({ pauseResume: j, reset: R, start: P, update: A });
                });
              };
              c && c > 0 ? (E.current = setTimeout(t, 1e3 * c)) : t(),
                null == g || g({ pauseResume: j, reset: R, update: A });
            }),
            j = p(function () {
              F().pauseResume(),
                null == b || b({ reset: R, start: P, update: A });
            }),
            R = p(function () {
              F().el &&
                (E.current && clearTimeout(E.current),
                F().reset(),
                null == y || y({ pauseResume: j, start: P, update: A }));
            }),
            A = p(function (t) {
              F().update(t),
                null == v || v({ pauseResume: j, reset: R, start: P });
            }),
            P = p(function () {
              R(), C();
            }),
            N = p(function (t) {
              s && (t && R(), C());
            });
          return (
            r.useEffect(
              function () {
                O.current ? a && N(!0) : ((O.current = !0), N());
              },
              [
                a,
                O,
                N,
                c,
                t.start,
                t.suffix,
                t.prefix,
                t.duration,
                t.separator,
                t.decimals,
                t.decimal,
                t.formattingFn,
              ]
            ),
            r.useEffect(
              function () {
                return function () {
                  R();
                };
              },
              [R]
            ),
            { start: P, pauseResume: j, reset: R, update: A, getCountUp: F }
          );
        },
        g = ["className", "redraw", "containerProps", "children", "style"];
      e.ZP = function (t) {
        var e = t.className,
          n = t.redraw,
          i = t.containerProps,
          s = t.children,
          l = t.style,
          c = u(t, g),
          f = r.useRef(null),
          h = r.useRef(!1),
          d = m(
            o(
              o({}, c),
              {},
              {
                ref: f,
                startOnMount: "function" != typeof s || 0 === t.delay,
                enableReinitialize: !1,
              }
            )
          ),
          b = d.start,
          y = d.reset,
          v = d.update,
          V = d.pauseResume,
          w = d.getCountUp,
          E = p(function () {
            b();
          }),
          O = p(function (e) {
            t.preserveValue || y(), v(e);
          }),
          S = p(function () {
            if (
              "function" == typeof t.children &&
              !(f.current instanceof Element)
            ) {
              console.error(
                'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.'
              );
              return;
            }
            w();
          });
        r.useEffect(
          function () {
            S();
          },
          [S]
        ),
          r.useEffect(
            function () {
              h.current && O(t.end);
            },
            [t.end, O]
          );
        var F = n && t;
        return (r.useEffect(
          function () {
            n && h.current && E();
          },
          [E, n, F]
        ),
        r.useEffect(
          function () {
            !n && h.current && E();
          },
          [
            E,
            n,
            t.start,
            t.suffix,
            t.prefix,
            t.duration,
            t.separator,
            t.decimals,
            t.decimal,
            t.className,
            t.formattingFn,
          ]
        ),
        r.useEffect(function () {
          h.current = !0;
        }, []),
        "function" == typeof s)
          ? s({
              countUpRef: f,
              start: b,
              reset: y,
              update: v,
              pauseResume: V,
              getCountUp: w,
            })
          : r.createElement(
              "span",
              a({ className: e, ref: f, style: l }, i),
              void 0 !== t.start ? w().formattingFn(t.start) : ""
            );
      };
    },
    4327: function (t, e, n) {
      n.d(e, {
        df: function () {
          return p;
        },
      });
      var r = n(2265),
        i = Object.defineProperty,
        s = (t, e, n) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        o = (t, e, n) => (s(t, "symbol" != typeof e ? e + "" : e, n), n),
        a = new Map(),
        u = new WeakMap(),
        l = 0,
        c = void 0,
        p = class extends r.Component {
          constructor(t) {
            super(t),
              o(this, "node", null),
              o(this, "_unobserveCb", null),
              o(this, "handleNode", (t) => {
                !this.node ||
                  (this.unobserve(),
                  t ||
                    this.props.triggerOnce ||
                    this.props.skip ||
                    this.setState({
                      inView: !!this.props.initialInView,
                      entry: void 0,
                    })),
                  (this.node = t || null),
                  this.observeNode();
              }),
              o(this, "handleChange", (t, e) => {
                t && this.props.triggerOnce && this.unobserve(),
                  "function" != typeof this.props.children ||
                    this.setState({ inView: t, entry: e }),
                  this.props.onChange && this.props.onChange(t, e);
              }),
              (this.state = { inView: !!t.initialInView, entry: void 0 });
          }
          componentDidMount() {
            this.unobserve(), this.observeNode();
          }
          componentDidUpdate(t) {
            (t.rootMargin !== this.props.rootMargin ||
              t.root !== this.props.root ||
              t.threshold !== this.props.threshold ||
              t.skip !== this.props.skip ||
              t.trackVisibility !== this.props.trackVisibility ||
              t.delay !== this.props.delay) &&
              (this.unobserve(), this.observeNode());
          }
          componentWillUnmount() {
            this.unobserve();
          }
          observeNode() {
            if (!this.node || this.props.skip) return;
            let {
              threshold: t,
              root: e,
              rootMargin: n,
              trackVisibility: r,
              delay: i,
              fallbackInView: s,
            } = this.props;
            this._unobserveCb = (function (t, e, n = {}, r = c) {
              if (void 0 === window.IntersectionObserver && void 0 !== r) {
                let i = t.getBoundingClientRect();
                return (
                  e(r, {
                    isIntersecting: r,
                    target: t,
                    intersectionRatio:
                      "number" == typeof n.threshold ? n.threshold : 0,
                    time: 0,
                    boundingClientRect: i,
                    intersectionRect: i,
                    rootBounds: i,
                  }),
                  () => {}
                );
              }
              let {
                  id: i,
                  observer: s,
                  elements: o,
                } = (function (t) {
                  let e = Object.keys(t)
                      .sort()
                      .filter((e) => void 0 !== t[e])
                      .map((e) => {
                        var n;
                        return `${e}_${
                          "root" === e
                            ? (n = t.root)
                              ? (u.has(n) || ((l += 1), u.set(n, l.toString())),
                                u.get(n))
                              : "0"
                            : t[e]
                        }`;
                      })
                      .toString(),
                    n = a.get(e);
                  if (!n) {
                    let r;
                    let i = new Map(),
                      s = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          var n;
                          let s =
                            e.isIntersecting &&
                            r.some((t) => e.intersectionRatio >= t);
                          t.trackVisibility &&
                            void 0 === e.isVisible &&
                            (e.isVisible = s),
                            null == (n = i.get(e.target)) ||
                              n.forEach((t) => {
                                t(s, e);
                              });
                        });
                      }, t);
                    (r =
                      s.thresholds ||
                      (Array.isArray(t.threshold)
                        ? t.threshold
                        : [t.threshold || 0])),
                      (n = { id: e, observer: s, elements: i }),
                      a.set(e, n);
                  }
                  return n;
                })(n),
                p = o.get(t) || [];
              return (
                o.has(t) || o.set(t, p),
                p.push(e),
                s.observe(t),
                function () {
                  p.splice(p.indexOf(e), 1),
                    0 === p.length && (o.delete(t), s.unobserve(t)),
                    0 === o.size && (s.disconnect(), a.delete(i));
                }
              );
            })(
              this.node,
              this.handleChange,
              {
                threshold: t,
                root: e,
                rootMargin: n,
                trackVisibility: r,
                delay: i,
              },
              s
            );
          }
          unobserve() {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }
          render() {
            let { children: t } = this.props;
            if ("function" == typeof t) {
              let { inView: e, entry: n } = this.state;
              return t({ inView: e, entry: n, ref: this.handleNode });
            }
            let {
              as: e,
              triggerOnce: n,
              threshold: i,
              root: s,
              rootMargin: o,
              onChange: a,
              skip: u,
              trackVisibility: l,
              delay: c,
              initialInView: p,
              fallbackInView: f,
              ...h
            } = this.props;
            return r.createElement(
              e || "div",
              { ref: this.handleNode, ...h },
              t
            );
          }
        };
    },
  },
]);
