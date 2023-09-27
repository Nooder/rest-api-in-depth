async function handler(req: Request) {
  const url = new URL(req.url);
  // - http://localhost:8000/profile/:username
  const profilePattern = new URLPattern({
    pathname: "/profile/:username",
  });
  // - http://localhost:8000/posts/:postId/:userId
  const postsPattern = new URLPattern({
    pathname: "/posts/:postId/:userId",
  });

  if (profilePattern.test(url)) {
    const matches = profilePattern.exec(url);
    const username = matches?.pathname.groups.username;
    return new Response(`Hello, ${username}!`);
  } else if (postsPattern.test(url)) {
    const matches = postsPattern.exec(url);
    const userId = matches?.pathname.groups.userId;
    const postId = matches?.pathname.groups.postId;
    return new Response(`All Posts for: ${userId} and ${postId}`);
  }

  return new Response("Not Found", { status: 404 });
}

Deno.serve(handler);
