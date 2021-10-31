import { Section, SectionProps } from "@boilerplate/shared/ui";
import { Flex, Grid, Heading, VStack } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { Testimonial, TestimonialCard } from "../../";

export const TESTIMONIALS: Array<Testimonial[]> = [
  [
    {
      content: "Mauris sit amet facilisis elit, vitae varius metus. 🥳 Nullam elementum, massa id. #frontend",
      createdAt: "2021-02-12T20:03:10.303Z",
      imageUrl: "#",
      name: "Quisque Ac",
      url: "#",
      username: "QuisqueAc",
    },
    {
      content: "@frontend nam lacinia id leo vitae porttitor. Nulla eget lacus viverra, vulputate nulla.",
      createdAt: "2021-01-12T20:03:10.303Z",
      imageUrl: "#",
      name: "Aliquam Erat",
      url: "#",
      username: "aliquamerat123",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit @frontend. Sed tempor sit amet velit quis malesuada. Nulla. #frontend",
      createdAt: "2021-01-06T20:03:10.303Z",
      imageUrl: "#",
      name: "Nulla Facilisi",
      url: "#",
      username: "nulla_facilisi",
    },
  ],
  [
    {
      content: "Maecenas venenatis diam vitae orci malesuada suscipit. Class aptent taciti sociosqu ad. 👌😻",
      createdAt: "2021-03-12T20:03:10.303Z",
      imageUrl: "https://avatars.githubusercontent.com/u/9199433?s=400&u=dbfec4d54a80a5a991db4ae2a4ba80ee9ff9344c&v=4",
      name: "Amos Bastian",
      url: "https://github.com/amosbastian",
      username: "AmosBastian",
    },
    {
      content: "Quisque a finibus ligula, sed egestas sapien. Suspendisse eu est at lacus. @frontend #frontend",
      createdAt: "2021-02-27T20:03:10.303Z",
      imageUrl: "#",
      name: "Phasellus Vestibulum",
      url: "#",
      username: "phasellus",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius dignissim lacus eu eleifend. Proin ultrices enim nec ultricies tempus.",
      createdAt: "2021-01-01T20:03:10.303Z",
      imageUrl: "#",
      name: "Aenean A",
      url: "#",
      username: "aeneana",
    },
  ],
  [
    {
      content:
        "Cras ut ultrices enim. Suspendisse vel ante purus. Morbi fringilla ante eget arcu aliquet molestie. Sed. 👀",
      createdAt: "2021-01-24T20:03:10.303Z",
      imageUrl: "#",
      name: "Etiam Eleifend",
      url: "#",
      username: "eleifend94",
    },
    {
      content: "Quisque volutpat rhoncus dui, tempus faucibus ex imperdiet @frontend",
      createdAt: "2021-02-25T20:03:10.303Z",
      imageUrl: "#",
      name: "Morbi Vita",
      url: "#",
      username: "morbi_2020",
    },
    {
      content: "Phasellus non aliquet tellus, sit amet ultricies mauris. Sed nec sem ut. 👍👍👍",
      createdAt: "2021-02-01T20:03:10.303Z",
      imageUrl: "#",
      name: "Nunc Tristique",
      url: "#",
      username: "Tristique",
    },
  ],
];

/* eslint-disable-next-line */
export interface TestimonialsProps extends SectionProps {}

export function Testimonials(props: TestimonialsProps) {
  const { t } = useTranslation("home");

  return (
    <Section {...props}>
      <Flex direction="column" alignItems={{ base: "flex-start", md: "center" }} mb={{ base: 8, md: 16, lg: 24 }}>
        <Heading maxW={{ base: "100%", md: "42em" }} fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
          {t("features-section-heading")}
        </Heading>
        <Heading as="h3" fontSize={{ base: "md", md: "xl" }} variant="secondary">
          {t("features-section-subtitle")}
        </Heading>
      </Flex>
      <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gridGap={{ base: 4 }}>
        {TESTIMONIALS.map((testimonialSegment, index) => (
          <VStack
            key={`testimonialSegment-${index}`}
            spacing={4}
            mt={index === 1 ? { base: 0, lg: -8 } : 0}
            // Only show 6 testimonials <= tablet
            display={{
              base: index > 1 ? "none" : "initial",
              lg: "initial",
            }}
          >
            {testimonialSegment.map((testimonial) => (
              <TestimonialCard key={`testmonial-${testimonial.createdAt}`} testimonial={testimonial} />
            ))}
          </VStack>
        ))}
      </Grid>
    </Section>
  );
}

export default Testimonials;
