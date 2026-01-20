// app/actions/contact.ts
"use server";

export async function submitContactForm(
  prevState: { success: boolean; error?: string },
  formData: FormData,
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  // Example: log / store / send email
  console.log({ name, email, message });

  // You can return data if needed
  return { success: true };
}
