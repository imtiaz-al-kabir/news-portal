import { revalidatePath } from "next/cache";

export default function ContactPage() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    await fetch("https://news-portal-server-liart.vercel.app/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    revalidatePath("/contact");
  }

  return (
    <div className="max-w-3xl mx-auto  p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            name="name"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
