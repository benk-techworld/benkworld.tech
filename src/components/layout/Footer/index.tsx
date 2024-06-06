const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col items-center p-4">
            <p className="text-foreground font-light text-sm mt-3">&copy; {new Date().getFullYear()} All rights reserved ~ Arafet Ben Kilani</p>
        </footer>
    );
}

export default Footer;