import { PrismaClient } from "@prisma/client/extension";
import { createListing } from "../actions/listing";
import * as z from "zod";
import { ListingSchema } from "@/schemas";


const prisma = new PrismaClient();

async function main() {
    const listingExample1 : z.infer<typeof ListingSchema> = {
        title: "Macbook Air M2",
        description: "M2 chip, 16gb RAM, 1TB storage",
        imageUrls: ["https://example.com/macbook.jpg"],
        price: 1200,
        used: true,
        category: "Electronics",
        condition: "Good",
        active: true,
        address: "96 Fenway St",
        tags: ["Apple", "Laptop"]
    }

    await createListing(listingExample1).then((value) => {
        if (value?.error) { console.log("Error has occurred!") };
    })

}

main().catch((e) => {console.log(e)}).finally(async () => await prisma.$disconnect());