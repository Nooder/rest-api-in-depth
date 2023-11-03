interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
}

const file = await Deno.readTextFile("./users.json");
const users: User[] = JSON.parse(file);

async function handler(req: Request) {
  const url = new URL(req.url);
  const userPattern = new URLPattern({
    pathname: "/user/:id",
  });

  //looking for a specific user id: /user/5
  if (userPattern.test(url)) {
    const match = userPattern.exec(url);
    // console.log(match);
    // console.log(match?.pathname.groups.id);
    const idToLookFor = Number(match?.pathname.groups.id);
    const matchingUser = users.find((user) => user.id === idToLookFor);
    // console.log(matchingUser);
    return new Response(JSON.stringify(matchingUser), {
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
