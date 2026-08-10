// Runs after `react-router build`. Three jobs:
//   1. Copy the prerendered /404 page to build/client/404.html — GitHub
//      Pages looks for this literal filename at the site root for any
//      unmatched path.
//   2. Assert that public/CNAME and public/.nojekyll actually made it into
//      the build output. If either is missing, the custom domain or Jekyll
//      processing breaks silently on deploy — fail loudly here instead.
//   3. Delete __spa-fallback.html. react-router build emits this as a
//      client-routing fallback shell for true SPA hosting, but ssr:false +
//      prerender already generates a real, complete file for every path we
//      serve — nothing ever requests this file on purpose. Left in place it
//      just sits at the site root as a public, empty-looking page.
import { access, copyFile, constants } from "node:fs/promises";
import { rm } from "node:fs/promises";

const outDir = "build/client";

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const notFoundSrc = `${outDir}/404/index.html`;
const notFoundDest = `${outDir}/404.html`;

if (!(await exists(notFoundSrc))) {
  throw new Error(`postbuild: beklenen dosya yok: ${notFoundSrc}`);
}
await copyFile(notFoundSrc, notFoundDest);
console.log(`postbuild: ${notFoundSrc} -> ${notFoundDest} kopyalandı`);

for (const required of [`${outDir}/CNAME`, `${outDir}/.nojekyll`]) {
  if (!(await exists(required))) {
    throw new Error(`postbuild: kritik dosya build çıktısında yok: ${required}`);
  }
  console.log(`postbuild: doğrulandı — ${required}`);
}

const spaFallback = `${outDir}/__spa-fallback.html`;
if (await exists(spaFallback)) {
  await rm(spaFallback);
  console.log(`postbuild: ${spaFallback} kaldırıldı (kullanılmıyor)`);
}
