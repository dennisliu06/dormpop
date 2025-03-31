import { auth } from "@/auth";
import { ListingSchema } from "@/schemas";
import * as z from "zod";
import { db } from "../lib/db";

export const createListing = async (values: z.infer<typeof ListingSchema>) => {
  const validatedFields = ListingSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    title,
    price,
    imageUrls,
    used,
    category,
    condition,
    active,
    address,
    description,
    tags,
  } = validatedFields.data;

  const session = await auth();

  if (!session?.user.id) {
    return { error: "Must be logged in!"}
  }

  const userId = session.user.id
  
  await db.listing.create({
    data: {
        title,
        imageUrls,
        price,
        description,
        used,
        category,
        condition,
        active,
        address,
        userId,
        tags
    }
  })
};
