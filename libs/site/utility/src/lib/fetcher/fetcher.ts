export async function fetcher({
  body,
  method = "GET",
  url,
}: {
  body?: Record<string, unknown>;
  method: "GET" | "POST";
  url: string;
}) {
  const response = await fetch(url, {
    method,
    headers: new Headers({ "Content-Type": "application/json" }),
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    console.log(response);
    const error = new Error("An error occurred while performing this request.");

    throw error;
  }

  return response.json();
}
