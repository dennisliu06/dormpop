"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { db } from "../lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail, getUserByUsername, getUserByUsernameEmail } from "../data/user";
import { generateVerificationToken } from "../lib/tokens";


export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: "Invalid fields!" };
    }

    const { email, password, username, firstname, lastname} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByUsernameEmail(username, email);

    if (existingUser) {
        console.log(existingUser.username);
        if (existingUser.username === username) {
            return { error: "Username already exists!" }
        }
        if (existingUser.email === email) {
            return { error: "Email already exists!" }
        }
        return { error: "Account already exists!" }
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

    //const verificationToken = await generateVerificationToken(email)

    return { success: "Account created!" }
};

