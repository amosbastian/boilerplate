import { Container, getLayout } from "@boilerplate/shared/ui";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
export default function Index() {
  const { t } = useTranslation("common");
  return (
    <Container>
      Web - {t("test")}
      <div>
        <Link href="/" locale="en">
          English
        </Link>
        <Link href="/" locale="nl">
          Dutch
        </Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </Container>
  );
}

Index.getLayout = getLayout;
