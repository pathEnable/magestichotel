"use client";

import Link from "next/link";
import * as React from "react";

import { hotelDetails } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

export default function Footer() {
    const [email, setEmail] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [status, setStatus] = React.useState<null | { type: "success" | "error"; message: string }>(null);

    const onSubmitNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = (await res.json()) as { ok?: boolean; error?: string };

            if (!res.ok) {
                setStatus({ type: "error", message: data.error || "Erreur" });
                return;
            }

            setEmail("");
            setStatus({ type: "success", message: "Inscription enregistrée." });
        } catch {
            setStatus({ type: "error", message: "Erreur réseau." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="bg-surface border-t border-border mt-20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif text-primary tracking-widest uppercase mb-6">
                            Majestic <span className="text-foreground">Hotel</span>
                        </h3>
                        <p className="text-muted leading-relaxed max-w-sm">
                            {hotelDetails.address}, {hotelDetails.location}. {hotelDetails.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link href="/rooms" className="text-muted hover:text-primary transition-colors">Chambres</Link></li>
                            <li><Link href="/offers" className="text-muted hover:text-primary transition-colors">Offres</Link></li>
                            <li><Link href="/services" className="text-muted hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/amenities" className="text-muted hover:text-primary transition-colors">Restaurant & Détente</Link></li>
                            <li><Link href="/about" className="text-muted hover:text-primary transition-colors">À Propos</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-foreground">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-muted">{hotelDetails.email}</li>
                            <li className="text-muted">{hotelDetails.phone}</li>
                            <li className="text-muted flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{hotelDetails.address}</li>
                        </ul>

                        <div className="mt-10">
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-foreground">Newsletter</h4>
                            <p className="text-muted text-sm leading-relaxed">
                                Recevez nos offres et nouveautés — 1 message de temps en temps, sans spam.
                            </p>
                            <form className="mt-4 flex gap-2" onSubmit={onSubmitNewsletter}>
                                <Input
                                    type="email"
                                    placeholder="Votre email"
                                    aria-label="Votre email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <Button type="submit" className="shrink-0" disabled={isSubmitting}>
                                    S&apos;inscrire
                                </Button>
                            </form>

                            {status && (
                                <p className={status.type === "success" ? "mt-3 text-xs text-primary" : "mt-3 text-xs text-red-500"}>
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-xs text-muted uppercase tracking-wider">
                    <p>© 2025 Majestic Hotel. Tous droits réservés.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-foreground">Mentions Légales</a>
                        <a href="#" className="hover:text-foreground">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
