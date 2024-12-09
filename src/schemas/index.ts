import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required") 
    .email("Invalid email format")
    .regex(/^[^\s@]+@[^\s@]+\.(edu)$/, {
      message: "Email must end with .edu",
    }),
  password: z.string().min(1, "Password is required"),
});
