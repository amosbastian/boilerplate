import type { BoxProps } from "@chakra-ui/react";
import { Box, Button, FormControl, Input, InputGroup, InputRightAddon, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

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
          <Button
            flexShrink={0}
            colorScheme="primary"
            size={size === "sm" ? "md" : "lg"}
            isLoading={isSubmitting}
            type="submit"
            ml={size === "sm" ? 2 : 4}
          >
            {t("newsletter-cta")}
          </Button>
        </InputGroup>
      </FormControl>
    </Box>
  );
}

export default NewsletterSubscriptionInput;
