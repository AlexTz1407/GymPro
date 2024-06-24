import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const queryStr = "SELECT * FROM workouts";
    const results = await query({ query: queryStr, values: [] });

    return new NextResponse(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ error: "Database query failed" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "Workout ID is required" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    const queryStr = "DELETE FROM workouts WHERE id = ?";
    const results = await query({ query: queryStr, values: [id] });

    return new NextResponse(
      JSON.stringify({ message: "Workout deleted successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ error: "Database query failed" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
