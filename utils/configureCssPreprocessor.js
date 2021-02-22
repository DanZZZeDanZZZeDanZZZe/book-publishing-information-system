const nodeSassMiddleware = require('node-sass-middleware')

function configureCssPreprocessor(pathSrc, pathDest, expressApp) {
  expressApp.use(
    nodeSassMiddleware({
      src: pathSrc,
      dest: pathDest,
      debug: true,
      outputStyle: 'compressed',
    })
  )
}

module.exports = configureCssPreprocessor
