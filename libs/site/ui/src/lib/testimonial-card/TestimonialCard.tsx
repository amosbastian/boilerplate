import { Card } from "@boilerplate/shared/ui";
import { Avatar, Box, Grid, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import reactStringReplace from "react-string-replace";

export type Testimonial = {
  url: string;
  imageUrl: string;
  name: string;
  username: string;
  content: string;
  createdAt: string;
};

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { content, createdAt, imageUrl, name, url, username } = testimonial;

  const createdAtDate = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("en-GB", { month: "short", day: "numeric", year: "numeric" }).format(
    createdAtDate,
  );

  let replacedContent;

  // Match URLs
  replacedContent = reactStringReplace(content, /(https?:\/\/\S+)/g, (match, i) => (
    <Text as="span" key={`url-${match + i}`} _hover={{ textDecoration: "none" }} color="twitter.600">
      {match}
    </Text>
  ));

  // Match @-mentions
  replacedContent = reactStringReplace(replacedContent, /@(\w+)/g, (match, i) => (
    <Text as="span" key={`mention-${match + i}`} _hover={{ textDecoration: "none" }} color="twitter.600">
      @{match}
    </Text>
  ));

  // Match hashtags
  replacedContent = reactStringReplace(replacedContent, /#(\w+)/g, (match, i) => (
    <Text as="span" key={`hashtag-${match + i}`} _hover={{ textDecoration: "none" }} color="twitter.600">
      #{match}
    </Text>
  ));

  return (
    <LinkBox>
      <LinkOverlay href={url} isExternal />
      <Card textAlign="initial" px={{ base: 4 }} py={{ base: 4 }}>
        <Grid alignItems="stretch" mb={3} gridTemplateColumns="max-content minmax(0, 1fr)" gap={4}>
          <Avatar name={name} src={imageUrl} />
          <Box maxW="100%">
            <Text as="p" size="md" isTruncated>
              {name}
            </Text>
            <Text variant="textSecondary">@{username}</Text>
          </Box>
        </Grid>
        <Box mb={3}>{replacedContent}</Box>
        <Box>
          <Text fontSize="sm" variant="textSecondary">
            {formattedDate}
          </Text>
        </Box>
      </Card>
    </LinkBox>
  );
}

export default TestimonialCard;
