const {
    override,
    fixBabelImports,
    disableEsLint,
    addLessLoader,
  } = require("customize-cra");
  
  
  module.exports = override(
    fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
    disableEsLint(),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" }
    })
  );