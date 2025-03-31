import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.(edu)$/, {
      message: "Email must end with .edu",
    }),
  password: z.string().min(1, "Password is required"),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .regex(/^[^\s@]+@northeastern\.edu$/, {
      message: "Please use your Northeastern email",
    }),
  password: z.string().min(6, "Minimum 6 characters required"),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Username cannot exceed 30 characters." })
    .regex(/^(?!.*[_.]{2})[a-zA-Z0-9._]{3,30}(?<![_.])$/, {
      message:
        "Username can only include letters, numbers, dots, and underscores, without consecutive or trailing special characters.",
    }),
  firstname: z
    .string()
    .min(1, { message: "First name is required" })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, {
      message: "Invalid first name.",
    }),
  lastname: z
    .string()
    .min(1, { message: "Last name is required" })
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, {
      message: "Invalid last name.",
    }),
});

export const ListingSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Minimum 3 characters" })
    .max(100, { message: "Maximum 100 characters" })
    .trim(),
  description: z
    .string()
    .max(1000, { message: "Maximum 1000 characters" })
    .optional(),
  price: z
    .number()
    .min(0, { message: "Price must be greater than 0" })
    .finite(),
  imageUrls: z
    .array(z.string().url())
    .min(1, { message: "At least 1 image is required" }),
  used: z.boolean({
    required_error: "Used is required",
  }),
  category: z.enum([
    "Electronics",
    "Furniture",
    "Clothing",
    "Appliances",
    "Miscellaneous",
  ]),
  condition: z.enum(["New", "Good", "Fair", "Refurbished"]),
  active: z.boolean(),
  address: z.string().min(3, { message: "Location is required" }),
  tags: z.array(z.string()).optional(),
});
