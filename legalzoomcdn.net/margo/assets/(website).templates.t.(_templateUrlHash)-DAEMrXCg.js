var O = Object.defineProperty,
  M = Object.defineProperties;
var R = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var U = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable;
var D = (a, t, s) =>
    t in a
      ? O(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[t] = s),
  d = (a, t) => {
    for (var s in t || (t = {})) U.call(t, s) && D(a, s, t[s]);
    if (v) for (var s of v(t)) q.call(t, s) && D(a, s, t[s]);
    return a;
  },
  N = (a, t) => M(a, R(t));
import { r as m, j as e } from "./index-DlOqfcZ1.js";
import { c as b } from "./env-9DNInbPl.js";
import { T as F } from "./tailwind-page-B-3NcKFe.js";
import { D as H } from "./Disclaimers-DcZ3g5jw.js";
import { T as G, b as h, t as T, L as B } from "./Header-X14z1RYr.js";
import "./FeatureFlagProvider-BooHyywt.js";
import { d as W, b as z } from "./TemplateCardsRow-D2R5BSsr.js";
import { J as V } from "./blocks-exports-DCT9Mmil.js";
import { a as Y, B as $, b as X, L as K } from "./chunk-G4PTP2XI-D8ii0GKl.js";
import {
  A as J,
  E as j,
  a as Q,
  b as Z,
  F as ee,
  I as te,
  S as ae,
  L as se,
} from "./chunk-QYI3DYLK-BJcoYNoM.js";
import { C as u } from "./(website).business.business-operations.lz-virtual-mail-prepare-offer-CSbX9N1j.js";
import { E as Fe } from "./(website).business.business-operations.lz-virtual-mail-prepare-offer-CSbX9N1j.js";
import { F as re } from "./FeaturedTemplates-DwjtM-o4.js";
import { M as ie } from "./Modal-BqGgxzW4.js";
import { u as le } from "./components-CVntVR-p.js";
import { h as Ge } from "./chat-config-9NDVMFgT.js";
import "./Footer-CHbJ_jos.js";
import "./index.esm-hwGxxp9Z.js";
import "./use-hydrated-BNRMqBT5.js";
import "./cx-lNe0FDi1.js";
import "./useTealiumTracking-qN4dWJhK.js";
import "./set-product-details-Cp8Dl5lh.js";
import "./ModalWithTrigger-C5aRoOcN.js";
import "./preload-helper-CzpWA6Lo.js";
import "./throttle-BoZChKly.js";
import "./clsx-CH7BE6MN.js";
import "./classNames-ApZULTIs.js";
const S = {
    Interstitials: "offer page",
    AccountNav: "account_nav",
    AccountHome: "account_home",
    AccountOrder: "account_order",
    BusinessToolkit: "business_toolkit_mylz",
    Login: "login page",
    ChangePassword: "change password",
    BusinessEmailDefault: "business_email_default",
    BusinessEmailEntitled: "business_email_entitled",
    BusinessEmailPending: "business_email_pending",
    BusinessEmailCompleted: "business_email_completed",
    BusinessEmailDismissed: "business_email_dismissed",
    InsuranceNextDefault: "insurance_next_default",
    InsuranceNextEntitled: "insurance_next_entitled",
    InsuranceNextCompleted: "insurance_next_completed",
    LicensePermitDefault: "license_permit_default",
    LicensePermitEntitled: "license_permit_entitled",
    LicensePermitComplete: "license_permit_completed",
    LicensePermitEntitledLegacy: "license_permit_entitled_legacy",
    BankingBOADefault: "bank_of_america_default",
    BankingBOAEntitled: "bank_of_america_entitled",
    BankingBOACompleted: "bank_of_america_completed",
    BankingChaseDefault: "banking_chase_default",
    BankingChaseEntitled: "banking_chase_entitled",
    BankingChaseCompleted: "banking_chase_completed",
    WebsiteDefault: "website_default",
    WebsiteEntitled: "website_entitled",
    WebsiteCompleted: "website_completed",
    PosToastDefault: "pos_toast_default",
    PosToastEntitled: "pos_toast_entitled",
    PosToastCompleted: "pos_toast_completed",
    PosSquareDefault: "pos_square_default",
    PosSquareEntitled: "pos_square_entitled",
    PosSquareCompleted: "pos_square_completed",
    TemplateStore: "templates_store",
    DocumentViewer: "document_viewer",
    FormEsignPurchase: "form_esign_purchase",
    Test: "test",
    TestAlt: "test alt",
  },
  A = {
    MyloOfferStarted: "offer_1_start",
    MyloOfferPostponed: "offer_1_close",
    MyloOfferDeclined: "offer_1_no_thanks",
    BrexOfferStarted: "offer_2_start",
    BrexOfferPostponed: "offer_2_close",
    BrexOfferDeclined: "offer_2_no_thanks",
    NavProfile: "account_nav_profile",
    NavResources: "account_nav_resources",
    NavSignOut: "account_nav_sign_out",
    NavContactUs: "account_nav_contact_us",
    BusinessToolkitNav: "business_toolkit_click",
    BusinessToolkitViewServices: "business_toolkit_view_services",
    BusinessToolkitWixLearnMore: "business_toolkit_wix_learnmore",
    BusinessToolkitToastLearnMore: "business_toolkit_toast_learnmore",
    BusinessToolkitBOALearnMore: "business_toolkit_boa_learnmore",
    BusinessToolkitMyloLearnMore: "business_toolkit_mylo_learnmore",
    BusinessToolkitNEXTLearnMore: "business_toolkit_next_learnmore",
    BusinessToolkitSquareLearnMore: "business_toolkit_square_learnmore",
    BusinessToolkitGoogleLearnMore: "business_toolkit_google_learnmore",
    BusinessToolkitLegalLearnMore: "business_toolkit_legal_forms_learnmore",
    BusinessToolkitTrademarkLearnMore: "business_toolkit_trademark_learnmore",
    BusinessToolkitEPLearnMore: "business_toolkit_ep_learnmore",
    BusinessToolkitChaseForBusinessLearnMore:
      "business_toolkit_chase_for_business_learnmore",
    InsuranceNextDefault: "insurance_next_default",
    InsuranceNextEntitled: "insurance_next_entitled",
    InsuranceNextCompleted: "insurance_next_completed",
    InsuranceNextPrimaryDefault: "insurance_next_drawer_default_cta_click",
    InsuranceNextSecondaryDefault:
      "insurance_next_drawer_default_do_it_myself_click",
    InsuranceNextSecondaryAltDefault:
      "insurance_next_drawer_default_learn_more_click",
    InsuranceNextPrimaryEntitled: "insurance_next_drawer_entitled_cta_click",
    InsuranceNextPrimaryCompleted:
      "insurance_next_drawer_completed_cta_account_create_click",
    InsuranceNextSecondaryCompleted:
      "insurance_next_drawer_completed_cta_more_time_click",
    INSURANCE_NEXT_CATEGORY_PAGE_DEFAULT:
      "insurance_next_category_page_default",
    INSURANCE_NEXT_CATEGORY_PAGE_ENTITLED:
      "insurance_next_category_page_entitled",
    INSURANCE_NEXT_CATEGORY_PAGE_COMPLETED:
      "insurance_next_category_page_completed",
    INSURANCE_NEXT_CATEGORY_PAGE_DEFAULT_CTA_CLICK:
      "insurance_next_category_page_default_cta_click",
    INSURANCE_NEXT_CATEGORY_PAGE_ENTITLED_CTA_CLICK:
      "insurance_next_category_page_entitiled_cta_click",
    AuthSignIn: "auth_signin",
    AuthSignUp: "auth_signup",
    AuthCreateAnAccount: "auth_create_account",
    AuthForgotPasswordConfirm: "auth_forgot_password_confirm",
    AuthReturnToForgetPassword: "click try again to return to forgot password",
    AuthForgotPassword: "auth_forgot_password",
    AuthSendPasswordReset: "auth_send_password_reset",
    AuthChangePassword: "auth_change_password",
    AuthChangePasswordSuccess: "auth_change_password_success",
    MfaAddEnrollment: "add_enrollment",
    MfaEnterCode: "enter_code",
    MfaResend: "resend_code",
    MfaIdentityVerification: "identity_verification",
    MfaIdentityVerificationSuccess: "identity_verification_success",
    MfaIdentityVerificationFailed: "identity_verification_failed",
    MfaGetHelp: "identity_verification_get_help",
    MfaAgentWillReachOut: "identity_verification_agent_will_reach_out",
    Test: "test",
    TestAlt: "test alt",
    BusinessEmailCategoryPageDefault: "business_email_category_page_default",
    BusinessEmailCategoryPageEntitled: "business_email_category_page_entitled",
    BusinessEmailCategoryPageCompleted:
      "business_email_category_page_completed",
    BusinessEmailSeatsModalDefault: "business_email_seats_modal_default",
    BusinessEmailRyoModalDefault: "business_email_ryo_modal_default",
    BusinessEmailCategoryPageDefaultGetStartedClick:
      "business_email_category_page_default_get_started_click",
    BusinessEmailCategoryPageDefaultBusinessStarterClick:
      "business_email_category_page_default_business_starter_click",
    BusinessEmailCategoryPageDefaultBusinessStandardClick:
      "business_email_category_page_default_business_standard_click",
    BusinessEmailSeatsModalDefaultCtaClick:
      "business_email_seats_modal_default_cta_click",
    BusinessEmailRyoModalDefaultCtaClick:
      "business_email_ryo_modal_default_cta_click",
    BusinessEmailRyoModalDefaultBackClick:
      "business_email_ryo_modal_default_back_click",
    BusinessEmailCategoryPageEntitledCtaClick:
      "business_email_category_page_entitled_cta_click",
    BusinessEmailCategoryPageEntitledLearningCenterClick:
      "business_email_category_page_entitled_learning_center_click",
    BusinessEmailCategoryPageEntitledCustomerCareClick:
      "business_email_category_page_entitled_customer_care_click",
    BusinessEmailCategoryPageEntitledManageSubscriptionClick:
      "business_email_category_page_entitled_manage_subscription_click",
    BusinessEmailCategoryPageCompletedCtaClick:
      "business_email_category_page_completed_cta_click",
    BusinessEmailCategoryPageCompletedLearningCenterClick:
      "business_email_category_page_completed_learning_center_click",
    BusinessEmailCategoryPageCompletedCustomerCareClick:
      "business_email_category_page_completed_customer_care_click",
    BusinessEmailCategoryPageCompletedManageSubscriptionClick:
      "business_email_category_page_completed_manage_subscription_click",
    LicensePermitDrawerDefault: "license_permit_drawer_default",
    LicensePermitDrawerEntitled: "license_permit_drawer_entitled",
    LicensePermitDrawerCompleted: "license_permit_drawer_completed",
    LicensePermitDrawerEntitledLegacy: "license_permit_drawer_entitled_legacy",
    LicensePermitDrawerDefaultCtaClick:
      "license_permit_drawer_default_cta_click",
    LicensePermitDrawerDefaultDoItMyselfClick:
      "license_permit_drawer_default_do_it_myself_click",
    LicensePermitDrawerEntitledCtaClick:
      "license_permit_drawer_entitled_cta_click",
    LicensePermitDrawerCompletedCtaAccountCreateClick:
      "license_permit_drawer_completed_cta_account_create_click",
    LicensePermitDrawerCompletedCtaMoreTimeClick:
      "license_permit_drawer_completed_cta_more_time_click",
    HomeOrdersPaidStart: "account_orders_paid_start",
    HomeOrdersNeedsAction: "account_orders_needs_action",
    HomeOrdersPaidResume: "account_orders_paid_resume",
    HomeOrdersUnpaidResume: "account_orders_unpaid_resume",
    HomeOrdersUnpaidRemove: "account_orders_unpaid_remove",
    HomeOrdersUnpaidRemoveConfirm: "account_orders_unpaid_remove_confirm",
    HomeOrdersUnpaidRemoveDismiss: "account_orders_unpaid_remove_dismiss",
    HomeOrdersView: "account_orders_view",
    HomeOrdersViewDocs: "account_orders_view_docs",
    HomeOrdersUpdatePayment: "account_orders_update_payment",
    HomeOrdersActivate: "account_orders_activate",
    HomeOrdersAdviceTax: "account_orders_advice_tax",
    HomeOrdersAdviceLegal: "account_orders_advice_legal",
    HomeOrdersViewMore: "account_orders_view_more",
    SeeOrderProgress: "account_order_full_details",
    HomeOrderReceipt: "account_order_slider_receipt",
    ContactUs: "account_order_slider_contact",
    Docs: "account_order_slider_documents",
    EnterDetails: "account_order_slider_fix",
    TrackPackage: "account_order_slider_track_package",
    UpdatePayment: "account_order_slider_update_payment",
    OrdersDeleteCart: "orders_delete_cart",
    EmailDrawerDefault: "business_email_drawer_default",
    EmailPrimaryDefault: "business_email_drawer_default_cta_click",
    EmailSecondaryDefault: "business_email_drawer_default_do_it_myself_click",
    EmailDrawerEntitled: "business_email_drawer_entitled",
    EmailPrimaryEntitled: "business_email_drawer_entitled_cta_click",
    EmailSecondaryEntitled:
      "business_email_drawer_entitled_ill_this_later_click",
    EmailDrawerPending: "business_email_drawer_pending",
    EmailPrimaryPending: "business_email_drawer_pending_cta_click",
    EmailDrawerCompleted: "business_email_drawer_completed",
    EmailPrimaryCompleted: "business_email_drawer_completed_cta_click",
    EmailSecondaryCompleted:
      "business_email_drawer_completed_cta_more_time_click",
    EmailAccessEmailCompleted:
      "business_email_drawer_completed_access_email_click",
    EmailMakeChangesCompleted:
      "business_email_drawer_completed_make_changes_click",
    EmailDrawerDismissed: "business_email_drawer_dismissed",
    EmailPrimaryDismissed: "business_email_drawer_dismissed_cta_click",
    EmailPurchaseDismissed: "business_email_drawer_dismissed_purchase_click",
    BankOfAmericaDrawerDefault: "bank_of_america_drawer_default",
    BankOfAmericaDrawerEntitled: "bank_of_america_drawer_entitled",
    BankOfAmericaDrawerCompleted: "bank_of_america_drawer_completed",
    BankOfAmericaPrimaryDefault: "bank_of_america_drawer_default_cta_click",
    BankOfAmericaSecondaryDefault:
      "bank_of_america_drawer_default_do_it_myself_click",
    BankOfAmericaPrimaryEntitled: "bank_of_america_drawer_entitled_cta_click",
    BankOfAmericaPrimaryCompleted:
      "bank_of_america_drawer_completed_cta_account_create_click",
    BankOfAmericaSecondaryCompleted:
      "bank_of_america_drawer_completed_cta_more_time_click",
    ChaseDrawerDefault: "chase_drawer_default",
    ChaseDrawerEntitled: "chase_drawer_entitled",
    ChaseDrawerCompleted: "chase_drawer_completed",
    ChasePrimaryDefault: "chase_drawer_default_cta_click",
    ChaseSecondaryDefault: "chase_drawer_default_do_it_myself_click",
    ChasePrimaryEntitled: "banking_chase_drawer_entitled_cta_click",
    ChasePrimaryCompleted: "chase_drawer_completed_cta_account_create_click",
    ChaseSecondaryCompleted: "chase_drawer_completed_cta_more_time_click",
    WebsiteDrawerDefault: "website_drawer_default",
    WebsiteDrawerEntitled: "website_drawer_entitled",
    WebsiteDrawerCompleted: "website_drawer_completed",
    WebsitePrimaryDefault: "website_drawer_default_cta_click",
    WebsiteSecondaryDefault: "website_drawer_default_do_it_myself_click",
    WebsitePrimaryEntitled: "website_drawer_entitled_cta_click",
    WebsitePrimaryCompleted: "website_drawer_completed_cta_click",
    WebsiteSecondaryCompleted: "website_drawer_completed_cta_account_create",
    PosSquareDrawerDefault: "pos_square_drawer_default",
    PosSquareDrawerEntitled: "pos_square_drawer_entitled",
    PosSquareDrawerCompleted: "pos_square_drawer_completed",
    PosSquarePrimaryDefault: "pos_square_drawer_default_cta_click",
    PosSquareSecondaryDefault: "pos_square_drawer_default_do_it_myself_click",
    PosSquarePrimaryEntitled: "pos_square_drawer_entitled_cta_click",
    PosSquareSecondaryEntitled: "pos_square_drawer_entitled_do_it_myself_click",
    PosSquarePrimaryCompleted:
      "pos_square_drawer_completed_cta_account_create_click",
    PosSquareSecondaryCompleted:
      "pos_square_drawer_completed_cta_more_time_click",
    PosToastDrawerDefault: "pos_toast_drawer_default",
    PosToastDrawerEntitled: "pos_toast_drawer_entitled",
    PosToastDrawerCompleted: "pos_toast_drawer_completed",
    PosToastPrimaryDefault: "pos_toast_drawer_default_cta_click",
    PosToastSecondaryDefault: "pos_toast_drawer_default_do_it_myself_click",
    PosToastPrimaryEntitled: "pos_toast_drawer_entitled_cta_click",
    PosToastSecondaryEntitled: "pos_toast_drawer_entitled_do_it_myself_click",
    PosToastPrimaryCompleted:
      "pos_toast_drawer_completed_cta_account_create_click",
    PosToastSecondaryCompleted:
      "pos_toast_drawer_completed_cta_more_time_click",
    StartTempQflow: "start_temp_qflow",
    DownloadDoc: "download_doc",
    sendEsign: "send_esign",
    sentEsign: "sent_esign",
    EditDoc: "edit_doc",
    LegalHelpFromDoc: "legal_help_from_doc",
    FePaynowClicked: "fe_paynow_clicked",
    PreviewBannerRedirect: "redirect_from_banner_cta",
  },
  ne =
    "https://legalzoomcdn.net/margo/assets/preview-banner-illustration-BGRz0fZb.svg",
  Me = ({ data: a }) => (a == null ? void 0 : a.meta) || [],
  ce = (a) => {
    const { BASE_URL: t } = b,
      s = new URL(`${t}/legalforms/form-fill`);
    return s.searchParams.set("form", a), s.toString();
  },
  oe = (a) => {
    const { BASE_URL: t } = b;
    return new URL(`${t}/forms-builder/${a}`).toString();
  };
function _e({ templatePreviewMetaData: a, redirectToForm: t, createRef: s }) {
  const {
      attorney_drafted: p,
      meta_data: f,
      show_banner: x,
      banner_details: i,
    } = a,
    { page_title: c, page_description: o } = f,
    g = () => {
      T({
        ga: {
          label: A.PreviewBannerRedirect,
          category: S.TemplateStore,
          action: B.Click,
        },
      });
    };
  return e.jsxs("div", {
    className:
      "sticky top-4 w-full max-w-[468px] lg:max-w-full xl:w-[468px] mb-10 self-start",
    children: [
      e.jsxs("div", {
        className:
          "p-6 border border-neutral-200 shadow-level-3 md:rounded-xl bg-white",
        children: [
          e.jsx("div", {
            className: "flex gap-[5px] flex-wrap",
            children:
              p &&
              e.jsx(X, {
                className: "bg-green-600 text-white",
                icon: Z,
                label: "ATTORNEY-DRAFTED",
                size: "large",
              }),
          }),
          e.jsx("h1", {
            className: "text-3xl font-semibold leading-10 py-4",
            "data-test": "template-title",
            children: c,
          }),
          e.jsx("div", {
            className: "text-neutral-700",
            "data-test": "template-description",
            children: o,
          }),
          e.jsx("div", {
            ref: s,
            className: "py-4",
            children: e.jsx(
              u,
              d(
                {
                  className: "!w-full",
                  as: "button",
                  onClick: t,
                  text: "Create document",
                },
                h({
                  "data-tracking-overrides": {
                    page_section: "Main CTA Section",
                  },
                })
              )
            ),
          }),
          e.jsx("div", {
            className: "text-neutral-800 pb-4",
            children:
              "Start creating at $59/document or $99/year for unlimited documents",
          }),
          e.jsx("div", {
            className: "pt-1",
            children: e.jsxs("div", {
              className: "flex flex-col gap-2 pb-2",
              children: [
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-[28px] h-[28px] rounded-full bg-[#FEEFEA] flex justify-center items-center",
                      children: e.jsx(ee, {
                        className: "w-4 h-4 text-neutral-700",
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "ml-3 text-neutral-700 text-sm tracking-tigghter",
                      children:
                        "Fill your responses and complete your document",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-[28px] h-[28px] rounded-full bg-[#E2F4FC] flex justify-center items-center",
                      children: e.jsx(te, {
                        className: "w-4 h-4 text-neutral-700",
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "ml-3 text-neutral-700 text-sm tracking-tigghter",
                      children: "Personalize with a rich editor",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-[28px] h-[28px] rounded-full bg-[#D7F1E7] flex justify-center items-center",
                      children: e.jsx(ae, {
                        className: "w-4 h-4 text-neutral-700",
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "ml-3 text-neutral-700 text-sm tracking-tigghter",
                      children: "eSign document easily and securely",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      x &&
        i &&
        e.jsxs("div", {
          className:
            "mx-2 mt-3 md:mx-0 px-6 py-4 border rounded-xl bg-anti-flash-white relative border-neutral-300 shadow-level-1",
          children: [
            e.jsx("div", {
              className: "text-base xl:text-[21px] font-semibold leading-6",
              children: i.text,
            }),
            e.jsxs(
              K,
              N(
                d(
                  {
                    href: i.redirect_link,
                    className: "pt-6 flex xl:text-base",
                    target: "_blank",
                    textDecoration: "underline",
                  },
                  h({
                    "data-tracking-overrides": {
                      page_section: "Banner Section",
                    },
                  })
                ),
                {
                  onPress: g,
                  children: [
                    i.redirect_link_text,
                    e.jsx(se, {
                      className: "h-4 w-4 xl:w-5 xl:h-5 m-[2px] ml-3 leading-6",
                    }),
                  ],
                }
              )
            ),
            e.jsx("img", {
              loading: "lazy",
              src: ne,
              alt: "Preview Banner",
              className: "absolute right-0 bottom-0 w-[150px]",
            }),
          ],
        }),
    ],
  });
}
function Re() {
  const [a, t] = m.useState(!1),
    [s, p] = m.useState(!1),
    f = le(),
    x = () => {
      T({
        ga: {
          label: A.StartTempQflow,
          category: S.TemplateStore,
          action: B.Click,
        },
      });
    },
    {
      formUUID: i,
      templatePreviewMetaData: c,
      templatePreviewHtml: o,
      seoLongDescription: g,
    } = f,
    {
      sub_category_tags: k,
      category: C,
      related_templates: L,
      meta_data: I,
    } = c,
    _ = m.useRef(null);
  m.useEffect(() => {
    const l = () => {
      var P;
      const r =
          (P = _ == null ? void 0 : _.current) == null
            ? void 0
            : P.getBoundingClientRect(),
        n = r ? r.bottom : window.innerHeight;
      p(n < 0);
    };
    return (
      window.addEventListener("scroll", l),
      () => window.removeEventListener("scroll", l)
    );
  }, []);
  const w = () => {
      x();
      const { template_src: l, template_url_hash: r } = c;
      if (r && l === "New-LZ") {
        const n = oe(r);
        window.location.href = n;
      } else if (i && i.length > 0) {
        const n = ce(i[0].uuid);
        window.location.href = n;
      }
    },
    y = C && k ? k : [],
    E = W(L);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(F, {
        theme: G.NEGRONI,
        head: { phoneNumber: "8556920800" },
        children: e.jsxs("div", {
          id: "template-wrapper",
          children: [
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsxs("div", {
                  className:
                    "flex py-3 md:py-5 lg:py-7 px-2 sm375:px-4 md:px-6 lg:px-10 xl:px-[75px] bg-brand-25 revv-breadcrumb-item",
                  children: [
                    e.jsxs("a", {
                      href: "/templates",
                      className: "flex flex-row text-base gap-x-2 items-center",
                      children: [
                        e.jsx(J, { className: "w-4 h-4 text-neutral-700" }),
                        e.jsx("span", {
                          className: "text-sm text-neutral-700",
                          children: "Browse templates",
                        }),
                      ],
                    }),
                    e.jsx(u, {
                      as: "button",
                      className: "lg:hidden ml-auto !py-1 !px-3 !border",
                      onClick: () => t(!0),
                      text: "Preview",
                      variant: "secondary",
                      children: e.jsxs("div", {
                        className: "flex gap-2 items-center",
                        children: [
                          e.jsx("span", { children: "Preview" }),
                          e.jsx(j, { className: "w-4 h-4" }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex justify-center",
                  children: e.jsx("div", {
                    className: "flex flex-col w-full",
                    children: e.jsxs("div", {
                      className:
                        "flex w-full lg:px-10 xl:px-[75px] justify-center relative",
                      children: [
                        e.jsx("div", {
                          className:
                            "bg-brand-25 absolute lg:h-[940px] w-full z-[-1]",
                        }),
                        e.jsxs("div", {
                          className:
                            "flex-col-reverse flex lg:flex-row w-[1290px] max-w-[100%] justify-center items",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex flex-col flex-shrink-1 w-[100%] lg:w-[70%] lg:max-w-[800px] items-center",
                              children: [
                                e.jsx("div", {
                                  className: "hidden lg:flex w-full",
                                  children: e.jsx("div", {
                                    className: "mb-10 w-full",
                                    dangerouslySetInnerHTML: { __html: o },
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "prose mt-6 px-6 md:px-12 lg:px-0 max-w-[800px]",
                                  children: e.jsx(V, {
                                    model: "template-seo-long-description",
                                    apiKey: b.PUBLIC_BUILDER_KEY,
                                    content: g.page,
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "flex w-full bg-brand-25 justify-center flex-shrink-0 ml-auto lg:w-[30%] lg:ml-5 lg:bg-transparent xl:w-[468px]",
                              children: e.jsx(_e, {
                                templatePreviewMetaData: c,
                                redirectToForm: w,
                                createRef: _,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex flex-col w-full px-2 md:px-6 lg:px-10 xl:px-[75px] bg-brand-25 justify-center pb-20 ",
              children: [
                y.length > 0 &&
                  e.jsxs("div", {
                    className: "px-4 md:px-16 pt-12",
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-[#080f19] font-inter text-[28px] font-bold leading-1 mb-0 mt-0",
                        children: "Related categories",
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap mt-4",
                        children: y.map((l) => {
                          const r = l.value,
                            n = `/templates/${C}/${r}`;
                          return e.jsxs(
                            "a",
                            {
                              href: n,
                              className:
                                "flex items-center mr-2 mt-2 bg-white py-3 px-4 rounded-lg",
                              children: [
                                l.name,
                                e.jsx(Y, {
                                  variant: "secondary",
                                  icon: Q,
                                  className: "text-black ml-3",
                                  value: r,
                                }),
                              ],
                            },
                            r
                          );
                        }),
                      }),
                    ],
                  }),
                E.length > 0 &&
                  e.jsx(re, {
                    headingText: "Related templates",
                    templatesWithLaunchPoints: E,
                  }),
              ],
            }),
            s &&
              e.jsx("div", {
                className:
                  "fixed lg:hidden bottom-[-1px] w-full z-10 transition duration-1000 ease-out",
                children: e.jsxs("div", {
                  className:
                    "flex justify-center absolute bottom-0 w-full bg-white left-0 right-0 py-2 pl-8 pr-12 shadow-[0px_-3px_16px_0px_#25242442]",
                  children: [
                    e.jsx("div", {
                      className: "flex gap-2 items-center w-1/4 justify-center",
                      children: e.jsx($, {
                        level: "tertiary",
                        size: "large",
                        theme: "default",
                        type: "button",
                        onPress: () => t(!0),
                        children: e.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            e.jsx(j, { className: "w-4 h-4 text-brand" }),
                            e.jsx("span", {
                              className: "px-2",
                              children: "Preview",
                            }),
                          ],
                        }),
                      }),
                    }),
                    e.jsx(
                      u,
                      d(
                        {
                          as: "button",
                          className: "!w-3/4 ml-3 max-w-[320px]",
                          onClick: w,
                          text: "Create document",
                        },
                        h({
                          "data-tracking-overrides": {
                            page_section: "Main CTA Section",
                          },
                        })
                      )
                    ),
                  ],
                }),
              }),
          ],
        }),
      }),
      e.jsx(ie, {
        open: a,
        setOpen: t,
        closeIconClass: "h-6 w-6 text-brand",
        closeButtonClass:
          "absolute border-brand border rounded shadow-level-3 w-9 h-9 bg-white z-10",
        contentClass: "p-5 pb-[100px] md:px-12",
        containerClass: "h-[100%] w-[100%] py-0 md:h-auto lg:w-[1024px]",
        panelClass: "bg-white overflow-y-auto h-full w-full rounded",
        title: I.page_title,
        titleClassName: "pb-6 text-xl font-semibold mr-20",
        children: e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className: "flex justify-center mb-25",
              dangerouslySetInnerHTML: { __html: o },
            }),
            e.jsx("div", {
              className:
                "absolute bottom-0 w-full bg-white left-0 right-0 py-4 px-5 shadow-[0px_-3px_16px_0px_#25242442] text-center z-10",
              children: e.jsx(u, {
                as: "button",
                className: "!w-full max-w-[320px]",
                onClick: w,
                text: "Create document",
              }),
            }),
          ],
        }),
      }),
      e.jsx(H, { disclaimers: z }),
    ],
  });
}
export { Fe as ErrorBoundary, Re as default, Ge as handle, Me as meta };
