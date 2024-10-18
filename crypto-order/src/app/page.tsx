import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex h-full items-center justify-center bg-white">
        <h1>Crypto Order</h1>
        <Link href={"/order"}>Order Page</Link>
      </main>
    </HydrateClient>
  );
}
