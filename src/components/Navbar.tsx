import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export function Navbar() {
    const user = useUser();

    return (
        <nav className="bg-slate-200 border-gray-200 ml-4 mr-4 mt-4 rounded-full shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Marky</span>
                </a>

                <div className="md:w-auto">
                    <ul className="font-medium flex flex-row items-center space-x-6">
                        <li>
                            <a href="#" className="hover:text-slate-400" aria-current="page">Home</a>
                        </li>
                        { user.isSignedIn ?
                            '' :
                            <li className="hover:text-slate-400">
                                <SignInButton>Sign In</SignInButton>
                            </li>
                        }
                        <li>
                            <UserButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}