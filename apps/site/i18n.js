module.exports = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/about": ["about"],
    "/contact": ["contact"],
    "/faq": ["faq"],
    "/home": ["home"],
    "/pricing": ["pricing"],
    "/signin": ["signin"],
    "rgx:^/settings": ["settings"],
  },
  loadLocaleFrom: async (locale, namespace) => {
    const i18nShared = await import(`../../libs/shared/i18n/src/lib/${locale}/common`).then((m) => m.default);
    const i18nSite = await import(`../../libs/site/i18n/src/lib/${locale}/${namespace}`).then((m) => m.default);

    return { ...i18nShared, ...i18nSite };
  },
};
