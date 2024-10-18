import Link from "next/link";
import { Button } from "~/components/ui/button";

import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex h-full items-center justify-center bg-blue-500">
        <h1>Crypto Order</h1>
        <Link href={"/signin"}>
          <Button>Sign In</Button>
        </Link>
        <Link href={"/signup"}>
          <Button>Create an Account</Button>
        </Link>
      </main>
    </HydrateClient>
  );
}
