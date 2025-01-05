import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    output: 'export',
    ignoreBuildErrors: true,
  }
};

const sentryOptions = {
  silent: true,
  org: "xun-inc-4n",
  project: "javascript-nextjs",
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryOptions);
