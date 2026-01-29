"use client";

import { hotelDetails } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Reveal from "@/components/Reveal";
import { MapPin } from "lucide-react";
import * as React from "react";

export default function ContactPage() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [status, setStatus] = React.useState<null | { type: "success" | "error"; message: string }>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            const data = (await res.json()) as { ok?: boolean; error?: string };

            if (!res.ok) {
                setStatus({ type: "error", message: data.error || "Erreur" });
                return;
            }

            setName("");
            setEmail("");
            setMessage("");
            setStatus({ type: "success", message: "Message envoyé." });
        } catch {
            setStatus({ type: "error", message: "Erreur réseau." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-background min-h-screen py-24 px-6">
            <Reveal>
                <div className="max-w-xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <Reveal animation="zoom">
                                <CardTitle className="text-3xl">Contactez-nous</CardTitle>
                            </Reveal>
                            <p className="text-sm text-muted">{hotelDetails.phone} · {hotelDetails.email}</p>
                            <p className="mt-2 text-sm text-muted flex items-center justify-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{hotelDetails.address}</span>
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6" onSubmit={onSubmit}>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted">Nom</label>
                                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={isSubmitting} />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted">Email</label>
                                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isSubmitting} />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-muted">Message</label>
                                    <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} disabled={isSubmitting} />
                                </div>

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    Envoyer
                                </Button>

                                {status && (
                                    <p className={status.type === "success" ? "text-sm text-primary text-center" : "text-sm text-red-500 text-center"}>
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Reveal>
        </div>
    );
}
