import { Box } from "@chakra-ui/react";

export interface YouTubeProps {
  title: string;
  uid: string;
}

export function YouTube({ title, uid }: YouTubeProps) {
  return (
    <Box>
      <iframe src={`https://www.youtube.com/embed/${uid}`} width="100%" height="500px" title={title}></iframe>
    </Box>
  );
}

export default YouTube;
