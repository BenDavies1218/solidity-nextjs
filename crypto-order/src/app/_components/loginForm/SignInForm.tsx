import { api } from "~/trpc/server";
import LoginForm from "./LoginForm";

export default async function SignInForm() {
  const data = await api.post.hello({ text: "Ben" });

  return (
    <>
      {data ? (
        <LoginForm data={data.greeting} />
      ) : (
        <div>Failed to load. Please try again later.</div>
      )}
    </>
  );
}
