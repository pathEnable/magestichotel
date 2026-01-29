import Link from "next/link";

import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OffersPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32">
        <Reveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground">Offres & Forfaits</h1>
            <p className="mt-4 text-muted text-lg max-w-2xl">
              Des attentions pensées pour rendre votre séjour à Parakou encore plus doux : escapades, séjours affaires, weekends en famille.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">

              <Button variant="outline" asChild>
                <Link href="/rooms">Voir les chambres</Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal delayMs={0}>
            <Card className="bg-surface/60">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Séjour Confort</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted">Petit-déjeuner inclus, arrivée flexible, eau minérale offerte.</p>
                <p className="text-xs text-muted uppercase tracking-widest">Idéal pour 1 à 2 nuits</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={100}>
            <Card className="bg-surface/60">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business Essentiel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted">Wi‑Fi prioritaire, départ tardif selon disponibilité, assistance conciergerie.</p>
                <p className="text-xs text-muted uppercase tracking-widest">Pensé pour les voyages d&apos;affaires</p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delayMs={200}>
            <Card className="bg-surface/60">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Famille & Partage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted">Chambres spacieuses, recommandations locales, accueil chaleureux pour petits et grands.</p>
                <p className="text-xs text-muted uppercase tracking-widest">Pour un séjour serein</p>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal delayMs={150}>
          <div className="mt-14 border border-border bg-surface/60 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-serif text-foreground">Une offre sur mesure ?</h2>
                <p className="mt-2 text-muted max-w-2xl">
                  Dites-nous vos dates et vos préférences : nous vous répondons avec la meilleure proposition (tarif + services).
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">Nous écrire</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
