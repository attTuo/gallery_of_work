import HeaderComponent from "@/ui/header";
import FooterComponent from "@/ui/footer";
import "./global.css";

export const metadata = {
  title: 'Gallery Of Work',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="p-2">

        <HeaderComponent />
        {children}
        <FooterComponent />
      
      </body>
    </html>
  )
}
