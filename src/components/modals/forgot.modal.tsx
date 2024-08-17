import { Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import FormInput from "../FormInput";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string, TypeOf } from "zod";
import { useState, useEffect } from "react";
import { useResetPasswordMutation } from "../../redux/api/authApi";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/api/authApi";
import TwoFAModal from "./2fa.modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

const resetPasswordSchema = object({
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"],
});

export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;

const ForgotModal = ({
  email,
  onClose,
}: {
  email: string;
  onClose: Function;
}) => {
  const [resetToken] = useState("");
  const [seconds, setSeconds] = useState(-1);
  const [openVerify, setOpenVerify] = useState(false);

  const navigate = useNavigate();

  const [resetPassword, resetStatus] = useResetPasswordMutation();

  const [forgotPassword, forgotStatus] = useForgotPasswordMutation();

  const methods = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<ResetPasswordInput> = () => {
    forgotPassword({ email });
  };

  useEffect(() => {
    if (resetStatus.isSuccess) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetStatus.isLoading]);

  return (
    <Box sx={style}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
        <IconButton onClick={() => onClose()}>
          <Close />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          textAlign="center"
          component="h1"
          sx={{
            color: "#4C0098",
            fontWeight: 600,
            fontSize: 22,
          }}
        >
          Reset Password
        </Typography>

        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            autoComplete="off"
            maxWidth="27rem"
            width="100%"
            sx={{
              p: { xs: "1rem", sm: "2rem" },
              borderRadius: 2,
            }}
          >
            <FormInput
              name="password"
              label="Password"
              type="password"
              outline="black"
            />
            <FormInput
              name="passwordConfirm"
              label="Confirm Password"
              type="password"
              outline="black"
            />

            <LoadingButton
              variant="contained"
              sx={{
                px: 2,
                py: 1,
                bgcolor: "#9DACFF",
                color: "black",
                ":hover": {
                  opacity: 0.6,
                  bgcolor: "#9DACFF",
                },
                textTransform: "none",
              }}
              fullWidth
              disableElevation
              type="submit"
              loading={forgotStatus.isLoading}
              onClick={() => {
                setOpenVerify(true);
                setSeconds(60);
              }}
            >
              Confirm new Password
            </LoadingButton>
          </Box>
        </FormProvider>
      </Box>
      {openVerify && (
        <TwoFAModal
          close={false}
          onClose={null}
          email={email}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      )}
    </Box>
  );
};

export default ForgotModal;
