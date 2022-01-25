const { liquid } = require('../lib/render-content')
const layouts = require('../lib/layouts')
const getMiniTocItems = require('../lib/get-mini-toc-items')

module.exports = async function enterpriseServerReleases (req, res, next) {
  if (!req.path.endsWith('/enterprise-server-releases')) return next()

  const html = await liquid.parseAndRender(layouts['enterprise-server-releases'], req.context)

  req.context.miniTocItems = getMiniTocItems(html, 3, 'article')

  return res.send(await liquid.parseAndRender(layouts['enterprise-server-releases'], req.context))
}
