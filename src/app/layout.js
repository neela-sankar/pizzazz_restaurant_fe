import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Layout from "@/components/Layout";

const inter = Roboto({ subsets: ["latin"], weight:'400' });

export const metadata = {
  title: "Pizzazz Express - Best Restraurant in Town",
  description: "Best pizza shop in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
        {children}
        </Layout>
        </body>
    </html>
  );
}
