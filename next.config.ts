import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ['src'], // ESLintのチェック対象をsrcディレクトリのみに限定
  },
};

export default nextConfig;
