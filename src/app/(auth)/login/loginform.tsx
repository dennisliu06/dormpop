"use client";

import React from "react";
import * as z from "zod";

import { Button, Input, Spacer } from "@nextui-org/react";
import { CardWrapper } from "../../_components/cardwrapper";
import { EyeFilledIcon } from "@/app/_components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/_components/EyeSlashFilledIcon";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas"

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data); 
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/signup"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            isClearable
            variant="bordered"
            fullWidth
            color="default"
            size="lg"
            label="Email"
            labelPlacement="inside"
            placeholder="example@northeastern.edu"
            
            type="email"
            required
            {...register("email")}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message as React.ReactNode}
            classNames={{
                label: "text-red-500", 
              }}
          />
        </div>
        <Spacer y={8} />
        <div className="text-black">
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            fullWidth
            size="lg"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            {...register("password")}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message as React.ReactNode}
          />
        </div>
        <Spacer y={8} />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </CardWrapper>
  );
}
