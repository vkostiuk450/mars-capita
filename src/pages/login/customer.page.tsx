import {
  Box,
  Typography,
  Button,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/FormInput";
import { useEffect } from "react";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useState } from "react";

import LogoSide from "../../assets/bg-logo__side.png";

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

const CustomerLoginPage = () => {
  const [open, setOpen] = useState(false);

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  // 👇 API Login Mutation
  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
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
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#4C0098",
          height: "100%",
        }}
      >
        <Box component="img" src={LogoSide} />
        <Typography
          color="white"
          fontSize={22}
          width={289}
          textAlign="center"
          mt={1}
        >
          Your Fund | Your Account Your Profit
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          bgcolor: "#F7F7F7",
          height: "100%",
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
                color: "#4C0098",
                fontSize: 35,
                letterSpacing: 1,
                fontFamily: "Livvic",
                fontWeight: 500,
                mb: 2,
              }}
            >
              LOGIN
            </Typography>
            <Box sx={{ height: 150 }}>
              <FormInput
                name="email"
                label="Email"
                type="email"
                outline="black"
              />
              <FormInput
                name="password"
                label="Password"
                type="password"
                outline="black"
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
              sx={{ bgcolor: "#98A7FA" }}
              loading={isLoading}
            >
              Login
            </LoadingButton>

            <Typography
              sx={{ fontSize: "0.9rem", mt: "1rem", textAlign: "center" }}
            >
              <Button
                style={{ color: "#FF3C3C", position: "relative" }}
                onClick={() => setOpen(true)}
              >
                Forgot Password
                <Collapse
                  in={open}
                  sx={{
                    position: "absolute",
                    top: "110%",
                  }}
                >
                  <Alert
                    icon={false}
                    action={
                      <IconButton
                        aria-label="close"
                        size="small"
                        onClick={(event) => {
                          setOpen(false);
                          event.stopPropagation();
                        }}
                      >
                        <Close fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2, bgcolor: "white", width: 420 }}
                  >
                    <Typography
                      textAlign="center"
                      color="#4C0098"
                      fontSize={14}
                      fontWeight={600}
                      textTransform="none"
                    >
                      Reset Password
                    </Typography>
                    <Typography mt={2} fontSize={14} textTransform="none">
                      If you have forgotten your password, please contact your
                      <Box component="span" color="#FF3C3C">
                        “Agent”
                      </Box>
                      to reset it. We apologize for any inconvenience; this is
                      for security purposes.
                    </Typography>
                  </Alert>
                </Collapse>
              </Button>
            </Typography>
          </Box>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default CustomerLoginPage;
