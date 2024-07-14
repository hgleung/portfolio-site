const Footer = () => {
    return (
        <footer>
            <div style={{ position: "fixed", left: 0, bottom: 0, width:"100%"}} className="container mx-auto px-6 pt-10 pb-6">
                <p className="flex items-center gap-20">
                    <a href="mailto:hleung.cs@gmail.com">Email: hleung.cs@gmail.com</a>
                    <a href="https://github.com/hgleung" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/harrygleung/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;