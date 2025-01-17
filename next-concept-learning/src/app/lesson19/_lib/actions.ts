"use server";

import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
    console.log(formData.get("query"));
    revalidatePath("/lesson19");
}