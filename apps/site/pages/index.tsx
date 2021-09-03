import { Container, getLayout } from "@boilerplate/shared/ui";
import { Features, Hero } from "@boilerplate/site/ui";

export default function Index() {
  return (
    <>
      <Hero />
      <Features py={44} />
    </>
  );
}

Index.getLayout = getLayout;
