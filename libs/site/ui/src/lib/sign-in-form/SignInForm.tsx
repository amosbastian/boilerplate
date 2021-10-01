import { Card } from "@boilerplate/shared/ui";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import type { ClientSafeProvider } from "next-auth/client";
import { signIn } from "next-auth/client";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import * as React from "react";
import type { IconType } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { RiErrorWarningFill, RiRedditFill, RiTwitterFill } from "react-icons/ri";

const PROVIDER_CONFIGURATION: Record<string, { icon: IconType }> = {
  reddit: {
    icon: RiRedditFill,
  },
  twitter: {
    icon: RiTwitterFill,
  },
  google: {
    icon: FcGoogle,
  },
};

export interface SignInFormProps {
  providers?: ClientSafeProvider[];
}

export function SignInForm({ providers = [] }: SignInFormProps) {
  const { t } = useTranslation("signin");
  const router = useRouter();
  const { error } = router.query;

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
    <Card mt={4} px={10} py={8} flexDirection="column" width="100%" maxWidth={{ base: "100%", md: "md" }}>
      {error && error === typeof "string" && (
        <Alert status="error" mb={4}>
          <AlertIcon as={RiErrorWarningFill} />
          <Box flex="1">
            <AlertTitle>{t("common:something-went-wrong")}</AlertTitle>
            <AlertDescription>{t(`${error.toLowerCase()}-error`)}</AlertDescription>
          </Box>
        </Alert>
      )}
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
                  variant={provider.id}
                  borderRadius="base"
                  aria-label={provider.name}
                  onClick={() => signIn(provider.id)}
                  position="relative"
                  fontSize="sm"
                  borderColor="gray.200"
                >
                  <Icon position="absolute" left={4} as={providerConfiguration.icon} boxSize={5} color="currentColor" />
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
