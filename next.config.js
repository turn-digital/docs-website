const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  basePath: "/turn-digital.github.io/docs-website",
  images: {
    unoptimized: true,
  },
});
