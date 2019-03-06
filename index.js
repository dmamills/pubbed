var Server = require('ssb-server')
var config = require('ssb-config')
var fs = require('fs')
var path = require('path')

// add plugins
Server
  .use(require('ssb-server/plugins/master'))
  .use(require('ssb-gossip'))
  .use(require('ssb-replicate'))
  .use(require('ssb-backlinks'))
  .use(require('ssb-invite'))

var server = Server(config)

console.log('server running?');

// save an updated list of methods this server has made public
// in a location that ssb-client will know to check
var manifest = server.getManifest()
fs.writeFileSync(
  path.join(config.path, 'manifest.json'), // ~/.ssb/manifest.json
  JSON.stringify(manifest)
)
