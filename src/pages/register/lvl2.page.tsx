import {
  Box,
  FormLabel,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
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
import ReactPhoneInput from "react-phone-input-material-ui";
import { ArrowRight } from "@mui/icons-material";

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
  gender: string(),
  mobile: string().min(1, "Mobile is required"),
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
              maxWidth="30rem"
              width="100%"
              sx={{ mt: 2 }}
            >
              <Box display="flex" gap={2}>
                <Box>
                  <FormLabel sx={{ ml: 1 }}>First Name</FormLabel>
                  <FormInput name="firstname" label="" outline="black" />
                </Box>
                <Box>
                  <FormLabel sx={{ ml: 1 }}>Last Name</FormLabel>
                  <FormInput name="lastname" label="" outline="black" />
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <Box sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1 }}>Age</FormLabel>
                  <FormInput name="age" label="" outline="black" />
                </Box>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio color="success" />}
                      label="Male"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio color="success" />}
                      label="Female"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box display="flex" gap={2}>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1 }}>Email</FormLabel>
                  <FormInput
                    name="email"
                    label=""
                    type="email"
                    outline="black"
                  />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormLabel sx={{ ml: 1 }}>Mobile</FormLabel>
                  <ReactPhoneInput
                    placeholder="Country Code + Phone No"
                    inputProps={{ size: "small", label: "", name: "mobile" }}
                    component={TextField}
                  />
                </FormControl>
              </Box>

              <FormInput
                name="password"
                label="Set your new Password"
                type="password"
                outline="black"
              />
              <FormInput
                name="passwordConfirm"
                label="Re-Enter your Password"
                type="password"
                outline="black"
              />

              <Typography fontSize={12} width={350}>
                By creating an account, i agreed to{" "}
                <Box component="span" color="#FF4949">
                  MarsCAPITA’s Terms of Use and Privacy Policy
                </Box>
              </Typography>

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
                  mt: 2,
                  position: "relative",
                }}
                fullWidth
                disableElevation
                type="submit"
                onClick={() => {
                  navigate("/register/connect/394829384938294");
                }}
              >
                Next
                <ArrowRight sx={{ position: "absolute", right: 10 }} />
              </LoadingButton>

              <Typography
                sx={{ fontSize: "0.9rem", mt: "1rem" }}
                fontWeight={600}
                textAlign="right"
              >
                Already have an account? Login Here.
                <LinkItem
                  to="/login/internal"
                  sx={{
                    bgcolor: "#28CE4C",
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    ml: 2,
                  }}
                >
                  Log in
                </LinkItem>
              </Typography>
            </Box>
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default LVL2RegisterPage;
