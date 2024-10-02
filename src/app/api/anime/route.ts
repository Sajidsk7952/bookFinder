import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Extract query parameters for pageSize and page
  const { searchParams } = new URL(req.url);
  const pageSize = searchParams.get("pageSize") || '10';  // Default value of 10
  const page = searchParams.get("page") || '1';  // Default value of 1

  const url = `https://anime-manga-and-novels-api.p.rapidapi.com/anime?pageSize=${pageSize}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "23fb80631emshbe5c515dc2261eap12d1a7jsn422289619dac",
      "x-rapidapi-host": "anime-manga-and-novels-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 }
    );
  }
}
``
