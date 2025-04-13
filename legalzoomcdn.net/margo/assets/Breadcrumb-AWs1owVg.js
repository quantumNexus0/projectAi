var ae = Object.defineProperty,
  te = Object.defineProperties;
var _e = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var ne = Object.prototype.hasOwnProperty,
  oe = Object.prototype.propertyIsEnumerable;
var F = (t, o, r) =>
    o in t
      ? ae(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[o] = r),
  e = (t, o) => {
    for (var r in o || (o = {})) ne.call(o, r) && F(t, r, o[r]);
    if (R) for (var r of R(o)) oe.call(o, r) && F(t, r, o[r]);
    return t;
  },
  a = (t, o) => te(t, _e(o));
import { j as f } from "./index-DlOqfcZ1.js";
import { L as _, s as re, C as se } from "./Header-X14z1RYr.js";
import "./FeatureFlagProvider-BooHyywt.js";
import { c as G } from "./cx-lNe0FDi1.js";
const N = { category: "trademark_search_page", label: "", action: _.Click },
  ie = { getStarted: { ga: a(e({}, N), { label: "get_started_button" }) } },
  le = {
    getLegalHelp: {
      ga: a(e({}, N), { label: "questions_get_legal_help_button" }),
    },
  },
  ce = {
    annualPricingReport: { ga: a(e({}, N), { label: "dba_pricing_package" }) },
  },
  ge = { cta: ie, packages: ce, questions: le },
  L = { category: "lzred_AMENDMENT_pricing", label: "", action: _.Click },
  pe = {
    learnMore: {
      ga: a(e({}, L), { label: "amendment_pricing_refund_satisfaction_link" }),
    },
  },
  be = {
    standard: {
      ga: a(e({}, L), { label: "amendment_pricing_standard_package" }),
    },
    rush: { ga: a(e({}, L), { label: "amendment_pricing_rush_package" }) },
  },
  ue = {
    getLegalHelp: {
      ga: a(e({}, L), { label: "amendment_pricing_attorney_get_legal_help" }),
    },
  },
  de = { guarantee: pe, packages: be, questions: ue },
  A = { category: "lzred_dissolution_pricing", label: "", action: _.Click },
  ke = {
    learnMore: {
      ga: a(e({}, A), {
        label: "dissolution_pricing_refund_satisfaction_link",
      }),
    },
  },
  fe = {
    standard: {
      ga: a(e({}, A), { label: "dissolution_pricing_standard_package" }),
    },
    rush: { ga: a(e({}, A), { label: "dissolution_pricing_rush_package" }) },
  },
  me = {
    getLegalHelp: {
      ga: a(e({}, A), { label: "dissolution_pricing_attorney_get_legal_help" }),
    },
  },
  ye = { guarantee: ke, packages: fe, questions: me },
  he = {
    hero: {},
    package12: {},
    package6: {},
    howToStart: {},
    waysToHelp: {},
    businessAdvisory: {},
  },
  ve = { viewAttorneys: {} },
  $e = { exploreLegalPlans: {} },
  ze = { stateSelect: he, viewAttorneys: ve, questions: $e },
  l = { category: "biz_lic_overview_page", label: "", action: _.Click },
  we = {
    finalGetStarted: {
      ga: a(e({}, l), {
        category: "beneficial_ownership_report_overview_page",
        label: "final_cta_order_my_report_button",
      }),
    },
  },
  qe = { cta: { ga: a(e({}, l), { label: "hero_order_my_report_button" }) } },
  Ce = { cta: { ga: a(e({}, l), { label: "whatIs_cta_button" }) } },
  Le = { cta: { ga: a(e({}, l), { label: "whyGet_cta_button" }) } },
  Ae = { cta: { ga: a(e({}, l), { label: "infoWhatIs_cta_button" }) } },
  De = { cta: { ga: a(e({}, l), { label: "infoWhatAre_cta_button" }) } },
  Pe = { cta: { ga: a(e({}, l), { label: "infoHowDo_cta_button" }) } },
  xe = { cta: { ga: a(e({}, l), { label: "infoHowAre_cta_button" }) } },
  Te = {
    getHelp: { ga: a(e({}, l), { label: "questions_get_legal_help_button" }) },
  },
  He = {
    why: { ga: a(e({}, l), { label: "sec_nav_why_legalzoom_link" }) },
    pricing: { ga: a(e({}, l), { label: "sec_nav_pricing_link" }) },
    how: { ga: a(e({}, l), { label: "sec_nav_how_it_works_link" }) },
    faq: { ga: a(e({}, l), { label: "sec_nav_faqs_link" }) },
    feedback: { ga: a(e({}, l), { label: "sec_nav_feedback_link" }) },
  },
  Ne = { trademark: {} },
  Se = {
    cta: we,
    hero: qe,
    questions: Te,
    secondaryNav: He,
    whatIs: Ce,
    whyGet: Le,
    infoWhatIs: Ae,
    infoWhatAre: De,
    infoHowDo: Pe,
    infoHowAre: xe,
    packages: Ne,
  },
  P = { category: "lzred_biz_formation", label: "", action: _.Click },
  Me = {
    learnMore: { ga: a(e({}, P), { label: "partner_banner_learn_more" }) },
  },
  Be = [
    "bfsubcat_faq_biztaxed",
    "bfsubcat_faq_ccorp_vs_scorp",
    "bfsubcat_faq_liabilityprotection",
    "bfsubcat_faq_llc_vs_inc",
    "bfsubcat_faq_sp_vs_lc",
  ],
  Q = {};
for (const t of Be) Q[t] = { ga: a(e({}, P), { label: t }) };
const Ie = [
    "bfsubcat_501",
    "bfsubcat_EIN",
    "bfsubcat_RA",
    "bfsubcat_annualreports",
    "bfsubcat_bap",
    "bfsubcat_bl",
    "bfsubcat_compliance_calendar",
    "bfsubcat_dba",
    "bfsubcat_enr",
    "bfsubcat_inc",
    "bfsubcat_legalsformsagreements",
    "bfsubcat_llc",
    "bfsubcat_llp",
    "bfsubcat_lp",
    "bfsubcat_minutesmanager",
    "bfsubcat_np",
    "bfsubcat_sellerspermit",
    "bfsubcat_soleprop",
    "bfsubcat_start_DBA",
    "bfsubcat_start_INC",
    "bfsubcat_start_LLC",
    "bfsubcat_statetaxid",
    "bfsubcat_trademarkregistration",
    "bfsubcat_trademarksearch",
    "biz_category_business_trademark_registration_learn_more",
  ],
  W = {};
for (const t of Ie) W[t] = { ga: a(e({}, P), { label: t }) };
const Oe = {
    getLegalHelp: {
      ga: a(e({}, P), {
        label: "biz_formation_attorney_assist_get_legal_help",
      }),
    },
  },
  Ee = { accordion: Q, products: W, questions: Oe, partnerBanner: Me },
  b = { category: "biz_lic_overview_page", label: "", action: _.Click },
  je = {
    finalGetStarted: {
      ga: a(e({}, b), {
        category: "business_licenses_overview_page",
        label: "final_cta_get_started_button",
      }),
    },
  },
  Re = {
    cta: {
      ga: a(e({}, b), { label: "hero_find_my_business_licenses_button" }),
    },
  },
  Fe = { cta: { ga: a(e({}, b), { label: "whatIs_cta_button" }) } },
  Ge = { cta: { ga: a(e({}, b), { label: "moreInfo_cta_button" }) } },
  Qe = { cta: { ga: a(e({}, b), { label: "howLong_cta_button" }) } },
  We = {
    getHelp: { ga: a(e({}, b), { label: "questions_get_legal_help_button" }) },
  },
  Ve = {
    why: { ga: a(e({}, b), { label: "sec_nav_why_get_help_link" }) },
    how: { ga: a(e({}, b), { label: "sec_nav_how_to_get_licenses_link" }) },
    faq: { ga: a(e({}, b), { label: "sec_nav_faqs_link" }) },
  },
  Je = { trademark: {} },
  Ye = {
    cta: je,
    hero: Re,
    questions: We,
    secondaryNav: Ve,
    whatIs: Fe,
    moreInfo: Ge,
    howLong: Qe,
    packages: Je,
  },
  S = {
    category: "lzred_BIZ_OPERATION_subcategory",
    label: "",
    action: _.Click,
  },
  Ze = {
    learnMore: { ga: a(e({}, S), { label: "partner_banner_learn_more" }) },
  },
  Ke = [
    "biz_operation_registered_agent_learn_more",
    "biz_operation_annual_reports_learn_more",
    "biz_operation_operating_agreement_learn_more",
    "biz_operation_business_licenses_learn_more",
    "biz_operation_articles_of_amendment_learn_more",
    "biz_operation_dissolution_learn_more",
    "biz_operation_annual_report",
    "biz_operation_initial_report",
    "biz_operation_minutes_manager",
    "biz_operation_compliance_calendar",
    "biz_operation_registered_agent",
    "biz_operation_operating_agreement",
    "biz_operation_bylaws_resolutions",
    "biz_operation_corporate_amendments",
    "biz_operation_corporate_dissolution",
    "biz_operation_foreign_qualification",
    "biz_operation_corporate_name_change",
    "biz_operation_entity_entity_conversion",
    "biz_operation_beneficial_ownership_report",
    "biz_operation_lz_tax",
    "biz_operation_ein",
    "biz_operation_stateTaxID",
    "biz_operation_501c3",
    "biz_operation_business_licenses",
    "biz_operation_sellers_permit",
    "biz_operation_general_agreement",
    "biz_operation_business_plan_nondisclosure_agreement",
    "biz_operation_promissory_note",
    "biz_operation_independent_contractor",
    "biz_operation_employment_agreement",
    "biz_operation_view_all_legal_forms_report",
    "biz_operation_esignature",
    "biz_operation_lz_books",
    "biz_operation_lz_virtual_mail",
    "biz_operation_corporate_supplies",
    "biz_operation_certified_copies",
    "biz_operation_certificates_of_good_standing",
    "biz_operation_BAP",
    "biz_operation_residential_lease",
    "biz_operation_property_deed",
    "biz_operation_FAQ_articles_of_amendment",
    "biz_operation_FAQ_operating_agreement",
    "biz_operation_FAQ_what_are_compliance_calendar_services",
    "biz_operation_FAQ_what_is_a_registered_agent",
    "biz_operation_FAQ_what_are_annual_reports",
    "biz_operation_FAQ_need_business_licenses",
    "biz_operation_attorney_assist_get_legal_help",
  ],
  V = {};
for (const t of Ke) V[t] = { ga: a(e({}, S), { label: t }) };
const Ue = {
    getLegalHelp: {
      ga: a(e({}, S), {
        label: "biz_operation_attorney_assist_get_legal_help",
      }),
    },
  },
  Xe = { partnerBanner: Ze, products: V, questions: Ue },
  J = { category: "lzred_business_category", label: "", action: _.Click },
  ea = [
    "bfsubcat_helpmedecide_banner",
    "biz_category_business_annual_report_learn_more",
    "biz_category_business_corp_learn_more",
    "biz_category_business_DBA_learn_more",
    "biz_category_business_dissolution_learn_more_",
    "biz_category_business_operations_501c3",
    "biz_category_business_operations_annual_report",
    "biz_category_business_operations_BAP",
    "biz_category_business_operations_business_licenses",
    "biz_category_business_operations_business_plan_nondisclosure_agreement",
    "biz_category_business_operations_bylaws_resolutions",
    "biz_category_business_operations_certificates_of_good_standing",
    "biz_category_business_operations_compliance_calendar",
    "biz_category_business_operations_corporate_amendments",
    "biz_category_business_operations_corporate_dissolution",
    "biz_category_business_operations_corporate_name_change",
    "biz_category_business_operations_corporate_supplies",
    "biz_category_business_operations_ein",
    "biz_category_business_operations_employment_agreement",
    "biz_category_business_operations_entity_entity_conversion",
    "biz_category_business_operations_foreign_qualification",
    "biz_category_business_operations_general_agreement",
    "biz_category_business_operations_independent_contractor",
    "biz_category_business_operations_initial_report",
    "biz_category_business_operations_minutes_manager",
    "biz_category_business_operations_operating_agreement",
    "biz_category_business_operations_promissory_note",
    "biz_category_business_operations_property_deed",
    "biz_category_business_operations_registered_agent",
    "biz_category_business_operations_residential_lease",
    "biz_category_business_operations_sellers_permit",
    "biz_category_business_operations_stateTaxID",
    "biz_category_business_operations_view_all_legal_forms_report",
    "biz_category_business_trademark_registration_learn_more",
    "biz_category_forming_business_corporation",
    "biz_category_forming_business_dba",
    "biz_category_forming_business_entity_reseervation",
    "biz_category_forming_business_limited_liability_partnership",
    "biz_category_forming_business_limited_parternership",
    "biz_category_forming_business_llc",
    "biz_category_forming_business_nonprofit",
    "biz_category_forming_business_sole_proprietorship",
    "biz_category_intellectual_property_copyright_registration",
    "biz_category_intellectual_property_design_patent",
    "biz_category_intellectual_property_help_me_decide",
    "biz_category_intellectual_property_patent_search",
    "biz_category_intellectual_property_provisional_patent_application",
    "biz_category_intellectual_property_trademark_monitoring",
    "biz_category_intellectual_property_trademark_registration",
    "biz_category_intellectual_property_trademark_search",
    "biz_category_intellectual_property_utility_patent",
    "biz_category_LLC_learn_more",
    "business_operations_certified_copies",
    "getLegalHelp",
    "biz_category_business_operations_beneficial_ownership_report",
    "biz_category_business_operations_lz_tax",
    "biz_category_business_operations_esignature",
    "biz_category_business_operations_lz_books",
    "biz_category_business_operations_lz_virtual_mail",
  ],
  Y = {};
for (const t of ea) Y[t] = { ga: a(e({}, J), { label: t }) };
const aa = {
    products: Y,
    questions: { getLegalHelp: { ga: a(e({}, J), { label: "getLegalHelp" }) } },
  },
  M = { category: "lzred_CC_pricing", label: "", action: _.Click },
  ta = {
    getLegalHelp: {
      ga: a(e({}, M), { label: "cc_pricing_refund_satisfaction_link" }),
    },
  },
  _a = {
    complianceCalendarPricing: {
      ga: a(e({}, M), { label: "cc_pricing_start_package" }),
    },
  },
  na = {
    getLegalHelp: {
      ga: a(e({}, M), { label: "cc_pricing_attorney_get_legal_help" }),
    },
  },
  oa = { guarantee: ta, packages: _a, questions: na },
  Z = { category: "lzred_COPYRIGHT_pricing", label: "", action: _.Click },
  ra = {
    copyrightRegistration: {
      ga: a(e({}, Z), { label: "copyright_pricing_start_package" }),
    },
  },
  sa = {
    getLegalHelp: {
      ga: a(e({}, Z), { label: "copyright_pricing_attorney_get_legal_help" }),
    },
  },
  ia = { packages: ra, questions: sa },
  c = { category: "dba_overview_page", label: "", action: _.Click },
  la = { cta: { ga: a(e({}, c), { label: "hero_start_button" }) } },
  ca = {
    why: { ga: a(e({}, c), { label: "sec_nav_why_get_a_dba_link" }) },
    how_to_register: {
      ga: a(e({}, c), { label: "sec_nav_how_to_start_link" }),
    },
    pricing: { ga: a(e({}, c), { label: "sec_nav_pricing_link" }) },
    faq: { ga: a(e({}, c), { label: "sec_nav_faqs_link" }) },
    getStarted: { ga: a(e({}, c), { label: "sec_nav_get_started_button" }) },
  },
  ga = { ctaVideo: { ga: a(e({}, c), { label: "hero_start_button" }) } },
  pa = { dba: { ga: a(e({}, c), { label: "file_online_register_button" }) } },
  ba = {
    getLegalHelp: {
      ga: a(e({}, c), { label: "questions_get_legal_help_button" }),
    },
  },
  ua = {
    registerMyDBAQuestions: {
      ga: a(e({}, c), { label: "final_cta_get_started_button" }),
    },
    registerMyDBAWhy: {
      ga: a(e({}, c), { label: "register_why_cta_get_started_button" }),
    },
    registerMyDBADifference: {
      ga: a(e({}, c), { label: "difference_cta_get_started_button" }),
    },
    registerMyDBAFAQ: {
      ga: a(e({}, c), { label: "register_faq_cta_get_started_button" }),
    },
  },
  da = {
    cta: ua,
    hero: la,
    packages: pa,
    questions: ba,
    secondaryNav: ca,
    videoCTA: ga,
  },
  B = { category: "lzred_DBA_pricing", label: "", action: _.Click },
  ka = { getStarted: { ga: a(e({}, B), { label: "get_started_button" }) } },
  fa = {
    getLegalHelp: {
      ga: a(e({}, B), { label: "questions_get_legal_help_button" }),
    },
  },
  ma = { dbaPricing: { ga: a(e({}, B), { label: "dba_pricing_package" }) } },
  ya = { cta: ka, packages: ma, questions: fa },
  n = (t, o) => a(e({}, t), { label: o }),
  u = { category: "esignature_overview_page", label: "", action: _.Click },
  ha = {
    finalGetStarted: {
      ga: a(e({}, u), {
        category: "esignature_overview_page",
        label: "final_cta_get_started_button",
      }),
    },
  },
  va = {
    cta: { ga: n(u, "hero_get_started_link") },
    learnMore: { ga: n(u, "hero_refund_fee_link") },
  },
  $a = {
    getLegalHelp: {
      ga: a(e({}, u), { label: "questions_get_legal_help_button" }),
    },
  },
  za = {
    how_it_works: { ga: n(u, "sec_nav_how_it_works_link") },
    faq: { ga: n(u, "sec_nav_faq_link") },
    feedbackBooks: { ga: n(u, "sec_nav_what_customers_think_link") },
    getStarted: { ga: n(u, "sec_nav_get_started_button") },
  },
  wa = { cta: ha, hero: va, questions: $a, secondaryNav: za },
  p = { category: "inc_overview_page", label: "", action: _.Click },
  qa = {
    checkAvailability: { ga: a(e({}, p), { label: "hero_check_name_link" }) },
    seePricingOptions: {
      ga: a(e({}, p), { label: "hero_pricing_options_link" }),
    },
    learnMore: { ga: a(e({}, p), { label: "hero_refund_fee_link" }) },
  },
  Ca = {
    why: { ga: a(e({}, p), { label: "sec_nav_why_start_a_llc_link" }) },
    faq: { ga: a(e({}, p), { label: "sec_nav_faqs_link" }) },
    how_to_incorporate: {
      ga: a(e({}, p), { label: "sec_nav_how_to_start_link" }),
    },
    getStarted: { ga: a(e({}, p), { label: "sec_nav_get_started_button" }) },
  },
  La = {
    startMyCorporation: { ga: a(e({}, p), { label: "hero_start_button" }) },
  },
  Aa = {
    getLegalHelp: {
      ga: a(e({}, p), { label: "questions_get_legal_help_button" }),
    },
  },
  Da = { startMyCorporationButton: {} },
  Pa = { hero: qa, secondaryNav: Ca, videoCTA: La, questions: Aa, cta: Da },
  $ = { category: "lzred_INC_pricing", label: "", action: _.Click },
  xa = {
    learnMore: {
      ga: a(e({}, $), { label: "inc_pricing_refund_satisfaction_link" }),
    },
  },
  Ta = {
    economy: { ga: a(e({}, $), { label: "inc_pricing_economy_package" }) },
    standard: { ga: a(e({}, $), { label: "inc_pricing_standard_package" }) },
    express_gold: {
      ga: a(e({}, $), { label: "inc_pricing_express_gold_package" }),
    },
  },
  Ha = {
    getLegalHelp: {
      ga: a(e({}, $), { label: "inc_pricing_refund_satisfaction_link" }),
    },
  },
  Na = { guarantee: xa, packages: Ta, questions: Ha };
function I(t) {
  return {
    ga: { action: _.Click, category: "lzred_IP_subcategory", label: t },
  };
}
function Sa(t) {
  return I(t);
}
const Ma = { getLegalHelp: Sa("ip_attorney_get_legal_help_button") },
  Ba = [
    "ip_trademark_registration_link",
    "ip_trademark_search_link",
    "ip_trademark_monitoring_link",
    "ip_office_action_response_pro_link",
    "ip_copyright_registration_link",
    "ip_provisional_application_patent_link",
    "ip_patent_search_link",
    "ip_utility_patent_link",
    "ip_design_patent_link",
    "ip_professional_patent_drawing_link",
  ],
  K = {};
for (const t of Ba) K[t] = I(t);
const Ia = ["ip_view_patent_video", "ip_play_video_button"],
  U = {};
for (const t of Ia) U[t] = I(t);
const Oa = { videoCTA: U, products: K, questions: Ma },
  O = { category: "intellectual_property_compare", label: "", action: _.Click },
  Ea = { item: { ga: e({}, O) } },
  ja = {
    getLegalHelp: {
      ga: a(e({}, O), { label: "questions_get_legal_help_button" }),
    },
  },
  Ra = { button: { ga: a(e({}, O), { label: "cta_get_started_button" }) } },
  Fa = { accordion: Ea, questions: ja, cta: Ra },
  Ga = {
    hero: {},
    package12: {},
    package6: {},
    howToStart: {},
    waysToHelp: {},
    businessAdvisory: {},
  },
  Qa = { viewAttorneys: {} },
  Wa = { exploreLegalPlans: {} },
  Va = { stateSelect: Ga, viewAttorneys: Qa, questions: Wa },
  k = { category: "lz_virtual_mail_overview_page", label: "", action: _.Click },
  Ja = { readyToStart: {} },
  Ya = {
    pricing: { ga: a(e({}, k), { label: "sec_nav_pricing_link" }) },
    how_it_works: { ga: a(e({}, k), { label: "sec_nav_how_it_works_link" }) },
    faq: { ga: a(e({}, k), { label: "sec_nav_faq_link" }) },
    feedbackBooks: {
      ga: a(e({}, k), { label: "sec_nav_what_customers_think_link" }),
    },
    getStarted: {
      ga: a(e({}, k), { label: "sec_nav_start_free_trial_button" }),
    },
  },
  Za = {
    cta: { ga: a(e({}, k), { label: "hero_start_my_search_link" }) },
    learnMore: { ga: a(e({}, k), { label: "hero_refund_fee_link" }) },
  },
  Ka = { trademark: {} },
  Ua = { exploreLegalPlans: {} },
  Xa = { secondaryNav: Ya, hero: Za, cta: Ja, packages: Ka, questions: Ua },
  h = { category: "np_overview_page", label: "", action: _.Click },
  et = { nonprofit: {} },
  at = {
    what501c3NotAllowedToDo: {},
    undecidedToFile501c3: {},
    readyToStart: {},
  },
  tt = {
    cta: { ga: a(e({}, h), { label: "hero_start_button" }) },
    learnMore: { ga: a(e({}, h), { label: "hero_refund_fee_link" }) },
  },
  _t = {
    why_register_trademark: {
      ga: a(e({}, h), { label: "sec_nav_why_start_a_nonprofit_link" }),
    },
    faq: { ga: a(e({}, h), { label: "sec_nav_faqs_link" }) },
    pricing: { ga: a(e({}, h), { label: "sec_nav_pricing_link" }) },
    getStarted: { ga: a(e({}, h), { label: "sec_nav_get_started_button" }) },
  },
  nt = { hero: tt, secondaryNav: _t, cta: at, packages: et },
  z = { category: "lzred_nonprofit_pricing", label: "", action: _.Click },
  ot = {
    learnMore: {
      ga: a(e({}, z), { label: "np_pricing_refund_satisfaction_link" }),
    },
  },
  rt = {
    economy: { ga: a(e({}, z), { label: "np_pricing_economy_package" }) },
    standard: { ga: a(e({}, z), { label: "np_pricing_standard_package" }) },
    express_gold: {
      ga: a(e({}, z), { label: "np_pricing_express_gold_package" }),
    },
  },
  st = {
    getLegalHelp: {
      ga: a(e({}, z), { label: "np_pricing_attorney_get_legal_help" }),
    },
  },
  it = { guarantee: ot, packages: rt, questions: st },
  D = { category: "lzred_OA_pricing", label: "", action: _.Click },
  lt = {
    getLegalHelp: {
      ga: a(e({}, D), { label: "oa_pricing_refund_satisfaction_link" }),
    },
  },
  ct = {
    standard: { ga: a(e({}, D), { label: "oa_pricing_standard_package" }) },
    rush: { ga: a(e({}, D), { label: "oa_pricing_rush_package" }) },
  },
  gt = {
    getLegalHelp: {
      ga: a(e({}, D), { label: "oa_pricing_attorney_get_legal_help" }),
    },
  },
  pt = { guarantee: lt, packages: ct, questions: gt },
  w = { category: "partner_landing_page", action: _.Click, label: "" },
  bt = { item: { ga: e({}, w) } },
  ut = {
    packageBasic: { ga: a(e({}, w), { label: "llc_basic" }) },
    packagePremium: { ga: a(e({}, w), { label: "llc_premium" }) },
    packagePro: { ga: a(e({}, w), { label: "llc_pro" }) },
  },
  dt = { logo: { ga: a(e({}, w), { label: "lz_partner_logo" }) } },
  kt = { accordion: bt, cardsTable: ut, header: dt },
  ft = { category: "partner_marketplace", label: "", action: _.Click },
  mt = [
    "partner_marketplace_bofa_logo",
    "partner_marketplace_bofa_cta",
    "partner_marketplace_bluevine_logo",
    "partner_marketplace_bluevine_cta",
    "partner_marketplace_next_logo",
    "partner_marketplace_next_cta",
    "partner_marketplace_mylo_logo",
    "partner_marketplace_mylo_cta",
    "partner_marketplace_avalara_logo",
    "partner_marketplace_avalara_cta",
    "partner_marketplace_square_logo",
    "partner_marketplace_square_cta",
    "partner_marketplace_toast_logo",
    "partner_marketplace_toast_cta",
    "partner_marketplace_googleworkspace_logo",
    "partner_marketplace_googleworkspace_cta",
    "resources_article_1",
    "resources_article_2",
    "resources_article_3",
    "resources_article_4",
    "resources_article_5",
    "resources_article_6",
  ],
  X = {};
for (const t of mt) X[t] = { ga: a(e({}, ft), { label: t }) };
const yt = { partnerItems: X },
  g = { category: "prenup_overview_page", label: "", action: _.Click },
  ht = { readyToStart: {}, included: {}, trackExpense: {} },
  vt = {
    pricing: { ga: n(g, "sec_nav_pricing_link") },
    how_it_works: { ga: n(g, "sec_nav_how_it_works_link") },
    faq: { ga: n(g, "sec_nav_faq_link") },
    feedbackBooks: { ga: n(g, "sec_nav_what_customers_say_link") },
    getStarted: { ga: n(g, "sec_nav_start_free_trial_button") },
  },
  $t = {
    cta: { ga: n(g, "hero_start_my_prenup") },
    learnMore: { ga: n(g, "hero_refund_fee_link") },
  },
  zt = { prenup: { ga: n(g, "sec_nav_faq_link") } },
  wt = {
    getLegalHelp: {
      ga: a(e({}, g), { label: "questions_get_legal_help_button" }),
    },
  },
  qt = { secondaryNav: vt, hero: $t, cta: ht, packages: zt, questions: wt },
  d = {
    category: "property_deed_transfer_overview_page",
    label: "",
    action: _.Click,
  },
  Ct = {
    startMyResidentialLease: {
      ga: a(e({}, d), {
        label: "final_cta_start_property_deed_transfer_button",
      }),
    },
  },
  Lt = {
    seePricingOptions: {
      ga: a(e({}, d), { label: "hero_pricing_options_link" }),
    },
    modalCta: { ga: a(e({}, d), { label: "hero_sample_docs_link" }) },
    cta: { ga: a(e({}, d), { label: "hero_start_button" }) },
  },
  At = {
    propDeedTransferOverview: {
      ga: a(e({}, d), {
        label: "packages_start_property_deed_transfer_button",
      }),
    },
    standard: {
      ga: a(e({}, d), { label: "packages_standard_more_details_button" }),
    },
    express: {
      ga: a(e({}, d), { label: "packages_express_gold_more_details_button" }),
    },
  },
  Dt = {
    getLegalHelp: {
      ga: a(e({}, d), { label: "questions_get_legal_help_button" }),
    },
  },
  Pt = { cta: Ct, hero: Lt, packages: At, questions: Dt },
  i = {
    category: "provisional_patents_overview_page",
    label: "",
    action: _.Click,
  },
  xt = {
    readyToStart: {
      ga: n(i, "pricing_provisional_patent_application_get_started_button"),
    },
  },
  Tt = {
    item0: { ga: n(i, "faq_why_should_i_file_link") },
    item1: { ga: n(i, "faq_why_info_do_i_need_link") },
    item2: { ga: n(i, "faq_how_long_do_i_have_link") },
    item3: { ga: n(i, "faq_can_i_file_for_a_design_patent_link") },
    item4: { ga: n(i, "faq_utility_patent_vs_design_patent_link") },
  },
  Ht = {
    cta: { ga: n(i, "hero_register_button") },
    learnMore: { ga: n(i, "hero_pricing_options_link") },
  },
  Nt = { pricing: { ga: n(i, "hero_pricing_options_link") } },
  St = { exploreLegalPlans: { ga: n(i, "questions_get_legal_help_button") } },
  Mt = {
    faq: { ga: n(i, "sec_nav_faqs_link") },
    getStarted: { ga: n(i, "sec_nav_get_started_button") },
    how: { ga: n(i, "sec_nav_how_to_apply_link") },
    pricing: { ga: n(i, "sec_nav_pricing_link") },
    why: { ga: n(i, "sec_nav_why_apply_link") },
  },
  Bt = {
    cta: xt,
    faq: Tt,
    hero: Ht,
    packages: Nt,
    questions: St,
    secondaryNav: Mt,
  },
  E = { category: "lzred_PPATENT_pricing", label: "", action: _.Click },
  It = {
    learnMore: {
      ga: a(e({}, E), { label: "ppatent_pricing_refund_satisfaction_link" }),
    },
  },
  Ot = {
    provisionalPatentPricing: {
      ga: a(e({}, E), { label: "ppatent_pricing_start_package" }),
    },
  },
  Et = {
    getLegalHelp: {
      ga: a(e({}, E), { label: "ppatent_pricing_attorney_get_legal_help" }),
    },
  },
  jt = { guarantee: It, packages: Ot, questions: Et },
  q = {
    category: "residential_lease_overview_page",
    label: "",
    action: _.Click,
  },
  Rt = {
    startMyResidentialLease: {
      ga: a(e({}, q), { label: "final_cta_start_residential_lease_button" }),
    },
  },
  Ft = {
    seePricingOptions: {
      ga: a(e({}, q), { label: "hero_pricing_options_link" }),
    },
    cta: { ga: a(e({}, q), { label: "hero_start_button" }) },
  },
  Gt = {
    residentialLeaseOverview: {
      ga: a(e({}, q), { label: "packages_start_residential_lease_button" }),
    },
  },
  Qt = {
    getLegalHelp: {
      ga: a(e({}, q), { label: "questions_get_legal_help_button" }),
    },
  },
  Wt = { cta: Rt, hero: Ft, packages: Gt, questions: Qt },
  v = { category: "altm_ovpg_test_a", label: "", action: _.Click },
  Vt = { trademark: {} },
  Jt = { whatTrademark: {}, howTrademark: {} },
  Yt = { whyTrademark: {} },
  Zt = {
    cta: { ga: a(e({}, v), { label: "hero_start_my_search_link" }) },
    learnMore: { ga: a(e({}, v), { label: "hero_refund_fee_link" }) },
  },
  Kt = {
    why_register_trademark: {
      ga: a(e({}, v), { label: "sec_nav_why_register_a_trademark_link" }),
    },
    faq: { ga: a(e({}, v), { label: "sec_nav_faqs_link" }) },
    how_to_start: { ga: a(e({}, v), { label: "sec_nav_how_to_start_link" }) },
    reviews: { ga: a(e({}, v), { label: "sec_nav_reviews_link" }) },
  },
  Ut = { hero: Zt, secondaryNav: Kt, cta: Jt, videoCTA: Yt, packages: Vt },
  s = { category: "tm_search_overview_page", label: "", action: _.Click },
  Xt = {
    readyToStart: {
      ga: a(e({}, s), { label: "final_cta_start_my_trademark_search_button" }),
    },
  },
  e_ = {
    why: {
      ga: a(e({}, s), { label: "sec_nav_why_do_a_trademark_search_link" }),
    },
    faq: { ga: a(e({}, s), { label: "sec_nav_faqs_link" }) },
    howToStart: { ga: a(e({}, s), { label: "sec_nav_how_to_start_link" }) },
    pricing: { ga: a(e({}, s), { label: "sec_nav_pricing_link" }) },
    reviews: { ga: a(e({}, s), { label: "sec_nav_reviews_link" }) },
    getStarted: { ga: a(e({}, s), { label: "sec_nav_get_started_button" }) },
  },
  a_ = {
    cta: { ga: a(e({}, s), { label: "hero_start_my_search_link" }) },
    seePricingOptions: {
      ga: a(e({}, s), { label: "hero_pricing_options_link" }),
    },
    learnMore: { ga: a(e({}, s), { label: "hero_refund_fee_link" }) },
  },
  t_ = {
    pricing_federal: {
      ga: a(e({}, s), { label: "pricing_federal_get_started_button" }),
    },
    pricing_federal_state_common_law: {
      ga: a(e({}, s), {
        label: "pricing_federal_state_common_law_get_started_button",
      }),
    },
    pricing_worldscan: {
      ga: a(e({}, s), { label: "pricing_worldscan_get_started_button" }),
    },
    pricing_federal_learn_more_link: {
      ga: a(e({}, s), { label: "pricing_federal_learn_more_link" }),
    },
    pricing_federal_state_common_law_learn_more_link: {
      ga: a(e({}, s), {
        label: "pricing_federal_state_common_law_learn_more_link",
      }),
    },
    pricing_worldscan_learn_more_link: {
      ga: a(e({}, s), { label: "pricing_worldscan_learn_more_link" }),
    },
  },
  __ = {
    getLegalHelp: {
      ga: a(e({}, s), { label: "questions_get_legal_help_button" }),
    },
  },
  n_ = { cta: Xt, hero: a_, packages: t_, questions: __, secondaryNav: e_ },
  m = { category: "lzred_TMS_pricing", label: "", action: _.Click },
  o_ = {
    readyToStart: {
      ga: a(e({}, m), { label: "final_cta_start_my_trademark_search_button" }),
    },
  },
  r_ = {
    seePricingOptions: {
      ga: a(e({}, m), { label: "hero_pricing_options_link" }),
    },
  },
  s_ = {
    federal_package: {
      ga: a(e({}, m), { label: "tms_pricing_federal_package" }),
    },
    state_package: { ga: a(e({}, m), { label: "tms_pricing_state_package" }) },
    international_package: {
      ga: a(e({}, m), { label: "tms_pricing_international_package" }),
    },
  },
  i_ = {
    getLegalHelp: {
      ga: a(e({}, m), { label: "questions_get_legal_help_button" }),
    },
  },
  l_ = {
    getStarted: { ga: a(e({}, m), { label: "sec_nav_get_started_button" }) },
  },
  c_ = { cta: o_, hero: r_, packages: s_, questions: i_, secondaryNav: l_ },
  g_ = {
    annualPricingReport: ge,
    articlesOfAmendmentPricing: de,
    articlesOfDissolutionPricing: ye,
    attorneys: ze,
    bor: Se,
    businessFormation: Ee,
    businessLicenses: Ye,
    businessOperations: Xe,
    businessOverview: aa,
    complianceCalendarPricing: oa,
    copyrightRegistration: ia,
    dba: da,
    dbaPricing: ya,
    eSignature: wa,
    inc: Pa,
    incPricing: Na,
    intellectualProperty: Oa,
    ipCompare: Fa,
    legalAssistPlan: Va,
    lzVirtualMail: Xa,
    nonprofit: nt,
    nonprofitPricing: it,
    operatingAgreementPricing: pt,
    partners: kt,
    partnersOverview: yt,
    propDeedTransferOverview: Pt,
    provisionalPatent: Bt,
    provisionalPatentPricing: jt,
    residentialLeaseOverview: Wt,
    trademark: Ut,
    trademarkSearch: n_,
    trademarkSearchPricing: c_,
    prenup: qt,
  },
  p_ = g_,
  y_ = (t) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: t.map(({ text: o, href: r }, y) => ({
      "@type": "ListItem",
      position: y,
      item: {
        "@type": "LinkRole",
        "@id": r == null ? void 0 : r.slice(1),
        name: re(o).trim(),
      },
    })),
  });
function b_({ href: t, text: o, last: r, page: y, lastClass: x, pageName: T }) {
  var j;
  const C = f.jsx("span", { children: o }),
    H = y ? ((j = p_[y]) == null ? void 0 : j.breadcrumbs) : {},
    ee =
      r || !t
        ? o
        : f.jsx(se, {
            url: t,
            className: "font-semibold",
            trackingEvents: H,
            "data-testid": `${T}-${o}-breadcrumb`,
            children: C,
          });
  return f.jsx("li", {
    className: G(
      r
        ? "breadcrumb-item text-muted"
        : "breadcrumb-item after:px-[10px] after:font-normal after:text-muted after:content-['|']",
      x
    ),
    "aria-current": r ? "page" : void 0,
    children: ee,
  });
}
function h_({
  list: t,
  page: o,
  linkClass: r,
  activeLinkClass: y,
  pageName: x = "",
}) {
  return f.jsx("div", {
    className: "container my-4 hidden md:block xl:max-w-[1368px]",
    children: f.jsx("nav", {
      "aria-label": "breadcrumb",
      children: f.jsx("ol", {
        className: G("inline-flex text-sm text-black", r),
        children: t.map((T, C, { length: H }) =>
          f.jsx(
            b_,
            a(e({}, T), {
              last: C === H - 1,
              page: o,
              lastClass: y,
              pageName: x,
            }),
            C
          )
        ),
      }),
    }),
  });
}
export { h_ as B, b_ as a, y_ as b, p_ as t };
