// client/src/app/layout.js
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = { /* ... */ };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster 
            position="bottom-right"
            toastOptions={{
                style: {
                    background: '#1a1a1a',
                    color: '#dc2626',
                    border: '1px solid #dc2626',
                    fontFamily: 'Share Tech Mono, monospace'
                },
            }}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}