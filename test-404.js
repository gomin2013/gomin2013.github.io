// node test-404.js — checks the redirect script in 404.html with a fake `location`.
const src = require("fs").readFileSync(__dirname + "/404.html", "utf8").match(/<script>\s*(\/\/ GitHub Pages[\s\S]*?)<\/script>/)[1];
const cases = {
  "/Hosts-Manager/": "/hosts-manager/", "/Hosts-Manager/Download/": "/hosts-manager/download/", "/host": "/hosts-manager/",
  "/git-exclude-": "/git-exclude-manager/", "/GIT-EXCLUDE-MANAGER": "/git-exclude-manager/", "/nothing": null, "/": null,
};
let failed = 0;
for (const [path, want] of Object.entries(cases)) {
  let got = null;
  new Function("location", src)({ pathname: path, search: "", hash: "", replace: (u) => (got = u) });
  if (got !== want) { failed++; console.log(`FAIL ${path} -> ${got} (want ${want})`); }
}
console.log(failed ? `${failed} failed` : "all redirects ok"); process.exit(failed ? 1 : 0);
