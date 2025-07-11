export default function AuthLayout({ children }) {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black font-mono">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/image-1.jpg" // Make sure this image is in public/images
                    alt="Secure Archive Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Content will be rendered here */}
            {children}
        </div>
    );
}