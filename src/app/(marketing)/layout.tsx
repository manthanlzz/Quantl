'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Footer, Navbar } from "@/components";

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
        } as any); // workaround for TS errors

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <div id="home" className="absolute inset-0 bg-black h-full z-[-1]" />

            <Navbar />
            <main className="mt-20 mx-auto w-full z-0 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout;
