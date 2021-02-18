const nunjucks = require('nunjucks')

function configureTemplateEngine(path, expressApp) {
  nunjucks.configure(path, {
    autoescape: true,
    express: expressApp,
    watch: true,
  })
}

module.exports = configureTemplateEngine
