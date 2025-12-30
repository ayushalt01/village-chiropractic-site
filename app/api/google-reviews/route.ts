import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY; // Server-side only, no NEXT_PUBLIC_ prefix

  if (!placeId || !apiKey) {
    return NextResponse.json(
      { error: "Google Place ID or API Key not configured" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: `Google Places API error: ${data.status}` },
        { status: 400 }
      );
    }

    return NextResponse.json({
      name: data.result.name,
      rating: data.result.rating,
      totalRatings: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

