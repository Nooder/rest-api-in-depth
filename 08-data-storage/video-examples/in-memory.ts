interface logsStorage {
  logs: string[];
}

const objectStorage: logsStorage = {
  logs: [],
};
const mapStorage = new Map();
mapStorage.set("logs", []);

function handler(req: Request) {
  const url = req.url;
  objectStorage.logs.push(url);
  //   console.log(objectStorage);

  mapStorage.set("logs", [...mapStorage.get("logs"), url]);
  console.log(mapStorage);

  return new Response("hello");
}

Deno.serve(handler);
