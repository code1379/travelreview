const index = require('./src/mock/index.json')
const city = require('./src/mock/city.json')
const detail = require('./src/mock/detail.json')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        cn: '@/components/common',
        ct: '@/components/content',
        views: '@/views',
        common: '@/common',
        network: '@/network'
      }
    }
  },
  devServer: {
    before(app) {
      app.get('/api/index.json', (req, res) => {
        res.send(index)
      }),
        app.get('/api/city.json', (req, res) => {
          res.send(city)
        }),
        app.get('/api/detail.json', (req, res) => {
          res.send(detail)
        })
    },
    host: '127.0.0.1',
    port: 8081
  }
}