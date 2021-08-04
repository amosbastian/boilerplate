module.exports = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: async (locale, namespace) => {
    const shared = await import(`../../libs/shared/i18n/src/lib/${locale}/${namespace}`).then((m) => m.default);
    const site = await import(`../../libs/site/i18n/src/lib/${locale}/${namespace}`).then((m) => m.default);

    return { ...shared, ...site };
  },
};
