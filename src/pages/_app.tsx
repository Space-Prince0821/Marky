import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'; 
import { Navbar } from "~/components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return ( 
    <ClerkProvider {...pageProps}>
      <div className="text-black">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
