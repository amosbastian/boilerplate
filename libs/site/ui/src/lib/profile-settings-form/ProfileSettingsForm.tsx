import { Card, CardContent, CardFooter, CardHeader } from "@boilerplate/shared/ui";
import type { GridProps } from "@chakra-ui/react";
import { Avatar, Button, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Input } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import useTranslation from "next-translate/useTranslation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { FileUpload } from "../file-upload/FileUpload";

interface ProfileSettingsFormData {
  name?: string | null;
  email?: string | null;
  image?: FileList;
}

export type ProfileSettingsFormProps = GridProps;

export function ProfileSettingsForm(props: ProfileSettingsFormProps) {
  const { t } = useTranslation("settings");
  const [session] = useSession();
  const [image, setImage] = React.useState<string | undefined | null>();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProfileSettingsFormData>({
    defaultValues: React.useMemo(() => {
      return {
        name: session?.user?.name,
        email: session?.user?.email,
      };
    }, [session?.user]),
  });

  const watchedImage = watch("image");

  React.useEffect(() => {
    reset({
      name: session?.user?.name,
      email: session?.user?.email,
    });
    setImage(session?.user?.image);
  }, [session?.user, reset]);

  React.useEffect(() => {
    if (watchedImage && watchedImage.length > 0) {
      setImage(URL.createObjectURL(watchedImage[0]));
    } else {
      setImage(null);
    }
  }, [watch, watchedImage]);

  function onSubmit(data: ProfileSettingsFormData) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data, null, 2));
        resolve();
      }, 3000);
    });
  }

  const validateFile = (fileList?: FileList) => {
    if (!fileList || fileList.length === 0) {
      return true;
    }

    const file = fileList[0];
    const fileSize = file.size / (1000 * 1000);
    const MAX_FILE_SIZE = 1;

    if (fileSize > MAX_FILE_SIZE) {
      return t("max-file-size", { fileSize: MAX_FILE_SIZE });
    }

    return true;
  };

  const removeImage = () => {
    setValue("image", undefined);
  };

  return (
    <Card as="form" onSubmit={handleSubmit(onSubmit)}>
      <CardHeader title={t("profile-settings-title")} subtitle={t("profile-settings-subtitle")} />
      <CardContent>
        <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gridColumnGap={6} gridRowGap={8} {...props}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="name" fontSize="sm">
              {t("name-label")}
            </FormLabel>
            <Input {...register("name")} disabled={isSubmitting} />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email" fontSize="sm">
              {t("common:email-address")}
            </FormLabel>
            <Input {...register("email")} disabled={isSubmitting} />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(errors.image)}>
            <FormLabel htmlFor="image" fontSize="sm">
              {t("image-label")}
            </FormLabel>
            <Flex>
              <Avatar src={image ?? undefined} h={10} w={10} />
              <FileUpload accept={"image/*"} register={register("image", { validate: validateFile })} ml={6}>
                <Button colorScheme="gray" variant="outline" fontSize="sm" disabled={isSubmitting}>
                  {t("common:change")}
                </Button>
              </FileUpload>
              <Button
                ml={4}
                colorScheme="primary"
                variant="ghost"
                fontSize="sm"
                disabled={isSubmitting}
                onClick={removeImage}
              >
                {t("common:remove")}
              </Button>
            </Flex>
            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
          </FormControl>
        </Grid>
      </CardContent>
      <CardFooter>
        <Button
          fontSize="sm"
          w={{ base: "100%", sm: "max-content" }}
          colorScheme="primary"
          isLoading={isSubmitting}
          type="submit"
        >
          {t("common:save")}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProfileSettingsForm;
