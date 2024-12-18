'use server';
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";


const WebsiteSchema = z.object({
    title: z.string().min(1, "Title is required"),
    webaddress: z.string(), // Ensure it's a valid URL
    userEmail: z.string(), // Ensure it's a valid URL
    logo: z.string().optional(), // Assuming logo is optional
});

export const createWebsite = async (prevState: unknown, formData: FormData) => {
    const validatedFields = WebsiteSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const {title, webaddress, logo, userEmail} = validatedFields.data
    console.log("Title " + title)
    console.log("addy " + webaddress)
    console.log("logo " + logo)
    console.log("Email " + userEmail)

    try {
        await prisma.website.create({
            data: {
                title, webaddress, logo, userEmail
            }
        })

    } catch (error) {
        console.log("Error " + error)
        return { message: "Failed to create data" };
    }
    revalidatePath("/dashboard"); // Revalidate the path after creation
    redirect("/dashboard"); // Redirect to the dashboard page
}