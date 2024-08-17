import { Box, Typography, Modal, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/FormInput";
import { useEffect, useState } from "react";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { useLoginUserMutation } from "../../redux/api/authApi";

import LogoBack from "../../assets/bg-logo__xl.png";
import TwoFAModal from "../../components/modals/2fa.modal";
import ForgotModal from "../../components/modals/forgot.modal";

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #ff3c3c;
  color: white;
  font-weight: 500;

  &:hover {
    background-color: #eb2a2a;
    transform: translateY(-2px);
  }
`;

const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const InternalLoginPage = () => {
  const [openVerify, setOpenVerify] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [seconds, setSeconds] = useState(60);

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  // 👇 API Login Mutation
  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
    getValues,
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      setOpenVerify(true);
      setSeconds(60);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // 👇 Executing the loginUser Mutation
    loginUser(values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#4C0098",
      }}
    >
      <Box sx={{ flex: 1, height: "95%" }}>
        <Box component="img" src={LogoBack} height="100%" />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            autoComplete="off"
            maxWidth="24rem"
            width="100%"
            sx={{
              p: { xs: "1rem", sm: "2rem" },
            }}
          >
            <Typography
              textAlign="left"
              sx={{
                color: "white",
                fontSize: 35,
                letterSpacing: 1,
                fontFamily: "Livvic",
                fontWeight: 100,
                mb: 2,
              }}
            >
              LOGIN
            </Typography>
            <Box sx={{ height: 220 }}>
              <FormInput
                name="email"
                label="Email"
                type="email"
                outline="white"
              />
              <FormInput
                name="password"
                label="Password"
                type="password"
                outline="white"
              />
              {isError && (
                <Typography color="#E80345" textAlign="center">
                  Invalid account information or password!
                </Typography>
              )}
            </Box>

            <LoadingButton
              variant="contained"
              fullWidth
              disableElevation
              type="submit"
              loading={isLoading}
              onClick={() => {
                setOpenVerify(true);
                setSeconds(60);
              }}
            >
              Login
            </LoadingButton>

            <Typography
              sx={{ fontSize: "0.9rem", mt: "1rem", textAlign: "center" }}
            >
              <Button
                style={{ color: "#fff" }}
                onClick={() => setOpenForgot(true)}
              >
                Forgot Password
              </Button>
            </Typography>
          </Box>
        </FormProvider>
      </Box>

      <Modal
        open={openVerify}
        onClose={() => setOpenVerify(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <TwoFAModal
            close={true}
            onClose={() => setOpenVerify(false)}
            seconds={seconds}
            setSeconds={setSeconds}
            email={getValues("email")}
          />
        </Box>
      </Modal>
      <Modal open={openForgot} onClose={() => setOpenForgot(false)}>
        <Box>
          <ForgotModal
            onClose={() => setOpenForgot(false)}
            email={getValues("email")}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default InternalLoginPage;
