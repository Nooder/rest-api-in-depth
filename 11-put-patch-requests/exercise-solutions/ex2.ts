async function handler(req: Request) {
  const url = new URL(req.url);
  const replaceUserRoute = new URLPattern({ pathname: "/user/:id" });

  if (replaceUserRoute.test(url) && req.method === "PUT") {
    // replace a user
    const userBody = await req.json();

    // data validation
    // email required:
    if (!Object.hasOwn(userBody, "email")) {
      const error = { error: "Email field is required" };
      return new Response(JSON.stringify(error), { status: 400 });
    }
    // email should be valid 'has a @'
    if (!userBody["email"].includes("@")) {
      const error = { error: "Email field needs to be a valid email" };
      return new Response(JSON.stringify(error), { status: 400 });
    }

    const userID = userBody["id"];
    const users = JSON.parse(await Deno.readTextFile("users.json"));
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userID) {
        users[i] = userBody;
        await Deno.writeTextFile("users.json", JSON.stringify(users));
        return new Response(JSON.stringify(users[i]), { status: 200 });
      }
    }
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
