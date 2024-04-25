"use client";
import { useFormContext, useController } from "react-hook-form";

import { InputCom } from "../fields";

export const VInputCom = ({
  name,
  rules,
  defaultValue = "",
  ...props
}: any) => {
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  }: any = formContext;
  const { field } = useController({ name, control, rules, defaultValue });

  return (
    <InputCom
      onBlur={field.onBlur}
      error={errors?.[name]?.message}
      onChange={field.onChange}
      value={field.value}
      {...props}
    />
  );
};
