import Image from "next/image";
import Link from "next/link";

import { Room } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface RoomCardProps {
    room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
    return (
        <Link href={`/rooms/${room.id}`} className="group block">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover-lift">
                <div className="relative aspect-4/3 image-zoom-container">
                    <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                        <Badge variant="primary">{room.size} m²</Badge>
                    </div>
                </div>

                <CardContent className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                            {room.name}
                        </h3>
                        <span className="text-primary font-semibold">
                            {room.price.toLocaleString("fr-FR")} F CFA <span className="text-xs text-muted font-normal">/nuit</span>
                        </span>
                    </div>
                    <p className="text-sm text-muted line-clamp-2 leading-relaxed">{room.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {room.amenities.slice(0, 2).map((amenity, i) => (
                            <Badge key={i} variant="outline" className="text-[10px] uppercase tracking-wider">
                                {amenity}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
