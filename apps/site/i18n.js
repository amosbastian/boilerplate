module.exports = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
  },
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (locale, namespace) => {
    const x = import(`../../libs/shared/i18n/src/lib/${locale}/${namespace}`).then((m) => m.default);

    console.log("x:", x);
    return x;
  },
};
