import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    distDir: process.env.NODE_ENV === 'production' ? '.next-prod' : '.next',
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true, // Required for Next.js static export
    },
};
export default nextConfig;
