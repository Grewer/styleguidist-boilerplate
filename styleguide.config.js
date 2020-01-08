const path = require('path')

const packagePath = path.resolve(
    __dirname,
    'package.json'
)
const packageFile = require(packagePath)


module.exports = {
    webpackConfig: require('./config/webpack.config'),
    components: 'src/component/**.tsx', // 写入对应目录的文档
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    verbose: true,
    updateDocs(docs, file) {
        if (docs.doclets.version) {
            const version = packageFile.version

            docs.doclets.version = version
            docs.tags.version[0].description = version
        }

        return docs
    },
    version: packageFile.version,
    usageMode: 'expand',
    pagePerSection: true,
    title: "文档名"
}
