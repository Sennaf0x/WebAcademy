/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[

            {
                protocol: "https",
                hostname: "ranekapi.origamid.dev"
            },
        ],
    },
};

export default nextConfig;
