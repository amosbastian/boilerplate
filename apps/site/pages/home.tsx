import { Container, getLayout } from "@boilerplate/shared/ui";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Container>
      <NextSeo title={t("meta-title")} />
    </Container>
  );
}

Home.getLayout = getLayout;
