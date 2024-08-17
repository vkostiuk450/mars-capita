import { Box, FormLabel, Typography } from "@mui/material";
import LogoSide from "../../assets/bg-logo__side.png";
import { styled } from "@mui/material/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../components/FormInput";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { LoadingButton as _LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;

const registerSchema = object({
  firstname: string().min(1, "First name is required").max(100),
  lastname: string().min(1, "Last name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export type RegisterInput = TypeOf<typeof registerSchema>;

const LVL2RegisterPage = () => {
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  // 👇 Calling the Register Mutation
  const [registerUser, { isLoading, isSuccess, error, isError, data }] =
    useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      navigate("/verifyemail");
    }

    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    // 👇 Executing the RegisterUser Mutation
    registerUser(values);
  };

  return (
    <Box display="flex" height="100vh">
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#4C0098",
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
          Your Fund | Your Account Your Profit{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 8,
          bgcolor: "#F7F7F7",
        }}
      >
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
              fontSize: "2rem",
              fontWeight: 600,
              mb: 2,
              letterSpacing: 1,
            }}
          >
            Create Your Account
          </Typography>

          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmitHandler)}
              noValidate
              autoComplete="off"
              maxWidth="35rem"
              width="100%"
              sx={{ mt: 2 }}
            >
              <Box display="flex" gap={2}>
                <Box>
                  <FormLabel sx={{ ml: 2 }}>First Name</FormLabel>
                  <FormInput
                    name="firstname"
                    label="First Name"
                    outline="black"
                  />
                </Box>
                <Box>
                  <FormLabel sx={{ ml: 2 }}>Last Name</FormLabel>
                  <FormInput
                    name="lastname"
                    label="Last Name"
                    outline="black"
                  />
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 2 }}>Age</FormLabel>
                  <FormInput name="age" label="Age" outline="black" />
                </Box>
                <Box sx={{ flex: 1 }}></Box>
              </Box>
              <FormInput
                name="email"
                label="Email Address"
                type="email"
                outline="black"
              />
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
              <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
                Already have an account?{" "}
                <LinkItem to="/login">Login Here</LinkItem>
              </Typography>

              <LoadingButton
                variant="contained"
                sx={{ mt: 1 }}
                fullWidth
                disableElevation
                type="submit"
                loading={isLoading}
              >
                Sign Up
              </LoadingButton>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default LVL2RegisterPage;
