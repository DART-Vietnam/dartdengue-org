/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.ox.ac.uk',
            },
            {
                protocol: 'https',
                hostname: 'www.ndm.ox.ac.uk',
            },
            {
                protocol: 'https',
                hostname: 'www.oucru.org',
            },
        ],
    },
}

module.exports = nextConfig
