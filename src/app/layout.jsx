import "@/styles.css";

import { Header } from "@/components/header";

import { Rubik } from "next/font/google";

import { store } from "@/stores";
import {fetchUser} from "@/stores/user-store";
import {StoreProvider} from "@/stores/storeProvider";

const BodyFont = Rubik({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
    await store.dispatch(fetchUser())
  return (
    <html>
      <body className={BodyFont.className}>
            <StoreProvider>
                <Header />
                <main>{children}</main>
            </StoreProvider>
      </body>
    </html>
  );
}
