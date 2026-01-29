import Link from "next/link";

import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32">
        <Reveal>
          <div className="mb-12">
            <Reveal animation="slide-left">
              <h1 className="text-4xl md:text-5xl font-serif text-foreground">Services</h1>
            </Reveal>
            <p className="mt-4 text-muted text-lg max-w-2xl">
              Au quotidien, notre équipe met l&apos;accent sur l&apos;attention et la simplicité : un accueil fluide, des conseils, et un confort constant.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal delayMs={0}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Conciergerie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Recommandations, itinéraires, demandes spéciales et organisation de vos besoins.</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={150}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Transferts & Accueil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Accueil personnalisé et assistance pour vos déplacements (sur demande).</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={300}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Room Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Des options simples et savoureuses pour profiter de votre chambre en toute tranquillité.</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={0}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Chambres climatisées & ventilées</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Un confort constant, de jour comme de nuit, pour un séjour agréable à Parakou.</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={150}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Wi‑Fi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Wi‑Fi gratuit pour travailler, communiquer et se détendre.</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={300}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Restaurant & Détente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted">Découvrez notre univers gourmand et nos espaces de relaxation.</p>
                <Button variant="outline" asChild>
                  <Link href="/amenities">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={450}>
            <Card className="bg-surface/60 hover-lift">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Assistance 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Une présence attentive pour répondre à l&apos;essentiel, à tout moment.</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal delayMs={150}>
          <div className="mt-14 border border-border bg-surface/60 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-serif text-foreground">Besoin d&apos;un service particulier ?</h2>
                <p className="mt-2 text-muted max-w-2xl">Écrivez-nous et nous organiserons la meilleure solution possible.</p>
              </div>
              <Button asChild>
                <Link href="/contact">Contacter</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
