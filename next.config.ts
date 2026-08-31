import type { NextConfig } from "next";

// Set when building in GitHub Actions for a project page
// (https://hoangtranbg98.github.io/llm-attendance). Leave unset for local
// dev/build so paths still resolve at the site root.
const repoBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
