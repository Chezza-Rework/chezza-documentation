'use strict';

// brace-expansion 1.x exports the expand function directly:
//   var expand = require('brace-expansion'); expand('a{b,c}d')
// That is how minimatch@3 calls it, and minimatch@3 is still pulled in by
// serve-handler and docusaurus-lunr-search.
//
// The DoS advisory GHSA-mh99-v99m-4gvg is only fixed in brace-expansion 5.0.8,
// whose CommonJS build exports an object ({ expand, EXPANSION_MAX, ... }) instead
// of a callable, so it cannot be dropped in for minimatch@3. Same story for the
// scoped fork @isaacs/brace-expansion, which carries the same fix and is what
// minimatch 10 uses.
//
// This shim bridges the two: patched implementation, old callable signature.

const { expand } = require('@isaacs/brace-expansion');

module.exports = expand;
module.exports.expand = expand;
