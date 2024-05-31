import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 p-4 bg-[rgb(15, 16, 17)] text-white flex flex-col items-center">
            <div className="flex items-center space-x-2">
                <FaGithub className="text-2xl" />
                <a
                    href="https://github.com/your-github-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    GitHub
                </a>
            </div>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All rights reserved - Ben Kilani Arafet</p>
        </footer>
    );
}