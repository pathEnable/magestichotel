import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

export default function RoomsPage() {
    return (
        <div className="bg-background min-h-screen pb-24">
            <div className="pt-24 md:pt-[120px] mb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <Reveal>
                        <Card className="bg-surface/60">
                            <CardHeader className="text-center">
                                <Reveal animation="slide-left">
                                    <CardTitle className="text-4xl md:text-5xl">Nos Chambres</CardTitle>
                                </Reveal>
                                <CardDescription className="text-base md:text-lg max-w-2xl mx-auto">
                                    Des espaces pensés pour le repos et l&apos;inspiration, alliant confort moderne et accueil chaleureux à Parakou.
                                </CardDescription>
                            </CardHeader>
                            <CardContent />
                        </Card>
                    </Reveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {rooms.map((room, index) => (
                        <Reveal key={room.id} delayMs={index * 150} animation="slide">
                            <RoomCard room={room} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
