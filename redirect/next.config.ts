import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: "/user",
        destination: "/",
        permanent: false,
      },
      {
        source: "/user/:userid",
        destination: "/",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
