'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _require = require('fs'),
    existsSync = _require.existsSync;

var _require2 = require('path'),
    join = _require2.join;

var _require3 = require('lodash'),
    merge = _require3.merge;

var cwd = process.cwd();

function testDefault(mod) {
  return mod.default || mod;
}

function registerBabel() {
  testDefault(require(join(process.env.CMTTER_CLI_CWD, 'lib/utils/babel-node-register.js')))();
}

function getUseConfig() {
  var _require4 = require(join(process.env.CMTTER_CLI_CWD, 'lib/utils/utils')),
      getUseEnvs = _require4.getUseEnvs;

  var _cwd = cwd;

  if (cwd.endsWith('.docz')) {
    _cwd = _cwd.substring(0, cwd.length - '.docz'.length);
  }

  var useConfigPath = join(_cwd, "".concat(process.env.CMTTER_MODE, "-env.js"));
  return getUseEnvs(existsSync(useConfigPath) ? useConfigPath : null, {
    mode: process.env.CMTTER_MODE,
    args: {}
  });
}

registerBabel();
var useConfig = getUseConfig();
var config = merge({
  src: '/' + (process.env.SRC_PATH || 'src'),
  files: ['/' + (process.env.SRC_PATH || 'src') + '/**/*.{md,markdown,mdx}'],
  title: 'cmtter-lib doc',
  dest: '/docs'
}, useConfig.doc || {});

exports.default = config;
