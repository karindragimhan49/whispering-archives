import "./globals.css";

// We don't need to import fonts here anymore since they are in globals.css

export const metadata = {
  title: "Whispering Archives // Secure Access",
  description: "Unauthorized access is strictly prohibited.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}