"use client";
import {CountrySelectField}from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "",
      riskTolerance: "",
      preferredIndustry: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-400 mb-10">
        Sign Up and Personalise
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="Utkarsh"
          register={register}
          error={errors.fullName}
          validation={{
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Full name must be at least 2 characters",
            },
          }}
        />
        <InputField
          name="email"
          label="Email"
          placeholder="hola@hmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />

        {/* country select field */}
         <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
         /> 

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name="riskTolorence"
          label="Risk Tolorence"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 h-12 cursor-pointer bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-gray-950 font-medium text-base rounded-lg shadow-lg disabled:opacity-50"
        >
          {isSubmitting ? "Creating Account....." : "Sign Up"}
        </Button>
        <FooterLink text="Already have an account?" href="/sign-in" linkText="Sign In" />
      </form>
    </>
  );
};

export default SignUp;
