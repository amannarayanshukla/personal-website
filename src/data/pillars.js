import { Cpu, Terminal, Activity } from "lucide-react";

export const pillarsData = [
    {
        id: "engineer",
        icon: <Cpu className="w-6 h-6" />,
        title: "SYSTEMS",
        desc: "Distributed services, sharded search clusters, and high-throughput ingestion at billion-scale.",
        linkText: "EXPLORE RESUME",
        linkTarget: "resume"
    },
    {
        id: "agentic",
        icon: <Terminal className="w-6 h-6" />,
        title: "AGENTIC AI",
        desc: "Deterministic multi-agent execution pipelines, externalized state machines, and critique loops.",
        linkText: "VIEW PROJECTS",
        linkTarget: "projects"
    },
    {
        id: "platform",
        icon: <Activity className="w-6 h-6" />,
        title: "OBSERVABILITY",
        desc: "3-depth pipeline flow maps, per-call LLM turn cost/latency profilers, and resilient control planes.",
        linkText: "EXPLORE ARCHITECTURE",
        linkTarget: "projects"
    }
];
