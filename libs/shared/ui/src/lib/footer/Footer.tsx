import { Container } from "../container/Container";

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer>
      <Container>
        <h1>Welcome to Footer!</h1>
      </Container>
    </footer>
  );
}

export default Footer;
