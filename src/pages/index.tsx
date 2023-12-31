import Head from "next/head";
import { type NextPage } from "next";
import { api } from "~/utils/api";
import { type Listing } from "@prisma/client";

function Card({ listing }: {listing: Listing}) {
  return (
    <div className="h-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {listing.name}
                </h5>
            </a>
            <p className="h-24 mb-3 font-normal text-gray-700 dark:text-gray-400">
              {listing.description}
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
  );
}


const Home: NextPage = () => {
  const listings = api.listings.list.useQuery();

  return (
    <>
      <Head>
        <title>Marky</title>
        <meta name="description" content="Makry the marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center pt-10">
        <h1 className="text-4xl font-bold">Items for sale</h1>
        <div className="container grid grid-cols-3 flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {listings?.data?.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;