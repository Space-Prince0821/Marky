import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import Head from "next/head";
// import { api } from "~/utils/api";


export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  return (
    <>
      <Head>
        <title>Marky</title>
        <meta name="description" content="Makry the marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {user.isSignedIn ? 
            <SignOutButton>Sign Out</SignOutButton> :
            <SignInButton>Sign In</SignInButton>
          }
        </div>
      </main>
    </>
  );
}
