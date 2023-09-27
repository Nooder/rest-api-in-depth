async function handler(req: Request) {
  const url = new URL(req.url);
  // - http://localhost:8000/register -> "Registered!"
  // - http://localhost:8000/login -> "Logged in!"
  // - http://localhost:8000/logout -> "Logged out!"
  // - Every other route -> "Not Found"
  const registerPattern = new URLPattern({
    pathname: "/register",
  });
  const loginPattern = new URLPattern({
    pathname: "/login",
  });
  const logoutPattern = new URLPattern({
    pathname: "/logout",
  });

  if (registerPattern.test(url)) {
    return new Response("Registered!");
  } else if (loginPattern.test(url)) {
    return new Response("Logged In!");
  } else if (logoutPattern.test(url)) {
    return new Response("Logged out!");
  }

  return new Response("Not Found", { status: 404 });
}

Deno.serve(handler);
