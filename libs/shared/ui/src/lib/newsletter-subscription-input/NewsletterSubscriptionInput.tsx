import type { InputGroupProps } from "@chakra-ui/react";
import { Button, FormControl, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

/* eslint-disable-next-line */
export interface NewsletterSubscriptionInputProps extends InputGroupProps {}

export function NewsletterSubscriptionInput(props: NewsletterSubscriptionInputProps) {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.email)} isRequired>
        <InputGroup {...props}>
          <Input
            backgroundColor={backgroundColor}
            placeholder={t("newsletter-input-placeholder")}
            type="email"
            {...register("email", { required: true })}
          />
          <InputRightElement w="max-content" pr={1}>
            <Button flexShrink={0} colorScheme="primary" size="sm" isLoading={isSubmitting} type="submit">
              {t("newsletter-cta")}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
}

export default NewsletterSubscriptionInput;
