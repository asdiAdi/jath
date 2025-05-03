"use client";

import { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import { getUrl } from "@aws-amplify/storage";
import { Button } from "@/components/ui/button";

Amplify.configure(outputs);

// const { bucketName, region } = amplifyOutputs.storage;

// const client = generateClient<Schema>();

export default function App() {
  const [linkToMrPack, setLinkToMrPack] = useState<any | null>(null);
  const [linkToMrPackServer, setLinkToMrPackServer] = useState<any | null>(
    null,
  );

  useEffect(() => {
    async function x() {
      const linkToStorageFile = await getUrl({
        path: "jath-world-1.0.0.mrpack",
        options: {
          bucket: "jath-world-bucket",
          expiresIn: 300,
        },
      });

      const linkToStorageFileServer = await getUrl({
        path: "jath-server-1.0.0.mrpack",
        options: {
          bucket: "jath-world-bucket",
          expiresIn: 300,
        },
      });

      setLinkToMrPack(linkToStorageFile);
      setLinkToMrPackServer(linkToStorageFileServer);
      console.log(linkToStorageFile);
    }
    void x();
  }, []);

  // return <Main/>
  return (
    <main>
      <div className="flex flex-row gap-4 m-2">
        <Button className="cursor-pointer" disabled={!linkToMrPack}>
          {linkToMrPack ? (
            <a
              href={linkToMrPack.url.toString()}
              target="_blank"
              rel="noreferrer"
            >
              Download Modpack
            </a>
          ) : (
            "Download Modpack"
          )}
        </Button>
        <Button className="cursor-pointer" disabled={!linkToMrPackServer}>
          {linkToMrPack ? (
            <a
              href={linkToMrPackServer.url.toString()}
              target="_blank"
              rel="noreferrer"
            >
              Download Modpack
            </a>
          ) : (
            "Download Modpack Server"
          )}
        </Button>
      </div>

      <h2 className="text-xl font-semibold">Rules</h2>
      <ul className="list-disc pl-4">
        <li>Survival</li>
        <li>Normal Difficulty</li>
        <li>PVP On</li>
        <li>Keep Inventory on Death</li>
        <li>Only 1 player required to skip night</li>
        <li>Maximum World size of 16k x 16k blocks</li>
      </ul>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold">Command Block Cheats</h2>
      <ul className="list-disc pl-4">
        <li>Teleport to player or bases</li>
        <li>Fly when building structures</li>
      </ul>

      <hr className="my-4" />
    </main>
  );
}

/*
function Main() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}
 */
