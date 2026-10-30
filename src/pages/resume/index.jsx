import {Button} from "@components/common/Button/Button.js";
import {SITE_DATA} from "@/data/index.js";
import {Card} from "@components/common/Card/Card.js";
import {Badge} from "@components/common/Badge/Badge.js";

export const ResumePage = () => (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b-2 border-zinc-900 pb-6">
            <div>
                <h1 className="text-4xl font-black text-zinc-900 uppercase mb-2">Resume.pdf</h1>
                <p className="text-zinc-500 font-mono text-sm">Professional experience log and skill matrix.</p>
            </div>
            <Button variant="primary" className="hidden sm:flex">DOWNLOAD</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
                {SITE_DATA.experience.map((job, i) => (
                    <div key={i} className="relative border-l-2 border-zinc-200 pl-8 ml-2">
                        <div className="absolute left-[-5px] top-0 w-2 h-2 bg-zinc-900" />

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-zinc-900 uppercase">{job.role}</h3>
                            <div className="text-orange-600 text-sm font-mono font-bold mb-1">{job.company}</div>
                            <div className="text-zinc-400 text-xs font-mono uppercase">{job.period}</div>
                        </div>

                        <ul className="space-y-4">
                            {job.bullets.map((bullet, j) => (
                                <li key={j} className="text-sm text-zinc-700 leading-relaxed font-mono">
                                    <span className="text-zinc-900 font-bold bg-zinc-100 px-1 text-xs mr-2">{bullet.type}</span>
                                    {bullet.text}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="space-y-8">
                <Card className="bg-zinc-50" hoverEffect={false}>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase mb-4 tracking-wider">Technical Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Node.js',
                            'TypeScript',
                            'Elasticsearch',
                            'Redis',
                            'GCP',
                            'Kubernetes',
                            'Docker',
                            'Cassandra',
                            'MongoDB',
                            'React',
                            'Python',
                            'Neo4j'
                        ].map(skill => (
                            <Badge key={skill}>{skill}</Badge>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    </div>
);

export default ResumePage;
