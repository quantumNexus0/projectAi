var j = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty,
  T = Object.prototype.propertyIsEnumerable;
var p = (l, r, a) =>
    r in l
      ? j(l, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (l[r] = a),
  d = (l, r) => {
    for (var a in r || (r = {})) v.call(r, a) && p(l, a, r[a]);
    if (m) for (var a of m(r)) T.call(r, a) && p(l, a, r[a]);
    return l;
  };
import { j as t } from "./index-DlOqfcZ1.js";
import { T as w } from "./tailwind-page-B-3NcKFe.js";
import { T as k, t as C } from "./Header-X14z1RYr.js";
import { S as N, T as $, F as E } from "./TemplateCategories-BNwkRB5f.js";
import { B as L } from "./Breadcrumb-AWs1owVg.js";
import {
  T as x,
  s as P,
  C as S,
  a as A,
  g as B,
  b as D,
} from "./TemplateCardsRow-D2R5BSsr.js";
import { D as R } from "./Disclaimers-DcZ3g5jw.js";
import { a as I } from "./cx-lNe0FDi1.js";
import "./FeatureFlagProvider-BooHyywt.js";
import { u as F, L as g } from "./components-CVntVR-p.js";
import { E as he } from "./(website).business.business-operations.lz-virtual-mail-prepare-offer-CSbX9N1j.js";
import "./Footer-CHbJ_jos.js";
import "./index.esm-hwGxxp9Z.js";
import "./use-hydrated-BNRMqBT5.js";
import "./useTealiumTracking-qN4dWJhK.js";
import "./env-9DNInbPl.js";
import "./set-product-details-Cp8Dl5lh.js";
import "./preload-helper-CzpWA6Lo.js";
import "./merge-CnhzW7Ry.js";
import "./identity-C5ZgJBfx.js";
import "./chunk-G4PTP2XI-D8ii0GKl.js";
import "./chunk-QYI3DYLK-BJcoYNoM.js";
import "./clsx-CH7BE6MN.js";
import "./throttle-BoZChKly.js";
import "./Modal-BqGgxzW4.js";
import "./classNames-ApZULTIs.js";
import "./ModalWithTrigger-C5aRoOcN.js";
const de = ({ data: l }) => (l == null ? void 0 : l.meta) || [];
function xe() {
  const l = F(),
    {
      category: r,
      subCategory: a,
      selectedCatSubCatObject: n,
      categories: u,
      templatesByCategory: i,
      pageHeading: h,
      pageDescription: b,
    } = l,
    c = {
      list: [
        { text: "Home", href: "/" },
        { text: "Templates", href: "/templates" },
        {
          text: i.category.label,
          href: `/templates/${i.category.category_name}`,
        },
      ],
    };
  a && c.list.push({ text: n.label, href: "" });
  const f = (e, s) => {
      var o;
      (o = window.analytics) == null ||
        o.track("Template thumbnail clicked", {
          template_clicked: e.title,
          file_path: window.location.pathname,
          category: s.parent_category_name
            ? s.parent_category_name
            : s.category_name,
          name: "Template thumbnail clicked",
          subcategory: (s == null ? void 0 : s.label) || "",
          screen: "Template subcategory",
        });
    },
    y = (e) => {
      C({ ga: { action: "click", category: "forms_launch_point", label: e } });
    },
    _ = (e) => {
      var s;
      (s = window.analytics) == null ||
        s.track("Category clicked", {
          template_clicked: "",
          url: window.location.pathname,
          category: e.parent_category_name
            ? e.parent_category_name
            : e.category_name,
          name: "Category clicked",
          subcategory: e.parent_category_name ? e.category_name : "",
          screen: "Templates category",
        });
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsxs(w, {
        theme: k.NEGRONI,
        head: { phoneNumber: "8556920800" },
        children: [
          t.jsxs("div", {
            className:
              "md:pl-2 md:pr-4 py-5 flex flex-col md:flex-row gap-y-4 justify-between",
            children: [
              t.jsx(L, d({}, c)),
              t.jsx("div", {
                className: "px-5",
                children: t.jsx(N, { placeholder: "Search templates" }),
              }),
            ],
          }),
          t.jsxs("div", {
            className: "px-5",
            children: [
              t.jsxs("div", {
                className:
                  "flex flex-col px-12 py-10 bg-neutral-50 gap-y-2 rounded-lg",
                children: [
                  t.jsx("h1", {
                    className: "text-2xl font-semibold leading-10",
                    "data-test": "TemplateCategory-heading",
                    children: h,
                  }),
                  t.jsx("div", {
                    "data-test": "TemplateCategory-description",
                    children: b,
                  }),
                ],
              }),
              t.jsxs("div", {
                className: I("flex flex-col md:flex-row gap-x-16 mt-10 mb-5"),
                children: [
                  t.jsxs("div", {
                    className:
                      "mr-15 mb-8 md:mb-0 flex md:flex-col gap-y-1 w-full overflow-x-auto md:w-auto md:min-w-[208px]",
                    children: [
                      r &&
                        t.jsx(
                          g,
                          {
                            className: "w-full",
                            to: `/${x}/${r}`,
                            children: t.jsx("div", {
                              className: ` subCat w-max md:w-auto flex transition-all duration-300 rounded-md p-4 md:p-2 text-base font-normal text-big-stone hover:bg-neutral-50 hover:text-black cursor-pointer active:bg-neutral-50 active:text-black active:font-semibold ${
                                a ? "" : "bg-neutral-50"
                              }`,
                              children: "All Templates",
                            }),
                          },
                          "all_categories"
                        ),
                      P(i.sub_categories).map((e) =>
                        t.jsx(
                          g,
                          {
                            reloadDocument: !0,
                            to: `/${x}/${r}/${e.category_name}`,
                            children: t.jsx("div", {
                              onClick: () => _(e),
                              className: `subCat w-max md:w-auto flex transition-all duration-300 rounded-md p-4 md:p-2 text-base font-normal text-big-stone hover:bg-neutral-50 hover:text-black cursor-pointer active:bg-neutral-50 active:text-black active:font-semibold ${
                                a === e.category_name ? "bg-neutral-50" : ""
                              }`,
                              "data-test": "template-subcategory-item",
                              children: e.label,
                            }),
                          },
                          e == null ? void 0 : e.category_name
                        )
                      ),
                    ],
                  }),
                  t.jsx("div", {
                    children: t.jsx("div", {
                      className:
                        "grid grid-cols-[repeat(2,1fr)] md:flex md:flex-wrap gap-x-3 gap-y-4 md:gap-6",
                      children: (i.templatesWithLaunchPoints || []).map(
                        (e, s) => {
                          if ("kind" in e) {
                            const o = `templates_${
                              a ? `subcategory_${a}` : `category_${r}`
                            }_${e.service}_banner`;
                            return t.jsx(
                              "div",
                              {
                                className: "col-span-2",
                                children: t.jsx(S, {
                                  launchPoint: e,
                                  dataTest: "launchPoint",
                                  label: o,
                                  clickLaunchPoint: () => y(o),
                                }),
                              },
                              e.service
                            );
                          } else
                            return t.jsx(
                              "div",
                              {
                                "data-test": "template-list-item",
                                children: t.jsx(A, {
                                  id: e.id,
                                  cardIndex: s,
                                  urlHash: B(e),
                                  "data-test": "templatecategory",
                                  imageSrc: e.thumbnail,
                                  title: e.title,
                                  description: e.description,
                                  clickAction: () => f(e, n),
                                }),
                              },
                              e.id
                            );
                        }
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
          t.jsx($, { headingText: "Browse other categories", categories: u }),
          t.jsx(E, {}),
        ],
      }),
      t.jsx(R, { disclaimers: D }),
    ],
  });
}
export { he as ErrorBoundary, xe as default, de as meta };
