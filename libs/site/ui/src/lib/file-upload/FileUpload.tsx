// https://gist.github.com/Sqvall/23043a12a7fabf0f055198cb6ec39531
import type { InputGroupProps } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { ReactNode, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface FileUploadProps {
  register?: UseFormRegisterReturn;
  accept?: string;
  multiple?: boolean;
  children?: ReactNode;
}

export function FileUpload({
  accept,
  children,
  multiple,
  register,
  ...inputGroupProps
}: FileUploadProps & InputGroupProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref, ...rest } = register as { ref: (instance: HTMLInputElement | null) => void };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick} w="max-content" {...inputGroupProps}>
      <input
        type="file"
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(event) => {
          ref(event);
          inputRef.current = event;
        }}
      />
      {children}
    </InputGroup>
  );
}

export default FileUpload;
