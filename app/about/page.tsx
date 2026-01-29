import { hotelDetails } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen py-24 px-6">
            <Reveal>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <Reveal animation="slide-left">
                            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/magestic1.png"
                                    alt="Intérieur du Majestic Hotel"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Reveal>

                        {/* Text Section */}
                        <Reveal animation="slide-right">
                            <div className="space-y-8">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-serif mb-4">Notre Histoire</h1>
                                    <div className="h-1 w-24 bg-primary" />
                                </div>

                                <div className="space-y-6 text-lg text-muted leading-relaxed">
                                    <p>
                                        Bienvenue au <span className="font-semibold text-foreground">{hotelDetails.name}</span>, une véritable institution à Parakou.
                                        Né de la volonté de créer un pont entre la richesse de la culture béninoise et le confort des standards internationaux,
                                        notre établissement est bien plus qu&apos;un simple hôtel.
                                    </p>
                                    <p>
                                        Dès votre arrivée, vous serez séduit par notre architecture unique qui marie avec élégance le fer forgé artisanal
                                        et des tableaux africains vibrants qui ornent nos couloirs, racontant chacun une histoire de notre patrimoine.
                                    </p>
                                    <p>
                                        Situé idéalement à {hotelDetails.address}, nous offrons un havre de paix au cœur de la ville.
                                        Que ce soit pour savourer un plat local revisité dans notre restaurant ou vous détendre dans nos chambres spacieuses,
                                        notre équipe dévouée est là pour rendre votre séjour au Bénin inoubliable.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
