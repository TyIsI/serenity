const baseConfig = require('./next.config.base.js')

const nextConfig = {
    ...baseConfig,
    ...{
        experimental: {
            outputStandalone: true
        }
    }
}

module.exports = nextConfig
