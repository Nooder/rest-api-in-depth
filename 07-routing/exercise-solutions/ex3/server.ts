async function handler(req: Request) {
  const url = new URL(req.url);
  // http://localhost:8000/cutemonkey.jpeg
  const imagePattern = new URLPattern({
    pathname: "/:filename(.+\\.jpeg)",
  });

  if (imagePattern.test(url)) {
    const matches = imagePattern.exec(url);
    const filename = matches?.pathname.groups.filename;
    console.log(filename);
    if (!filename) return new Response("File not found", { status: 404 });
    try {
      const imageFile = await Deno.open(filename);
      return new Response(imageFile.readable);
    } catch (e) {
      console.log("Error:", e.message);
      return new Response("Not Found", { status: 404 });
    }
  }

  const htmlFile = await Deno.open("./home.html");
  return new Response(htmlFile.readable);
}

Deno.serve(handler);
