(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    2022: (n, e, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(6405);
        },
      ]);
    },
    6405: (n, e, t) => {
      "use strict";
      t.r(e), t.d(e, { default: () => z });
      var a = t(4848),
        o = t(9669),
        r = t.n(o),
        i = t(6540);
      let s = () => {
          let n = (0, i.useRef)(null),
            [e, t] = (0, i.useState)(!0);
          return (
            (0, i.useEffect)(() => {
              let t = n.current;
              if (!t) return;
              let a = t.getContext("2d");
              if (!a) return;
              let o = window.innerWidth,
                r = window.innerHeight;
              (t.width = o), (t.height = r);
              let i = Math.floor(o / 16),
                s = Array(i).fill(1),
                l = "2069",
                c = "lime",
                d = "rgba(0, 255, 0, 0.8)",
                p = setInterval(() => {
                  if (
                    ((a.fillStyle = "rgba(0, 0, 0, 0.05)"),
                    a.fillRect(0, 0, o, r),
                    (a.font = "".concat(16, "px monospace")),
                    s.forEach((n, t) => {
                      let o = "";
                      if (e) {
                        o = l[Math.floor(Math.random() * l.length)];
                        let n = Math.floor(Math.random() * (i - 0));
                        t >= n && t < n + 0
                          ? ((o = ""[t - n]), (a.fillStyle = c))
                          : (a.fillStyle = d);
                      } else
                        (o = Math.random() > 0.5 ? "1" : "0"),
                          (a.fillStyle = d);
                      a.fillText(o, 16 * t, 16 * n),
                        16 * n > r && Math.random() > 0.975 && (s[t] = 0),
                        s[t]++;
                    }),
                    e)
                  ) {
                    let n = r / 2,
                      e = Math.floor((o - 0) / 2);
                    a.fillStyle = c;
                    for (let t = 0; t < 0; t++)
                      a.fillText(""[t], e + 16 * t, n);
                  }
                }, 100);
              return () => clearInterval(p);
            }, [e]),
            (0, a.jsx)("div", {
              children: (0, a.jsx)("canvas", {
                ref: n,
                style: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  width: "100vw",
                  height: "100%",
                  backgroundColor: "black",
                },
              }),
            })
          );
        },
        l = (n) => {
          let { text: e, speed: t = 100 } = n,
            o = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              if (!e || "" === e.trim()) return;
              let n = 0,
                a = o.current;
              if (!a) return;
              let r = () => {
                n < e.length &&
                  ((a.textContent = (a.textContent || "") + e[n]),
                  n++,
                  setTimeout(r, t));
              };
              return (
                r(),
                () => {
                  a && (a.textContent = "");
                }
              );
            }, [e, t]),
            (0, a.jsxs)("div", {
              style: { width: "100%" },
              children: [
                (0, a.jsx)("div", { className: "typing-text", ref: o }),
                (0, a.jsx)("style", {
                  children:
                    "\n				.typing-text {\n					color: #0f0;\n					font-family: monospace;\n					font-size: 20px;\n					white-space: pre-wrap;\n					background-color: rgba(0, 0, 0, 1);\n					border-radius: 20px;\n					min-height: 100px;\n					max-width: 80%;\n					width: 100%;\n					display: flex;\n					justify-content: center;\n					align-items: center;\n					padding: 20px;\n					margin: 50px auto 0;\n					border: 1px solid gray;\n				}\n				\n				@media (max-width: 768px) {\n					.typing-text {\n						font-size: 18px;\n						padding: 15px;\n						max-width: 95%;\n						width: 100%;\n						margin-top: 30px; /* Менший відступ для планшетів */\n					}\n				}\n				\n				@media (max-width: 480px) {\n					.typing-text {\n						font-size: 16px;\n						padding: 10px;\n						max-width: 95%;\n						width: 100%;\n						border-radius: 15px;\n						margin-top: 20px; /* Ще менший відступ для мобільних */\n					}\n				}\n			",
                }),
              ],
            })
          );
        },
        c = "https://stacyai.live/api",
        d = (n) => {
          let { command: e, value: t } = n,
            [o, r] = (0, i.useState)(!1),
            s = () => (1.5 * Math.random() + 0.5).toFixed(2) + "s";
          return (0, a.jsxs)("div", {
            className: "console-block",
            children: [
              (0, a.jsx)("div", { className: "console-line" }),
              (0, a.jsxs)("div", {
                className: "console-content",
                children: [
                  (0, a.jsx)("span", {
                    className: "console-command",
                    children: e,
                  }),
                  (0, a.jsx)("span", {
                    className: "console-separator",
                    children: ":",
                  }),
                  (0, a.jsxs)("div", {
                    className: "console-value",
                    onClick: () => {
                      navigator.clipboard &&
                        navigator.clipboard.writeText(t).then(() => {
                          r(!0),
                            setTimeout(() => {
                              r(!1);
                            }, 2e3);
                        });
                    },
                    children: [
                      t
                        .split("")
                        .map((n, e) =>
                          (0, a.jsx)(
                            "div",
                            {
                              style: {
                                animation: "falling 0.8s ease forwards "
                                  .concat(
                                    s(),
                                    ", glow 0.8s ease-in-out infinite "
                                  )
                                  .concat(s()),
                                opacity: 0,
                                display: "inline-block",
                              },
                              children: n,
                            },
                            e
                          )
                        ),
                      (0, a.jsx)(
                        "div",
                        {
                          style: {
                            animation: "falling 0.8s ease forwards "
                              .concat(s(), ", glow 0.8s ease-in-out infinite ")
                              .concat(s()),
                            opacity: 0,
                            display: "inline-block",
                          },
                          children: (0, a.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#39ff14",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            className:
                              "lucide lucide-copy text-green-400/80 svg",
                            children: [
                              (0, a.jsx)("rect", {
                                width: "14",
                                height: "14",
                                x: "8",
                                y: "8",
                                rx: "2",
                                ry: "2",
                              }),
                              (0, a.jsx)("path", {
                                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                              }),
                            ],
                          }),
                        },
                        "copy-icon"
                      ),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("button", {
                className: "console-button",
                onClick: () => {
                  window.open(
                    "https://dexscreener.com/solana/3uqaxgen4bdtbesvxprswa5v9whzj19opgphpissjjfz",
                    "_blank"
                  );
                },
                children: "Buy",
              }),
              o &&
                (0, a.jsx)("div", {
                  className: "copied-message",
                  children: "Copied!",
                }),
              (0, a.jsx)("style", {
                children:
                  "\n        .console-block {\n          background-color: black;\n          color: white;\n          font-family: 'Courier New', monospace;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          padding: 20px;\n          text-align: center;\n          position: relative;\n          overflow: hidden;\n          width: 80%;\n          margin: 40px auto;\n          border-radius: 20px;\n          box-sizing: border-box;\n        }\n        .console-line {\n          width: 100%;\n          height: 2px;\n          background-color: green;\n          margin: 10px 0;\n          animation: line 2s forwards;\n          box-shadow: 0 0 5px #39ff14, 5px 0 15px #39ff14;\n        }\n        .console-content {\n          font-size: 20px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          margin-top: 10px;\n          flex-direction: row; /* Default to row for larger screens */\n        }\n        .console-command {\n          color: cyan;\n          margin-right: 5px;\n          white-space: nowrap;\n        }\n        .console-separator {\n          color: red;\n          margin-right: 5px;\n        }\n        .console-value {\n          display: inline-block;\n          white-space: pre-wrap; /* Ensures long text wraps */\n          word-wrap: break-word; /* Allow text to break at the end of a line */\n          max-width: 100%; /* Ensures text does not overflow */\n          overflow-wrap: break-word; /* Allow word-breaking if necessary */\n          width: 100%; /* Ensure that the value container stretches */\n          word-break: break-all; /* Force break for very long words without spaces */\n          cursor: pointer; /* Indicates that the value is clickable */\n        }\n        .svg {\n        	margin-bottom: -7px;\n        	margin-left: 5px;\n        	height: 20px;\n        }\n        .console-button {\n          background-color: black;\n          color: #39ff14;\n          border: 2px solid #39ff14;\n          border-radius: 10px;\n          font-size: 20px;\n          font-family: 'Courier New', monospace;\n          font-weight: 700;\n          padding: 15px 30px;\n          width: 30%;\n          margin-top: 40px;\n          margin-bottom: 20px;\n          cursor: pointer;\n          text-transform: uppercase;\n          letter-spacing: 1px;\n          transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;\n          box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;\n        }\n        .console-button:hover {\n          background-color: #39ff14;\n          color: black;\n          box-shadow: 0 0 15px #39ff14, 0 0 30px #39ff14;\n          transform: scale(1.05);\n        }\n        @keyframes falling {\n          from {\n            transform: translateY(-200px);\n            opacity: 0;\n          }\n          to {\n            transform: translateY(0);\n            opacity: 1;\n          }\n        }\n        @keyframes glow {\n          0% {\n            text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 15px lime, 0 0 20px lime;\n          }\n          50% {\n            text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 15px lime, 0 0 25px lime;\n          }\n          100% {\n            text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 15px lime, 0 0 30px lime;\n          }\n        }\n        @keyframes line {\n          from {\n            width: 0;\n          }\n          to {\n            width: 100%;\n          }\n        }\n        /* Повідомлення \"Копійовано!\" */\n        .copied-message {\n          position: fixed; /* фіксоване розташування */\n          top: 0; /* Початок анімації з верхньої частини екрану */\n          left: 50%;\n          transform: translateX(-50%);\n          background-color: rgba(0, 255, 0, 0.8);\n          color: white;\n          font-size: 18px;\n          padding: 10px 20px;\n          border-radius: 10px;\n          animation: showMessage 2s forwards;\n        }\n\n        @keyframes showMessage {\n          0% {\n            opacity: 0;\n            transform: translateX(-50%) translateY(-50px); /* Починається з верхнього краю */\n          }\n          50% {\n            opacity: 1;\n            transform: translateX(-50%) translateY(0); /* Повільно з'являється в центрі */\n          }\n          100% {\n            opacity: 0;\n            transform: translateX(-50%) translateY(-50px); /* Поступово зникає і рухається вгору */\n          }\n        }\n\n        /* Адаптивність */\n        @media screen and (max-width: 768px) {\n          .console-block {\n            width: 90%;\n            padding: 15px;\n          }\n          \n          .console-value {\n          	margin-top: 10px;\n          }\n\n          .console-content {\n            font-size: 18px;\n            flex-direction: column; /* Stack command on top of value */\n          }\n\n          .console-button {\n            font-size: 18px;\n            padding: 12px 25px;\n            width: 40%;\n          }\n\n          /* Приховуємо separator в мобільних версіях */\n          .console-separator {\n            display: none;\n          }\n        }\n\n        @media screen and (max-width: 480px) {\n          .console-block {\n            width: 95%;\n            padding: 10px;\n          }\n\n          .console-content {\n            font-size: 16px;\n          }\n\n          .console-button {\n            font-size: 16px;\n            padding: 10px 20px;\n            width: 50%;\n          }\n\n          /* Приховуємо separator в мобільних версіях */\n          .console-separator {\n            display: none;\n          }\n        }\n      ",
              }),
            ],
          });
        },
        p = (n) => {
          let { questions: e } = n,
            [t, o] = (0, i.useState)(null),
            [r, s] = (0, i.useState)(null),
            [l, c] = (0, i.useState)([]),
            d = (n) => {
              t === n
                ? (o(null),
                  s(null),
                  c((e) => {
                    let t = [...e];
                    return (t[n] = ""), t;
                  }))
                : (o(n),
                  c((e) => {
                    let t = [...e];
                    return (t[n] = ""), t;
                  }),
                  setTimeout(() => s(n), 300));
            };
          return (
            (0, i.useEffect)(() => {
              var n;
              if (null === r) return;
              let t = null === (n = e[r]) || void 0 === n ? void 0 : n.answer;
              if (!t) return;
              let a = 0;
              c((n) => {
                let e = [...n];
                return (e[r] = t[0]), e;
              });
              let o = setInterval(() => {
                ++a < t.length
                  ? c((n) => {
                      let e = [...n];
                      return (e[r] = e[r] + t[a]), e;
                    })
                  : clearInterval(o);
              }, 40);
              return () => clearInterval(o);
            }, [r, e]),
            (0, a.jsxs)("div", {
              className: "faq-block",
              children: [
                e.map((n, e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: "faq-item ".concat(t === e ? "expanded" : ""),
                      onClick: () => d(e),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "faq-question",
                          children: [
                            n.question,
                            (0, a.jsx)("img", {
                              src: "images/faq-arrow.png",
                              alt: "arrow",
                              className: "faq-toggle-icon",
                            }),
                          ],
                        }),
                        t === e &&
                          (0, a.jsx)("div", {
                            className: "faq-answer",
                            children: l[e],
                          }),
                      ],
                    },
                    e
                  )
                ),
                (0, a.jsx)("style", {
                  children:
                    "\n        .faq-block {\n          background-color: black;\n          color: white;\n          font-family: 'Courier New', monospace;\n          padding: 20px;\n          margin: 100px auto;\n          box-sizing: border-box;\n          width: 80%;\n          border-radius: 20px;\n          border: 1px solid gray;\n        }\n        .faq-item {\n          background-color: rgba(255, 255, 255, 0.05);\n          padding: 15px;\n          border-radius: 8px;\n          margin-bottom: 15px;\n          cursor: pointer;\n          transition: all 0.3s ease;\n        }\n        .faq-item.expanded {\n          background-color: rgba(0, 255, 0, 0.1);\n          box-shadow: 0 0 10px lime;\n        }\n        .faq-question {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          font-size: 18px;\n          font-weight: bold;\n          color: lime;\n        }\n        .faq-toggle-icon {\n          width: 20px;\n          color: cyan;\n          transition: transform 0.3s ease;\n        }\n        .faq-item.expanded .faq-toggle-icon {\n          transform: rotate(45deg);\n        }\n        .faq-answer {\n          color: cyan;\n          margin-top: 10px;\n          white-space: pre-wrap; /* Allow line breaks in the answer */\n        }\n\n        @media screen and (max-width: 768px) {\n          .faq-block {\n            width: 90%;\n            padding: 15px;\n          }\n          .faq-question {\n            font-size: 16px;\n          }\n          .faq-toggle-icon {\n            font-size: 18px;\n          }\n        }\n        @media screen and (max-width: 480px) {\n          .faq-block {\n            width: 95%;\n            padding: 10px;\n          }\n          .faq-question {\n            font-size: 14px;\n          }\n          .faq-toggle-icon {\n            font-size: 16px;\n          }\n        }\n      ",
                }),
              ],
            })
          );
        };
      var x = t(4334),
        m = t.n(x);
      let g = () =>
        (0, a.jsxs)("div", {
          style: {
            backgroundColor: "black",
            color: "lime",
            fontFamily: "Courier New, monospace",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
            boxSizing: "border-box",
            width: "100%",
            height: "max-content",
          },
          children: [
            (0, a.jsx)("div", {
              className: m().textContainer,
              children: "Follow us on social media",
            }),
            (0, a.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                animation: "fadeInIcons 2s ease-out",
                margin: "0 auto",
              },
              children: [
                (0, a.jsx)("a", {
                  href: "https://x.com/Stacy2069AI",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 10px",
                    marginLeft: "5px",
                    fontSize: "1px",
                    textDecoration: "none",
                    transition:
                      "color 0.3s, transform 0.3s, text-decoration 0.3s",
                    transform: "translateY(20px)",
                    animation: "iconMove 1s forwards 1s",
                    height: "30px",
                    color: "white",
                  },
                  id: "twitter",
                  children: (0, a.jsx)("img", {
                    src: "images/x.jpg",
                    alt: "twitter",
                    style: { height: "100%", objectFit: "contain" },
                  }),
                }),
               /*  (0, a.jsx)("a", {
                  href: "https://t.me/stacy_ai_cto",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    textDecoration: "none",
                    transition:
                      "color 0.3s, transform 0.3s, text-decoration 0.3s",
                    transform: "translateY(20px)",
                    animation: "iconMove 1s forwards 1.2s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 10px",
                    marginLeft: "10px",
                    marginRight: "20px",
                    fontSize: "1px",
                    height: "40px",
                    color: "cyan",
                  },
                  id: "tg",
                  children: (0, a.jsx)("img", {
                    src: "images/telegram.jpg",
                    alt: "telegram",
                    style: { height: "100%", objectFit: "contain" },
                  }),
                }),
                (0, a.jsx)("a", {
                  href: "https://dexscreener.com/solana/3uqaxgen4bdtbesvxprswa5v9whzj19opgphpissjjfz",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    textDecoration: "none",
                    transition:
                      "color 0.3s, transform 0.3s, text-decoration 0.3s",
                    transform: "translateY(20px)",
                    animation: "iconMove 1s forwards 1.4s",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 10px",
                    marginLeft: "5px",
                    fontSize: "1px",
                    height: "40px",
                    color: "#fcc5fc",
                  },
                  id: "dexScrenner",
                  children: (0, a.jsx)("img", {
                    src: "images/dexScreener.jpg",
                    alt: "dexScreener",
                    style: { height: "100%", objectFit: "contain" },
                  }),
                }), */
              ],
            }),
            (0, a.jsx)("style", {
              children:
                "\n				/* Анімація на появу */\n				@keyframes typing {\n					from { width: 0; }\n					to { width: 100%; }\n				}\n				@keyframes slideIn {\n					from {\n						transform: translateY(20px);\n						opacity: 0;\n					}\n					to {\n						transform: translateY(0);\n						opacity: 1;\n					}\n				}\n				@keyframes fadeInIcons {\n					from {\n						opacity: 0;\n					}\n					to {\n						opacity: 1;\n					}\n				}\n				/* Анімація переміщення іконок */\n				@keyframes iconMove {\n					from {\n						transform: translateY(20px);\n						opacity: 0;\n					}\n					to {\n						transform: translateY(0);\n						opacity: 1;\n					}\n				}\n			",
            }),
          ],
        });
      var h = t(4335);
      let f = (n) => h.A.request(n),
        u = async (n) => {
          let { method: e, url: t, requestConfig: a } = n;
          try {
            let n = { method: e, url: t };
            return (n = { ...n, ...a }), await f(n);
          } catch (n) {
            throw n;
          }
        },
        w = {
          get: (n, e) => u({ method: "get", url: n, requestConfig: e }),
          post: (n, e) => u({ method: "post", url: n, requestConfig: e }),
        },
        y = async () => {
          let n = await w.post("".concat(c, "/ai-assistant/threads"));
          return null == n ? void 0 : n.data;
        },
        b = async (n) => {
          let e = localStorage.getItem("t_i"),
            t = await w.get(
              "".concat(c, "/ai-assistant/threads/").concat(e, "/messages"),
              { params: { ...n } }
            );
          return null == t ? void 0 : t.data;
        },
        v = () => {
          let [n, e] = (0, i.useState)({ messages: [], totalCount: 0 }),
            [t, o] = (0, i.useState)(""),
            [r, s] = (0, i.useState)(1),
            [l, d] = (0, i.useState)(!1),
            [p, x] = (0, i.useState)(!1),
            m = Math.ceil(n.totalCount / 20),
            g = r <= m,
            [h, f] = (0, i.useState)(!1);
          h || 1 !== m || f(!0);
          let u = (0, i.useRef)(null),
            w = (0, i.useRef)(0),
            v = {
              id: "initial",
              message:
                "Hi, I'm Stacy. I live in the year 2069. The world has changed a lot in the last decade. It's gotten very lonely here and I'd be happy to chat with you.",
              threadId: "system",
              createdAt: new Date().toISOString(),
              author: "ai",
            };
          (0, i.useEffect)(() => {
            (async () => {
              localStorage.getItem("t_i")
                ? e(await b({ page: r, pageSize: 20 }))
                : setTimeout(() => {
                    j(v.message, "ai");
                  }, 500);
            })();
          }, []);
          let j = async (n, t) => {
            let a = "",
              o = "".concat(Date.now());
            for (let r of (e((n) => ({
              ...n,
              messages: [
                ...(null == n ? void 0 : n.messages),
                {
                  id: o,
                  message: "",
                  threadId: "system",
                  createdAt: new Date().toISOString(),
                  author: t,
                },
              ],
            })),
            n))
              (a += r),
                await new Promise((n) => setTimeout(n, 50)),
                e((n) => {
                  var e;
                  return {
                    ...n,
                    messages:
                      null == n
                        ? void 0
                        : null === (e = n.messages) || void 0 === e
                        ? void 0
                        : e.map((n) => (n.id === o ? { ...n, message: a } : n)),
                  };
                });
          };
          (0, i.useEffect)(() => {
            (async () => {
              if ((!g && r > 1 && f(!0), !l && g)) {
                if ((d(!0), localStorage.getItem("t_i"))) {
                  u.current && (w.current = u.current.scrollHeight);
                  let n = await b({ page: r, pageSize: 20 });
                  e((e) => ({
                    ...e,
                    messages: [
                      ...n.messages,
                      ...(null == e ? void 0 : e.messages),
                    ],
                  }));
                }
                d(!1);
              }
            })();
          }, [r]),
            (0, i.useEffect)(() => {
              if (u.current && r > 1) {
                let n = u.current.scrollHeight;
                u.current.scrollTop = n - w.current;
              }
            }, [n.messages]),
            (0, i.useEffect)(() => {
              u.current &&
                m > r &&
                1 === r &&
                (u.current.scrollTop = u.current.scrollHeight);
            }, [n]);
          let k = async () => {
            let n = localStorage.getItem("t_i");
            if (t.trim())
              try {
                if ((x(!0), !n)) {
                  let { id: e } = await y();
                  localStorage.setItem("t_i", e), (n = e);
                }
                o(""),
                  e((e) => ({
                    ...e,
                    messages: [
                      ...(null == e ? void 0 : e.messages),
                      {
                        id: "".concat(Date.now()),
                        message: t,
                        threadId: n,
                        createdAt: new Date().toISOString(),
                        author: "user",
                      },
                    ],
                  }));
                let a = await fetch(
                  "".concat(c, "/ai-assistant/threads/").concat(n, "/messages"),
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: t }),
                  }
                );
                if (!a.ok) {
                  console.error("Response error:", a.statusText);
                  return;
                }
                let r = a.body.getReader(),
                  i = new TextDecoder("utf-8"),
                  s = "",
                  l = () => {
                    u.current && (u.current.scrollTop = u.current.scrollHeight);
                  };
                for (
                  e((e) => ({
                    ...e,
                    messages: [
                      ...(null == e ? void 0 : e.messages),
                      {
                        id: "".concat(Date.now() + 1),
                        message: "",
                        threadId: n,
                        createdAt: new Date().toISOString(),
                        author: "ai",
                      },
                    ],
                  }));
                  ;

                ) {
                  let { value: n, done: t } = await r.read();
                  if (t) break;
                  for (let t of i
                    .decode(n, { stream: !0 })
                    .replace(/data:\s?/g, "")
                    .replace(/\n/g, ""))
                    (s += t),
                      await new Promise((n) => setTimeout(n, 50)),
                      e((n) => {
                        let e = [...(null == n ? void 0 : n.messages)];
                        return (
                          (e[e.length - 1] = {
                            ...e[e.length - 1],
                            message: s,
                          }),
                          { ...n, messages: e }
                        );
                      }),
                      l();
                }
              } catch (n) {
                console.error("Error:", n);
              } finally {
                x(!1);
              }
          };
          return (0, a.jsxs)("div", {
            className: "chat-container",
            children: [
              (0, a.jsxs)("div", {
                className: "messages-container",
                ref: u,
                onScroll: () => {
                  u.current &&
                    0 === u.current.scrollTop &&
                    g &&
                    s((n) => n + 1);
                },
                children: [
                  l &&
                    (0, a.jsx)("div", {
                      className: "loading",
                      children: "Loading...",
                    }),
                  h &&
                    (0, a.jsx)(
                      "div",
                      {
                        className: "message ai",
                        children: (0, a.jsx)("span", {
                          children:
                            "Hi, I'm Stacy. I live in the year 2069. The world has changed a lot in the last decade. It's gotten very lonely here and I'd be happy to chat with you.",
                        }),
                      },
                      "initial-message"
                    ),
                  n.messages.map((n, e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "message ".concat(
                          "user" === n.author ? "user" : "ai"
                        ),
                        children: (0, a.jsx)("span", { children: n.message }),
                      },
                      e.toString()
                    )
                  ),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "input-container",
                children: [
                  (0, a.jsx)("textarea", {
                    value: t,
                    onChange: (n) => o(n.target.value.slice(0, 150)),
                    onKeyDown: (n) => {
                      "Enter" !== n.key ||
                        n.shiftKey ||
                        (n.preventDefault(), k());
                    },
                    placeholder: "Type your message...",
                  }),
                  (0, a.jsx)("button", {
                    onClick: k,
                    disabled: p,
                    children: p ? "Sending..." : "Send",
                  }),
                  (0, a.jsxs)("div", {
                    className: "counter",
                    children: [t.length, "/", 150],
                  }),
                ],
              }),
              (0, a.jsx)("style", {
                children:
                  "\n        .chat-container {\n					background-color: black;\n					color: white;\n					font-family: 'Courier New', monospace;\n					display: flex;\n					flex-direction: column;\n					padding: 20px;\n					width: 80%;\n					margin: 40px auto;\n					border-radius: 20px;\n					border: 1px solid gray;\n					box-sizing: border-box;\n				}\n\n				.messages-container {\n					background-color: rgba(255, 255, 255, 0.05);\n					padding: 20px;\n					border-radius: 10px;\n					margin-bottom: 10px;\n					flex-grow: 1;\n					overflow-y: auto;\n					max-height: 600px;\n					min-height: 300px;\n				}\n\n				.messages-container::-webkit-scrollbar {\n					width: 5px;\n				}\n				.messages-container::-webkit-scrollbar-thumb {\n					background: lime;\n					border-radius: 6px;\n				}\n				.messages-container::-webkit-scrollbar-thumb:hover {\n					background: #32cd32;\n				}\n\n        .message {\n          margin: 10px 0;\n        }\n\n        .message.user {\n          text-align: right;\n          color: lime;\n        }\n\n        .message.ai {\n          text-align: left;\n          color: cyan;\n        }\n\n        .input-container {\n          display: flex;\n          flex-direction: column;\n          align-items: stretch;\n        }\n\n        .input-container textarea {\n          background-color: black;\n          color: lime;\n          border: 1px solid lime;\n          border-radius: 5px;\n          padding: 10px;\n          font-size: 16px;\n          font-family: 'Courier New', monospace;\n          resize: none;\n          min-height: 100px;\n          margin-bottom: 10px;\n        }\n\n        .input-container button {\n          background-color: green;\n          color: white;\n          border: none;\n          padding: 10px;\n          border-radius: 5px;\n          cursor: pointer;\n          font-size: 16px;\n        }\n\n        .input-container button:disabled {\n          background-color: #2c3e50;\n          color: #7f8c8d;\n          cursor: not-allowed;\n        }\n\n        .counter {\n          font-size: 14px;\n          color: lime;\n          margin-top: 5px;\n        }\n\n        @media (max-width: 768px) {\n          .chat-container {\n            width: 90%;\n            padding: 15px;\n          }\n\n          .messages-container {\n            max-height: 250px;\n            padding: 15px;\n          }\n\n          .input-container textarea {\n            font-size: 14px;\n          }\n\n          .input-container button {\n            font-size: 14px;\n            padding: 8px;\n          }\n        }\n\n        @media (max-width: 480px) {\n          .chat-container {\n            width: 95%;\n            padding: 10px;\n          }\n\n          .messages-container {\n            max-height: 200px;\n            padding: 10px;\n          }\n\n          .input-container textarea {\n            font-size: 12px;\n            min-height: 80px;\n          }\n\n          .input-container button {\n            font-size: 12px;\n            padding: 6px;\n          }\n\n          .counter {\n            font-size: 12px;\n          }\n        }\n      ",
              }),
            ],
          });
        };
      var j = t(9262),
        k = t.n(j);
      let S = () =>
          (0, a.jsx)("div", {
            className: k().videoContainer,
            children: (0, a.jsx)("img", {
              src: "./images/stacy.gif",
              alt: "Stacy animation",
              className: k().videoLoop,
            }),
          }),
        _ = () => {
          let n = Array.from({ length: 8 }, (n, e) =>
            "images/".concat(e + 1, ".jpg")
          );
          return (0, a.jsx)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "10px",
              padding: "10px",
              width: "100%",
            },
            children: n.map((n, e) =>
              (0, a.jsx)(
                "img",
                {
                  src: n,
                  alt: "Image ".concat(e + 1),
                  style: {
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                },
                e
              )
            ),
          });
        },
        N = [
          {
            question: "Who is Stacy 2069?",
            answer:
              "A new generation of artificial intelligence technology from the year 2069, living a human-like life online and ready to have a pleasant chat with you.",
          },
          {
            question: "Why do we choose Stacy?",
            answer:
              "Because she’s more than just a token—she’s a movement, a vision, and a bridge to the digital future. You’re choosing to be part of something bigger: a story that rewrites the rules of what cryptocurrency can achieve.",
          },
          {
            question: "Who are Stacy's creators?",
            answer:
              "Only one author is known—a person born in 2005, who has lived through most of Earth's cataclysms. Rumor has it that he is the son of Satoshi Nakamoto.",
          },
        ];
      function z() {
        return (0, a.jsxs)("div", {
          className: r().page,
          children: [
            (0, a.jsx)(s, {}),
            (0, a.jsx)(l, {
              text: "In the distant year 2069, during an era of advanced technology, when artificial intelligence has become an integral part of human life, a young AI woman named Stacy exists. She is 25 years old and is considered one of the most prominent experts in the field of cryptocurrencies. Her talent lies in mastering the technical aspects of blockchain and excelling in investment strategies.",
              speed: 20,
            }),
            (0, a.jsx)(S, {}),
            (0, a.jsx)(v, {}),
            (0, a.jsx)(_, {}),
            (0, a.jsx)(p, { questions: N }),
            (0, a.jsx)(g, {}),
          ],
        });
      }
    },
    4334: (n) => {
      n.exports = {
        textContainer: "Footer_textContainer__zbfTW",
        typing: "Footer_typing__Bt_Bx",
        slideIn: "Footer_slideIn__xoDlE",
      };
    },
    9262: (n) => {
      n.exports = {
        videoContainer: "StacyBlock_videoContainer__rsDJx",
        videoLoop: "StacyBlock_videoLoop__ndyMM",
      };
    },
    9669: (n) => {
      n.exports = { page: "home_page__GlON6" };
    },
  },
  (n) => {
    var e = (e) => n((n.s = e));
    n.O(0, [335, 636, 593, 792], () => e(2022)), (_N_E = n.O());
  },
]);
