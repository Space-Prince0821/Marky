/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Head from "next/head";
import { type NextPage } from "next";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";

type SellItemForm = {
    name: string;
    description: string;
    price: string;
};


const ListAnItem: NextPage = () => {
    const createListing = api.listings.create.useMutation();
    const { register, handleSubmit } = useForm<SellItemForm>();

    const onSubmit = (formData: SellItemForm) => {
        createListing.mutateAsync({
            ...formData,
            price: parseFloat(formData.price)
        });
    };

  return (
    <>
      <Head>
        <title>List an Item</title>
        <meta name="description" content="Makry the marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1>List an Item</h1>
            
            <form 
                className="flex flex-col gap-3"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label 
                        htmlFor="name" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Item Name
                    </label>

                    <input 
                        id="name" 
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("name", { required: true })} 
                    />
                </div>

                <div>
                    <label 
                        htmlFor="description" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Item Description
                    </label>

                    <textarea 
                        id="description" 
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("description", { required: true })} />
                </div>

                <div>
                    <label 
                        htmlFor="price" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Item Price
                    </label>

                    <input 
                        id="price" 
                        type="number" 
                        step="0.01" 
                        className="bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("price", { min: 0, max: 1000, required: true })} />
                </div>
                
                <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
            </form>
        </div>
      </main>
    </>
  );
}

export default ListAnItem;