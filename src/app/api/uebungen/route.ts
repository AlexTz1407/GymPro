import { query } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const myProp = searchParams.get("myProp");

  if (!myProp) {
    return new Response(JSON.stringify({ error: "Missing myProp parameter" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }
  try {
    const results = await query({
      query: `SELECT * FROM ${myProp}`,
      values: [],
    });
    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Database query failed" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
