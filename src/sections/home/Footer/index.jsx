import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalData } from "@data/personal.js";

export const Footer = ({ setPage }) => {
    return (
        <footer className="py-12 border-t-2 border-zinc-900 bg-white mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 items-center">
                <div className="flex gap-6 text-sm font-bold uppercase tracking-wider text-zinc-900">
                    {['Resume', 'Projects', 'Contact'].map(item => (
                        <button
                            key={item}
                            onClick={() => setPage(item.toLowerCase())}
                            className="hover:text-orange-600 transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-zinc-900 hover:text-orange-600 cursor-pointer transition-colors" />
                    </a>
                    <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 text-zinc-900 hover:text-orange-600 cursor-pointer transition-colors" />
                    </a>
                    <a href={`mailto:aman@satorie.app`}>
                        <Mail className="w-5 h-5 text-zinc-900 hover:text-orange-600 cursor-pointer transition-colors" />
                    </a>
                </div>
            </div>
            <div className="text-center mt-8 text-[10px] font-mono text-zinc-400 uppercase">
                System Status: Operational // 2026
            </div>
        </footer>
    );
};
