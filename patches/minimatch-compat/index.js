'use strict';

// Why this exists:
//
// brace-expansion 1.x is affected by GHSA-mh99-v99m-4gvg (unbounded expansion,
// OOM crash) and the 1.x line never got a patch. The fix only landed in 5.0.8.
// The only thing still pulling brace-expansion 1.x is minimatch@3, which
// serve-handler and docusaurus-lunr-search depend on.
//
// brace-expansion 5 cannot be dropped into minimatch@3 because its CommonJS
// build exports an object instead of a callable. Going the other way works
// though: minimatch 10 already depends on the patched brace-expansion 5.x. Its
// own CommonJS build is not callable either, but that is easy to bridge, and
// unlike brace-expansion the API surface here is small and stable.
//
// So this shim is mapped over "minimatch" via yarn resolutions. Result:
// minimatch@3 is gone, brace-expansion resolves to a patched 5.x, and the two
// consumers keep the callable signature they expect.

const mm = require('minimatch-modern');

const minimatch = mm.minimatch;

// minimatch@3 hangs its extras off the exported function (Minimatch, filter,
// match, makeRe, braceExpand, defaults, sep, GLOBSTAR). Carry them over so the
// shim is shaped like the module it replaces.
for (const key of Object.keys(mm)) {
  if (key === 'minimatch') continue;
  try {
    minimatch[key] = mm[key];
  } catch (err) {
    // read-only function properties (name, length) are not overwritable
  }
}

module.exports = minimatch;
