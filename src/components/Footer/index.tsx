import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-4 p-4 text-foreground flex flex-col items-center">
            <div className="flex items-center space-x-2">
                <a
                    href="https://github.com/benk-techworld"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="text-2xl" />
                </a>
            </div>
            <p className="font-light text-sm mt-3">&copy; {new Date().getFullYear()} All rights reserved ~ Arafet Ben Kilani</p>
        </footer>
    );
}