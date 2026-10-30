export const experienceData = [
    {
        company: "Affable.ai",
        role: "Senior Backend & Data Engineer",
        period: "OCT 2021 — PRESENT",
        bullets: [
            {
                type: "PROBLEM",
                text: "Search latency (~12.8s) on 2B+ docs causing high user churn."
            },
            {
                type: "SOLUTION",
                text: "Optimized 7-node Elasticsearch cluster via shard rebalancing & query rewrites."
            },
            {
                type: "IMPACT",
                text: "P95 latency cut to ~500ms. Churn reduced by ~30%."
            },
            {
                type: "PROBLEM",
                text: "Scraper inability to handle 1B+ jobs/month reliably."
            },
            {
                type: "SOLUTION",
                text: "Redesigned architecture to parent/child tasks on Redis/Bull queues."
            },
            {
                type: "IMPACT",
                text: "Scaled from 200M to 1B+ jobs/month with robust rate-limiting."
            }
        ]
    },
    {
        company: "Stealth Startup",
        role: "Tech Co-Founder",
        period: "APR 2021 — AUG 2021",
        bullets: [
            {
                type: "PROBLEM",
                text: "Required scalable MVP infrastructure built from scratch."
            },
            {
                type: "SOLUTION",
                text: "Deployed microservices on AWS with Docker and CI/CD pipelines."
            },
            {
                type: "IMPACT",
                text: "Established core foundations allowing rapid user feedback iteration."
            }
        ]
    },
    {
        company: "Mailmodo",
        role: "Software Engineer",
        period: "OCT 2020 — APR 2021",
        bullets: [
            {
                type: "PROBLEM",
                text: "High login latency affecting user experience."
            },
            {
                type: "SOLUTION",
                text: "Implemented Redis-based authentication and session management."
            },
            {
                type: "IMPACT",
                text: "Reduced login latency by ~20% and enhanced security."
            }
        ]
    },
    {
        company: "Yellow.ai",
        role: "Software Engineer",
        period: "AUG 2018 — OCT 2020",
        bullets: [
            {
                type: "PROBLEM",
                text: "Enterprise clients required strict security compliance."
            },
            {
                type: "SOLUTION",
                text: "Integrated Azure Active Directory for enterprise-grade authentication."
            },
            {
                type: "IMPACT",
                text: "Enabled platform adoption by global banking and insurance clients."
            }
        ]
    }
]
