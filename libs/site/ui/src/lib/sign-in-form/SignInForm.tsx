import { Card } from "@boilerplate/shared/ui";
import { Button, Divider, FormControl, FormLabel, Grid, Icon, Input, Text } from "@chakra-ui/react";
import type { ClientSafeProvider } from "next-auth/client";
import { signIn } from "next-auth/client";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import type { IconType } from "react-icons";
import { RiRedditFill, RiTwitterFill } from "react-icons/ri";

const PROVIDER_CONFIGURATION: Record<string, { icon: IconType; color: string }> = {
  reddit: {
    icon: RiRedditFill,
    color: "#FF4602",
  },
  twitter: {
    icon: RiTwitterFill,
    color: "twitter.500",
  },
};

export interface SignInFormProps {
  providers?: ClientSafeProvider[];
}

export function SignInForm({ providers = [] }: SignInFormProps) {
  const { t } = useTranslation("signin");

  const [email, setEmail] = React.useState<string>("");
  const [signinLoading, setSigninLoading] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleEmailSignIn = async () => {
    setSigninLoading(true);
    await signIn("email", { email });
    setSigninLoading(false);
  };

  return (
    <Card mt={4} px={10} py={8} flexDirection="column" minWidth={{ base: "100%", md: "400px" }}>
      <FormControl id="email">
        <FormLabel fontSize="sm">{t("common:email-address")}</FormLabel>
        <Input type="text" name="email" value={email} onChange={handleChange} />
      </FormControl>
      <Button
        mt={4}
        colorScheme="primary"
        type="submit"
        onClick={handleEmailSignIn}
        disabled={email.length === 0}
        isFullWidth
        isLoading={signinLoading}
        fontSize="sm"
      >
        {t("common:sign-in")}
      </Button>
      {providers.length > 0 && (
        <>
          <Grid mt={6} gap={4} gridTemplateColumns="1fr max-content 1fr" justifyItems="center" alignItems="center">
            <Divider />
            <Text>{t("or")}</Text>
            <Divider />
          </Grid>
          <Grid gap={4} mt={6}>
            {providers.map((provider) => {
              const providerConfiguration = PROVIDER_CONFIGURATION[provider.id];

              if (!provider) return null;

              return (
                <Button
                  key={provider.name}
                  colorScheme="gray"
                  borderRadius="base"
                  aria-label={provider.name}
                  onClick={() => signIn(provider.id)}
                  position="relative"
                  fontSize="sm"
                >
                  <Icon
                    position="absolute"
                    left={4}
                    as={providerConfiguration.icon}
                    boxSize={5}
                    color={providerConfiguration.color}
                  />
                  {t("sign-in-with", { provider: provider.name })}
                </Button>
              );
            })}
          </Grid>
        </>
      )}
    </Card>
  );
}

export default SignInForm;
