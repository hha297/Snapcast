import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
        eslint: {
                ignoreDuringBuilds: true,
        },
        typescript: {
                ignoreBuildErrors: true,
        },
        images: {
                remotePatterns: [
                        {
                                protocol: 'https',
                                hostname: 'snapcast-hha297.b-cdn.net',
                                pathname: '/**',
                        },
                        {
                                protocol: 'https',
                                hostname: 'avatars.githubusercontent.com',
                                pathname: '/**',
                        },
                        {
                                protocol: 'https',
                                hostname: 'lh3.googleusercontent.com',
                                pathname: '/**',
                        },
                        {
                                protocol: 'https',
                                hostname: 'ssl.gstatic.com',
                                pathname: '/**',
                        },
                ],
        },
        /* config options here */
};

export default nextConfig;
