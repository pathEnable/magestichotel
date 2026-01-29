"use client";

import Link from "next/link";
import { MapPin, Menu, Moon, Sun } from "lucide-react";
import * as React from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { hotelDetails } from "@/lib/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isLight, setIsLight] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const navItemBase =
        "relative inline-flex items-center justify-center h-9 text-[13px] font-medium tracking-wide leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md px-2 active:scale-[0.98] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:origin-left after:scale-x-0 after:transition-transform after:duration-300";

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    React.useEffect(() => {
        const root = document.documentElement;
        setIsLight(root.classList.contains("light"));

        const onScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const nextIsLight = !root.classList.contains("light");
        if (nextIsLight) root.classList.add("light");
        else root.classList.remove("light");
        setIsLight(nextIsLight);

        try {
            localStorage.setItem("theme", nextIsLight ? "light" : "dark");
        } catch {
            // ignore
        }
    };

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-[height] duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        "text-xl md:text-2xl font-serif tracking-[0.2em] uppercase hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 rounded-md py-1 flex items-center gap-2",
                        isScrolled ? "text-primary" : "text-white"
                    )}
                >
                    <span>Majestic</span>
                    <span className={cn("font-light", isScrolled ? "text-foreground" : "text-white/80")}>Hotel</span>
                </Link>

                {/* Navigation */}
                <div className="hidden lg:flex items-center gap-5">
                    <Link
                        href="/"
                        className={cn(
                            navItemBase,
                            isActive("/")
                                ? "text-primary after:scale-x-100"
                                : (isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"),
                            "active:after:scale-x-100"
                        )}
                    >
                        ACCUEIL
                    </Link>
                    <Link
                        href="/rooms"
                        className={cn(
                            navItemBase,
                            isActive("/rooms")
                                ? "text-primary after:scale-x-100"
                                : (isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white")
                        )}
                    >
                        NOS CHAMBRES
                    </Link>
                    <Link
                        href="/offers"
                        className={cn(
                            navItemBase,
                            isActive("/offers")
                                ? "text-primary after:scale-x-100"
                                : (isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white")
                        )}
                    >
                        OFFRES/SERVICES
                    </Link>

                    <Link
                        href="/amenities"
                        className={cn(
                            navItemBase,
                            isActive("/amenities")
                                ? "text-primary after:scale-x-100"
                                : (isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white")
                        )}
                    >
                        RESTAURATION
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            navItemBase,
                            isActive("/about")
                                ? "text-primary after:scale-x-100"
                                : (isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white")
                        )}
                    >
                        À PROPOS
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="lg:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Ouvrir le menu"
                                className={cn(isScrolled ? "text-foreground" : "text-white")}
                            >
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="font-serif tracking-widest uppercase">Majestic Hotel</SheetTitle>
                            </SheetHeader>
                            <div className="mt-6 flex flex-col gap-3">
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/" onClick={closeMobileMenu}>
                                        Accueil
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/rooms") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/rooms" onClick={closeMobileMenu}>
                                        Chambres
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/offers") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/offers" onClick={closeMobileMenu}>
                                        Offres
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/services") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/services" onClick={closeMobileMenu}>
                                        Services
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/amenities") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/amenities" onClick={closeMobileMenu}>
                                        Restaurant & Détente
                                    </Link>
                                </Button>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "justify-start focus-visible:ring-2 focus-visible:ring-primary/30",
                                        isActive("/about") && "bg-surface text-primary"
                                    )}
                                    asChild
                                >
                                    <Link href="/about" onClick={closeMobileMenu}>
                                        À propos
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="justify-start" onClick={toggleTheme}>
                                    {isLight ? (
                                        <span className="flex items-center gap-2">
                                            <Moon className="h-4 w-4" /> Mode sombre
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Sun className="h-4 w-4" /> Mode clair
                                        </span>
                                    )}
                                </Button>
                                <div className="pt-4">
                                    <Button className="w-full" asChild>
                                        <Link href="/contact" onClick={closeMobileMenu}>
                                            Contact / Réserver
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-2">

                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={isLight ? "Activer le mode sombre" : "Activer le mode clair"}
                        onClick={toggleTheme}
                        className={cn(
                            "focus-visible:ring-2 focus-visible:ring-primary/30 active:scale-[0.98]",
                            isScrolled ? "text-foreground" : "text-white hover:bg-white/10"
                        )}
                    >
                        {isLight ? <Moon /> : <Sun />}
                    </Button>
                    <Button asChild>
                        <Link href="/contact" className="shimmer">Contact / Réserver</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
