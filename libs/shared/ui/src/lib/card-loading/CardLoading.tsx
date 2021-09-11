import { Spinner, useColorModeValue } from "@chakra-ui/react";
import { CardContent } from "../card-content/CardContent";
import { Card } from "../card/Card";

export function CardLoading() {
  const color = useColorModeValue("primary.500", "primary.200");

  return (
    <Card>
      <CardContent display="grid" placeItems="center">
        <Spinner color={color} />
      </CardContent>
    </Card>
  );
}

export default CardLoading;
