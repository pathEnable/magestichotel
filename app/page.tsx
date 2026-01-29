import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";
import { rooms, hotelDetails } from "@/lib/data";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Home() {
  const featuredRooms = rooms.slice(0, 6);

  return (
    <>
      <Hero />

      <Reveal>
        <section className="bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-foreground font-medium">{hotelDetails.location}</span>
                <span className="hidden sm:inline">— {hotelDetails.address}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted">
                <span className="text-primary">✦</span>
                <span className="text-foreground font-medium">{hotelDetails.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">
                  Nous contacter →
                </Link>
                <Link href="/rooms" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">
                  Voir les chambres →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal animation="slide-left">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Nos Chambres</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
              <Link href="/rooms" className="hidden md:block text-sm font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">
                Voir toutes les chambres →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredRooms.map((room, index) => (
              <Reveal key={room.id} delayMs={index * 150} animation="slide">
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={100}>
            <div className="mt-12 text-center md:hidden">
              <Link href="/rooms" className="text-sm font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors">
                Voir toutes les chambres →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-surface text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-serif text-foreground mb-8">L&apos;Expérience {hotelDetails.name}</h2>
            <p className="text-muted text-lg leading-relaxed mb-12">{hotelDetails.description}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delayMs={0} animation="zoom">
              <Link href="/amenities" className="group block">
                <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover-lift">
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">✦</div>
                    <h3 className="text-foreground font-bold uppercase tracking-wider mb-2">Gastronomie</h3>
                    <p className="text-sm text-muted">Spécialités africaines et européennes.</p>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
            <Reveal delayMs={150} animation="zoom">
              <Link href="/amenities" className="group block">
                <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover-lift">
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">✦</div>
                    <h3 className="text-foreground font-bold uppercase tracking-wider mb-2">Bien-être</h3>
                    <p className="text-sm text-muted">Spa sérénité et soins sur mesure.</p>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
            <Reveal delayMs={300} animation="zoom">
              <Link href="/contact" className="group block">
                <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover-lift">
                  <CardContent className="p-8">
                    <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">✦</div>
                    <h3 className="text-foreground font-bold uppercase tracking-wider mb-2">Conciergerie</h3>
                    <p className="text-sm text-muted">Un service dédié à vos moindres désirs.</p>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
