"use client";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Sign in", data);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-400 mb-10">Welcome Back !</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          name="email"
          label="Email"
          placeholder="hola@hmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }}
        />

        <InputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required" }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 h-12 cursor-pointer bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-gray-950 font-medium text-base rounded-lg shadow-lg disabled:opacity-50"
        >
          {isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
        <FooterLink text="Already have an account?" href="/sign-up" linkText="Sign Up" />
      </form>
    </>
  );
};

export default SignIn;
