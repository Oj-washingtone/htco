import { Inter } from "next/font/google";
import "./globals.css";
import "boxicons/css/boxicons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


// res import
import "@/res/css/bootstrap.min.css";
import "@/res/css/animate.min.css";
import "@/res/css/magnific-popup.css";
import "@/res/fontawesome/css/all.min.css";
import "@/res/font-flaticon/flaticon.css";
import "@/res/css/dripicons.css";
import "@/res/css/slick.css";
import "@/res/css/meanmenu.css";
import "@/res/css/default.css";
import "@/res/css/style.css";
import "@/res/css/responsive.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HTCO",
  description: "HCTO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
