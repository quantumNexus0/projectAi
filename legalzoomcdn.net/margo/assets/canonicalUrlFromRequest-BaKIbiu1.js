import { c as n } from "./env-9DNInbPl.js";
const { BASE_URL: r } = n;
function i(s) {
  const t = new URL(s, r),
    a = new URL(t.pathname, r);
  if (
    (a.pathname.startsWith("/website/") &&
      (a.pathname = a.pathname.replace(/^\/website/, "")),
    a.pathname === "/index.html" && (a.pathname = ""),
    a.pathname.startsWith("/articles/"))
  ) {
    const e = t.searchParams.get("page");
    e &&
      parseInt(e || "") >= 1 &&
      (a.searchParams.set("sort_by", "changed"), a.searchParams.set("page", e));
  }
  return a.toString();
}
export { i as c };
