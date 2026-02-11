/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'i.pravatar.cc']
    },
    productionBrowserSourceMaps: true,
};

export default nextConfig;
