"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
                style={{
                    backgroundImage: 'url("/magestic1.png")',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wide leading-tight drop-shadow-lg">
                    Majestic Hotel
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10 font-light tracking-wider opacity-0 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    Charme, confort et tradition au cœur de Parakou
                </p>
                <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" asChild>
                            <Link href="/rooms">Découvrir nos Chambres</Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white"
                            asChild
                        >
                            <Link href="/contact">Contacter</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
