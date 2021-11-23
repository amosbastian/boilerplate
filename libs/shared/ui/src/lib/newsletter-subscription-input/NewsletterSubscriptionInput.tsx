import type { BoxProps } from "@chakra-ui/react";
import { Box, Button, FormControl, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

/* eslint-disable-next-line */
export interface NewsletterSubscriptionInputProps extends BoxProps {
  size?: "sm" | "md";
}

export function NewsletterSubscriptionInput({ size = "sm", ...rest }: NewsletterSubscriptionInputProps) {
  const { t } = useTranslation("common");
  const backgroundColor = useColorModeValue("white", "transparent");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: { email: "" } });

  function onSubmit(data: FormData) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} {...rest}>
      <FormControl isInvalid={Boolean(errors.email)} isRequired>
        <InputGroup size={size === "sm" ? "md" : "lg"}>
          <Input
            backgroundColor={backgroundColor}
            placeholder={t("newsletter-input-placeholder")}
            type="email"
            {...register("email", { required: true })}
          />
          <InputRightElement w="max-content" pr={1}>
            <Button flexShrink={0} colorScheme="primary" size={size} isLoading={isSubmitting} type="submit">
              {t("newsletter-cta")}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
}

export default NewsletterSubscriptionInput;
