import {Button} from "@components/common/Button/Button.js";
import {SITE_DATA} from "@data";
import {Sparkline} from "@components/common/Sparkline/Sparkline.js";
import {Card} from "@components/common/Card/Card.js";

const SYSTEM_RUNS_TREND = [12, 18, 26, 35, 48, 65, 84, 102, 128, 145, 162, 179];

export const Hero = ({ setPage }) => {
    return (
        <section className="pt-32 pb-20 relative border-b border-zinc-200">
            <div className="grid md:grid-cols-12 gap-12 items-start">
                {/* Left Column */}
                <div className="md:col-span-7 space-y-8">
                    <div className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-900 text-zinc-900 text-xs font-mono font-bold uppercase">
                        Staff / Senior Systems & AI Infrastructure Engineer
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tight leading-[0.9]">
                        RESILIENT <br/>
                        <span className="text-orange-600">SYSTEMS.</span>
                    </h1>

                    <p className="text-lg text-zinc-600 max-w-xl leading-relaxed font-mono">
                        // Autonomous multi-agent pipelines, 1B+ scale ingestion & high-load distributed platforms.
                        <br/>// Deep CS fundamentals + deterministic execution.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button onClick={() => setPage('resume')}>VIEW RESUME</Button>
                        <Button variant="outline" onClick={() => setPage('projects')}>VIEW ARCHITECTURE</Button>
                    </div>
                </div>

                {/* Right Column: Stats Card */}
                <div className="md:col-span-5 pt-8 md:pt-0">
                    <Card className="bg-zinc-50 relative">
                        {/* Industrial details */}
                        <div className="absolute top-2 left-2 w-2 h-2 border border-zinc-400 rounded-full"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 border border-zinc-400 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 border border-zinc-400 rounded-full"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 border border-zinc-400 rounded-full"></div>

                        <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-zinc-200">
                            <h3 className="text-xs font-mono font-bold text-zinc-500 uppercase">SYSTEM_TELEMETRY</h3>
                            <div className="flex gap-1 items-center">
                                <span className="text-[10px] font-mono text-zinc-400 mr-1">LIVE</span>
                                <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 mb-6">
                            {SITE_DATA.stats.map((stat, i) => (
                                <div key={i} className="bg-white p-4">
                                    <p className="text-zinc-400 text-[10px] font-mono uppercase mb-1">{stat.label}</p>
                                    <p className="text-xl font-bold text-zinc-900">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <div className="flex justify-between items-end mb-2 font-mono text-xs">
                                <span className="text-zinc-500">AUTONOMOUS_RUNS_CADENCE</span>
                                <span className="text-orange-600 font-bold">179 PROD RUNS</span>
                            </div>
                            <Sparkline data={SYSTEM_RUNS_TREND} height={32} />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
