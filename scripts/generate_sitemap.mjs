// Runs after `react-router build`. Walks build/client for every generated
// index.html and turns each into a <url> entry — the sitemap can never list
// a page that wasn't actually built, or omit one that was, because it's
// derived from the real build output rather than a hand-maintained list.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const outDir = "build/client";

// public/CNAME is already the one authoritative record of this deploy's
// domain — reusing it here means the sitemap's URLs can't drift from it.
const domain = (await readFile("public/CNAME", "utf-8")).trim();
const siteUrl = `https://${domain}`;

async function findIndexFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...(await findIndexFiles(full)));
    } else if (entry.name === "index.html") {
      found.push(full);
    }
  }
  return found;
}

const indexFiles = await findIndexFiles(outDir);

const urls = indexFiles
  .map((file) => {
    const rel = relative(outDir, file).split(sep).slice(0, -1).join("/"); // strip trailing "index.html"
    return rel === "" ? "/" : `/${rel}/`;
  })
  // 404's prerendered index.html is GitHub Pages' error page, not a real
  // page — never a URL a search engine should be sent to.
  .filter((path) => !path.split("/").includes("404"))
  .sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join("\n")}
</urlset>
`;

await writeFile(`${outDir}/sitemap.xml`, xml);
console.log(`generate_sitemap: ${urls.length} URL yazıldı -> ${outDir}/sitemap.xml`);
for (const path of urls) console.log(`  ${siteUrl}${path}`);
