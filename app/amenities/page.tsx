import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function AmenitiesPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="relative h-[50vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop")' }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Restaurant & Détente</h1>
                    <p className="text-xl text-gray-200 tracking-wider">La douceur de vivre au Nord</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 space-y-14">
                {/* Restaurant Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <Reveal animation="slide-left" className="order-2 md:order-1">
                        <Card className="bg-surface/60">
                            <CardHeader>
                                <CardTitle className="text-3xl md:text-4xl text-primary">Les Saveurs du Nord</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted text-lg leading-relaxed">
                                    Découvrez la richesse culinaire de Parakou. Notre restaurant propose une restauration africaine et européenne : spécialités locales (igname pilée, fromage peulh, grillades) et plats classiques revisités.
                                    Un cadre convivial et ventilé pour vos repas d&apos;affaires ou de famille.
                                </p>
                                <ul className="space-y-2 text-muted">
                                    <li>✦ Petit-déjeuner continental & local</li>
                                    <li>✦ Buffet déjeuner le dimanche</li>
                                    <li>✦ Service traiteur disponible</li>
                                </ul>
                                <Button variant="outline" className="self-start">
                                    Voir le Menu
                                </Button>
                            </CardContent>
                        </Card>
                    </Reveal>
                    <Reveal animation="slide-right" className="order-1 md:order-2">
                        <div className="relative h-[400px] bg-surface rounded-lg overflow-hidden border border-border">
                            <Image
                                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop"
                                alt="Restaurant Parakou"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                </section>

                {/* Pool/Garden Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <Reveal animation="slide-left">
                        <div className="relative h-[400px] bg-surface rounded-lg overflow-hidden border border-border">
                            <Image
                                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
                                alt="Piscine"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </Reveal>
                    <Reveal animation="slide-right">
                        <Card className="bg-surface/60">
                            <CardHeader>
                                <CardTitle className="text-3xl md:text-4xl text-primary">Piscine & Jardin</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <p className="text-muted text-lg leading-relaxed">
                                    Après une journée sous le soleil de Parakou, rafraîchissez-vous dans notre piscine cristalline entourée d&apos;un jardin luxuriant.
                                    Profitez de notre bar extérieur pour siroter un cocktail ou un jus de fruits frais locaux.
                                </p>
                                <ul className="space-y-2 text-muted">
                                    <li>✦ Piscine ouverte de 8h à 22h</li>
                                    <li>✦ Bar piscine</li>
                                    <li>✦ Espace détente ombragé</li>
                                </ul>
                                <Button variant="outline" className="self-start">
                                    Découvrir
                                </Button>
                            </CardContent>
                        </Card>
                    </Reveal>
                </section>
            </div>
        </div>
    );
}
