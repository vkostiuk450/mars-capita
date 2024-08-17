import {
  FormHelperText,
  FormControl,
  Input as _Input,
  InputProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

const Input = styled(_Input)`
  border: 1px solid white;
  padding: 0.3rem 0.7rem;
`;

type IFormInputProps = {
  name: string;
  label: string;
  outline: string;
} & InputProps;

const FormInput: FC<IFormInputProps> = ({
  name,
  label,
  outline,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Input
            {...field}
            placeholder={label}
            fullWidth
            disableUnderline
            size="small"
            sx={{
              borderRadius: 1,
              color: outline,
              borderColor: outline === "black" ? "rgb(133, 133, 133)" : outline,
            }}
            error={!!errors[name]}
            {...otherProps}
          />
          <FormHelperText error={!!errors[name]}>
            {errors[name] ? (errors[name]?.message as unknown as string) : ""}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default FormInput;
