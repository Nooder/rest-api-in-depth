async function handler(req: Request) {
  const url = req.url;
  const method = req.method;

  const json = { url, method };
  const jsonString = JSON.stringify(json);
  console.log(jsonString);

  return new Response(jsonString, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

Deno.serve({ port: 9000 }, handler);
