export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-4 p-4 text-foreground flex flex-col items-center">
            <p className="font-light text-sm mt-3">&copy; {new Date().getFullYear()} All rights reserved ~ Arafet Ben Kilani</p>
        </footer>
    );
}