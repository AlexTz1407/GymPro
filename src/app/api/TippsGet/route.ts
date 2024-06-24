import { query } from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const queryStr = "SELECT * FROM tipps";
    const results = await query({ query: queryStr, values: [] });

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (e) {
    console.error("Database query failed", e);
    return new Response(JSON.stringify({ error: "Database query failed" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
