import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Shiva-Chaurasiya-01", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shiva-chaurasiya-29632436b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shivachaurasiya.9298@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Shiva Chaurasiya. Built with{" "}
            <Heart className="h-4 w-4 text-primary fill-current" /> and code.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
