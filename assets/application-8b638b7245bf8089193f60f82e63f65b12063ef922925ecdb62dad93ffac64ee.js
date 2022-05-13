/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
function copyHostId(e) {
  navigator.clipboard.writeText($(e).data("id"));
  var t = $(e).html();
  $(e).html("Copied ..."),
    setInterval(function () {
      $(e).html(t);
    }, 2e3);
}
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = pe.type(e);
    return (
      "function" !== n &&
      !pe.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function i(e, t, n) {
    if (pe.isFunction(t))
      return pe.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n;
      });
    if (t.nodeType)
      return pe.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (xe.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }
    return pe.grep(e, function (e) {
      return pe.inArray(e, t) > -1 !== n;
    });
  }
  function r(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function a(e) {
    var t = {};
    return (
      pe.each(e.match(je) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function o() {
    ie.addEventListener
      ? (ie.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s))
      : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s));
  }
  function s() {
    (ie.addEventListener ||
      "load" === e.event.type ||
      "complete" === ie.readyState) &&
      (o(), pe.ready());
  }
  function l(e, t, n) {
    if (n === undefined && 1 === e.nodeType) {
      var i = "data-" + t.replace(Ie, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : _e.test(n)
                ? pe.parseJSON(n)
                : n));
        } catch (r) {}
        pe.data(e, t, n);
      } else n = undefined;
    }
    return n;
  }
  function d(e) {
    var t;
    for (t in e)
      if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function c(e, t, n, i) {
    if (Ne(e)) {
      var r,
        a,
        o = pe.expando,
        s = e.nodeType,
        l = s ? pe.cache : e,
        d = s ? e[o] : e[o] && o;
      if (
        (d && l[d] && (i || l[d].data)) ||
        n !== undefined ||
        "string" != typeof t
      )
        return (
          d || (d = s ? (e[o] = ne.pop() || pe.guid++) : o),
          l[d] || (l[d] = s ? {} : { toJSON: pe.noop }),
          ("object" != typeof t && "function" != typeof t) ||
            (i
              ? (l[d] = pe.extend(l[d], t))
              : (l[d].data = pe.extend(l[d].data, t))),
          (a = l[d]),
          i || (a.data || (a.data = {}), (a = a.data)),
          n !== undefined && (a[pe.camelCase(t)] = n),
          "string" == typeof t
            ? null == (r = a[t]) && (r = a[pe.camelCase(t)])
            : (r = a),
          r
        );
    }
  }
  function u(e, t, n) {
    if (Ne(e)) {
      var i,
        r,
        a = e.nodeType,
        o = a ? pe.cache : e,
        s = a ? e[pe.expando] : pe.expando;
      if (o[s]) {
        if (t && (i = n ? o[s] : o[s].data)) {
          r = (t = pe.isArray(t)
            ? t.concat(pe.map(t, pe.camelCase))
            : t in i
            ? [t]
            : (t = pe.camelCase(t)) in i
            ? [t]
            : t.split(" ")).length;
          for (; r--; ) delete i[t[r]];
          if (n ? !d(i) : !pe.isEmptyObject(i)) return;
        }
        (n || (delete o[s].data, d(o[s]))) &&
          (a
            ? pe.cleanData([e], !0)
            : ue.deleteExpando || o != o.window
            ? delete o[s]
            : (o[s] = undefined));
      }
    }
  }
  function h(e, t, n, i) {
    var r,
      a = 1,
      o = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return pe.css(e, t, "");
          },
      l = s(),
      d = (n && n[3]) || (pe.cssNumber[t] ? "" : "px"),
      c = (pe.cssNumber[t] || ("px" !== d && +l)) && Fe.exec(pe.css(e, t));
    if (c && c[3] !== d) {
      (d = d || c[3]), (n = n || []), (c = +l || 1);
      do {
        (c /= a = a || ".5"), pe.style(e, t, c + d);
      } while (a !== (a = s() / l) && 1 !== a && --o);
    }
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = d), (i.start = c), (i.end = r))),
      r
    );
  }
  function p(e) {
    var t = Ve.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function f(e, t) {
    var n,
      i,
      r = 0,
      a =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : undefined;
    if (!a)
      for (a = [], n = e.childNodes || e; null != (i = n[r]); r++)
        !t || pe.nodeName(i, t) ? a.push(i) : pe.merge(a, f(i, t));
    return t === undefined || (t && pe.nodeName(e, t)) ? pe.merge([e], a) : a;
  }
  function m(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++)
      pe._data(n, "globalEval", !t || pe._data(t[i], "globalEval"));
  }
  function y(e) {
    We.test(e.type) && (e.defaultChecked = e.checked);
  }
  function g(e, t, n, i, r) {
    for (
      var a, o, s, l, d, c, u, h = e.length, g = p(t), v = [], b = 0;
      b < h;
      b++
    )
      if ((o = e[b]) || 0 === o)
        if ("object" === pe.type(o)) pe.merge(v, o.nodeType ? [o] : o);
        else if (Ge.test(o)) {
          for (
            l = l || g.appendChild(t.createElement("div")),
              d = (Ue.exec(o) || ["", ""])[1].toLowerCase(),
              u = Qe[d] || Qe._default,
              l.innerHTML = u[1] + pe.htmlPrefilter(o) + u[2],
              a = u[0];
            a--;

          )
            l = l.lastChild;
          if (
            (!ue.leadingWhitespace &&
              qe.test(o) &&
              v.push(t.createTextNode(qe.exec(o)[0])),
            !ue.tbody)
          )
            for (
              a =
                (o =
                  "table" !== d || Ye.test(o)
                    ? "<table>" !== u[1] || Ye.test(o)
                      ? 0
                      : l
                    : l.firstChild) && o.childNodes.length;
              a--;

            )
              pe.nodeName((c = o.childNodes[a]), "tbody") &&
                !c.childNodes.length &&
                o.removeChild(c);
          for (pe.merge(v, l.childNodes), l.textContent = ""; l.firstChild; )
            l.removeChild(l.firstChild);
          l = g.lastChild;
        } else v.push(t.createTextNode(o));
    for (
      l && g.removeChild(l),
        ue.appendChecked || pe.grep(f(v, "input"), y),
        b = 0;
      (o = v[b++]);

    )
      if (i && pe.inArray(o, i) > -1) r && r.push(o);
      else if (
        ((s = pe.contains(o.ownerDocument, o)),
        (l = f(g.appendChild(o), "script")),
        s && m(l),
        n)
      )
        for (a = 0; (o = l[a++]); ) Be.test(o.type || "") && n.push(o);
    return (l = null), g;
  }
  function v() {
    return !0;
  }
  function b() {
    return !1;
  }
  function w() {
    try {
      return ie.activeElement;
    } catch (e) {}
  }
  function S(e, t, n, i, r, a) {
    var o, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = undefined)), t))
        S(e, s, n, i, t[s], a);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = undefined))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = undefined))
            : ((r = i), (i = n), (n = undefined))),
      !1 === r)
    )
      r = b;
    else if (!r) return e;
    return (
      1 === a &&
        ((o = r),
        ((r = function (e) {
          return pe().off(e), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = pe.guid++))),
      e.each(function () {
        pe.event.add(this, t, r, i, n);
      })
    );
  }
  function k(e, t) {
    return pe.nodeName(e, "table") &&
      pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function x(e) {
    return (e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type), e;
  }
  function D(e) {
    var t = st.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function T(e, t) {
    if (1 === t.nodeType && pe.hasData(e)) {
      var n,
        i,
        r,
        a = pe._data(e),
        o = pe._data(t, a),
        s = a.events;
      if (s)
        for (n in (delete o.handle, (o.events = {}), s))
          for (i = 0, r = s[n].length; i < r; i++) pe.event.add(t, n, s[n][i]);
      o.data && (o.data = pe.extend({}, o.data));
    }
  }
  function C(e, t) {
    var n, i, r;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !ue.noCloneEvent && t[pe.expando])) {
        for (i in (r = pe._data(t)).events) pe.removeEvent(t, i, r.handle);
        t.removeAttribute(pe.expando);
      }
      "script" === n && t.text !== e.text
        ? ((x(t).text = e.text), D(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          ue.html5Clone &&
            e.innerHTML &&
            !pe.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && We.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function M(e, t, n, i) {
    t = ae.apply([], t);
    var r,
      a,
      o,
      s,
      l,
      d,
      c = 0,
      u = e.length,
      h = u - 1,
      p = t[0],
      m = pe.isFunction(p);
    if (m || (u > 1 && "string" == typeof p && !ue.checkClone && ot.test(p)))
      return e.each(function (r) {
        var a = e.eq(r);
        m && (t[0] = p.call(this, r, a.html())), M(a, t, n, i);
      });
    if (
      u &&
      ((r = (d = g(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === d.childNodes.length && (d = r),
      r || i)
    ) {
      for (o = (s = pe.map(f(d, "script"), x)).length; c < u; c++)
        (a = d),
          c !== h &&
            ((a = pe.clone(a, !0, !0)), o && pe.merge(s, f(a, "script"))),
          n.call(e[c], a, c);
      if (o)
        for (l = s[s.length - 1].ownerDocument, pe.map(s, D), c = 0; c < o; c++)
          (a = s[c]),
            Be.test(a.type || "") &&
              !pe._data(a, "globalEval") &&
              pe.contains(l, a) &&
              (a.src
                ? pe._evalUrl && pe._evalUrl(a.src)
                : pe.globalEval(
                    (a.text || a.textContent || a.innerHTML || "").replace(
                      lt,
                      ""
                    )
                  ));
      d = r = null;
    }
    return e;
  }
  function A(e, t, n) {
    for (var i, r = t ? pe.filter(t, e) : e, a = 0; null != (i = r[a]); a++)
      n || 1 !== i.nodeType || pe.cleanData(f(i)),
        i.parentNode &&
          (n && pe.contains(i.ownerDocument, i) && m(f(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  function E(e, t) {
    var n = pe(t.createElement(e)).appendTo(t.body),
      i = pe.css(n[0], "display");
    return n.detach(), i;
  }
  function j(e) {
    var t = ie,
      n = ut[e];
    return (
      n ||
        (("none" !== (n = E(e, t)) && n) ||
          ((t = (
            (ct = (
              ct || pe("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentWindow ||
            ct[0].contentDocument
          ).document).write(),
          t.close(),
          (n = E(e, t)),
          ct.detach()),
        (ut[e] = n)),
      n
    );
  }
  function $(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function N(e) {
    if (e in Ct) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--; )
      if ((e = Tt[n] + t) in Ct) return e;
  }
  function _(e, t) {
    for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++)
      (i = e[o]).style &&
        ((a[o] = pe._data(i, "olddisplay")),
        (n = i.style.display),
        t
          ? (a[o] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              Re(i) &&
              (a[o] = pe._data(i, "olddisplay", j(i.nodeName))))
          : ((r = Re(i)),
            ((n && "none" !== n) || !r) &&
              pe._data(i, "olddisplay", r ? n : pe.css(i, "display"))));
    for (o = 0; o < s; o++)
      (i = e[o]).style &&
        ((t && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = t ? a[o] || "" : "none"));
    return e;
  }
  function I(e, t, n) {
    var i = kt.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function O(e, t, n, i, r) {
    for (
      var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        o = 0;
      a < 4;
      a += 2
    )
      "margin" === n && (o += pe.css(e, n + He[a], !0, r)),
        i
          ? ("content" === n && (o -= pe.css(e, "padding" + He[a], !0, r)),
            "margin" !== n &&
              (o -= pe.css(e, "border" + He[a] + "Width", !0, r)))
          : ((o += pe.css(e, "padding" + He[a], !0, r)),
            "padding" !== n &&
              (o += pe.css(e, "border" + He[a] + "Width", !0, r)));
    return o;
  }
  function L(e, t, n) {
    var i = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      a = yt(e),
      o = ue.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, a);
    if (r <= 0 || null == r) {
      if (
        (((r = gt(e, t, a)) < 0 || null == r) && (r = e.style[t]), pt.test(r))
      )
        return r;
      (i = o && (ue.boxSizingReliable() || r === e.style[t])),
        (r = parseFloat(r) || 0);
    }
    return r + O(e, t, n || (o ? "border" : "content"), i, a) + "px";
  }
  function P(e, t, n, i, r) {
    return new P.prototype.init(e, t, n, i, r);
  }
  function z() {
    return (
      e.setTimeout(function () {
        Mt = undefined;
      }),
      (Mt = pe.now())
    );
  }
  function F(e, t) {
    var n,
      i = { height: e },
      r = 0;
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = He[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function H(e, t, n) {
    for (
      var i,
        r = (W.tweeners[t] || []).concat(W.tweeners["*"]),
        a = 0,
        o = r.length;
      a < o;
      a++
    )
      if ((i = r[a].call(n, t, e))) return i;
  }
  function R(e, t, n) {
    var i,
      r,
      a,
      o,
      s,
      l,
      d,
      c = this,
      u = {},
      h = e.style,
      p = e.nodeType && Re(e),
      f = pe._data(e, "fxshow");
    for (i in (n.queue ||
      (null == (s = pe._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || l();
        })),
      s.unqueued++,
      c.always(function () {
        c.always(function () {
          s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
        });
      })),
    1 === e.nodeType &&
      ("height" in t || "width" in t) &&
      ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
      "inline" ===
        ("none" === (d = pe.css(e, "display"))
          ? pe._data(e, "olddisplay") || j(e.nodeName)
          : d) &&
        "none" === pe.css(e, "float") &&
        (ue.inlineBlockNeedsLayout && "inline" !== j(e.nodeName)
          ? (h.zoom = 1)
          : (h.display = "inline-block"))),
    n.overflow &&
      ((h.overflow = "hidden"),
      ue.shrinkWrapBlocks() ||
        c.always(function () {
          (h.overflow = n.overflow[0]),
            (h.overflowX = n.overflow[1]),
            (h.overflowY = n.overflow[2]);
        })),
    t))
      if (((r = t[i]), Et.exec(r))) {
        if (
          (delete t[i], (a = a || "toggle" === r), r === (p ? "hide" : "show"))
        ) {
          if ("show" !== r || !f || f[i] === undefined) continue;
          p = !0;
        }
        u[i] = (f && f[i]) || pe.style(e, i);
      } else d = undefined;
    if (pe.isEmptyObject(u))
      "inline" === ("none" === d ? j(e.nodeName) : d) && (h.display = d);
    else
      for (i in (f
        ? "hidden" in f && (p = f.hidden)
        : (f = pe._data(e, "fxshow", {})),
      a && (f.hidden = !p),
      p
        ? pe(e).show()
        : c.done(function () {
            pe(e).hide();
          }),
      c.done(function () {
        var t;
        for (t in (pe._removeData(e, "fxshow"), u)) pe.style(e, t, u[t]);
      }),
      u))
        (o = H(p ? f[i] : 0, i, c)),
          i in f ||
            ((f[i] = o.start),
            p &&
              ((o.end = o.start),
              (o.start = "width" === i || "height" === i ? 1 : 0)));
  }
  function J(e, t) {
    var n, i, r, a, o;
    for (n in e)
      if (
        ((r = t[(i = pe.camelCase(n))]),
        (a = e[n]),
        pe.isArray(a) && ((r = a[1]), (a = e[n] = a[0])),
        n !== i && ((e[i] = a), delete e[n]),
        (o = pe.cssHooks[i]) && "expand" in o)
      )
        for (n in ((a = o.expand(a)), delete e[i], a))
          n in e || ((e[n] = a[n]), (t[n] = r));
      else t[i] = r;
  }
  function W(e, t, n) {
    var i,
      r,
      a = 0,
      o = W.prefilters.length,
      s = pe.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var t = Mt || z(),
            n = Math.max(0, d.startTime + d.duration - t),
            i = 1 - (n / d.duration || 0),
            a = 0,
            o = d.tweens.length;
          a < o;
          a++
        )
          d.tweens[a].run(i);
        return (
          s.notifyWith(e, [d, i, n]),
          i < 1 && o ? n : (s.resolveWith(e, [d]), !1)
        );
      },
      d = s.promise({
        elem: e,
        props: pe.extend({}, t),
        opts: pe.extend(
          !0,
          { specialEasing: {}, easing: pe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: Mt || z(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = pe.Tween(
            e,
            d.opts,
            t,
            n,
            d.opts.specialEasing[t] || d.opts.easing
          );
          return d.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? d.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) d.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [d, 1, 0]), s.resolveWith(e, [d, t]))
              : s.rejectWith(e, [d, t]),
            this
          );
        },
      }),
      c = d.props;
    for (J(c, d.opts.specialEasing); a < o; a++)
      if ((i = W.prefilters[a].call(d, e, c, d.opts)))
        return (
          pe.isFunction(i.stop) &&
            (pe._queueHooks(d.elem, d.opts.queue).stop = pe.proxy(i.stop, i)),
          i
        );
    return (
      pe.map(c, H, d),
      pe.isFunction(d.opts.start) && d.opts.start.call(e, d),
      pe.fx.timer(pe.extend(l, { elem: e, anim: d, queue: d.opts.queue })),
      d
        .progress(d.opts.progress)
        .done(d.opts.done, d.opts.complete)
        .fail(d.opts.fail)
        .always(d.opts.always)
    );
  }
  function U(e) {
    return pe.attr(e, "class") || "";
  }
  function B(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        a = t.toLowerCase().match(je) || [];
      if (pe.isFunction(n))
        for (; (i = a[r++]); )
          "+" === i.charAt(0)
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function q(e, t, n, i) {
    function r(s) {
      var l;
      return (
        (a[s] = !0),
        pe.each(e[s] || [], function (e, s) {
          var d = s(t, n, i);
          return "string" != typeof d || o || a[d]
            ? o
              ? !(l = d)
              : void 0
            : (t.dataTypes.unshift(d), r(d), !1);
        }),
        l
      );
    }
    var a = {},
      o = e === en;
    return r(t.dataTypes[0]) || (!a["*"] && r("*"));
  }
  function V(e, t) {
    var n,
      i,
      r = pe.ajaxSettings.flatOptions || {};
    for (i in t) t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    return n && pe.extend(!0, e, n), e;
  }
  function Q(e, t, n) {
    for (var i, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        r === undefined &&
          (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (o in s)
        if (s[o] && s[o].test(r)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) a = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          a = o;
          break;
        }
        i || (i = o);
      }
      a = a || i;
    }
    if (a) return a !== l[0] && l.unshift(a), n[a];
  }
  function G(e, t, n, i) {
    var r,
      a,
      o,
      s,
      l,
      d = {},
      c = e.dataTypes.slice();
    if (c[1]) for (o in e.converters) d[o.toLowerCase()] = e.converters[o];
    for (a = c.shift(); a; )
      if (
        (e.responseFields[a] && (n[e.responseFields[a]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = a),
        (a = c.shift()))
      )
        if ("*" === a) a = l;
        else if ("*" !== l && l !== a) {
          if (!(o = d[l + " " + a] || d["* " + a]))
            for (r in d)
              if (
                (s = r.split(" "))[1] === a &&
                (o = d[l + " " + s[0]] || d["* " + s[0]])
              ) {
                !0 === o
                  ? (o = d[r])
                  : !0 !== d[r] && ((a = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== o)
            if (o && e.throws) t = o(t);
            else
              try {
                t = o(t);
              } catch (u) {
                return {
                  state: "parsererror",
                  error: o ? u : "No conversion from " + l + " to " + a,
                };
              }
        }
    return { state: "success", data: t };
  }
  function Y(e) {
    return (e.style && e.style.display) || pe.css(e, "display");
  }
  function K(e) {
    if (!pe.contains(e.ownerDocument || ie, e)) return !0;
    for (; e && 1 === e.nodeType; ) {
      if ("none" === Y(e) || "hidden" === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function X(e, t, n, i) {
    var r;
    if (pe.isArray(t))
      pe.each(t, function (t, r) {
        n || on.test(e)
          ? i(e, r)
          : X(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== pe.type(t)) i(e, t);
    else for (r in t) X(e + "[" + r + "]", t[r], n, i);
  }
  function Z() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function ee() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function te(e) {
    return pe.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [],
    ie = e.document,
    re = ne.slice,
    ae = ne.concat,
    oe = ne.push,
    se = ne.indexOf,
    le = {},
    de = le.toString,
    ce = le.hasOwnProperty,
    ue = {},
    he = "1.12.4",
    pe = function (e, t) {
      return new pe.fn.init(e, t);
    },
    fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    me = /^-ms-/,
    ye = /-([\da-z])/gi,
    ge = function (e, t) {
      return t.toUpperCase();
    };
  (pe.fn = pe.prototype =
    {
      jquery: he,
      constructor: pe,
      selector: "",
      length: 0,
      toArray: function () {
        return re.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : re.call(this);
      },
      pushStack: function (e) {
        var t = pe.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return pe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          pe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(re.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: oe,
      sort: ne.sort,
      splice: ne.splice,
    }),
    (pe.extend = pe.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          a,
          o = arguments[0] || {},
          s = 1,
          l = arguments.length,
          d = !1;
        for (
          "boolean" == typeof o && ((d = o), (o = arguments[s] || {}), s++),
            "object" == typeof o || pe.isFunction(o) || (o = {}),
            s === l && ((o = this), s--);
          s < l;
          s++
        )
          if (null != (r = arguments[s]))
            for (i in r)
              (e = o[i]),
                o !== (n = r[i]) &&
                  (d && n && (pe.isPlainObject(n) || (t = pe.isArray(n)))
                    ? (t
                        ? ((t = !1), (a = e && pe.isArray(e) ? e : []))
                        : (a = e && pe.isPlainObject(e) ? e : {}),
                      (o[i] = pe.extend(d, a, n)))
                    : n !== undefined && (o[i] = n));
        return o;
      }),
    pe.extend({
      expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === pe.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === pe.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !ce.call(e, "constructor") &&
            !ce.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (!ue.ownFirst) for (t in e) return ce.call(e, t);
        for (t in e);
        return t === undefined || ce.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? le[de.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          pe.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(me, "ms-").replace(ye, ge);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var i,
          r = 0;
        if (n(e))
          for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(fe, "");
      },
      makeArray: function (e, t) {
        var i = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? pe.merge(i, "string" == typeof e ? [e] : e)
              : oe.call(i, e)),
          i
        );
      },
      inArray: function (e, t, n) {
        var i;
        if (t) {
          if (se) return se.call(t, e, n);
          for (
            i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
            n < i;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; ) e[r++] = t[i++];
        if (n != n) for (; t[i] !== undefined; ) e[r++] = t[i++];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, a = e.length, o = !n; r < a; r++)
          !t(e[r], r) !== o && i.push(e[r]);
        return i;
      },
      map: function (e, t, i) {
        var r,
          a,
          o = 0,
          s = [];
        if (n(e))
          for (r = e.length; o < r; o++)
            null != (a = t(e[o], o, i)) && s.push(a);
        else for (o in e) null != (a = t(e[o], o, i)) && s.push(a);
        return ae.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, r;
        return (
          "string" == typeof t && ((r = e[t]), (t = e), (e = r)),
          pe.isFunction(e)
            ? ((n = re.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, n.concat(re.call(arguments)));
              }).guid = e.guid =
                e.guid || pe.guid++),
              i)
            : undefined
        );
      },
      now: function () {
        return +new Date();
      },
      support: ue,
    }),
    "function" == typeof Symbol &&
      (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    pe.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        le["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ve =
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    (function (e) {
      function t(e, t, n, i) {
        var r,
          a,
          o,
          s,
          l,
          d,
          u,
          p,
          f = t && t.ownerDocument,
          m = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
        )
          return n;
        if (
          !i &&
          ((t ? t.ownerDocument || t : H) !== N && $(t), (t = t || N), I)
        ) {
          if (11 !== m && (d = ge.exec(e)))
            if ((r = d[1])) {
              if (9 === m) {
                if (!(o = t.getElementById(r))) return n;
                if (o.id === r) return n.push(o), n;
              } else if (
                f &&
                (o = f.getElementById(r)) &&
                z(t, o) &&
                o.id === r
              )
                return n.push(o), n;
            } else {
              if (d[2]) return X.apply(n, t.getElementsByTagName(e)), n;
              if (
                (r = d[3]) &&
                S.getElementsByClassName &&
                t.getElementsByClassName
              )
                return X.apply(n, t.getElementsByClassName(r)), n;
            }
          if (S.qsa && !B[e + " "] && (!O || !O.test(e))) {
            if (1 !== m) (f = t), (p = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (s = t.getAttribute("id"))
                  ? (s = s.replace(be, "\\$&"))
                  : t.setAttribute("id", (s = F)),
                  a = (u = T(e)).length,
                  l = he.test(s) ? "#" + s : "[id='" + s + "']";
                a--;

              )
                u[a] = l + " " + h(u[a]);
              (p = u.join(",")), (f = (ve.test(e) && c(t.parentNode)) || t);
            }
            if (p)
              try {
                return X.apply(n, f.querySelectorAll(p)), n;
              } catch (y) {
              } finally {
                s === F && t.removeAttribute("id");
              }
          }
        }
        return M(e.replace(se, "$1"), t, n, i);
      }
      function n() {
        function e(n, i) {
          return (
            t.push(n + " ") > k.cacheLength && delete e[t.shift()],
            (e[n + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[F] = !0), e;
      }
      function r(e) {
        var t = N.createElement("div");
        try {
          return !!e(t);
        } catch (n) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function a(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) k.attrHandle[n[i]] = t;
      }
      function o(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || V) - (~e.sourceIndex || V);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function s(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function d(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, i) {
              for (var r, a = e([], n.length, t), o = a.length; o--; )
                n[(r = a[o])] && (n[r] = !(i[r] = n[r]));
            })
          );
        });
      }
      function c(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      function u() {}
      function h(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function p(e, t, n) {
        var i = t.dir,
          r = n && "parentNode" === i,
          a = J++;
        return t.first
          ? function (t, n, a) {
              for (; (t = t[i]); ) if (1 === t.nodeType || r) return e(t, n, a);
            }
          : function (t, n, o) {
              var s,
                l,
                d,
                c = [R, a];
              if (o) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || r) && e(t, n, o)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || r) {
                    if (
                      (s = (l =
                        (d = t[F] || (t[F] = {}))[t.uniqueID] ||
                        (d[t.uniqueID] = {}))[i]) &&
                      s[0] === R &&
                      s[1] === a
                    )
                      return (c[2] = s[2]);
                    if (((l[i] = c), (c[2] = e(t, n, o)))) return !0;
                  }
            };
      }
      function f(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function m(e, n, i) {
        for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
        return i;
      }
      function y(e, t, n, i, r) {
        for (var a, o = [], s = 0, l = e.length, d = null != t; s < l; s++)
          (a = e[s]) && ((n && !n(a, i, r)) || (o.push(a), d && t.push(s)));
        return o;
      }
      function g(e, t, n, r, a, o) {
        return (
          r && !r[F] && (r = g(r)),
          a && !a[F] && (a = g(a, o)),
          i(function (i, o, s, l) {
            var d,
              c,
              u,
              h = [],
              p = [],
              f = o.length,
              g = i || m(t || "*", s.nodeType ? [s] : s, []),
              v = !e || (!i && t) ? g : y(g, h, e, s, l),
              b = n ? (a || (i ? e : f || r) ? [] : o) : v;
            if ((n && n(v, b, s, l), r))
              for (d = y(b, p), r(d, [], s, l), c = d.length; c--; )
                (u = d[c]) && (b[p[c]] = !(v[p[c]] = u));
            if (i) {
              if (a || e) {
                if (a) {
                  for (d = [], c = b.length; c--; )
                    (u = b[c]) && d.push((v[c] = u));
                  a(null, (b = []), d, l);
                }
                for (c = b.length; c--; )
                  (u = b[c]) &&
                    (d = a ? ee(i, u) : h[c]) > -1 &&
                    (i[d] = !(o[d] = u));
              }
            } else (b = y(b === o ? b.splice(f, b.length) : b)), a ? a(null, o, b, l) : X.apply(o, b);
          })
        );
      }
      function v(e) {
        for (
          var t,
            n,
            i,
            r = e.length,
            a = k.relative[e[0].type],
            o = a || k.relative[" "],
            s = a ? 1 : 0,
            l = p(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            d = p(
              function (e) {
                return ee(t, e) > -1;
              },
              o,
              !0
            ),
            c = [
              function (e, n, i) {
                var r =
                  (!a && (i || n !== A)) ||
                  ((t = n).nodeType ? l(e, n, i) : d(e, n, i));
                return (t = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((n = k.relative[e[s].type])) c = [p(f(c), n)];
          else {
            if ((n = k.filter[e[s].type].apply(null, e[s].matches))[F]) {
              for (i = ++s; i < r && !k.relative[e[i].type]; i++);
              return g(
                s > 1 && f(c),
                s > 1 &&
                  h(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(se, "$1"),
                n,
                s < i && v(e.slice(s, i)),
                i < r && v((e = e.slice(i))),
                i < r && h(e)
              );
            }
            c.push(n);
          }
        return f(c);
      }
      function b(e, n) {
        var r = n.length > 0,
          a = e.length > 0,
          o = function (i, o, s, l, d) {
            var c,
              u,
              h,
              p = 0,
              f = "0",
              m = i && [],
              g = [],
              v = A,
              b = i || (a && k.find.TAG("*", d)),
              w = (R += null == v ? 1 : Math.random() || 0.1),
              S = b.length;
            for (
              d && (A = o === N || o || d);
              f !== S && null != (c = b[f]);
              f++
            ) {
              if (a && c) {
                for (
                  u = 0, o || c.ownerDocument === N || ($(c), (s = !I));
                  (h = e[u++]);

                )
                  if (h(c, o || N, s)) {
                    l.push(c);
                    break;
                  }
                d && (R = w);
              }
              r && ((c = !h && c) && p--, i && m.push(c));
            }
            if (((p += f), r && f !== p)) {
              for (u = 0; (h = n[u++]); ) h(m, g, o, s);
              if (i) {
                if (p > 0) for (; f--; ) m[f] || g[f] || (g[f] = Y.call(l));
                g = y(g);
              }
              X.apply(l, g),
                d && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l);
            }
            return d && ((R = w), (A = v)), m;
          };
        return r ? i(o) : o;
      }
      var w,
        S,
        k,
        x,
        D,
        T,
        C,
        M,
        A,
        E,
        j,
        $,
        N,
        _,
        I,
        O,
        L,
        P,
        z,
        F = "sizzle" + 1 * new Date(),
        H = e.document,
        R = 0,
        J = 0,
        W = n(),
        U = n(),
        B = n(),
        q = function (e, t) {
          return e === t && (j = !0), 0;
        },
        V = 1 << 31,
        Q = {}.hasOwnProperty,
        G = [],
        Y = G.pop,
        K = G.push,
        X = G.push,
        Z = G.slice,
        ee = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        te =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re =
          "\\[" +
          ne +
          "*(" +
          ie +
          ")(?:" +
          ne +
          "*([*^$|!~]?=)" +
          ne +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          ie +
          "))|)" +
          ne +
          "*\\]",
        ae =
          ":(" +
          ie +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          re +
          ")*)|.*)\\)|)",
        oe = new RegExp(ne + "+", "g"),
        se = new RegExp(
          "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
          "g"
        ),
        le = new RegExp("^" + ne + "*," + ne + "*"),
        de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        ue = new RegExp(ae),
        he = new RegExp("^" + ie + "$"),
        pe = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie + "|[*])"),
          ATTR: new RegExp("^" + re),
          PSEUDO: new RegExp("^" + ae),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ne +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ne +
              "*(?:([+-]|)" +
              ne +
              "*(\\d+)|))" +
              ne +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ne +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ne +
              "*((?:-\\d)?\\d*)" +
              ne +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        fe = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ye = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ve = /[+~]/,
        be = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        Se = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        ke = function () {
          $();
        };
      try {
        X.apply((G = Z.call(H.childNodes)), H.childNodes),
          G[H.childNodes.length].nodeType;
      } catch (xe) {
        X = {
          apply: G.length
            ? function (e, t) {
                K.apply(e, Z.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      for (w in ((S = t.support = {}),
      (D = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      ($ = t.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : H;
          return i !== N && 9 === i.nodeType && i.documentElement
            ? ((_ = (N = i).documentElement),
              (I = !D(N)),
              (n = N.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", ke, !1)
                  : n.attachEvent && n.attachEvent("onunload", ke)),
              (S.attributes = r(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (S.getElementsByTagName = r(function (e) {
                return (
                  e.appendChild(N.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (S.getElementsByClassName = ye.test(N.getElementsByClassName)),
              (S.getById = r(function (e) {
                return (
                  (_.appendChild(e).id = F),
                  !N.getElementsByName || !N.getElementsByName(F).length
                );
              })),
              S.getById
                ? ((k.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && I) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (k.filter.ID = function (e) {
                    var t = e.replace(we, Se);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete k.find.ID,
                  (k.filter.ID = function (e) {
                    var t = e.replace(we, Se);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (k.find.TAG = S.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : S.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      r = 0,
                      a = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = a[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return a;
                  }),
              (k.find.CLASS =
                S.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && I)
                    return t.getElementsByClassName(e);
                }),
              (L = []),
              (O = []),
              (S.qsa = ye.test(N.querySelectorAll)) &&
                (r(function (e) {
                  (_.appendChild(e).innerHTML =
                    "<a id='" +
                    F +
                    "'></a><select id='" +
                    F +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      O.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + F + "-]").length ||
                      O.push("~="),
                    e.querySelectorAll(":checked").length || O.push(":checked"),
                    e.querySelectorAll("a#" + F + "+*").length ||
                      O.push(".#.+[+~]");
                }),
                r(function (e) {
                  var t = N.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      O.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      O.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    O.push(",.*:");
                })),
              (S.matchesSelector = ye.test(
                (P =
                  _.matches ||
                  _.webkitMatchesSelector ||
                  _.mozMatchesSelector ||
                  _.oMatchesSelector ||
                  _.msMatchesSelector)
              )) &&
                r(function (e) {
                  (S.disconnectedMatch = P.call(e, "div")),
                    P.call(e, "[s!='']:x"),
                    L.push("!=", ae);
                }),
              (O = O.length && new RegExp(O.join("|"))),
              (L = L.length && new RegExp(L.join("|"))),
              (t = ye.test(_.compareDocumentPosition)),
              (z =
                t || ye.test(_.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (q = t
                ? function (e, t) {
                    if (e === t) return (j = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!S.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === N || (e.ownerDocument === H && z(H, e))
                          ? -1
                          : t === N || (t.ownerDocument === H && z(H, t))
                          ? 1
                          : E
                          ? ee(E, e) - ee(E, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (j = !0), 0;
                    var n,
                      i = 0,
                      r = e.parentNode,
                      a = t.parentNode,
                      s = [e],
                      l = [t];
                    if (!r || !a)
                      return e === N
                        ? -1
                        : t === N
                        ? 1
                        : r
                        ? -1
                        : a
                        ? 1
                        : E
                        ? ee(E, e) - ee(E, t)
                        : 0;
                    if (r === a) return o(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (; s[i] === l[i]; ) i++;
                    return i
                      ? o(s[i], l[i])
                      : s[i] === H
                      ? -1
                      : l[i] === H
                      ? 1
                      : 0;
                  }),
              N)
            : N;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== N && $(e),
          (n = n.replace(ce, "='$1']")),
          S.matchesSelector &&
            I &&
            !B[n + " "] &&
            (!L || !L.test(n)) &&
            (!O || !O.test(n)))
        )
          try {
            var i = P.call(e, n);
            if (
              i ||
              S.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (xe) {}
        return t(n, N, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== N && $(e), z(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== N && $(e);
        var n = k.attrHandle[t.toLowerCase()],
          i =
            n && Q.call(k.attrHandle, t.toLowerCase())
              ? n(e, t, !I)
              : undefined;
        return i !== undefined
          ? i
          : S.attributes || !I
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          r = 0;
        if (
          ((j = !S.detectDuplicates),
          (E = !S.sortStable && e.slice(0)),
          e.sort(q),
          j)
        ) {
          for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (E = null), e;
      }),
      (x = t.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            r = e.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += x(e);
            } else if (3 === r || 4 === r) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += x(t);
          return n;
        }),
      ((k = t.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: pe,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(we, Se)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(we, Se)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return pe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      ue.test(n) &&
                      (t = T(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(we, Se).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = W[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  W(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, i) {
              return function (r) {
                var a = t.attr(r, e);
                return null == a
                  ? "!=" === n
                  : !n ||
                      ((a += ""),
                      "=" === n
                        ? a === i
                        : "!=" === n
                        ? a !== i
                        : "^=" === n
                        ? i && 0 === a.indexOf(i)
                        : "*=" === n
                        ? i && a.indexOf(i) > -1
                        : "$=" === n
                        ? i && a.slice(-i.length) === i
                        : "~=" === n
                        ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1
                        : "|=" === n &&
                          (a === i || a.slice(0, i.length + 1) === i + "-"));
              };
            },
            CHILD: function (e, t, n, i, r) {
              var a = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === i && 0 === r
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var d,
                      c,
                      u,
                      h,
                      p,
                      f,
                      m = a !== o ? "nextSibling" : "previousSibling",
                      y = t.parentNode,
                      g = s && t.nodeName.toLowerCase(),
                      v = !l && !s,
                      b = !1;
                    if (y) {
                      if (a) {
                        for (; m; ) {
                          for (h = t; (h = h[m]); )
                            if (
                              s
                                ? h.nodeName.toLowerCase() === g
                                : 1 === h.nodeType
                            )
                              return !1;
                          f = m = "only" === e && !f && "nextSibling";
                        }
                        return !0;
                      }
                      if (((f = [o ? y.firstChild : y.lastChild]), o && v)) {
                        for (
                          b =
                            (p =
                              (d =
                                (c =
                                  (u = (h = y)[F] || (h[F] = {}))[h.uniqueID] ||
                                  (u[h.uniqueID] = {}))[e] || [])[0] === R &&
                              d[1]) && d[2],
                            h = p && y.childNodes[p];
                          (h = (++p && h && h[m]) || (b = p = 0) || f.pop());

                        )
                          if (1 === h.nodeType && ++b && h === t) {
                            c[e] = [R, p, b];
                            break;
                          }
                      } else if (
                        (v &&
                          (b = p =
                            (d =
                              (c =
                                (u = (h = t)[F] || (h[F] = {}))[h.uniqueID] ||
                                (u[h.uniqueID] = {}))[e] || [])[0] === R &&
                            d[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (h = (++p && h && h[m]) || (b = p = 0) || f.pop()) &&
                          ((s
                            ? h.nodeName.toLowerCase() !== g
                            : 1 !== h.nodeType) ||
                            !++b ||
                            (v &&
                              ((c =
                                (u = h[F] || (h[F] = {}))[h.uniqueID] ||
                                (u[h.uniqueID] = {}))[e] = [R, b]),
                            h !== t));

                        );
                      return (b -= r) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var r,
                a =
                  k.pseudos[e] ||
                  k.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return a[F]
                ? a(n)
                : a.length > 1
                ? ((r = [e, e, "", n]),
                  k.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, r = a(e, n), o = r.length; o--; )
                          e[(i = ee(e, r[o]))] = !(t[i] = r[o]);
                      })
                    : function (e) {
                        return a(e, 0, r);
                      })
                : a;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                r = C(e.replace(se, "$1"));
              return r[F]
                ? i(function (e, t, n, i) {
                    for (var a, o = r(e, null, i, []), s = e.length; s--; )
                      (a = o[s]) && (e[s] = !(t[s] = a));
                  })
                : function (e, i, a) {
                    return (
                      (t[0] = e), r(t, null, a, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(we, Se)),
                function (t) {
                  return (t.textContent || t.innerText || x(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: i(function (e) {
              return (
                he.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(we, Se).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = I
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === _;
            },
            focus: function (e) {
              return (
                e === N.activeElement &&
                (!N.hasFocus || N.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !k.pseudos.empty(e);
            },
            header: function (e) {
              return me.test(e.nodeName);
            },
            input: function (e) {
              return fe.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: d(function () {
              return [0];
            }),
            last: d(function (e, t) {
              return [t - 1];
            }),
            eq: d(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: d(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: d(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: d(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: d(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = k.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        k.pseudos[w] = s(w);
      for (w in { submit: !0, reset: !0 }) k.pseudos[w] = l(w);
      return (
        (u.prototype = k.filters = k.pseudos),
        (k.setFilters = new u()),
        (T = t.tokenize =
          function (e, n) {
            var i,
              r,
              a,
              o,
              s,
              l,
              d,
              c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], d = k.preFilter; s; ) {
              for (o in ((i && !(r = le.exec(s))) ||
                (r && (s = s.slice(r[0].length) || s), l.push((a = []))),
              (i = !1),
              (r = de.exec(s)) &&
                ((i = r.shift()),
                a.push({ value: i, type: r[0].replace(se, " ") }),
                (s = s.slice(i.length))),
              k.filter))
                !(r = pe[o].exec(s)) ||
                  (d[o] && !(r = d[o](r))) ||
                  ((i = r.shift()),
                  a.push({ value: i, type: o, matches: r }),
                  (s = s.slice(i.length)));
              if (!i) break;
            }
            return n ? s.length : s ? t.error(e) : U(e, l).slice(0);
          }),
        (C = t.compile =
          function (e, t) {
            var n,
              i = [],
              r = [],
              a = B[e + " "];
            if (!a) {
              for (t || (t = T(e)), n = t.length; n--; )
                (a = v(t[n]))[F] ? i.push(a) : r.push(a);
              (a = B(e, b(r, i))).selector = e;
            }
            return a;
          }),
        (M = t.select =
          function (e, t, n, i) {
            var r,
              a,
              o,
              s,
              l,
              d = "function" == typeof e && e,
              u = !i && T((e = d.selector || e));
            if (((n = n || []), 1 === u.length)) {
              if (
                (a = u[0] = u[0].slice(0)).length > 2 &&
                "ID" === (o = a[0]).type &&
                S.getById &&
                9 === t.nodeType &&
                I &&
                k.relative[a[1].type]
              ) {
                if (
                  !(t = (k.find.ID(o.matches[0].replace(we, Se), t) || [])[0])
                )
                  return n;
                d && (t = t.parentNode), (e = e.slice(a.shift().value.length));
              }
              for (
                r = pe.needsContext.test(e) ? 0 : a.length;
                r-- && ((o = a[r]), !k.relative[(s = o.type)]);

              )
                if (
                  (l = k.find[s]) &&
                  (i = l(
                    o.matches[0].replace(we, Se),
                    (ve.test(a[0].type) && c(t.parentNode)) || t
                  ))
                ) {
                  if ((a.splice(r, 1), !(e = i.length && h(a))))
                    return X.apply(n, i), n;
                  break;
                }
            }
            return (
              (d || C(e, u))(
                i,
                t,
                !I,
                n,
                !t || (ve.test(e) && c(t.parentNode)) || t
              ),
              n
            );
          }),
        (S.sortStable = F.split("").sort(q).join("") === F),
        (S.detectDuplicates = !!j),
        $(),
        (S.sortDetached = r(function (e) {
          return 1 & e.compareDocumentPosition(N.createElement("div"));
        })),
        r(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          a("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (S.attributes &&
          r(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          a("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        r(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          a(te, function (e, t, n) {
            var i;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
          }),
        t
      );
    })(e);
  (pe.find = ve),
    (pe.expr = ve.selectors),
    (pe.expr[":"] = pe.expr.pseudos),
    (pe.uniqueSort = pe.unique = ve.uniqueSort),
    (pe.text = ve.getText),
    (pe.isXMLDoc = ve.isXML),
    (pe.contains = ve.contains);
  var be = function (e, t, n) {
      for (var i = [], r = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && pe(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    we = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Se = pe.expr.match.needsContext,
    ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    xe = /^.[^:#\[\.,]*$/;
  (pe.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? pe.find.matchesSelector(i, e)
          ? [i]
          : []
        : pe.find.matches(
            e,
            pe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    pe.fn.extend({
      find: function (e) {
        var t,
          n = [],
          i = this,
          r = i.length;
        if ("string" != typeof e)
          return this.pushStack(
            pe(e).filter(function () {
              for (t = 0; t < r; t++) if (pe.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; t < r; t++) pe.find(e, i[t], n);
        return (
          ((n = this.pushStack(r > 1 ? pe.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(i(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(i(this, e || [], !0));
      },
      is: function (e) {
        return !!i(
          this,
          "string" == typeof e && Se.test(e) ? pe(e) : e || [],
          !1
        ).length;
      },
    });
  var De,
    Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((pe.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || De), "string" == typeof e)) {
      if (
        !(i =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : Te.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof pe ? t[0] : t),
          pe.merge(
            this,
            pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)
          ),
          ke.test(i[1]) && pe.isPlainObject(t))
        )
          for (i in t)
            pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      if ((r = ie.getElementById(i[2])) && r.parentNode) {
        if (r.id !== i[2]) return De.find(e);
        (this.length = 1), (this[0] = r);
      }
      return (this.context = ie), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : pe.isFunction(e)
      ? "undefined" != typeof n.ready
        ? n.ready(e)
        : e(pe)
      : (e.selector !== undefined &&
          ((this.selector = e.selector), (this.context = e.context)),
        pe.makeArray(e, this));
  }).prototype = pe.fn),
    (De = pe(ie));
  var Ce = /^(?:parents|prev(?:Until|All))/,
    Me = { children: !0, contents: !0, next: !0, prev: !0 };
  pe.fn.extend({
    has: function (e) {
      var t,
        n = pe(e, this),
        i = n.length;
      return this.filter(function () {
        for (t = 0; t < i; t++) if (pe.contains(this, n[t])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          i = 0,
          r = this.length,
          a = [],
          o = Se.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0;
        i < r;
        i++
      )
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (o
              ? o.index(n) > -1
              : 1 === n.nodeType && pe.find.matchesSelector(n, e))
          ) {
            a.push(n);
            break;
          }
      return this.pushStack(a.length > 1 ? pe.uniqueSort(a) : a);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? pe.inArray(this[0], pe(e))
          : pe.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    pe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return be(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return be(e, "parentNode", n);
        },
        next: function (e) {
          return r(e, "nextSibling");
        },
        prev: function (e) {
          return r(e, "previousSibling");
        },
        nextAll: function (e) {
          return be(e, "nextSibling");
        },
        prevAll: function (e) {
          return be(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return be(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return be(e, "previousSibling", n);
        },
        siblings: function (e) {
          return we((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return we(e.firstChild);
        },
        contents: function (e) {
          return pe.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : pe.merge([], e.childNodes);
        },
      },
      function (e, t) {
        pe.fn[e] = function (n, i) {
          var r = pe.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = pe.filter(i, r)),
            this.length > 1 &&
              (Me[e] || (r = pe.uniqueSort(r)),
              Ce.test(e) && (r = r.reverse())),
            this.pushStack(r)
          );
        };
      }
    );
  var Ae,
    Ee,
    je = /\S+/g;
  for (Ee in ((pe.Callbacks = function (e) {
    e = "string" == typeof e ? a(e) : pe.extend({}, e);
    var t,
      n,
      i,
      r,
      o = [],
      s = [],
      l = -1,
      d = function () {
        for (r = e.once, i = t = !0; s.length; l = -1)
          for (n = s.shift(); ++l < o.length; )
            !1 === o[l].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((l = o.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            o &&
              (n && !t && ((l = o.length - 1), s.push(n)),
              (function i(t) {
                pe.each(t, function (t, n) {
                  pe.isFunction(n)
                    ? (e.unique && c.has(n)) || o.push(n)
                    : n && n.length && "string" !== pe.type(n) && i(n);
                });
              })(arguments),
              n && !t && d()),
            this
          );
        },
        remove: function () {
          return (
            pe.each(arguments, function (e, t) {
              for (var n; (n = pe.inArray(t, o, n)) > -1; )
                o.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? pe.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (r = s = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (r = !0), n || c.disable(), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || d()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
  pe.extend({
    Deferred: function (e) {
      var t = [
          ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
          ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
          ["notify", "progress", pe.Callbacks("memory")],
        ],
        n = "pending",
        i = {
          state: function () {
            return n;
          },
          always: function () {
            return r.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return pe
              .Deferred(function (n) {
                pe.each(t, function (t, a) {
                  var o = pe.isFunction(e[t]) && e[t];
                  r[a[1]](function () {
                    var e = o && o.apply(this, arguments);
                    e && pe.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(n.notify)
                          .done(n.resolve)
                          .fail(n.reject)
                      : n[a[0] + "With"](
                          this === i ? n.promise() : this,
                          o ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? pe.extend(e, i) : i;
          },
        },
        r = {};
      return (
        (i.pipe = i.then),
        pe.each(t, function (e, a) {
          var o = a[2],
            s = a[3];
          (i[a[1]] = o.add),
            s &&
              o.add(
                function () {
                  n = s;
                },
                t[1 ^ e][2].disable,
                t[2][2].lock
              ),
            (r[a[0]] = function () {
              return r[a[0] + "With"](this === r ? i : this, arguments), this;
            }),
            (r[a[0] + "With"] = o.fireWith);
        }),
        i.promise(r),
        e && e.call(r, r),
        r
      );
    },
    when: function (e) {
      var t,
        n,
        i,
        r = 0,
        a = re.call(arguments),
        o = a.length,
        s = 1 !== o || (e && pe.isFunction(e.promise)) ? o : 0,
        l = 1 === s ? e : pe.Deferred(),
        d = function (e, n, i) {
          return function (r) {
            (n[e] = this),
              (i[e] = arguments.length > 1 ? re.call(arguments) : r),
              i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
          };
        };
      if (o > 1)
        for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++)
          a[r] && pe.isFunction(a[r].promise)
            ? a[r]
                .promise()
                .progress(d(r, n, t))
                .done(d(r, i, a))
                .fail(l.reject)
            : --s;
      return s || l.resolveWith(i, a), l.promise();
    },
  }),
  (pe.fn.ready = function (e) {
    return pe.ready.promise().done(e), this;
  }),
  pe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? pe.readyWait++ : pe.ready(!0);
    },
    ready: function (e) {
      (!0 === e ? --pe.readyWait : pe.isReady) ||
        ((pe.isReady = !0),
        (!0 !== e && --pe.readyWait > 0) ||
          (Ae.resolveWith(ie, [pe]),
          pe.fn.triggerHandler &&
            (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))));
    },
  }),
  (pe.ready.promise = function (t) {
    if (!Ae)
      if (
        ((Ae = pe.Deferred()),
        "complete" === ie.readyState ||
          ("loading" !== ie.readyState && !ie.documentElement.doScroll))
      )
        e.setTimeout(pe.ready);
      else if (ie.addEventListener)
        ie.addEventListener("DOMContentLoaded", s),
          e.addEventListener("load", s);
      else {
        ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
        var n = !1;
        try {
          n = null == e.frameElement && ie.documentElement;
        } catch (i) {}
        n &&
          n.doScroll &&
          (function t() {
            if (!pe.isReady) {
              try {
                n.doScroll("left");
              } catch (i) {
                return e.setTimeout(t, 50);
              }
              o(), pe.ready();
            }
          })();
      }
    return Ae.promise(t);
  }),
  pe.ready.promise(),
  pe(ue)))
    break;
  (ue.ownFirst = "0" === Ee),
    (ue.inlineBlockNeedsLayout = !1),
    pe(function () {
      var e, t, n, i;
      (n = ie.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = ie.createElement("div")),
        ((i = ie.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(t),
        "undefined" != typeof t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (ue.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(i));
    }),
    (function () {
      var e = ie.createElement("div");
      ue.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        ue.deleteExpando = !1;
      }
      e = null;
    })();
  var $e,
    Ne = function (e) {
      var t = pe.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ie = /([A-Z])/g;
  pe.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !d(e)
      );
    },
    data: function (e, t, n) {
      return c(e, t, n);
    },
    removeData: function (e, t) {
      return u(e, t);
    },
    _data: function (e, t, n) {
      return c(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return u(e, t, !0);
    },
  }),
    pe.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          a = this[0],
          o = a && a.attributes;
        if (e === undefined) {
          if (
            this.length &&
            ((r = pe.data(a)), 1 === a.nodeType && !pe._data(a, "parsedAttrs"))
          ) {
            for (n = o.length; n--; )
              o[n] &&
                0 === (i = o[n].name).indexOf("data-") &&
                l(a, (i = pe.camelCase(i.slice(5))), r[i]);
            pe._data(a, "parsedAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              pe.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              pe.data(this, e, t);
            })
          : a
          ? l(a, e, pe.data(a, e))
          : undefined;
      },
      removeData: function (e) {
        return this.each(function () {
          pe.removeData(this, e);
        });
      },
    }),
    pe.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = pe._data(e, t)),
            n &&
              (!i || pe.isArray(n)
                ? (i = pe._data(e, t, pe.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = pe.queue(e, t),
          i = n.length,
          r = n.shift(),
          a = pe._queueHooks(e, t),
          o = function () {
            pe.dequeue(e, t);
          };
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete a.stop,
            r.call(e, o, a)),
          !i && a && a.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          pe._data(e, n) ||
          pe._data(e, n, {
            empty: pe.Callbacks("once memory").add(function () {
              pe._removeData(e, t + "queue"), pe._removeData(e, n);
            }),
          })
        );
      },
    }),
    pe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? pe.queue(this[0], e)
            : t === undefined
            ? this
            : this.each(function () {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          pe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = pe.Deferred(),
          a = this,
          o = this.length,
          s = function () {
            --i || r.resolveWith(a, [a]);
          };
        for (
          "string" != typeof e && ((t = e), (e = undefined)), e = e || "fx";
          o--;

        )
          (n = pe._data(a[o], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(t);
      },
    }),
    (ue.shrinkWrapBlocks = function () {
      return null != $e
        ? $e
        : (($e = !1),
          (t = ie.getElementsByTagName("body")[0]) && t.style
            ? ((e = ie.createElement("div")),
              ((n = ie.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              t.appendChild(n).appendChild(e),
              "undefined" != typeof e.style.zoom &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(ie.createElement("div")).style.width = "5px"),
                ($e = 3 !== e.offsetWidth)),
              t.removeChild(n),
              $e)
            : void 0);
      var e, t, n;
    });
  var Oe,
    Le,
    Pe,
    ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Fe = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
    He = ["Top", "Right", "Bottom", "Left"],
    Re = function (e, t) {
      return (
        (e = t || e),
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
      );
    },
    Je = function (e, t, n, i, r, a, o) {
      var s = 0,
        l = e.length,
        d = null == n;
      if ("object" === pe.type(n))
        for (s in ((r = !0), n)) Je(e, t, s, n[s], !0, a, o);
      else if (
        i !== undefined &&
        ((r = !0),
        pe.isFunction(i) || (o = !0),
        d &&
          (o
            ? (t.call(e, i), (t = null))
            : ((d = t),
              (t = function (e, t, n) {
                return d.call(pe(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : d ? t.call(e) : l ? t(e[0], n) : a;
    },
    We = /^(?:checkbox|radio)$/i,
    Ue = /<([\w:-]+)/,
    Be = /^$|\/(?:java|ecma)script/i,
    qe = /^\s+/,
    Ve =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  (Oe = ie.createElement("div")),
    (Le = ie.createDocumentFragment()),
    (Pe = ie.createElement("input")),
    (Oe.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (ue.leadingWhitespace = 3 === Oe.firstChild.nodeType),
    (ue.tbody = !Oe.getElementsByTagName("tbody").length),
    (ue.htmlSerialize = !!Oe.getElementsByTagName("link").length),
    (ue.html5Clone =
      "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML),
    (Pe.type = "checkbox"),
    (Pe.checked = !0),
    Le.appendChild(Pe),
    (ue.appendChecked = Pe.checked),
    (Oe.innerHTML = "<textarea>x</textarea>"),
    (ue.noCloneChecked = !!Oe.cloneNode(!0).lastChild.defaultValue),
    Le.appendChild(Oe),
    (Pe = ie.createElement("input")).setAttribute("type", "radio"),
    Pe.setAttribute("checked", "checked"),
    Pe.setAttribute("name", "t"),
    Oe.appendChild(Pe),
    (ue.checkClone = Oe.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.noCloneEvent = !!Oe.addEventListener),
    (Oe[pe.expando] = 1),
    (ue.attributes = !Oe.getAttribute(pe.expando));
  var Qe = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: ue.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (Qe.optgroup = Qe.option),
    (Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead),
    (Qe.th = Qe.td);
  var Ge = /<|&#?\w+;/,
    Ye = /<tbody/i;
  !(function () {
    var t,
      n,
      i = ie.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (n = "on" + t),
        (ue[t] = n in e) ||
          (i.setAttribute(n, "t"), (ue[t] = !1 === i.attributes[n].expando));
    i = null;
  })();
  var Ke = /^(?:input|select|textarea)$/i,
    Xe = /^key/,
    Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    et = /^(?:focusinfocus|focusoutblur)$/,
    tt = /^([^.]*)(?:\.(.+)|)/;
  (pe.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var a,
        o,
        s,
        l,
        d,
        c,
        u,
        h,
        p,
        f,
        m,
        y = pe._data(e);
      if (y) {
        for (
          n.handler && ((n = (l = n).handler), (r = l.selector)),
            n.guid || (n.guid = pe.guid++),
            (o = y.events) || (o = y.events = {}),
            (c = y.handle) ||
              ((c = y.handle =
                function (e) {
                  return void 0 === pe || (e && pe.event.triggered === e.type)
                    ? undefined
                    : pe.event.dispatch.apply(c.elem, arguments);
                }).elem = e),
            s = (t = (t || "").match(je) || [""]).length;
          s--;

        )
          (p = m = (a = tt.exec(t[s]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p &&
              ((d = pe.event.special[p] || {}),
              (p = (r ? d.delegateType : d.bindType) || p),
              (d = pe.event.special[p] || {}),
              (u = pe.extend(
                {
                  type: p,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && pe.expr.match.needsContext.test(r),
                  namespace: f.join("."),
                },
                l
              )),
              (h = o[p]) ||
                (((h = o[p] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, f, c)) ||
                  (e.addEventListener
                    ? e.addEventListener(p, c, !1)
                    : e.attachEvent && e.attachEvent("on" + p, c))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
              (pe.event.global[p] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, i, r) {
      var a,
        o,
        s,
        l,
        d,
        c,
        u,
        h,
        p,
        f,
        m,
        y = pe.hasData(e) && pe._data(e);
      if (y && (c = y.events)) {
        for (d = (t = (t || "").match(je) || [""]).length; d--; )
          if (
            ((p = m = (s = tt.exec(t[d]) || [])[1]),
            (f = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              u = pe.event.special[p] || {},
                h = c[(p = (i ? u.delegateType : u.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = a = h.length;
              a--;

            )
              (o = h[a]),
                (!r && m !== o.origType) ||
                  (n && n.guid !== o.guid) ||
                  (s && !s.test(o.namespace)) ||
                  (i && i !== o.selector && ("**" !== i || !o.selector)) ||
                  (h.splice(a, 1),
                  o.selector && h.delegateCount--,
                  u.remove && u.remove.call(e, o));
            l &&
              !h.length &&
              ((u.teardown && !1 !== u.teardown.call(e, f, y.handle)) ||
                pe.removeEvent(e, p, y.handle),
              delete c[p]);
          } else for (p in c) pe.event.remove(e, p + t[d], n, i, !0);
        pe.isEmptyObject(c) && (delete y.handle, pe._removeData(e, "events"));
      }
    },
    trigger: function (t, n, i, r) {
      var a,
        o,
        s,
        l,
        d,
        c,
        u,
        h = [i || ie],
        p = ce.call(t, "type") ? t.type : t,
        f = ce.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = c = i = i || ie),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !et.test(p + pe.event.triggered) &&
          (p.indexOf(".") > -1 && ((p = (f = p.split(".")).shift()), f.sort()),
          (o = p.indexOf(":") < 0 && "on" + p),
          ((t = t[pe.expando]
            ? t
            : new pe.Event(p, "object" == typeof t && t)).isTrigger = r
            ? 2
            : 3),
          (t.namespace = f.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = undefined),
          t.target || (t.target = i),
          (n = null == n ? [t] : pe.makeArray(n, [t])),
          (d = pe.event.special[p] || {}),
          r || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!r && !d.noBubble && !pe.isWindow(i)) {
          for (
            l = d.delegateType || p, et.test(l + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            h.push(s), (c = s);
          c === (i.ownerDocument || ie) &&
            h.push(c.defaultView || c.parentWindow || e);
        }
        for (u = 0; (s = h[u++]) && !t.isPropagationStopped(); )
          (t.type = u > 1 ? l : d.bindType || p),
            (a =
              (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")) &&
              a.apply(s, n),
            (a = o && s[o]) &&
              a.apply &&
              Ne(s) &&
              ((t.result = a.apply(s, n)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = p),
          !r &&
            !t.isDefaultPrevented() &&
            (!d._default || !1 === d._default.apply(h.pop(), n)) &&
            Ne(i) &&
            o &&
            i[p] &&
            !pe.isWindow(i))
        ) {
          (c = i[o]) && (i[o] = null), (pe.event.triggered = p);
          try {
            i[p]();
          } catch (m) {}
          (pe.event.triggered = undefined), c && (i[o] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = pe.event.fix(e);
      var t,
        n,
        i,
        r,
        a,
        o = [],
        s = re.call(arguments),
        l = (pe._data(this, "events") || {})[e.type] || [],
        d = pe.event.special[e.type] || {};
      if (
        ((s[0] = e),
        (e.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, e))
      ) {
        for (
          o = pe.event.handlers.call(this, e, l), t = 0;
          (r = o[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = r.elem, n = 0;
            (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
              ((e.handleObj = a),
              (e.data = a.data),
              (i = (
                (pe.event.special[a.origType] || {}).handle || a.handler
              ).apply(r.elem, s)) !== undefined &&
                !1 === (e.result = i) &&
                (e.preventDefault(), e.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        a,
        o = [],
        s = t.delegateCount,
        l = e.target;
      if (
        s &&
        l.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (i = [], n = 0; n < s; n++)
              i[(r = (a = t[n]).selector + " ")] === undefined &&
                (i[r] = a.needsContext
                  ? pe(r, this).index(l) > -1
                  : pe.find(r, this, null, [l]).length),
                i[r] && i.push(a);
            i.length && o.push({ elem: l, handlers: i });
          }
      return s < t.length && o.push({ elem: this, handlers: t.slice(s) }), o;
    },
    fix: function (e) {
      if (e[pe.expando]) return e;
      var t,
        n,
        i,
        r = e.type,
        a = e,
        o = this.fixHooks[r];
      for (
        o ||
          (this.fixHooks[r] = o =
            Ze.test(r) ? this.mouseHooks : Xe.test(r) ? this.keyHooks : {}),
          i = o.props ? this.props.concat(o.props) : this.props,
          e = new pe.Event(a),
          t = i.length;
        t--;

      )
        e[(n = i[t])] = a[n];
      return (
        e.target || (e.target = a.srcElement || ie),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        o.filter ? o.filter(e, a) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          i,
          r,
          a = t.button,
          o = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = (i = e.target.ownerDocument || ie).documentElement),
            (n = i.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
              ((r && r.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            o &&
            (e.relatedTarget = o === e.target ? t.toElement : o),
          e.which ||
            a === undefined ||
            (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== w() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === w() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            pe.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function (e) {
          return pe.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n) {
      var i = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });
      pe.event.trigger(i, null, t),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (pe.removeEvent = ie.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var i = "on" + t;
          e.detachEvent &&
            ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n));
        }),
    (pe.Event = function (e, t) {
      if (!(this instanceof pe.Event)) return new pe.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (e.defaultPrevented === undefined && !1 === e.returnValue)
              ? v
              : b))
        : (this.type = e),
        t && pe.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || pe.now()),
        (this[pe.expando] = !0);
    }),
    (pe.Event.prototype = {
      constructor: pe.Event,
      isDefaultPrevented: b,
      isPropagationStopped: b,
      isImmediatePropagationStopped: b,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = v),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = v),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = v),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    pe.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        pe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              r = e.relatedTarget,
              a = e.handleObj;
            return (
              (r && (r === i || pe.contains(i, r))) ||
                ((e.type = a.origType),
                (n = a.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    ue.submit ||
      (pe.event.special.submit = {
        setup: function () {
          if (pe.nodeName(this, "form")) return !1;
          pe.event.add(this, "click._submit keypress._submit", function (e) {
            var t = e.target,
              n =
                pe.nodeName(t, "input") || pe.nodeName(t, "button")
                  ? pe.prop(t, "form")
                  : undefined;
            n &&
              !pe._data(n, "submit") &&
              (pe.event.add(n, "submit._submit", function (e) {
                e._submitBubble = !0;
              }),
              pe._data(n, "submit", !0));
          });
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              pe.event.simulate("submit", this.parentNode, e));
        },
        teardown: function () {
          if (pe.nodeName(this, "form")) return !1;
          pe.event.remove(this, "._submit");
        },
      }),
    ue.change ||
      (pe.event.special.change = {
        setup: function () {
          if (Ke.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (pe.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                pe.event.add(this, "click._change", function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    pe.event.simulate("change", this, e);
                })),
              !1
            );
          pe.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Ke.test(t.nodeName) &&
              !pe._data(t, "change") &&
              (pe.event.add(t, "change._change", function (e) {
                !this.parentNode ||
                  e.isSimulated ||
                  e.isTrigger ||
                  pe.event.simulate("change", this.parentNode, e);
              }),
              pe._data(t, "change", !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return pe.event.remove(this, "._change"), !Ke.test(this.nodeName);
        },
      }),
    ue.focusin ||
      pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          pe.event.simulate(t, e.target, pe.event.fix(e));
        };
        pe.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              r = pe._data(i, t);
            r || i.addEventListener(e, n, !0), pe._data(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              r = pe._data(i, t) - 1;
            r
              ? pe._data(i, t, r)
              : (i.removeEventListener(e, n, !0), pe._removeData(i, t));
          },
        };
      }),
    pe.fn.extend({
      on: function (e, t, n, i) {
        return S(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return S(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            pe(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = undefined)),
          !1 === n && (n = b),
          this.each(function () {
            pe.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          pe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return pe.event.trigger(e, t, n, !0);
      },
    });
  var nt = / jQuery\d+="(?:null|\d+)"/g,
    it = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
    rt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    at = /<script|<style|<link/i,
    ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
    st = /^true\/(.*)/,
    lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    dt = p(ie).appendChild(ie.createElement("div"));
  pe.extend({
    htmlPrefilter: function (e) {
      return e.replace(rt, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        r,
        a,
        o,
        s,
        l = pe.contains(e.ownerDocument, e);
      if (
        (ue.html5Clone || pe.isXMLDoc(e) || !it.test("<" + e.nodeName + ">")
          ? (a = e.cloneNode(!0))
          : ((dt.innerHTML = e.outerHTML), dt.removeChild((a = dt.firstChild))),
        !(
          (ue.noCloneEvent && ue.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          pe.isXMLDoc(e)
        ))
      )
        for (i = f(a), s = f(e), o = 0; null != (r = s[o]); ++o)
          i[o] && C(r, i[o]);
      if (t)
        if (n)
          for (s = s || f(e), i = i || f(a), o = 0; null != (r = s[o]); o++)
            T(r, i[o]);
        else T(e, a);
      return (
        (i = f(a, "script")).length > 0 && m(i, !l && f(e, "script")),
        (i = s = r = null),
        a
      );
    },
    cleanData: function (e, t) {
      for (
        var n,
          i,
          r,
          a,
          o = 0,
          s = pe.expando,
          l = pe.cache,
          d = ue.attributes,
          c = pe.event.special;
        null != (n = e[o]);
        o++
      )
        if ((t || Ne(n)) && (a = (r = n[s]) && l[r])) {
          if (a.events)
            for (i in a.events)
              c[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, a.handle);
          l[r] &&
            (delete l[r],
            d || "undefined" == typeof n.removeAttribute
              ? (n[s] = undefined)
              : n.removeAttribute(s),
            ne.push(r));
        }
    },
  }),
    pe.fn.extend({
      domManip: M,
      detach: function (e) {
        return A(this, e, !0);
      },
      remove: function (e) {
        return A(this, e);
      },
      text: function (e) {
        return Je(
          this,
          function (e) {
            return e === undefined
              ? pe.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || ie).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return M(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            k(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return M(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = k(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return M(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return M(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && pe.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return pe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Je(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (e === undefined)
              return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
            if (
              "string" == typeof e &&
              !at.test(e) &&
              (ue.htmlSerialize || !it.test(e)) &&
              (ue.leadingWhitespace || !qe.test(e)) &&
              !Qe[(Ue.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = pe.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (pe.cleanData(f(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return M(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            pe.inArray(this, e) < 0 &&
              (pe.cleanData(f(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    pe.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        pe.fn[e] = function (e) {
          for (var n, i = 0, r = [], a = pe(e), o = a.length - 1; i <= o; i++)
            (n = i === o ? this : this.clone(!0)),
              pe(a[i])[t](n),
              oe.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var ct,
    ut = { HTML: "block", BODY: "block" },
    ht = /^margin/,
    pt = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
    ft = function (e, t, n, i) {
      var r,
        a,
        o = {};
      for (a in t) (o[a] = e.style[a]), (e.style[a] = t[a]);
      for (a in ((r = n.apply(e, i || [])), t)) e.style[a] = o[a];
      return r;
    },
    mt = ie.documentElement;
  !(function () {
    function t() {
      var t,
        c,
        u = ie.documentElement;
      u.appendChild(l),
        (d.style.cssText =
          "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (n = r = s = !1),
        (i = o = !0),
        e.getComputedStyle &&
          ((c = e.getComputedStyle(d)),
          (n = "1%" !== (c || {}).top),
          (s = "2px" === (c || {}).marginLeft),
          (r = "4px" === (c || { width: "4px" }).width),
          (d.style.marginRight = "50%"),
          (i = "4px" === (c || { marginRight: "4px" }).marginRight),
          ((t = d.appendChild(ie.createElement("div"))).style.cssText =
            d.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
          (t.style.marginRight = t.style.width = "0"),
          (d.style.width = "1px"),
          (o = !parseFloat((e.getComputedStyle(t) || {}).marginRight)),
          d.removeChild(t)),
        (d.style.display = "none"),
        (a = 0 === d.getClientRects().length) &&
          ((d.style.display = ""),
          (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (d.childNodes[0].style.borderCollapse = "separate"),
          ((t = d.getElementsByTagName("td"))[0].style.cssText =
            "margin:0;border:0;padding:0;display:none"),
          (a = 0 === t[0].offsetHeight) &&
            ((t[0].style.display = ""),
            (t[1].style.display = "none"),
            (a = 0 === t[0].offsetHeight))),
        u.removeChild(l);
    }
    var n,
      i,
      r,
      a,
      o,
      s,
      l = ie.createElement("div"),
      d = ie.createElement("div");
    d.style &&
      ((d.style.cssText = "float:left;opacity:.5"),
      (ue.opacity = "0.5" === d.style.opacity),
      (ue.cssFloat = !!d.style.cssFloat),
      (d.style.backgroundClip = "content-box"),
      (d.cloneNode(!0).style.backgroundClip = ""),
      (ue.clearCloneStyle = "content-box" === d.style.backgroundClip),
      ((l = ie.createElement("div")).style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      (d.innerHTML = ""),
      l.appendChild(d),
      (ue.boxSizing =
        "" === d.style.boxSizing ||
        "" === d.style.MozBoxSizing ||
        "" === d.style.WebkitBoxSizing),
      pe.extend(ue, {
        reliableHiddenOffsets: function () {
          return null == n && t(), a;
        },
        boxSizingReliable: function () {
          return null == n && t(), r;
        },
        pixelMarginRight: function () {
          return null == n && t(), i;
        },
        pixelPosition: function () {
          return null == n && t(), n;
        },
        reliableMarginRight: function () {
          return null == n && t(), o;
        },
        reliableMarginLeft: function () {
          return null == n && t(), s;
        },
      }));
  })();
  var yt,
    gt,
    vt = /^(top|right|bottom|left)$/;
  e.getComputedStyle
    ? ((yt = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      }),
      (gt = function (e, t, n) {
        var i,
          r,
          a,
          o,
          s = e.style;
        return (
          ("" !==
            (o = (n = n || yt(e))
              ? n.getPropertyValue(t) || n[t]
              : undefined) &&
            o !== undefined) ||
            pe.contains(e.ownerDocument, e) ||
            (o = pe.style(e, t)),
          n &&
            !ue.pixelMarginRight() &&
            pt.test(o) &&
            ht.test(t) &&
            ((i = s.width),
            (r = s.minWidth),
            (a = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = o),
            (o = n.width),
            (s.width = i),
            (s.minWidth = r),
            (s.maxWidth = a)),
          o === undefined ? o : o + ""
        );
      }))
    : mt.currentStyle &&
      ((yt = function (e) {
        return e.currentStyle;
      }),
      (gt = function (e, t, n) {
        var i,
          r,
          a,
          o,
          s = e.style;
        return (
          null == (o = (n = n || yt(e)) ? n[t] : undefined) &&
            s &&
            s[t] &&
            (o = s[t]),
          pt.test(o) &&
            !vt.test(t) &&
            ((i = s.left),
            (a = (r = e.runtimeStyle) && r.left) &&
              (r.left = e.currentStyle.left),
            (s.left = "fontSize" === t ? "1em" : o),
            (o = s.pixelLeft + "px"),
            (s.left = i),
            a && (r.left = a)),
          o === undefined ? o : o + "" || "auto"
        );
      }));
  var bt = /alpha\([^)]*\)/i,
    wt = /opacity\s*=\s*([^)]*)/i,
    St = /^(none|table(?!-c[ea]).+)/,
    kt = new RegExp("^(" + ze + ")(.*)$", "i"),
    xt = { position: "absolute", visibility: "hidden", display: "block" },
    Dt = { letterSpacing: "0", fontWeight: "400" },
    Tt = ["Webkit", "O", "Moz", "ms"],
    Ct = ie.createElement("div").style;
  pe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = gt(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: ue.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          a,
          o,
          s = pe.camelCase(t),
          l = e.style;
        if (
          ((t = pe.cssProps[s] || (pe.cssProps[s] = N(s) || s)),
          (o = pe.cssHooks[t] || pe.cssHooks[s]),
          n === undefined)
        )
          return o && "get" in o && (r = o.get(e, !1, i)) !== undefined
            ? r
            : l[t];
        if (
          ("string" === (a = typeof n) &&
            (r = Fe.exec(n)) &&
            r[1] &&
            ((n = h(e, t, r)), (a = "number")),
          null != n &&
            n == n &&
            ("number" === a &&
              (n += (r && r[3]) || (pe.cssNumber[s] ? "" : "px")),
            ue.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            !(o && "set" in o && (n = o.set(e, n, i)) === undefined)))
        )
          try {
            l[t] = n;
          } catch (d) {}
      }
    },
    css: function (e, t, n, i) {
      var r,
        a,
        o,
        s = pe.camelCase(t);
      return (
        (t = pe.cssProps[s] || (pe.cssProps[s] = N(s) || s)),
        (o = pe.cssHooks[t] || pe.cssHooks[s]) &&
          "get" in o &&
          (a = o.get(e, !0, n)),
        a === undefined && (a = gt(e, t, i)),
        "normal" === a && t in Dt && (a = Dt[t]),
        "" === n || n
          ? ((r = parseFloat(a)), !0 === n || isFinite(r) ? r || 0 : a)
          : a
      );
    },
  }),
    pe.each(["height", "width"], function (e, t) {
      pe.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return St.test(pe.css(e, "display")) && 0 === e.offsetWidth
              ? ft(e, xt, function () {
                  return L(e, t, i);
                })
              : L(e, t, i);
        },
        set: function (e, n, i) {
          var r = i && yt(e);
          return I(
            e,
            n,
            i
              ? O(
                  e,
                  t,
                  i,
                  ue.boxSizing &&
                    "border-box" === pe.css(e, "boxSizing", !1, r),
                  r
                )
              : 0
          );
        },
      };
    }),
    ue.opacity ||
      (pe.cssHooks.opacity = {
        get: function (e, t) {
          return wt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            i = e.currentStyle,
            r = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            a = (i && i.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === pe.trim(a.replace(bt, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (i && !i.filter))) ||
              (n.filter = bt.test(a) ? a.replace(bt, r) : a + " " + r);
        },
      }),
    (pe.cssHooks.marginRight = $(ue.reliableMarginRight, function (e, t) {
      if (t) return ft(e, { display: "inline-block" }, gt, [e, "marginRight"]);
    })),
    (pe.cssHooks.marginLeft = $(ue.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(gt(e, "marginLeft")) ||
            (pe.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                ft(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    })),
    pe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (pe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + He[i] + t] = a[i] || a[i - 2] || a[0];
          return r;
        },
      }),
        ht.test(e) || (pe.cssHooks[e + t].set = I);
    }),
    pe.fn.extend({
      css: function (e, t) {
        return Je(
          this,
          function (e, t, n) {
            var i,
              r,
              a = {},
              o = 0;
            if (pe.isArray(t)) {
              for (i = yt(e), r = t.length; o < r; o++)
                a[t[o]] = pe.css(e, t[o], !1, i);
              return a;
            }
            return n !== undefined ? pe.style(e, t, n) : pe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return _(this, !0);
      },
      hide: function () {
        return _(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Re(this) ? pe(this).show() : pe(this).hide();
            });
      },
    }),
    (pe.Tween = P),
    (P.prototype = {
      constructor: P,
      init: function (e, t, n, i, r, a) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || pe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = a || (pe.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = P.propHooks[this.prop];
        return e && e.get ? e.get(this) : P.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = P.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                pe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : P.propHooks._default.set(this),
          this
        );
      },
    }),
    (P.prototype.init.prototype = P.prototype),
    (P.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          pe.fx.step[e.prop]
            ? pe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[pe.cssProps[e.prop]] &&
                !pe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : pe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (P.propHooks.scrollTop = P.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (pe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (pe.fx = P.prototype.init),
    (pe.fx.step = {});
  var Mt,
    At,
    Et = /^(?:toggle|show|hide)$/,
    jt = /queueHooks$/;
  (pe.Animation = pe.extend(W, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return h(n.elem, e, Fe.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      pe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(je));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (W.tweeners[n] = W.tweeners[n] || []),
          W.tweeners[n].unshift(t);
    },
    prefilters: [R],
    prefilter: function (e, t) {
      t ? W.prefilters.unshift(e) : W.prefilters.push(e);
    },
  })),
    (pe.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? pe.extend({}, e)
          : {
              complete: n || (!n && t) || (pe.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !pe.isFunction(t) && t),
            };
      return (
        (i.duration = pe.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in pe.fx.speeds
          ? pe.fx.speeds[i.duration]
          : pe.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          pe.isFunction(i.old) && i.old.call(this),
            i.queue && pe.dequeue(this, i.queue);
        }),
        i
      );
    }),
    pe.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Re)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = pe.isEmptyObject(e),
          a = pe.speed(t, n, i),
          o = function () {
            var t = W(this, pe.extend({}, e), a);
            (r || pe._data(this, "finish")) && t.stop(!0);
          };
        return (
          (o.finish = o),
          r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = undefined)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              a = pe.timers,
              o = pe._data(this);
            if (r) o[r] && o[r].stop && i(o[r]);
            else for (r in o) o[r] && o[r].stop && jt.test(r) && i(o[r]);
            for (r = a.length; r--; )
              a[r].elem !== this ||
                (null != e && a[r].queue !== e) ||
                (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
            (!t && n) || pe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = pe._data(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              a = pe.timers,
              o = i ? i.length : 0;
            for (
              n.finish = !0,
                pe.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = a.length;
              t--;

            )
              a[t].elem === this &&
                a[t].queue === e &&
                (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < o; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    pe.each(["toggle", "show", "hide"], function (e, t) {
      var n = pe.fn[t];
      pe.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(F(t, !0), e, i, r);
      };
    }),
    pe.each(
      {
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        pe.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (pe.timers = []),
    (pe.fx.tick = function () {
      var e,
        t = pe.timers,
        n = 0;
      for (Mt = pe.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || pe.fx.stop(), (Mt = undefined);
    }),
    (pe.fx.timer = function (e) {
      pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
    }),
    (pe.fx.interval = 13),
    (pe.fx.start = function () {
      At || (At = e.setInterval(pe.fx.tick, pe.fx.interval));
    }),
    (pe.fx.stop = function () {
      e.clearInterval(At), (At = null);
    }),
    (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (pe.fn.delay = function (t, n) {
      return (
        (t = (pe.fx && pe.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e,
        t = ie.createElement("input"),
        n = ie.createElement("div"),
        i = ie.createElement("select"),
        r = i.appendChild(ie.createElement("option"));
      (n = ie.createElement("div")).setAttribute("className", "t"),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = n.getElementsByTagName("a")[0]),
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        ((e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
        (ue.getSetAttribute = "t" !== n.className),
        (ue.style = /top/.test(e.getAttribute("style"))),
        (ue.hrefNormalized = "/a" === e.getAttribute("href")),
        (ue.checkOn = !!t.value),
        (ue.optSelected = r.selected),
        (ue.enctype = !!ie.createElement("form").enctype),
        (i.disabled = !0),
        (ue.optDisabled = !r.disabled),
        (t = ie.createElement("input")).setAttribute("value", ""),
        (ue.input = "" === t.getAttribute("value")),
        (t.value = "t"),
        t.setAttribute("type", "radio"),
        (ue.radioValue = "t" === t.value);
    })();
  var $t = /\r/g,
    Nt = /[\x20\t\r\n\f]+/g;
  pe.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = pe.isFunction(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, pe(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : pe.isArray(r) &&
                  (r = pe.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                pe.valHooks[this.type] ||
                pe.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                t.set(this, r, "value") !== undefined) ||
                (this.value = r));
          }))
        : r
        ? (t = pe.valHooks[r.type] || pe.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          (n = t.get(r, "value")) !== undefined
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace($t, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    pe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = pe.find.attr(e, "value");
            return null != t ? t : pe.trim(pe.text(e)).replace(Nt, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                i = e.options,
                r = e.selectedIndex,
                a = "select-one" === e.type || r < 0,
                o = a ? null : [],
                s = a ? r + 1 : i.length,
                l = r < 0 ? s : a ? r : 0;
              l < s;
              l++
            )
              if (
                ((n = i[l]).selected || l === r) &&
                (ue.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !pe.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = pe(n).val()), a)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, a = pe.makeArray(t), o = r.length;
              o--;

            )
              if (((i = r[o]), pe.inArray(pe.valHooks.option.get(i), a) > -1))
                try {
                  i.selected = n = !0;
                } catch (s) {
                  i.scrollHeight;
                }
              else i.selected = !1;
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    pe.each(["radio", "checkbox"], function () {
      (pe.valHooks[this] = {
        set: function (e, t) {
          if (pe.isArray(t))
            return (e.checked = pe.inArray(pe(e).val(), t) > -1);
        },
      }),
        ue.checkOn ||
          (pe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var _t,
    It,
    Ot = pe.expr.attrHandle,
    Lt = /^(?:checked|selected)$/i,
    Pt = ue.getSetAttribute,
    zt = ue.input;
  pe.fn.extend({
    attr: function (e, t) {
      return Je(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        pe.removeAttr(this, e);
      });
    },
  }),
    pe.extend({
      attr: function (e, t, n) {
        var i,
          r,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return "undefined" == typeof e.getAttribute
            ? pe.prop(e, t, n)
            : ((1 === a && pe.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? It : _t))),
              n !== undefined
                ? null === n
                  ? void pe.removeAttr(e, t)
                  : r && "set" in r && (i = r.set(e, n, t)) !== undefined
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = pe.find.attr(e, t))
                ? undefined
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ue.radioValue && "radio" === t && pe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i,
          r = 0,
          a = t && t.match(je);
        if (a && 1 === e.nodeType)
          for (; (n = a[r++]); )
            (i = pe.propFix[n] || n),
              pe.expr.match.bool.test(n)
                ? (zt && Pt) || !Lt.test(n)
                  ? (e[i] = !1)
                  : (e[pe.camelCase("default-" + n)] = e[i] = !1)
                : pe.attr(e, n, ""),
              e.removeAttribute(Pt ? n : i);
      },
    }),
    (It = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? pe.removeAttr(e, n)
            : (zt && Pt) || !Lt.test(n)
            ? e.setAttribute((!Pt && pe.propFix[n]) || n, n)
            : (e[pe.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Ot[t] || pe.find.attr;
      (zt && Pt) || !Lt.test(t)
        ? (Ot[t] = function (e, t, i) {
            var r, a;
            return (
              i ||
                ((a = Ot[t]),
                (Ot[t] = r),
                (r = null != n(e, t, i) ? t.toLowerCase() : null),
                (Ot[t] = a)),
              r
            );
          })
        : (Ot[t] = function (e, t, n) {
            if (!n)
              return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null;
          });
    }),
    (zt && Pt) ||
      (pe.attrHooks.value = {
        set: function (e, t, n) {
          if (!pe.nodeName(e, "input")) return _t && _t.set(e, t, n);
          e.defaultValue = t;
        },
      }),
    Pt ||
      ((_t = {
        set: function (e, t, n) {
          var i = e.getAttributeNode(n);
          if (
            (i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
            (i.value = t += ""),
            "value" === n || t === e.getAttribute(n))
          )
            return t;
        },
      }),
      (Ot.id =
        Ot.name =
        Ot.coords =
          function (e, t, n) {
            var i;
            if (!n)
              return (i = e.getAttributeNode(t)) && "" !== i.value
                ? i.value
                : null;
          }),
      (pe.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: _t.set,
      }),
      (pe.attrHooks.contenteditable = {
        set: function (e, t, n) {
          _t.set(e, "" !== t && t, n);
        },
      }),
      pe.each(["width", "height"], function (e, t) {
        pe.attrHooks[t] = {
          set: function (e, n) {
            if ("" === n) return e.setAttribute(t, "auto"), n;
          },
        };
      })),
    ue.style ||
      (pe.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || undefined;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var Ft = /^(?:input|select|textarea|button|object)$/i,
    Ht = /^(?:a|area)$/i;
  pe.fn.extend({
    prop: function (e, t) {
      return Je(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = pe.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = undefined), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    pe.extend({
      prop: function (e, t, n) {
        var i,
          r,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return (
            (1 === a && pe.isXMLDoc(e)) ||
              ((t = pe.propFix[t] || t), (r = pe.propHooks[t])),
            n !== undefined
              ? r && "set" in r && (i = r.set(e, n, t)) !== undefined
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = pe.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Ft.test(e.nodeName) || (Ht.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ue.hrefNormalized ||
      pe.each(["href", "src"], function (e, t) {
        pe.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    ue.optSelected ||
      (pe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    pe.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        pe.propFix[this.toLowerCase()] = this;
      }
    ),
    ue.enctype || (pe.propFix.enctype = "encoding");
  var Rt = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        r,
        a,
        o,
        s,
        l = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).addClass(e.call(this, t, U(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(je) || []; (n = this[l++]); )
          if (
            ((r = U(n)),
            (i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")))
          ) {
            for (o = 0; (a = t[o++]); )
              i.indexOf(" " + a + " ") < 0 && (i += a + " ");
            r !== (s = pe.trim(i)) && pe.attr(n, "class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        r,
        a,
        o,
        s,
        l = 0;
      if (pe.isFunction(e))
        return this.each(function (t) {
          pe(this).removeClass(e.call(this, t, U(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(je) || []; (n = this[l++]); )
          if (
            ((r = U(n)),
            (i = 1 === n.nodeType && (" " + r + " ").replace(Rt, " ")))
          ) {
            for (o = 0; (a = t[o++]); )
              for (; i.indexOf(" " + a + " ") > -1; )
                i = i.replace(" " + a + " ", " ");
            r !== (s = pe.trim(i)) && pe.attr(n, "class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : pe.isFunction(e)
        ? this.each(function (n) {
            pe(this).toggleClass(e.call(this, n, U(this), t), t);
          })
        : this.each(function () {
            var t, i, r, a;
            if ("string" === n)
              for (i = 0, r = pe(this), a = e.match(je) || []; (t = a[i++]); )
                r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
            else
              (e !== undefined && "boolean" !== n) ||
                ((t = U(this)) && pe._data(this, "__className__", t),
                pe.attr(
                  this,
                  "class",
                  t || !1 === e ? "" : pe._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        i = 0;
      for (t = " " + e + " "; (n = this[i++]); )
        if (
          1 === n.nodeType &&
          (" " + U(n) + " ").replace(Rt, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  }),
    pe.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        pe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    pe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var Jt = e.location,
    Wt = pe.now(),
    Ut = /\?/,
    Bt =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (pe.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      i = null,
      r = pe.trim(t + "");
    return r &&
      !pe.trim(
        r.replace(Bt, function (e, t, r, a) {
          return (
            n && t && (i = 0), 0 === i ? e : ((n = r || t), (i += !a - !r), "")
          );
        })
      )
      ? Function("return " + r)()
      : pe.error("Invalid JSON: " + t);
  }),
    (pe.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? (n = new e.DOMParser().parseFromString(t, "text/xml"))
          : (((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            n.loadXML(t));
      } catch (i) {
        n = undefined;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          pe.error("Invalid XML: " + t),
        n
      );
    });
  var qt = /#.*$/,
    Vt = /([?&])_=[^&]*/,
    Qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Yt = /^(?:GET|HEAD)$/,
    Kt = /^\/\//,
    Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Zt = {},
    en = {},
    tn = "*/".concat("*"),
    nn = Jt.href,
    rn = Xt.exec(nn.toLowerCase()) || [];
  pe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: nn,
      type: "GET",
      isLocal: Gt.test(rn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": pe.parseJSON,
        "text xml": pe.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e);
    },
    ajaxPrefilter: B(Zt),
    ajaxTransport: B(en),
    ajax: function (t, n) {
      function i(t, n, i, r) {
        var a,
          u,
          v,
          b,
          S,
          x = n;
        2 !== w &&
          ((w = 2),
          l && e.clearTimeout(l),
          (c = undefined),
          (s = r || ""),
          (k.readyState = t > 0 ? 4 : 0),
          (a = (t >= 200 && t < 300) || 304 === t),
          i && (b = Q(h, k, i)),
          (b = G(h, b, k, a)),
          a
            ? (h.ifModified &&
                ((S = k.getResponseHeader("Last-Modified")) &&
                  (pe.lastModified[o] = S),
                (S = k.getResponseHeader("etag")) && (pe.etag[o] = S)),
              204 === t || "HEAD" === h.type
                ? (x = "nocontent")
                : 304 === t
                ? (x = "notmodified")
                : ((x = b.state), (u = b.data), (a = !(v = b.error))))
            : ((v = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
          (k.status = t),
          (k.statusText = (n || x) + ""),
          a ? m.resolveWith(p, [u, x, k]) : m.rejectWith(p, [k, x, v]),
          k.statusCode(g),
          (g = undefined),
          d && f.trigger(a ? "ajaxSuccess" : "ajaxError", [k, h, a ? u : v]),
          y.fireWith(p, [k, x]),
          d &&
            (f.trigger("ajaxComplete", [k, h]),
            --pe.active || pe.event.trigger("ajaxStop")));
      }
      "object" == typeof t && ((n = t), (t = undefined)), (n = n || {});
      var r,
        a,
        o,
        s,
        l,
        d,
        c,
        u,
        h = pe.ajaxSetup({}, n),
        p = h.context || h,
        f = h.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
        m = pe.Deferred(),
        y = pe.Callbacks("once memory"),
        g = h.statusCode || {},
        v = {},
        b = {},
        w = 0,
        S = "canceled",
        k = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === w) {
              if (!u)
                for (u = {}; (t = Qt.exec(s)); ) u[t[1].toLowerCase()] = t[2];
              t = u[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === w ? s : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return w || ((e = b[n] = b[n] || e), (v[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return w || (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (w < 2) for (t in e) g[t] = [g[t], e[t]];
              else k.always(e[k.status]);
            return this;
          },
          abort: function (e) {
            var t = e || S;
            return c && c.abort(t), i(0, t), this;
          },
        };
      if (
        ((m.promise(k).complete = y.add),
        (k.success = k.done),
        (k.error = k.fail),
        (h.url = ((t || h.url || nn) + "")
          .replace(qt, "")
          .replace(Kt, rn[1] + "//")),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = pe
          .trim(h.dataType || "*")
          .toLowerCase()
          .match(je) || [""]),
        null == h.crossDomain &&
          ((r = Xt.exec(h.url.toLowerCase())),
          (h.crossDomain = !(
            !r ||
            (r[1] === rn[1] &&
              r[2] === rn[2] &&
              (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                (rn[3] || ("http:" === rn[1] ? "80" : "443")))
          ))),
        h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = pe.param(h.data, h.traditional)),
        q(Zt, h, n, k),
        2 === w)
      )
        return k;
      for (a in ((d = pe.event && h.global) &&
        0 == pe.active++ &&
        pe.event.trigger("ajaxStart"),
      (h.type = h.type.toUpperCase()),
      (h.hasContent = !Yt.test(h.type)),
      (o = h.url),
      h.hasContent ||
        (h.data &&
          ((o = h.url += (Ut.test(o) ? "&" : "?") + h.data), delete h.data),
        !1 === h.cache &&
          (h.url = Vt.test(o)
            ? o.replace(Vt, "$1_=" + Wt++)
            : o + (Ut.test(o) ? "&" : "?") + "_=" + Wt++)),
      h.ifModified &&
        (pe.lastModified[o] &&
          k.setRequestHeader("If-Modified-Since", pe.lastModified[o]),
        pe.etag[o] && k.setRequestHeader("If-None-Match", pe.etag[o])),
      ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
        k.setRequestHeader("Content-Type", h.contentType),
      k.setRequestHeader(
        "Accept",
        h.dataTypes[0] && h.accepts[h.dataTypes[0]]
          ? h.accepts[h.dataTypes[0]] +
              ("*" !== h.dataTypes[0] ? ", " + tn + "; q=0.01" : "")
          : h.accepts["*"]
      ),
      h.headers))
        k.setRequestHeader(a, h.headers[a]);
      if (h.beforeSend && (!1 === h.beforeSend.call(p, k, h) || 2 === w))
        return k.abort();
      for (a in ((S = "abort"), { success: 1, error: 1, complete: 1 }))
        k[a](h[a]);
      if ((c = q(en, h, n, k))) {
        if (((k.readyState = 1), d && f.trigger("ajaxSend", [k, h]), 2 === w))
          return k;
        h.async &&
          h.timeout > 0 &&
          (l = e.setTimeout(function () {
            k.abort("timeout");
          }, h.timeout));
        try {
          (w = 1), c.send(v, i);
        } catch (x) {
          if (!(w < 2)) throw x;
          i(-1, x);
        }
      } else i(-1, "No Transport");
      return k;
    },
    getJSON: function (e, t, n) {
      return pe.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return pe.get(e, undefined, t, "script");
    },
  }),
    pe.each(["get", "post"], function (e, t) {
      pe[t] = function (e, n, i, r) {
        return (
          pe.isFunction(n) && ((r = r || i), (i = n), (n = undefined)),
          pe.ajax(
            pe.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              pe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (pe._evalUrl = function (e) {
      return pe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    pe.fn.extend({
      wrapAll: function (e) {
        if (pe.isFunction(e))
          return this.each(function (t) {
            pe(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return pe.isFunction(e)
          ? this.each(function (t) {
              pe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = pe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = pe.isFunction(e);
        return this.each(function (n) {
          pe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (pe.expr.filters.hidden = function (e) {
      return ue.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : K(e);
    }),
    (pe.expr.filters.visible = function (e) {
      return !pe.expr.filters.hidden(e);
    });
  var an = /%20/g,
    on = /\[\]$/,
    sn = /\r?\n/g,
    ln = /^(?:submit|button|image|reset|file)$/i,
    dn = /^(?:input|select|textarea|keygen)/i;
  (pe.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        (t = pe.isFunction(t) ? t() : null == t ? "" : t),
          (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
      pe.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
    )
      pe.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) X(n, e[n], t, r);
    return i.join("&").replace(an, "+");
  }),
    pe.fn.extend({
      serialize: function () {
        return pe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = pe.prop(this, "elements");
          return e ? pe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !pe(this).is(":disabled") &&
              dn.test(this.nodeName) &&
              !ln.test(e) &&
              (this.checked || !We.test(e))
            );
          })
          .map(function (e, t) {
            var n = pe(this).val();
            return null == n
              ? null
              : pe.isArray(n)
              ? pe.map(n, function (e) {
                  return { name: t.name, value: e.replace(sn, "\r\n") };
                })
              : { name: t.name, value: n.replace(sn, "\r\n") };
          })
          .get();
      },
    }),
    (pe.ajaxSettings.xhr =
      e.ActiveXObject !== undefined
        ? function () {
            return this.isLocal
              ? ee()
              : ie.documentMode > 8
              ? Z()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  Z()) ||
                ee();
          }
        : Z);
  var cn = 0,
    un = {},
    hn = pe.ajaxSettings.xhr();
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in un) un[e](undefined, !0);
    }),
    (ue.cors = !!hn && "withCredentials" in hn),
    (hn = ue.ajax = !!hn) &&
      pe.ajaxTransport(function (t) {
        var n;
        if (!t.crossDomain || ue.cors)
          return {
            send: function (i, r) {
              var a,
                o = t.xhr(),
                s = ++cn;
              if (
                (o.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (a in t.xhrFields) o[a] = t.xhrFields[a];
              for (a in (t.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest"),
              i))
                i[a] !== undefined && o.setRequestHeader(a, i[a] + "");
              o.send((t.hasContent && t.data) || null),
                (n = function (e, i) {
                  var a, l, d;
                  if (n && (i || 4 === o.readyState))
                    if (
                      (delete un[s],
                      (n = undefined),
                      (o.onreadystatechange = pe.noop),
                      i)
                    )
                      4 !== o.readyState && o.abort();
                    else {
                      (d = {}),
                        (a = o.status),
                        "string" == typeof o.responseText &&
                          (d.text = o.responseText);
                      try {
                        l = o.statusText;
                      } catch (c) {
                        l = "";
                      }
                      a || !t.isLocal || t.crossDomain
                        ? 1223 === a && (a = 204)
                        : (a = d.text ? 200 : 404);
                    }
                  d && r(a, l, d, o.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === o.readyState
                    ? e.setTimeout(n)
                    : (o.onreadystatechange = un[s] = n)
                  : n();
            },
            abort: function () {
              n && n(undefined, !0);
            },
          };
      }),
    pe.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return pe.globalEval(e), e;
        },
      },
    }),
    pe.ajaxPrefilter("script", function (e) {
      e.cache === undefined && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    pe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = ie.head || pe("head")[0] || ie.documentElement;
        return {
          send: function (i, r) {
            ((t = ie.createElement("script")).async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || r(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(undefined, !0);
          },
        };
      }
    });
  var pn = [],
    fn = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = pn.pop() || pe.expando + "_" + Wt++;
      return (this[e] = !0), e;
    },
  }),
    pe.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        a,
        o,
        s =
          !1 !== t.jsonp &&
          (fn.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              fn.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            pe.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(fn, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (Ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return o || pe.error(r + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (a = e[r]),
          (e[r] = function () {
            o = arguments;
          }),
          i.always(function () {
            a === undefined ? pe(e).removeProp(r) : (e[r] = a),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), pn.push(r)),
              o && pe.isFunction(a) && a(o[0]),
              (o = a = undefined);
          }),
          "script"
        );
    }),
    (pe.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || ie);
      var i = ke.exec(e),
        r = !n && [];
      return i
        ? [t.createElement(i[1])]
        : ((i = g([e], t, r)),
          r && r.length && pe(r).remove(),
          pe.merge([], i.childNodes));
    });
  var mn = pe.fn.load;
  (pe.fn.load = function (e, t, n) {
    if ("string" != typeof e && mn) return mn.apply(this, arguments);
    var i,
      r,
      a,
      o = this,
      s = e.indexOf(" ");
    return (
      s > -1 && ((i = pe.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      pe.isFunction(t)
        ? ((n = t), (t = undefined))
        : t && "object" == typeof t && (r = "POST"),
      o.length > 0 &&
        pe
          .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
          .done(function (e) {
            (a = arguments),
              o.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e);
          })
          .always(
            n &&
              function (e, t) {
                o.each(function () {
                  n.apply(this, a || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    pe.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        pe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (pe.expr.filters.animated = function (e) {
      return pe.grep(pe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (pe.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          a,
          o,
          s,
          l,
          d = pe.css(e, "position"),
          c = pe(e),
          u = {};
        "static" === d && (e.style.position = "relative"),
          (s = c.offset()),
          (a = pe.css(e, "top")),
          (l = pe.css(e, "left")),
          ("absolute" === d || "fixed" === d) && pe.inArray("auto", [a, l]) > -1
            ? ((o = (i = c.position()).top), (r = i.left))
            : ((o = parseFloat(a) || 0), (r = parseFloat(l) || 0)),
          pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
          null != t.top && (u.top = t.top - s.top + o),
          null != t.left && (u.left = t.left - s.left + r),
          "using" in t ? t.using.call(e, u) : c.css(u);
      },
    }),
    pe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return e === undefined
            ? this
            : this.each(function (t) {
                pe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = { top: 0, left: 0 },
          r = this[0],
          a = r && r.ownerDocument;
        return a
          ? ((t = a.documentElement),
            pe.contains(t, r)
              ? ("undefined" != typeof r.getBoundingClientRect &&
                  (i = r.getBoundingClientRect()),
                (n = te(a)),
                {
                  top:
                    i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    i.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : i)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            i = this[0];
          return (
            "fixed" === pe.css(i, "position")
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                pe.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += pe.css(e[0], "borderTopWidth", !0)),
                (n.left += pe.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - pe.css(i, "marginTop", !0),
              left: t.left - n.left - pe.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");

          )
            e = e.offsetParent;
          return e || mt;
        });
      },
    }),
    pe.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function (i) {
          return Je(
            this,
            function (e, i, r) {
              var a = te(e);
              if (r === undefined)
                return a
                  ? t in a
                    ? a[t]
                    : a.document.documentElement[i]
                  : e[i];
              a
                ? a.scrollTo(
                    n ? pe(a).scrollLeft() : r,
                    n ? r : pe(a).scrollTop()
                  )
                : (e[i] = r);
            },
            e,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    pe.each(["top", "left"], function (e, t) {
      pe.cssHooks[t] = $(ue.pixelPosition, function (e, n) {
        if (n)
          return (n = gt(e, t)), pt.test(n) ? pe(e).position()[t] + "px" : n;
      });
    }),
    pe.each({ Height: "height", Width: "width" }, function (e, t) {
      pe.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          pe.fn[i] = function (i, r) {
            var a = arguments.length && (n || "boolean" != typeof i),
              o = n || (!0 === i || !0 === r ? "margin" : "border");
            return Je(
              this,
              function (t, n, i) {
                var r;
                return pe.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      r["scroll" + e],
                      t.body["offset" + e],
                      r["offset" + e],
                      r["client" + e]
                    ))
                  : i === undefined
                  ? pe.css(t, n, o)
                  : pe.style(t, n, i, o);
              },
              t,
              a ? i : undefined,
              a,
              null
            );
          };
        }
      );
    }),
    pe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (pe.fn.size = function () {
      return this.length;
    }),
    (pe.fn.andSelf = pe.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return pe;
      });
  var yn = e.jQuery,
    gn = e.$;
  return (
    (pe.noConflict = function (t) {
      return (
        e.$ === pe && (e.$ = gn), t && e.jQuery === pe && (e.jQuery = yn), pe
      );
    }),
    t || (e.jQuery = e.$ = pe),
    pe
  );
}),
  /*!
   * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
   *
   * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
   */
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(jQuery);
  })(function (e, t) {
    function n() {
      return new Date(Date.UTC.apply(Date, arguments));
    }
    function i() {
      var e = new Date();
      return n(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function r(e, t) {
      return (
        e.getUTCFullYear() === t.getUTCFullYear() &&
        e.getUTCMonth() === t.getUTCMonth() &&
        e.getUTCDate() === t.getUTCDate()
      );
    }
    function a(n, i) {
      return function () {
        return (
          i !== t && e.fn.datepicker.deprecated(i),
          this[n].apply(this, arguments)
        );
      };
    }
    function o(e) {
      return e && !isNaN(e.getTime());
    }
    function s(t, n) {
      function i(e, t) {
        return t.toLowerCase();
      }
      var r = e(t).data(),
        a = {},
        o = new RegExp("^" + n.toLowerCase() + "([A-Z])");
      for (var s in ((n = new RegExp("^" + n.toLowerCase())), r))
        n.test(s) && (a[s.replace(o, i)] = r[s]);
      return a;
    }
    function l(t) {
      var n = {};
      if (g[t] || ((t = t.split("-")[0]), g[t])) {
        var i = g[t];
        return (
          e.each(y, function (e, t) {
            t in i && (n[t] = i[t]);
          }),
          n
        );
      }
    }
    var d,
      c =
        ((d = {
          get: function (e) {
            return this.slice(e)[0];
          },
          contains: function (e) {
            for (var t = e && e.valueOf(), n = 0, i = this.length; n < i; n++)
              if (0 <= this[n].valueOf() - t && this[n].valueOf() - t < 864e5)
                return n;
            return -1;
          },
          remove: function (e) {
            this.splice(e, 1);
          },
          replace: function (t) {
            t &&
              (e.isArray(t) || (t = [t]),
              this.clear(),
              this.push.apply(this, t));
          },
          clear: function () {
            this.length = 0;
          },
          copy: function () {
            var e = new c();
            return e.replace(this), e;
          },
        }),
        function () {
          var t = [];
          return t.push.apply(t, arguments), e.extend(t, d), t;
        }),
      u = function (t, n) {
        e.data(t, "datepicker", this),
          (this._events = []),
          (this._secondaryEvents = []),
          this._process_options(n),
          (this.dates = new c()),
          (this.viewDate = this.o.defaultViewDate),
          (this.focusDate = null),
          (this.element = e(t)),
          (this.isInput = this.element.is("input")),
          (this.inputField = this.isInput
            ? this.element
            : this.element.find("input")),
          (this.component =
            !!this.element.hasClass("date") &&
            this.element.find(
              ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
            )),
          this.component &&
            0 === this.component.length &&
            (this.component = !1),
          (this.isInline = !this.component && this.element.is("div")),
          (this.picker = e(v.template)),
          this._check_template(this.o.templates.leftArrow) &&
            this.picker.find(".prev").html(this.o.templates.leftArrow),
          this._check_template(this.o.templates.rightArrow) &&
            this.picker.find(".next").html(this.o.templates.rightArrow),
          this._buildEvents(),
          this._attachEvents(),
          this.isInline
            ? this.picker.addClass("datepicker-inline").appendTo(this.element)
            : this.picker.addClass("datepicker-dropdown dropdown-menu"),
          this.o.rtl && this.picker.addClass("datepicker-rtl"),
          this.o.calendarWeeks &&
            this.picker
              .find(
                ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
              )
              .attr("colspan", function (e, t) {
                return Number(t) + 1;
              }),
          this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled,
          }),
          (this._allow_update = !1),
          this.setViewMode(this.o.startView),
          (this._allow_update = !0),
          this.fillDow(),
          this.fillMonths(),
          this.update(),
          this.isInline && this.show();
      };
    u.prototype = {
      constructor: u,
      _resolveViewName: function (t) {
        return (
          e.each(v.viewModes, function (n, i) {
            if (t === n || -1 !== e.inArray(t, i.names)) return (t = n), !1;
          }),
          t
        );
      },
      _resolveDaysOfWeek: function (t) {
        return e.isArray(t) || (t = t.split(/[,\s]*/)), e.map(t, Number);
      },
      _check_template: function (n) {
        try {
          return (
            n !== t &&
            "" !== n &&
            ((n.match(/[<>]/g) || []).length <= 0 || e(n).length > 0)
          );
        } catch (i) {
          return !1;
        }
      },
      _process_options: function (t) {
        this._o = e.extend({}, this._o, t);
        var r = (this.o = e.extend({}, this._o)),
          a = r.language;
        g[a] || ((a = a.split("-")[0]), g[a] || (a = m.language)),
          (r.language = a),
          (r.startView = this._resolveViewName(r.startView)),
          (r.minViewMode = this._resolveViewName(r.minViewMode)),
          (r.maxViewMode = this._resolveViewName(r.maxViewMode)),
          (r.startView = Math.max(
            this.o.minViewMode,
            Math.min(this.o.maxViewMode, r.startView)
          )),
          !0 !== r.multidate &&
            ((r.multidate = Number(r.multidate) || !1),
            !1 !== r.multidate && (r.multidate = Math.max(0, r.multidate))),
          (r.multidateSeparator = String(r.multidateSeparator)),
          (r.weekStart %= 7),
          (r.weekEnd = (r.weekStart + 6) % 7);
        var o = v.parseFormat(r.format);
        r.startDate !== -Infinity &&
          (r.startDate
            ? r.startDate instanceof Date
              ? (r.startDate = this._local_to_utc(this._zero_time(r.startDate)))
              : (r.startDate = v.parseDate(
                  r.startDate,
                  o,
                  r.language,
                  r.assumeNearbyYear
                ))
            : (r.startDate = -Infinity)),
          r.endDate !== Infinity &&
            (r.endDate
              ? r.endDate instanceof Date
                ? (r.endDate = this._local_to_utc(this._zero_time(r.endDate)))
                : (r.endDate = v.parseDate(
                    r.endDate,
                    o,
                    r.language,
                    r.assumeNearbyYear
                  ))
              : (r.endDate = Infinity)),
          (r.daysOfWeekDisabled = this._resolveDaysOfWeek(
            r.daysOfWeekDisabled || []
          )),
          (r.daysOfWeekHighlighted = this._resolveDaysOfWeek(
            r.daysOfWeekHighlighted || []
          )),
          (r.datesDisabled = r.datesDisabled || []),
          e.isArray(r.datesDisabled) ||
            (r.datesDisabled = r.datesDisabled.split(",")),
          (r.datesDisabled = e.map(r.datesDisabled, function (e) {
            return v.parseDate(e, o, r.language, r.assumeNearbyYear);
          }));
        var s = String(r.orientation).toLowerCase().split(/\s+/g),
          l = r.orientation.toLowerCase();
        if (
          ((s = e.grep(s, function (e) {
            return /^auto|left|right|top|bottom$/.test(e);
          })),
          (r.orientation = { x: "auto", y: "auto" }),
          l && "auto" !== l)
        )
          if (1 === s.length)
            switch (s[0]) {
              case "top":
              case "bottom":
                r.orientation.y = s[0];
                break;
              case "left":
              case "right":
                r.orientation.x = s[0];
            }
          else
            (l = e.grep(s, function (e) {
              return /^left|right$/.test(e);
            })),
              (r.orientation.x = l[0] || "auto"),
              (l = e.grep(s, function (e) {
                return /^top|bottom$/.test(e);
              })),
              (r.orientation.y = l[0] || "auto");
        else;
        if (
          r.defaultViewDate instanceof Date ||
          "string" == typeof r.defaultViewDate
        )
          r.defaultViewDate = v.parseDate(
            r.defaultViewDate,
            o,
            r.language,
            r.assumeNearbyYear
          );
        else if (r.defaultViewDate) {
          var d = r.defaultViewDate.year || new Date().getFullYear(),
            c = r.defaultViewDate.month || 0,
            u = r.defaultViewDate.day || 1;
          r.defaultViewDate = n(d, c, u);
        } else r.defaultViewDate = i();
      },
      _applyEvents: function (e) {
        for (var n, i, r, a = 0; a < e.length; a++)
          (n = e[a][0]),
            2 === e[a].length
              ? ((i = t), (r = e[a][1]))
              : 3 === e[a].length && ((i = e[a][1]), (r = e[a][2])),
            n.on(r, i);
      },
      _unapplyEvents: function (e) {
        for (var n, i, r, a = 0; a < e.length; a++)
          (n = e[a][0]),
            2 === e[a].length
              ? ((r = t), (i = e[a][1]))
              : 3 === e[a].length && ((r = e[a][1]), (i = e[a][2])),
            n.off(i, r);
      },
      _buildEvents: function () {
        var t = {
          keyup: e.proxy(function (t) {
            -1 === e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
              this.update();
          }, this),
          keydown: e.proxy(this.keydown, this),
          paste: e.proxy(this.paste, this),
        };
        !0 === this.o.showOnFocus && (t.focus = e.proxy(this.show, this)),
          this.isInput
            ? (this._events = [[this.element, t]])
            : this.component && this.inputField.length
            ? (this._events = [
                [this.inputField, t],
                [this.component, { click: e.proxy(this.show, this) }],
              ])
            : (this._events = [
                [
                  this.element,
                  {
                    click: e.proxy(this.show, this),
                    keydown: e.proxy(this.keydown, this),
                  },
                ],
              ]),
          this._events.push(
            [
              this.element,
              "*",
              {
                blur: e.proxy(function (e) {
                  this._focused_from = e.target;
                }, this),
              },
            ],
            [
              this.element,
              {
                blur: e.proxy(function (e) {
                  this._focused_from = e.target;
                }, this),
              },
            ]
          ),
          this.o.immediateUpdates &&
            this._events.push([
              this.element,
              {
                "changeYear changeMonth": e.proxy(function (e) {
                  this.update(e.date);
                }, this),
              },
            ]),
          (this._secondaryEvents = [
            [this.picker, { click: e.proxy(this.click, this) }],
            [
              this.picker,
              ".prev, .next",
              { click: e.proxy(this.navArrowsClick, this) },
            ],
            [
              this.picker,
              ".day:not(.disabled)",
              { click: e.proxy(this.dayCellClick, this) },
            ],
            [e(window), { resize: e.proxy(this.place, this) }],
            [
              e(document),
              {
                "mousedown touchstart": e.proxy(function (e) {
                  this.element.is(e.target) ||
                    this.element.find(e.target).length ||
                    this.picker.is(e.target) ||
                    this.picker.find(e.target).length ||
                    this.isInline ||
                    this.hide();
                }, this),
              },
            ],
          ]);
      },
      _attachEvents: function () {
        this._detachEvents(), this._applyEvents(this._events);
      },
      _detachEvents: function () {
        this._unapplyEvents(this._events);
      },
      _attachSecondaryEvents: function () {
        this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
      },
      _detachSecondaryEvents: function () {
        this._unapplyEvents(this._secondaryEvents);
      },
      _trigger: function (t, n) {
        var i = n || this.dates.get(-1),
          r = this._utc_to_local(i);
        this.element.trigger({
          type: t,
          date: r,
          viewMode: this.viewMode,
          dates: e.map(this.dates, this._utc_to_local),
          format: e.proxy(function (e, t) {
            0 === arguments.length
              ? ((e = this.dates.length - 1), (t = this.o.format))
              : "string" == typeof e && ((t = e), (e = this.dates.length - 1)),
              (t = t || this.o.format);
            var n = this.dates.get(e);
            return v.formatDate(n, t, this.o.language);
          }, this),
        });
      },
      show: function () {
        if (
          !(
            this.inputField.is(":disabled") ||
            (this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)
          )
        )
          return (
            this.isInline || this.picker.appendTo(this.o.container),
            this.place(),
            this.picker.show(),
            this._attachSecondaryEvents(),
            this._trigger("show"),
            (window.navigator.msMaxTouchPoints || "ontouchstart" in document) &&
              this.o.disableTouchKeyboard &&
              e(this.element).blur(),
            this
          );
      },
      hide: function () {
        return this.isInline || !this.picker.is(":visible")
          ? this
          : ((this.focusDate = null),
            this.picker.hide().detach(),
            this._detachSecondaryEvents(),
            this.setViewMode(this.o.startView),
            this.o.forceParse && this.inputField.val() && this.setValue(),
            this._trigger("hide"),
            this);
      },
      destroy: function () {
        return (
          this.hide(),
          this._detachEvents(),
          this._detachSecondaryEvents(),
          this.picker.remove(),
          delete this.element.data().datepicker,
          this.isInput || delete this.element.data().date,
          this
        );
      },
      paste: function (t) {
        var n;
        if (
          t.originalEvent.clipboardData &&
          t.originalEvent.clipboardData.types &&
          -1 !== e.inArray("text/plain", t.originalEvent.clipboardData.types)
        )
          n = t.originalEvent.clipboardData.getData("text/plain");
        else {
          if (!window.clipboardData) return;
          n = window.clipboardData.getData("Text");
        }
        this.setDate(n), this.update(), t.preventDefault();
      },
      _utc_to_local: function (e) {
        if (!e) return e;
        var t = new Date(e.getTime() + 6e4 * e.getTimezoneOffset());
        return (
          t.getTimezoneOffset() !== e.getTimezoneOffset() &&
            (t = new Date(e.getTime() + 6e4 * t.getTimezoneOffset())),
          t
        );
      },
      _local_to_utc: function (e) {
        return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset());
      },
      _zero_time: function (e) {
        return e && new Date(e.getFullYear(), e.getMonth(), e.getDate());
      },
      _zero_utc_time: function (e) {
        return e && n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
      },
      getDates: function () {
        return e.map(this.dates, this._utc_to_local);
      },
      getUTCDates: function () {
        return e.map(this.dates, function (e) {
          return new Date(e);
        });
      },
      getDate: function () {
        return this._utc_to_local(this.getUTCDate());
      },
      getUTCDate: function () {
        var e = this.dates.get(-1);
        return e !== t ? new Date(e) : null;
      },
      clearDates: function () {
        this.inputField.val(""),
          this.update(),
          this._trigger("changeDate"),
          this.o.autoclose && this.hide();
      },
      setDates: function () {
        var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
        return (
          this.update.apply(this, t),
          this._trigger("changeDate"),
          this.setValue(),
          this
        );
      },
      setUTCDates: function () {
        var t = e.isArray(arguments[0]) ? arguments[0] : arguments;
        return this.setDates.apply(this, e.map(t, this._utc_to_local)), this;
      },
      setDate: a("setDates"),
      setUTCDate: a("setUTCDates"),
      remove: a(
        "destroy",
        "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
      ),
      setValue: function () {
        var e = this.getFormattedDate();
        return this.inputField.val(e), this;
      },
      getFormattedDate: function (n) {
        n === t && (n = this.o.format);
        var i = this.o.language;
        return e
          .map(this.dates, function (e) {
            return v.formatDate(e, n, i);
          })
          .join(this.o.multidateSeparator);
      },
      getStartDate: function () {
        return this.o.startDate;
      },
      setStartDate: function (e) {
        return (
          this._process_options({ startDate: e }),
          this.update(),
          this.updateNavArrows(),
          this
        );
      },
      getEndDate: function () {
        return this.o.endDate;
      },
      setEndDate: function (e) {
        return (
          this._process_options({ endDate: e }),
          this.update(),
          this.updateNavArrows(),
          this
        );
      },
      setDaysOfWeekDisabled: function (e) {
        return (
          this._process_options({ daysOfWeekDisabled: e }), this.update(), this
        );
      },
      setDaysOfWeekHighlighted: function (e) {
        return (
          this._process_options({ daysOfWeekHighlighted: e }),
          this.update(),
          this
        );
      },
      setDatesDisabled: function (e) {
        return this._process_options({ datesDisabled: e }), this.update(), this;
      },
      place: function () {
        if (this.isInline) return this;
        var t = this.picker.outerWidth(),
          n = this.picker.outerHeight(),
          i = 10,
          r = e(this.o.container),
          a = r.width(),
          o =
            "body" === this.o.container
              ? e(document).scrollTop()
              : r.scrollTop(),
          s = r.offset(),
          l = [0];
        this.element.parents().each(function () {
          var t = e(this).css("z-index");
          "auto" !== t && 0 !== Number(t) && l.push(Number(t));
        });
        var d = Math.max.apply(Math, l) + this.o.zIndexOffset,
          c = this.component
            ? this.component.parent().offset()
            : this.element.offset(),
          u = this.component
            ? this.component.outerHeight(!0)
            : this.element.outerHeight(!1),
          h = this.component
            ? this.component.outerWidth(!0)
            : this.element.outerWidth(!1),
          p = c.left - s.left,
          f = c.top - s.top;
        "body" !== this.o.container && (f += o),
          this.picker.removeClass(
            "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
          ),
          "auto" !== this.o.orientation.x
            ? (this.picker.addClass(
                "datepicker-orient-" + this.o.orientation.x
              ),
              "right" === this.o.orientation.x && (p -= t - h))
            : c.left < 0
            ? (this.picker.addClass("datepicker-orient-left"),
              (p -= c.left - i))
            : p + t > a
            ? (this.picker.addClass("datepicker-orient-right"), (p += h - t))
            : this.o.rtl
            ? this.picker.addClass("datepicker-orient-right")
            : this.picker.addClass("datepicker-orient-left");
        var m = this.o.orientation.y;
        if (
          ("auto" === m && (m = -o + f - n < 0 ? "bottom" : "top"),
          this.picker.addClass("datepicker-orient-" + m),
          "top" === m
            ? (f -= n + parseInt(this.picker.css("padding-top")))
            : (f += u),
          this.o.rtl)
        ) {
          var y = a - (p + h);
          this.picker.css({ top: f, right: y, zIndex: d });
        } else this.picker.css({ top: f, left: p, zIndex: d });
        return this;
      },
      _allow_update: !0,
      update: function () {
        if (!this._allow_update) return this;
        var t = this.dates.copy(),
          n = [],
          i = !1;
        return (
          arguments.length
            ? (e.each(
                arguments,
                e.proxy(function (e, t) {
                  t instanceof Date && (t = this._local_to_utc(t)), n.push(t);
                }, this)
              ),
              (i = !0))
            : ((n =
                (n = this.isInput
                  ? this.element.val()
                  : this.element.data("date") || this.inputField.val()) &&
                this.o.multidate
                  ? n.split(this.o.multidateSeparator)
                  : [n]),
              delete this.element.data().date),
          (n = e.map(
            n,
            e.proxy(function (e) {
              return v.parseDate(
                e,
                this.o.format,
                this.o.language,
                this.o.assumeNearbyYear
              );
            }, this)
          )),
          (n = e.grep(
            n,
            e.proxy(function (e) {
              return !this.dateWithinRange(e) || !e;
            }, this),
            !0
          )),
          this.dates.replace(n),
          this.o.updateViewDate &&
            (this.dates.length
              ? (this.viewDate = new Date(this.dates.get(-1)))
              : this.viewDate < this.o.startDate
              ? (this.viewDate = new Date(this.o.startDate))
              : this.viewDate > this.o.endDate
              ? (this.viewDate = new Date(this.o.endDate))
              : (this.viewDate = this.o.defaultViewDate)),
          i
            ? (this.setValue(), this.element.change())
            : this.dates.length &&
              String(t) !== String(this.dates) &&
              i &&
              (this._trigger("changeDate"), this.element.change()),
          !this.dates.length &&
            t.length &&
            (this._trigger("clearDate"), this.element.change()),
          this.fill(),
          this
        );
      },
      fillDow: function () {
        if (this.o.showWeekDays) {
          var t = this.o.weekStart,
            n = "<tr>";
          for (
            this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>');
            t < this.o.weekStart + 7;

          )
            (n += '<th class="dow'),
              -1 !== e.inArray(t, this.o.daysOfWeekDisabled) &&
                (n += " disabled"),
              (n += '">' + g[this.o.language].daysMin[t++ % 7] + "</th>");
          (n += "</tr>"), this.picker.find(".datepicker-days thead").append(n);
        }
      },
      fillMonths: function () {
        for (
          var e = this._utc_to_local(this.viewDate), t = "", n = 0;
          n < 12;
          n++
        )
          t +=
            '<span class="month' +
            (e && e.getMonth() === n ? " focused" : "") +
            '">' +
            g[this.o.language].monthsShort[n] +
            "</span>";
        this.picker.find(".datepicker-months td").html(t);
      },
      setRange: function (t) {
        t && t.length
          ? (this.range = e.map(t, function (e) {
              return e.valueOf();
            }))
          : delete this.range,
          this.fill();
      },
      getClassNames: function (t) {
        var n = [],
          a = this.viewDate.getUTCFullYear(),
          o = this.viewDate.getUTCMonth(),
          s = i();
        return (
          t.getUTCFullYear() < a ||
          (t.getUTCFullYear() === a && t.getUTCMonth() < o)
            ? n.push("old")
            : (t.getUTCFullYear() > a ||
                (t.getUTCFullYear() === a && t.getUTCMonth() > o)) &&
              n.push("new"),
          this.focusDate &&
            t.valueOf() === this.focusDate.valueOf() &&
            n.push("focused"),
          this.o.todayHighlight && r(t, s) && n.push("today"),
          -1 !== this.dates.contains(t) && n.push("active"),
          this.dateWithinRange(t) || n.push("disabled"),
          this.dateIsDisabled(t) && n.push("disabled", "disabled-date"),
          -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) &&
            n.push("highlighted"),
          this.range &&
            (t > this.range[0] &&
              t < this.range[this.range.length - 1] &&
              n.push("range"),
            -1 !== e.inArray(t.valueOf(), this.range) && n.push("selected"),
            t.valueOf() === this.range[0] && n.push("range-start"),
            t.valueOf() === this.range[this.range.length - 1] &&
              n.push("range-end")),
          n
        );
      },
      _fill_yearsView: function (n, i, r, a, o, s, l) {
        for (
          var d,
            c,
            u,
            h = "",
            p = r / 10,
            f = this.picker.find(n),
            m = Math.floor(a / r) * r,
            y = m + 9 * p,
            g = Math.floor(this.viewDate.getFullYear() / p) * p,
            v = e.map(this.dates, function (e) {
              return Math.floor(e.getUTCFullYear() / p) * p;
            }),
            b = m - p;
          b <= y + p;
          b += p
        )
          (d = [i]),
            (c = null),
            b === m - p ? d.push("old") : b === y + p && d.push("new"),
            -1 !== e.inArray(b, v) && d.push("active"),
            (b < o || b > s) && d.push("disabled"),
            b === g && d.push("focused"),
            l !== e.noop &&
              ((u = l(new Date(b, 0, 1))) === t
                ? (u = {})
                : "boolean" == typeof u
                ? (u = { enabled: u })
                : "string" == typeof u && (u = { classes: u }),
              !1 === u.enabled && d.push("disabled"),
              u.classes && (d = d.concat(u.classes.split(/\s+/))),
              u.tooltip && (c = u.tooltip)),
            (h +=
              '<span class="' +
              d.join(" ") +
              '"' +
              (c ? ' title="' + c + '"' : "") +
              ">" +
              b +
              "</span>");
        f.find(".datepicker-switch").text(m + "-" + y), f.find("td").html(h);
      },
      fill: function () {
        var r,
          a,
          o = new Date(this.viewDate),
          s = o.getUTCFullYear(),
          l = o.getUTCMonth(),
          d =
            this.o.startDate !== -Infinity
              ? this.o.startDate.getUTCFullYear()
              : -Infinity,
          c =
            this.o.startDate !== -Infinity
              ? this.o.startDate.getUTCMonth()
              : -Infinity,
          u =
            this.o.endDate !== Infinity
              ? this.o.endDate.getUTCFullYear()
              : Infinity,
          h =
            this.o.endDate !== Infinity
              ? this.o.endDate.getUTCMonth()
              : Infinity,
          p = g[this.o.language].today || g.en.today || "",
          f = g[this.o.language].clear || g.en.clear || "",
          m = g[this.o.language].titleFormat || g.en.titleFormat,
          y = i(),
          b =
            (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
            y >= this.o.startDate &&
            y <= this.o.endDate &&
            !this.weekOfDateIsDisabled(y);
        if (!isNaN(s) && !isNaN(l)) {
          this.picker
            .find(".datepicker-days .datepicker-switch")
            .text(v.formatDate(o, m, this.o.language)),
            this.picker
              .find("tfoot .today")
              .text(p)
              .css("display", b ? "table-cell" : "none"),
            this.picker
              .find("tfoot .clear")
              .text(f)
              .css("display", !0 === this.o.clearBtn ? "table-cell" : "none"),
            this.picker
              .find("thead .datepicker-title")
              .text(this.o.title)
              .css(
                "display",
                "string" == typeof this.o.title && "" !== this.o.title
                  ? "table-cell"
                  : "none"
              ),
            this.updateNavArrows(),
            this.fillMonths();
          var w = n(s, l, 0),
            S = w.getUTCDate();
          w.setUTCDate(S - ((w.getUTCDay() - this.o.weekStart + 7) % 7));
          var k = new Date(w);
          w.getUTCFullYear() < 100 && k.setUTCFullYear(w.getUTCFullYear()),
            k.setUTCDate(k.getUTCDate() + 42),
            (k = k.valueOf());
          for (var x, D, T = []; w.valueOf() < k; ) {
            if (
              (x = w.getUTCDay()) === this.o.weekStart &&
              (T.push("<tr>"), this.o.calendarWeeks)
            ) {
              var C = new Date(+w + ((this.o.weekStart - x - 7) % 7) * 864e5),
                M = new Date(Number(C) + ((11 - C.getUTCDay()) % 7) * 864e5),
                A = new Date(
                  Number((A = n(M.getUTCFullYear(), 0, 1))) +
                    ((11 - A.getUTCDay()) % 7) * 864e5
                ),
                E = (M - A) / 864e5 / 7 + 1;
              T.push('<td class="cw">' + E + "</td>");
            }
            (D = this.getClassNames(w)).push("day");
            var j = w.getUTCDate();
            this.o.beforeShowDay !== e.noop &&
              ((a = this.o.beforeShowDay(this._utc_to_local(w))) === t
                ? (a = {})
                : "boolean" == typeof a
                ? (a = { enabled: a })
                : "string" == typeof a && (a = { classes: a }),
              !1 === a.enabled && D.push("disabled"),
              a.classes && (D = D.concat(a.classes.split(/\s+/))),
              a.tooltip && (r = a.tooltip),
              a.content && (j = a.content)),
              (D = e.isFunction(e.uniqueSort) ? e.uniqueSort(D) : e.unique(D)),
              T.push(
                '<td class="' +
                  D.join(" ") +
                  '"' +
                  (r ? ' title="' + r + '"' : "") +
                  ' data-date="' +
                  w.getTime().toString() +
                  '">' +
                  j +
                  "</td>"
              ),
              (r = null),
              x === this.o.weekEnd && T.push("</tr>"),
              w.setUTCDate(w.getUTCDate() + 1);
          }
          this.picker.find(".datepicker-days tbody").html(T.join(""));
          var $ =
              g[this.o.language].monthsTitle || g.en.monthsTitle || "Months",
            N = this.picker
              .find(".datepicker-months")
              .find(".datepicker-switch")
              .text(this.o.maxViewMode < 2 ? $ : s)
              .end()
              .find("tbody span")
              .removeClass("active");
          if (
            (e.each(this.dates, function (e, t) {
              t.getUTCFullYear() === s &&
                N.eq(t.getUTCMonth()).addClass("active");
            }),
            (s < d || s > u) && N.addClass("disabled"),
            s === d && N.slice(0, c).addClass("disabled"),
            s === u && N.slice(h + 1).addClass("disabled"),
            this.o.beforeShowMonth !== e.noop)
          ) {
            var _ = this;
            e.each(N, function (n, i) {
              var r = new Date(s, n, 1),
                a = _.o.beforeShowMonth(r);
              a === t
                ? (a = {})
                : "boolean" == typeof a
                ? (a = { enabled: a })
                : "string" == typeof a && (a = { classes: a }),
                !1 !== a.enabled ||
                  e(i).hasClass("disabled") ||
                  e(i).addClass("disabled"),
                a.classes && e(i).addClass(a.classes),
                a.tooltip && e(i).prop("title", a.tooltip);
            });
          }
          this._fill_yearsView(
            ".datepicker-years",
            "year",
            10,
            s,
            d,
            u,
            this.o.beforeShowYear
          ),
            this._fill_yearsView(
              ".datepicker-decades",
              "decade",
              100,
              s,
              d,
              u,
              this.o.beforeShowDecade
            ),
            this._fill_yearsView(
              ".datepicker-centuries",
              "century",
              1e3,
              s,
              d,
              u,
              this.o.beforeShowCentury
            );
        }
      },
      updateNavArrows: function () {
        if (this._allow_update) {
          var e,
            t,
            n = new Date(this.viewDate),
            i = n.getUTCFullYear(),
            r = n.getUTCMonth(),
            a =
              this.o.startDate !== -Infinity
                ? this.o.startDate.getUTCFullYear()
                : -Infinity,
            o =
              this.o.startDate !== -Infinity
                ? this.o.startDate.getUTCMonth()
                : -Infinity,
            s =
              this.o.endDate !== Infinity
                ? this.o.endDate.getUTCFullYear()
                : Infinity,
            l =
              this.o.endDate !== Infinity
                ? this.o.endDate.getUTCMonth()
                : Infinity,
            d = 1;
          switch (this.viewMode) {
            case 4:
              d *= 10;
            case 3:
              d *= 10;
            case 2:
              d *= 10;
            case 1:
              (e = Math.floor(i / d) * d <= a),
                (t = Math.floor(i / d) * d + d > s);
              break;
            case 0:
              (e = i <= a && r <= o), (t = i >= s && r >= l);
          }
          this.picker.find(".prev").toggleClass("disabled", e),
            this.picker.find(".next").toggleClass("disabled", t);
        }
      },
      click: function (t) {
        var r, a, o, s;
        t.preventDefault(),
          t.stopPropagation(),
          (r = e(t.target)).hasClass("datepicker-switch") &&
            this.viewMode !== this.o.maxViewMode &&
            this.setViewMode(this.viewMode + 1),
          r.hasClass("today") &&
            !r.hasClass("day") &&
            (this.setViewMode(0),
            this._setDate(i(), "linked" === this.o.todayBtn ? null : "view")),
          r.hasClass("clear") && this.clearDates(),
          r.hasClass("disabled") ||
            ((r.hasClass("month") ||
              r.hasClass("year") ||
              r.hasClass("decade") ||
              r.hasClass("century")) &&
              (this.viewDate.setUTCDate(1),
              (a = 1),
              1 === this.viewMode
                ? ((s = r.parent().find("span").index(r)),
                  (o = this.viewDate.getUTCFullYear()),
                  this.viewDate.setUTCMonth(s))
                : ((s = 0),
                  (o = Number(r.text())),
                  this.viewDate.setUTCFullYear(o)),
              this._trigger(v.viewModes[this.viewMode - 1].e, this.viewDate),
              this.viewMode === this.o.minViewMode
                ? this._setDate(n(o, s, a))
                : (this.setViewMode(this.viewMode - 1), this.fill()))),
          this.picker.is(":visible") &&
            this._focused_from &&
            this._focused_from.focus(),
          delete this._focused_from;
      },
      dayCellClick: function (t) {
        var n = e(t.currentTarget).data("date"),
          i = new Date(n);
        this.o.updateViewDate &&
          (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
            this._trigger("changeYear", this.viewDate),
          i.getUTCMonth() !== this.viewDate.getUTCMonth() &&
            this._trigger("changeMonth", this.viewDate)),
          this._setDate(i);
      },
      navArrowsClick: function (t) {
        var n = e(t.currentTarget).hasClass("prev") ? -1 : 1;
        0 !== this.viewMode && (n *= 12 * v.viewModes[this.viewMode].navStep),
          (this.viewDate = this.moveMonth(this.viewDate, n)),
          this._trigger(v.viewModes[this.viewMode].e, this.viewDate),
          this.fill();
      },
      _toggle_multidate: function (e) {
        var t = this.dates.contains(e);
        if (
          (e || this.dates.clear(),
          -1 !== t
            ? (!0 === this.o.multidate ||
                this.o.multidate > 1 ||
                this.o.toggleActive) &&
              this.dates.remove(t)
            : !1 === this.o.multidate
            ? (this.dates.clear(), this.dates.push(e))
            : this.dates.push(e),
          "number" == typeof this.o.multidate)
        )
          for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
      },
      _setDate: function (e, t) {
        (t && "date" !== t) || this._toggle_multidate(e && new Date(e)),
          ((!t && this.o.updateViewDate) || "view" === t) &&
            (this.viewDate = e && new Date(e)),
          this.fill(),
          this.setValue(),
          (t && "view" === t) || this._trigger("changeDate"),
          this.inputField.trigger("change"),
          !this.o.autoclose || (t && "date" !== t) || this.hide();
      },
      moveDay: function (e, t) {
        var n = new Date(e);
        return n.setUTCDate(e.getUTCDate() + t), n;
      },
      moveWeek: function (e, t) {
        return this.moveDay(e, 7 * t);
      },
      moveMonth: function (e, t) {
        if (!o(e)) return this.o.defaultViewDate;
        if (!t) return e;
        var n,
          i,
          r = new Date(e.valueOf()),
          a = r.getUTCDate(),
          s = r.getUTCMonth(),
          l = Math.abs(t);
        if (((t = t > 0 ? 1 : -1), 1 === l))
          (i =
            -1 === t
              ? function () {
                  return r.getUTCMonth() === s;
                }
              : function () {
                  return r.getUTCMonth() !== n;
                }),
            (n = s + t),
            r.setUTCMonth(n),
            (n = (n + 12) % 12);
        else {
          for (var d = 0; d < l; d++) r = this.moveMonth(r, t);
          (n = r.getUTCMonth()),
            r.setUTCDate(a),
            (i = function () {
              return n !== r.getUTCMonth();
            });
        }
        for (; i(); ) r.setUTCDate(--a), r.setUTCMonth(n);
        return r;
      },
      moveYear: function (e, t) {
        return this.moveMonth(e, 12 * t);
      },
      moveAvailableDate: function (e, t, n) {
        do {
          if (((e = this[n](e, t)), !this.dateWithinRange(e))) return !1;
          n = "moveDay";
        } while (this.dateIsDisabled(e));
        return e;
      },
      weekOfDateIsDisabled: function (t) {
        return -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled);
      },
      dateIsDisabled: function (t) {
        return (
          this.weekOfDateIsDisabled(t) ||
          e.grep(this.o.datesDisabled, function (e) {
            return r(t, e);
          }).length > 0
        );
      },
      dateWithinRange: function (e) {
        return e >= this.o.startDate && e <= this.o.endDate;
      },
      keydown: function (e) {
        if (this.picker.is(":visible")) {
          var t,
            n,
            i = !1,
            r = this.focusDate || this.viewDate;
          switch (e.keyCode) {
            case 27:
              this.focusDate
                ? ((this.focusDate = null),
                  (this.viewDate = this.dates.get(-1) || this.viewDate),
                  this.fill())
                : this.hide(),
                e.preventDefault(),
                e.stopPropagation();
              break;
            case 37:
            case 38:
            case 39:
            case 40:
              if (
                !this.o.keyboardNavigation ||
                7 === this.o.daysOfWeekDisabled.length
              )
                break;
              (t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1),
                0 === this.viewMode
                  ? e.ctrlKey
                    ? (n = this.moveAvailableDate(r, t, "moveYear")) &&
                      this._trigger("changeYear", this.viewDate)
                    : e.shiftKey
                    ? (n = this.moveAvailableDate(r, t, "moveMonth")) &&
                      this._trigger("changeMonth", this.viewDate)
                    : 37 === e.keyCode || 39 === e.keyCode
                    ? (n = this.moveAvailableDate(r, t, "moveDay"))
                    : this.weekOfDateIsDisabled(r) ||
                      (n = this.moveAvailableDate(r, t, "moveWeek"))
                  : 1 === this.viewMode
                  ? ((38 !== e.keyCode && 40 !== e.keyCode) || (t *= 4),
                    (n = this.moveAvailableDate(r, t, "moveMonth")))
                  : 2 === this.viewMode &&
                    ((38 !== e.keyCode && 40 !== e.keyCode) || (t *= 4),
                    (n = this.moveAvailableDate(r, t, "moveYear"))),
                n &&
                  ((this.focusDate = this.viewDate = n),
                  this.setValue(),
                  this.fill(),
                  e.preventDefault());
              break;
            case 13:
              if (!this.o.forceParse) break;
              (r = this.focusDate || this.dates.get(-1) || this.viewDate),
                this.o.keyboardNavigation &&
                  (this._toggle_multidate(r), (i = !0)),
                (this.focusDate = null),
                (this.viewDate = this.dates.get(-1) || this.viewDate),
                this.setValue(),
                this.fill(),
                this.picker.is(":visible") &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  this.o.autoclose && this.hide());
              break;
            case 9:
              (this.focusDate = null),
                (this.viewDate = this.dates.get(-1) || this.viewDate),
                this.fill(),
                this.hide();
          }
          i &&
            (this.dates.length
              ? this._trigger("changeDate")
              : this._trigger("clearDate"),
            this.inputField.trigger("change"));
        } else
          (40 !== e.keyCode && 27 !== e.keyCode) ||
            (this.show(), e.stopPropagation());
      },
      setViewMode: function (e) {
        (this.viewMode = e),
          this.picker
            .children("div")
            .hide()
            .filter(".datepicker-" + v.viewModes[this.viewMode].clsName)
            .show(),
          this.updateNavArrows(),
          this._trigger("changeViewMode", new Date(this.viewDate));
      },
    };
    var h = function (t, n) {
      e.data(t, "datepicker", this),
        (this.element = e(t)),
        (this.inputs = e.map(n.inputs, function (e) {
          return e.jquery ? e[0] : e;
        })),
        delete n.inputs,
        (this.keepEmptyValues = n.keepEmptyValues),
        delete n.keepEmptyValues,
        f
          .call(e(this.inputs), n)
          .on("changeDate", e.proxy(this.dateUpdated, this)),
        (this.pickers = e.map(this.inputs, function (t) {
          return e.data(t, "datepicker");
        })),
        this.updateDates();
    };
    h.prototype = {
      updateDates: function () {
        (this.dates = e.map(this.pickers, function (e) {
          return e.getUTCDate();
        })),
          this.updateRanges();
      },
      updateRanges: function () {
        var t = e.map(this.dates, function (e) {
          return e.valueOf();
        });
        e.each(this.pickers, function (e, n) {
          n.setRange(t);
        });
      },
      clearDates: function () {
        e.each(this.pickers, function (e, t) {
          t.clearDates();
        });
      },
      dateUpdated: function (n) {
        if (!this.updating) {
          this.updating = !0;
          var i = e.data(n.target, "datepicker");
          if (i !== t) {
            var r = i.getUTCDate(),
              a = this.keepEmptyValues,
              o = e.inArray(n.target, this.inputs),
              s = o - 1,
              l = o + 1,
              d = this.inputs.length;
            if (-1 !== o) {
              if (
                (e.each(this.pickers, function (e, t) {
                  t.getUTCDate() || (t !== i && a) || t.setUTCDate(r);
                }),
                r < this.dates[s])
              )
                for (; s >= 0 && r < this.dates[s]; )
                  this.pickers[s--].setUTCDate(r);
              else if (r > this.dates[l])
                for (; l < d && r > this.dates[l]; )
                  this.pickers[l++].setUTCDate(r);
              this.updateDates(), delete this.updating;
            }
          }
        }
      },
      destroy: function () {
        e.map(this.pickers, function (e) {
          e.destroy();
        }),
          e(this.inputs).off("changeDate", this.dateUpdated),
          delete this.element.data().datepicker;
      },
      remove: a(
        "destroy",
        "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
      ),
    };
    var p = e.fn.datepicker,
      f = function (n) {
        var i,
          r = Array.apply(null, arguments);
        if (
          (r.shift(),
          this.each(function () {
            var t = e(this),
              a = t.data("datepicker"),
              o = "object" == typeof n && n;
            if (!a) {
              var d = s(this, "date"),
                c = l(e.extend({}, m, d, o).language),
                p = e.extend({}, m, c, d, o);
              t.hasClass("input-daterange") || p.inputs
                ? (e.extend(p, {
                    inputs: p.inputs || t.find("input").toArray(),
                  }),
                  (a = new h(this, p)))
                : (a = new u(this, p)),
                t.data("datepicker", a);
            }
            "string" == typeof n &&
              "function" == typeof a[n] &&
              (i = a[n].apply(a, r));
          }),
          i === t || i instanceof u || i instanceof h)
        )
          return this;
        if (this.length > 1)
          throw new Error(
            "Using only allowed for the collection of a single element (" +
              n +
              " function)"
          );
        return i;
      };
    e.fn.datepicker = f;
    var m = (e.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: e.noop,
        beforeShowMonth: e.noop,
        beforeShowYear: e.noop,
        beforeShowDecade: e.noop,
        beforeShowCentury: e.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -Infinity,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
        showWeekDays: !0,
      }),
      y = (e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"]);
    e.fn.datepicker.Constructor = u;
    var g = (e.fn.datepicker.dates = {
        en: {
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          today: "Today",
          clear: "Clear",
          titleFormat: "MM yyyy",
        },
      }),
      v = {
        viewModes: [
          { names: ["days", "month"], clsName: "days", e: "changeMonth" },
          {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1,
          },
          {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10,
          },
          {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100,
          },
          {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3,
          },
        ],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function (e) {
          if (
            "function" == typeof e.toValue &&
            "function" == typeof e.toDisplay
          )
            return e;
          var t = e.replace(this.validParts, "\0").split("\0"),
            n = e.match(this.validParts);
          if (!t || !t.length || !n || 0 === n.length)
            throw new Error("Invalid date format.");
          return { separators: t, parts: n };
        },
        parseDate: function (n, r, a, o) {
          function s(e, t) {
            return (
              !0 === t && (t = 10),
              e < 100 &&
                (e += 2e3) > new Date().getFullYear() + t &&
                (e -= 100),
              e
            );
          }
          function l() {
            var e = this.slice(0, d[p].length),
              t = d[p].slice(0, e.length);
            return e.toLowerCase() === t.toLowerCase();
          }
          if (!n) return t;
          if (n instanceof Date) return n;
          if (("string" == typeof r && (r = v.parseFormat(r)), r.toValue))
            return r.toValue(n, r, a);
          var d,
            c,
            h,
            p,
            f,
            m = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
            y = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
          if (
            (n in y && (n = y[n]),
            /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n))
          ) {
            for (
              d = n.match(/([\-+]\d+)([dmwy])/gi), n = new Date(), p = 0;
              p < d.length;
              p++
            )
              (c = d[p].match(/([\-+]\d+)([dmwy])/i)),
                (h = Number(c[1])),
                (f = m[c[2].toLowerCase()]),
                (n = u.prototype[f](n, h));
            return u.prototype._zero_utc_time(n);
          }
          d = (n && n.match(this.nonpunctuation)) || [];
          var b,
            w,
            S = {},
            k = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            x = {
              yyyy: function (e, t) {
                return e.setUTCFullYear(o ? s(t, o) : t);
              },
              m: function (e, t) {
                if (isNaN(e)) return e;
                for (t -= 1; t < 0; ) t += 12;
                for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t; )
                  e.setUTCDate(e.getUTCDate() - 1);
                return e;
              },
              d: function (e, t) {
                return e.setUTCDate(t);
              },
            };
          (x.yy = x.yyyy), (x.M = x.MM = x.mm = x.m), (x.dd = x.d), (n = i());
          var D = r.parts.slice();
          if (
            (d.length !== D.length &&
              (D = e(D)
                .filter(function (t, n) {
                  return -1 !== e.inArray(n, k);
                })
                .toArray()),
            d.length === D.length)
          ) {
            var T, C, M;
            for (p = 0, T = D.length; p < T; p++) {
              if (((b = parseInt(d[p], 10)), (c = D[p]), isNaN(b)))
                switch (c) {
                  case "MM":
                    (w = e(g[a].months).filter(l)),
                      (b = e.inArray(w[0], g[a].months) + 1);
                    break;
                  case "M":
                    (w = e(g[a].monthsShort).filter(l)),
                      (b = e.inArray(w[0], g[a].monthsShort) + 1);
                }
              S[c] = b;
            }
            for (p = 0; p < k.length; p++)
              (M = k[p]) in S &&
                !isNaN(S[M]) &&
                ((C = new Date(n)), x[M](C, S[M]), isNaN(C) || (n = C));
          }
          return n;
        },
        formatDate: function (t, n, i) {
          if (!t) return "";
          if (("string" == typeof n && (n = v.parseFormat(n)), n.toDisplay))
            return n.toDisplay(t, n, i);
          var r = {
            d: t.getUTCDate(),
            D: g[i].daysShort[t.getUTCDay()],
            DD: g[i].days[t.getUTCDay()],
            m: t.getUTCMonth() + 1,
            M: g[i].monthsShort[t.getUTCMonth()],
            MM: g[i].months[t.getUTCMonth()],
            yy: t.getUTCFullYear().toString().substring(2),
            yyyy: t.getUTCFullYear(),
          };
          (r.dd = (r.d < 10 ? "0" : "") + r.d),
            (r.mm = (r.m < 10 ? "0" : "") + r.m),
            (t = []);
          for (
            var a = e.extend([], n.separators), o = 0, s = n.parts.length;
            o <= s;
            o++
          )
            a.length && t.push(a.shift()), t.push(r[n.parts[o]]);
          return t.join("");
        },
        headTemplate:
          '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
          m.templates.leftArrow +
          '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
          m.templates.rightArrow +
          "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate:
          '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
      };
    (v.template =
      '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
      v.headTemplate +
      "<tbody></tbody>" +
      v.footTemplate +
      '</table></div><div class="datepicker-months"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      '</table></div><div class="datepicker-years"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
      v.headTemplate +
      v.contTemplate +
      v.footTemplate +
      "</table></div></div>"),
      (e.fn.datepicker.DPGlobal = v),
      (e.fn.datepicker.noConflict = function () {
        return (e.fn.datepicker = p), this;
      }),
      (e.fn.datepicker.version = "1.9.0"),
      (e.fn.datepicker.deprecated = function (e) {
        var t = window.console;
        t && t.warn && t.warn("DEPRECATED: " + e);
      }),
      e(document).on(
        "focus.datepicker.data-api click.datepicker.data-api",
        '[data-provide="datepicker"]',
        function (t) {
          var n = e(this);
          n.data("datepicker") || (t.preventDefault(), f.call(n, "show"));
        }
      ),
      e(function () {
        f.call(e('[data-provide="datepicker-inline"]'));
      });
  }),
  (function (e) {
    (e.fn.datepicker.dates["en-CA"] = {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      today: "Today",
      monthsTitle: "Months",
      clear: "Clear",
      weekStart: 0,
      format: "yyyy-mm-dd",
    }),
      e.fn.datepicker.deprecated(
        "This filename doesn't follow the convention, use bootstrap-datepicker.en-CA.js instead."
      );
  })(jQuery),
  (jQuery.fn.datepicker.dates["ar-tn"] = {
    days: [
      "\u0627\u0644\u0623\u062d\u062f",
      "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
      "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u0627\u0644\u062e\u0645\u064a\u0633",
      "\u0627\u0644\u062c\u0645\u0639\u0629",
      "\u0627\u0644\u0633\u0628\u062a",
      "\u0627\u0644\u0623\u062d\u062f",
    ],
    daysShort: [
      "\u0623\u062d\u062f",
      "\u0627\u062b\u0646\u064a\u0646",
      "\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u062e\u0645\u064a\u0633",
      "\u062c\u0645\u0639\u0629",
      "\u0633\u0628\u062a",
      "\u0623\u062d\u062f",
    ],
    daysMin: [
      "\u062d",
      "\u0646",
      "\u062b",
      "\u0639",
      "\u062e",
      "\u062c",
      "\u0633",
      "\u062d",
    ],
    months: [
      "\u062c\u0627\u0646\u0641\u064a",
      "\u0641\u064a\u0641\u0631\u064a",
      "\u0645\u0627\u0631\u0633",
      "\u0623\u0641\u0631\u064a\u0644",
      "\u0645\u0627\u064a",
      "\u062c\u0648\u0627\u0646",
      "\u062c\u0648\u064a\u0644\u064a\u0647",
      "\u0623\u0648\u062a",
      "\u0633\u0628\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u064a\u0633\u0645\u0628\u0631",
    ],
    monthsShort: [
      "\u062c\u0627\u0646\u0641\u064a",
      "\u0641\u064a\u0641\u0631\u064a",
      "\u0645\u0627\u0631\u0633",
      "\u0623\u0641\u0631\u064a\u0644",
      "\u0645\u0627\u064a",
      "\u062c\u0648\u0627\u0646",
      "\u062c\u0648\u064a\u0644\u064a\u0647",
      "\u0623\u0648\u062a",
      "\u0633\u0628\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u064a\u0633\u0645\u0628\u0631",
    ],
    today: "\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645",
    rtl: !0,
  }),
  (jQuery.fn.datepicker.dates.ar = {
    days: [
      "\u0627\u0644\u0623\u062d\u062f",
      "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
      "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u0627\u0644\u062e\u0645\u064a\u0633",
      "\u0627\u0644\u062c\u0645\u0639\u0629",
      "\u0627\u0644\u0633\u0628\u062a",
      "\u0627\u0644\u0623\u062d\u062f",
    ],
    daysShort: [
      "\u0623\u062d\u062f",
      "\u0627\u062b\u0646\u064a\u0646",
      "\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u062e\u0645\u064a\u0633",
      "\u062c\u0645\u0639\u0629",
      "\u0633\u0628\u062a",
      "\u0623\u062d\u062f",
    ],
    daysMin: [
      "\u062d",
      "\u0646",
      "\u062b",
      "\u0639",
      "\u062e",
      "\u062c",
      "\u0633",
      "\u062d",
    ],
    months: [
      "\u064a\u0646\u0627\u064a\u0631",
      "\u0641\u0628\u0631\u0627\u064a\u0631",
      "\u0645\u0627\u0631\u0633",
      "\u0623\u0628\u0631\u064a\u0644",
      "\u0645\u0627\u064a\u0648",
      "\u064a\u0648\u0646\u064a\u0648",
      "\u064a\u0648\u0644\u064a\u0648",
      "\u0623\u063a\u0633\u0637\u0633",
      "\u0633\u0628\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u064a\u0633\u0645\u0628\u0631",
    ],
    monthsShort: [
      "\u064a\u0646\u0627\u064a\u0631",
      "\u0641\u0628\u0631\u0627\u064a\u0631",
      "\u0645\u0627\u0631\u0633",
      "\u0623\u0628\u0631\u064a\u0644",
      "\u0645\u0627\u064a\u0648",
      "\u064a\u0648\u0646\u064a\u0648",
      "\u064a\u0648\u0644\u064a\u0648",
      "\u0623\u063a\u0633\u0637\u0633",
      "\u0633\u0628\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u064a\u0633\u0645\u0628\u0631",
    ],
    today: "\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645",
    rtl: !0,
  }),
  (jQuery.fn.datepicker.dates.az = {
    days: [
      "Bazar",
      "Bazar ert\u0259si",
      "\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131",
      "\xc7\u0259r\u015f\u0259nb\u0259",
      "C\xfcm\u0259 ax\u015fam\u0131",
      "C\xfcm\u0259",
      "\u015e\u0259nb\u0259",
    ],
    daysShort: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."],
    daysMin: ["B.", "B.e", "\xc7.a", "\xc7.", "C.a", "C.", "\u015e."],
    months: [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "\u0130yun",
      "\u0130yul",
      "Avqust",
      "Sentyabr",
      "Oktyabr",
      "Noyabr",
      "Dekabr",
    ],
    monthsShort: [
      "Yan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "\u0130yun",
      "\u0130yul",
      "Avq",
      "Sen",
      "Okt",
      "Noy",
      "Dek",
    ],
    today: "Bu g\xfcn",
    weekStart: 1,
    clear: "T\u0259mizl\u0259",
    monthsTitle: "Aylar",
  }),
  (jQuery.fn.datepicker.dates.bg = {
    days: [
      "\u041d\u0435\u0434\u0435\u043b\u044f",
      "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a",
      "\u0412\u0442\u043e\u0440\u043d\u0438\u043a",
      "\u0421\u0440\u044f\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a",
      "\u041f\u0435\u0442\u044a\u043a",
      "\u0421\u044a\u0431\u043e\u0442\u0430",
    ],
    daysShort: [
      "\u041d\u0435\u0434",
      "\u041f\u043e\u043d",
      "\u0412\u0442\u043e",
      "\u0421\u0440\u044f",
      "\u0427\u0435\u0442",
      "\u041f\u0435\u0442",
      "\u0421\u044a\u0431",
    ],
    daysMin: [
      "\u041d",
      "\u041f",
      "\u0412",
      "\u0421",
      "\u0427",
      "\u041f",
      "\u0421",
    ],
    months: [
      "\u042f\u043d\u0443\u0430\u0440\u0438",
      "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0438\u043b",
      "\u041c\u0430\u0439",
      "\u042e\u043d\u0438",
      "\u042e\u043b\u0438",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438",
      "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438",
      "\u041d\u043e\u0435\u043c\u0432\u0440\u0438",
      "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438",
    ],
    monthsShort: [
      "\u042f\u043d",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0439",
      "\u042e\u043d\u0438",
      "\u042e\u043b\u0438",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043f",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u0435",
      "\u0414\u0435\u043a",
    ],
    today: "\u0434\u043d\u0435\u0441",
  }),
  (jQuery.fn.datepicker.dates.bm = {
    days: [
      "Kari",
      "Nt\u025bn\u025bn",
      "Tarata",
      "Araba",
      "Alamisa",
      "Juma",
      "Sibiri",
    ],
    daysShort: ["Kar", "Nt\u025b", "Tar", "Ara", "Ala", "Jum", "Sib"],
    daysMin: ["Ka", "Nt", "Ta", "Ar", "Al", "Ju", "Si"],
    months: [
      "Zanwuyekalo",
      "Fewuruyekalo",
      "Marisikalo",
      "Awirilikalo",
      "M\u025bkalo",
      "Zuw\u025bnkalo",
      "Zuluyekalo",
      "Utikalo",
      "S\u025btanburukalo",
      "\u0254kut\u0254burukalo",
      "Nowanburukalo",
      "Desanburukalo",
    ],
    monthsShort: [
      "Zan",
      "Few",
      "Mar",
      "Awi",
      "M\u025b",
      "Zuw",
      "Zul",
      "Uti",
      "S\u025bt",
      "\u0254ku",
      "Now",
      "Des",
    ],
    today: "Bi",
    monthsTitle: "Kalo",
    clear: "Ka j\u0254si",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.bn = {
    days: [
      "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0",
      "\u09b8\u09cb\u09ae\u09ac\u09be\u09b0",
      "\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0",
      "\u09ac\u09c1\u09a7\u09ac\u09be\u09b0",
      "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0",
      "\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0",
      "\u09b6\u09a8\u09bf\u09ac\u09be\u09b0",
    ],
    daysShort: [
      "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0",
      "\u09b8\u09cb\u09ae\u09ac\u09be\u09b0",
      "\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0",
      "\u09ac\u09c1\u09a7\u09ac\u09be\u09b0",
      "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0",
      "\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0",
      "\u09b6\u09a8\u09bf\u09ac\u09be\u09b0",
    ],
    daysMin: [
      "\u09b0\u09ac\u09bf",
      "\u09b8\u09cb\u09ae",
      "\u09ae\u0999\u09cd\u0997\u09b2",
      "\u09ac\u09c1\u09a7",
      "\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf",
      "\u09b6\u09c1\u0995\u09cd\u09b0",
      "\u09b6\u09a8\u09bf",
    ],
    months: [
      "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0",
      "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09bf",
      "\u09ae\u09be\u09b0\u09cd\u099a",
      "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2",
      "\u09ae\u09c7",
      "\u099c\u09c1\u09a8",
      "\u099c\u09c1\u09b2\u09be\u0987",
      "\u0985\u0997\u09be\u09b8\u09cd\u099f",
      "\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0",
      "\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0",
      "\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0",
      "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0",
    ],
    monthsShort: [
      "\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0",
      "\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09bf",
      "\u09ae\u09be\u09b0\u09cd\u099a",
      "\u098f\u09aa\u09cd\u09b0\u09bf\u09b2",
      "\u09ae\u09c7",
      "\u099c\u09c1\u09a8",
      "\u099c\u09c1\u09b2\u09be\u0987",
      "\u0985\u0997\u09be\u09b8\u09cd\u099f",
      "\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0",
      "\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0",
      "\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0",
      "\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0",
    ],
    today: "\u0986\u099c",
    monthsTitle: "\u09ae\u09be\u09b8",
    clear: "\u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0",
    weekStart: 0,
    format: "mm/dd/yyyy",
  }),
  (jQuery.fn.datepicker.dates.br = {
    days: ["Sul", "Lun", "Meurzh", "Merc'her", "Yaou", "Gwener", "Sadorn"],
    daysShort: ["Sul", "Lun", "Meu.", "Mer.", "Yao.", "Gwe.", "Sad."],
    daysMin: ["Su", "L", "Meu", "Mer", "Y", "G", "Sa"],
    months: [
      "Genver",
      "C'hwevrer",
      "Meurzh",
      "Ebrel",
      "Mae",
      "Mezheven",
      "Gouere",
      "Eost",
      "Gwengolo",
      "Here",
      "Du",
      "Kerzu",
    ],
    monthsShort: [
      "Genv.",
      "C'hw.",
      "Meur.",
      "Ebre.",
      "Mae",
      "Mezh.",
      "Goue.",
      "Eost",
      "Gwen.",
      "Here",
      "Du",
      "Kerz.",
    ],
    today: "Hiziv",
    monthsTitle: "Miz",
    clear: "Dilemel",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.bs = {
    days: [
      "Nedjelja",
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "\u010cetvrtak",
      "Petak",
      "Subota",
    ],
    daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
    daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"],
    months: [
      "Januar",
      "Februar",
      "Mart",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "August",
      "Septembar",
      "Oktobar",
      "Novembar",
      "Decembar",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    today: "Danas",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.ca = {
    days: [
      "Diumenge",
      "Dilluns",
      "Dimarts",
      "Dimecres",
      "Dijous",
      "Divendres",
      "Dissabte",
    ],
    daysShort: ["Diu", "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"],
    daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
    months: [
      "Gener",
      "Febrer",
      "Mar\xe7",
      "Abril",
      "Maig",
      "Juny",
      "Juliol",
      "Agost",
      "Setembre",
      "Octubre",
      "Novembre",
      "Desembre",
    ],
    monthsShort: [
      "Gen",
      "Feb",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Oct",
      "Nov",
      "Des",
    ],
    today: "Avui",
    monthsTitle: "Mesos",
    clear: "Esborrar",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.cs = {
    days: [
      "Ned\u011ble",
      "Pond\u011bl\xed",
      "\xdater\xfd",
      "St\u0159eda",
      "\u010ctvrtek",
      "P\xe1tek",
      "Sobota",
    ],
    daysShort: [
      "Ned",
      "Pon",
      "\xdate",
      "St\u0159",
      "\u010ctv",
      "P\xe1t",
      "Sob",
    ],
    daysMin: ["Ne", "Po", "\xdat", "St", "\u010ct", "P\xe1", "So"],
    months: [
      "Leden",
      "\xdanor",
      "B\u0159ezen",
      "Duben",
      "Kv\u011bten",
      "\u010cerven",
      "\u010cervenec",
      "Srpen",
      "Z\xe1\u0159\xed",
      "\u0158\xedjen",
      "Listopad",
      "Prosinec",
    ],
    monthsShort: [
      "Led",
      "\xdano",
      "B\u0159e",
      "Dub",
      "Kv\u011b",
      "\u010cer",
      "\u010cnc",
      "Srp",
      "Z\xe1\u0159",
      "\u0158\xedj",
      "Lis",
      "Pro",
    ],
    today: "Dnes",
    clear: "Vymazat",
    monthsTitle: "M\u011bs\xedc",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.cy = {
    days: ["Sul", "Llun", "Mawrth", "Mercher", "Iau", "Gwener", "Sadwrn"],
    daysShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"],
    daysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gwe", "Sa"],
    months: [
      "Ionawr",
      "Chewfror",
      "Mawrth",
      "Ebrill",
      "Mai",
      "Mehefin",
      "Gorfennaf",
      "Awst",
      "Medi",
      "Hydref",
      "Tachwedd",
      "Rhagfyr",
    ],
    monthsShort: [
      "Ion",
      "Chw",
      "Maw",
      "Ebr",
      "Mai",
      "Meh",
      "Gor",
      "Aws",
      "Med",
      "Hyd",
      "Tach",
      "Rha",
    ],
    today: "Heddiw",
  }),
  (jQuery.fn.datepicker.dates.da = {
    days: [
      "S\xf8ndag",
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "L\xf8rdag",
    ],
    daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
    daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"],
    months: [
      "Januar",
      "Februar",
      "Marts",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    today: "I Dag",
    weekStart: 1,
    clear: "Nulstil",
    format: "dd/mm/yyyy",
    monthsTitle: "M\xe5neder",
  }),
  (jQuery.fn.datepicker.dates.de = {
    days: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
    daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
    daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: [
      "Januar",
      "Februar",
      "M\xe4rz",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "M\xe4r",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    today: "Heute",
    monthsTitle: "Monate",
    clear: "L\xf6schen",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.el = {
    days: [
      "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae",
      "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1",
      "\u03a4\u03c1\u03af\u03c4\u03b7",
      "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7",
      "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7",
      "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae",
      "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf",
    ],
    daysShort: [
      "\u039a\u03c5\u03c1",
      "\u0394\u03b5\u03c5",
      "\u03a4\u03c1\u03b9",
      "\u03a4\u03b5\u03c4",
      "\u03a0\u03b5\u03bc",
      "\u03a0\u03b1\u03c1",
      "\u03a3\u03b1\u03b2",
    ],
    daysMin: [
      "\u039a\u03c5",
      "\u0394\u03b5",
      "\u03a4\u03c1",
      "\u03a4\u03b5",
      "\u03a0\u03b5",
      "\u03a0\u03b1",
      "\u03a3\u03b1",
    ],
    months: [
      "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
      "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2",
      "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
      "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2",
      "\u039c\u03ac\u03b9\u03bf\u03c2",
      "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2",
      "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2",
      "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2",
      "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
      "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2",
      "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
      "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2",
    ],
    monthsShort: [
      "\u0399\u03b1\u03bd",
      "\u03a6\u03b5\u03b2",
      "\u039c\u03b1\u03c1",
      "\u0391\u03c0\u03c1",
      "\u039c\u03ac\u03b9",
      "\u0399\u03bf\u03c5\u03bd",
      "\u0399\u03bf\u03c5\u03bb",
      "\u0391\u03c5\u03b3",
      "\u03a3\u03b5\u03c0",
      "\u039f\u03ba\u03c4",
      "\u039d\u03bf\u03b5",
      "\u0394\u03b5\u03ba",
    ],
    today: "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1",
    clear: "\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2",
    weekStart: 1,
    format: "d/m/yyyy",
  }),
  (jQuery.fn.datepicker.dates["en-AU"] = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "d/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates["en-CA"] = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 0,
    format: "yyyy-mm-dd",
  }),
  (jQuery.fn.datepicker.dates["en-GB"] = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates["en-IE"] = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates["en-NZ"] = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "d/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates["en-ZA"] = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "yyyy/mm/d",
  }),
  (jQuery.fn.datepicker.dates.eo = {
    days: [
      "diman\u0109o",
      "lundo",
      "mardo",
      "merkredo",
      "\u0135a\u016ddo",
      "vendredo",
      "sabato",
    ],
    daysShort: [
      "dim.",
      "lun.",
      "mar.",
      "mer.",
      "\u0135a\u016d.",
      "ven.",
      "sam.",
    ],
    daysMin: ["d", "l", "ma", "me", "\u0135", "v", "s"],
    months: [
      "januaro",
      "februaro",
      "marto",
      "aprilo",
      "majo",
      "junio",
      "julio",
      "a\u016dgusto",
      "septembro",
      "oktobro",
      "novembro",
      "decembro",
    ],
    monthsShort: [
      "jan.",
      "feb.",
      "mar.",
      "apr.",
      "majo",
      "jun.",
      "jul.",
      "a\u016dg.",
      "sep.",
      "okt.",
      "nov.",
      "dec.",
    ],
    today: "Hodia\u016d",
    clear: "Nuligi",
    weekStart: 1,
    format: "yyyy-mm-dd",
  }),
  (jQuery.fn.datepicker.dates.es = {
    days: [
      "Domingo",
      "Lunes",
      "Martes",
      "Mi\xe9rcoles",
      "Jueves",
      "Viernes",
      "S\xe1bado",
    ],
    daysShort: ["Dom", "Lun", "Mar", "Mi\xe9", "Jue", "Vie", "S\xe1b"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthsShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    today: "Hoy",
    monthsTitle: "Meses",
    clear: "Borrar",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.et = {
    days: [
      "P\xfchap\xe4ev",
      "Esmasp\xe4ev",
      "Teisip\xe4ev",
      "Kolmap\xe4ev",
      "Neljap\xe4ev",
      "Reede",
      "Laup\xe4ev",
    ],
    daysShort: [
      "P\xfchap",
      "Esmasp",
      "Teisip",
      "Kolmap",
      "Neljap",
      "Reede",
      "Laup",
    ],
    daysMin: ["P", "E", "T", "K", "N", "R", "L"],
    months: [
      "Jaanuar",
      "Veebruar",
      "M\xe4rts",
      "Aprill",
      "Mai",
      "Juuni",
      "Juuli",
      "August",
      "September",
      "Oktoober",
      "November",
      "Detsember",
    ],
    monthsShort: [
      "Jaan",
      "Veebr",
      "M\xe4rts",
      "Apr",
      "Mai",
      "Juuni",
      "Juuli",
      "Aug",
      "Sept",
      "Okt",
      "Nov",
      "Dets",
    ],
    today: "T\xe4na",
    clear: "T\xfchjenda",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.eu = {
    days: [
      "Igandea",
      "Astelehena",
      "Asteartea",
      "Asteazkena",
      "Osteguna",
      "Ostirala",
      "Larunbata",
    ],
    daysShort: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"],
    daysMin: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"],
    months: [
      "Urtarrila",
      "Otsaila",
      "Martxoa",
      "Apirila",
      "Maiatza",
      "Ekaina",
      "Uztaila",
      "Abuztua",
      "Iraila",
      "Urria",
      "Azaroa",
      "Abendua",
    ],
    monthsShort: [
      "Urt",
      "Ots",
      "Mar",
      "Api",
      "Mai",
      "Eka",
      "Uzt",
      "Abu",
      "Ira",
      "Urr",
      "Aza",
      "Abe",
    ],
    today: "Gaur",
    monthsTitle: "Hilabeteak",
    clear: "Ezabatu",
    weekStart: 1,
    format: "yyyy/mm/dd",
  }),
  (jQuery.fn.datepicker.dates.fa = {
    days: [
      "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647",
      "\u062f\u0648\u0634\u0646\u0628\u0647",
      "\u0633\u0647\u200c\u0634\u0646\u0628\u0647",
      "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
      "\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647",
      "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647",
    ],
    daysShort: [
      "\u06cc\u06a9",
      "\u062f\u0648",
      "\u0633\u0647",
      "\u0686\u0647\u0627\u0631",
      "\u067e\u0646\u062c",
      "\u062c\u0645\u0639\u0647",
      "\u0634\u0646\u0628\u0647",
      "\u06cc\u06a9",
    ],
    daysMin: [
      "\u06cc",
      "\u062f",
      "\u0633",
      "\u0686",
      "\u067e",
      "\u062c",
      "\u0634",
      "\u06cc",
    ],
    months: [
      "\u0698\u0627\u0646\u0648\u06cc\u0647",
      "\u0641\u0648\u0631\u06cc\u0647",
      "\u0645\u0627\u0631\u0633",
      "\u0622\u0648\u0631\u06cc\u0644",
      "\u0645\u0647",
      "\u0698\u0648\u0626\u0646",
      "\u0698\u0648\u0626\u06cc\u0647",
      "\u0627\u0648\u062a",
      "\u0633\u067e\u062a\u0627\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0628\u0631",
      "\u0646\u0648\u0627\u0645\u0628\u0631",
      "\u062f\u0633\u0627\u0645\u0628\u0631",
    ],
    monthsShort: [
      "\u0698\u0627\u0646",
      "\u0641\u0648\u0631",
      "\u0645\u0627\u0631",
      "\u0622\u0648\u0631",
      "\u0645\u0647",
      "\u0698\u0648\u0646",
      "\u0698\u0648\u06cc",
      "\u0627\u0648\u062a",
      "\u0633\u067e\u062a",
      "\u0627\u06a9\u062a",
      "\u0646\u0648\u0627",
      "\u062f\u0633\u0627",
    ],
    today: "\u0627\u0645\u0631\u0648\u0632",
    clear: "\u067e\u0627\u06a9 \u06a9\u0646",
    weekStart: 1,
    format: "yyyy/mm/dd",
  }),
  (jQuery.fn.datepicker.dates.fi = {
    days: [
      "sunnuntai",
      "maanantai",
      "tiistai",
      "keskiviikko",
      "torstai",
      "perjantai",
      "lauantai",
    ],
    daysShort: ["sun", "maa", "tii", "kes", "tor", "per", "lau"],
    daysMin: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    months: [
      "tammikuu",
      "helmikuu",
      "maaliskuu",
      "huhtikuu",
      "toukokuu",
      "kes\xe4kuu",
      "hein\xe4kuu",
      "elokuu",
      "syyskuu",
      "lokakuu",
      "marraskuu",
      "joulukuu",
    ],
    monthsShort: [
      "tam",
      "hel",
      "maa",
      "huh",
      "tou",
      "kes",
      "hei",
      "elo",
      "syy",
      "lok",
      "mar",
      "jou",
    ],
    today: "t\xe4n\xe4\xe4n",
    clear: "Tyhjenn\xe4",
    weekStart: 1,
    format: "d.m.yyyy",
  }),
  (jQuery.fn.datepicker.dates.fo = {
    days: [
      "Sunnudagur",
      "M\xe1nadagur",
      "T\xfdsdagur",
      "Mikudagur",
      "H\xf3sdagur",
      "Fr\xedggjadagur",
      "Leygardagur",
    ],
    daysShort: ["Sun", "M\xe1n", "T\xfds", "Mik", "H\xf3s", "Fr\xed", "Ley"],
    daysMin: ["Su", "M\xe1", "T\xfd", "Mi", "H\xf3", "Fr", "Le"],
    months: [
      "Januar",
      "Februar",
      "Marts",
      "Apr\xedl",
      "Mei",
      "Juni",
      "Juli",
      "August",
      "Septembur",
      "Oktobur",
      "Novembur",
      "Desembur",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    today: "\xcd Dag",
    clear: "Reinsa",
  }),
  (jQuery.fn.datepicker.dates.fr = {
    days: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    daysMin: ["D", "L", "Ma", "Me", "J", "V", "S"],
    months: [
      "Janvier",
      "F\xe9vrier",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Ao\xfbt",
      "Septembre",
      "Octobre",
      "Novembre",
      "D\xe9cembre",
    ],
    monthsShort: [
      "Jan",
      "F\xe9v",
      "Mar",
      "Avr",
      "Mai",
      "Jui",
      "Jul",
      "Aou",
      "Sep",
      "Oct",
      "Nov",
      "D\xe9c",
    ],
    today: "Aujourd'hui",
    monthsTitle: "Mois",
    clear: "Effacer",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.fr = {
    days: [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
    ],
    daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
    months: [
      "janvier",
      "f\xe9vrier",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "ao\xfbt",
      "septembre",
      "octobre",
      "novembre",
      "d\xe9cembre",
    ],
    monthsShort: [
      "janv.",
      "f\xe9vr.",
      "mars",
      "avril",
      "mai",
      "juin",
      "juil.",
      "ao\xfbt",
      "sept.",
      "oct.",
      "nov.",
      "d\xe9c.",
    ],
    today: "Aujourd'hui",
    monthsTitle: "Mois",
    clear: "Effacer",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.gl = {
    days: [
      "Domingo",
      "Luns",
      "Martes",
      "M\xe9rcores",
      "Xoves",
      "Venres",
      "S\xe1bado",
    ],
    daysShort: ["Dom", "Lun", "Mar", "M\xe9r", "Xov", "Ven", "S\xe1b"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Xo", "Ve", "Sa"],
    months: [
      "Xaneiro",
      "Febreiro",
      "Marzo",
      "Abril",
      "Maio",
      "Xu\xf1o",
      "Xullo",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Decembro",
    ],
    monthsShort: [
      "Xan",
      "Feb",
      "Mar",
      "Abr",
      "Mai",
      "Xun",
      "Xul",
      "Ago",
      "Sep",
      "Out",
      "Nov",
      "Dec",
    ],
    today: "Hoxe",
    clear: "Limpar",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.he = {
    days: [
      "\u05e8\u05d0\u05e9\u05d5\u05df",
      "\u05e9\u05e0\u05d9",
      "\u05e9\u05dc\u05d9\u05e9\u05d9",
      "\u05e8\u05d1\u05d9\u05e2\u05d9",
      "\u05d7\u05de\u05d9\u05e9\u05d9",
      "\u05e9\u05d9\u05e9\u05d9",
      "\u05e9\u05d1\u05ea",
      "\u05e8\u05d0\u05e9\u05d5\u05df",
    ],
    daysShort: [
      "\u05d0",
      "\u05d1",
      "\u05d2",
      "\u05d3",
      "\u05d4",
      "\u05d5",
      "\u05e9",
      "\u05d0",
    ],
    daysMin: [
      "\u05d0",
      "\u05d1",
      "\u05d2",
      "\u05d3",
      "\u05d4",
      "\u05d5",
      "\u05e9",
      "\u05d0",
    ],
    months: [
      "\u05d9\u05e0\u05d5\u05d0\u05e8",
      "\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8",
      "\u05de\u05e8\u05e5",
      "\u05d0\u05e4\u05e8\u05d9\u05dc",
      "\u05de\u05d0\u05d9",
      "\u05d9\u05d5\u05e0\u05d9",
      "\u05d9\u05d5\u05dc\u05d9",
      "\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8",
      "\u05e1\u05e4\u05d8\u05de\u05d1\u05e8",
      "\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8",
      "\u05e0\u05d5\u05d1\u05de\u05d1\u05e8",
      "\u05d3\u05e6\u05de\u05d1\u05e8",
    ],
    monthsShort: [
      "\u05d9\u05e0\u05d5",
      "\u05e4\u05d1\u05e8",
      "\u05de\u05e8\u05e5",
      "\u05d0\u05e4\u05e8",
      "\u05de\u05d0\u05d9",
      "\u05d9\u05d5\u05e0",
      "\u05d9\u05d5\u05dc",
      "\u05d0\u05d5\u05d2",
      "\u05e1\u05e4\u05d8",
      "\u05d0\u05d5\u05e7",
      "\u05e0\u05d5\u05d1",
      "\u05d3\u05e6\u05de",
    ],
    today: "\u05d4\u05d9\u05d5\u05dd",
    rtl: !0,
  }),
  (jQuery.fn.datepicker.dates.hi = {
    days: [
      "\u0930\u0935\u093f\u0935\u093e\u0930",
      "\u0938\u094b\u092e\u0935\u093e\u0930",
      "\u092e\u0902\u0917\u0932\u0935\u093e\u0930",
      "\u092c\u0941\u0927\u0935\u093e\u0930",
      "\u0917\u0941\u0930\u0941\u0935\u093e\u0930",
      "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930",
      "\u0936\u0928\u093f\u0935\u093e\u0930",
    ],
    daysShort: [
      "\u0938\u0942\u0930\u094d\u092f",
      "\u0938\u094b\u092e",
      "\u092e\u0902\u0917\u0932",
      "\u092c\u0941\u0927",
      "\u0917\u0941\u0930\u0941",
      "\u0936\u0941\u0915\u094d\u0930",
      "\u0936\u0928\u093f",
    ],
    daysMin: [
      "\u0930",
      "\u0938\u094b",
      "\u092e\u0902",
      "\u092c\u0941",
      "\u0917\u0941",
      "\u0936\u0941",
      "\u0936",
    ],
    months: [
      "\u091c\u0928\u0935\u0930\u0940",
      "\u092b\u093c\u0930\u0935\u0930\u0940",
      "\u092e\u093e\u0930\u094d\u091a",
      "\u0905\u092a\u094d\u0930\u0948\u0932",
      "\u092e\u0908",
      "\u091c\u0942\u0928",
      "\u091c\u0941\u0932\u093e\u0908",
      "\u0905\u0917\u0938\u094d\u0924",
      "\u0938\u093f\u0924\u092e\u094d\u092c\u0930",
      "\u0905\u0915\u094d\u091f\u0942\u092c\u0930",
      "\u0928\u0935\u0902\u092c\u0930",
      "\u0926\u093f\u0938\u092e\u094d\u092c\u0930",
    ],
    monthsShort: [
      "\u091c\u0928",
      "\u092b\u093c\u0930\u0935\u0930\u0940",
      "\u092e\u093e\u0930\u094d\u091a",
      "\u0905\u092a\u094d\u0930\u0948\u0932",
      "\u092e\u0908",
      "\u091c\u0942\u0928",
      "\u091c\u0941\u0932\u093e\u0908",
      "\u0905\u0917\u0938\u094d\u0924",
      "\u0938\u093f\u0924\u0902",
      "\u0905\u0915\u094d\u091f\u0942\u092c\u0930",
      "\u0928\u0935\u0902",
      "\u0926\u093f\u0938\u092e\u094d\u092c\u0930",
    ],
    today: "\u0906\u091c",
    monthsTitle: "\u092e\u0939\u0940\u0928\u0947",
    clear: "\u0938\u093e\u092b",
    weekStart: 1,
    format: "dd / mm / yyyy",
  }),
  (jQuery.fn.datepicker.dates.hr = {
    days: [
      "Nedjelja",
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "\u010cetvrtak",
      "Petak",
      "Subota",
    ],
    daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
    daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"],
    months: [
      "Sije\u010danj",
      "Velja\u010da",
      "O\u017eujak",
      "Travanj",
      "Svibanj",
      "Lipanj",
      "Srpanj",
      "Kolovoz",
      "Rujan",
      "Listopad",
      "Studeni",
      "Prosinac",
    ],
    monthsShort: [
      "Sij",
      "Velj",
      "O\u017eu",
      "Tra",
      "Svi",
      "Lip",
      "Srp",
      "Kol",
      "Ruj",
      "Lis",
      "Stu",
      "Pro",
    ],
    today: "Danas",
  }),
  (jQuery.fn.datepicker.dates.hu = {
    days: [
      "vas\xe1rnap",
      "h\xe9tf\u0151",
      "kedd",
      "szerda",
      "cs\xfct\xf6rt\xf6k",
      "p\xe9ntek",
      "szombat",
    ],
    daysShort: ["vas", "h\xe9t", "ked", "sze", "cs\xfc", "p\xe9n", "szo"],
    daysMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
    months: [
      "janu\xe1r",
      "febru\xe1r",
      "m\xe1rcius",
      "\xe1prilis",
      "m\xe1jus",
      "j\xfanius",
      "j\xfalius",
      "augusztus",
      "szeptember",
      "okt\xf3ber",
      "november",
      "december",
    ],
    monthsShort: [
      "jan",
      "feb",
      "m\xe1r",
      "\xe1pr",
      "m\xe1j",
      "j\xfan",
      "j\xfal",
      "aug",
      "sze",
      "okt",
      "nov",
      "dec",
    ],
    today: "ma",
    weekStart: 1,
    clear: "t\xf6r\xf6l",
    titleFormat: "yyyy. MM",
    format: "yyyy.mm.dd",
  }),
  (jQuery.fn.datepicker.dates.hy = {
    days: [
      "\u053f\u056b\u0580\u0561\u056f\u056b",
      "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b",
      "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b",
      "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b",
      "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b",
      "\u0548\u0582\u0580\u0562\u0561\u0569",
      "\u0547\u0561\u0562\u0561\u0569",
    ],
    daysShort: [
      "\u053f\u056b\u0580",
      "\u0535\u0580\u056f",
      "\u0535\u0580\u0565",
      "\u0549\u0578\u0580",
      "\u0540\u056b\u0576",
      "\u0548\u0582\u0580\u0562",
      "\u0547\u0561\u0562",
    ],
    daysMin: [
      "\u053f\u056b",
      "\u0535\u056f",
      "\u0535\u0584",
      "\u0549\u0578",
      "\u0540\u056b",
      "\u0548\u0582",
      "\u0547\u0561",
    ],
    months: [
      "\u0540\u0578\u0582\u0576\u057e\u0561\u0580",
      "\u0553\u0565\u057f\u0580\u057e\u0561\u0580",
      "\u0544\u0561\u0580\u057f",
      "\u0531\u057a\u0580\u056b\u056c",
      "\u0544\u0561\u0575\u056b\u057d",
      "\u0540\u0578\u0582\u0576\u056b\u057d",
      "\u0540\u0578\u0582\u056c\u056b\u057d",
      "\u0555\u0563\u0578\u057d\u057f\u0578\u057d",
      "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580",
      "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580",
      "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580",
      "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580",
    ],
    monthsShort: [
      "\u0540\u0576\u057e",
      "\u0553\u0565\u057f",
      "\u0544\u0561\u0580",
      "\u0531\u057a\u0580",
      "\u0544\u0561\u0575",
      "\u0540\u0578\u0582\u0576",
      "\u0540\u0578\u0582\u056c",
      "\u0555\u0563\u057d",
      "\u054d\u0565\u057a",
      "\u0540\u0578\u056f",
      "\u0546\u0578\u0575",
      "\u0534\u0565\u056f",
    ],
    today: "\u0531\u0575\u057d\u0585\u0580",
    clear: "\u054b\u0576\u057b\u0565\u056c",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "\u0531\u0574\u056b\u057d\u0576\u0567\u0580",
  }),
  (jQuery.fn.datepicker.dates.id = {
    days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"],
    months: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ags",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    today: "Hari Ini",
    clear: "Kosongkan",
  }),
  (jQuery.fn.datepicker.dates.is = {
    days: [
      "Sunnudagur",
      "M\xe1nudagur",
      "\xderi\xf0judagur",
      "Mi\xf0vikudagur",
      "Fimmtudagur",
      "F\xf6studagur",
      "Laugardagur",
    ],
    daysShort: ["Sun", "M\xe1n", "\xderi", "Mi\xf0", "Fim", "F\xf6s", "Lau"],
    daysMin: ["Su", "M\xe1", "\xder", "Mi", "Fi", "F\xf6", "La"],
    months: [
      "Jan\xfaar",
      "Febr\xfaar",
      "Mars",
      "Apr\xedl",
      "Ma\xed",
      "J\xfan\xed",
      "J\xfal\xed",
      "\xc1g\xfast",
      "September",
      "Okt\xf3ber",
      "N\xf3vember",
      "Desember",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Ma\xed",
      "J\xfan",
      "J\xfal",
      "\xc1g\xfa",
      "Sep",
      "Okt",
      "N\xf3v",
      "Des",
    ],
    today: "\xcd Dag",
  }),
  (jQuery.fn.datepicker.dates.it = {
    days: [
      "Domenica",
      "Luned\xec",
      "Marted\xec",
      "Mercoled\xec",
      "Gioved\xec",
      "Venerd\xec",
      "Sabato",
    ],
    daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
    months: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ],
    monthsShort: [
      "Gen",
      "Feb",
      "Mar",
      "Apr",
      "Mag",
      "Giu",
      "Lug",
      "Ago",
      "Set",
      "Ott",
      "Nov",
      "Dic",
    ],
    today: "Oggi",
    clear: "Cancella",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.it = {
    days: [
      "Domenica",
      "Luned\xec",
      "Marted\xec",
      "Mercoled\xec",
      "Gioved\xec",
      "Venerd\xec",
      "Sabato",
    ],
    daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
    months: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ],
    monthsShort: [
      "Gen",
      "Feb",
      "Mar",
      "Apr",
      "Mag",
      "Giu",
      "Lug",
      "Ago",
      "Set",
      "Ott",
      "Nov",
      "Dic",
    ],
    today: "Oggi",
    monthsTitle: "Mesi",
    clear: "Cancella",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.ja = {
    days: [
      "\u65e5\u66dc",
      "\u6708\u66dc",
      "\u706b\u66dc",
      "\u6c34\u66dc",
      "\u6728\u66dc",
      "\u91d1\u66dc",
      "\u571f\u66dc",
    ],
    daysShort: [
      "\u65e5",
      "\u6708",
      "\u706b",
      "\u6c34",
      "\u6728",
      "\u91d1",
      "\u571f",
    ],
    daysMin: [
      "\u65e5",
      "\u6708",
      "\u706b",
      "\u6c34",
      "\u6728",
      "\u91d1",
      "\u571f",
    ],
    months: [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708",
    ],
    monthsShort: [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708",
    ],
    today: "\u4eca\u65e5",
    format: "yyyy/mm/dd",
    titleFormat: "yyyy\u5e74mm\u6708",
    clear: "\u30af\u30ea\u30a2",
  }),
  (jQuery.fn.datepicker.dates.ka = {
    days: [
      "\u10d9\u10d5\u10d8\u10e0\u10d0",
      "\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
      "\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
      "\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
      "\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
      "\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8",
      "\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8",
    ],
    daysShort: [
      "\u10d9\u10d5\u10d8",
      "\u10dd\u10e0\u10e8",
      "\u10e1\u10d0\u10db",
      "\u10dd\u10d7\u10ee",
      "\u10ee\u10e3\u10d7",
      "\u10de\u10d0\u10e0",
      "\u10e8\u10d0\u10d1",
    ],
    daysMin: [
      "\u10d9\u10d5",
      "\u10dd\u10e0",
      "\u10e1\u10d0",
      "\u10dd\u10d7",
      "\u10ee\u10e3",
      "\u10de\u10d0",
      "\u10e8\u10d0",
    ],
    months: [
      "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8",
      "\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8",
      "\u10db\u10d0\u10e0\u10e2\u10d8",
      "\u10d0\u10de\u10e0\u10d8\u10da\u10d8",
      "\u10db\u10d0\u10d8\u10e1\u10d8",
      "\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8",
      "\u10d8\u10d5\u10da\u10d8\u10e1\u10d8",
      "\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd",
      "\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8",
      "\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8",
      "\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8",
      "\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8",
    ],
    monthsShort: [
      "\u10d8\u10d0\u10dc",
      "\u10d7\u10d4\u10d1",
      "\u10db\u10d0\u10e0",
      "\u10d0\u10de\u10e0",
      "\u10db\u10d0\u10d8",
      "\u10d8\u10d5\u10dc",
      "\u10d8\u10d5\u10da",
      "\u10d0\u10d2\u10d5",
      "\u10e1\u10d4\u10e5",
      "\u10dd\u10e5\u10e2",
      "\u10dc\u10dd\u10d4",
      "\u10d3\u10d4\u10d9",
    ],
    today: "\u10d3\u10e6\u10d4\u10e1",
    clear: "\u10d2\u10d0\u10e1\u10e3\u10e4\u10d7\u10d0\u10d5\u10d4\u10d1\u10d0",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (function (e) {
    (e.fn.datepicker.dates.kh = {
      days: [
        "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799",
        "\u1785\u1793\u17d2\u1791",
        "\u17a2\u1784\u17d2\u1782\u17b6\u179a",
        "\u1796\u17bb\u1792",
        "\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd",
        "\u179f\u17bb\u1780\u17d2\u179a",
        "\u179f\u17c5\u179a\u17cd",
      ],
      daysShort: [
        "\u17a2\u17b6.\u1791\u17b7",
        "\u1785\u1793\u17d2\u1791",
        "\u17a2\u1784\u17d2\u1782\u17b6\u179a",
        "\u1796\u17bb\u1792",
        "\u1796\u17d2\u179a.\u17a0",
        "\u179f\u17bb\u1780\u17d2\u179a",
        "\u179f\u17c5\u179a\u17cd",
      ],
      daysMin: [
        "\u17a2\u17b6.\u1791\u17b7",
        "\u1785\u1793\u17d2\u1791",
        "\u17a2\u1784\u17d2\u1782\u17b6\u179a",
        "\u1796\u17bb\u1792",
        "\u1796\u17d2\u179a.\u17a0",
        "\u179f\u17bb\u1780\u17d2\u179a",
        "\u179f\u17c5\u179a\u17cd",
      ],
      months: [
        "\u1798\u1780\u179a\u17b6",
        "\u1780\u17bb\u1798\u17d2\u1797\u17c7",
        "\u1798\u17b7\u1793\u17b6",
        "\u1798\u17c1\u179f\u17b6",
        "\u17a7\u179f\u1797\u17b6",
        "\u1798\u17b7\u1790\u17bb\u1793\u17b6",
        "\u1780\u1780\u17d2\u1780\u178a\u17b6",
        "\u179f\u17b8\u17a0\u17b6",
        "\u1780\u1789\u17d2\u1789\u17b6",
        "\u178f\u17bb\u179b\u17b6",
        "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",
        "\u1792\u17d2\u1793\u17bc",
      ],
      monthsShort: [
        "\u1798\u1780\u179a\u17b6",
        "\u1780\u17bb\u1798\u17d2\u1797\u17c7",
        "\u1798\u17b7\u1793\u17b6",
        "\u1798\u17c1\u179f\u17b6",
        "\u17a7\u179f\u1797\u17b6",
        "\u1798\u17b7\u1790\u17bb\u1793\u17b6",
        "\u1780\u1780\u17d2\u1780\u178a\u17b6",
        "\u179f\u17b8\u17a0\u17b6",
        "\u1780\u1789\u17d2\u1789\u17b6",
        "\u178f\u17bb\u179b\u17b6",
        "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",
        "\u1792\u17d2\u1793\u17bc",
      ],
      today: "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7",
      clear: "\u179f\u17c6\u17a2\u17b6\u178f",
    }),
      e.fn.datepicker.deprecated(
        'The language code "kh" is deprecated and will be removed in 2.0. For Khmer support use "km" instead.'
      );
  })(jQuery),
  (jQuery.fn.datepicker.dates.kk = {
    days: [
      "\u0416\u0435\u043a\u0441\u0435\u043d\u0431\u0456",
      "\u0414\u04af\u0439\u0441\u0435\u043d\u0431\u0456",
      "\u0421\u0435\u0439\u0441\u0435\u043d\u0431\u0456",
      "\u0421\u04d9\u0440\u0441\u0435\u043d\u0431\u0456",
      "\u0411\u0435\u0439\u0441\u0435\u043d\u0431\u0456",
      "\u0416\u04b1\u043c\u0430",
      "\u0421\u0435\u043d\u0431\u0456",
    ],
    daysShort: [
      "\u0416\u0435\u043a",
      "\u0414\u04af\u0439",
      "\u0421\u0435\u0439",
      "\u0421\u04d9\u0440",
      "\u0411\u0435\u0439",
      "\u0416\u04b1\u043c",
      "\u0421\u0435\u043d",
    ],
    daysMin: [
      "\u0416\u043a",
      "\u0414\u0441",
      "\u0421\u0441",
      "\u0421\u0440",
      "\u0411\u0441",
      "\u0416\u043c",
      "\u0421\u043d",
    ],
    months: [
      "\u049a\u0430\u04a3\u0442\u0430\u0440",
      "\u0410\u049b\u043f\u0430\u043d",
      "\u041d\u0430\u0443\u0440\u044b\u0437",
      "\u0421\u04d9\u0443\u0456\u0440",
      "\u041c\u0430\u043c\u044b\u0440",
      "\u041c\u0430\u0443\u0441\u044b\u043c",
      "\u0428\u0456\u043b\u0434\u0435",
      "\u0422\u0430\u043c\u044b\u0437",
      "\u049a\u044b\u0440\u043a\u04af\u0439\u0435\u043a",
      "\u049a\u0430\u0437\u0430\u043d",
      "\u049a\u0430\u0440\u0430\u0448\u0430",
      "\u0416\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d",
    ],
    monthsShort: [
      "\u049a\u0430\u04a3",
      "\u0410\u049b\u043f",
      "\u041d\u0430\u0443",
      "\u0421\u04d9\u0443",
      "\u041c\u0430\u043c",
      "\u041c\u0430\u0443",
      "\u0428\u0456\u043b",
      "\u0422\u0430\u043c",
      "\u049a\u044b\u0440",
      "\u049a\u0430\u0437",
      "\u049a\u0430\u0440",
      "\u0416\u0435\u043b",
    ],
    today: "\u0411\u04af\u0433\u0456\u043d",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates.km = {
    days: [
      "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799",
      "\u1785\u1793\u17d2\u1791",
      "\u17a2\u1784\u17d2\u1782\u17b6\u179a",
      "\u1796\u17bb\u1792",
      "\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd",
      "\u179f\u17bb\u1780\u17d2\u179a",
      "\u179f\u17c5\u179a\u17cd",
    ],
    daysShort: [
      "\u17a2\u17b6.\u1791\u17b7",
      "\u1785\u1793\u17d2\u1791",
      "\u17a2\u1784\u17d2\u1782\u17b6\u179a",
      "\u1796\u17bb\u1792",
      "\u1796\u17d2\u179a.\u17a0",
      "\u179f\u17bb\u1780\u17d2\u179a",
      "\u179f\u17c5\u179a\u17cd",
    ],
    daysMin: [
      "\u17a2\u17b6.\u1791\u17b7",
      "\u1785\u1793\u17d2\u1791",
      "\u17a2\u1784\u17d2\u1782\u17b6\u179a",
      "\u1796\u17bb\u1792",
      "\u1796\u17d2\u179a.\u17a0",
      "\u179f\u17bb\u1780\u17d2\u179a",
      "\u179f\u17c5\u179a\u17cd",
    ],
    months: [
      "\u1798\u1780\u179a\u17b6",
      "\u1780\u17bb\u1798\u17d2\u1797\u17c7",
      "\u1798\u17b7\u1793\u17b6",
      "\u1798\u17c1\u179f\u17b6",
      "\u17a7\u179f\u1797\u17b6",
      "\u1798\u17b7\u1790\u17bb\u1793\u17b6",
      "\u1780\u1780\u17d2\u1780\u178a\u17b6",
      "\u179f\u17b8\u17a0\u17b6",
      "\u1780\u1789\u17d2\u1789\u17b6",
      "\u178f\u17bb\u179b\u17b6",
      "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",
      "\u1792\u17d2\u1793\u17bc",
    ],
    monthsShort: [
      "\u1798\u1780\u179a\u17b6",
      "\u1780\u17bb\u1798\u17d2\u1797\u17c7",
      "\u1798\u17b7\u1793\u17b6",
      "\u1798\u17c1\u179f\u17b6",
      "\u17a7\u179f\u1797\u17b6",
      "\u1798\u17b7\u1790\u17bb\u1793\u17b6",
      "\u1780\u1780\u17d2\u1780\u178a\u17b6",
      "\u179f\u17b8\u17a0\u17b6",
      "\u1780\u1789\u17d2\u1789\u17b6",
      "\u178f\u17bb\u179b\u17b6",
      "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",
      "\u1792\u17d2\u1793\u17bc",
    ],
    today: "\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7",
    clear: "\u179f\u17c6\u17a2\u17b6\u178f",
  }),
  (jQuery.fn.datepicker.dates.ko = {
    days: [
      "\uc77c\uc694\uc77c",
      "\uc6d4\uc694\uc77c",
      "\ud654\uc694\uc77c",
      "\uc218\uc694\uc77c",
      "\ubaa9\uc694\uc77c",
      "\uae08\uc694\uc77c",
      "\ud1a0\uc694\uc77c",
    ],
    daysShort: [
      "\uc77c",
      "\uc6d4",
      "\ud654",
      "\uc218",
      "\ubaa9",
      "\uae08",
      "\ud1a0",
    ],
    daysMin: [
      "\uc77c",
      "\uc6d4",
      "\ud654",
      "\uc218",
      "\ubaa9",
      "\uae08",
      "\ud1a0",
    ],
    months: [
      "1\uc6d4",
      "2\uc6d4",
      "3\uc6d4",
      "4\uc6d4",
      "5\uc6d4",
      "6\uc6d4",
      "7\uc6d4",
      "8\uc6d4",
      "9\uc6d4",
      "10\uc6d4",
      "11\uc6d4",
      "12\uc6d4",
    ],
    monthsShort: [
      "1\uc6d4",
      "2\uc6d4",
      "3\uc6d4",
      "4\uc6d4",
      "5\uc6d4",
      "6\uc6d4",
      "7\uc6d4",
      "8\uc6d4",
      "9\uc6d4",
      "10\uc6d4",
      "11\uc6d4",
      "12\uc6d4",
    ],
    today: "\uc624\ub298",
    clear: "\uc0ad\uc81c",
    format: "yyyy-mm-dd",
    titleFormat: "yyyy\ub144mm\uc6d4",
    weekStart: 0,
  }),
  (function (e) {
    (e.fn.datepicker.dates.kr = {
      days: [
        "\uc77c\uc694\uc77c",
        "\uc6d4\uc694\uc77c",
        "\ud654\uc694\uc77c",
        "\uc218\uc694\uc77c",
        "\ubaa9\uc694\uc77c",
        "\uae08\uc694\uc77c",
        "\ud1a0\uc694\uc77c",
      ],
      daysShort: [
        "\uc77c",
        "\uc6d4",
        "\ud654",
        "\uc218",
        "\ubaa9",
        "\uae08",
        "\ud1a0",
      ],
      daysMin: [
        "\uc77c",
        "\uc6d4",
        "\ud654",
        "\uc218",
        "\ubaa9",
        "\uae08",
        "\ud1a0",
      ],
      months: [
        "1\uc6d4",
        "2\uc6d4",
        "3\uc6d4",
        "4\uc6d4",
        "5\uc6d4",
        "6\uc6d4",
        "7\uc6d4",
        "8\uc6d4",
        "9\uc6d4",
        "10\uc6d4",
        "11\uc6d4",
        "12\uc6d4",
      ],
      monthsShort: [
        "1\uc6d4",
        "2\uc6d4",
        "3\uc6d4",
        "4\uc6d4",
        "5\uc6d4",
        "6\uc6d4",
        "7\uc6d4",
        "8\uc6d4",
        "9\uc6d4",
        "10\uc6d4",
        "11\uc6d4",
        "12\uc6d4",
      ],
    }),
      e.fn.datepicker.deprecated(
        'The language code "kr" is deprecated and will be removed in 2.0. For korean support use "ko" instead.'
      );
  })(jQuery),
  (jQuery.fn.datepicker.dates.lt = {
    days: [
      "Sekmadienis",
      "Pirmadienis",
      "Antradienis",
      "Tre\u010diadienis",
      "Ketvirtadienis",
      "Penktadienis",
      "\u0160e\u0161tadienis",
    ],
    daysShort: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"],
    daysMin: ["Sk", "Pr", "An", "Tr", "Ke", "Pn", "\u0160t"],
    months: [
      "Sausis",
      "Vasaris",
      "Kovas",
      "Balandis",
      "Gegu\u017e\u0117",
      "Bir\u017eelis",
      "Liepa",
      "Rugpj\u016btis",
      "Rugs\u0117jis",
      "Spalis",
      "Lapkritis",
      "Gruodis",
    ],
    monthsShort: [
      "Sau",
      "Vas",
      "Kov",
      "Bal",
      "Geg",
      "Bir",
      "Lie",
      "Rugp",
      "Rugs",
      "Spa",
      "Lap",
      "Gru",
    ],
    today: "\u0160iandien",
    monthsTitle: "M\u0117nesiai",
    clear: "I\u0161valyti",
    weekStart: 1,
    format: "yyyy-mm-dd",
  }),
  (jQuery.fn.datepicker.dates.lv = {
    days: [
      "Sv\u0113tdiena",
      "Pirmdiena",
      "Otrdiena",
      "Tre\u0161diena",
      "Ceturtdiena",
      "Piektdiena",
      "Sestdiena",
    ],
    daysShort: ["Sv", "P", "O", "T", "C", "Pk", "S"],
    daysMin: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
    months: [
      "Janv\u0101ris",
      "Febru\u0101ris",
      "Marts",
      "Apr\u012blis",
      "Maijs",
      "J\u016bnijs",
      "J\u016blijs",
      "Augusts",
      "Septembris",
      "Oktobris",
      "Novembris",
      "Decembris",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "J\u016bn",
      "J\u016bl",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    monthsTitle: "M\u0113ne\u0161i",
    today: "\u0160odien",
    clear: "Nodz\u0113st",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates.me = {
    days: [
      "Nedjelja",
      "Ponedjeljak",
      "Utorak",
      "Srijeda",
      "\u010cetvrtak",
      "Petak",
      "Subota",
    ],
    daysShort: ["Ned", "Pon", "Uto", "Sri", "\u010cet", "Pet", "Sub"],
    daysMin: ["Ne", "Po", "Ut", "Sr", "\u010ce", "Pe", "Su"],
    months: [
      "Januar",
      "Februar",
      "Mart",
      "April",
      "Maj",
      "Jun",
      "Jul",
      "Avgust",
      "Septembar",
      "Oktobar",
      "Novembar",
      "Decembar",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Avg",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    today: "Danas",
    weekStart: 1,
    clear: "Izbri\u0161i",
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.mk = {
    days: [
      "\u041d\u0435\u0434\u0435\u043b\u0430",
      "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a",
      "\u0412\u0442\u043e\u0440\u043d\u0438\u043a",
      "\u0421\u0440\u0435\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u0440\u0442\u043e\u043a",
      "\u041f\u0435\u0442\u043e\u043a",
      "\u0421\u0430\u0431\u043e\u0442\u0430",
    ],
    daysShort: [
      "\u041d\u0435\u0434",
      "\u041f\u043e\u043d",
      "\u0412\u0442\u043e",
      "\u0421\u0440\u0435",
      "\u0427\u0435\u0442",
      "\u041f\u0435\u0442",
      "\u0421\u0430\u0431",
    ],
    daysMin: [
      "\u041d\u0435",
      "\u041f\u043e",
      "\u0412\u0442",
      "\u0421\u0440",
      "\u0427\u0435",
      "\u041f\u0435",
      "\u0421\u0430",
    ],
    months: [
      "\u0408\u0430\u043d\u0443\u0430\u0440\u0438",
      "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0438\u043b",
      "\u041c\u0430\u0458",
      "\u0408\u0443\u043d\u0438",
      "\u0408\u0443\u043b\u0438",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438",
      "\u041e\u043a\u0442\u043e\u043c\u0432\u0440\u0438",
      "\u041d\u043e\u0435\u043c\u0432\u0440\u0438",
      "\u0414\u0435\u043a\u0435\u043c\u0432\u0440\u0438",
    ],
    monthsShort: [
      "\u0408\u0430\u043d",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0458",
      "\u0408\u0443\u043d",
      "\u0408\u0443\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043f",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u0435",
      "\u0414\u0435\u043a",
    ],
    today: "\u0414\u0435\u043d\u0435\u0441",
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.mn = {
    days: [
      "\u041d\u044f\u043c",
      "\u0414\u0430\u0432\u0430\u0430",
      "\u041c\u044f\u0433\u043c\u0430\u0440",
      "\u041b\u0445\u0430\u0433\u0432\u0430",
      "\u041f\u04af\u0440\u044d\u0432",
      "\u0411\u0430\u0430\u0441\u0430\u043d",
      "\u0411\u044f\u043c\u0431\u0430",
    ],
    daysShort: [
      "\u041d\u044f\u043c",
      "\u0414\u0430\u0432",
      "\u041c\u044f\u0433",
      "\u041b\u0445\u0430",
      "\u041f\u04af\u0440",
      "\u0411\u0430\u0430",
      "\u0411\u044f\u043c",
    ],
    daysMin: [
      "\u041d\u044f",
      "\u0414\u0430",
      "\u041c\u044f",
      "\u041b\u0445",
      "\u041f\u04af",
      "\u0411\u0430",
      "\u0411\u044f",
    ],
    months: [
      "\u0425\u0443\u043b\u0433\u0430\u043d\u0430",
      "\u04ae\u0445\u044d\u0440",
      "\u0411\u0430\u0440",
      "\u0422\u0443\u0443\u043b\u0430\u0439",
      "\u041b\u0443\u0443",
      "\u041c\u043e\u0433\u043e\u0439",
      "\u041c\u043e\u0440\u044c",
      "\u0425\u043e\u043d\u044c",
      "\u0411\u0438\u0447",
      "\u0422\u0430\u0445\u0438\u0430",
      "\u041d\u043e\u0445\u043e\u0439",
      "\u0413\u0430\u0445\u0430\u0439",
    ],
    monthsShort: [
      "\u0425\u0443\u043b",
      "\u04ae\u0445\u044d",
      "\u0411\u0430\u0440",
      "\u0422\u0443\u0443",
      "\u041b\u0443\u0443",
      "\u041c\u043e\u0433",
      "\u041c\u043e\u0440",
      "\u0425\u043e\u043d",
      "\u0411\u0438\u0447",
      "\u0422\u0430\u0445",
      "\u041d\u043e\u0445",
      "\u0413\u0430\u0445",
    ],
    today: "\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440",
    clear: "\u0422\u043e\u0434\u043e\u0440\u0445\u043e\u0439",
    format: "yyyy.mm.dd",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates.ms = {
    days: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    daysShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
    daysMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
    months: [
      "Januari",
      "Februari",
      "Mac",
      "April",
      "Mei",
      "Jun",
      "Julai",
      "Ogos",
      "September",
      "Oktober",
      "November",
      "Disember",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ogo",
      "Sep",
      "Okt",
      "Nov",
      "Dis",
    ],
    today: "Hari Ini",
    clear: "Bersihkan",
  }),
  (jQuery.fn.datepicker.dates.nb = {
    days: [
      "S\xf8ndag",
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "L\xf8rdag",
    ],
    daysShort: ["S\xf8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xf8r"],
    daysMin: ["S\xf8", "Ma", "Ti", "On", "To", "Fr", "L\xf8"],
    months: [
      "Januar",
      "Februar",
      "Mars",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    today: "I Dag",
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates["nl-BE"] = {
    days: [
      "zondag",
      "maandag",
      "dinsdag",
      "woensdag",
      "donderdag",
      "vrijdag",
      "zaterdag",
    ],
    daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    months: [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december",
    ],
    monthsShort: [
      "jan",
      "feb",
      "mrt",
      "apr",
      "mei",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec",
    ],
    today: "Vandaag",
    monthsTitle: "Maanden",
    clear: "Leegmaken",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.nl = {
    days: [
      "zondag",
      "maandag",
      "dinsdag",
      "woensdag",
      "donderdag",
      "vrijdag",
      "zaterdag",
    ],
    daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    months: [
      "januari",
      "februari",
      "maart",
      "april",
      "mei",
      "juni",
      "juli",
      "augustus",
      "september",
      "oktober",
      "november",
      "december",
    ],
    monthsShort: [
      "jan",
      "feb",
      "mrt",
      "apr",
      "mei",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec",
    ],
    today: "Vandaag",
    monthsTitle: "Maanden",
    clear: "Wissen",
    weekStart: 1,
    format: "dd-mm-yyyy",
  }),
  (jQuery.fn.datepicker.dates.no = {
    days: [
      "s\xf8ndag",
      "mandag",
      "tirsdag",
      "onsdag",
      "torsdag",
      "fredag",
      "l\xf8rdag",
    ],
    daysShort: ["s\xf8n", "man", "tir", "ons", "tor", "fre", "l\xf8r"],
    daysMin: ["s\xf8", "ma", "ti", "on", "to", "fr", "l\xf8"],
    months: [
      "januar",
      "februar",
      "mars",
      "april",
      "mai",
      "juni",
      "juli",
      "august",
      "september",
      "oktober",
      "november",
      "desember",
    ],
    monthsShort: [
      "jan",
      "feb",
      "mar",
      "apr",
      "mai",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "des",
    ],
    today: "i dag",
    monthsTitle: "M\xe5neder",
    clear: "Nullstill",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.oc = {
    days: [
      "Dimenge",
      "Diluns",
      "Dimars",
      "Dim\xe8cres",
      "Dij\xf2us",
      "Divendres",
      "Dissabte",
    ],
    daysShort: ["Dim", "Dil", "Dmr", "Dmc", "Dij", "Div", "Dis"],
    daysMin: ["dg", "dl", "dr", "dc", "dj", "dv", "ds"],
    months: [
      "Geni\xe8r",
      "Febri\xe8r",
      "Mar\xe7",
      "Abrial",
      "Mai",
      "Junh",
      "Julhet",
      "Agost",
      "Setembre",
      "Octobre",
      "Novembre",
      "Decembre",
    ],
    monthsShort: [
      "Gen",
      "Feb",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "U\xe8i",
    monthsTitle: "Meses",
    clear: "Escafar",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.pl = {
    days: [
      "Niedziela",
      "Poniedzia\u0142ek",
      "Wtorek",
      "\u015aroda",
      "Czwartek",
      "Pi\u0105tek",
      "Sobota",
    ],
    daysShort: [
      "Niedz.",
      "Pon.",
      "Wt.",
      "\u015ar.",
      "Czw.",
      "Pi\u0105t.",
      "Sob.",
    ],
    daysMin: ["Ndz.", "Pn.", "Wt.", "\u015ar.", "Czw.", "Pt.", "Sob."],
    months: [
      "Stycze\u0144",
      "Luty",
      "Marzec",
      "Kwiecie\u0144",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpie\u0144",
      "Wrzesie\u0144",
      "Pa\u017adziernik",
      "Listopad",
      "Grudzie\u0144",
    ],
    monthsShort: [
      "Sty.",
      "Lut.",
      "Mar.",
      "Kwi.",
      "Maj",
      "Cze.",
      "Lip.",
      "Sie.",
      "Wrz.",
      "Pa\u017a.",
      "Lis.",
      "Gru.",
    ],
    today: "Dzisiaj",
    weekStart: 1,
    clear: "Wyczy\u015b\u0107",
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates["pt-BR"] = {
    days: [
      "Domingo",
      "Segunda",
      "Ter\xe7a",
      "Quarta",
      "Quinta",
      "Sexta",
      "S\xe1bado",
    ],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    months: [
      "Janeiro",
      "Fevereiro",
      "Mar\xe7o",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    today: "Hoje",
    monthsTitle: "Meses",
    clear: "Limpar",
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.pt = {
    days: [
      "Domingo",
      "Segunda",
      "Ter\xe7a",
      "Quarta",
      "Quinta",
      "Sexta",
      "S\xe1bado",
    ],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xe1b"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    months: [
      "Janeiro",
      "Fevereiro",
      "Mar\xe7o",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthsShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    today: "Hoje",
    monthsTitle: "Meses",
    clear: "Limpar",
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.ro = {
    days: [
      "Duminic\u0103",
      "Luni",
      "Mar\u0163i",
      "Miercuri",
      "Joi",
      "Vineri",
      "S\xe2mb\u0103t\u0103",
    ],
    daysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xe2m"],
    daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "S\xe2"],
    months: [
      "Ianuarie",
      "Februarie",
      "Martie",
      "Aprilie",
      "Mai",
      "Iunie",
      "Iulie",
      "August",
      "Septembrie",
      "Octombrie",
      "Noiembrie",
      "Decembrie",
    ],
    monthsShort: [
      "Ian",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Iun",
      "Iul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    today: "Ast\u0103zi",
    clear: "\u0218terge",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (function (e) {
    (e.fn.datepicker.dates["rs-latin"] = {
      days: [
        "Nedelja",
        "Ponedeljak",
        "Utorak",
        "Sreda",
        "\u010cetvrtak",
        "Petak",
        "Subota",
      ],
      daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"],
      daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"],
      months: [
        "Januar",
        "Februar",
        "Mart",
        "April",
        "Maj",
        "Jun",
        "Jul",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Okt",
        "Nov",
        "Dec",
      ],
      today: "Danas",
      weekStart: 1,
      format: "dd.mm.yyyy",
    }),
      e.fn.datepicker.deprecated(
        'This language code "rs-latin" is deprecated (invalid serbian language code) and will be removed in 2.0. For Serbian latin support use "sr-latin" instead.'
      );
  })(jQuery),
  (function (e) {
    (e.fn.datepicker.dates.rs = {
      days: [
        "\u041d\u0435\u0434\u0435\u0459\u0430",
        "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a",
        "\u0423\u0442\u043e\u0440\u0430\u043a",
        "\u0421\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a",
        "\u041f\u0435\u0442\u0430\u043a",
        "\u0421\u0443\u0431\u043e\u0442\u0430",
      ],
      daysShort: [
        "\u041d\u0435\u0434",
        "\u041f\u043e\u043d",
        "\u0423\u0442\u043e",
        "\u0421\u0440\u0435",
        "\u0427\u0435\u0442",
        "\u041f\u0435\u0442",
        "\u0421\u0443\u0431",
      ],
      daysMin: [
        "\u041d",
        "\u041f\u043e",
        "\u0423",
        "\u0421\u0440",
        "\u0427",
        "\u041f\u0435",
        "\u0421\u0443",
      ],
      months: [
        "\u0408\u0430\u043d\u0443\u0430\u0440",
        "\u0424\u0435\u0431\u0440\u0443\u0430\u0440",
        "\u041c\u0430\u0440\u0442",
        "\u0410\u043f\u0440\u0438\u043b",
        "\u041c\u0430\u0458",
        "\u0408\u0443\u043d",
        "\u0408\u0443\u043b",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440",
        "\u041e\u043a\u0442\u043e\u0431\u0430\u0440",
        "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440",
        "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440",
      ],
      monthsShort: [
        "\u0408\u0430\u043d",
        "\u0424\u0435\u0431",
        "\u041c\u0430\u0440",
        "\u0410\u043f\u0440",
        "\u041c\u0430\u0458",
        "\u0408\u0443\u043d",
        "\u0408\u0443\u043b",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043f",
        "\u041e\u043a\u0442",
        "\u041d\u043e\u0432",
        "\u0414\u0435\u0446",
      ],
      today: "\u0414\u0430\u043d\u0430\u0441",
      weekStart: 1,
      format: "dd.mm.yyyy",
    }),
      e.fn.datepicker.deprecated(
        'This language code "rs" is deprecated (invalid serbian language code) and will be removed in 2.0. For Serbian support use "sr" instead.'
      );
  })(jQuery),
  (jQuery.fn.datepicker.dates.ru = {
    days: [
      "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",
      "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",
      "\u0412\u0442\u043e\u0440\u043d\u0438\u043a",
      "\u0421\u0440\u0435\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
      "\u041f\u044f\u0442\u043d\u0438\u0446\u0430",
      "\u0421\u0443\u0431\u0431\u043e\u0442\u0430",
    ],
    daysShort: [
      "\u0412\u0441\u043a",
      "\u041f\u043d\u0434",
      "\u0412\u0442\u0440",
      "\u0421\u0440\u0434",
      "\u0427\u0442\u0432",
      "\u041f\u0442\u043d",
      "\u0421\u0443\u0431",
    ],
    daysMin: [
      "\u0412\u0441",
      "\u041f\u043d",
      "\u0412\u0442",
      "\u0421\u0440",
      "\u0427\u0442",
      "\u041f\u0442",
      "\u0421\u0431",
    ],
    months: [
      "\u042f\u043d\u0432\u0430\u0440\u044c",
      "\u0424\u0435\u0432\u0440\u0430\u043b\u044c",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0435\u043b\u044c",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d\u044c",
      "\u0418\u044e\u043b\u044c",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
      "\u041e\u043a\u0442\u044f\u0431\u0440\u044c",
      "\u041d\u043e\u044f\u0431\u0440\u044c",
      "\u0414\u0435\u043a\u0430\u0431\u0440\u044c",
    ],
    monthsShort: [
      "\u042f\u043d\u0432",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d",
      "\u0418\u044e\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043d",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u044f",
      "\u0414\u0435\u043a",
    ],
    today: "\u0421\u0435\u0433\u043e\u0434\u043d\u044f",
    clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "\u041c\u0435\u0441\u044f\u0446\u044b",
  }),
  (jQuery.fn.datepicker.dates.si = {
    days: [
      "\u0d89\u0dbb\u0dd2\u0daf\u0dcf",
      "\u0dc3\u0db3\u0dd4\u0daf\u0dcf",
      "\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf",
      "\u0db6\u0daf\u0dcf\u0daf\u0dcf",
      "\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf",
      "\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf",
      "\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf",
    ],
    daysShort: [
      "\u0d89\u0dbb\u0dd2",
      "\u0dc3\u0db3\u0dd4",
      "\u0d85\u0d9f",
      "\u0db6\u0daf\u0dcf",
      "\u0db6\u0dca\u200d\u0dbb\u0dc4",
      "\u0dc3\u0dd2\u0d9a\u0dd4",
      "\u0dc3\u0dd9\u0db1",
    ],
    daysMin: [
      "\u0d89",
      "\u0dc3",
      "\u0d85",
      "\u0db6",
      "\u0db6\u0dca\u200d\u0dbb",
      "\u0dc3\u0dd2",
      "\u0dc3\u0dd9",
    ],
    months: [
      "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2",
      "\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2",
      "\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4",
      "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca",
      "\u0db8\u0dd0\u0dba\u0dd2",
      "\u0da2\u0dd4\u0db1\u0dd2",
      "\u0da2\u0dd6\u0dbd\u0dd2",
      "\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4",
      "\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
      "\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca",
      "\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
      "\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
    ],
    monthsShort: [
      "\u0da2\u0db1",
      "\u0db4\u0dd9\u0db6",
      "\u0db8\u0dcf\u0dbb\u0dca",
      "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda",
      "\u0db8\u0dd0\u0dba\u0dd2",
      "\u0da2\u0dd4\u0db1\u0dd2",
      "\u0da2\u0dd6\u0dbd\u0dd2",
      "\u0d85\u0d9c\u0ddd",
      "\u0dc3\u0dd0\u0db4\u0dca",
      "\u0d94\u0d9a\u0dca",
      "\u0db1\u0ddc\u0dc0\u0dd0",
      "\u0daf\u0dd9\u0dc3\u0dd0",
    ],
    today: "\u0d85\u0daf",
    monthsTitle: "\u0db8\u0dcf\u0dc3",
    clear: "\u0db8\u0d9a\u0db1\u0dca\u0db1",
    weekStart: 0,
    format: "yyyy-mm-dd",
  }),
  (jQuery.fn.datepicker.dates.sk = {
    days: [
      "Nede\u013ea",
      "Pondelok",
      "Utorok",
      "Streda",
      "\u0160tvrtok",
      "Piatok",
      "Sobota",
    ],
    daysShort: ["Ned", "Pon", "Uto", "Str", "\u0160tv", "Pia", "Sob"],
    daysMin: ["Ne", "Po", "Ut", "St", "\u0160t", "Pia", "So"],
    months: [
      "Janu\xe1r",
      "Febru\xe1r",
      "Marec",
      "Apr\xedl",
      "M\xe1j",
      "J\xfan",
      "J\xfal",
      "August",
      "September",
      "Okt\xf3ber",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "M\xe1j",
      "J\xfan",
      "J\xfal",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    today: "Dnes",
    clear: "Vymaza\u0165",
    weekStart: 1,
    format: "d.m.yyyy",
  }),
  (jQuery.fn.datepicker.dates.sl = {
    days: [
      "Nedelja",
      "Ponedeljek",
      "Torek",
      "Sreda",
      "\u010cetrtek",
      "Petek",
      "Sobota",
    ],
    daysShort: ["Ned", "Pon", "Tor", "Sre", "\u010cet", "Pet", "Sob"],
    daysMin: ["Ne", "Po", "To", "Sr", "\u010ce", "Pe", "So"],
    months: [
      "Januar",
      "Februar",
      "Marec",
      "April",
      "Maj",
      "Junij",
      "Julij",
      "Avgust",
      "September",
      "Oktober",
      "November",
      "December",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Avg",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    today: "Danes",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates.sq = {
    days: [
      "E Diel",
      "E H\xebn\xeb",
      "E Mart\u0113",
      "E M\xebrkur\xeb",
      "E Enjte",
      "E Premte",
      "E Shtun\xeb",
    ],
    daysShort: ["Die", "H\xebn", "Mar", "M\xebr", "Enj", "Pre", "Shtu"],
    daysMin: ["Di", "H\xeb", "Ma", "M\xeb", "En", "Pr", "Sht"],
    months: [
      "Janar",
      "Shkurt",
      "Mars",
      "Prill",
      "Maj",
      "Qershor",
      "Korrik",
      "Gusht",
      "Shtator",
      "Tetor",
      "N\xebntor",
      "Dhjetor",
    ],
    monthsShort: [
      "Jan",
      "Shk",
      "Mar",
      "Pri",
      "Maj",
      "Qer",
      "Korr",
      "Gu",
      "Sht",
      "Tet",
      "N\xebn",
      "Dhjet",
    ],
    monthsTitle: "Muaj",
    today: "Sot",
    weekStart: 1,
    format: "dd/mm/yyyy",
    clear: "Pastro",
  }),
  (jQuery.fn.datepicker.dates["sr-latin"] = {
    days: [
      "Nedelja",
      "Ponedeljak",
      "Utorak",
      "Sreda",
      "\u010cetvrtak",
      "Petak",
      "Subota",
    ],
    daysShort: ["Ned", "Pon", "Uto", "Sre", "\u010cet", "Pet", "Sub"],
    daysMin: ["N", "Po", "U", "Sr", "\u010c", "Pe", "Su"],
    months: [
      "Januar",
      "Februar",
      "Mart",
      "April",
      "Maj",
      "Jun",
      "Jul",
      "Avgust",
      "Septembar",
      "Oktobar",
      "Novembar",
      "Decembar",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Avg",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    today: "Danas",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.sr = {
    days: [
      "\u041d\u0435\u0434\u0435\u0459\u0430",
      "\u041f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a",
      "\u0423\u0442\u043e\u0440\u0430\u043a",
      "\u0421\u0440\u0435\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u0440\u0442\u0430\u043a",
      "\u041f\u0435\u0442\u0430\u043a",
      "\u0421\u0443\u0431\u043e\u0442\u0430",
    ],
    daysShort: [
      "\u041d\u0435\u0434",
      "\u041f\u043e\u043d",
      "\u0423\u0442\u043e",
      "\u0421\u0440\u0435",
      "\u0427\u0435\u0442",
      "\u041f\u0435\u0442",
      "\u0421\u0443\u0431",
    ],
    daysMin: [
      "\u041d",
      "\u041f\u043e",
      "\u0423",
      "\u0421\u0440",
      "\u0427",
      "\u041f\u0435",
      "\u0421\u0443",
    ],
    months: [
      "\u0408\u0430\u043d\u0443\u0430\u0440",
      "\u0424\u0435\u0431\u0440\u0443\u0430\u0440",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0438\u043b",
      "\u041c\u0430\u0458",
      "\u0408\u0443\u043d",
      "\u0408\u0443\u043b",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440",
      "\u041e\u043a\u0442\u043e\u0431\u0430\u0440",
      "\u041d\u043e\u0432\u0435\u043c\u0431\u0430\u0440",
      "\u0414\u0435\u0446\u0435\u043c\u0431\u0430\u0440",
    ],
    monthsShort: [
      "\u0408\u0430\u043d",
      "\u0424\u0435\u0431",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0458",
      "\u0408\u0443\u043d",
      "\u0408\u0443\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043f",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u0432",
      "\u0414\u0435\u0446",
    ],
    today: "\u0414\u0430\u043d\u0430\u0441",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.sv = {
    days: [
      "s\xf6ndag",
      "m\xe5ndag",
      "tisdag",
      "onsdag",
      "torsdag",
      "fredag",
      "l\xf6rdag",
    ],
    daysShort: ["s\xf6n", "m\xe5n", "tis", "ons", "tor", "fre", "l\xf6r"],
    daysMin: ["s\xf6", "m\xe5", "ti", "on", "to", "fr", "l\xf6"],
    months: [
      "januari",
      "februari",
      "mars",
      "april",
      "maj",
      "juni",
      "juli",
      "augusti",
      "september",
      "oktober",
      "november",
      "december",
    ],
    monthsShort: [
      "jan",
      "feb",
      "mar",
      "apr",
      "maj",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec",
    ],
    today: "Idag",
    format: "yyyy-mm-dd",
    weekStart: 1,
    clear: "Rensa",
  }),
  (jQuery.fn.datepicker.dates.sw = {
    days: [
      "Jumapili",
      "Jumatatu",
      "Jumanne",
      "Jumatano",
      "Alhamisi",
      "Ijumaa",
      "Jumamosi",
    ],
    daysShort: ["J2", "J3", "J4", "J5", "Alh", "Ij", "J1"],
    daysMin: ["2", "3", "4", "5", "A", "I", "1"],
    months: [
      "Januari",
      "Februari",
      "Machi",
      "Aprili",
      "Mei",
      "Juni",
      "Julai",
      "Agosti",
      "Septemba",
      "Oktoba",
      "Novemba",
      "Desemba",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mac",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    today: "Leo",
  }),
  (jQuery.fn.datepicker.dates.ta = {
    days: [
      "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1",
      "\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
      "\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd",
      "\u0baa\u0bc1\u0ba4\u0ba9\u0bcd",
      "\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd",
      "\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf",
      "\u0b9a\u0ba9\u0bbf",
    ],
    daysShort: [
      "\u0b9e\u0bbe\u0baf\u0bbf",
      "\u0ba4\u0bbf\u0b99\u0bcd",
      "\u0b9a\u0bc6\u0bb5\u0bcd",
      "\u0baa\u0bc1\u0ba4",
      "\u0bb5\u0bbf\u0baf\u0bbe",
      "\u0bb5\u0bc6\u0bb3\u0bcd",
      "\u0b9a\u0ba9\u0bbf",
    ],
    daysMin: [
      "\u0b9e\u0bbe",
      "\u0ba4\u0bbf",
      "\u0b9a\u0bc6",
      "\u0baa\u0bc1",
      "\u0bb5\u0bbf",
      "\u0bb5\u0bc6",
      "\u0b9a",
    ],
    months: [
      "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf",
      "\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf",
      "\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd",
      "\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd",
      "\u0bae\u0bc7",
      "\u0b9c\u0bc2\u0ba9\u0bcd",
      "\u0b9c\u0bc2\u0bb2\u0bc8",
      "\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bc1",
      "\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bae\u0bcd\u0baa\u0bb0\u0bcd",
      "\u0b85\u0b95\u0bcd\u0b9f\u0bcb\u0baa\u0bb0\u0bcd",
      "\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd",
      "\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd",
    ],
    monthsShort: [
      "\u0b9c\u0ba9",
      "\u0baa\u0bbf\u0baa\u0bcd",
      "\u0bae\u0bbe\u0bb0\u0bcd",
      "\u0b8f\u0baa\u0bcd",
      "\u0bae\u0bc7",
      "\u0b9c\u0bc2\u0ba9\u0bcd",
      "\u0b9c\u0bc2\u0bb2\u0bc8",
      "\u0b86\u0b95",
      "\u0b9a\u0bc6\u0baa\u0bcd",
      "\u0b85\u0b95\u0bcd",
      "\u0ba8\u0bb5",
      "\u0b9f\u0bbf\u0b9a",
    ],
    today: "\u0b87\u0ba9\u0bcd\u0bb1\u0bc1",
    monthsTitle: "\u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
    clear: "\u0ba8\u0bc0\u0b95\u0bcd\u0b95\u0bc1",
    weekStart: 1,
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates.tg = {
    days: [
      "\u042f\u043a\u0448\u0430\u043d\u0431\u0435",
      "\u0414\u0443\u0448\u0430\u043d\u0431\u0435",
      "\u0421\u0435\u0448\u0430\u043d\u0431\u0435",
      "\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0435",
      "\u041f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435",
      "\u04b6\u0443\u043c\u044a\u0430",
      "\u0428\u0430\u043d\u0431\u0435",
    ],
    daysShort: [
      "\u042f\u0448\u0431",
      "\u0414\u0448\u0431",
      "\u0421\u0448\u0431",
      "\u0427\u0448\u0431",
      "\u041f\u0448\u0431",
      "\u04b6\u0443\u043c",
      "\u0428\u043d\u0431",
    ],
    daysMin: [
      "\u042f\u0448",
      "\u0414\u0448",
      "\u0421\u0448",
      "\u0427\u0448",
      "\u041f\u0448",
      "\u04b6\u043c",
      "\u0428\u0431",
    ],
    months: [
      "\u042f\u043d\u0432\u0430\u0440",
      "\u0424\u0435\u0432\u0440\u0430\u043b",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0435\u043b",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d",
      "\u0418\u044e\u043b",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043d\u0442\u044f\u0431\u0440",
      "\u041e\u043a\u0442\u044f\u0431\u0440",
      "\u041d\u043e\u044f\u0431\u0440",
      "\u0414\u0435\u043a\u0430\u0431\u0440",
    ],
    monthsShort: [
      "\u042f\u043d\u0432",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d",
      "\u0418\u044e\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043d",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u044f",
      "\u0414\u0435\u043a",
    ],
    today: "\u0418\u043c\u0440\u04ef\u0437",
    monthsTitle: "\u041c\u043e\u04b3\u04b3\u043e",
    clear:
      "\u0422\u043e\u0437\u0430 \u043d\u0430\u043c\u0443\u0434\u0430\u043d",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.th = {
    days: [
      "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",
      "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c",
      "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23",
      "\u0e1e\u0e38\u0e18",
      "\u0e1e\u0e24\u0e2b\u0e31\u0e2a",
      "\u0e28\u0e38\u0e01\u0e23\u0e4c",
      "\u0e40\u0e2a\u0e32\u0e23\u0e4c",
      "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",
    ],
    daysShort: [
      "\u0e2d\u0e32",
      "\u0e08",
      "\u0e2d",
      "\u0e1e",
      "\u0e1e\u0e24",
      "\u0e28",
      "\u0e2a",
      "\u0e2d\u0e32",
    ],
    daysMin: [
      "\u0e2d\u0e32",
      "\u0e08",
      "\u0e2d",
      "\u0e1e",
      "\u0e1e\u0e24",
      "\u0e28",
      "\u0e2a",
      "\u0e2d\u0e32",
    ],
    months: [
      "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21",
      "\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c",
      "\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21",
      "\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19",
      "\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21",
      "\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19",
      "\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21",
      "\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21",
      "\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19",
      "\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21",
      "\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19",
      "\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21",
    ],
    monthsShort: [
      "\u0e21.\u0e04.",
      "\u0e01.\u0e1e.",
      "\u0e21\u0e35.\u0e04.",
      "\u0e40\u0e21.\u0e22.",
      "\u0e1e.\u0e04.",
      "\u0e21\u0e34.\u0e22.",
      "\u0e01.\u0e04.",
      "\u0e2a.\u0e04.",
      "\u0e01.\u0e22.",
      "\u0e15.\u0e04.",
      "\u0e1e.\u0e22.",
      "\u0e18.\u0e04.",
    ],
    today: "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
  }),
  (jQuery.fn.datepicker.dates.tk = {
    days: [
      "\xddek\u015fenbe",
      "Du\u015fenbe",
      "Si\u015fenbe",
      "\xc7ar\u015fenbe",
      "Pen\u015fenbe",
      "Anna",
      "\u015eenbe",
    ],
    daysShort: [
      "\xddek",
      "Du\u015f",
      "Si\u015f",
      "\xc7ar",
      "Pen",
      "Ann",
      "\u015een",
    ],
    daysMin: ["\xdde", "Du", "Si", "\xc7a", "Pe", "An", "\u015ee"],
    months: [
      "\xddanwar",
      "Fewral",
      "Mart",
      "Aprel",
      "Ma\xfd",
      "I\xfdun",
      "I\xfdul",
      "Awgust",
      "Sent\xfdabr",
      "Okt\xfdabr",
      "No\xfdabr",
      "Dekabr",
    ],
    monthsShort: [
      "\xddan",
      "Few",
      "Mar",
      "Apr",
      "Ma\xfd",
      "I\xfdn",
      "I\xfdl",
      "Awg",
      "Sen",
      "Okt",
      "No\xfd",
      "Dek",
    ],
    today: "Bu g\xfcn",
    monthsTitle: "A\xfdlar",
    clear: "A\xfdyr",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.tr = {
    days: [
      "Pazar",
      "Pazartesi",
      "Sal\u0131",
      "\xc7ar\u015famba",
      "Per\u015fembe",
      "Cuma",
      "Cumartesi",
    ],
    daysShort: ["Pz", "Pzt", "Sal", "\xc7r\u015f", "Pr\u015f", "Cu", "Cts"],
    daysMin: ["Pz", "Pzt", "Sa", "\xc7r", "Pr", "Cu", "Ct"],
    months: [
      "Ocak",
      "\u015eubat",
      "Mart",
      "Nisan",
      "May\u0131s",
      "Haziran",
      "Temmuz",
      "A\u011fustos",
      "Eyl\xfcl",
      "Ekim",
      "Kas\u0131m",
      "Aral\u0131k",
    ],
    monthsShort: [
      "Oca",
      "\u015eub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "A\u011fu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ],
    today: "Bug\xfcn",
    clear: "Temizle",
    weekStart: 1,
    format: "dd.mm.yyyy",
  }),
  (jQuery.fn.datepicker.dates.ua = {
    days: [
      "\u041d\u0435\u0434\u0456\u043b\u044f",
      "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a",
      "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a",
      "\u0421\u0435\u0440\u0435\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u0435\u0440",
      "\u041f'\u044f\u0442\u043d\u0438\u0446\u0430",
      "\u0421\u0443\u0431\u043e\u0442\u0430",
      "\u041d\u0435\u0434\u0456\u043b\u044f",
    ],
    daysShort: [
      "\u041d\u0435\u0434",
      "\u041f\u043d\u0434",
      "\u0412\u0442\u0440",
      "\u0421\u0440\u0434",
      "\u0427\u0442\u0432",
      "\u041f\u0442\u043d",
      "\u0421\u0443\u0431",
      "\u041d\u0435\u0434",
    ],
    daysMin: [
      "\u041d\u0434",
      "\u041f\u043d",
      "\u0412\u0442",
      "\u0421\u0440",
      "\u0427\u0442",
      "\u041f\u0442",
      "\u0421\u0431",
      "\u041d\u0434",
    ],
    months: [
      "C\u0456\u0447\u0435\u043d\u044c",
      "\u041b\u044e\u0442\u0438\u0439",
      "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c",
      "\u041a\u0432\u0456\u0442\u0435\u043d\u044c",
      "\u0422\u0440\u0430\u0432\u0435\u043d\u044c",
      "\u0427\u0435\u0440\u0432\u0435\u043d\u044c",
      "\u041b\u0438\u043f\u0435\u043d\u044c",
      "\u0421\u0435\u0440\u043f\u0435\u043d\u044c",
      "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c",
      "\u0416\u043e\u0432\u0442\u0435\u043d\u044c",
      "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434",
      "\u0413\u0440\u0443\u0434\u0435\u043d\u044c",
    ],
    monthsShort: [
      "\u0421\u0456\u0447",
      "\u041b\u044e\u0442",
      "\u0411\u0435\u0440",
      "\u041a\u0432\u0456",
      "\u0422\u0440\u0430",
      "\u0427\u0435\u0440",
      "\u041b\u0438\u043f",
      "\u0421\u0435\u0440",
      "\u0412\u0435\u0440",
      "\u0416\u043e\u0432",
      "\u041b\u0438\u0441",
      "\u0413\u0440\u0443",
    ],
    today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates.uk = {
    days: [
      "\u041d\u0435\u0434\u0456\u043b\u044f",
      "\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a",
      "\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a",
      "\u0421\u0435\u0440\u0435\u0434\u0430",
      "\u0427\u0435\u0442\u0432\u0435\u0440",
      "\u041f'\u044f\u0442\u043d\u0438\u0446\u044f",
      "\u0421\u0443\u0431\u043e\u0442\u0430",
    ],
    daysShort: [
      "\u041d\u0435\u0434",
      "\u041f\u043d\u0434",
      "\u0412\u0442\u0440",
      "\u0421\u0440\u0434",
      "\u0427\u0442\u0432",
      "\u041f\u0442\u043d",
      "\u0421\u0443\u0431",
    ],
    daysMin: [
      "\u041d\u0434",
      "\u041f\u043d",
      "\u0412\u0442",
      "\u0421\u0440",
      "\u0427\u0442",
      "\u041f\u0442",
      "\u0421\u0431",
    ],
    months: [
      "C\u0456\u0447\u0435\u043d\u044c",
      "\u041b\u044e\u0442\u0438\u0439",
      "\u0411\u0435\u0440\u0435\u0437\u0435\u043d\u044c",
      "\u041a\u0432\u0456\u0442\u0435\u043d\u044c",
      "\u0422\u0440\u0430\u0432\u0435\u043d\u044c",
      "\u0427\u0435\u0440\u0432\u0435\u043d\u044c",
      "\u041b\u0438\u043f\u0435\u043d\u044c",
      "\u0421\u0435\u0440\u043f\u0435\u043d\u044c",
      "\u0412\u0435\u0440\u0435\u0441\u0435\u043d\u044c",
      "\u0416\u043e\u0432\u0442\u0435\u043d\u044c",
      "\u041b\u0438\u0441\u0442\u043e\u043f\u0430\u0434",
      "\u0413\u0440\u0443\u0434\u0435\u043d\u044c",
    ],
    monthsShort: [
      "\u0421\u0456\u0447",
      "\u041b\u044e\u0442",
      "\u0411\u0435\u0440",
      "\u041a\u0432\u0456",
      "\u0422\u0440\u0430",
      "\u0427\u0435\u0440",
      "\u041b\u0438\u043f",
      "\u0421\u0435\u0440",
      "\u0412\u0435\u0440",
      "\u0416\u043e\u0432",
      "\u041b\u0438\u0441",
      "\u0413\u0440\u0443",
    ],
    today: "\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",
    clear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438",
    format: "dd.mm.yyyy",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates["uz-cyrl"] = {
    days: [
      "\u042f\u043a\u0448\u0430\u043d\u0431\u0430",
      "\u0414\u0443\u0448\u0430\u043d\u0431\u0430",
      "\u0421\u0435\u0448\u0430\u043d\u0431\u0430",
      "\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430",
      "\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430",
      "\u0416\u0443\u043c\u0430",
      "\u0428\u0430\u043d\u0431\u0430",
    ],
    daysShort: [
      "\u042f\u043a\u0448",
      "\u0414\u0443",
      "\u0421\u0435",
      "\u0427\u043e\u0440",
      "\u041f\u0430\u0439",
      "\u0416\u0443",
      "\u0428\u0430",
    ],
    daysMin: [
      "\u042f\u043a",
      "\u0414\u0443",
      "\u0421\u0435",
      "\u0427\u043e",
      "\u041f\u0430",
      "\u0416\u0443",
      "\u0428\u0430",
    ],
    months: [
      "\u042f\u043d\u0432\u0430\u0440\u044c",
      "\u0424\u0435\u0432\u0440\u0430\u043b\u044c",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0435\u043b\u044c",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d\u044c",
      "\u0418\u044e\u043b\u044c",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
      "\u041e\u043a\u0442\u044f\u0431\u0440\u044c",
      "\u041d\u043e\u044f\u0431\u0440\u044c",
      "\u0414\u0435\u043a\u0430\u0431\u0440\u044c",
    ],
    monthsShort: [
      "\u042f\u043d\u0432",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d",
      "\u0418\u044e\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043d",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u044f",
      "\u0414\u0435\u043a",
    ],
    today: "\u0411\u0443\u0433\u0443\u043d",
    clear: "\u040e\u0447\u0438\u0440\u0438\u0448",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "\u041e\u0439\u043b\u0430\u0440",
  }),
  (jQuery.fn.datepicker.dates["uz-latn"] = {
    days: [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
    ],
    daysShort: ["Yak", "Du", "Se", "Chor", "Pay", "Ju", "Sha"],
    daysMin: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
    months: [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ],
    monthsShort: [
      "Yan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Iyn",
      "Iyl",
      "Avg",
      "Sen",
      "Okt",
      "Noy",
      "Dek",
    ],
    today: "Bugun",
    clear: "O'chirish",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "Oylar",
  }),
  (jQuery.fn.datepicker.dates.vi = {
    days: [
      "Ch\u1ee7 nh\u1eadt",
      "Th\u1ee9 hai",
      "Th\u1ee9 ba",
      "Th\u1ee9 t\u01b0",
      "Th\u1ee9 n\u0103m",
      "Th\u1ee9 s\xe1u",
      "Th\u1ee9 b\u1ea3y",
    ],
    daysShort: [
      "CN",
      "Th\u1ee9 2",
      "Th\u1ee9 3",
      "Th\u1ee9 4",
      "Th\u1ee9 5",
      "Th\u1ee9 6",
      "Th\u1ee9 7",
    ],
    daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
    months: [
      "Th\xe1ng 1",
      "Th\xe1ng 2",
      "Th\xe1ng 3",
      "Th\xe1ng 4",
      "Th\xe1ng 5",
      "Th\xe1ng 6",
      "Th\xe1ng 7",
      "Th\xe1ng 8",
      "Th\xe1ng 9",
      "Th\xe1ng 10",
      "Th\xe1ng 11",
      "Th\xe1ng 12",
    ],
    monthsShort: [
      "Th1",
      "Th2",
      "Th3",
      "Th4",
      "Th5",
      "Th6",
      "Th7",
      "Th8",
      "Th9",
      "Th10",
      "Th11",
      "Th12",
    ],
    today: "H\xf4m nay",
    clear: "X\xf3a",
    format: "dd/mm/yyyy",
  }),
  (jQuery.fn.datepicker.dates["zh-CN"] = {
    days: [
      "\u661f\u671f\u65e5",
      "\u661f\u671f\u4e00",
      "\u661f\u671f\u4e8c",
      "\u661f\u671f\u4e09",
      "\u661f\u671f\u56db",
      "\u661f\u671f\u4e94",
      "\u661f\u671f\u516d",
    ],
    daysShort: [
      "\u5468\u65e5",
      "\u5468\u4e00",
      "\u5468\u4e8c",
      "\u5468\u4e09",
      "\u5468\u56db",
      "\u5468\u4e94",
      "\u5468\u516d",
    ],
    daysMin: [
      "\u65e5",
      "\u4e00",
      "\u4e8c",
      "\u4e09",
      "\u56db",
      "\u4e94",
      "\u516d",
    ],
    months: [
      "\u4e00\u6708",
      "\u4e8c\u6708",
      "\u4e09\u6708",
      "\u56db\u6708",
      "\u4e94\u6708",
      "\u516d\u6708",
      "\u4e03\u6708",
      "\u516b\u6708",
      "\u4e5d\u6708",
      "\u5341\u6708",
      "\u5341\u4e00\u6708",
      "\u5341\u4e8c\u6708",
    ],
    monthsShort: [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708",
    ],
    today: "\u4eca\u5929",
    monthsTitle: "\u9009\u62e9\u6708\u4efd",
    clear: "\u6e05\u9664",
    format: "yyyy-mm-dd",
    titleFormat: "yyyy\u5e74mm\u6708",
    weekStart: 1,
  }),
  (jQuery.fn.datepicker.dates["zh-TW"] = {
    days: [
      "\u661f\u671f\u65e5",
      "\u661f\u671f\u4e00",
      "\u661f\u671f\u4e8c",
      "\u661f\u671f\u4e09",
      "\u661f\u671f\u56db",
      "\u661f\u671f\u4e94",
      "\u661f\u671f\u516d",
    ],
    daysShort: [
      "\u9031\u65e5",
      "\u9031\u4e00",
      "\u9031\u4e8c",
      "\u9031\u4e09",
      "\u9031\u56db",
      "\u9031\u4e94",
      "\u9031\u516d",
    ],
    daysMin: [
      "\u65e5",
      "\u4e00",
      "\u4e8c",
      "\u4e09",
      "\u56db",
      "\u4e94",
      "\u516d",
    ],
    months: [
      "\u4e00\u6708",
      "\u4e8c\u6708",
      "\u4e09\u6708",
      "\u56db\u6708",
      "\u4e94\u6708",
      "\u516d\u6708",
      "\u4e03\u6708",
      "\u516b\u6708",
      "\u4e5d\u6708",
      "\u5341\u6708",
      "\u5341\u4e00\u6708",
      "\u5341\u4e8c\u6708",
    ],
    monthsShort: [
      "1\u6708",
      "2\u6708",
      "3\u6708",
      "4\u6708",
      "5\u6708",
      "6\u6708",
      "7\u6708",
      "8\u6708",
      "9\u6708",
      "10\u6708",
      "11\u6708",
      "12\u6708",
    ],
    today: "\u4eca\u5929",
    format: "yyyy\u5e74mm\u6708dd\u65e5",
    weekStart: 1,
    clear: "\u6e05\u9664",
  }),
  (function (e) {
    "use strict";
    function t(t, n) {
      var i = t.nodeName.toLowerCase();
      if (-1 !== e.inArray(i, n))
        return (
          -1 === e.inArray(i, u) ||
          Boolean(t.nodeValue.match(p) || t.nodeValue.match(f))
        );
      for (
        var r = e(n).filter(function (e, t) {
            return t instanceof RegExp;
          }),
          a = 0,
          o = r.length;
        a < o;
        a++
      )
        if (i.match(r[a])) return !0;
      return !1;
    }
    function n(e, n, i) {
      if (i && "function" == typeof i) return i(e);
      for (var r = Object.keys(n), a = 0, o = e.length; a < o; a++)
        for (
          var s = e[a].querySelectorAll("*"), l = 0, d = s.length;
          l < d;
          l++
        ) {
          var c = s[l],
            u = c.nodeName.toLowerCase();
          if (-1 !== r.indexOf(u))
            for (
              var h = [].slice.call(c.attributes),
                p = [].concat(n["*"] || [], n[u] || []),
                f = 0,
                m = h.length;
              f < m;
              f++
            ) {
              var y = h[f];
              t(y, p) || c.removeAttribute(y.nodeName);
            }
          else c.parentNode.removeChild(c);
        }
    }
    function i(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return e === t[n];
        })
      );
    }
    function r(e) {
      var t,
        n = [],
        i = e.selectedOptions;
      if (e.multiple)
        for (var r = 0, a = i.length; r < a; r++)
          (t = i[r]), n.push(t.value || t.text);
      else n = e.value;
      return n;
    }
    function a(e, t, n, i) {
      for (
        var r = ["content", "subtext", "tokens"], a = !1, o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o],
          d = e[s];
        if (
          d &&
          ((d = d.toString()),
          "content" === s && (d = d.replace(/<[^>]+>/g, "")),
          i && (d = l(d)),
          (d = d.toUpperCase()),
          (a = "contains" === n ? d.indexOf(t) >= 0 : d.startsWith(t)))
        )
          break;
      }
      return a;
    }
    function o(e) {
      return parseInt(e, 10) || 0;
    }
    function s(e) {
      return T[e];
    }
    function l(e) {
      return (e = e.toString()) && e.replace(C, s).replace(M, "");
    }
    function d(t) {
      var n,
        i = arguments,
        r = t;
      if (([].shift.apply(i), !$.success)) {
        try {
          $.full = (e.fn.dropdown.Constructor.VERSION || "")
            .split(" ")[0]
            .split(".");
        } catch (o) {
          $.full = H.BootstrapVersion.split(" ")[0].split(".");
        }
        ($.major = $.full[0]),
          ($.success = !0),
          "4" === $.major &&
            ((I.DIVIDER = "dropdown-divider"),
            (I.SHOW = "show"),
            (I.BUTTONCLASS = "btn-light"),
            (H.DEFAULTS.style = I.BUTTONCLASS = "btn-light"),
            (I.POPOVERHEADER = "popover-header"));
      }
      var a = this.each(function () {
        var t = e(this);
        if (t.is("select")) {
          var a = t.data("selectpicker"),
            o = "object" == typeof r && r;
          if (a) {
            if (o)
              for (var s in o) o.hasOwnProperty(s) && (a.options[s] = o[s]);
          } else {
            var l = t.data();
            for (var d in l)
              l.hasOwnProperty(d) && -1 !== e.inArray(d, c) && delete l[d];
            var u = e.extend(
              {},
              H.DEFAULTS,
              e.fn.selectpicker.defaults || {},
              l,
              o
            );
            (u.template = e.extend(
              {},
              H.DEFAULTS.template,
              e.fn.selectpicker.defaults
                ? e.fn.selectpicker.defaults.template
                : {},
              l.template,
              o.template
            )),
              t.data("selectpicker", (a = new H(this, u)));
          }
          "string" == typeof r &&
            (n = a[r] instanceof Function ? a[r].apply(a, i) : a.options[r]);
        }
      });
      return void 0 !== n ? n : a;
    }
    var c = ["sanitize", "whiteList", "sanitizeFn"],
      u = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      h = {
        "*": [
          "class",
          "dir",
          "id",
          "lang",
          "role",
          "tabindex",
          "style",
          /^aria-[\w-]*$/i,
        ],
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
        ul: [],
      },
      p = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      f =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    "classList" in document.createElement("_") ||
      (function (t) {
        if ("Element" in t) {
          var n = "classList",
            i = "prototype",
            r = t.Element[i],
            a = Object,
            o = function () {
              var t = e(this);
              return {
                add: function (e) {
                  return (
                    (e = Array.prototype.slice.call(arguments).join(" ")),
                    t.addClass(e)
                  );
                },
                remove: function (e) {
                  return (
                    (e = Array.prototype.slice.call(arguments).join(" ")),
                    t.removeClass(e)
                  );
                },
                toggle: function (e, n) {
                  return t.toggleClass(e, n);
                },
                contains: function (e) {
                  return t.hasClass(e);
                },
              };
            };
          if (a.defineProperty) {
            var s = { get: o, enumerable: !0, configurable: !0 };
            try {
              a.defineProperty(r, n, s);
            } catch (l) {
              (l.number !== undefined && -2146823252 !== l.number) ||
                ((s.enumerable = !1), a.defineProperty(r, n, s));
            }
          } else a[i].__defineGetter__ && r.__defineGetter__(n, o);
        }
      })(window);
    var m,
      y,
      g,
      v = document.createElement("_");
    if ((v.classList.add("c1", "c2"), !v.classList.contains("c2"))) {
      var b = DOMTokenList.prototype.add,
        w = DOMTokenList.prototype.remove;
      (DOMTokenList.prototype.add = function () {
        Array.prototype.forEach.call(arguments, b.bind(this));
      }),
        (DOMTokenList.prototype.remove = function () {
          Array.prototype.forEach.call(arguments, w.bind(this));
        });
    }
    if ((v.classList.toggle("c3", !1), v.classList.contains("c3"))) {
      var S = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (e, t) {
        return 1 in arguments && !this.contains(e) == !t ? t : S.call(this, e);
      };
    }
    (v = null),
      String.prototype.startsWith ||
        ((m = (function () {
          try {
            var e = {},
              t = Object.defineProperty,
              n = t(e, e, e) && t;
          } catch (i) {}
          return n;
        })()),
        (y = {}.toString),
        (g = function (e) {
          if (null == this) throw new TypeError();
          var t = String(this);
          if (e && "[object RegExp]" == y.call(e)) throw new TypeError();
          var n = t.length,
            i = String(e),
            r = i.length,
            a = arguments.length > 1 ? arguments[1] : undefined,
            o = a ? Number(a) : 0;
          o != o && (o = 0);
          var s = Math.min(Math.max(o, 0), n);
          if (r + s > n) return !1;
          for (var l = -1; ++l < r; )
            if (t.charCodeAt(s + l) != i.charCodeAt(l)) return !1;
          return !0;
        }),
        m
          ? m(String.prototype, "startsWith", {
              value: g,
              configurable: !0,
              writable: !0,
            })
          : (String.prototype.startsWith = g)),
      Object.keys ||
        (Object.keys = function (e, t, n) {
          for (t in ((n = []), e)) n.hasOwnProperty.call(e, t) && n.push(t);
          return n;
        }),
      HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") ||
        Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
          get: function () {
            return this.querySelectorAll(":checked");
          },
        });
    var k = { useDefault: !1, _set: e.valHooks.select.set };
    e.valHooks.select.set = function (t, n) {
      return (
        n && !k.useDefault && e(t).data("selected", !0),
        k._set.apply(this, arguments)
      );
    };
    var x = null,
      D = (function () {
        try {
          return new Event("change"), !0;
        } catch (e) {
          return !1;
        }
      })();
    e.fn.triggerNative = function (e) {
      var t,
        n = this[0];
      n.dispatchEvent
        ? (D
            ? (t = new Event(e, { bubbles: !0 }))
            : (t = document.createEvent("Event")).initEvent(e, !0, !1),
          n.dispatchEvent(t))
        : n.fireEvent
        ? (((t = document.createEventObject()).eventType = e),
          n.fireEvent("on" + e, t))
        : this.trigger(e);
    };
    var T = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s",
      },
      C = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      M = RegExp(
        "[" +
          ("\\u0300-\\u036f" +
            "\\ufe20-\\ufe2f" +
            "\\u20d0-\\u20ff" +
            "\\u1ab0-\\u1aff" +
            "\\u1dc0-\\u1dff") +
          "]",
        "g"
      ),
      A = (function (e) {
        var t = function (t) {
            return e[t];
          },
          n = "(?:" + Object.keys(e).join("|") + ")",
          i = RegExp(n),
          r = RegExp(n, "g");
        return function (e) {
          return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(r, t) : e;
        };
      })({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      }),
      E = {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
      },
      j = {
        ESCAPE: 27,
        ENTER: 13,
        SPACE: 32,
        TAB: 9,
        ARROW_UP: 38,
        ARROW_DOWN: 40,
      },
      $ = { success: !1, major: "3" };
    try {
      ($.full = (e.fn.dropdown.Constructor.VERSION || "")
        .split(" ")[0]
        .split(".")),
        ($.major = $.full[0]),
        ($.success = !0);
    } catch (J) {
      console.warn(
        "There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",
        J
      );
    }
    var N = 0,
      _ = ".bs.select",
      I = {
        DISABLED: "disabled",
        DIVIDER: "divider",
        SHOW: "open",
        DROPUP: "dropup",
        MENU: "dropdown-menu",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        BUTTONCLASS: "btn-default",
        POPOVERHEADER: "popover-title",
      },
      O = { MENU: "." + I.MENU };
    "4" === $.major &&
      ((I.DIVIDER = "dropdown-divider"),
      (I.SHOW = "show"),
      (I.BUTTONCLASS = "btn-light"),
      (I.POPOVERHEADER = "popover-header"));
    var L = {
      span: document.createElement("span"),
      i: document.createElement("i"),
      subtext: document.createElement("small"),
      a: document.createElement("a"),
      li: document.createElement("li"),
      whitespace: document.createTextNode("\xa0"),
      fragment: document.createDocumentFragment(),
    };
    L.a.setAttribute("role", "option"),
      (L.subtext.className = "text-muted"),
      (L.text = L.span.cloneNode(!1)),
      (L.text.className = "text");
    var P = new RegExp(j.ARROW_UP + "|" + j.ARROW_DOWN),
      z = new RegExp("^" + j.TAB + "$|" + j.ESCAPE),
      F = {
        li: function (e, t, n) {
          var i = L.li.cloneNode(!1);
          return (
            e &&
              (1 === e.nodeType || 11 === e.nodeType
                ? i.appendChild(e)
                : (i.innerHTML = e)),
            void 0 !== t && "" !== t && (i.className = t),
            null != n && i.classList.add("optgroup-" + n),
            i
          );
        },
        a: function (e, t, n) {
          var i = L.a.cloneNode(!0);
          return (
            e &&
              (11 === e.nodeType
                ? i.appendChild(e)
                : i.insertAdjacentHTML("beforeend", e)),
            void 0 !== t && "" !== t && (i.className = t),
            "4" === $.major && i.classList.add("dropdown-item"),
            n && i.setAttribute("style", n),
            i
          );
        },
        text: function (e, t) {
          var n,
            i,
            r = L.text.cloneNode(!1);
          if (e.optionContent) r.innerHTML = e.optionContent;
          else {
            if (((r.textContent = e.text), e.optionIcon)) {
              var a = L.whitespace.cloneNode(!1);
              ((i = (!0 === t ? L.i : L.span).cloneNode(!1)).className =
                e.iconBase + " " + e.optionIcon),
                L.fragment.appendChild(i),
                L.fragment.appendChild(a);
            }
            e.optionSubtext &&
              (((n = L.subtext.cloneNode(!1)).textContent = e.optionSubtext),
              r.appendChild(n));
          }
          if (!0 === t)
            for (; r.childNodes.length > 0; )
              L.fragment.appendChild(r.childNodes[0]);
          else L.fragment.appendChild(r);
          return L.fragment;
        },
        label: function (e) {
          var t,
            n,
            i = L.text.cloneNode(!1);
          if (((i.innerHTML = e.labelEscaped), e.labelIcon)) {
            var r = L.whitespace.cloneNode(!1);
            ((n = L.span.cloneNode(!1)).className =
              e.iconBase + " " + e.labelIcon),
              L.fragment.appendChild(n),
              L.fragment.appendChild(r);
          }
          return (
            e.labelSubtext &&
              (((t = L.subtext.cloneNode(!1)).textContent = e.labelSubtext),
              i.appendChild(t)),
            L.fragment.appendChild(i),
            L.fragment
          );
        },
      },
      H = function (t, n) {
        var i = this;
        k.useDefault || ((e.valHooks.select.set = k._set), (k.useDefault = !0)),
          (this.$element = e(t)),
          (this.$newElement = null),
          (this.$button = null),
          (this.$menu = null),
          (this.options = n),
          (this.selectpicker = {
            main: { map: { newIndex: {}, originalIndex: {} } },
            current: { map: {} },
            search: { map: {} },
            view: {},
            keydown: {
              keyHistory: "",
              resetKeyHistory: {
                start: function () {
                  return setTimeout(function () {
                    i.selectpicker.keydown.keyHistory = "";
                  }, 800);
                },
              },
            },
          }),
          null === this.options.title &&
            (this.options.title = this.$element.attr("title"));
        var r = this.options.windowPadding;
        "number" == typeof r && (this.options.windowPadding = [r, r, r, r]),
          (this.val = H.prototype.val),
          (this.render = H.prototype.render),
          (this.refresh = H.prototype.refresh),
          (this.setStyle = H.prototype.setStyle),
          (this.selectAll = H.prototype.selectAll),
          (this.deselectAll = H.prototype.deselectAll),
          (this.destroy = H.prototype.destroy),
          (this.remove = H.prototype.remove),
          (this.show = H.prototype.show),
          (this.hide = H.prototype.hide),
          this.init();
      };
    (H.VERSION = "1.13.8"),
      (H.BootstrapVersion = $.major),
      (H.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function (e) {
          return 1 == e ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function (e, t) {
          return [
            1 == e
              ? "Limit reached ({n} item max)"
              : "Limit reached ({n} items max)",
            1 == t
              ? "Group limit reached ({n} item max)"
              : "Group limit reached ({n} items max)",
          ];
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: I.BUTTONCLASS,
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        showTick: !1,
        template: { caret: '<span class="caret"></span>' },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
        windowPadding: 0,
        virtualScroll: 600,
        display: !1,
        sanitize: !0,
        sanitizeFn: null,
        whiteList: h,
      }),
      "4" === $.major &&
        ((H.DEFAULTS.style = "btn-light"),
        (H.DEFAULTS.iconBase = ""),
        (H.DEFAULTS.tickIcon = "bs-ok-default")),
      (H.prototype = {
        constructor: H,
        init: function () {
          var e = this,
            t = this.$element.attr("id");
          (this.selectId = N++),
            this.$element[0].classList.add("bs-select-hidden"),
            (this.multiple = this.$element.prop("multiple")),
            (this.autofocus = this.$element.prop("autofocus")),
            (this.$newElement = this.createDropdown()),
            this.$element.after(this.$newElement).prependTo(this.$newElement),
            (this.$button = this.$newElement.children("button")),
            (this.$menu = this.$newElement.children(O.MENU)),
            (this.$menuInner = this.$menu.children(".inner")),
            (this.$searchbox = this.$menu.find("input")),
            this.$element[0].classList.remove("bs-select-hidden"),
            !0 === this.options.dropdownAlignRight &&
              this.$menu[0].classList.add(I.MENURIGHT),
            void 0 !== t && this.$button.attr("data-id", t),
            this.checkDisabled(),
            this.clickListener(),
            this.options.liveSearch && this.liveSearchListener(),
            this.setStyle(),
            this.render(),
            this.setWidth(),
            this.options.container
              ? this.selectPosition()
              : this.$element.on("hide" + _, function () {
                  if (e.isVirtual()) {
                    var t = e.$menuInner[0],
                      n = t.firstChild.cloneNode(!1);
                    t.replaceChild(n, t.firstChild), (t.scrollTop = 0);
                  }
                }),
            this.$menu.data("this", this),
            this.$newElement.data("this", this),
            this.options.mobile && this.mobile(),
            this.$newElement.on({
              "hide.bs.dropdown": function (t) {
                e.$menuInner.attr("aria-expanded", !1),
                  e.$element.trigger("hide" + _, t);
              },
              "hidden.bs.dropdown": function (t) {
                e.$element.trigger("hidden" + _, t);
              },
              "show.bs.dropdown": function (t) {
                e.$menuInner.attr("aria-expanded", !0),
                  e.$element.trigger("show" + _, t);
              },
              "shown.bs.dropdown": function (t) {
                e.$element.trigger("shown" + _, t);
              },
            }),
            e.$element[0].hasAttribute("required") &&
              this.$element.on("invalid", function () {
                e.$button[0].classList.add("bs-invalid"),
                  e.$element
                    .on("shown" + _ + ".invalid", function () {
                      e.$element
                        .val(e.$element.val())
                        .off("shown" + _ + ".invalid");
                    })
                    .on("rendered" + _, function () {
                      this.validity.valid &&
                        e.$button[0].classList.remove("bs-invalid"),
                        e.$element.off("rendered" + _);
                    }),
                  e.$button.on("blur" + _, function () {
                    e.$element.trigger("focus").trigger("blur"),
                      e.$button.off("blur" + _);
                  });
              }),
            setTimeout(function () {
              e.createLi(), e.$element.trigger("loaded" + _);
            });
        },
        createDropdown: function () {
          var t,
            n = this.multiple || this.options.showTick ? " show-tick" : "",
            i = this.autofocus ? " autofocus" : "",
            r = "",
            a = "",
            o = "",
            s = "";
          return (
            this.options.header &&
              (r =
                '<div class="' +
                I.POPOVERHEADER +
                '"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                "</div>"),
            this.options.liveSearch &&
              (a =
                '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ""
                  : ' placeholder="' +
                    A(this.options.liveSearchPlaceholder) +
                    '"') +
                ' role="textbox" aria-label="Search"></div>'),
            this.multiple &&
              this.options.actionsBox &&
              (o =
                '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' +
                I.BUTTONCLASS +
                '">' +
                this.options.selectAllText +
                '</button><button type="button" class="actions-btn bs-deselect-all btn ' +
                I.BUTTONCLASS +
                '">' +
                this.options.deselectAllText +
                "</button></div></div>"),
            this.multiple &&
              this.options.doneButton &&
              (s =
                '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' +
                I.BUTTONCLASS +
                '">' +
                this.options.doneButtonText +
                "</button></div></div>"),
            (t =
              '<div class="dropdown bootstrap-select' +
              n +
              '"><button type="button" class="' +
              this.options.styleBase +
              ' dropdown-toggle" ' +
              ("static" === this.options.display
                ? 'data-display="static"'
                : "") +
              'data-toggle="dropdown"' +
              i +
              ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' +
              ("4" === $.major
                ? ""
                : '<span class="bs-caret">' +
                  this.options.template.caret +
                  "</span>") +
              '</button><div class="' +
              I.MENU +
              " " +
              ("4" === $.major ? "" : I.SHOW) +
              '" role="combobox">' +
              r +
              a +
              o +
              '<div class="inner ' +
              I.SHOW +
              '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' +
              I.MENU +
              " inner " +
              ("4" === $.major ? I.SHOW : "") +
              '"></ul></div>' +
              s +
              "</div></div>"),
            e(t)
          );
        },
        setPositionData: function () {
          this.selectpicker.view.canHighlight = [];
          for (var e = 0; e < this.selectpicker.current.data.length; e++) {
            var t = this.selectpicker.current.data[e],
              n = !0;
            "divider" === t.type
              ? ((n = !1), (t.height = this.sizeInfo.dividerHeight))
              : "optgroup-label" === t.type
              ? ((n = !1), (t.height = this.sizeInfo.dropdownHeaderHeight))
              : (t.height = this.sizeInfo.liHeight),
              t.disabled && (n = !1),
              this.selectpicker.view.canHighlight.push(n),
              (t.position =
                (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) +
                t.height);
          }
        },
        isVirtual: function () {
          return (
            (!1 !== this.options.virtualScroll &&
              this.selectpicker.main.elements.length >=
                this.options.virtualScroll) ||
            !0 === this.options.virtualScroll
          );
        },
        createView: function (t, r) {
          function a(e, r) {
            var a,
              c,
              u,
              h,
              p,
              f,
              m,
              y,
              g = o.selectpicker.current.elements.length,
              v = [],
              b = !0,
              w = o.isVirtual();
            (o.selectpicker.view.scrollTop = e),
              !0 === w &&
                o.sizeInfo.hasScrollBar &&
                o.$menu[0].offsetWidth > o.sizeInfo.totalMenuWidth &&
                ((o.sizeInfo.menuWidth = o.$menu[0].offsetWidth),
                (o.sizeInfo.totalMenuWidth =
                  o.sizeInfo.menuWidth + o.sizeInfo.scrollBarWidth),
                o.$menu.css("min-width", o.sizeInfo.menuWidth)),
              (a = Math.ceil(
                (o.sizeInfo.menuInnerHeight / o.sizeInfo.liHeight) * 1.5
              )),
              (c = Math.round(g / a) || 1);
            for (var S = 0; S < c; S++) {
              var k = (S + 1) * a;
              if (
                (S === c - 1 && (k = g), (v[S] = [S * a + (S ? 1 : 0), k]), !g)
              )
                break;
              p === undefined &&
                e <=
                  o.selectpicker.current.data[k - 1].position -
                    o.sizeInfo.menuInnerHeight &&
                (p = S);
            }
            if (
              (p === undefined && (p = 0),
              (f = [
                o.selectpicker.view.position0,
                o.selectpicker.view.position1,
              ]),
              (u = Math.max(0, p - 1)),
              (h = Math.min(c - 1, p + 1)),
              (o.selectpicker.view.position0 = Math.max(0, v[u][0]) || 0),
              (o.selectpicker.view.position1 = Math.min(g, v[h][1]) || 0),
              (m =
                f[0] !== o.selectpicker.view.position0 ||
                f[1] !== o.selectpicker.view.position1),
              o.activeIndex !== undefined &&
                ((l =
                  o.selectpicker.current.elements[
                    o.selectpicker.current.map.newIndex[o.prevActiveIndex]
                  ]),
                (d =
                  o.selectpicker.current.elements[
                    o.selectpicker.current.map.newIndex[o.activeIndex]
                  ]),
                (s =
                  o.selectpicker.current.elements[
                    o.selectpicker.current.map.newIndex[o.selectedIndex]
                  ]),
                r &&
                  (o.activeIndex !== o.selectedIndex &&
                    d &&
                    d.length &&
                    (d.classList.remove("active"),
                    d.firstChild && d.firstChild.classList.remove("active")),
                  (o.activeIndex = undefined)),
                o.activeIndex &&
                  o.activeIndex !== o.selectedIndex &&
                  s &&
                  s.length &&
                  (s.classList.remove("active"),
                  s.firstChild && s.firstChild.classList.remove("active"))),
              o.prevActiveIndex !== undefined &&
                o.prevActiveIndex !== o.activeIndex &&
                o.prevActiveIndex !== o.selectedIndex &&
                l &&
                l.length &&
                (l.classList.remove("active"),
                l.firstChild && l.firstChild.classList.remove("active")),
              (r || m) &&
                ((y = o.selectpicker.view.visibleElements
                  ? o.selectpicker.view.visibleElements.slice()
                  : []),
                (o.selectpicker.view.visibleElements =
                  o.selectpicker.current.elements.slice(
                    o.selectpicker.view.position0,
                    o.selectpicker.view.position1
                  )),
                o.setOptionStatus(),
                (t || (!1 === w && r)) &&
                  (b = !i(y, o.selectpicker.view.visibleElements)),
                (r || !0 === w) && b))
            ) {
              var x,
                D,
                T = o.$menuInner[0],
                C = document.createDocumentFragment(),
                M = T.firstChild.cloneNode(!1),
                A =
                  !0 === w
                    ? o.selectpicker.view.visibleElements
                    : o.selectpicker.current.elements,
                E = !0 === w ? o.selectpicker.view.position0 : 0,
                j = [];
              T.replaceChild(M, T.firstChild);
              S = 0;
              for (var $ = A.length; S < $; S++) {
                var N,
                  _,
                  I = A[S];
                o.options.sanitize &&
                  (N = I.lastChild) &&
                  (_ = o.selectpicker.current.data[S + E].data) &&
                  _.content &&
                  !_.sanitized &&
                  (j.push(N), (_.sanitized = !0)),
                  C.appendChild(I);
              }
              o.options.sanitize &&
                j.length &&
                n(j, o.options.whiteList, o.options.sanitizeFn),
                !0 === w &&
                  ((x =
                    0 === o.selectpicker.view.position0
                      ? 0
                      : o.selectpicker.current.data[
                          o.selectpicker.view.position0 - 1
                        ].position),
                  (D =
                    o.selectpicker.view.position1 > g - 1
                      ? 0
                      : o.selectpicker.current.data[g - 1].position -
                        o.selectpicker.current.data[
                          o.selectpicker.view.position1 - 1
                        ].position),
                  (T.firstChild.style.marginTop = x + "px"),
                  (T.firstChild.style.marginBottom = D + "px")),
                T.firstChild.appendChild(C);
            }
            if (((o.prevActiveIndex = o.activeIndex), o.options.liveSearch)) {
              if (t && r) {
                var O,
                  L = 0;
                o.selectpicker.view.canHighlight[L] ||
                  (L =
                    1 + o.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                  (O = o.selectpicker.view.visibleElements[L]),
                  o.selectpicker.view.currentActive &&
                    (o.selectpicker.view.currentActive.classList.remove(
                      "active"
                    ),
                    o.selectpicker.view.currentActive.firstChild &&
                      o.selectpicker.view.currentActive.firstChild.classList.remove(
                        "active"
                      )),
                  O &&
                    (O.classList.add("active"),
                    O.firstChild && O.firstChild.classList.add("active")),
                  (o.activeIndex = o.selectpicker.current.map.originalIndex[L]);
              }
            } else o.$menuInner.trigger("focus");
          }
          r = r || 0;
          var o = this;
          this.selectpicker.current = t
            ? this.selectpicker.search
            : this.selectpicker.main;
          var s,
            l,
            d = [];
          this.setPositionData(),
            a(r, !0),
            this.$menuInner
              .off("scroll.createView")
              .on("scroll.createView", function (e, t) {
                o.noScroll || a(this.scrollTop, t), (o.noScroll = !1);
              }),
            e(window)
              .off("resize" + _ + "." + this.selectId + ".createView")
              .on(
                "resize" + _ + "." + this.selectId + ".createView",
                function () {
                  o.$newElement.hasClass(I.SHOW) &&
                    a(o.$menuInner[0].scrollTop);
                }
              );
        },
        setPlaceholder: function () {
          var t = !1;
          if (this.options.title && !this.multiple) {
            this.selectpicker.view.titleOption ||
              (this.selectpicker.view.titleOption =
                document.createElement("option")),
              (t = !0);
            var n = this.$element[0],
              i = !1,
              r = !this.selectpicker.view.titleOption.parentNode;
            if (r)
              (this.selectpicker.view.titleOption.className =
                "bs-title-option"),
                (this.selectpicker.view.titleOption.value = ""),
                (i =
                  e(n.options[n.selectedIndex]).attr("selected") ===
                    undefined && this.$element.data("selected") === undefined);
            (r || 0 !== this.selectpicker.view.titleOption.index) &&
              n.insertBefore(this.selectpicker.view.titleOption, n.firstChild),
              i && (n.selectedIndex = 0);
          }
          return t;
        },
        createLi: function () {
          var e,
            t,
            n = this,
            i = n.options.iconBase,
            r = ':not([hidden]):not([data-hidden="true"])',
            a = [],
            o = 0,
            s = [],
            l = 0,
            d = 0,
            c = -1;
          this.options.hideDisabled && (r += ":not(:disabled)"),
            (n.options.showTick || n.multiple) &&
              (((e = L.span.cloneNode(!1)).className =
                i + " " + n.options.tickIcon + " check-mark"),
              L.a.appendChild(e)),
            this.setPlaceholder() && c--;
          for (
            var u = this.$element[0].options, h = 0, p = u.length;
            h < p;
            h++
          ) {
            var f = u[h];
            if ((c++, !f.classList.contains("bs-title-option"))) {
              var m,
                y,
                g,
                v,
                b = {
                  content: f.getAttribute("data-content"),
                  tokens: f.getAttribute("data-tokens"),
                  subtext: f.getAttribute("data-subtext"),
                  icon: f.getAttribute("data-icon"),
                  hidden: "true" === f.getAttribute("data-hidden"),
                  divider: "true" === f.getAttribute("data-divider"),
                },
                w = f.className || "",
                S = f.style.cssText,
                k = S ? A(S) : "",
                x = b.content,
                D = f.textContent,
                T = f.parentNode,
                C = f.nextElementSibling,
                M = f.previousElementSibling,
                E = "OPTGROUP" === T.tagName,
                j = E && T.disabled,
                $ = f.disabled || j,
                N = M && "OPTGROUP" === M.tagName,
                _ = { hidden: "true" === T.getAttribute("data-hidden") };
              if (
                !0 === b.hidden ||
                f.hidden ||
                (E && (!0 === _.hidden || T.hidden)) ||
                (n.options.hideDisabled && ($ || j))
              )
                (m = f.prevHiddenIndex),
                  C && (C.prevHiddenIndex = m !== undefined ? m : h),
                  c--;
              else {
                if (
                  (C &&
                    C.prevHiddenIndex !== undefined &&
                    (C.prevHiddenIndex = undefined),
                  E && !0 !== b.divider)
                ) {
                  var O = " " + T.className || "",
                    P = f.previousElementSibling;
                  if (
                    ((m = f.prevHiddenIndex) !== undefined &&
                      (P = u[m].previousElementSibling),
                    !P)
                  ) {
                    (l += 1),
                      (_.subtext = T.getAttribute("data-subtext")),
                      (_.icon = T.getAttribute("data-icon"));
                    var z = T.label,
                      H = A(z),
                      R = _.subtext,
                      J = _.icon;
                    0 !== h &&
                      a.length > 0 &&
                      (c++,
                      a.push(F.li(!1, I.DIVIDER, l + "div")),
                      s.push({ type: "divider", optID: l })),
                      c++,
                      (g = F.label({
                        labelEscaped: H,
                        labelSubtext: R,
                        labelIcon: J,
                        iconBase: i,
                      })),
                      a.push(F.li(g, "dropdown-header" + O, l)),
                      s.push({
                        content: H,
                        subtext: R,
                        type: "optgroup-label",
                        optID: l,
                      }),
                      (d = c - 1);
                  }
                  (y = F.text({
                    text: D,
                    optionContent: x,
                    optionSubtext: b.subtext,
                    optionIcon: b.icon,
                    iconBase: i,
                  })),
                    a.push(F.li(F.a(y, "opt " + w + O, k), "", l)),
                    s.push({
                      content: x || D,
                      subtext: b.subtext,
                      tokens: b.tokens,
                      type: "option",
                      optID: l,
                      headerIndex: d,
                      lastIndex: d + T.querySelectorAll("option" + r).length,
                      originalIndex: h,
                      data: b,
                    });
                } else if (!0 === b.divider)
                  a.push(F.li(!1, I.DIVIDER)),
                    s.push({ type: "divider", originalIndex: h, data: b });
                else {
                  if (n.options.hideDisabled)
                    if (N)
                      M.querySelectorAll("option:disabled").length ===
                        M.children.length && (N = !1);
                    else if ((m = f.prevHiddenIndex) !== undefined)
                      if (
                        (v = u[m].previousElementSibling) &&
                        "OPTGROUP" === v.tagName &&
                        !v.disabled
                      )
                        v.querySelectorAll("option:disabled").length <
                          v.children.length && (N = !0);
                  N &&
                    s.length &&
                    "divider" !== s[s.length - 1].type &&
                    (c++,
                    a.push(F.li(!1, I.DIVIDER, l + "div")),
                    s.push({ type: "divider", optID: l })),
                    (y = F.text({
                      text: D,
                      optionContent: x,
                      optionSubtext: b.subtext,
                      optionIcon: b.icon,
                      iconBase: i,
                    })),
                    a.push(F.li(F.a(y, w, k))),
                    s.push({
                      content: x || D,
                      subtext: b.subtext,
                      tokens: b.tokens,
                      type: "option",
                      originalIndex: h,
                      data: b,
                    });
                }
                (n.selectpicker.main.map.newIndex[h] = c),
                  (n.selectpicker.main.map.originalIndex[c] = h);
                var W = s[s.length - 1];
                W.disabled = $;
                var U = 0;
                W.content && (U += W.content.length),
                  W.subtext && (U += W.subtext.length),
                  b.icon && (U += 1),
                  U > o && ((o = U), (t = a[a.length - 1]));
              }
            }
          }
          (this.selectpicker.main.elements = a),
            (this.selectpicker.main.data = s),
            (this.selectpicker.current = this.selectpicker.main),
            (this.selectpicker.view.widestOption = t);
        },
        findLis: function () {
          return this.$menuInner.find(".inner > li");
        },
        render: function () {
          this.setPlaceholder();
          var e,
            t,
            i = this,
            r = this.$element[0].selectedOptions,
            a = r.length,
            o = this.$button[0],
            s = o.querySelector(".filter-option-inner-inner"),
            l = document.createTextNode(this.options.multipleSeparator),
            d = L.fragment.cloneNode(!1),
            c = !1;
          if (
            (this.togglePlaceholder(),
            this.tabIndex(),
            "static" === this.options.selectedTextFormat)
          )
            d = F.text({ text: this.options.title }, !0);
          else if (
            ((e =
              this.multiple &&
              -1 !== this.options.selectedTextFormat.indexOf("count") &&
              a > 1) &&
              (e =
                ((t = this.options.selectedTextFormat.split(">")).length > 1 &&
                  a > t[1]) ||
                (1 === t.length && a >= 2)),
            !1 === e)
          ) {
            for (var u = 0; u < a && u < 50; u++) {
              var h = r[u],
                p = {},
                f = {
                  content: h.getAttribute("data-content"),
                  subtext: h.getAttribute("data-subtext"),
                  icon: h.getAttribute("data-icon"),
                };
              this.multiple && u > 0 && d.appendChild(l.cloneNode(!1)),
                h.title
                  ? (p.text = h.title)
                  : f.content && i.options.showContent
                  ? ((p.optionContent = f.content.toString()), (c = !0))
                  : (i.options.showIcon &&
                      ((p.optionIcon = f.icon),
                      (p.iconBase = this.options.iconBase)),
                    i.options.showSubtext &&
                      !i.multiple &&
                      f.subtext &&
                      (p.optionSubtext = " " + f.subtext),
                    (p.text = h.textContent.trim())),
                d.appendChild(F.text(p, !0));
            }
            a > 49 && d.appendChild(document.createTextNode("..."));
          } else {
            var m =
              ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
            this.options.hideDisabled && (m += ":not(:disabled)");
            var y = this.$element[0].querySelectorAll(
                "select > option" + m + ", optgroup" + m + " option" + m
              ).length,
              g =
                "function" == typeof this.options.countSelectedText
                  ? this.options.countSelectedText(a, y)
                  : this.options.countSelectedText;
            d = F.text(
              {
                text: g
                  .replace("{0}", a.toString())
                  .replace("{1}", y.toString()),
              },
              !0
            );
          }
          if (
            (this.options.title == undefined &&
              (this.options.title = this.$element.attr("title")),
            d.childNodes.length ||
              (d = F.text(
                {
                  text:
                    "undefined" != typeof this.options.title
                      ? this.options.title
                      : this.options.noneSelectedText,
                },
                !0
              )),
            (o.title = d.textContent.replace(/<[^>]*>?/g, "").trim()),
            this.options.sanitize &&
              c &&
              n([d], i.options.whiteList, i.options.sanitizeFn),
            (s.innerHTML = ""),
            s.appendChild(d),
            $.major < 4 &&
              this.$newElement[0].parentNode.classList.contains("input-group"))
          ) {
            var v = o.querySelector(".filter-expand"),
              b = s.cloneNode(!0);
            (b.className = "filter-expand"),
              v ? o.replaceChild(b, v) : o.appendChild(b);
          }
          this.$element.trigger("rendered" + _);
        },
        setStyle: function (e, t) {
          var n,
            i = this.$button[0],
            r = this.options.style.split(" ");
          this.$element.attr("class") &&
            this.$newElement.addClass(
              this.$element
                .attr("class")
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ""
                )
            ),
            $.major < 4 && this.$newElement[0].classList.add("bs3"),
            (n = e ? e.split(" ") : r),
            "add" == t
              ? i.classList.add.apply(i.classList, n)
              : "remove" == t
              ? i.classList.remove.apply(i.classList, n)
              : (i.classList.remove.apply(i.classList, r),
                i.classList.add.apply(i.classList, n));
        },
        liHeight: function (t) {
          if (t || (!1 !== this.options.size && !this.sizeInfo)) {
            this.sizeInfo || (this.sizeInfo = {});
            var n = document.createElement("div"),
              i = document.createElement("div"),
              r = document.createElement("div"),
              a = document.createElement("ul"),
              s = document.createElement("li"),
              l = document.createElement("li"),
              d = document.createElement("li"),
              c = document.createElement("a"),
              u = document.createElement("span"),
              h =
                this.options.header &&
                this.$menu.find("." + I.POPOVERHEADER).length > 0
                  ? this.$menu.find("." + I.POPOVERHEADER)[0].cloneNode(!0)
                  : null,
              p = this.options.liveSearch
                ? document.createElement("div")
                : null,
              f =
                this.options.actionsBox &&
                this.multiple &&
                this.$menu.find(".bs-actionsbox").length > 0
                  ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0)
                  : null,
              m =
                this.options.doneButton &&
                this.multiple &&
                this.$menu.find(".bs-donebutton").length > 0
                  ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0)
                  : null,
              y = this.$element.find("option")[0];
            if (
              ((this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth),
              (u.className = "text"),
              (c.className = "dropdown-item " + (y ? y.className : "")),
              (n.className = this.$menu[0].parentNode.className + " " + I.SHOW),
              (n.style.width = this.sizeInfo.selectWidth + "px"),
              "auto" === this.options.width && (i.style.minWidth = 0),
              (i.className = I.MENU + " " + I.SHOW),
              (r.className = "inner " + I.SHOW),
              (a.className =
                I.MENU + " inner " + ("4" === $.major ? I.SHOW : "")),
              (s.className = I.DIVIDER),
              (l.className = "dropdown-header"),
              u.appendChild(document.createTextNode("\u200b")),
              c.appendChild(u),
              d.appendChild(c),
              l.appendChild(u.cloneNode(!0)),
              this.selectpicker.view.widestOption &&
                a.appendChild(
                  this.selectpicker.view.widestOption.cloneNode(!0)
                ),
              a.appendChild(d),
              a.appendChild(s),
              a.appendChild(l),
              h && i.appendChild(h),
              p)
            ) {
              var g = document.createElement("input");
              (p.className = "bs-searchbox"),
                (g.className = "form-control"),
                p.appendChild(g),
                i.appendChild(p);
            }
            f && i.appendChild(f),
              r.appendChild(a),
              i.appendChild(r),
              m && i.appendChild(m),
              n.appendChild(i),
              document.body.appendChild(n);
            var v,
              b = d.offsetHeight,
              w = l ? l.offsetHeight : 0,
              S = h ? h.offsetHeight : 0,
              k = p ? p.offsetHeight : 0,
              x = f ? f.offsetHeight : 0,
              D = m ? m.offsetHeight : 0,
              T = e(s).outerHeight(!0),
              C = !!window.getComputedStyle && window.getComputedStyle(i),
              M = i.offsetWidth,
              A = C ? null : e(i),
              E = {
                vert:
                  o(C ? C.paddingTop : A.css("paddingTop")) +
                  o(C ? C.paddingBottom : A.css("paddingBottom")) +
                  o(C ? C.borderTopWidth : A.css("borderTopWidth")) +
                  o(C ? C.borderBottomWidth : A.css("borderBottomWidth")),
                horiz:
                  o(C ? C.paddingLeft : A.css("paddingLeft")) +
                  o(C ? C.paddingRight : A.css("paddingRight")) +
                  o(C ? C.borderLeftWidth : A.css("borderLeftWidth")) +
                  o(C ? C.borderRightWidth : A.css("borderRightWidth")),
              },
              j = {
                vert:
                  E.vert +
                  o(C ? C.marginTop : A.css("marginTop")) +
                  o(C ? C.marginBottom : A.css("marginBottom")) +
                  2,
                horiz:
                  E.horiz +
                  o(C ? C.marginLeft : A.css("marginLeft")) +
                  o(C ? C.marginRight : A.css("marginRight")) +
                  2,
              };
            (r.style.overflowY = "scroll"),
              (v = i.offsetWidth - M),
              document.body.removeChild(n),
              (this.sizeInfo.liHeight = b),
              (this.sizeInfo.dropdownHeaderHeight = w),
              (this.sizeInfo.headerHeight = S),
              (this.sizeInfo.searchHeight = k),
              (this.sizeInfo.actionsHeight = x),
              (this.sizeInfo.doneButtonHeight = D),
              (this.sizeInfo.dividerHeight = T),
              (this.sizeInfo.menuPadding = E),
              (this.sizeInfo.menuExtras = j),
              (this.sizeInfo.menuWidth = M),
              (this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth),
              (this.sizeInfo.scrollBarWidth = v),
              (this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight),
              this.setPositionData();
          }
        },
        getSelectPosition: function () {
          var t,
            n = this,
            i = e(window),
            r = n.$newElement.offset(),
            a = e(n.options.container);
          n.options.container && a.length && !a.is("body")
            ? (((t = a.offset()).top += parseInt(a.css("borderTopWidth"))),
              (t.left += parseInt(a.css("borderLeftWidth"))))
            : (t = { top: 0, left: 0 });
          var o = n.options.windowPadding;
          (this.sizeInfo.selectOffsetTop = r.top - t.top - i.scrollTop()),
            (this.sizeInfo.selectOffsetBot =
              i.height() -
              this.sizeInfo.selectOffsetTop -
              this.sizeInfo.selectHeight -
              t.top -
              o[2]),
            (this.sizeInfo.selectOffsetLeft = r.left - t.left - i.scrollLeft()),
            (this.sizeInfo.selectOffsetRight =
              i.width() -
              this.sizeInfo.selectOffsetLeft -
              this.sizeInfo.selectWidth -
              t.left -
              o[1]),
            (this.sizeInfo.selectOffsetTop -= o[0]),
            (this.sizeInfo.selectOffsetLeft -= o[3]);
        },
        setMenuSize: function () {
          this.getSelectPosition();
          var e,
            t,
            n,
            i,
            r,
            a,
            o,
            s = this.sizeInfo.selectWidth,
            l = this.sizeInfo.liHeight,
            d = this.sizeInfo.headerHeight,
            c = this.sizeInfo.searchHeight,
            u = this.sizeInfo.actionsHeight,
            h = this.sizeInfo.doneButtonHeight,
            p = this.sizeInfo.dividerHeight,
            f = this.sizeInfo.menuPadding,
            m = 0;
          if (
            (this.options.dropupAuto &&
              ((o = l * this.selectpicker.current.elements.length + f.vert),
              this.$newElement.toggleClass(
                I.DROPUP,
                this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot >
                  this.sizeInfo.menuExtras.vert &&
                  o + this.sizeInfo.menuExtras.vert + 50 >
                    this.sizeInfo.selectOffsetBot
              )),
            "auto" === this.options.size)
          )
            (i =
              this.selectpicker.current.elements.length > 3
                ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2
                : 0),
              (t =
                this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert),
              (n = i + d + c + u + h),
              (a = Math.max(i - f.vert, 0)),
              this.$newElement.hasClass(I.DROPUP) &&
                (t =
                  this.sizeInfo.selectOffsetTop -
                  this.sizeInfo.menuExtras.vert),
              (r = t),
              (e = t - d - c - u - h - f.vert);
          else if (
            this.options.size &&
            "auto" != this.options.size &&
            this.selectpicker.current.elements.length > this.options.size
          ) {
            for (var y = 0; y < this.options.size; y++)
              "divider" === this.selectpicker.current.data[y].type && m++;
            (e = (t = l * this.options.size + m * p + f.vert) - f.vert),
              (r = t + d + c + u + h),
              (n = a = "");
          }
          "auto" === this.options.dropdownAlignRight &&
            this.$menu.toggleClass(
              I.MENURIGHT,
              this.sizeInfo.selectOffsetLeft >
                this.sizeInfo.selectOffsetRight &&
                this.sizeInfo.selectOffsetRight <
                  this.sizeInfo.totalMenuWidth - s
            ),
            this.$menu.css({
              "max-height": r + "px",
              overflow: "hidden",
              "min-height": n + "px",
            }),
            this.$menuInner.css({
              "max-height": e + "px",
              "overflow-y": "auto",
              "min-height": a + "px",
            }),
            (this.sizeInfo.menuInnerHeight = Math.max(e, 1)),
            this.selectpicker.current.data.length &&
              this.selectpicker.current.data[
                this.selectpicker.current.data.length - 1
              ].position > this.sizeInfo.menuInnerHeight &&
              ((this.sizeInfo.hasScrollBar = !0),
              (this.sizeInfo.totalMenuWidth =
                this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth),
              this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)),
            this.dropdown &&
              this.dropdown._popper &&
              this.dropdown._popper.update();
        },
        setSize: function (t) {
          if (
            (this.liHeight(t),
            this.options.header && this.$menu.css("padding-top", 0),
            !1 !== this.options.size)
          ) {
            var n,
              i = this,
              r = e(window),
              a = 0;
            this.setMenuSize(),
              this.options.liveSearch &&
                this.$searchbox
                  .off("input.setMenuSize propertychange.setMenuSize")
                  .on(
                    "input.setMenuSize propertychange.setMenuSize",
                    function () {
                      return i.setMenuSize();
                    }
                  ),
              "auto" === this.options.size
                ? r
                    .off(
                      "resize" +
                        _ +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        _ +
                        "." +
                        this.selectId +
                        ".setMenuSize"
                    )
                    .on(
                      "resize" +
                        _ +
                        "." +
                        this.selectId +
                        ".setMenuSize scroll" +
                        _ +
                        "." +
                        this.selectId +
                        ".setMenuSize",
                      function () {
                        return i.setMenuSize();
                      }
                    )
                : this.options.size &&
                  "auto" != this.options.size &&
                  this.selectpicker.current.elements.length >
                    this.options.size &&
                  r.off(
                    "resize" +
                      _ +
                      "." +
                      this.selectId +
                      ".setMenuSize scroll" +
                      _ +
                      "." +
                      this.selectId +
                      ".setMenuSize"
                  ),
              t
                ? (a = this.$menuInner[0].scrollTop)
                : i.multiple ||
                  ("number" ==
                    typeof (n =
                      i.selectpicker.main.map.newIndex[
                        i.$element[0].selectedIndex
                      ]) &&
                    !1 !== i.options.size &&
                    (a =
                      (a = i.sizeInfo.liHeight * n) -
                      i.sizeInfo.menuInnerHeight / 2 +
                      i.sizeInfo.liHeight / 2)),
              i.createView(!1, a);
          }
        },
        setWidth: function () {
          var e = this;
          "auto" === this.options.width
            ? requestAnimationFrame(function () {
                e.$menu.css("min-width", "0"),
                  e.$element.on("loaded" + _, function () {
                    e.liHeight(), e.setMenuSize();
                    var t = e.$newElement.clone().appendTo("body"),
                      n = t
                        .css("width", "auto")
                        .children("button")
                        .outerWidth();
                    t.remove(),
                      (e.sizeInfo.selectWidth = Math.max(
                        e.sizeInfo.totalMenuWidth,
                        n
                      )),
                      e.$newElement.css("width", e.sizeInfo.selectWidth + "px");
                  });
              })
            : "fit" === this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "").addClass("fit-width"))
            : this.options.width
            ? (this.$menu.css("min-width", ""),
              this.$newElement.css("width", this.options.width))
            : (this.$menu.css("min-width", ""),
              this.$newElement.css("width", "")),
            this.$newElement.hasClass("fit-width") &&
              "fit" !== this.options.width &&
              this.$newElement[0].classList.remove("fit-width");
        },
        selectPosition: function () {
          this.$bsContainer = e('<div class="bs-container" />');
          var t,
            n,
            i,
            r = this,
            a = e(this.options.container),
            o = function (o) {
              var s = {},
                l =
                  r.options.display ||
                  (!!e.fn.dropdown.Constructor.Default &&
                    e.fn.dropdown.Constructor.Default.display);
              r.$bsContainer
                .addClass(
                  o.attr("class").replace(/form-control|fit-width/gi, "")
                )
                .toggleClass(I.DROPUP, o.hasClass(I.DROPUP)),
                (t = o.offset()),
                a.is("body")
                  ? (n = { top: 0, left: 0 })
                  : (((n = a.offset()).top +=
                      parseInt(a.css("borderTopWidth")) - a.scrollTop()),
                    (n.left +=
                      parseInt(a.css("borderLeftWidth")) - a.scrollLeft())),
                (i = o.hasClass(I.DROPUP) ? 0 : o[0].offsetHeight),
                ($.major < 4 || "static" === l) &&
                  ((s.top = t.top - n.top + i), (s.left = t.left - n.left)),
                (s.width = o[0].offsetWidth),
                r.$bsContainer.css(s);
            };
          this.$button.on("click.bs.dropdown.data-api", function () {
            r.isDisabled() ||
              (o(r.$newElement),
              r.$bsContainer
                .appendTo(r.options.container)
                .toggleClass(I.SHOW, !r.$button.hasClass(I.SHOW))
                .append(r.$menu));
          }),
            e(window)
              .off(
                "resize" +
                  _ +
                  "." +
                  this.selectId +
                  " scroll" +
                  _ +
                  "." +
                  this.selectId
              )
              .on(
                "resize" +
                  _ +
                  "." +
                  this.selectId +
                  " scroll" +
                  _ +
                  "." +
                  this.selectId,
                function () {
                  r.$newElement.hasClass(I.SHOW) && o(r.$newElement);
                }
              ),
            this.$element.on("hide" + _, function () {
              r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach();
            });
        },
        setOptionStatus: function () {
          var e = this,
            t = this.$element[0].options;
          if (
            ((e.noScroll = !1),
            e.selectpicker.view.visibleElements &&
              e.selectpicker.view.visibleElements.length)
          )
            for (
              var n = 0;
              n < e.selectpicker.view.visibleElements.length;
              n++
            ) {
              var i =
                  e.selectpicker.current.map.originalIndex[
                    n + e.selectpicker.view.position0
                  ],
                r = t[i];
              if (r) {
                var a = this.selectpicker.main.map.newIndex[i],
                  o = this.selectpicker.main.elements[a];
                e.setDisabled(
                  i,
                  r.disabled ||
                    ("OPTGROUP" === r.parentNode.tagName &&
                      r.parentNode.disabled),
                  a,
                  o
                ),
                  e.setSelected(i, r.selected, a, o);
              }
            }
        },
        setSelected: function (e, t, n, i) {
          var r,
            a,
            o,
            s = this.activeIndex !== undefined,
            l = this.activeIndex === e || (t && !this.multiple && !s);
          n || (n = this.selectpicker.main.map.newIndex[e]),
            i || (i = this.selectpicker.main.elements[n]),
            (o = i.firstChild),
            t && (this.selectedIndex = e),
            i.classList.toggle("selected", t),
            i.classList.toggle("active", l),
            l &&
              ((this.selectpicker.view.currentActive = i),
              (this.activeIndex = e)),
            o &&
              (o.classList.toggle("selected", t),
              o.classList.toggle("active", l),
              o.setAttribute("aria-selected", t)),
            l ||
              (!s &&
                t &&
                this.prevActiveIndex !== undefined &&
                ((r =
                  this.selectpicker.main.map.newIndex[this.prevActiveIndex]),
                (a = this.selectpicker.main.elements[r]).classList.remove(
                  "active"
                ),
                a.firstChild && a.firstChild.classList.remove("active")));
        },
        setDisabled: function (e, t, n, i) {
          var r;
          n || (n = this.selectpicker.main.map.newIndex[e]),
            i || (i = this.selectpicker.main.elements[n]),
            (r = i.firstChild),
            i.classList.toggle(I.DISABLED, t),
            r &&
              ("4" === $.major && r.classList.toggle(I.DISABLED, t),
              r.setAttribute("aria-disabled", t),
              t
                ? r.setAttribute("tabindex", -1)
                : r.setAttribute("tabindex", 0));
        },
        isDisabled: function () {
          return this.$element[0].disabled;
        },
        checkDisabled: function () {
          var e = this;
          this.isDisabled()
            ? (this.$newElement[0].classList.add(I.DISABLED),
              this.$button
                .addClass(I.DISABLED)
                .attr("tabindex", -1)
                .attr("aria-disabled", !0))
            : (this.$button[0].classList.contains(I.DISABLED) &&
                (this.$newElement[0].classList.remove(I.DISABLED),
                this.$button.removeClass(I.DISABLED).attr("aria-disabled", !1)),
              -1 != this.$button.attr("tabindex") ||
                this.$element.data("tabindex") ||
                this.$button.removeAttr("tabindex")),
            this.$button.on("click", function () {
              return !e.isDisabled();
            });
        },
        togglePlaceholder: function () {
          var e = this.$element[0],
            t = e.selectedIndex,
            n = -1 === t;
          n || e.options[t].value || (n = !0),
            this.$button.toggleClass("bs-placeholder", n);
        },
        tabIndex: function () {
          this.$element.data("tabindex") !== this.$element.attr("tabindex") &&
            -98 !== this.$element.attr("tabindex") &&
            "-98" !== this.$element.attr("tabindex") &&
            (this.$element.data("tabindex", this.$element.attr("tabindex")),
            this.$button.attr("tabindex", this.$element.data("tabindex"))),
            this.$element.attr("tabindex", -98);
        },
        clickListener: function () {
          function t() {
            i.options.liveSearch
              ? i.$searchbox.trigger("focus")
              : i.$menuInner.trigger("focus");
          }
          function n() {
            i.dropdown &&
            i.dropdown._popper &&
            i.dropdown._popper.state.isCreated
              ? t()
              : requestAnimationFrame(n);
          }
          var i = this,
            a = e(document);
          a.data("spaceSelect", !1),
            this.$button.on("keyup", function (e) {
              /(32)/.test(e.keyCode.toString(10)) &&
                a.data("spaceSelect") &&
                (e.preventDefault(), a.data("spaceSelect", !1));
            }),
            this.$newElement.on("show.bs.dropdown", function () {
              $.major > 3 &&
                !i.dropdown &&
                ((i.dropdown = i.$button.data("bs.dropdown")),
                (i.dropdown._menu = i.$menu[0]));
            }),
            this.$button.on("click.bs.dropdown.data-api", function () {
              i.$newElement.hasClass(I.SHOW) || i.setSize();
            }),
            this.$element.on("shown" + _, function () {
              i.$menuInner[0].scrollTop !== i.selectpicker.view.scrollTop &&
                (i.$menuInner[0].scrollTop = i.selectpicker.view.scrollTop),
                $.major > 3 ? requestAnimationFrame(n) : t();
            }),
            this.$menuInner.on("click", "li a", function (t, n) {
              var a = e(this),
                o = i.isVirtual() ? i.selectpicker.view.position0 : 0,
                s =
                  i.selectpicker.current.map.originalIndex[
                    a.parent().index() + o
                  ],
                l = r(i.$element[0]),
                d = i.$element.prop("selectedIndex"),
                c = !0;
              if (
                (i.multiple &&
                  1 !== i.options.maxOptions &&
                  t.stopPropagation(),
                t.preventDefault(),
                !i.isDisabled() && !a.parent().hasClass(I.DISABLED))
              ) {
                var u = i.$element.find("option"),
                  h = u.eq(s),
                  p = h.prop("selected"),
                  f = h.parent("optgroup"),
                  m = f.find("option"),
                  y = i.options.maxOptions,
                  g = f.data("maxOptions") || !1;
                if (
                  (s === i.activeIndex && (n = !0),
                  n ||
                    ((i.prevActiveIndex = i.activeIndex),
                    (i.activeIndex = undefined)),
                  i.multiple)
                ) {
                  if (
                    (h.prop("selected", !p),
                    i.setSelected(s, !p),
                    a.trigger("blur"),
                    !1 !== y || !1 !== g)
                  ) {
                    var v = y < u.filter(":selected").length,
                      b = g < f.find("option:selected").length;
                    if ((y && v) || (g && b))
                      if (y && 1 == y) {
                        u.prop("selected", !1), h.prop("selected", !0);
                        for (var w = 0; w < u.length; w++) i.setSelected(w, !1);
                        i.setSelected(s, !0);
                      } else if (g && 1 == g) {
                        f.find("option:selected").prop("selected", !1),
                          h.prop("selected", !0);
                        for (w = 0; w < m.length; w++) {
                          var S = m[w];
                          i.setSelected(u.index(S), !1);
                        }
                        i.setSelected(s, !0);
                      } else {
                        var k =
                            "string" == typeof i.options.maxOptionsText
                              ? [
                                  i.options.maxOptionsText,
                                  i.options.maxOptionsText,
                                ]
                              : i.options.maxOptionsText,
                          D = "function" == typeof k ? k(y, g) : k,
                          T = D[0].replace("{n}", y),
                          C = D[1].replace("{n}", g),
                          M = e('<div class="notify"></div>');
                        D[2] &&
                          ((T = T.replace("{var}", D[2][y > 1 ? 0 : 1])),
                          (C = C.replace("{var}", D[2][g > 1 ? 0 : 1]))),
                          h.prop("selected", !1),
                          i.$menu.append(M),
                          y &&
                            v &&
                            (M.append(e("<div>" + T + "</div>")),
                            (c = !1),
                            i.$element.trigger("maxReached" + _)),
                          g &&
                            b &&
                            (M.append(e("<div>" + C + "</div>")),
                            (c = !1),
                            i.$element.trigger("maxReachedGrp" + _)),
                          setTimeout(function () {
                            i.setSelected(s, !1);
                          }, 10),
                          M.delay(750).fadeOut(300, function () {
                            e(this).remove();
                          });
                      }
                  }
                } else
                  u.prop("selected", !1),
                    h.prop("selected", !0),
                    i.setSelected(s, !0);
                !i.multiple || (i.multiple && 1 === i.options.maxOptions)
                  ? i.$button.trigger("focus")
                  : i.options.liveSearch && i.$searchbox.trigger("focus"),
                  c &&
                    ((l != r(i.$element[0]) && i.multiple) ||
                      (d != i.$element.prop("selectedIndex") && !i.multiple)) &&
                    ((x = [s, h.prop("selected"), l]),
                    i.$element.triggerNative("change"));
              }
            }),
            this.$menu.on(
              "click",
              "li." +
                I.DISABLED +
                " a, ." +
                I.POPOVERHEADER +
                ", ." +
                I.POPOVERHEADER +
                " :not(.close)",
              function (t) {
                t.currentTarget == this &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  i.options.liveSearch && !e(t.target).hasClass("close")
                    ? i.$searchbox.trigger("focus")
                    : i.$button.trigger("focus"));
              }
            ),
            this.$menuInner.on(
              "click",
              ".divider, .dropdown-header",
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  i.options.liveSearch
                    ? i.$searchbox.trigger("focus")
                    : i.$button.trigger("focus");
              }
            ),
            this.$menu.on(
              "click",
              "." + I.POPOVERHEADER + " .close",
              function () {
                i.$button.trigger("click");
              }
            ),
            this.$searchbox.on("click", function (e) {
              e.stopPropagation();
            }),
            this.$menu.on("click", ".actions-btn", function (t) {
              i.options.liveSearch
                ? i.$searchbox.trigger("focus")
                : i.$button.trigger("focus"),
                t.preventDefault(),
                t.stopPropagation(),
                e(this).hasClass("bs-select-all")
                  ? i.selectAll()
                  : i.deselectAll();
            }),
            this.$element.on({
              change: function () {
                i.render(), i.$element.trigger("changed" + _, x), (x = null);
              },
              focus: function () {
                i.options.mobile || i.$button.trigger("focus");
              },
            });
        },
        liveSearchListener: function () {
          var e = this,
            t = document.createElement("li");
          this.$button.on("click.bs.dropdown.data-api", function () {
            e.$searchbox.val() && e.$searchbox.val("");
          }),
            this.$searchbox.on(
              "click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",
              function (e) {
                e.stopPropagation();
              }
            ),
            this.$searchbox.on("input propertychange", function () {
              var n = e.$searchbox.val();
              if (
                ((e.selectpicker.search.map.newIndex = {}),
                (e.selectpicker.search.map.originalIndex = {}),
                (e.selectpicker.search.elements = []),
                (e.selectpicker.search.data = []),
                n)
              ) {
                var i = [],
                  r = n.toUpperCase(),
                  o = {},
                  s = [],
                  d = e._searchStyle(),
                  c = e.options.liveSearchNormalize;
                c && (r = l(r)),
                  (e._$lisSelected = e.$menuInner.find(".selected"));
                for (var u = 0; u < e.selectpicker.main.data.length; u++) {
                  var h = e.selectpicker.main.data[u];
                  o[u] || (o[u] = a(h, r, d, c)),
                    o[u] &&
                      h.headerIndex !== undefined &&
                      -1 === s.indexOf(h.headerIndex) &&
                      (h.headerIndex > 0 &&
                        ((o[h.headerIndex - 1] = !0),
                        s.push(h.headerIndex - 1)),
                      (o[h.headerIndex] = !0),
                      s.push(h.headerIndex),
                      (o[h.lastIndex + 1] = !0)),
                    o[u] && "optgroup-label" !== h.type && s.push(u);
                }
                u = 0;
                for (var p = s.length; u < p; u++) {
                  var f = s[u],
                    m = s[u - 1],
                    y =
                      ((h = e.selectpicker.main.data[f]),
                      e.selectpicker.main.data[m]);
                  ("divider" !== h.type ||
                    ("divider" === h.type &&
                      y &&
                      "divider" !== y.type &&
                      p - 1 !== u)) &&
                    (e.selectpicker.search.data.push(h),
                    i.push(e.selectpicker.main.elements[f]),
                    h.hasOwnProperty("originalIndex") &&
                      ((e.selectpicker.search.map.newIndex[h.originalIndex] =
                        i.length - 1),
                      (e.selectpicker.search.map.originalIndex[i.length - 1] =
                        h.originalIndex)));
                }
                (e.activeIndex = undefined),
                  (e.noScroll = !0),
                  e.$menuInner.scrollTop(0),
                  (e.selectpicker.search.elements = i),
                  e.createView(!0),
                  i.length ||
                    ((t.className = "no-results"),
                    (t.innerHTML = e.options.noneResultsText.replace(
                      "{0}",
                      '"' + A(n) + '"'
                    )),
                    e.$menuInner[0].firstChild.appendChild(t));
              } else e.$menuInner.scrollTop(0), e.createView(!1);
            });
        },
        _searchStyle: function () {
          return this.options.liveSearchStyle || "contains";
        },
        val: function (e) {
          return void 0 !== e
            ? (this.$element.val(e).trigger("changed" + _, x),
              this.render(),
              (x = null),
              this.$element)
            : this.$element.val();
        },
        changeAll: function (e) {
          if (this.multiple) {
            void 0 === e && (e = !0);
            var t = this.$element[0],
              n = t.options,
              i = 0,
              a = 0,
              o = r(t);
            t.classList.add("bs-select-hidden");
            for (
              var s = 0, l = this.selectpicker.current.elements.length;
              s < l;
              s++
            ) {
              var d = this.selectpicker.current.data[s],
                c = n[this.selectpicker.current.map.originalIndex[s]];
              c &&
                !c.disabled &&
                "divider" !== d.type &&
                (c.selected && i++, (c.selected = e), e && a++);
            }
            t.classList.remove("bs-select-hidden"),
              i !== a &&
                (this.setOptionStatus(),
                this.togglePlaceholder(),
                (x = [null, null, o]),
                this.$element.triggerNative("change"));
          }
        },
        selectAll: function () {
          return this.changeAll(!0);
        },
        deselectAll: function () {
          return this.changeAll(!1);
        },
        toggle: function (e) {
          (e = e || window.event) && e.stopPropagation(),
            this.$button.trigger("click.bs.dropdown.data-api");
        },
        keydown: function (t) {
          var n,
            i,
            r,
            o,
            s,
            l = e(this),
            d = l.hasClass("dropdown-toggle"),
            c = (d ? l.closest(".dropdown") : l.closest(O.MENU)).data("this"),
            u = c.findLis(),
            h = !1,
            p = t.which === j.TAB && !d && !c.options.selectOnTab,
            f = P.test(t.which) || p,
            m = c.$menuInner[0].scrollTop,
            y = c.isVirtual(),
            g = !0 === y ? c.selectpicker.view.position0 : 0;
          if (
            !(i = c.$newElement.hasClass(I.SHOW)) &&
            (f ||
              (t.which >= 48 && t.which <= 57) ||
              (t.which >= 96 && t.which <= 105) ||
              (t.which >= 65 && t.which <= 90)) &&
            (c.$button.trigger("click.bs.dropdown.data-api"),
            c.options.liveSearch)
          )
            c.$searchbox.trigger("focus");
          else {
            if (
              (t.which === j.ESCAPE &&
                i &&
                (t.preventDefault(),
                c.$button
                  .trigger("click.bs.dropdown.data-api")
                  .trigger("focus")),
              f)
            ) {
              if (!u.length) return;
              (n =
                !0 === y
                  ? u.index(u.filter(".active"))
                  : c.selectpicker.current.map.newIndex[c.activeIndex]) ===
                undefined && (n = -1),
                -1 !== n &&
                  ((r =
                    c.selectpicker.current.elements[n + g]).classList.remove(
                    "active"
                  ),
                  r.firstChild && r.firstChild.classList.remove("active")),
                t.which === j.ARROW_UP
                  ? (-1 !== n && n--,
                    n + g < 0 && (n += u.length),
                    c.selectpicker.view.canHighlight[n + g] ||
                      (-1 ===
                        (n =
                          c.selectpicker.view.canHighlight
                            .slice(0, n + g)
                            .lastIndexOf(!0) - g) &&
                        (n = u.length - 1)))
                  : (t.which === j.ARROW_DOWN || p) &&
                    (++n + g >= c.selectpicker.view.canHighlight.length &&
                      (n = 0),
                    c.selectpicker.view.canHighlight[n + g] ||
                      (n =
                        n +
                        1 +
                        c.selectpicker.view.canHighlight
                          .slice(n + g + 1)
                          .indexOf(!0))),
                t.preventDefault();
              var v = g + n;
              t.which === j.ARROW_UP
                ? 0 === g && n === u.length - 1
                  ? ((c.$menuInner[0].scrollTop = c.$menuInner[0].scrollHeight),
                    (v = c.selectpicker.current.elements.length - 1))
                  : (h =
                      (s =
                        (o = c.selectpicker.current.data[v]).position -
                        o.height) < m)
                : (t.which === j.ARROW_DOWN || p) &&
                  (0 === n
                    ? ((c.$menuInner[0].scrollTop = 0), (v = 0))
                    : (h =
                        (s =
                          (o = c.selectpicker.current.data[v]).position -
                          c.sizeInfo.menuInnerHeight) > m)),
                (r = c.selectpicker.current.elements[v]) &&
                  (r.classList.add("active"),
                  r.firstChild && r.firstChild.classList.add("active")),
                (c.activeIndex = c.selectpicker.current.map.originalIndex[v]),
                (c.selectpicker.view.currentActive = r),
                h && (c.$menuInner[0].scrollTop = s),
                c.options.liveSearch
                  ? c.$searchbox.trigger("focus")
                  : l.trigger("focus");
            } else if (
              (!l.is("input") && !z.test(t.which)) ||
              (t.which === j.SPACE && c.selectpicker.keydown.keyHistory)
            ) {
              var b,
                w,
                S = [];
              t.preventDefault(),
                (c.selectpicker.keydown.keyHistory += E[t.which]),
                c.selectpicker.keydown.resetKeyHistory.cancel &&
                  clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel),
                (c.selectpicker.keydown.resetKeyHistory.cancel =
                  c.selectpicker.keydown.resetKeyHistory.start()),
                (w = c.selectpicker.keydown.keyHistory),
                /^(.)\1+$/.test(w) && (w = w.charAt(0));
              for (var k = 0; k < c.selectpicker.current.data.length; k++) {
                var x = c.selectpicker.current.data[k];
                a(x, w, "startsWith", !0) &&
                  c.selectpicker.view.canHighlight[k] &&
                  ((x.index = k), S.push(x.originalIndex));
              }
              if (S.length) {
                var D = 0;
                u.removeClass("active").find("a").removeClass("active"),
                  1 === w.length &&
                    (-1 === (D = S.indexOf(c.activeIndex)) || D === S.length - 1
                      ? (D = 0)
                      : D++),
                  (b = c.selectpicker.current.map.newIndex[S[D]]),
                  m - (o = c.selectpicker.current.data[b]).position > 0
                    ? ((s = o.position - o.height), (h = !0))
                    : ((s = o.position - c.sizeInfo.menuInnerHeight),
                      (h = o.position > m + c.sizeInfo.menuInnerHeight)),
                  (r = c.selectpicker.current.elements[b]).classList.add(
                    "active"
                  ),
                  r.firstChild && r.firstChild.classList.add("active"),
                  (c.activeIndex = S[D]),
                  r.firstChild.focus(),
                  h && (c.$menuInner[0].scrollTop = s),
                  l.trigger("focus");
              }
            }
            i &&
              ((t.which === j.SPACE && !c.selectpicker.keydown.keyHistory) ||
                t.which === j.ENTER ||
                (t.which === j.TAB && c.options.selectOnTab)) &&
              (t.which !== j.SPACE && t.preventDefault(),
              (c.options.liveSearch && t.which === j.SPACE) ||
                (c.$menuInner.find(".active a").trigger("click", !0),
                l.trigger("focus"),
                c.options.liveSearch ||
                  (t.preventDefault(), e(document).data("spaceSelect", !0))));
          }
        },
        mobile: function () {
          this.$element[0].classList.add("mobile-device");
        },
        refresh: function () {
          var t = e.extend({}, this.options, this.$element.data());
          (this.options = t),
            (this.selectpicker.main.map.newIndex = {}),
            (this.selectpicker.main.map.originalIndex = {}),
            this.checkDisabled(),
            this.setStyle(),
            this.render(),
            this.createLi(),
            this.setWidth(),
            this.setSize(!0),
            this.$element.trigger("refreshed" + _);
        },
        hide: function () {
          this.$newElement.hide();
        },
        show: function () {
          this.$newElement.show();
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove();
        },
        destroy: function () {
          this.$newElement.before(this.$element).remove(),
            this.$bsContainer
              ? this.$bsContainer.remove()
              : this.$menu.remove(),
            this.$element
              .off(_)
              .removeData("selectpicker")
              .removeClass("bs-select-hidden selectpicker"),
            e(window).off(_ + "." + this.selectId);
        },
      });
    var R = e.fn.selectpicker;
    (e.fn.selectpicker = d),
      (e.fn.selectpicker.Constructor = H),
      (e.fn.selectpicker.noConflict = function () {
        return (e.fn.selectpicker = R), this;
      }),
      e(document)
        .off("keydown.bs.dropdown.data-api")
        .on(
          "keydown" + _,
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          H.prototype.keydown
        )
        .on(
          "focusin.modal",
          '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',
          function (e) {
            e.stopPropagation();
          }
        ),
      e(window).on("load" + _ + ".data-api", function () {
        e(".selectpicker").each(function () {
          var t = e(this);
          d.call(t, t.data());
        });
      });
  })(jQuery),
  function () {
    var e = this;
    (function () {
      (function () {
        this.Rails = {
          linkClickSelector:
            "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
          buttonClickSelector: {
            selector:
              "button[data-remote]:not([form]), button[data-confirm]:not([form])",
            exclude: "form button",
          },
          inputChangeSelector:
            "select[data-remote], input[data-remote], textarea[data-remote]",
          formSubmitSelector: "form:not([data-turbo=true])",
          formInputClickSelector:
            "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
          formDisableSelector:
            "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
          formEnableSelector:
            "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
          fileInputSelector: "input[name][type=file]:not([disabled])",
          linkDisableSelector: "a[data-disable-with], a[data-disable]",
          buttonDisableSelector:
            "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        };
      }.call(this));
    }.call(e));
    var t = e.Rails;
    (function () {
      (function () {
        var e;
        (e = null),
          (t.loadCSPNonce = function () {
            var t;
            return (e =
              null != (t = document.querySelector("meta[name=csp-nonce]"))
                ? t.content
                : void 0);
          }),
          (t.cspNonce = function () {
            return null != e ? e : t.loadCSPNonce();
          });
      }.call(this),
        function () {
          var e, n;
          (n =
            Element.prototype.matches ||
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
            (t.matches = function (e, t) {
              return null != t.exclude
                ? n.call(e, t.selector) && !n.call(e, t.exclude)
                : n.call(e, t);
            }),
            (e = "_ujsData"),
            (t.getData = function (t, n) {
              var i;
              return null != (i = t[e]) ? i[n] : void 0;
            }),
            (t.setData = function (t, n, i) {
              return null == t[e] && (t[e] = {}), (t[e][n] = i);
            }),
            (t.$ = function (e) {
              return Array.prototype.slice.call(document.querySelectorAll(e));
            });
        }.call(this),
        function () {
          var e, n, i;
          (e = t.$),
            (i = t.csrfToken =
              function () {
                var e;
                return (
                  (e = document.querySelector("meta[name=csrf-token]")) &&
                  e.content
                );
              }),
            (n = t.csrfParam =
              function () {
                var e;
                return (
                  (e = document.querySelector("meta[name=csrf-param]")) &&
                  e.content
                );
              }),
            (t.CSRFProtection = function (e) {
              var t;
              if (null != (t = i()))
                return e.setRequestHeader("X-CSRF-Token", t);
            }),
            (t.refreshCSRFTokens = function () {
              var t, r;
              if (((r = i()), (t = n()), null != r && null != t))
                return e('form input[name="' + t + '"]').forEach(function (e) {
                  return (e.value = r);
                });
            });
        }.call(this),
        function () {
          var e, n, i, r;
          (i = t.matches),
            "function" != typeof (e = window.CustomEvent) &&
              (((e = function (e, t) {
                var n;
                return (
                  (n = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    t.bubbles,
                    t.cancelable,
                    t.detail
                  ),
                  n
                );
              }).prototype = window.Event.prototype),
              (r = e.prototype.preventDefault),
              (e.prototype.preventDefault = function () {
                var e;
                return (
                  (e = r.call(this)),
                  this.cancelable &&
                    !this.defaultPrevented &&
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                    }),
                  e
                );
              })),
            (n = t.fire =
              function (t, n, i) {
                var r;
                return (
                  (r = new e(n, { bubbles: !0, cancelable: !0, detail: i })),
                  t.dispatchEvent(r),
                  !r.defaultPrevented
                );
              }),
            (t.stopEverything = function (e) {
              return (
                n(e.target, "ujs:everythingStopped"),
                e.preventDefault(),
                e.stopPropagation(),
                e.stopImmediatePropagation()
              );
            }),
            (t.delegate = function (e, t, n, r) {
              return e.addEventListener(n, function (e) {
                var n;
                for (n = e.target; n instanceof Element && !i(n, t); )
                  n = n.parentNode;
                if (n instanceof Element && !1 === r.call(n, e))
                  return e.preventDefault(), e.stopPropagation();
              });
            });
        }.call(this),
        function () {
          var e, n, i, r, a, o;
          (r = t.cspNonce),
            (n = t.CSRFProtection),
            t.fire,
            (e = {
              "*": "*/*",
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            }),
            (t.ajax = function (e) {
              var t;
              return (
                (e = a(e)),
                (t = i(e, function () {
                  var n, i;
                  return (
                    (i = o(
                      null != (n = t.response) ? n : t.responseText,
                      t.getResponseHeader("Content-Type")
                    )),
                    2 === Math.floor(t.status / 100)
                      ? "function" == typeof e.success &&
                        e.success(i, t.statusText, t)
                      : "function" == typeof e.error &&
                        e.error(i, t.statusText, t),
                    "function" == typeof e.complete
                      ? e.complete(t, t.statusText)
                      : void 0
                  );
                })),
                !(null != e.beforeSend && !e.beforeSend(t, e)) &&
                  (t.readyState === XMLHttpRequest.OPENED
                    ? t.send(e.data)
                    : void 0)
              );
            }),
            (a = function (t) {
              return (
                (t.url = t.url || location.href),
                (t.type = t.type.toUpperCase()),
                "GET" === t.type &&
                  t.data &&
                  (t.url.indexOf("?") < 0
                    ? (t.url += "?" + t.data)
                    : (t.url += "&" + t.data)),
                null == e[t.dataType] && (t.dataType = "*"),
                (t.accept = e[t.dataType]),
                "*" !== t.dataType && (t.accept += ", */*; q=0.01"),
                t
              );
            }),
            (i = function (e, t) {
              var i;
              return (
                (i = new XMLHttpRequest()).open(e.type, e.url, !0),
                i.setRequestHeader("Accept", e.accept),
                "string" == typeof e.data &&
                  i.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded; charset=UTF-8"
                  ),
                e.crossDomain ||
                  (i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                  n(i)),
                (i.withCredentials = !!e.withCredentials),
                (i.onreadystatechange = function () {
                  if (i.readyState === XMLHttpRequest.DONE) return t(i);
                }),
                i
              );
            }),
            (o = function (e, t) {
              var n, i;
              if ("string" == typeof e && "string" == typeof t)
                if (t.match(/\bjson\b/))
                  try {
                    e = JSON.parse(e);
                  } catch (a) {}
                else if (t.match(/\b(?:java|ecma)script\b/))
                  (i = document.createElement("script")).setAttribute(
                    "nonce",
                    r()
                  ),
                    (i.text = e),
                    document.head.appendChild(i).parentNode.removeChild(i);
                else if (t.match(/\b(xml|html|svg)\b/)) {
                  (n = new DOMParser()), (t = t.replace(/;.+/, ""));
                  try {
                    e = n.parseFromString(e, t);
                  } catch (a) {}
                }
              return e;
            }),
            (t.href = function (e) {
              return e.href;
            }),
            (t.isCrossDomain = function (e) {
              var t, n;
              ((t = document.createElement("a")).href = location.href),
                (n = document.createElement("a"));
              try {
                return (
                  (n.href = e),
                  !(
                    ((!n.protocol || ":" === n.protocol) && !n.host) ||
                    t.protocol + "//" + t.host == n.protocol + "//" + n.host
                  )
                );
              } catch (i) {
                return i, !0;
              }
            });
        }.call(this),
        function () {
          var e, n;
          (e = t.matches),
            (n = function (e) {
              return Array.prototype.slice.call(e);
            }),
            (t.serializeElement = function (t, i) {
              var r, a;
              return (
                (r = [t]),
                e(t, "form") && (r = n(t.elements)),
                (a = []),
                r.forEach(function (t) {
                  if (t.name && !t.disabled && !e(t, "fieldset[disabled] *"))
                    return e(t, "select")
                      ? n(t.options).forEach(function (e) {
                          if (e.selected)
                            return a.push({ name: t.name, value: e.value });
                        })
                      : t.checked ||
                        -1 === ["radio", "checkbox", "submit"].indexOf(t.type)
                      ? a.push({ name: t.name, value: t.value })
                      : void 0;
                }),
                i && a.push(i),
                a
                  .map(function (e) {
                    return null != e.name
                      ? encodeURIComponent(e.name) +
                          "=" +
                          encodeURIComponent(e.value)
                      : e;
                  })
                  .join("&")
              );
            }),
            (t.formElements = function (t, i) {
              return e(t, "form")
                ? n(t.elements).filter(function (t) {
                    return e(t, i);
                  })
                : n(t.querySelectorAll(i));
            });
        }.call(this),
        function () {
          var e, n, i;
          (n = t.fire),
            (i = t.stopEverything),
            (t.handleConfirm = function (t) {
              if (!e(this)) return i(t);
            }),
            (t.confirm = function (e) {
              return confirm(e);
            }),
            (e = function (e) {
              var i, r, a;
              if (!(a = e.getAttribute("data-confirm"))) return !0;
              if (((i = !1), n(e, "confirm"))) {
                try {
                  i = t.confirm(a, e);
                } catch (o) {}
                r = n(e, "confirm:complete", [i]);
              }
              return i && r;
            });
        }.call(this),
        function () {
          var e, n, i, r, a, o, s, l, d, c, u, h;
          (c = t.matches),
            (l = t.getData),
            (u = t.setData),
            (h = t.stopEverything),
            (s = t.formElements),
            (t.handleDisabledElement = function (e) {
              if (this.disabled) return h(e);
            }),
            (t.enableElement = function (e) {
              var n;
              if (e instanceof Event) {
                if (d(e)) return;
                n = e.target;
              } else n = e;
              return c(n, t.linkDisableSelector)
                ? o(n)
                : c(n, t.buttonDisableSelector) || c(n, t.formEnableSelector)
                ? r(n)
                : c(n, t.formSubmitSelector)
                ? a(n)
                : void 0;
            }),
            (t.disableElement = function (r) {
              var a;
              return (
                (a = r instanceof Event ? r.target : r),
                c(a, t.linkDisableSelector)
                  ? i(a)
                  : c(a, t.buttonDisableSelector) || c(a, t.formDisableSelector)
                  ? e(a)
                  : c(a, t.formSubmitSelector)
                  ? n(a)
                  : void 0
              );
            }),
            (i = function (e) {
              var t;
              if (!l(e, "ujs:disabled"))
                return (
                  null != (t = e.getAttribute("data-disable-with")) &&
                    (u(e, "ujs:enable-with", e.innerHTML), (e.innerHTML = t)),
                  e.addEventListener("click", h),
                  u(e, "ujs:disabled", !0)
                );
            }),
            (o = function (e) {
              var t;
              return (
                null != (t = l(e, "ujs:enable-with")) &&
                  ((e.innerHTML = t), u(e, "ujs:enable-with", null)),
                e.removeEventListener("click", h),
                u(e, "ujs:disabled", null)
              );
            }),
            (n = function (n) {
              return s(n, t.formDisableSelector).forEach(e);
            }),
            (e = function (e) {
              var t;
              if (!l(e, "ujs:disabled"))
                return (
                  null != (t = e.getAttribute("data-disable-with")) &&
                    (c(e, "button")
                      ? (u(e, "ujs:enable-with", e.innerHTML),
                        (e.innerHTML = t))
                      : (u(e, "ujs:enable-with", e.value), (e.value = t))),
                  (e.disabled = !0),
                  u(e, "ujs:disabled", !0)
                );
            }),
            (a = function (e) {
              return s(e, t.formEnableSelector).forEach(r);
            }),
            (r = function (e) {
              var t;
              return (
                null != (t = l(e, "ujs:enable-with")) &&
                  (c(e, "button") ? (e.innerHTML = t) : (e.value = t),
                  u(e, "ujs:enable-with", null)),
                (e.disabled = !1),
                u(e, "ujs:disabled", null)
              );
            }),
            (d = function (e) {
              var t, n;
              return (
                null !=
                (null != (n = null != (t = e.detail) ? t[0] : void 0)
                  ? n.getResponseHeader("X-Xhr-Redirect")
                  : void 0)
              );
            });
        }.call(this),
        function () {
          var e;
          (e = t.stopEverything),
            (t.handleMethod = function (n) {
              var i, r, a, o, s, l, d;
              if ((d = (l = this).getAttribute("data-method")))
                return (
                  (s = t.href(l)),
                  (r = t.csrfToken()),
                  (i = t.csrfParam()),
                  (a = document.createElement("form")),
                  (o =
                    "<input name='_method' value='" + d + "' type='hidden' />"),
                  null == i ||
                    null == r ||
                    t.isCrossDomain(s) ||
                    (o +=
                      "<input name='" +
                      i +
                      "' value='" +
                      r +
                      "' type='hidden' />"),
                  (o += '<input type="submit" />'),
                  (a.method = "post"),
                  (a.action = s),
                  (a.target = l.target),
                  (a.innerHTML = o),
                  (a.style.display = "none"),
                  document.body.appendChild(a),
                  a.querySelector('[type="submit"]').click(),
                  e(n)
                );
            });
        }.call(this),
        function () {
          var e,
            n,
            i,
            r,
            a,
            o,
            s,
            l,
            d,
            c = [].slice;
          (o = t.matches),
            (i = t.getData),
            (l = t.setData),
            (n = t.fire),
            (d = t.stopEverything),
            (e = t.ajax),
            (r = t.isCrossDomain),
            (s = t.serializeElement),
            (a = function (e) {
              var t;
              return (
                null != (t = e.getAttribute("data-remote")) && "false" !== t
              );
            }),
            (t.handleRemote = function (u) {
              var h, p, f, m, y, g, v;
              return (
                !a((m = this)) ||
                (n(m, "ajax:before")
                  ? ((v = m.getAttribute("data-with-credentials")),
                    (f = m.getAttribute("data-type") || "script"),
                    o(m, t.formSubmitSelector)
                      ? ((h = i(m, "ujs:submit-button")),
                        (y = i(m, "ujs:submit-button-formmethod") || m.method),
                        (g =
                          i(m, "ujs:submit-button-formaction") ||
                          m.getAttribute("action") ||
                          location.href),
                        "GET" === y.toUpperCase() &&
                          (g = g.replace(/\?.*$/, "")),
                        "multipart/form-data" === m.enctype
                          ? ((p = new FormData(m)),
                            null != h && p.append(h.name, h.value))
                          : (p = s(m, h)),
                        l(m, "ujs:submit-button", null),
                        l(m, "ujs:submit-button-formmethod", null),
                        l(m, "ujs:submit-button-formaction", null))
                      : o(m, t.buttonClickSelector) ||
                        o(m, t.inputChangeSelector)
                      ? ((y = m.getAttribute("data-method")),
                        (g = m.getAttribute("data-url")),
                        (p = s(m, m.getAttribute("data-params"))))
                      : ((y = m.getAttribute("data-method")),
                        (g = t.href(m)),
                        (p = m.getAttribute("data-params"))),
                    e({
                      type: y || "GET",
                      url: g,
                      data: p,
                      dataType: f,
                      beforeSend: function (e, t) {
                        return n(m, "ajax:beforeSend", [e, t])
                          ? n(m, "ajax:send", [e])
                          : (n(m, "ajax:stopped"), !1);
                      },
                      success: function () {
                        var e;
                        return (
                          (e =
                            1 <= arguments.length ? c.call(arguments, 0) : []),
                          n(m, "ajax:success", e)
                        );
                      },
                      error: function () {
                        var e;
                        return (
                          (e =
                            1 <= arguments.length ? c.call(arguments, 0) : []),
                          n(m, "ajax:error", e)
                        );
                      },
                      complete: function () {
                        var e;
                        return (
                          (e =
                            1 <= arguments.length ? c.call(arguments, 0) : []),
                          n(m, "ajax:complete", e)
                        );
                      },
                      crossDomain: r(g),
                      withCredentials: null != v && "false" !== v,
                    }),
                    d(u))
                  : (n(m, "ajax:stopped"), !1))
              );
            }),
            (t.formSubmitButtonClick = function () {
              var e, t;
              if ((t = (e = this).form))
                return (
                  e.name &&
                    l(t, "ujs:submit-button", { name: e.name, value: e.value }),
                  l(t, "ujs:formnovalidate-button", e.formNoValidate),
                  l(
                    t,
                    "ujs:submit-button-formaction",
                    e.getAttribute("formaction")
                  ),
                  l(
                    t,
                    "ujs:submit-button-formmethod",
                    e.getAttribute("formmethod")
                  )
                );
            }),
            (t.preventInsignificantClick = function (e) {
              var t, n, i, r;
              if (
                ((r = (
                  (i = this).getAttribute("data-method") || "GET"
                ).toUpperCase()),
                (t = i.getAttribute("data-params")),
                (n = (e.metaKey || e.ctrlKey) && "GET" === r && !t),
                (null != e.button && 0 !== e.button) || n)
              )
                return e.stopImmediatePropagation();
            });
        }.call(this),
        function () {
          var e, n, i, r, a, o, s, l, d, c, u, h, p, f, m;
          if (
            ((o = t.fire),
            (i = t.delegate),
            (l = t.getData),
            (e = t.$),
            (m = t.refreshCSRFTokens),
            (n = t.CSRFProtection),
            (p = t.loadCSPNonce),
            (a = t.enableElement),
            (r = t.disableElement),
            (c = t.handleDisabledElement),
            (d = t.handleConfirm),
            (f = t.preventInsignificantClick),
            (h = t.handleRemote),
            (s = t.formSubmitButtonClick),
            (u = t.handleMethod),
            "undefined" != typeof jQuery &&
              null !== jQuery &&
              null != jQuery.ajax)
          ) {
            if (jQuery.rails)
              throw new Error(
                "If you load both jquery_ujs and rails-ujs, use rails-ujs only."
              );
            (jQuery.rails = t),
              jQuery.ajaxPrefilter(function (e, t, i) {
                if (!e.crossDomain) return n(i);
              });
          }
          (t.start = function () {
            if (window._rails_loaded)
              throw new Error("rails-ujs has already been loaded!");
            return (
              window.addEventListener("pageshow", function () {
                return (
                  e(t.formEnableSelector).forEach(function (e) {
                    if (l(e, "ujs:disabled")) return a(e);
                  }),
                  e(t.linkDisableSelector).forEach(function (e) {
                    if (l(e, "ujs:disabled")) return a(e);
                  })
                );
              }),
              i(document, t.linkDisableSelector, "ajax:complete", a),
              i(document, t.linkDisableSelector, "ajax:stopped", a),
              i(document, t.buttonDisableSelector, "ajax:complete", a),
              i(document, t.buttonDisableSelector, "ajax:stopped", a),
              i(document, t.linkClickSelector, "click", f),
              i(document, t.linkClickSelector, "click", c),
              i(document, t.linkClickSelector, "click", d),
              i(document, t.linkClickSelector, "click", r),
              i(document, t.linkClickSelector, "click", h),
              i(document, t.linkClickSelector, "click", u),
              i(document, t.buttonClickSelector, "click", f),
              i(document, t.buttonClickSelector, "click", c),
              i(document, t.buttonClickSelector, "click", d),
              i(document, t.buttonClickSelector, "click", r),
              i(document, t.buttonClickSelector, "click", h),
              i(document, t.inputChangeSelector, "change", c),
              i(document, t.inputChangeSelector, "change", d),
              i(document, t.inputChangeSelector, "change", h),
              i(document, t.formSubmitSelector, "submit", c),
              i(document, t.formSubmitSelector, "submit", d),
              i(document, t.formSubmitSelector, "submit", h),
              i(document, t.formSubmitSelector, "submit", function (e) {
                return setTimeout(function () {
                  return r(e);
                }, 13);
              }),
              i(document, t.formSubmitSelector, "ajax:send", r),
              i(document, t.formSubmitSelector, "ajax:complete", a),
              i(document, t.formInputClickSelector, "click", f),
              i(document, t.formInputClickSelector, "click", c),
              i(document, t.formInputClickSelector, "click", d),
              i(document, t.formInputClickSelector, "click", s),
              document.addEventListener("DOMContentLoaded", m),
              document.addEventListener("DOMContentLoaded", p),
              (window._rails_loaded = !0)
            );
          }),
            window.Rails === t &&
              o(document, "rails:attachBindings") &&
              t.start();
        }.call(this));
    }.call(this),
      "object" == typeof module && module.exports
        ? (module.exports = t)
        : "function" == typeof define && define.amd && define(t));
  }.call(this),
  $(document).ready(function () {
    $("span.absence-request-label").on("click", function () {
      $("a#absences").eq($(this).val()).tab("show");
    });
  }),
  $(document).ready(function () {
    $(".studentsAutoSelect").autoComplete(),
      $("input.batch-update-student-select").on(
        "autocomplete.select",
        function (e, t) {
          var n = t.value;
          window.location.href = `/admin/tools/batch_update?student_email=${n}`;
        }
      ),
      $("select[id^='program_activity_status_']").change(function () {
        var e = $(this);
        e.attr("default-value") === e.val()
          ? (e.prev().find("span.badge").remove(),
            e.prev().removeClass("text text-warning"))
          : (e.prev().find("span.badge").remove(),
            e.prev().addClass("text text-warning"),
            e
              .prev()
              .append(
                '<span class="badge badge-pill badge-warning mx-2">Changed</span>'
              ));
      });
  }),
  $(document).ready(function () {
    function e(e) {
      var t = `<input type="hidden" id="student-emails-${e.id}" name="student_emails[]" value="${e.value}">`;
      a.append(t);
    }
    function t(e) {
      $(`input[id="student-emails-${e}"]`).remove();
    }
    function n(n) {
      var i = `<li student_id="${n.id}" style="list-style-type:none;">       <hr/>       ${n.text} - <b>${n.value}</b>       <button type="button" class="close massive-absence-close-button" aria-label="Close">         <span aria-hidden="true">&times;</span>       </button>\n    </li>`;
      r.append(i),
        e(n),
        $("button.massive-absence-close-button").on("click", function () {
          t(this.parentElement.getAttribute("student_id")),
            this.parentElement.remove();
        });
    }
    function i(e) {
      r.show(), n(e);
    }
    var r = $("div.massive-absence-information"),
      a = $("form.massive-absence-form");
    $(".studentsAutoSelect").autoComplete(),
      $("input.massive-absence-student-select").on(
        "autocomplete.select",
        function (e, t) {
          i(t), $(".studentsAutoSelect").autoComplete("clear");
        }
      );
  }),
  $(document).ready(function () {
    function e() {
      var e =
        '<table class="table revert-information-table">       <thead>         <tr><th>Type</th><th>Name</th><th>Date</th></tr>       </thead>       <tbody></tbody>     </table>';
      a.append(e);
    }
    function t(e, t, n) {
      t
        ? (o.prop("disabled", !1),
          a.append(
            `<div class="mt-3"><b class="text-success">Based on the analysis, you can revert the last ${e.record_name} repetition that happened on ${e.date}.</b></div>`
          ))
        : e
        ? (o.prop("disabled", !0),
          n
            ? a.append(
                '<div class="mt-3"><b class="text-danger">The student was reverted this week. The system does allow to revert a student only once per week.</b></div>'
              )
            : a.append(
                '<div class="mt-3"><b class="text-danger">Based on the analysis, the system does not allow you to revert the last repetition. It occured more than 2 weeks ago.</b></div>'
              ))
        : (o.prop("disabled", !0),
          a.append(
            '<div><b class="text-danger">The student is non-revertable because there are no repetitions found in DB.</b></div>'
          ));
    }
    function n(e, t, n, i) {
      var r = null === e ? "NOT SET" : e,
        o = null === t ? "NOT SET" : t,
        s = null === n ? "NOT SET" : `${n} (${i})`;
      a.append(`<p><b>Current module: </b>${r}<p>`),
        a.append(`<p><b>Current block: </b>${o}<p>`),
        a.append(`<p><b>Next in order: </b>${s}<p>`);
    }
    function i(e) {
      a.empty(),
        a.show(),
        a.append(
          '<p class="text text-danger"><b>Something went wrong. Please contact Dev team.</b></p>'
        ),
        a.append(
          `<p class="text text-danger"><b>Error message: ${e.message}</b></p>`
        );
    }
    function r(i) {
      if (
        (a.empty(),
        a.show(),
        n(i.current_module, i.current_block, i.next_block, i.next_module),
        0 != i.repetitions.length)
      ) {
        e();
        var r = $("table.revert-information-table tbody");
        i.repetitions.forEach(function (e) {
          r.append(
            `<tr><td>${e.record_name}</td><td>${e.name}</td><td>${e.date}</td></tr>`
          );
        });
      }
      t(i.repetitions[0], i.allow_revert);
    }
    var a = $("div.revert-information"),
      o = $("input#submit-admin-revert-repetition");
    $(".studentsAutoSelect").autoComplete(),
      $("input.revert-student-select").on(
        "autocomplete.select",
        function (e, t) {
          $.ajax({
            type: "get",
            url: "/api/repeated_system/revert_information",
            data: { student_email: t.value },
            success: function (e) {
              r(e);
            },
            error: function (e) {
              i(e.responseJSON);
            },
          });
        }
      );
  }),
  $(document).ready(function () {
    $(".studentsAutoSelect").autoComplete(),
      $("input.update-repetition-student-select").on(
        "autocomplete.select",
        function (e, t) {
          var n = t.value;
          window.location.href = `/admin/tools/update_repetition?student_email=${n}`;
        }
      );
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis
              ? globalThis
              : e || self).ActionCable = {})
        );
  })(this, function (e) {
    "use strict";
    function t(e) {
      if (("function" == typeof e && (e = e()), e && !/^wss?:/i.test(e))) {
        const t = document.createElement("a");
        return (
          (t.href = e),
          (t.href = t.href),
          (t.protocol = t.protocol.replace("http", "ws")),
          t.href
        );
      }
      return e;
    }
    function n(e = i("url") || d.default_mount_path) {
      return new b(e);
    }
    function i(e) {
      const t = document.head.querySelector(`meta[name='action-cable-${e}']`);
      if (t) return t.getAttribute("content");
    }
    var r = { logger: self.console, WebSocket: self.WebSocket },
      a = {
        log(...e) {
          this.enabled &&
            (e.push(Date.now()), r.logger.log("[ActionCable]", ...e));
        },
      };
    const o = () => new Date().getTime(),
      s = (e) => (o() - e) / 1e3;
    class l {
      constructor(e) {
        (this.visibilityDidChange = this.visibilityDidChange.bind(this)),
          (this.connection = e),
          (this.reconnectAttempts = 0);
      }
      start() {
        this.isRunning() ||
          ((this.startedAt = o()),
          delete this.stoppedAt,
          this.startPolling(),
          addEventListener("visibilitychange", this.visibilityDidChange),
          a.log(
            `ConnectionMonitor started. stale threshold = ${this.constructor.staleThreshold} s`
          ));
      }
      stop() {
        this.isRunning() &&
          ((this.stoppedAt = o()),
          this.stopPolling(),
          removeEventListener("visibilitychange", this.visibilityDidChange),
          a.log("ConnectionMonitor stopped"));
      }
      isRunning() {
        return this.startedAt && !this.stoppedAt;
      }
      recordPing() {
        this.pingedAt = o();
      }
      recordConnect() {
        (this.reconnectAttempts = 0),
          this.recordPing(),
          delete this.disconnectedAt,
          a.log("ConnectionMonitor recorded connect");
      }
      recordDisconnect() {
        (this.disconnectedAt = o()),
          a.log("ConnectionMonitor recorded disconnect");
      }
      startPolling() {
        this.stopPolling(), this.poll();
      }
      stopPolling() {
        clearTimeout(this.pollTimeout);
      }
      poll() {
        this.pollTimeout = setTimeout(() => {
          this.reconnectIfStale(), this.poll();
        }, this.getPollInterval());
      }
      getPollInterval() {
        const { staleThreshold: e, reconnectionBackoffRate: t } =
          this.constructor;
        return (
          1e3 *
          e *
          Math.pow(1 + t, Math.min(this.reconnectAttempts, 10)) *
          (1 + (0 === this.reconnectAttempts ? 1 : t) * Math.random())
        );
      }
      reconnectIfStale() {
        this.connectionIsStale() &&
          (a.log(
            `ConnectionMonitor detected stale connection. reconnectAttempts = ${
              this.reconnectAttempts
            }, time stale = ${s(this.refreshedAt)} s, stale threshold = ${
              this.constructor.staleThreshold
            } s`
          ),
          this.reconnectAttempts++,
          this.disconnectedRecently()
            ? a.log(
                `ConnectionMonitor skipping reopening recent disconnect. time disconnected = ${s(
                  this.disconnectedAt
                )} s`
              )
            : (a.log("ConnectionMonitor reopening"), this.connection.reopen()));
      }
      get refreshedAt() {
        return this.pingedAt ? this.pingedAt : this.startedAt;
      }
      connectionIsStale() {
        return s(this.refreshedAt) > this.constructor.staleThreshold;
      }
      disconnectedRecently() {
        return (
          this.disconnectedAt &&
          s(this.disconnectedAt) < this.constructor.staleThreshold
        );
      }
      visibilityDidChange() {
        "visible" === document.visibilityState &&
          setTimeout(() => {
            (!this.connectionIsStale() && this.connection.isOpen()) ||
              (a.log(
                `ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = ${document.visibilityState}`
              ),
              this.connection.reopen());
          }, 200);
      }
    }
    (l.staleThreshold = 6), (l.reconnectionBackoffRate = 0.15);
    var d = {
      message_types: {
        welcome: "welcome",
        disconnect: "disconnect",
        ping: "ping",
        confirmation: "confirm_subscription",
        rejection: "reject_subscription",
      },
      disconnect_reasons: {
        unauthorized: "unauthorized",
        invalid_request: "invalid_request",
        server_restart: "server_restart",
      },
      default_mount_path: "/cable",
      protocols: ["actioncable-v1-json", "actioncable-unsupported"],
    };
    const { message_types: c, protocols: u } = d,
      h = u.slice(0, u.length - 1),
      p = [].indexOf;
    class f {
      constructor(e) {
        (this.open = this.open.bind(this)),
          (this.consumer = e),
          (this.subscriptions = this.consumer.subscriptions),
          (this.monitor = new l(this)),
          (this.disconnected = !0);
      }
      send(e) {
        return !!this.isOpen() && (this.webSocket.send(JSON.stringify(e)), !0);
      }
      open() {
        return this.isActive()
          ? (a.log(
              `Attempted to open WebSocket, but existing socket is ${this.getState()}`
            ),
            !1)
          : (a.log(
              `Opening WebSocket, current state is ${this.getState()}, subprotocols: ${u}`
            ),
            this.webSocket && this.uninstallEventHandlers(),
            (this.webSocket = new r.WebSocket(this.consumer.url, u)),
            this.installEventHandlers(),
            this.monitor.start(),
            !0);
      }
      close({ allowReconnect: e } = { allowReconnect: !0 }) {
        if ((e || this.monitor.stop(), this.isActive()))
          return this.webSocket.close();
      }
      reopen() {
        if (
          (a.log(`Reopening WebSocket, current state is ${this.getState()}`),
          !this.isActive())
        )
          return this.open();
        try {
          return this.close();
        } catch (e) {
          a.log("Failed to reopen WebSocket", e);
        } finally {
          a.log(`Reopening WebSocket in ${this.constructor.reopenDelay}ms`),
            setTimeout(this.open, this.constructor.reopenDelay);
        }
      }
      getProtocol() {
        if (this.webSocket) return this.webSocket.protocol;
      }
      isOpen() {
        return this.isState("open");
      }
      isActive() {
        return this.isState("open", "connecting");
      }
      isProtocolSupported() {
        return p.call(h, this.getProtocol()) >= 0;
      }
      isState(...e) {
        return p.call(e, this.getState()) >= 0;
      }
      getState() {
        if (this.webSocket)
          for (let e in r.WebSocket)
            if (r.WebSocket[e] === this.webSocket.readyState)
              return e.toLowerCase();
        return null;
      }
      installEventHandlers() {
        for (let e in this.events) {
          const t = this.events[e].bind(this);
          this.webSocket[`on${e}`] = t;
        }
      }
      uninstallEventHandlers() {
        for (let e in this.events) this.webSocket[`on${e}`] = function () {};
      }
    }
    (f.reopenDelay = 500),
      (f.prototype.events = {
        message(e) {
          if (!this.isProtocolSupported()) return;
          const {
            identifier: t,
            message: n,
            reason: i,
            reconnect: r,
            type: o,
          } = JSON.parse(e.data);
          switch (o) {
            case c.welcome:
              return this.monitor.recordConnect(), this.subscriptions.reload();
            case c.disconnect:
              return (
                a.log(`Disconnecting. Reason: ${i}`),
                this.close({ allowReconnect: r })
              );
            case c.ping:
              return this.monitor.recordPing();
            case c.confirmation:
              return (
                this.subscriptions.confirmSubscription(t),
                this.subscriptions.notify(t, "connected")
              );
            case c.rejection:
              return this.subscriptions.reject(t);
            default:
              return this.subscriptions.notify(t, "received", n);
          }
        },
        open() {
          if (
            (a.log(
              `WebSocket onopen event, using '${this.getProtocol()}' subprotocol`
            ),
            (this.disconnected = !1),
            !this.isProtocolSupported())
          )
            return (
              a.log(
                "Protocol is unsupported. Stopping monitor and disconnecting."
              ),
              this.close({ allowReconnect: !1 })
            );
        },
        close(e) {
          if ((a.log("WebSocket onclose event"), !this.disconnected))
            return (
              (this.disconnected = !0),
              this.monitor.recordDisconnect(),
              this.subscriptions.notifyAll("disconnected", {
                willAttemptReconnect: this.monitor.isRunning(),
              })
            );
        },
        error() {
          a.log("WebSocket onerror event");
        },
      });
    const m = function (e, t) {
      if (null != t)
        for (let n in t) {
          const i = t[n];
          e[n] = i;
        }
      return e;
    };
    class y {
      constructor(e, t = {}, n) {
        (this.consumer = e), (this.identifier = JSON.stringify(t)), m(this, n);
      }
      perform(e, t = {}) {
        return (t.action = e), this.send(t);
      }
      send(e) {
        return this.consumer.send({
          command: "message",
          identifier: this.identifier,
          data: JSON.stringify(e),
        });
      }
      unsubscribe() {
        return this.consumer.subscriptions.remove(this);
      }
    }
    class g {
      constructor(e) {
        (this.subscriptions = e), (this.pendingSubscriptions = []);
      }
      guarantee(e) {
        -1 == this.pendingSubscriptions.indexOf(e)
          ? (a.log(`SubscriptionGuarantor guaranteeing ${e.identifier}`),
            this.pendingSubscriptions.push(e))
          : a.log(`SubscriptionGuarantor already guaranteeing ${e.identifier}`),
          this.startGuaranteeing();
      }
      forget(e) {
        a.log(`SubscriptionGuarantor forgetting ${e.identifier}`),
          (this.pendingSubscriptions = this.pendingSubscriptions.filter(
            (t) => t !== e
          ));
      }
      startGuaranteeing() {
        this.stopGuaranteeing(), this.retrySubscribing();
      }
      stopGuaranteeing() {
        clearTimeout(this.retryTimeout);
      }
      retrySubscribing() {
        this.retryTimeout = setTimeout(() => {
          this.subscriptions &&
            "function" == typeof this.subscriptions.subscribe &&
            this.pendingSubscriptions.map((e) => {
              a.log(`SubscriptionGuarantor resubscribing ${e.identifier}`),
                this.subscriptions.subscribe(e);
            });
        }, 500);
      }
    }
    class v {
      constructor(e) {
        (this.consumer = e),
          (this.guarantor = new g(this)),
          (this.subscriptions = []);
      }
      create(e, t) {
        const n = "object" == typeof e ? e : { channel: e },
          i = new y(this.consumer, n, t);
        return this.add(i);
      }
      add(e) {
        return (
          this.subscriptions.push(e),
          this.consumer.ensureActiveConnection(),
          this.notify(e, "initialized"),
          this.subscribe(e),
          e
        );
      }
      remove(e) {
        return (
          this.forget(e),
          this.findAll(e.identifier).length ||
            this.sendCommand(e, "unsubscribe"),
          e
        );
      }
      reject(e) {
        return this.findAll(e).map(
          (e) => (this.forget(e), this.notify(e, "rejected"), e)
        );
      }
      forget(e) {
        return (
          this.guarantor.forget(e),
          (this.subscriptions = this.subscriptions.filter((t) => t !== e)),
          e
        );
      }
      findAll(e) {
        return this.subscriptions.filter((t) => t.identifier === e);
      }
      reload() {
        return this.subscriptions.map((e) => this.subscribe(e));
      }
      notifyAll(e, ...t) {
        return this.subscriptions.map((n) => this.notify(n, e, ...t));
      }
      notify(e, t, ...n) {
        let i;
        return (i = "string" == typeof e ? this.findAll(e) : [e]).map((e) =>
          "function" == typeof e[t] ? e[t](...n) : undefined
        );
      }
      subscribe(e) {
        this.sendCommand(e, "subscribe") && this.guarantor.guarantee(e);
      }
      confirmSubscription(e) {
        a.log(`Subscription confirmed ${e}`),
          this.findAll(e).map((e) => this.guarantor.forget(e));
      }
      sendCommand(e, t) {
        const { identifier: n } = e;
        return this.consumer.send({ command: t, identifier: n });
      }
    }
    class b {
      constructor(e) {
        (this._url = e),
          (this.subscriptions = new v(this)),
          (this.connection = new f(this));
      }
      get url() {
        return t(this._url);
      }
      send(e) {
        return this.connection.send(e);
      }
      connect() {
        return this.connection.open();
      }
      disconnect() {
        return this.connection.close({ allowReconnect: !1 });
      }
      ensureActiveConnection() {
        if (!this.connection.isActive()) return this.connection.open();
      }
    }
    console.log(
      "DEPRECATION: action_cable.js has been renamed to actioncable.js \u2013 please update your reference before Rails 8"
    ),
      (e.Connection = f),
      (e.ConnectionMonitor = l),
      (e.Consumer = b),
      (e.INTERNAL = d),
      (e.Subscription = y),
      (e.SubscriptionGuarantor = g),
      (e.Subscriptions = v),
      (e.adapters = r),
      (e.createConsumer = n),
      (e.createWebSocketURL = t),
      (e.getConfig = i),
      (e.logger = a),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  function () {
    this.App || (this.App = {}), (App.cable = ActionCable.createConsumer());
  }.call(this),
  $(document).ready(function () {
    function e() {
      return new URLSearchParams(window.location.search).get("student_email");
    }
    function t() {
      var t = e();
      return t
        ? `api/dashboard/schedule?student_email=${t}`
        : "api/dashboard/schedule";
    }
    function n(e) {
      var t = $(e).find("span");
      t.removeClass("dashboard-daily-dot-icon-transparent"),
        t.addClass("dashboard-daily-dot-icon-green");
    }
    function i(e, t) {
      var n = $(e).find("td.video-link");
      t &&
        n.append(
          $(
            `<a target='_blank' class='btn btn-primary' href='${t}'>Join Call</a>`
          )
        );
    }
    function r(e, t, n) {
      var i = $(e).find("td.host-id");
      t &&
        n &&
        i.append(
          $(
            `<a class='btn btn-primary host-id-button' data-id='${n}' onclick="copyHostId(this)">Copy Host Key</a>`
          )
        );
    }
    function a(e) {
      var t = $(e).find("span");
      t.removeClass("dashboard-daily-dot-icon-transparent"),
        t.removeClass("dashboard-daily-dot-icon-green"),
        t.addClass("dashboard-daily-dot-icon-transparent"),
        $(e).find("td.video-link").empty();
    }
    function o() {
      var e = location.pathname;
      (e.startsWith("/dashboard") || "/" == e) &&
        $.ajax({
          type: "get",
          url: t(),
          success: function (e) {
            $("table.dashboard-daily-table tr").each(function () {
              a($(this));
            }),
              e.forEach(function (e) {
                var t = $(`table.dashboard-daily-table tr.${e["class"]}`);
                n(t), i(t, e.link), r(t, e.link, e.host_id);
              }),
              setTimeout(function () {
                o();
              }, 4e4);
          },
        });
    }
    o(),
      $("#dashboard-announcement-alert").on("closed.bs.alert", function () {
        var e = $("#dashboard-announcement").attr("announcement-id");
        $.ajax({
          type: "post",
          url: "/api/dashboard/acknowledged-announcement",
          data: { announcement_id: e },
          success: function () {},
        });
      });
  }),
  $(document).ready(function () {
    var e = [
      {
        name: "basicstyles",
        groups: ["basicstyles", "cleanup"],
        items: [
          "Bold",
          "Italic",
          "Underline",
          "Strike",
          "Subscript",
          "Superscript",
          "-",
          "RemoveFormat",
        ],
      },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi"],
        items: [
          "NumberedList",
          "BulletedList",
          "-",
          "Outdent",
          "Indent",
          "-",
          "CreateDiv",
          "-",
          "JustifyLeft",
          "JustifyCenter",
          "JustifyRight",
          "JustifyBlock",
          "-",
          "BidiLtr",
          "BidiRtl",
          "Language",
        ],
      },
      { name: "links", items: ["Link", "Unlink"] },
      { name: "styles", items: ["Format", "Font", "FontSize"] },
      { name: "colors", items: ["TextColor", "BGColor"] },
      { name: "tools", items: ["Maximize", "ShowBlocks"] },
      { name: "others", items: ["-"] },
    ];
    $("#capstone-assessment-feedback-highlight").length &&
      CKEDITOR.replace("capstone-assessment-feedback-highlight", {
        toolbar: e,
      }),
      $("#capstone-assessment-feedback-improve").length &&
        CKEDITOR.replace("capstone-assessment-feedback-improve", {
          toolbar: e,
        }),
      $("#capstone-assessment-feedback-nice-to-have").length &&
        CKEDITOR.replace("capstone-assessment-feedback-nice-to-have", {
          toolbar: e,
        });
  }),
  $(document).ready(function () {
    function e(e, t) {
      "Capstone" == e &&
      [
        "HTML & CSS Assessment",
        "HTML & CSS Assessment 2.0",
        "RoR Assessment",
        "React Assessment",
      ].includes(t)
        ? ($("div.video-link input").attr("required", "required"),
          $("div.video-link").show())
        : ($("div.video-link input").attr("required", !1),
          $("div.video-link").hide());
    }
    function t() {
      var t = $("select#code_review_request_project_id option:selected").attr(
        "value"
      );
      t &&
        $.ajax({
          type: "get",
          url: `/api/forms/projects/${t}`,
          success: function (t) {
            e(t.context_type, t.course_name);
          },
        });
    }
    $("select#code_review_request_project_id").on("change", function () {
      t();
    }),
      t();
  }),
  $(document).ready(function () {
    function e() {
      $("#interviews_or_phone_screens_0").is(":checked")
        ? ($("div.first-interviews-number").show(),
          $("div.follow-up-interviews-number").show(),
          $("div.interviews-description").show())
        : ($("div.first-interviews-number").hide(),
          $("div.follow-up-interviews-number").hide(),
          $("div.interviews-description").hide());
    }
    function t(e, t) {
      $("label#job_update_jobs_number_label").text(
        `Job Applications Submitted This Week: ${e}`
      ),
        $("label#job_update_total_interviews_label").text(
          `Interviews Scheduled This Week: ${t}`
        ),
        $("input#job_update_jobs_number").val(e),
        $("input#job_update_total_interviews").val(t);
    }
    function n() {
      var e = location.pathname,
        n = $("input#job_update_retrospective_date").val();
      e.startsWith("/job_updates") &&
        $.ajax({
          type: "get",
          url: "/api/forms/job_update",
          data: { retrospective_date: n },
          success: function (e) {
            t(e.job_applications_count, e.job_interviews_count);
          },
        });
    }
    $("input#interviews_or_phone_screens_0").on("change", function () {
      e();
    }),
      $("input#interviews_or_phone_screens_1").on("change", function () {
        e();
      }),
      n(),
      $("input#job_update_retrospective_date").on("change", function () {
        n();
      });
  }),
  $(document).ready(function () {
    function e() {
      $("div.generated_question").each(function () {
        var e = this.querySelectorAll("input[type=radio]");
        e.length > 0 && (e[e.length - 1].checked = !0);
      }),
        $("input#status_unapproved").prop("checked", !0);
    }
    function t() {
      $("input#invalidated_true").is(":checked")
        ? $("div.reasons-invalid").show()
        : $("div.reasons-invalid").hide();
    }
    var n = [
      {
        name: "basicstyles",
        groups: ["basicstyles", "cleanup"],
        items: [
          "Bold",
          "Italic",
          "Underline",
          "Strike",
          "Subscript",
          "Superscript",
          "-",
          "RemoveFormat",
        ],
      },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi"],
        items: [
          "NumberedList",
          "BulletedList",
          "-",
          "Outdent",
          "Indent",
          "-",
          "CreateDiv",
          "-",
          "JustifyLeft",
          "JustifyCenter",
          "JustifyRight",
          "JustifyBlock",
          "-",
          "BidiLtr",
          "BidiRtl",
          "Language",
        ],
      },
      { name: "links", items: ["Link", "Unlink"] },
      { name: "styles", items: ["Format", "Font", "FontSize"] },
      { name: "colors", items: ["TextColor", "BGColor"] },
      { name: "tools", items: ["Maximize", "ShowBlocks"] },
      { name: "others", items: ["-"] },
    ];
    $("input#invalidated_true").on("change", function () {
      t(), e();
    }),
      $("input#invalidated_false").on("change", function () {
        t();
      }),
      $("#program_professional_skills_review_feedback").length &&
        CKEDITOR.replace("program_professional_skills_review_feedback", {
          toolbar: n,
        }),
      t();
  }),
  $(document).ready(function () {
    function e() {
      $("input#program_activity_completion_shared_absent").is(":checked")
        ? ($("#program_activity_completion_shared_upsides").attr(
            "disabled",
            !0
          ),
          $(".shared-challenges-checkbox").attr("disabled", !0),
          $(
            "#program_activity_completion_shared_challenges_overcome_explanation"
          ).attr("disabled", !0),
          $(".shared-motivation-radio").attr("disabled", !0),
          $("#program_activity_completion_shared_submission_url").attr(
            "disabled",
            !0
          ),
          $(".morning-session-role-radio").attr("disabled", !0),
          $(".shared-absent-info").show())
        : ($("#program_activity_completion_shared_upsides").attr(
            "disabled",
            !1
          ),
          $(".shared-challenges-checkbox").attr("disabled", !1),
          $(
            "#program_activity_completion_shared_challenges_overcome_explanation"
          ).attr("disabled", !1),
          $(".shared-motivation-radio").attr("disabled", !1),
          $("#program_activity_completion_shared_submission_url").attr(
            "disabled",
            !1
          ),
          $(".morning-session-role-radio").attr("disabled", !1),
          $(".shared-absent-info").hide());
    }
    function t() {
      $("input#program_activity_completion_shared_challenges_other").is(
        ":checked"
      )
        ? $("div.shared-challenges-other-text").show()
        : $("div.shared-challenges-other-text").hide();
    }
    $("input#program_activity_completion_shared_challenges_other").on(
      "change",
      function () {
        t();
      }
    ),
      $("input#program_activity_completion_shared_absent").on(
        "change",
        function () {
          e();
        }
      ),
      e(),
      t();
  }),
  $(document).ready(function () {
    function e() {
      r.hide(), a.hide(), t.hide();
    }
    var t = $("div.repetition-appeal-external-links"),
      n = $(
        "input#program_repetition_appeal_repetition_reasons_missed_saturday_deadline_for_activityies"
      ),
      i = $(
        "input#program_repetition_appeal_repetition_reasons_program_requirements_attendance_internet_mic_etc_"
      ),
      r = $("div.repetition-appeal-program-requirement-reasons"),
      a = $("div.repetition-appeal-activities");
    i.on("change", function () {
      this.checked ? r.show() : r.hide();
    }),
      n.on("change", function () {
        this.checked ? (a.show(), t.show()) : (a.hide(), t.hide());
      }),
      e();
  }),
  $(document).ready(function () {
    function e(e, t) {
      "Solo" == e && "Technical" == t
        ? ($("div.tse-ids").hide(),
          $("div.review-quality").hide(),
          $("div.code-review-rating").hide(),
          $("div.code-review-opinion").hide())
        : ($("div.tse-ids").show(),
          $("div.review-quality").show(),
          $("div.code-review-rating").show(),
          $("div.code-review-opinion").show());
    }
    function t(e) {
      "Capstone" == e
        ? ($("div.clear-requirements").show(),
          $("div.requirements-suitability").show(),
          $("div.accurate-deadline").show())
        : ($("div.clear-requirements").hide(),
          $("div.requirements-suitability").hide(),
          $("div.accurate-deadline").hide());
    }
    function n(e) {
      "Career Assessment" == e
        ? $("div.project-repo").hide()
        : $("div.project-repo").show();
    }
    function i() {
      var i = $("select#project_completion_project_id option:selected").attr(
        "value"
      );
      i &&
        $.ajax({
          type: "get",
          url: `/api/forms/projects/${i}`,
          success: function (i) {
            var r = i.project_type,
              a = i.context_type;
            e(r, a), t(a), n(a);
          },
        });
    }
    $("select#project_completion_project_id").on("change", function () {
      i();
    }),
      i();
  }),
  $(document).ready(function () {
    function e() {
      let e = $("input#status_invalid"),
        t = $("input#status_approved"),
        n = $("input#status_unapproved"),
        i = $("input#job_searching_invalidated_true");
      (e.is(":checked") ? $("div.comments").show() : $("div.comments").hide(),
      t.is(":checked")
        ? $("div.approve-confirmation").show()
        : $("div.approve-confirmation").hide(),
      n.is(":checked")
        ? $("div.remaining-project-percentage").show()
        : $("div.remaining-project-percentage").hide(),
      i.is(":checked"))
        ? ($("div.job-searching-reasons-invalid").show(),
          $("input#status_unapproved").prop("checked", !0))
        : $("div.job-searching-reasons-invalid").hide();
    }
    $("input#status_approved").on("change", function () {
      e();
    }),
      $("input#status_unapproved").on("change", function () {
        e();
      }),
      $("input#status_invalid").on("change", function () {
        e();
      }),
      $("input#job_searching_invalidated_true").on("change", function () {
        e();
      }),
      $("input#job_searching_invalidated_false").on("change", function () {
        e();
      }),
      e();
  }),
  $(document).ready(function () {
    function e() {
      return (
        window.confirm(
          "You are just about to invalidate this CRR. Are you sure?"
        ) && n[0].submit(),
        $("#closeReviewForm").modal("hide"),
        !1
      );
    }
    function t(t) {
      if (
        (t.preventDefault(),
        $("#close-review-form [value='invalid']").is(":checked"))
      )
        return e();
      n[0].submit();
    }
    let n = $("#closeReviewForm #close-review-form");
    n.on("submit", t);
  }),
  function () {}.call(this),
  $(document).ready(function () {
    $("a.checkpoint-quiz-link").click(function () {
      $("a.checkpoint-quiz-button").removeClass("disabled");
    }),
      $("a.airtable-form-link").click(function () {
        $("a.airtable-form-button").removeClass("disabled");
      }),
      $("button.close-checkpoint-quiz").click(function () {
        $("a.checkpoint-quiz-button").addClass("disabled");
      }),
      $("button.close-airtable-form").click(function () {
        $("a.airtable-form-button").addClass("disabled");
      }),
      $("#modal-program-hours").modal("show");
  }),
  $(document).ready(function () {
    function e(e) {
      return new Date(1e3 * e).toISOString().substr(11, 8);
    }
    function t() {
      n(), $("[id^=modal-review-request-overdued-review").modal("show");
    }
    function n() {
      var e = $(".review-request-id").text();
      e &&
        $.ajax({
          type: "patch",
          url: `/review_requests/${e}`,
          data: { automated: "true", operation: 1 },
          success: function () {},
        });
    }
    function i() {
      var n = $(".review-request-id").text(),
        i = $(".unclaim-review").text();
      n &&
        i &&
        $.ajax({
          type: "get",
          url: "/api/reviewers_dashboard/claimed_review_countdown",
          data: { id: n },
          success: function (n) {
            var i = n.claimed_time_left;
            setInterval(function () {
              i > 0
                ? ($(".claim-countdown").html(e(i)), i--)
                : 0 == i && (t(i), $(".claim-countdown").html(e(i)), i--);
            }, 1e3);
          },
          error: function () {},
        });
    }
    i();
  }),
  $(document).ready(function () {
    $("#clear-completed-reviews-dates, #clear-payment-download-dates").on(
      "click",
      function (e) {
        $(e.target)
          .parent()
          .find(".date-filter")
          .each(function () {
            $(this).val("");
          });
      }
    );
  }),
  window.addEventListener("turbolinks:before-render", function () {
    window.zEACLoaded = undefined;
  }),
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip(),
      $("select.reviewers").selectpicker(),
      $("#announcements-editor").length &&
        CKEDITOR.replace("announcements-editor"),
      $(".studentsAutoSelect").autoComplete(),
      $('[data-toggle="popover"]').popover({ trigger: "hover" });
  });
