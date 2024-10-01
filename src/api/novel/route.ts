

async function GET(page: number, pageSize: number): Promise<object> {
  const url = `https://anime-manga-and-novels-api.p.rapidapi.com/novels?pageSize=${pageSize}&page=${page}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "23fb80631emshbe5c515dc2261eap12d1a7jsn422289619dac",
      "x-rapidapi-host": "anime-manga-and-novels-api.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

export { GET };
