import { api } from "~/trpc/server";

export default async function Page() {
  const hello = await api.post.hello({ text: "from tRPC" });
  return (
    <>
      <h1>Hello from the Order Page</h1>
      <h3>{hello.greeting}</h3>
    </>
  );
}
