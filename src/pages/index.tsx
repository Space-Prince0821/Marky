import Head from "next/head";
// import { api } from "~/utils/api";


export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Marky</title>
        <meta name="description" content="Makry the marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        </div>
      </main>
    </>
  );
}
