import { useState } from "react";
import { SITE_DATA } from "@data";
import { Card } from "@components/common/Card/Card.js";
import { Button } from "@components/common/Button/Button.js";
import { ExternalLink, Video, Eye, EyeOff } from "lucide-react";

export const ProjectsPage = () => {
    const [selectedFilter, setSelectedFilter] = useState("ALL");
    const [expandedDemos, setExpandedDemos] = useState({});

    const filters = ["ALL", "SYSTEMS", "BACKEND", "AGENTIC-AI"];

    const toggleDemo = (id) => {
        setExpandedDemos(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredProjects = SITE_DATA.projects.filter(project => {
        if (selectedFilter === "ALL") return true;
        if (selectedFilter === "SYSTEMS") return project.category === "SYSTEMS";
        if (selectedFilter === "BACKEND") return project.category === "BACKEND";
        if (selectedFilter === "AGENTIC-AI") return project.tags.includes("AGENTIC-AI") || project.tags.includes("LLMOPS");
        return true;
    });

    return (
        <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <div className="mb-12 border-b border-zinc-200 pb-8">
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-zinc-500 font-mono text-xs uppercase tracking-wider">// PRODUCTION SYSTEMS & RUNTIME TELEMETRY</p>
                </div>
                <h1 className="text-4xl font-black text-zinc-900 uppercase mb-4">Project Archive</h1>
                <p className="text-zinc-600 font-mono max-w-2xl leading-relaxed text-sm">
                    Architectural deep-dives, deployed distributed platforms, multi-agent pipelines, and zero-stale observability systems built with production rigor.
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`
                                text-xs font-bold font-mono uppercase px-3 py-1.5 border-2 transition-all
                                ${selectedFilter === filter
                                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                                    : 'bg-transparent text-zinc-600 border-zinc-300 hover:border-zinc-900'}
                            `}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-10">
                {filteredProjects.map(project => {
                    const isDemoOpen = expandedDemos[project.id] ?? !!project.demoMedia;

                    return (
                        <Card key={project.id} className="p-8 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-900 uppercase mb-2 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 border border-orange-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {project.demoMedia && (
                                        <Button
                                            variant="outline"
                                            onClick={() => toggleDemo(project.id)}
                                            className="text-xs py-1.5 px-3 h-8 flex items-center gap-1.5"
                                        >
                                            {isDemoOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                            <span>{isDemoOpen ? "HIDE TELEMETRY" : "VIEW TELEMETRY"}</span>
                                        </Button>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <Button variant="ghost" className="text-xs py-1.5 px-3 h-8 flex items-center gap-1.5">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>LIVE APP</span>
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Demo Video Container */}
                            {isDemoOpen && project.demoMedia && (
                                <div className="mb-6 rounded-lg overflow-hidden border-2 border-zinc-900 bg-zinc-950 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="flex items-center justify-between px-3 py-1.5 text-[11px] font-mono text-zinc-400 border-b border-zinc-800 mb-2">
                                        <div className="flex items-center gap-2">
                                            <Video className="w-3.5 h-3.5 text-orange-400" />
                                            <span>LIVE SYSTEM EXECUTION CAPTURE</span>
                                        </div>
                                        <span className="text-green-400 font-bold">1080P // 60FPS</span>
                                    </div>
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        poster={project.demoPoster}
                                        className="w-full rounded max-h-[440px] object-contain bg-black"
                                        src={project.demoMedia}
                                    />
                                </div>
                            )}

                            <div className="grid md:grid-cols-3 gap-8 text-sm font-mono leading-relaxed mb-6 border-t border-zinc-100 pt-6">
                                <div>
                                    <strong className="text-zinc-900 block text-xs uppercase mb-1">// Problem</strong>
                                    <p className="text-zinc-600 leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <strong className="text-zinc-900 block text-xs uppercase mb-1">// Architectural Solution</strong>
                                    <p className="text-zinc-600 leading-relaxed">{project.solution}</p>
                                </div>
                                <div>
                                    <strong className="text-orange-600 block text-xs uppercase mb-1">// Production Impact</strong>
                                    <p className="text-zinc-900 bg-orange-50 border border-orange-200 p-2 font-bold leading-relaxed">
                                        {project.impact}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="border-t border-zinc-100 pt-4 flex flex-wrap items-center gap-2">
                                <span className="text-xs font-mono font-bold text-zinc-400 uppercase mr-2">Stack:</span>
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsPage;
