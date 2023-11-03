async function hander(req: Request) {
  const url = req.url;
  // read json string
  const fileContent = await Deno.readTextFile("storage.json");
  // parse to json
  const json = JSON.parse(fileContent);
  console.log(json);

  // add the url to the logs array
  json.logs.push(url);
  // turn json back in to a string
  const newJson = JSON.stringify(json);
  // save string to the file
  Deno.writeTextFile("storage.json", newJson);

  return new Response("text files!");
}

Deno.serve(hander);
