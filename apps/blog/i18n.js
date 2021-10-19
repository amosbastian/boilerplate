module.exports = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
  },
  loadLocaleFrom: async (locale, namespace) => {
    const i18nShared = await import(`../../libs/shared/i18n/src/lib/${locale}/common`).then((m) => m.default);
    const i18nBlog = await import(`../../libs/blog/i18n/src/lib/${locale}/${namespace}`).then((m) => m.default);

    return { ...i18nShared, ...i18nBlog };
  },
};
