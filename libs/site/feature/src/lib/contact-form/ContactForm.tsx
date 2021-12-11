import { Link } from "@boilerplate/shared/ui";
import type { GridProps } from "@chakra-ui/react";
import { Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Grid, Input, Textarea } from "@chakra-ui/react";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  agreed: boolean;
}

const defaultValues: Partial<ContactFormData> = {
  agreed: false,
};

export type ContactFormProps = GridProps;

export function ContactForm(props: ContactFormProps) {
  const { t } = useTranslation("contact");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ defaultValues });

  function onSubmit(data: ContactFormData) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Grid
      data-testid="contact-form"
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gridColumnGap={6}
      gridRowGap={4}
      {...props}
    >
      <FormControl isInvalid={Boolean(errors.firstName)} isRequired gridColumn={{ base: "1 / -1", md: "1 / 2" }}>
        <FormLabel htmlFor="firstName">{t("first-name")}</FormLabel>
        <Input placeholder="John" {...register("firstName", { required: true })} />
        <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.lastName)} isRequired gridColumn={{ base: "1 / -1", md: "2 / -1" }}>
        <FormLabel htmlFor="lastName">{t("last-name")}</FormLabel>
        <Input placeholder="Doe" {...register("lastName", { required: true })} />
        <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.email)} isRequired gridColumn="1 / -1">
        <FormLabel htmlFor="email">{t("common:email")}</FormLabel>
        <Input placeholder="john.doe@gmail.com" type="email" {...register("email", { required: true })} />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.subject)} isRequired gridColumn="1 / -1">
        <FormLabel htmlFor="subject">{t("subject")}</FormLabel>
        <Input placeholder={t("subject")} {...register("subject", { required: true })} />
        <FormErrorMessage>{errors.subject && errors.subject.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={Boolean(errors.message)} isRequired gridColumn="1 / -1">
        <FormLabel htmlFor="message">{t("message")}</FormLabel>
        <Textarea placeholder={`${t("message")}...`} {...register("message", { required: true })} />
        <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
      </FormControl>

      <FormControl gridColumn="1 / -1" mt={2} isRequired>
        <Checkbox colorScheme="primary" {...register("agreed", { required: true })}>
          <Trans
            i18nKey="contact:privacy-policy-agreement"
            components={{
              link: <Link href="/privacy" />,
            }}
          />
        </Checkbox>
      </FormControl>

      <Button mt={4} colorScheme="primary" isLoading={isSubmitting} type="submit" gridColumn="1 / -1">
        {t("common:submit")}
      </Button>
    </Grid>
  );
}

export default ContactForm;
