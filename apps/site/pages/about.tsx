import { getLayout, Image, Section } from "@boilerplate/shared/ui";
import { Box, Grid, Heading, HStack, Icon, Link as ChakraLink, Text, useColorModeValue } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";

const TEAM = [
  {
    name: "Member 1",
    title: "member-1-title",
    image: "/member-1.jpeg",
    bio: "member-1-bio",
    linkedIn: "https://www.linkedin.com/in/amosbastian/",
    twitter: "https://twitter.com/AmosBastian",
  },
];

export default function About() {
  const { t } = useTranslation("about");
  const titleColor = useColorModeValue("primary.500", "primary.200");
  const boxShadow = useColorModeValue("md", "none");
  const iconColor = useColorModeValue("gray.400", "whiteAlpha.500");

  return (
    <>
      <NextSeo title={t("meta-title")} />
      <Section variant="transparent">
        <Heading mb={{ base: 4, md: 6 }}>{t("heading")}</Heading>
        <Text variant="secondary" fontSize="lg">
          {t("description")}
        </Text>
      </Section>
      <Section containerProps={{ display: "grid", gridTemplateColumns: { base: "1fr", lg: "1fr 2fr" }, gridGap: 4 }}>
        <Box>
          <Heading mb={{ base: 4 }}>{t("team-heading")}</Heading>
          <Text variant="secondary" fontSize="lg">
            {t("team-description")}
          </Text>
        </Box>
        <Grid gridTemplateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gridGap={4}>
          {TEAM.map((teamMember) => {
            return (
              <Box key={teamMember.name}>
                <Image src={teamMember.image} alt="" height="260px" mb={3} boxShadow={boxShadow} />
                <Text fontSize="md" fontWeight="medium">
                  {teamMember.name}
                </Text>
                <Text fontSize="md" fontWeight="medium" color={titleColor} mb={4}>
                  {t(teamMember.title)}
                </Text>
                <Text fontSize="md" variant="secondary" mb={4}>
                  {t(teamMember.bio)}
                </Text>
                <HStack spacing={4}>
                  <ChakraLink
                    aria-label="Twitter"
                    variant="link"
                    href={teamMember.twitter}
                    isExternal
                    color={iconColor}
                  >
                    <Icon boxSize={5} as={RiTwitterFill} />
                  </ChakraLink>
                  <ChakraLink
                    aria-label="LinkedIn"
                    variant="link"
                    href={teamMember.linkedIn}
                    isExternal
                    color={iconColor}
                  >
                    <Icon boxSize={5} as={RiLinkedinBoxFill} />
                  </ChakraLink>
                </HStack>
              </Box>
            );
          })}
        </Grid>
      </Section>
    </>
  );
}

About.getLayout = getLayout;
