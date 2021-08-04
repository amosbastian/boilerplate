import { Container, getLayout } from "@boilerplate/shared/ui";
import useTranslation from "next-translate/useTranslation";

export default function Index() {
  const { t } = useTranslation("common");
  return <Container>Web - {t("test")}</Container>;
}

Index.getLayout = getLayout;
