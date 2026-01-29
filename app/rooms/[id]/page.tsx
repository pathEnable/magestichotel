import { rooms } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export async function generateStaticParams() {
    return rooms.map((room) => ({
        id: room.id,
    }));
}

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const room = rooms.find((r) => r.id === id);

    if (!room) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Hero Image */}
            <div className="h-[60vh] relative">
                <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-linear-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 animate-slide-up">{room.name}</h1>
                        <p className="text-xl text-gray-200 flex items-center gap-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            {room.size}m² • {room.type} • Jusqu&apos;à {room.capacity} personnes
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <Reveal>
                        <Card className="bg-surface/60">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary">L&apos;Expérience</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted leading-relaxed text-lg">{room.description}</p>
                            </CardContent>
                        </Card>
                    </Reveal>

                    <Reveal delayMs={120}>
                        <Card className="bg-surface/60">
                            <CardHeader>
                                <CardTitle className="text-2xl text-primary">Équipements</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {room.amenities.map((amenity, index) => (
                                        <Badge key={index} variant="outline" className="uppercase tracking-wider text-[10px]">
                                            {amenity}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <Reveal delayMs={200}>
                        <Card className="sticky top-24 bg-surface/60">
                            <CardContent className="p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-muted">Tarif flexible à partir de</span>
                                    <span className="text-3xl font-serif text-primary">{room.price.toLocaleString("fr-FR")} F CFA</span>
                                </div>

                                <Button className="w-full mb-4">Vérifier les disponibilités</Button>

                                <p className="text-xs text-center text-muted">Meilleur tarif garanti. Petit-déjeuner inclus.</p>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
