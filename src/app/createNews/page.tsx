"use client";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";

interface NewsFormValues {
  title: string;
  snippet: string;
  description: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
}

const allCategories = ["business", "tech", "health", "sports"];

export default function CreateNewsPage() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<NewsFormValues>({
    defaultValues: {
      title: "",
      snippet: "",
      description: "",
      url: "",
      imageUrl: "",
      language: "en",
      published_at: "",
      source: "",
      categories: [],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: NewsFormValues) => {
      const res = await fetch("https://news-portal-server-liart.vercel.app/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create news");
      return res.json();
    },
    onSuccess: () => {
      alert("News created successfully!");
      reset();
    },
  });

  const onSubmit = (data: NewsFormValues) => mutation.mutate(data);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create News</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Snippet */}
        <div>
          <label className="block mb-1 font-medium">Snippet</label>
          <input
            {...register("snippet", { required: "Snippet is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.snippet && (
            <p className="text-red-500">{errors.snippet.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border px-3 py-2 rounded"
            rows={4}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* URL */}
        <div>
          <label className="block mb-1 font-medium">URL</label>
          <input
            {...register("url")}
            type="url"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            {...register("imageUrl")}
            type="url"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Language */}
        <div>
          <label className="block mb-1 font-medium">Language</label>
          <input
            {...register("language")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Published At */}
        <div>
          <label className="block mb-1 font-medium">Published At</label>
          <input
            {...register("published_at")}
            type="datetime-local"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Source */}
        <div>
          <label className="block mb-1 font-medium">Source</label>
          <input
            {...register("source")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Categories Multi-Select */}
        <div>
          <label className="block mb-1 font-medium">Categories</label>
          <Controller
            name="categories"
            control={control}
            rules={{ required: "Select at least one category" }}
            render={({ field }) => (
              <div className="flex gap-2 flex-wrap">
                {allCategories.map((cat) => (
                  <label
                    key={cat}
                    className={`px-3 py-1 border rounded cursor-pointer ${
                      field.value.includes(cat)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-black"
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={cat}
                      className="hidden"
                      checked={field.value.includes(cat)}
                      onChange={() => {
                        if (field.value.includes(cat)) {
                          field.onChange(
                            field.value.filter((c: string) => c !== cat)
                          );
                        } else {
                          field.onChange([...field.value, cat]);
                        }
                      }}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.categories && (
            <p className="text-red-500">{errors.categories.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create News
        </button>
      </form>
    </div>
  );
}
