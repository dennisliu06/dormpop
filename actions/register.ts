"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "../lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "../data/user";


export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: "Invalid fields!" };
    }

    const { email, password, username, firstname, lastname} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser){
        return { error: "Email already in use!"};
    }

    await db.user.create({
        data: {
            username,
            first_name: firstname,
            last_name: lastname,
            email,
            password: hashedPassword,
        }
    })

    // TODO: Send verification email

    return { success: "User created!" }
};

