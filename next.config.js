/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    env:{
        baseUrl:process.env.baseUrl
    }
}

module.exports = nextConfig
