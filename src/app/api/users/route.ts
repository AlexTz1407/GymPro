import { query } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/types/user";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Missing username or password" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // Check if the username exists
    const userResults = (await query({
      query: "SELECT * FROM users WHERE username = ?",
      values: [username],
    })) as User[];

    if (userResults.length > 0) {
      const user = userResults[0];
      // Check if the password matches
      if (user.password === password) {
        return new NextResponse(
          JSON.stringify({ success: true, message: "Login successful" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 200,
          }
        );
      } else {
        return new NextResponse(
          JSON.stringify({ error: "Incorrect password" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 401,
          }
        );
      }
    } else {
      // Create a new account
      const createResult = (await query({
        query: "INSERT INTO users (username, password) VALUES (?, ?)",
        values: [username, password],
      })) as unknown as User[];

      return new NextResponse(JSON.stringify({ success: true, createResult }), {
        headers: { "Content-Type": "application/json" },
        status: 201,
      });
    }
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
