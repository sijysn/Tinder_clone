(this.webpackJsonptinderui = this.webpackJsonptinderui || []).push([
  [0],
  {
    151: function (e, t, n) {},
    174: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n(17),
        c = n.n(r),
        s = n(7),
        o = (n(151), n(16)),
        i = n(24),
        l = n(8),
        u = n(227),
        d = n(220),
        j = n(90),
        b = n(226),
        p = n(216),
        h = n(179),
        m = n(219),
        f = n(230),
        x = n(232),
        O = n(214),
        g = n(176),
        v = n(213),
        y = n(229),
        S = n(210),
        w = n(1);
      var E = function (e) {
        var t = e.style;
        return Object(w.jsx)(u.a, {
          textAlign: "center",
          m: "0 auto",
          style: t,
          children: Object(w.jsx)(S.a, {
            size: "3rem",
            color: "secondary",
            children: Object(w.jsx)(g.a, {
              component: "srOnly",
              children: "Loading...",
            }),
          }),
        });
      };
      var _ = function (e) {
          e = e.replace(/[/-]/g, "");
          var t = new Date(),
            n = 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
          return Math.floor((n - e) / 1e4);
        },
        I = n(10),
        k = n.n(I),
        L = n(15),
        N = n(13),
        C = n.n(N),
        T = "CARD_LIST_REQUEST",
        A = "CARD_LIST_SUCCESS",
        U = "CARD_LIST_FAIL",
        R = "CARD_LIST_RESET",
        D = "USER_LOGIN_REQUEST",
        P = "USER_LOGIN_SUCCESS",
        F = "USER_LOGIN_FAIL",
        B = "USER_LOGOUT",
        W = "USER_REGISTER_REQUEST",
        z = "USER_REGISTER_SUCCESS",
        M = "USER_REGISTER_FAIL",
        H = "USER_REGISTER_RESET",
        G = "USER_DETAIL_REQUEST",
        q = "USER_DETAIL_SUCCESS",
        Y = "USER_DETAIL_FAIL",
        Q = "USER_DETAIL_RESET",
        J = "USER_PROFILE_UPDATE_REQUEST",
        K = "USER_PROFILE_UPDATE_SUCCESS",
        V = "USER_PROFILE_UPDATE_FAIL",
        X = "USER_PROFILE_UPDATE_RESET",
        Z = "USER_DETAILS_UPDATE_REQUEST",
        $ = "USER_DETAILS_UPDATE_SUCCESS",
        ee = "USER_DETAILS_UPDATE_FAIL",
        te = "USER_DETAILS_UPDATE_RESET",
        ne = "NEW_MATCHES_LIST_REQUEST",
        ae = "NEW_MATCHES_LIST_SUCCESS",
        re = "NEW_MATCHES_LIST_FAIL",
        ce = "NEW_MATCHES_LIST_RESET",
        se = "LIKES_LIST_REQUEST",
        oe = "LIKES_LIST_SUCCESS",
        ie = "LIKES_LIST_FAIL",
        le = "LIKES_LIST_RESET",
        ue = "BLOCK_ON",
        de = "BLOCK_OFF",
        je = function () {
          return (function () {
            var e = Object(L.a)(
              k.a.mark(function e(t, n) {
                var a, r, c, s, o;
                return k.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: T }),
                            (a = n()),
                            (r = a.userLogin.userInfo),
                            (c = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(r.token),
                              },
                            }),
                            (e.next = 6),
                            C.a.get("/api/users/cards/".concat(r.id, "/"), c)
                          );
                        case 6:
                          (s = e.sent),
                            (o = s.data),
                            t({ type: A, payload: o }),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(0)),
                            t({
                              type: U,
                              payload:
                                e.t0.response && e.t0.response.data.detail
                                  ? e.t0.response.data.detail
                                  : e.t0.message,
                            });
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        },
        be = function () {
          return (function () {
            var e = Object(L.a)(
              k.a.mark(function e(t, n) {
                var a, r, c, s, o;
                return k.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: G }),
                            (a = n()),
                            (r = a.userLogin.userInfo),
                            (c = {
                              headers: {
                                "content-type": "application/json",
                                Authorization: "Bearer ".concat(r.token),
                              },
                            }),
                            (e.next = 6),
                            C.a.get("/api/users/profile/", c)
                          );
                        case 6:
                          (s = e.sent),
                            (o = s.data),
                            t({ type: q, payload: o }),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(0)),
                            t({
                              type: Y,
                              payload:
                                e.t0.response && e.t0.response.data.detail
                                  ? e.t0.response.data.detail
                                  : e.t0.message,
                            });
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        },
        pe = function () {
          return (function () {
            var e = Object(L.a)(
              k.a.mark(function e(t, n) {
                var a, r, c, s, o;
                return k.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: se }),
                            (a = n()),
                            (r = a.userLogin.userInfo),
                            (c = {
                              headers: {
                                "content-type": "application/json",
                                Authorization: "Bearer ".concat(r.token),
                              },
                            }),
                            (e.next = 6),
                            C.a.get("/api/users/likes/".concat(r.id, "/"), c)
                          );
                        case 6:
                          (s = e.sent),
                            (o = s.data),
                            t({ type: oe, payload: o }),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(0)),
                            t({
                              type: ie,
                              payload:
                                e.t0.response && e.t0.response.data.detail
                                  ? e.t0.response.data.detail
                                  : e.t0.message,
                            });
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        },
        he = n(212),
        me = Object(he.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(8),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            registerForm: {
              width: "100%",
              marginTop: e.spacing(1),
              overflowY: "scroll",
              flexWrap: "nowrap",
              maxHeight: "100vh",
              paddingBottom: "10rem",
            },
            settingsForm: {
              display: "block",
              width: "100%",
              marginTop: e.spacing(1),
              overflowY: "scroll",
              flexWrap: "nowrap",
              maxHeight: "100vh",
              paddingBottom: "15rem",
            },
            loginForm: {
              width: "100%",
              marginTop: e.spacing(1),
              overflowY: "scroll",
              flexWrap: "nowrap",
              maxHeight: "100vh",
              paddingBottom: "15rem",
            },
            submit: { margin: e.spacing(3, 0, 2) },
            iconLarge: { width: e.spacing(10), height: e.spacing(10) },
            newMatches: { display: "flex", overflowX: "auto" },
            cardImage: { height: "50vh" },
            cardContent: { padding: "0 10px 10px" },
            cardDetail: {
              padding: "10px 0 30vh",
              lineHeight: 2,
              borderTop: "0.5px solid rgba(223, 224, 223, 0.3)",
            },
            matchesScreen: {
              overflowY: "scroll",
              maxHeight: "100vh",
              maxWidth: "768px",
              marginRight: "auto",
              marginLeft: "auto",
              paddingBottom: "10rem",
            },
            registerScreen: { overflowY: "scroll !important" },
            messageHeader: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              borderBottom: "1px solid #f6f6f6",
              backgroundColor: "#fff",
              zIndex: "1",
              height: "8rem",
            },
            messageHeader__icon: {
              height: "5rem !important",
              width: "5rem !important",
            },
          };
        });
      function fe(e) {
        var t = e.location,
          n = e.history,
          r = me(),
          c = Object(a.useState)(""),
          i = Object(l.a)(c, 2),
          S = i[0],
          I = i[1],
          N = Object(a.useState)(""),
          T = Object(l.a)(N, 2),
          A = T[0],
          U = T[1],
          R = Object(a.useState)(""),
          D = Object(l.a)(R, 2),
          F = D[0],
          B = D[1],
          G = Object(a.useState)(""),
          q = Object(l.a)(G, 2),
          Y = q[0],
          Q = q[1],
          J = Object(a.useState)("Male"),
          K = Object(l.a)(J, 2),
          V = K[0],
          X = K[1],
          Z = Object(a.useState)(""),
          $ = Object(l.a)(Z, 2),
          ee = $[0],
          te = $[1],
          ne = Object(a.useState)(""),
          ae = Object(l.a)(ne, 2),
          re = ae[0],
          ce = ae[1],
          se = Object(s.b)(),
          oe = t.search ? t.search.split("=")[1] : "/recs",
          ie = Object(s.c)(function (e) {
            return e.userRegister;
          }),
          le = ie.loading,
          ue = ie.error,
          de = Object(s.c)(function (e) {
            return e.userLogin;
          }).userInfo;
        return (
          Object(a.useEffect)(
            function () {
              de && n.push(oe);
            },
            [n, de, oe]
          ),
          Object(w.jsxs)(v.a, {
            component: "div",
            maxWidth: "xs",
            className: r.registerScreen,
            children: [
              Object(w.jsx)(j.b, {}),
              Object(w.jsxs)(u.a, {
                mt: 2,
                textAlign: "center",
                children: [
                  Object(w.jsx)("img", {
                    src: "https://cdn.worldvectorlogo.com/logos/tinder-2.svg",
                    style: { height: "30px", width: "30px" },
                  }),
                  Object(w.jsx)(g.a, {
                    component: "h1",
                    variant: "h5",
                    children: "Sign in",
                  }),
                ],
              }),
              re && Object(w.jsx)(y.a, { severity: "error", children: re }),
              le && Object(w.jsx)(E, {}),
              ue && Object(w.jsx)(y.a, { severity: "error", children: ue }),
              Object(w.jsx)("form", {
                className: r.registerForm,
                onSubmit: function (e) {
                  e.preventDefault(),
                    F !== Y
                      ? ce("Passwords do not match.")
                      : _(ee) < 18
                      ? ce(
                          "People under the age of 18 are not allowed to register."
                        )
                      : se(
                          (function (e, t, n, a, r) {
                            return (function () {
                              var c = Object(L.a)(
                                k.a.mark(function c(s) {
                                  var o, i, l, u;
                                  return k.a.wrap(
                                    function (c) {
                                      for (;;)
                                        switch ((c.prev = c.next)) {
                                          case 0:
                                            return (
                                              (c.prev = 0),
                                              s({ type: W }),
                                              (o = {
                                                headers: {
                                                  "content-type":
                                                    "application/json",
                                                },
                                              }),
                                              (c.next = 5),
                                              C.a.post(
                                                "/api/users/register/",
                                                {
                                                  name: e,
                                                  email: t,
                                                  password: n,
                                                  genderIdentity: a,
                                                  birthDate: r,
                                                },
                                                o
                                              )
                                            );
                                          case 5:
                                            return (
                                              (i = c.sent),
                                              (l = i.data),
                                              s({ type: z, payload: l }),
                                              s({ type: H }),
                                              (c.next = 11),
                                              C.a.post(
                                                "/api/users/login/",
                                                { username: t, password: n },
                                                o
                                              )
                                            );
                                          case 11:
                                            (u = c.sent),
                                              s({ type: P, payload: u.data }),
                                              localStorage.setItem(
                                                "userInfo",
                                                JSON.stringify(l)
                                              ),
                                              (c.next = 19);
                                            break;
                                          case 16:
                                            (c.prev = 16),
                                              (c.t0 = c.catch(0)),
                                              s({
                                                type: M,
                                                payload:
                                                  c.t0.response &&
                                                  c.t0.response.data.detail
                                                    ? c.t0.response.data.detail
                                                    : c.t0.message,
                                              });
                                          case 19:
                                          case "end":
                                            return c.stop();
                                        }
                                    },
                                    c,
                                    null,
                                    [[0, 16]]
                                  );
                                })
                              );
                              return function (e) {
                                return c.apply(this, arguments);
                              };
                            })();
                          })(S, A, F, V, ee)
                        );
                },
                children: Object(w.jsxs)(O.a, {
                  container: !0,
                  direction: "column",
                  children: [
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "First Name",
                        value: S,
                        autoFocus: !0,
                        onChange: function (e) {
                          return I(e.target.value);
                        },
                      }),
                    }),
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "Email Address",
                        type: "email",
                        value: A,
                        autoComplete: "email",
                        onChange: function (e) {
                          return U(e.target.value);
                        },
                      }),
                    }),
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "Password",
                        type: "password",
                        value: F,
                        autoComplete: "current-password",
                        onChange: function (e) {
                          return B(e.target.value);
                        },
                      }),
                    }),
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "Confirm Password",
                        type: "password",
                        value: Y,
                        autoComplete: "current-password",
                        onChange: function (e) {
                          return Q(e.target.value);
                        },
                      }),
                    }),
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsxs)(p.a, {
                        children: [
                          Object(w.jsx)(h.a, { children: "Gender" }),
                          Object(w.jsxs)(x.a, {
                            required: !0,
                            defaultValue: "Male",
                            "aria-label": "gender",
                            value: V,
                            onChange: function (e) {
                              return X(e.target.value);
                            },
                            children: [
                              Object(w.jsx)(m.a, {
                                value: "Male",
                                control: Object(w.jsx)(f.a, {}),
                                label: "Male",
                              }),
                              Object(w.jsx)(m.a, {
                                value: "Female",
                                control: Object(w.jsx)(f.a, {}),
                                label: "Female",
                              }),
                              Object(w.jsx)(m.a, {
                                value: "Others",
                                control: Object(w.jsx)(f.a, {}),
                                label: "Others",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "Birth Date",
                        type: "date",
                        value: ee,
                        InputLabelProps: { shrink: !0 },
                        onChange: function (e) {
                          return te(e.target.value);
                        },
                      }),
                    }),
                    Object(w.jsx)(d.a, {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      color: "primary",
                      className: r.submit,
                      children: "Sign Up",
                    }),
                    Object(w.jsx)(O.a, {
                      item: !0,
                      xs: 12,
                      children: Object(w.jsx)(o.b, {
                        to: oe ? "/login?redirect=".concat(oe) : "/login",
                        children: "Already have an account? Sign In",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var xe = n(231);
      function Oe(e) {
        var t = e.location,
          n = e.history,
          r = me(),
          c = Object(a.useState)(""),
          i = Object(l.a)(c, 2),
          p = i[0],
          h = i[1],
          f = Object(a.useState)(""),
          x = Object(l.a)(f, 2),
          S = x[0],
          _ = x[1],
          I = Object(s.b)(),
          N = t.search ? t.search.split("=")[1] : "/recs",
          T = Object(s.c)(function (e) {
            return e.userLogin;
          }),
          A = T.loading,
          U = T.error,
          R = T.userInfo;
        return (
          Object(a.useEffect)(
            function () {
              R && n.push(N);
            },
            [n, R, N]
          ),
          Object(w.jsxs)(v.a, {
            component: "div",
            maxWidth: "xs",
            children: [
              Object(w.jsx)(j.b, {}),
              Object(w.jsxs)("div", {
                className: r.paper,
                children: [
                  Object(w.jsx)("img", {
                    src: "https://cdn.worldvectorlogo.com/logos/tinder-2.svg",
                    style: { height: "30px", width: "30px" },
                  }),
                  Object(w.jsx)(g.a, {
                    component: "h1",
                    variant: "h5",
                    children: "Sign in",
                  }),
                  A &&
                    Object(w.jsx)(u.a, {
                      mt: 2,
                      children: Object(w.jsx)(E, { mt: 10 }),
                    }),
                  U &&
                    Object(w.jsx)(u.a, {
                      mt: 2,
                      children: Object(w.jsx)(y.a, {
                        severity: "error",
                        children: U,
                      }),
                    }),
                  Object(w.jsxs)("form", {
                    className: r.loginForm,
                    noValidate: !0,
                    onSubmit: function (e) {
                      e.preventDefault(),
                        I(
                          (function (e, t) {
                            return (function () {
                              var n = Object(L.a)(
                                k.a.mark(function n(a) {
                                  var r, c, s;
                                  return k.a.wrap(
                                    function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            return (
                                              (n.prev = 0),
                                              a({ type: D }),
                                              (r = {
                                                headers: {
                                                  "content-type":
                                                    "application/json",
                                                },
                                              }),
                                              (n.next = 5),
                                              C.a.post(
                                                "/api/users/login/",
                                                { username: e, password: t },
                                                r
                                              )
                                            );
                                          case 5:
                                            (c = n.sent),
                                              (s = c.data),
                                              a({ type: P, payload: s }),
                                              localStorage.setItem(
                                                "userInfo",
                                                JSON.stringify(s)
                                              ),
                                              (n.next = 14);
                                            break;
                                          case 11:
                                            (n.prev = 11),
                                              (n.t0 = n.catch(0)),
                                              a({
                                                type: F,
                                                payload:
                                                  n.t0.response &&
                                                  n.t0.response.data.detail
                                                    ? n.t0.response.data.detail
                                                    : n.t0.message,
                                              });
                                          case 14:
                                          case "end":
                                            return n.stop();
                                        }
                                    },
                                    n,
                                    null,
                                    [[0, 11]]
                                  );
                                })
                              );
                              return function (e) {
                                return n.apply(this, arguments);
                              };
                            })();
                          })(p, S)
                        );
                    },
                    children: [
                      Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "Email Address",
                        type: "email",
                        value: p,
                        autoComplete: "email",
                        autoFocus: !0,
                        onChange: function (e) {
                          return h(e.target.value);
                        },
                      }),
                      Object(w.jsx)(b.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        label: "Password",
                        type: "password",
                        value: S,
                        autoComplete: "current-password",
                        onChange: function (e) {
                          return _(e.target.value);
                        },
                      }),
                      Object(w.jsx)(m.a, {
                        control: Object(w.jsx)(xe.a, {
                          value: "remember",
                          color: "primary",
                        }),
                        label: "Remember me",
                      }),
                      Object(w.jsx)(d.a, {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "secondary",
                        className: r.submit,
                        children: "Sign In",
                      }),
                      Object(w.jsx)(O.a, {
                        container: !0,
                        children: Object(w.jsx)(O.a, {
                          item: !0,
                          children: Object(w.jsx)(o.b, {
                            to: N
                              ? "/register?redirect=".concat(N)
                              : "/register",
                            children: "Don't have an account? Sign Up",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ge = n(225),
        ve = n(76),
        ye = n.n(ve),
        Se = n(108),
        we = n.n(Se),
        Ee = n(107),
        _e = n.n(Ee),
        Ie = n(178),
        ke = function (e) {
          var t = e.recs,
            n = e.goldHome,
            a = e.matches,
            r = e.profile;
          return Object(w.jsx)("div", {
            className: "common-header",
            children: Object(w.jsxs)("div", {
              className: "common-header__icons-container max-width",
              children: [
                Object(w.jsx)(o.b, {
                  to: "/recs",
                  children: Object(w.jsx)(Ie.a, {
                    disabled: !0,
                    className: "common-header__icon",
                    children: Object(w.jsx)("img", {
                      className: "common-header__logo",
                      src: "https://cdn.worldvectorlogo.com/logos/tinder-2.svg",
                      alt: "tinder logo",
                      style: t ? null : { filter: "grayscale(100%)" },
                    }),
                  }),
                }),
                Object(w.jsx)(o.b, {
                  to: "/gold-home",
                  children: Object(w.jsx)(Ie.a, {
                    className: "common-header__icon",
                    children: Object(w.jsx)(_e.a, {
                      fontSize: "large",
                      style: n && { color: "#FF5864" },
                    }),
                  }),
                }),
                Object(w.jsx)(o.b, {
                  to: "/matches",
                  children: Object(w.jsx)(Ie.a, {
                    className: "common-header__icon",
                    children: Object(w.jsx)(we.a, {
                      fontSize: "large",
                      style: a && { color: "#FF5864" },
                    }),
                  }),
                }),
                Object(w.jsx)(o.b, {
                  to: "/profile",
                  children: Object(w.jsx)(Ie.a, {
                    className: "common-header__icon",
                    children: Object(w.jsx)(ye.a, {
                      fontSize: "large",
                      style: r && { color: "#FF5864" },
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Le = n(77),
        Ne = n.n(Le),
        Ce = n(78),
        Te = n.n(Ce),
        Ae = n(221),
        Ue = n(223),
        Re = n(224),
        De = n(222),
        Pe = (function () {
          var e = Object(L.a)(
            k.a.mark(function e(t, n, a) {
              var r;
              return k.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        C.a.get(
                          "/api/reactions/".concat(n, "/").concat(t, "/"),
                          a
                        )
                      );
                    case 2:
                      if ("L" !== e.sent.data.status) {
                        e.next = 8;
                        break;
                      }
                      return (
                        (e.next = 6),
                        C.a.post(
                          "/api/chatroomusers/register/",
                          { user1Id: t, user2Id: n },
                          a
                        )
                      );
                    case 6:
                      (r = e.sent), r.data;
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        Fe = function () {
          return function (e) {
            e({ type: ue });
          };
        },
        Be = function () {
          return function (e) {
            e({ type: de });
          };
        },
        We = function (e) {
          var t,
            n,
            r,
            c,
            o,
            i,
            d = e.person,
            j = e.className,
            b = e.cardIsEmpty,
            p = me(),
            h = Object(a.useState)(!1),
            m = Object(l.a)(h, 2),
            f = m[0],
            x = m[1],
            v = d.birth_date ? _(d.birth_date) : "-",
            y = Object(s.c)(function (e) {
              return e.isBlocked;
            }),
            S = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            E = Object(s.b)(),
            I = {
              headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(S.token),
              },
            },
            N = Object(a.useState)(),
            T = Object(l.a)(N, 2),
            A = T[0],
            U = T[1],
            R = Object(a.useState)(),
            D = Object(l.a)(R, 2),
            P = D[0],
            F = D[1],
            B = Object(a.useState)(),
            W = Object(l.a)(B, 2),
            z = W[0],
            M = W[1],
            H = Object(a.useState)(),
            G = Object(l.a)(H, 2),
            q = G[0],
            Y = G[1],
            Q = Object(a.useCallback)(
              function (e) {
                if ((E(Fe()), A.classList.add("drag"), "mousedown" === e.type))
                  var a = e;
                else a = e.changedTouches[0];
                (t = a.pageX),
                  (n = a.pageY),
                  document.body.addEventListener("mousemove", J, !1),
                  document.body.addEventListener("touchmove", J, !1);
              },
              [E, A]
            ),
            J = Object(a.useCallback)(
              function (e) {
                if ("mousemove" === e.type) var a = e;
                else a = e.changedTouches[0];
                (c = a.pageY),
                  (r = a.pageX),
                  (o = r - t),
                  (i = c - n),
                  (A.style.top = i + "px"),
                  (A.style.left = o + "px");
                var s = o / 10;
                (A.style.transform = "rotate(".concat(s, "deg)")),
                  o >= 0
                    ? (z.style.opacity = o / 100)
                    : (q.style.opacity = -o / 100),
                  A.addEventListener("mouseup", K, !1),
                  document.body.addEventListener("mouseleave", K, !1),
                  A.addEventListener("touchend", K, !1),
                  document.body.addEventListener("touchleave", K, !1);
              },
              [A, z, q]
            ),
            K = Object(a.useCallback)(
              Object(L.a)(
                k.a.mark(function e() {
                  var t;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(Math.abs(o) < 75 && Math.abs(i) < 75)) {
                            e.next = 9;
                            break;
                          }
                          (A.style.left = 0),
                            (A.style.top = 0),
                            (A.style.transform = "rotate(0)"),
                            (z.style.opacity = 0),
                            (q.style.opacity = 0),
                            E(Be()),
                            (e.next = 20);
                          break;
                        case 9:
                          return (
                            o >= 75
                              ? ((A.style.left = "150%"), (t = "like"))
                              : o <= -75
                              ? ((A.style.left = "-150%"), (t = "nope"))
                              : o > 0 && Math.abs(i) >= 75
                              ? ((A.style.left = "150%"), (t = "like"))
                              : o < 0 &&
                                Math.abs(i) >= 75 &&
                                ((A.style.left = "-150%"), (t = "nope")),
                            document.body.removeEventListener(
                              "mousemove",
                              J,
                              !1
                            ),
                            A.removeEventListener("mouseup", K, !1),
                            document.body.removeEventListener(
                              "touchmove",
                              J,
                              !1
                            ),
                            A.removeEventListener("touchend", K, !1),
                            A.classList.remove("drag"),
                            setTimeout(function () {
                              return A.remove();
                            }, 200),
                            (e.next = 18),
                            C.a.post(
                              "/api/reactions/swipe/",
                              {
                                fromUserId: S.id,
                                toUserId: Number(A.id),
                                status: "like" === t ? "L" : "N",
                              },
                              I
                            )
                          );
                        case 18:
                          "like" === t && Pe(S.id, A.id, I),
                            null === P
                              ? (setTimeout(function () {
                                  return b();
                                }, 200),
                                E(Fe()))
                              : setTimeout(function () {
                                  return E(Be());
                                }, 500);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [E, A]
            );
          return (
            Object(a.useEffect)(function () {
              U(document.getElementById(d.id)),
                F(document.getElementById(d.id).nextElementSibling),
                M(document.getElementById(d.id).firstChild.nextElementSibling),
                Y(
                  document.getElementById(d.id).firstChild.nextElementSibling
                    .nextElementSibling
                );
            }, []),
            Object(a.useEffect)(
              function () {
                A &&
                  (f &&
                    (document.body.removeEventListener("mousemove", J, !1),
                    document.body.removeEventListener("touchmove", J, !1),
                    document.body.removeEventListener("mouseleave", K, !1),
                    document.body.removeEventListener("touchleave", K, !1)),
                  y &&
                    (A.removeEventListener("mousedown", Q, !1),
                    A.removeEventListener("touchstart", Q, !1)),
                  y ||
                    f ||
                    (A.addEventListener("mousedown", Q, !1),
                    A.addEventListener("touchstart", Q, !1)));
              },
              [A, y, f, Q, J, Q]
            ),
            Object(w.jsxs)(Ae.a, {
              className: j,
              id: d.id,
              children: [
                Object(w.jsx)(De.a, {
                  image: d.image ? d.image : "unknown_ffqtxf",
                  className: p.cardImage,
                  title: "profile photo",
                }),
                Object(w.jsx)(g.a, {
                  component: "span",
                  variant: "h3",
                  className: "card__like",
                  children: "LIKE",
                }),
                Object(w.jsx)(g.a, {
                  component: "span",
                  variant: "h3",
                  className: "card__nope",
                  children: "NOPE",
                }),
                Object(w.jsx)(Ue.a, {
                  onClick: function () {
                    y || f || (x(!0), E(Fe()));
                  },
                  children: Object(w.jsxs)(Re.a, {
                    className: p.cardContent,
                    children: [
                      Object(w.jsxs)(g.a, {
                        component: "h1",
                        variant: "h3",
                        gutterBottom: !0,
                        children: [
                          Object(w.jsx)("strong", { children: d.first_name }),
                          " ",
                          Object(w.jsx)(g.a, {
                            component: "span",
                            variant: "h4",
                            children: v,
                          }),
                        ],
                      }),
                      Object(w.jsxs)(O.a, {
                        container: !0,
                        alignItems: "center",
                        children: [
                          Object(w.jsx)(O.a, {
                            item: !0,
                            xs: 6,
                            children:
                              d.profession &&
                              Object(w.jsxs)(g.a, {
                                component: "h2",
                                variant: "h6",
                                gutterBottom: !0,
                                children: [
                                  Object(w.jsx)("i", {
                                    className: "fas fa-graduation-cap",
                                  }),
                                  " ",
                                  d.profession,
                                ],
                              }),
                          }),
                          Object(w.jsx)(O.a, {
                            item: !0,
                            xs: 6,
                            children: Object(w.jsx)(u.a, {
                              component: "div",
                              textAlign: "right",
                              children: f
                                ? Object(w.jsx)(Ie.a, {
                                    style: { backgroundColor: "#f50057" },
                                    component: "span",
                                    onClick: function (e) {
                                      return (function (e) {
                                        y ||
                                          (f && (x(!1), e.stopPropagation()));
                                      })(e);
                                    },
                                    children: Object(w.jsx)(Ne.a, {
                                      style: { color: "#fff" },
                                      fontSize: "large",
                                    }),
                                  })
                                : Object(w.jsx)(Ie.a, {
                                    component: "span",
                                    children: Object(w.jsx)(Te.a, {
                                      fontSize: "large",
                                    }),
                                  }),
                            }),
                          }),
                        ],
                      }),
                      f &&
                        Object(w.jsx)(u.a, {
                          mt: 1,
                          children: Object(w.jsx)(g.a, {
                            component: "p",
                            variant: "h5",
                            color: "textSecondary",
                            className: p.cardDetail,
                            children: d.self_introduction,
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        ze = function () {
          return Object(w.jsx)(u.a, {
            className: "empty",
            children: Object(w.jsxs)(u.a, {
              className: "empty__circle-container",
              children: [
                Object(w.jsx)(u.a, { className: "empty__circle" }),
                Object(w.jsx)(u.a, {
                  className: "empty__circle empty__circle_delay",
                }),
                Object(w.jsx)(ye.a, {}),
              ],
            }),
          });
        },
        Me = function (e) {
          var t = e.cardIsEmpty,
            n = Object(s.b)(),
            r = Object(s.c)(function (e) {
              return e.cardList;
            }),
            c = r.loading,
            o = r.error,
            i = r.cards,
            l = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          return (
            Object(a.useEffect)(
              function () {
                l && n(je());
              },
              [n, l]
            ),
            Object(a.useEffect)(
              function () {
                !1 === c && i && 0 === i.length && t();
              },
              [i, t]
            ),
            Object(w.jsx)("div", {
              children: c
                ? Object(w.jsx)(ze, {})
                : o
                ? Object(w.jsx)(y.a, { severity: "error", children: o })
                : i &&
                  Object(w.jsx)("div", {
                    className: "cards",
                    children: i.map(function (e) {
                      return Object(w.jsx)(
                        We,
                        { person: e, className: "card", cardIsEmpty: t },
                        e.id
                      );
                    }),
                  }),
            })
          );
        },
        He = n(109),
        Ge = n.n(He),
        qe = n(110),
        Ye = n.n(qe),
        Qe = n(111),
        Je = n.n(Qe),
        Ke = n(65),
        Ve = n.n(Ke),
        Xe = n(112),
        Ze = n.n(Xe),
        $e = function (e) {
          var t = e.cardIsEmpty,
            n = Object(s.b)(),
            r = Object(s.c)(function (e) {
              return e.cardList;
            }),
            c = r.loading,
            o = r.cards,
            i = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            l = {
              headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(i.token),
              },
            },
            d = Object(s.c)(function (e) {
              return e.isBlocked;
            });
          Object(a.useEffect)(
            function () {
              !1 === c && o && o.length > 0 && n(Be());
            },
            [n, c]
          );
          var j = (function () {
            var e = Object(L.a)(
              k.a.mark(function e(a) {
                var r, c;
                return k.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!d) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (r = document.getElementsByClassName("card")[0]),
                          (c = document.getElementsByClassName("card")[1]),
                          n(Fe()),
                          (document.getElementsByClassName(
                            "card__".concat(a)
                          )[0].style.opacity = 1),
                          setTimeout(function () {
                            return r.classList.add(a);
                          }, 100),
                          setTimeout(function () {
                            return r.remove();
                          }, 600),
                          (e.next = 10),
                          C.a.post(
                            "/api/reactions/swipe/",
                            {
                              fromUserId: i.id,
                              toUserId: Number(r.id),
                              status: "like" === a ? "L" : "N",
                            },
                            l
                          )
                        );
                      case 10:
                        "like" === a && Pe(i.id, r.id, l),
                          void 0 === c
                            ? (setTimeout(function () {
                                return t();
                              }, 600),
                              n(Fe()))
                            : setTimeout(function () {
                                return n(Be());
                              }, 600);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(w.jsx)(u.a, {
            className: "swipe-btns__container",
            children: Object(w.jsxs)(u.a, {
              className: "swipe-btns max-width",
              children: [
                Object(w.jsx)(Ie.a, {
                  className: "swipe-btns__back",
                  disabled: d,
                  children: Object(w.jsx)(Ge.a, { fontSize: "large" }),
                }),
                Object(w.jsx)(Ie.a, {
                  className: "swipe-btns__dislike",
                  disabled: d,
                  onClick: function () {
                    j("nope");
                  },
                  children: Object(w.jsx)(Ye.a, { fontSize: "large" }),
                }),
                Object(w.jsx)(Ie.a, {
                  className: "swipe-btns__super-like",
                  disabled: d,
                  children: Object(w.jsx)(Je.a, { fontSize: "large" }),
                }),
                Object(w.jsx)(Ie.a, {
                  className: "swipe-btns__like",
                  disabled: d,
                  onClick: function () {
                    j("like");
                  },
                  children: Object(w.jsx)(Ve.a, { fontSize: "large" }),
                }),
                Object(w.jsx)(Ie.a, {
                  className: "swipe-btns__boost",
                  disabled: d,
                  children: Object(w.jsx)(Ze.a, { fontSize: "large" }),
                }),
              ],
            }),
          });
        },
        et = function (e) {
          var t = e.history,
            n = Object(a.useState)(!1),
            r = Object(l.a)(n, 2),
            c = r[0],
            o = r[1],
            i = function () {
              return o(!0);
            },
            u = Object(s.c)(function (e) {
              return e.userLogin;
            }),
            d = u.loading,
            j = u.error,
            b = u.userInfo,
            p = Object(s.c)(function (e) {
              return e.userDetails;
            }).user,
            h = Object(s.b)();
          return (
            Object(a.useEffect)(
              function () {
                b ? p || h(be()) : t.push("/login");
              },
              [t, b, p]
            ),
            Object(w.jsxs)("div", {
              children: [
                Object(w.jsx)(ke, { recs: !0 }),
                d
                  ? Object(w.jsx)(E, {})
                  : j
                  ? Object(w.jsx)(y.a, { severity: "error", children: j })
                  : b &&
                    Object(w.jsxs)(ge.a, {
                      children: [
                        c
                          ? Object(w.jsx)(ze, {})
                          : Object(w.jsx)(Me, { cardIsEmpty: i }),
                        Object(w.jsx)($e, { cardIsEmpty: i }),
                      ],
                    }),
              ],
            })
          );
        };
      var tt = function (e) {
        var t = e.image;
        return Object(w.jsx)(Ae.a, {
          style: { width: "100%", borderRadius: "10px" },
          children: Object(w.jsxs)(Ue.a, {
            style: { position: "relative" },
            children: [
              Object(w.jsx)(De.a, {
                image: t || "unknown_ffqtxf",
                style: { width: "100%", height: "60vw", filter: "blur(10px)" },
                title: "Profile Photo",
              }),
              Object(w.jsx)(u.a, {
                component: "h3",
                position: "absolute",
                left: "1rem",
                bottom: "1rem",
                width: "60%",
                height: "0.8rem",
                borderRadius: "10px",
                style: { backgroundColor: "#fff", opacity: "0.3" },
              }),
              Object(w.jsx)(u.a, {
                component: "p",
                position: "absolute",
                left: "1rem",
                bottom: "0",
                width: "50%",
                height: "0.8rem",
                opacity: "0.3",
                borderRadius: "10px",
                style: { backgroundColor: "#000", opacity: "0.3" },
              }),
            ],
          }),
        });
      };
      var nt = function (e) {
          var t = e.history,
            n = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            r = Object(s.c)(function (e) {
              return e.likesList;
            }),
            c = r.loading,
            o = r.error,
            i = r.likes,
            l = Object(s.b)();
          return (
            Object(a.useEffect)(
              function () {
                n ? l(pe()) : t.push("/login");
              },
              [l, t, n]
            ),
            Object(w.jsxs)(u.a, {
              children: [
                Object(w.jsx)(ke, { goldHome: !0 }),
                c
                  ? Object(w.jsx)(E, {})
                  : o
                  ? Object(w.jsx)(y.a, { severity: "error", children: o })
                  : i &&
                    Object(w.jsxs)(u.a, {
                      mx: 1,
                      maxHeight: "100vh",
                      p: "0 1rem 10rem",
                      style: { overflowY: "scroll", flexWrap: "nowrap" },
                      className: "max-width",
                      children: [
                        Object(w.jsx)(g.a, {
                          component: "h1",
                          variant: "h4",
                          style: {
                            borderBottom: "1px solid #dfe0df",
                            padding: "10px",
                          },
                          paragraph: !0,
                          children: Object(w.jsxs)("strong", {
                            children: [
                              "  ",
                              1 === i.length
                                ? "".concat(i.length, " Like")
                                : i.length > 1
                                ? "".concat(i.length, " Likes")
                                : "No New Likes",
                            ],
                          }),
                        }),
                        i.length > 0 &&
                          Object(w.jsxs)(g.a, {
                            component: "h2",
                            variant: "h5",
                            color: "textSecondary",
                            align: "center",
                            paragraph: !0,
                            children: [
                              "Upgrade to Gold to see people",
                              Object(w.jsx)("br", {}),
                              "who already liked you.",
                            ],
                          }),
                        Object(w.jsxs)(O.a, {
                          container: !0,
                          spacing: 1,
                          justify: "space-evenly",
                          className: "max-width",
                          children: [
                            i.length >= 1 &&
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 6,
                                children: Object(w.jsx)(tt, {
                                  image: i[0].image,
                                }),
                              }),
                            i.length >= 1 &&
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 6,
                                children:
                                  i.length >= 2 &&
                                  Object(w.jsx)(tt, { image: i[1].image }),
                              }),
                            i.length >= 3 &&
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 6,
                                children: Object(w.jsx)(tt, {
                                  image: i[2].image,
                                }),
                              }),
                            i.length >= 3 &&
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 6,
                                children:
                                  i.length >= 4 &&
                                  Object(w.jsx)(tt, { image: i[3].image }),
                              }),
                            i.length >= 5 &&
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 6,
                                children: Object(w.jsx)(tt, {
                                  image: i[4].image,
                                }),
                              }),
                            i.length >= 5 &&
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 6,
                                children:
                                  i.length >= 6 &&
                                  Object(w.jsx)(tt, { image: i[5].image }),
                              }),
                          ],
                        }),
                      ],
                    }),
              ],
            })
          );
        },
        at = n(233),
        rt = Object(he.a)(function (e) {
          return { iconLarge: { width: e.spacing(10), height: e.spacing(10) } };
        });
      var ct = function (e) {
          var t = e.person,
            n = rt();
          return Object(w.jsxs)(u.a, {
            textAlign: "center",
            mx: 1,
            children: [
              Object(w.jsx)(at.a, {
                src: t.image,
                alt: "new match",
                className: n.iconLarge,
              }),
              Object(w.jsx)(g.a, {
                component: "span",
                variant: "h5",
                children: t.first_name,
              }),
            ],
          });
        },
        st = Object(he.a)(function (e) {
          return {
            iconLarge: { width: e.spacing(9), height: e.spacing(9) },
            tinderGoldIconBack: {
              width: e.spacing(10),
              height: e.spacing(10),
              borderRadius: "50%",
              backgroundColor: "#e4c478",
            },
            newMatches: { display: "flex", overflowX: "auto" },
          };
        });
      var ot = function (e) {
          var t = e.history,
            n = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            r = Object(s.c)(function (e) {
              return e.likesList;
            }).likes,
            c = Object(s.c)(function (e) {
              return e.newMatchesList;
            }),
            i = c.loading,
            l = c.error,
            d = c.matches,
            j = Object(s.b)();
          Object(a.useEffect)(
            function () {
              n
                ? (j(pe()),
                  j(
                    (function () {
                      var e = Object(L.a)(
                        k.a.mark(function e(t, n) {
                          var a, r, c, s;
                          return k.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: ne }),
                                      (a = n()),
                                      (r = a.userLogin.userInfo),
                                      (c = {
                                        headers: {
                                          "content-type": "application/json",
                                          Authorization: "Bearer ".concat(
                                            r.token
                                          ),
                                        },
                                      }),
                                      (e.next = 6),
                                      C.a.get(
                                        "/api/users/newmatches/".concat(
                                          r.id,
                                          "/"
                                        ),
                                        c
                                      )
                                    );
                                  case 6:
                                    (s = e.sent),
                                      t({ type: ae, payload: s.data }),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: re,
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.detail
                                            ? e.t0.response.data.detail
                                            : e.t0.message,
                                      });
                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ))
                : t.push("/login");
            },
            [j, t, n]
          );
          var b = st();
          return Object(w.jsx)(u.a, {
            className: b.newMatches,
            children: i
              ? Object(w.jsx)(E, {})
              : l
              ? Object(w.jsx)(y.a, { severity: "error", children: l })
              : Object(w.jsxs)(u.a, {
                  display: "flex",
                  flexDirection: "row",
                  children: [
                    r &&
                      r.length > 0 &&
                      Object(w.jsx)(o.b, {
                        to: "/gold-home",
                        children: Object(w.jsxs)(u.a, {
                          textAlign: "center",
                          mx: 1,
                          children: [
                            Object(w.jsx)(u.a, {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              className: "".concat(
                                b.tinderGoldIconBack,
                                " tinder-gold"
                              ),
                              children: Object(w.jsx)(at.a, {
                                src: r[0].image,
                                alt: "new match",
                                className: b.iconLarge,
                              }),
                            }),
                            Object(w.jsx)(g.a, {
                              component: "span",
                              variant: "h5",
                              children:
                                1 === r.length
                                  ? "".concat(r.length, " Like")
                                  : r.length > 1 &&
                                    "".concat(r.length, " Likes"),
                            }),
                          ],
                        }),
                      }),
                    d &&
                      d.length > 0 &&
                      d.map(function (e) {
                        return Object(w.jsx)(
                          o.b,
                          {
                            to: "/messages/".concat(e.id),
                            children: Object(w.jsx)(ct, { person: e }),
                          },
                          e.id
                        );
                      }),
                  ],
                }),
          });
        },
        it = n(113),
        lt = n(114),
        ut = n.n(lt),
        dt = Object(he.a)(function (e) {
          return { iconLarge: { width: e.spacing(10), height: e.spacing(10) } };
        });
      var jt = function (e) {
        var t = e.history,
          n = e.item,
          r = dt(),
          c = Object(a.useState)(),
          o = Object(l.a)(c, 2),
          i = o[0],
          d = o[1],
          j = Object(s.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          b = {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer ".concat(j.token),
            },
          };
        return (
          Object(a.useEffect)(
            Object(L.a)(
              k.a.mark(function e() {
                var a, r, c, s;
                return k.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (j) {
                          e.next = 4;
                          break;
                        }
                        t.push("/login"), (e.next = 17);
                        break;
                      case 4:
                        if (n.user_id != j.id) {
                          e.next = 12;
                          break;
                        }
                        return (
                          (e.next = 7),
                          C.a.get(
                            "/api/users/chatuser/"
                              .concat(j.id, "/")
                              .concat(n.chat_room_id, "/"),
                            b
                          )
                        );
                      case 7:
                        (a = e.sent), (r = a.data), d(r), (e.next = 17);
                        break;
                      case 12:
                        return (
                          (e.next = 14),
                          C.a.get(
                            "/api/users/cards/id/".concat(n.user_id, "/"),
                            b
                          )
                        );
                      case 14:
                        (c = e.sent), (s = c.data), d(s);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [t, j]
          ),
          i
            ? Object(w.jsx)(it.a, {
                to: "/messages/".concat(i.id, "#latest_message"),
                children: Object(w.jsxs)(u.a, {
                  display: "flex",
                  flexDirection: "row",
                  p: 1,
                  borderBottom: "1px solid #dfe0df",
                  alignItems: "center",
                  children: [
                    Object(w.jsx)(at.a, {
                      src: i.image,
                      alt: "Profile Photo",
                      className: r.iconLarge,
                    }),
                    Object(w.jsxs)(u.a, {
                      p: 2,
                      minWidth: "0",
                      children: [
                        Object(w.jsx)(g.a, {
                          component: "h2",
                          variant: "h5",
                          children: Object(w.jsx)("strong", {
                            children: i.first_name,
                          }),
                        }),
                        Object(w.jsx)(g.a, {
                          component: "p",
                          variant: "h5",
                          color:
                            n.read || n.user_id == j.id
                              ? "textSecondary"
                              : "textPrimary",
                          children: Object(w.jsxs)(u.a, {
                            component: "span",
                            display: "flex",
                            justifyContent: "flex-start",
                            children: [
                              Object(w.jsx)(u.a, {
                                component: "span",
                                children:
                                  n.user_id == j.id && Object(w.jsx)(ut.a, {}),
                              }),
                              Object(w.jsx)(u.a, {
                                component: "span",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                children: n.text,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : Object(w.jsx)(E, {})
        );
      };
      var bt = function (e) {
        var t = e.history,
          n = Object(a.useState)([]),
          r = Object(l.a)(n, 2),
          c = r[0],
          o = r[1],
          i = Object(a.useState)(!1),
          d = Object(l.a)(i, 2),
          j = d[0],
          b = d[1],
          p = Object(s.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          h = {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer ".concat(p.token),
            },
          };
        return (
          Object(a.useEffect)(
            Object(L.a)(
              k.a.mark(function e() {
                return k.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        p || t.push("/login");
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [t, p]
          ),
          Object(a.useEffect)(function () {
            b(!0);
            var e = !0;
            return (
              setInterval(
                Object(L.a)(
                  k.a.mark(function t() {
                    var n, a;
                    return k.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e) {
                              t.next = 7;
                              break;
                            }
                            return (
                              (t.next = 3),
                              C.a.get(
                                "/api/messages/latest/".concat(p.id, "/"),
                                h
                              )
                            );
                          case 3:
                            (n = t.sent), (a = n.data), o(a), b(!1);
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                ),
                1e3
              ),
              function () {
                return (e = !1);
              }
            );
          }, []),
          Object(w.jsx)(u.a, {
            children: j
              ? Object(w.jsx)(E, {})
              : Object(w.jsx)(u.a, {
                  children:
                    c.length > 0 &&
                    c.map(function (e) {
                      return Object(w.jsx)(jt, { item: e }, e.id);
                    }),
                }),
          })
        );
      };
      var pt = function (e) {
          var t = e.history,
            n = me(),
            r = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          return (
            Object(a.useEffect)(
              function () {
                r || t.push("/login");
              },
              [t, r]
            ),
            Object(w.jsxs)(u.a, {
              children: [
                Object(w.jsx)(ke, { matches: !0 }),
                Object(w.jsx)(u.a, {
                  className: n.matchesScreen,
                  children: Object(w.jsxs)(ge.a, {
                    children: [
                      Object(w.jsxs)(u.a, {
                        color: "#FF5864",
                        mx: 1,
                        children: [
                          Object(w.jsx)(g.a, {
                            component: "h1",
                            variant: "h5",
                            paragraph: !0,
                            children: Object(w.jsx)("strong", {
                              children: "New Matches",
                            }),
                          }),
                          Object(w.jsx)(ot, {}),
                        ],
                      }),
                      Object(w.jsxs)(u.a, {
                        mt: 3,
                        color: "#FF5864",
                        mx: 1,
                        children: [
                          Object(w.jsx)(g.a, {
                            component: "h1",
                            variant: "h5",
                            gutterBottom: !0,
                            children: Object(w.jsx)("strong", {
                              children: "Messages",
                            }),
                          }),
                          Object(w.jsx)(bt, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        ht = n(121),
        mt = n.n(ht),
        ft = n(115),
        xt = n.n(ft),
        Ot = n(116),
        gt = n.n(Ot);
      var vt = function (e) {
          var t = e.chatUserInfo,
            n = me();
          return Object(w.jsx)(O.a, {
            container: !0,
            className: n.messageHeader,
            alignItems: "center",
            children: Object(w.jsxs)(O.a, {
              item: !0,
              container: !0,
              direction: "row",
              justify: "space-between",
              children: [
                Object(w.jsx)(O.a, {
                  item: !0,
                  xs: 3,
                  sm: 3,
                  children: Object(w.jsx)(u.a, {
                    textAlign: "left",
                    children: Object(w.jsx)(o.b, {
                      to: "/matches",
                      children: Object(w.jsx)(Ie.a, {
                        className: n.messageHeader__icon,
                        children: Object(w.jsx)(xt.a, { fontSize: "large" }),
                      }),
                    }),
                  }),
                }),
                Object(w.jsx)(O.a, {
                  item: !0,
                  xs: 6,
                  sm: 6,
                  children:
                    t &&
                    Object(w.jsx)(o.b, {
                      to: "/messages/".concat(t.id, "/profile"),
                      children: Object(w.jsxs)(O.a, {
                        container: !0,
                        ction: "row",
                        justify: "center",
                        alignItems: "center",
                        children: [
                          Object(w.jsx)(at.a, {
                            src: t.image,
                            alt: "Profile Photo",
                            className: n.messageHeader__icon,
                          }),
                          Object(w.jsx)(u.a, {
                            pl: 2,
                            children: Object(w.jsx)(g.a, {
                              component: "h1",
                              variant: "h5",
                              children: t.first_name ? t.first_name : "No User",
                            }),
                          }),
                        ],
                      }),
                    }),
                }),
                Object(w.jsx)(O.a, {
                  item: !0,
                  xs: 3,
                  sm: 3,
                  children: Object(w.jsx)(u.a, {
                    textAlign: "right",
                    children: Object(w.jsx)(Ie.a, {
                      children: Object(w.jsx)(gt.a, { fontSize: "large" }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        yt = n(181),
        St = n(117),
        wt = n.n(St),
        Et = n(118),
        _t = n.n(Et),
        It = n(119),
        kt = n.n(It),
        Lt = n(120),
        Nt = n.n(Lt);
      var Ct = function (e) {
        var t = e.chatUserId,
          n = e.setMessages,
          r = Object(a.useState)(""),
          c = Object(l.a)(r, 2),
          o = c[0],
          i = c[1],
          j = Object(s.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          b = {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer ".concat(j.token),
            },
          },
          p = (function () {
            var e = Object(L.a)(
              k.a.mark(function e(a) {
                var r, c;
                return k.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          a.preventDefault(),
                          (e.next = 3),
                          C.a.post(
                            "/api/messages/send/",
                            { fromUserId: j.id, toUserId: t, text: o },
                            b
                          )
                        );
                      case 3:
                        (r = e.sent), (c = r.data), n(c), i("");
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return Object(w.jsx)(u.a, {
          className: "message-footer",
          children: Object(w.jsxs)(u.a, {
            width: "100%",
            children: [
              Object(w.jsx)(u.a, {
                borderTop: "1px solid #dddddd",
                borderBottom: "1px solid #dddddd",
                padding: "1rem",
                width: "100%",
                children: Object(w.jsx)("form", {
                  onSubmit: p,
                  style: {
                    width: "100%",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                  },
                  children: Object(w.jsxs)(u.a, {
                    display: "flex",
                    width: "100%",
                    maxHeight: "10rem",
                    children: [
                      Object(w.jsx)(u.a, {
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                        children: Object(w.jsx)(yt.a, {
                          fullWidth: !0,
                          multiline: !0,
                          rowsMax: 6,
                          value: o,
                          placeholder: "Type a message",
                          onChange: function (e) {
                            return i(e.target.value);
                          },
                          style: { fontSize: "1.5rem" },
                        }),
                      }),
                      Object(w.jsx)(u.a, {
                        display: "flex",
                        justifyContent: "flex-end",
                        children: Object(w.jsx)(d.a, {
                          type: "submit",
                          color: "primary",
                          disabled: !o || !o.match(/\S/g),
                          children: Object(w.jsx)(g.a, {
                            component: "span",
                            variant: "h5",
                            children: "SEND",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(w.jsx)(u.a, {
                width: "100%",
                children: Object(w.jsxs)(u.a, {
                  width: "100%",
                  padding: "1rem",
                  children: [
                    Object(w.jsx)(Ie.a, {
                      className: "btn-box-shadow",
                      children: Object(w.jsx)(wt.a, {
                        fontSize: "large",
                        color: "primary",
                      }),
                    }),
                    Object(w.jsx)(Ie.a, {
                      className: "btn-box-shadow",
                      children: Object(w.jsx)(_t.a, {
                        fontSize: "large",
                        style: { color: "#ffcc29" },
                      }),
                    }),
                    Object(w.jsx)(Ie.a, {
                      className: "btn-box-shadow",
                      children: Object(w.jsx)(kt.a, {
                        fontSize: "large",
                        color: "primary",
                      }),
                    }),
                    Object(w.jsx)(Ie.a, {
                      className: "btn-box-shadow",
                      children: Object(w.jsx)(Nt.a, {
                        fontSize: "large",
                        style: { color: "#2ec1ac" },
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var Tt = function (e) {
        var t = e.bgColor,
          n = e.color,
          a = e.text;
        return Object(w.jsx)(u.a, {
          style: {
            backgroundColor: "".concat(t),
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            minWidth: 0,
          },
          children: Object(w.jsx)(u.a, {
            textAlign: "center",
            children: Object(w.jsx)(g.a, {
              component: "p",
              variant: "h5",
              align: "left",
              style: { color: "".concat(n), overflowWrap: "break-word" },
              children: a,
            }),
          }),
        });
      };
      var At = function (e) {
          var t = e.match,
            n = e.history,
            r = Object(a.useState)(),
            c = Object(l.a)(r, 2),
            o = c[0],
            i = c[1],
            d = Object(a.useState)(!1),
            j = Object(l.a)(d, 2),
            b = j[0],
            p = j[1],
            h = t.params.id,
            m = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            f = Object(a.useState)([]),
            x = Object(l.a)(f, 2),
            g = x[0],
            v = x[1],
            y = {
              headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(m.token),
              },
            },
            S = (function () {
              var e = Object(L.a)(
                k.a.mark(function e(t) {
                  var n;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            C.a.put(
                              "/api/messages/good/update/".concat(t.id, "/"),
                              {},
                              y
                            )
                          );
                        case 2:
                          if (!e.sent) {
                            e.next = 8;
                            break;
                          }
                          return (
                            (e.next = 6),
                            C.a.get(
                              "/api/messages/".concat(m.id, "/").concat(h, "/"),
                              y
                            )
                          );
                        case 6:
                          (n = e.sent), v(n.data);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(
              Object(L.a)(
                k.a.mark(function e() {
                  var t, a;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (m) {
                            e.next = 4;
                            break;
                          }
                          n.push("/login"), (e.next = 10);
                          break;
                        case 4:
                          if (o) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.next = 7),
                            C.a.get("/api/users/cards/id/".concat(h, "/"), y)
                          );
                        case 7:
                          (t = e.sent), (a = t.data), i(a);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [n, m, o]
            ),
            Object(a.useEffect)(function () {
              p(!0);
              var e = !0;
              return (
                setInterval(
                  Object(L.a)(
                    k.a.mark(function t() {
                      var n;
                      return k.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!e) {
                                t.next = 8;
                                break;
                              }
                              return (
                                (t.next = 3),
                                C.a.get(
                                  "/api/messages/".concat(m.id, "/").concat(h),
                                  y
                                )
                              );
                            case 3:
                              return (
                                (n = t.sent),
                                v(n.data),
                                (t.next = 7),
                                C.a.put(
                                  "/api/messages/read/",
                                  {
                                    messages: JSON.stringify(n.data),
                                    fromUserId: m.id,
                                  },
                                  y
                                )
                              );
                            case 7:
                              p(!1);
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  ),
                  1e3
                ),
                function () {
                  return (e = !1);
                }
              );
            }, []),
            Object(w.jsx)(u.a, {
              children: b
                ? Object(w.jsx)(E, { style: { marginTop: "50vh" } })
                : Object(w.jsxs)(u.a, {
                    children: [
                      Object(w.jsx)(vt, { chatUserInfo: o && o }),
                      Object(w.jsxs)(O.a, {
                        container: !0,
                        direction: "column",
                        spacing: 1,
                        style: {
                          overflowY: "scroll",
                          maxHeight: "100vh",
                          padding: "9rem 1rem 20rem",
                          flexWrap: "nowrap",
                          zIndex: "-1",
                        },
                        className: "max-width",
                        children: [
                          g.length > 0 &&
                            g.map(function (e) {
                              return Object(w.jsx)(
                                O.a,
                                {
                                  item: !0,
                                  style: {
                                    position: "relative",
                                    width: "100%",
                                  },
                                  children:
                                    e.user_id == h
                                      ? Object(w.jsxs)(u.a, {
                                          display: "flex",
                                          justifyContent: "flex-start",
                                          mr: 5,
                                          children: [
                                            Object(w.jsx)(at.a, {
                                              src: o
                                                ? o.image
                                                : "unknown_ffqtxf",
                                              alt: "Profile Photo",
                                              style: {
                                                height: "3rem",
                                                width: "3rem",
                                                marginRight: "1rem",
                                              },
                                            }),
                                            Object(w.jsx)(Tt, {
                                              bgColor: "#dddddd",
                                              color: "#000",
                                              text: e.text,
                                            }),
                                            Object(w.jsx)(u.a, {
                                              position: "absolute",
                                              right: "1rem",
                                              top: "50%",
                                              style: {
                                                transform: "translateY(-50%)",
                                              },
                                              children: e.good
                                                ? Object(w.jsx)(Ve.a, {
                                                    onClick: function () {
                                                      return S(e);
                                                    },
                                                    style: { color: "#f50057" },
                                                  })
                                                : Object(w.jsx)(mt.a, {
                                                    onClick: function () {
                                                      return S(e);
                                                    },
                                                  }),
                                            }),
                                          ],
                                        })
                                      : Object(w.jsxs)(u.a, {
                                          display: "flex",
                                          justifyContent: "flex-end",
                                          ml: 5,
                                          children: [
                                            e.good &&
                                              Object(w.jsx)(Ve.a, {
                                                fontSize: "small",
                                                style: { color: "#f50057" },
                                              }),
                                            Object(w.jsx)(Tt, {
                                              bgColor: "#46b3e6",
                                              color: "#fff",
                                              text: e.text,
                                            }),
                                          ],
                                        }),
                                },
                                e.id
                              );
                            }),
                          0 === g.length &&
                            Object(w.jsx)(u.a, {
                              children: Object(w.jsx)(u.a, { height: "100vh" }),
                            }),
                          Object(w.jsx)(u.a, {
                            id: "latest_message",
                            visibility: "hidden",
                            children: "latest message",
                          }),
                        ],
                      }),
                      Object(w.jsx)(Ct, { chatUserId: h, setMessages: v }),
                    ],
                  }),
            })
          );
        },
        Ut = Object(he.a)(function (e) {
          return {
            paper: { marginTop: e.spacing(1) },
            done: { textAlign: "center", color: "#FF5864" },
          };
        });
      var Rt = function (e) {
        var t = e.title,
          n = e.backTo,
          a = Ut();
        return Object(w.jsxs)(v.a, {
          className: a.paper,
          children: [
            Object(w.jsx)(j.b, {}),
            Object(w.jsxs)(O.a, {
              container: !0,
              justify: "center",
              alignItems: "center",
              className: "max-width",
              children: [
                Object(w.jsx)(O.a, { item: !0, xs: 2 }),
                Object(w.jsx)(O.a, {
                  item: !0,
                  xs: 8,
                  children: Object(w.jsx)(g.a, {
                    component: "h1",
                    variant: "h4",
                    children: Object(w.jsx)(u.a, {
                      textAlign: "center",
                      children: t,
                    }),
                  }),
                }),
                Object(w.jsx)(O.a, {
                  item: !0,
                  xs: 2,
                  children: Object(w.jsx)(o.b, {
                    to: n,
                    children: Object(w.jsx)(g.a, {
                      component: "h2",
                      variant: "h5",
                      className: a.done,
                      children: "Done",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var Dt = function (e) {
        var t = e.person,
          n = e.className,
          r = me(),
          c = Object(a.useState)(!1),
          s = Object(l.a)(c, 2),
          o = s[0],
          i = s[1],
          d = t.birth_date ? _(t.birth_date) : "-";
        return Object(w.jsxs)(Ae.a, {
          className: n,
          children: [
            Object(w.jsx)(De.a, {
              image: t.image ? t.image : "unknown_ffqtxf",
              className: r.cardImage,
              title: "profile photo",
            }),
            Object(w.jsx)(Ue.a, {
              onClick: function () {
                o || i(!0);
              },
              href: "#self-introduction",
              children: Object(w.jsxs)(Re.a, {
                className: r.cardContent,
                children: [
                  Object(w.jsxs)(g.a, {
                    component: "h1",
                    variant: "h3",
                    gutterBottom: !0,
                    children: [
                      Object(w.jsx)("strong", { children: t.first_name }),
                      " ",
                      Object(w.jsx)(g.a, {
                        component: "span",
                        variant: "h4",
                        children: d,
                      }),
                    ],
                  }),
                  Object(w.jsxs)(O.a, {
                    container: !0,
                    alignItems: "center",
                    children: [
                      Object(w.jsx)(O.a, {
                        item: !0,
                        xs: 6,
                        children:
                          t.profession &&
                          Object(w.jsxs)(g.a, {
                            component: "h2",
                            variant: "h6",
                            gutterBottom: !0,
                            children: [
                              Object(w.jsx)("i", {
                                className: "fas fa-graduation-cap",
                              }),
                              " ",
                              t.profession,
                            ],
                          }),
                      }),
                      Object(w.jsx)(O.a, {
                        item: !0,
                        xs: 6,
                        children: Object(w.jsx)(u.a, {
                          component: "div",
                          textAlign: "right",
                          children: o
                            ? Object(w.jsx)(Ie.a, {
                                style: { backgroundColor: "#f50057" },
                                component: "span",
                                onClick: function (e) {
                                  return (function (e) {
                                    o && (i(!1), e.stopPropagation());
                                  })(e);
                                },
                                children: Object(w.jsx)(Ne.a, {
                                  style: { color: "#fff" },
                                  fontSize: "large",
                                }),
                              })
                            : Object(w.jsx)(Ie.a, {
                                component: "span",
                                children: Object(w.jsx)(Te.a, {
                                  fontSize: "large",
                                }),
                              }),
                        }),
                      }),
                    ],
                  }),
                  o &&
                    Object(w.jsx)(u.a, {
                      mt: 1,
                      children: Object(w.jsx)(g.a, {
                        id: "self-introduction",
                        component: "p",
                        variant: "h5",
                        color: "textSecondary",
                        className: r.cardDetail,
                        children: t.self_introduction,
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      };
      var Pt = function (e) {
          var t = e.history,
            n = e.match.params.id,
            r = Object(a.useState)(),
            c = Object(l.a)(r, 2),
            o = c[0],
            i = c[1],
            d = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            b = {
              headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(d.token),
              },
            };
          return (
            Object(a.useEffect)(
              Object(L.a)(
                k.a.mark(function e() {
                  var a, r;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (d) {
                            e.next = 4;
                            break;
                          }
                          t.push("/login"), (e.next = 9);
                          break;
                        case 4:
                          return (
                            (e.next = 6),
                            C.a.get("/api/users/cards/id/".concat(n, "/"), b)
                          );
                        case 6:
                          (a = e.sent), (r = a.data), i(r);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t, d]
            ),
            Object(w.jsxs)(v.a, {
              children: [
                Object(w.jsx)(j.b, {}),
                Object(w.jsx)(u.a, {
                  my: 1,
                  children: Object(w.jsx)(Rt, {
                    title: "PREVIEW",
                    backTo: "/messages/".concat(n),
                  }),
                }),
                Object(w.jsx)(Dt, {
                  person: o || { first_name: "No User" },
                  className: "card__preview",
                }),
              ],
            })
          );
        },
        Ft = n(122),
        Bt = n.n(Ft),
        Wt = n(123),
        zt = n.n(Wt),
        Mt = n(125),
        Ht = n.n(Mt),
        Gt = n(124),
        qt = n.n(Gt);
      var Yt = function (e) {
        var t = e.to,
          n = e.className,
          a = e.color,
          r = e.title,
          c = e.children;
        return Object(w.jsxs)(o.b, {
          to: t,
          children: [
            Object(w.jsx)(Ie.a, {
              className: n && n,
              color: a || "default",
              style: { boxShadow: "0 1px 4px 1px rgba(223, 224, 223, 0.7)" },
              children: c,
            }),
            Object(w.jsx)(g.a, {
              component: "span",
              variant: "button",
              display: "block",
              children: r,
            }),
          ],
        });
      };
      var Qt = function (e) {
        var t = e.history,
          n = Object(a.useState)(""),
          r = Object(l.a)(n, 2),
          c = r[0],
          i = r[1],
          d = Object(s.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          j = Object(s.c)(function (e) {
            return e.userDetails;
          }),
          b = j.loading,
          p = j.error,
          h = j.user,
          m = Object(s.b)(),
          f = Object(he.a)(function (e) {
            return {
              profilePhoto: {
                width: e.spacing(10),
                height: e.spacing(10),
                boxShadow: "0 1px 4px 1px rgba(223, 224, 223, 0.7)",
              },
            };
          })();
        return (
          Object(a.useEffect)(
            function () {
              d ? (h ? i(_(h.birth_date)) : m(be(d.id))) : t.push("/login");
            },
            [t, d, h]
          ),
          Object(w.jsxs)(u.a, {
            component: "div",
            children: [
              Object(w.jsx)(ke, { profile: !0 }),
              b
                ? Object(w.jsx)(E, {})
                : p
                ? Object(w.jsx)(y.a, { severity: "error", children: p })
                : h &&
                  Object(w.jsx)(ge.a, {
                    children: Object(w.jsxs)(v.a, {
                      maxWidth: "sm",
                      children: [
                        Object(w.jsxs)(u.a, {
                          component: "div",
                          textAlign: "center",
                          mt: 10,
                          mb: 5,
                          children: [
                            Object(w.jsx)(o.b, {
                              to: "/profile/preview",
                              children: Object(w.jsx)(Ie.a, {
                                children: Object(w.jsx)(at.a, {
                                  src: h.image,
                                  alt: "Profile Photo",
                                  className: f.profilePhoto,
                                }),
                              }),
                            }),
                            Object(w.jsxs)(g.a, {
                              component: "h1",
                              variant: "h4",
                              gutterBottom: !0,
                              children: [h.first_name, " ", c],
                            }),
                            Object(w.jsx)(g.a, {
                              component: "span",
                              variant: "h6",
                              children: h.profession,
                            }),
                          ],
                        }),
                        Object(w.jsx)(u.a, {
                          component: "div",
                          textAlign: "center",
                          children: Object(w.jsxs)(O.a, {
                            container: !0,
                            alignItems: "center",
                            children: [
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 4,
                                children: Object(w.jsx)(Yt, {
                                  to: "/settings",
                                  title: "SETTINGS",
                                  children: Object(w.jsx)(Bt.a, {
                                    fontSize: "large",
                                  }),
                                }),
                              }),
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 4,
                                children: Object(w.jsxs)(Yt, {
                                  to: "/profile/edit",
                                  className: "profile__camera-wrapper",
                                  color: "secondary",
                                  title: "ADD MEDIA",
                                  children: [
                                    Object(w.jsx)(zt.a, {
                                      fontSize: "large",
                                      style: { color: "#fff" },
                                    }),
                                    Object(w.jsx)(qt.a, {
                                      fontSize: "small",
                                      className: "profile__camera-add",
                                      style: {
                                        backgroundColor: "#fff",
                                        color: "#f50057",
                                        borderRadius: "50%",
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              Object(w.jsx)(O.a, {
                                item: !0,
                                xs: 4,
                                children: Object(w.jsx)(Yt, {
                                  to: "/profile/edit",
                                  title: "EDIT INFO",
                                  children: Object(w.jsx)(Ht.a, {
                                    fontSize: "large",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
            ],
          })
        );
      };
      var Jt = function (e) {
          var t = e.history,
            n = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            r = Object(s.c)(function (e) {
              return e.userDetails;
            }),
            c = r.loading,
            o = r.error,
            i = r.user,
            l = Object(s.b)();
          return (
            Object(a.useEffect)(
              function () {
                n ? i || l(be()) : t.push("/login");
              },
              [l, t, n, i]
            ),
            Object(w.jsxs)(v.a, {
              children: [
                Object(w.jsx)(j.b, {}),
                Object(w.jsx)(u.a, {
                  my: 1,
                  children: Object(w.jsx)(Rt, {
                    title: "PREVIEW",
                    backTo: "/profile",
                  }),
                }),
                c
                  ? Object(w.jsx)(E, {})
                  : o
                  ? Object(w.jsx)(y.a, { severity: "error", children: o })
                  : i &&
                    Object(w.jsx)(Dt, {
                      person: i,
                      className: "card__preview",
                    }),
              ],
            })
          );
        },
        Kt = n(66),
        Vt = n(228),
        Xt = n(215),
        Zt = n(217),
        $t = n(126),
        en = n.n($t);
      var tn = function () {
          var e = Object(a.useState)("unknown_ffqtxf"),
            t = Object(l.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)(),
            o = Object(l.a)(c, 2),
            i = o[0],
            d = o[1],
            j = Object(a.useState)(!1),
            b = Object(l.a)(j, 2),
            p = b[0],
            h = b[1],
            m = Object(s.b)(),
            f = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            x = Object(s.c)(function (e) {
              return e.userDetails;
            }).user,
            g = (function () {
              var e = Object(L.a)(
                k.a.mark(function e(t) {
                  var n, a, c, s, o;
                  return k.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              h(!0),
                              (n = t.target.files[0]),
                              (a = new FormData()).append("image", n),
                              a.append("user_id", f.id),
                              (e.prev = 5),
                              (c = {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                  Authorization: "Bearer ".concat(f.token),
                                },
                              }),
                              (e.next = 9),
                              C.a.post("/api/users/profile/image/upload/", a, c)
                            );
                          case 9:
                            (s = e.sent),
                              (o = s.data),
                              r(o.image),
                              h(!1),
                              m({ type: q, payload: o }),
                              (e.next = 20);
                            break;
                          case 16:
                            (e.prev = 16), (e.t0 = e.catch(5)), d(e.t0), h(!1);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 16]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(a.useEffect)(
              function () {
                r(x.image);
              },
              [x]
            ),
            Object(w.jsxs)(u.a, {
              children: [
                i && Object(w.jsx)(y.a, { severity: "error", children: i }),
                p
                  ? Object(w.jsx)(E, {})
                  : Object(w.jsx)(De.a, {
                      image: n || "unknown_ffqtxf",
                      title: "Profile Photo",
                      style: {
                        position: "relative",
                        height: "0",
                        paddingTop: "56.25%",
                        margin: "0 auto",
                      },
                      children: Object(w.jsx)(O.a, {
                        container: !0,
                        alignItems: "center",
                        justify: "flex-end",
                        style: {
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                        },
                        children: Object(w.jsx)(u.a, {
                          m: 2,
                          children: Object(w.jsxs)(Zt.a, {
                            htmlFor: "upload-image",
                            children: [
                              Object(w.jsx)(Xt.a, {
                                id: "upload-image",
                                type: "file",
                                name: "upload-image",
                                style: { display: "none" },
                                onChange: g,
                              }),
                              Object(w.jsx)(Ie.a, {
                                style: { backgroundColor: "#f50057" },
                                component: "span",
                                children: Object(w.jsx)(en.a, {
                                  style: { color: "#fff" },
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
              ],
            })
          );
        },
        nn = ["Male", "Female", "Others"],
        an = ["Male", "Female", "Others", "All"];
      var rn = function (e) {
        var t = e.history,
          n = me(),
          r = Object(a.useState)(""),
          c = Object(l.a)(r, 2),
          o = c[0],
          i = c[1],
          p = Object(a.useState)(""),
          h = Object(l.a)(p, 2),
          m = h[0],
          f = h[1],
          x = Object(a.useState)("Male"),
          O = Object(l.a)(x, 2),
          g = O[0],
          S = O[1],
          _ = Object(a.useState)("Male"),
          I = Object(l.a)(_, 2),
          N = I[0],
          T = I[1],
          A = Object(a.useState)("All"),
          U = Object(l.a)(A, 2),
          R = U[0],
          D = U[1],
          P = Object(a.useState)("All"),
          F = Object(l.a)(P, 2),
          B = F[0],
          W = F[1],
          z = Object(s.b)(),
          M = Object(s.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          H = Object(s.c)(function (e) {
            return e.userDetails;
          }),
          G = H.loading,
          q = H.error,
          Y = H.user,
          Q = Object(s.c)(function (e) {
            return e.userUpdateDetails;
          }).success;
        return (
          Object(a.useEffect)(
            function () {
              M
                ? Y
                  ? Q
                    ? (z({ type: te }), z(je()), z(be()), t.push("/profile"))
                    : (i(Y.profession ? Y.profession : ""),
                      f(Y.self_introduction ? Y.self_introduction : ""),
                      S(Y.gender_identity),
                      T(Y.gender_identity),
                      D(Y.sexual_preference),
                      W(Y.sexual_preference))
                  : z(be())
                : t.push("/login");
            },
            [z, t, M, Y, Q]
          ),
          Object(w.jsxs)("div", {
            children: [
              Object(w.jsx)(Rt, { title: "EDITINGS", backTo: "/profile" }),
              Object(w.jsx)(u.a, {
                mt: 1,
                children: Object(w.jsxs)(v.a, {
                  maxWidth: "xs",
                  children: [
                    Object(w.jsx)(j.b, {}),
                    G
                      ? Object(w.jsx)(E, {})
                      : q
                      ? Object(w.jsx)(y.a, { severity: "error", children: q })
                      : Y &&
                        Object(w.jsxs)(u.a, {
                          textAlign: "center",
                          maxHeight: "100vh",
                          pb: "5rem",
                          style: { overflowY: "scroll", flexWrap: "nowrap" },
                          children: [
                            Object(w.jsx)(tn, {}),
                            Object(w.jsxs)("form", {
                              onSubmit: function (e) {
                                e.preventDefault(),
                                  z(
                                    (function (e, t, n, a) {
                                      return (function () {
                                        var r = Object(L.a)(
                                          k.a.mark(function r(c, s) {
                                            var o, i, l, u, d;
                                            return k.a.wrap(
                                              function (r) {
                                                for (;;)
                                                  switch ((r.prev = r.next)) {
                                                    case 0:
                                                      return (
                                                        (r.prev = 0),
                                                        c({ type: Z }),
                                                        (o = s()),
                                                        (i =
                                                          o.userLogin.userInfo),
                                                        (l = {
                                                          headers: {
                                                            "content-type":
                                                              "application/json",
                                                            Authorization: "Bearer ".concat(
                                                              i.token
                                                            ),
                                                          },
                                                        }),
                                                        (r.next = 6),
                                                        C.a.put(
                                                          "/api/users/details/update/",
                                                          {
                                                            profession: e,
                                                            selfIntroduction: t,
                                                            genderIdentity: n,
                                                            sexualPreference: a,
                                                          },
                                                          l
                                                        )
                                                      );
                                                    case 6:
                                                      (u = r.sent),
                                                        (d = u.data),
                                                        c({
                                                          type: $,
                                                          payload: d,
                                                        }),
                                                        (r.next = 15);
                                                      break;
                                                    case 11:
                                                      (r.prev = 11),
                                                        (r.t0 = r.catch(0)),
                                                        console.log(r.t0),
                                                        c({
                                                          type: ee,
                                                          payload:
                                                            r.t0.response &&
                                                            r.t0.response.data
                                                              .detail
                                                              ? r.t0.response
                                                                  .data.detail
                                                              : r.t0.message,
                                                        });
                                                    case 15:
                                                    case "end":
                                                      return r.stop();
                                                  }
                                              },
                                              r,
                                              null,
                                              [[0, 11]]
                                            );
                                          })
                                        );
                                        return function (e, t) {
                                          return r.apply(this, arguments);
                                        };
                                      })();
                                    })(o, m, g, R)
                                  );
                              },
                              children: [
                                Object(w.jsx)(b.a, {
                                  label: "Profession",
                                  value: o,
                                  variant: "outlined",
                                  autoFocus: !0,
                                  fullWidth: !0,
                                  margin: "normal",
                                  multiline: !0,
                                  onChange: function (e) {
                                    return i(e.target.value);
                                  },
                                }),
                                Object(w.jsx)(b.a, {
                                  label: "Self Introduction",
                                  value: m,
                                  variant: "outlined",
                                  fullWidth: !0,
                                  margin: "normal",
                                  multiline: !0,
                                  onChange: function (e) {
                                    return f(e.target.value);
                                  },
                                }),
                                Object(w.jsx)(Vt.a, {
                                  fullWidth: !0,
                                  options: nn,
                                  value: g,
                                  onChange: function (e, t) {
                                    return S(t);
                                  },
                                  inputValue: N,
                                  onInputChange: function (e, t) {
                                    return T(t);
                                  },
                                  renderInput: function (e) {
                                    return Object(w.jsx)(
                                      b.a,
                                      Object(Kt.a)(
                                        Object(Kt.a)({}, e),
                                        {},
                                        {
                                          label: "Gender Identity",
                                          variant: "outlined",
                                          margin: "normal",
                                        }
                                      )
                                    );
                                  },
                                }),
                                Object(w.jsx)(Vt.a, {
                                  fullWidth: !0,
                                  options: an,
                                  value: R,
                                  onChange: function (e, t) {
                                    return D(t);
                                  },
                                  inputValue: B,
                                  onInputChange: function (e, t) {
                                    return W(t);
                                  },
                                  renderInput: function (e) {
                                    return Object(w.jsx)(
                                      b.a,
                                      Object(Kt.a)(
                                        Object(Kt.a)({}, e),
                                        {},
                                        {
                                          label: "Sexual Preference",
                                          variant: "outlined",
                                          margin: "normal",
                                        }
                                      )
                                    );
                                  },
                                }),
                                Object(w.jsx)(d.a, {
                                  type: "submit",
                                  fullWidth: !0,
                                  variant: "contained",
                                  color: "secondary",
                                  className: n.submit,
                                  children: "UPDATE",
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var cn = function (e) {
          var t = e.history,
            n = me(),
            r = Object(a.useState)(""),
            c = Object(l.a)(r, 2),
            o = c[0],
            i = c[1],
            u = Object(a.useState)(""),
            p = Object(l.a)(u, 2),
            h = p[0],
            m = p[1],
            f = Object(a.useState)(""),
            x = Object(l.a)(f, 2),
            O = x[0],
            S = x[1],
            E = Object(a.useState)(""),
            _ = Object(l.a)(E, 2),
            I = _[0],
            N = _[1],
            T = Object(a.useState)(""),
            A = Object(l.a)(T, 2),
            U = A[0],
            D = A[1],
            F = Object(s.b)(),
            W = Object(s.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            z = Object(s.c)(function (e) {
              return e.userUpdateProfile;
            }).success;
          return (
            Object(a.useEffect)(
              function () {
                W
                  ? z
                    ? (F({ type: X }), F(be()), t.push("/profile"))
                    : (i(W.first_name), m(W.email))
                  : t.push("/login");
              },
              [F, t, W, z]
            ),
            Object(w.jsxs)("div", {
              children: [
                Object(w.jsx)(Rt, { title: "SETTINGS", backTo: "/profile" }),
                Object(w.jsxs)(v.a, {
                  className: n.paper,
                  maxWidth: "xs",
                  children: [
                    Object(w.jsx)(j.b, {}),
                    U && Object(w.jsx)(y.a, { severity: "error", children: U }),
                    Object(w.jsx)(g.a, {
                      component: "h2",
                      variant: "h5",
                      align: "left",
                      display: "block",
                      style: { width: "100%", paddingLeft: "1rem" },
                      children: "ACCOUNT SETTINGS",
                    }),
                    Object(w.jsxs)("form", {
                      onSubmit: function (e) {
                        e.preventDefault(),
                          O === I
                            ? F(
                                (function (e, t, n) {
                                  return (function () {
                                    var a = Object(L.a)(
                                      k.a.mark(function a(r, c) {
                                        var s, o, i, l, u;
                                        return k.a.wrap(
                                          function (a) {
                                            for (;;)
                                              switch ((a.prev = a.next)) {
                                                case 0:
                                                  return (
                                                    (a.prev = 0),
                                                    r({ type: J }),
                                                    (s = c()),
                                                    (o = s.userLogin.userInfo),
                                                    (i = {
                                                      headers: {
                                                        "content-type":
                                                          "application/json",
                                                        Authorization: "Bearer ".concat(
                                                          o.token
                                                        ),
                                                      },
                                                    }),
                                                    (a.next = 6),
                                                    C.a.put(
                                                      "/api/users/profile/update/",
                                                      {
                                                        name: e,
                                                        email: t,
                                                        password: n,
                                                      },
                                                      i
                                                    )
                                                  );
                                                case 6:
                                                  (l = a.sent),
                                                    (u = l.data),
                                                    r({ type: K, payload: u }),
                                                    r({ type: P, payload: u }),
                                                    localStorage.setItem(
                                                      "userInfo",
                                                      JSON.stringify(u)
                                                    ),
                                                    (a.next = 17);
                                                  break;
                                                case 13:
                                                  (a.prev = 13),
                                                    (a.t0 = a.catch(0)),
                                                    console.log(a.t0),
                                                    r({
                                                      type: V,
                                                      payload:
                                                        a.t0.response &&
                                                        a.t0.response.data
                                                          .detail
                                                          ? a.t0.response.data
                                                              .detail
                                                          : a.t0.message,
                                                    });
                                                case 17:
                                                case "end":
                                                  return a.stop();
                                              }
                                          },
                                          a,
                                          null,
                                          [[0, 13]]
                                        );
                                      })
                                    );
                                    return function (e, t) {
                                      return a.apply(this, arguments);
                                    };
                                  })();
                                })(o, h, O)
                              )
                            : D("Passwords do not match");
                      },
                      className: n.settingsForm,
                      children: [
                        Object(w.jsx)(b.a, {
                          required: !0,
                          label: "First Name",
                          value: o,
                          variant: "outlined",
                          autoFocus: !0,
                          fullWidth: !0,
                          margin: "normal",
                          onChange: function (e) {
                            return i(e.target.value);
                          },
                        }),
                        Object(w.jsx)(b.a, {
                          required: !0,
                          type: "email",
                          label: "Email Address",
                          value: h,
                          variant: "outlined",
                          autoComplete: "email",
                          fullWidth: !0,
                          margin: "normal",
                          onChange: function (e) {
                            return m(e.target.value);
                          },
                        }),
                        Object(w.jsx)(b.a, {
                          required: !0,
                          type: "password",
                          label: "Password",
                          value: O,
                          variant: "outlined",
                          autoComplete: "current-password",
                          fullWidth: !0,
                          margin: "normal",
                          onChange: function (e) {
                            return S(e.target.value);
                          },
                        }),
                        Object(w.jsx)(b.a, {
                          required: !0,
                          type: "password",
                          label: "Confirm Password",
                          value: I,
                          variant: "outlined",
                          autoComplete: "current-password",
                          fullWidth: !0,
                          margin: "normal",
                          onChange: function (e) {
                            return N(e.target.value);
                          },
                        }),
                        Object(w.jsx)(d.a, {
                          type: "submit",
                          fullWidth: !0,
                          variant: "contained",
                          color: "secondary",
                          className: n.submit,
                          children: "Update",
                        }),
                        Object(w.jsx)(d.a, {
                          fullWidth: !0,
                          variant: "contained",
                          color: "primary",
                          className: n.submit,
                          onClick: function () {
                            return F(function (e) {
                              e({ type: B }),
                                e({ type: R }),
                                e({ type: Q }),
                                e({ type: ce }),
                                e({ type: le }),
                                e({ type: ue }),
                                localStorage.removeItem("userInfo");
                            });
                          },
                          children: "Logout",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        sn = function () {
          return Object(w.jsxs)(o.a, {
            children: [
              Object(w.jsx)(i.a, { exact: !0, path: "/", component: Oe }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/register",
                component: fe,
              }),
              Object(w.jsx)(i.a, { exact: !0, path: "/login", component: Oe }),
              Object(w.jsx)(i.a, { exact: !0, path: "/recs", component: et }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/gold-home",
                component: nt,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/matches",
                component: pt,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/messages/:id",
                component: At,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/messages/:id/profile",
                component: Pt,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/profile",
                component: Qt,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/profile/preview",
                component: Jt,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/profile/edit",
                component: rn,
              }),
              Object(w.jsx)(i.a, {
                exact: !0,
                path: "/settings",
                component: cn,
              }),
            ],
          });
        },
        on = n(52),
        ln = n(128),
        un = n(129),
        dn = Object(on.combineReducers)({
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case D:
                return { loading: !0 };
              case P:
                return { loading: !1, userInfo: t.payload };
              case F:
                return { loading: !1, error: t.payload };
              case B:
                return {};
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case W:
                return { loading: !0 };
              case z:
                return { loading: !1, userInfo: t.payload };
              case M:
                return { loading: !1, error: t.payload };
              case H:
                return {};
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case G:
                return { loading: !0 };
              case q:
                return { loading: !1, user: t.payload };
              case Y:
                return { loading: !1, error: t.payload };
              case Q:
                return {};
              default:
                return e;
            }
          },
          userUpdateDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Z:
                return { loading: !0 };
              case $:
                return { loading: !1, success: !0, userInfo: t.payload };
              case ee:
                return { loading: !1, error: t.payload };
              case te:
                return {};
              default:
                return e;
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case J:
                return { loading: !0 };
              case K:
                return { loading: !1, success: !0, userInfo: t.payload };
              case V:
                return { loading: !1, error: t.payload };
              case X:
                return {};
              default:
                return e;
            }
          },
          cardList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cards: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case T:
                return { loading: !0 };
              case A:
                return { loading: !1, cards: t.payload };
              case U:
                return { loading: !1, error: t.payload };
              case R:
                return { cards: [] };
              default:
                return e;
            }
          },
          newMatchesList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ne:
                return { loading: !0 };
              case ae:
                return { loading: !1, matches: t.payload };
              case re:
                return { loading: !1, error: t.payload };
              case ce:
                return {};
              default:
                return e;
            }
          },
          likesList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { likes: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case se:
                return { loading: !0 };
              case oe:
                return { loading: !1, likes: t.payload };
              case ie:
                return { loading: !1, error: t.payload };
              case le:
                return { likes: [] };
              default:
                return e;
            }
          },
          isBlocked: function () {
            var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ue:
                return !0;
              case de:
                return !1;
              default:
                return e;
            }
          },
        }),
        jn = {
          userLogin: {
            userInfo: localStorage.getItem("userInfo")
              ? JSON.parse(localStorage.getItem("userInfo"))
              : null,
          },
        },
        bn = [ln.a],
        pn = Object(on.createStore)(
          dn,
          jn,
          Object(un.composeWithDevTools)(on.applyMiddleware.apply(void 0, bn))
        );
      c.a.render(
        Object(w.jsx)(s.a, { store: pn, children: Object(w.jsx)(sn, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[174, 1, 2]],
]);
//# sourceMappingURL=main.99d7aecd.chunk.js.map
