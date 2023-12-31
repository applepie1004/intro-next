import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + "links", {
    cache: "no-store",
  });
  const links = await resp.json();

  return (
    <html lang="en" className="dark">
      <body>
        <div>
          <ul className="flex bg-sky-400 dark:bg-pink-500">
            <h1 className="text-2xl mx-5 my-5 text-white font-extrabold">
              <Link href={"/"}>조혜영 세미나</Link>
            </h1>
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  className="grid justify-between gap-x-6 content-center"
                >
                  <Link
                    href={link.url}
                    className="p-6 bg-sky-400 text-white hover:underline hover:decoration-solid dark:bg-pink-500"
                  >
                    📌 {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-5 p-5">
          <div className="border-solid border-2 mx-5 rounded-lg p-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
