import { SITE_DATA } from "@data";
import { Button } from "@components/common/Button/Button.js";
import { Card } from "@components/common/Card/Card.js";
import { Badge } from "@components/common/Badge/Badge.js";
import { Play, ExternalLink, Code } from "lucide-react";

export const FeaturedProjects = ({ setPage }) => {
    return (
        <section className="py-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-orange-600 rounded-full animate-ping"></span>
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">// PRODUCTION ARCHITECTURES & LIVE TELEMETRY</p>
                    </div>
                    <h2 className="text-3xl font-black text-zinc-900 uppercase">Featured Systems</h2>
                </div>

                <div className="space-y-20">
                    {SITE_DATA.projects.map((project) => (
                        <div key={project.id} className="grid md:grid-cols-12 gap-8 items-start pb-16 border-b border-zinc-100 last:border-b-0">
                            {/* Info */}
                            <div className="md:col-span-7 space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="accent">{tag}</Badge>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight">{project.title}</h3>

                                <div className="space-y-4 text-sm font-mono border-l-2 border-zinc-300 pl-4">
                                    <div>
                                        <strong className="text-zinc-900 block text-xs uppercase mb-1">// Problem:</strong>
                                        <span className="text-zinc-600 leading-relaxed">{project.problem}</span>
                                    </div>
                                    <div>
                                        <strong className="text-zinc-900 block text-xs uppercase mb-1">// Solution:</strong>
                                        <span className="text-zinc-600 leading-relaxed">{project.solution}</span>
                                    </div>
                                    <div>
                                        <strong className="text-orange-600 block text-xs uppercase mb-1">// Production Impact:</strong>
                                        <span className="text-zinc-900 bg-orange-100/70 border border-orange-200 px-1.5 py-0.5 inline-block font-bold">
                                            {project.impact}
                                        </span>
                                    </div>
                                </div>

                                {/* Stack tags */}
                                <div className="pt-2">
                                    <h4 className="text-[11px] font-mono font-bold text-zinc-400 uppercase mb-2">Architecture Stack:</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="px-2 py-0.5 bg-zinc-100 border border-zinc-400 text-zinc-800 text-xs font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="text-xs py-2 px-3 h-auto flex items-center gap-1.5">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>LIVE APP</span>
                                            </Button>
                                        </a>
                                    )}
                                    <Button variant="ghost" onClick={() => setPage('projects')} className="text-xs py-2 px-3 h-auto flex items-center gap-1.5">
                                        <Play className="w-3.5 h-3.5" />
                                        <span>VIEW ALL DETAILS</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Demo Media or Stack Card */}
                            <div className="md:col-span-5">
                                <Card className="bg-zinc-900 text-white p-4 overflow-hidden border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" hoverEffect={false}>
                                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            <span className="text-[10px] font-mono text-zinc-400 ml-2">
                                                {project.demoMedia ? "RUNTIME_TELEMETRY.mp4" : "ARCHITECTURE_MAP.png"}
                                            </span>
                                        </div>
                                        <span className="text-[9px] font-mono text-orange-400 bg-orange-950 px-1.5 py-0.5 rounded border border-orange-800">
                                            {project.demoMedia ? "LIVE CAPTURE" : "PRODUCTION"}
                                        </span>
                                    </div>

                                    {project.demoMedia ? (
                                        <div className="relative group rounded overflow-hidden bg-black aspect-video flex items-center justify-center">
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                controls
                                                preload="auto"
                                                poster={project.demoPoster}
                                                className="w-full h-full object-cover"
                                                onLoadedData={(e) => {
                                                    e.target.muted = true;
                                                    e.target.play().catch(() => {});
                                                }}
                                            >
                                                <source src={project.demoMedia} type="video/mp4" />
                                            </video>
                                        </div>
                                    ) : project.demoPoster ? (
                                        <div className="relative rounded overflow-hidden bg-zinc-800 aspect-video flex items-center justify-center">
                                            <img
                                                src={project.demoPoster}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="p-6 bg-zinc-800/80 rounded aspect-video flex flex-col justify-center items-center text-center">
                                            <Code className="w-8 h-8 text-orange-400 mb-2" />
                                            <p className="text-xs font-mono font-bold text-zinc-200 uppercase">High-Scale Backend Ingestion</p>
                                            <p className="text-[11px] font-mono text-zinc-400 mt-1">1B+ monthly jobs · 7-node cluster</p>
                                        </div>
                                    )}

                                    <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                                        <span>STATUS: OPERATIONAL</span>
                                        <span>RELIABILITY: 99.99%</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" onClick={() => setPage('projects')}>VIEW FULL ARCHIVE</Button>
                </div>
            </div>
        </section>
    );
};
