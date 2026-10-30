// src/layouts/RootLayout.jsx
import { useState, useEffect } from 'react';
import { Navbar } from '@sections/home/Navbar';
import { Footer } from '@sections/home/Footer';
import { Hero } from '@/sections/home/Hero';
import { Pillars } from '@/sections/home/Pillars';
import { FeaturedProjects } from '@/sections/home/FeaturedProjects';
import ResumePage from '@/pages/resume';
import ProjectsPage from '@/pages/projects';
import ContactPage from '@/pages/contact';

export function RootLayout() {
    const [activePage, setPage] = useState('home');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activePage]);

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-orange-200 selection:text-orange-900">
            <style>{`
        :root { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

            <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar activePage={activePage} setPage={setPage} />

                <main className="flex-grow w-full">
                    {activePage === 'home' && (
                        <>
                            <div className="max-w-6xl mx-auto px-6">
                                <Hero setPage={setPage} />
                            </div>
                            <Pillars setPage={setPage} />
                            <FeaturedProjects setPage={setPage} />
                        </>
                    )}
                    {activePage === 'resume' && <ResumePage />}
                    {activePage === 'projects' && <ProjectsPage />}
                    {activePage === 'contact' && <ContactPage />}
                </main>

                <Footer setPage={setPage} />
            </div>
        </div>
    );
}
