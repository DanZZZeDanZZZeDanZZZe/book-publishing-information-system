const nunjucks = require('nunjucks')

function configureTemplateEngine(path, expressApp) {
  nunjucks.configure(path, {
    autoescape: true,
    express: expressApp,
  })
}

module.exports = configureTemplateEngine
