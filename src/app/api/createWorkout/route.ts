import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Received data:", data);

    const requiredFields = [
      "username",
      "planName",
      "description",
      "trainingsplanMontag",
      "trainingsplanDienstag",
      "trainingsplanMittwoch",
      "trainingsplanDonnerstag",
      "trainingsplanFreitag",
      "trainingsplanSamstag",
      "trainingsplanSonntag",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        console.error(`Missing field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const result = await query({
      query: `
        INSERT INTO workouts 
        (created, name, beschreibung, eigenschaften, trainingsplanMontag, trainingsplanDienstag, trainingsplanMittwoch, trainingsplanDonnerstag, trainingsplanFreitag, trainingsplanSamstag, trainingsplanSonntag)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      values: [
        data.username as string, // This is the username
        data.planName as string, // Map planName to name
        data.description as string, // Map description to beschreibung
        data.eigenschaften || "", // Assuming eigenschaften can be optional, provide a default value
        data.trainingsplanMontag as string,
        data.trainingsplanDienstag as string,
        data.trainingsplanMittwoch as string,
        data.trainingsplanDonnerstag as string,
        data.trainingsplanFreitag as string,
        data.trainingsplanSamstag as string,
        data.trainingsplanSonntag as string,
      ],
    });

    return NextResponse.json(
      { message: "Workout created successfully", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating workout:", error);
    return NextResponse.json(
      { error: "Error creating workout" },
      { status: 500 }
    );
  }
}
