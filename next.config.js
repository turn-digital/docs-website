const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  basePath: "/nextra-test-test-test",
  images: {
    unoptimized: true,
  },
});
