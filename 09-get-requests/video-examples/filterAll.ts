const file = await Deno.readTextFile("./users.json");
const users = JSON.parse(file);

async function handler(req: Request) {
  const url = new URL(req.url);
  const usersRoute = new URLPattern({ pathname: "/users" });

  // /users route matches
  if (usersRoute.test(url)) {
    const usersString = JSON.stringify(users);
    const countryParam = url.searchParams.get("country");
    // console.log(countryParam);

    if (countryParam !== null) {
      const filteredUsers = [];
      for (const user of users) {
        if (user.country === countryParam) {
          filteredUsers.push(user);
        }
      }

      return new Response(JSON.stringify(filteredUsers), {
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(usersString, {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
