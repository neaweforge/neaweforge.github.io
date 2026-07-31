// Runs after `react-router build`. Two jobs:
//   1. Copy the prerendered /404 page to build/client/404.html — GitHub
//      Pages looks for this literal filename at the site root for any
//      unmatched path.
//   2. Assert that public/CNAME and public/.nojekyll actually made it into
//      the build output. If either is missing, the custom domain or Jekyll
//      processing breaks silently on deploy — fail loudly here instead.
import { access, copyFile, constants } from "node:fs/promises";

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
