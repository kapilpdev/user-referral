import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required !")
    .min(6, "Password must be at least 8 characters"),
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required !")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required !")
    .min(6, "Password must be at least 8 characters"),
  password_confirmation: Yup.string()
    .required("Password Confirmation is a required !")
    .min(6, "Password must be at least 8 characters")
});

export const referralSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
});