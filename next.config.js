/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	webpack: config => {
		config.externals.push('pino-pretty', 'lokijs', 'encoding')
		return config
	},
}

module.exports = nextConfig
