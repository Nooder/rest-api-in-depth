async function handler(req: Request) {
  const url = new URL(req.url);
  const uploadRoute = new URLPattern({ pathname: "/upload" });

  if (req.method === "POST" && uploadRoute.test(url)) {
    // save the file
    const body = await req.formData();
    console.log(body);
    const file = body.get("fileUpload");
    if (file instanceof File) {
      await Deno.writeFile(
        `uploads/${file.name}`,
        new Uint8Array(await file.arrayBuffer())
      );
      return new Response(null, { status: 201 });
    }
  }

  return new Response(null, { status: 404 });
}

Deno.serve(handler);
