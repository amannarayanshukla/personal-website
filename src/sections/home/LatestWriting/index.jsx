import {SITE_DATA} from "@data";
import {Card} from "@components/common/Card/Card.js";
import {ArrowRight} from "lucide-react";

export const LatestWriting = () => {
    return (
        <section className="py-20 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-black text-zinc-900 uppercase mb-12">Log / Writing</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {SITE_DATA.writing.map((post, i) => (
                        <Card key={i} className="group cursor-pointer">
                            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-2 border-b border-zinc-100">
                                <span>{post.date}</span>
                                <span className="text-orange-600 font-bold">{post.tags[0]}</span>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:underline decoration-2 underline-offset-4">
                                {post.title}
                            </h3>
                            <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-mono">
                                {post.summary}
                            </p>
                            <div className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-900">
                                Read Entry <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
