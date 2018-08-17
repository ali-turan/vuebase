
const requirePluginModule = require.context("@/plugins", true);
requirePluginModule.keys().forEach(fileName => {
    requirePluginModule(fileName);
});

const requireUtilModule = require.context("@/utils", true);
requireUtilModule.keys().forEach(fileName => {
    requireUtilModule(fileName);
});

const requireDirectiveModule = require.context("@/directives", true);
requireDirectiveModule.keys().forEach(fileName => {
    requireDirectiveModule(fileName);
});

