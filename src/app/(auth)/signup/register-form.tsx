"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";

import { Button, Input, Spacer } from "@nextui-org/react";
import { CardWrapper } from "../../_components/cardwrapper";
import { EyeFilledIcon } from "@/app/_components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/app/_components/EyeSlashFilledIcon";
import { Alert } from "@nextui-org/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { registerUser } from "../../../../actions/register";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      registerUser(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
        <div className="flex flex-row gap-x-4">
          <div className="w-full">
            <Input
              isClearable
              variant="bordered"
              fullWidth
              color="default"
              size="lg"
              label="First name"
              labelPlacement="inside"
              placeholder="John"
              isDisabled={isPending}
              required
              {...register("firstname")}
              isInvalid={!!errors.firstname}
              errorMessage={errors.firstname?.message as React.ReactNode}
              classNames={{
                label: "text-red-500",
              }}
            />
          </div>
          <div className="w-full">
            <Input
              isClearable
              variant="bordered"
              fullWidth
              color="default"
              size="lg"
              label="Last name"
              labelPlacement="inside"
              placeholder="Doe"
              isDisabled={isPending}
              required
              {...register("lastname")}
              isInvalid={!!errors.lastname}
              errorMessage={errors.lastname?.message as React.ReactNode}
              classNames={{
                label: "text-red-500",
              }}
            />
          </div>
        </div>
        <div>
          <Input
            isClearable
            variant="bordered"
            fullWidth
            color="default"
            size="lg"
            label="Username"
            labelPlacement="inside"
            placeholder="johndoe123"
            isDisabled={isPending}
            required
            {...register("username")}
            isInvalid={!!errors.username}
            errorMessage={errors.username?.message as React.ReactNode}
            classNames={{
              label: "text-red-500",
            }}
          />
        </div>
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
            isDisabled={isPending}
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
        <div className="text-black">
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            fullWidth
            size="lg"
            isDisabled={isPending}
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
        {error && <Alert title={error} color="danger" isVisible />}
        {!error && success && (
          <Alert title={success} color="success" isVisible />
        )}
        <Button type="submit" isDisabled={isPending} className="w-full">
          Create an account
        </Button>
      </form>
    </CardWrapper>
  );
}
