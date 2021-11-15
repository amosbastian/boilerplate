module.exports = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["index"],
    "/404": ["404"],
    "/error": ["error"],
    "/_error": ["error"],
    "/about": ["about"],
    "/contact": ["contact"],
    "/faq": ["faq"],
    "/features": ["features"],
    "/features/feature-1": ["feature-1"],
    "/features/feature-2": ["feature-2"],
    "/home": ["home"],
    "/login": ["login", "ory"],
    "/pricing": ["pricing"],
    "/recovery": ["recovery", "ory"],
    "/registration": ["registration", "ory"],
    "/verification": ["verification", "ory"],
    "rgx:^/settings": ["settings"],
    "/settings/security": ["settings", "ory"],
  },
  loadLocaleFrom: async (locale, namespace) => {
    const i18nShared = await import(`../../libs/shared/i18n/src/lib/${locale}/common`).then((m) => m.default);
    const i18nSite = await import(`../../libs/site/i18n/src/lib/${locale}/${namespace}`).then((m) => m.default);

    return { ...i18nShared, ...i18nSite };
  },
};
