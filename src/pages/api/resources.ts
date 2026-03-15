import { type APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const prerender = false;


export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");
  const state = url.searchParams.get("state");

  if (!city || !state) {
    return new Response("City and State is required", { status: 400 });
  }

  const { data, error } = await supabase
    .from("resource")
    .select("name, link, tags, community!inner(city, state)")
    .eq("community.city", city)
    .eq("community.state", state);

  if (error) {
    return new Response("Error fetching resources: " + error, { status: 500 });
  }

  return new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
