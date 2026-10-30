import {SITE_DATA} from "@data";

export const Pillars = ({ setPage }) => {
    return (
        <section className="py-20 border-b border-zinc-200 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12 flex items-end gap-4">
                    <h2 className="text-3xl font-black text-zinc-900 uppercase">Operating Context</h2>
                    <div className="h-1 flex-grow bg-zinc-200 mb-2"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SITE_DATA.pillars.map((pillar) => (
                        <div key={pillar.id} className="group relative">
                            <div className="mb-4 text-zinc-400 group-hover:text-orange-600 transition-colors">
                                {pillar.icon}
                            </div>

                            <h3 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-wide">{pillar.title}</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-mono min-h-[3rem]">
                                {pillar.desc}
                            </p>

                            <button
                                onClick={() => setPage(pillar.linkTarget)}
                                className="text-xs font-bold font-mono uppercase text-zinc-900 hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 transition-all"
                            >
                                {pillar.linkText} &gt;
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
