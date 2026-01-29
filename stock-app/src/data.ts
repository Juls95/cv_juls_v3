import { Code, Database, BarChart3, Globe, Cpu, Layers, PieChart } from 'lucide-react';

export interface Skill {
    name: string;
    level: string;
    change: number;
    icon: any;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    duration: string;
    description: string[];
    impact: string;
}

export const PROFILE = {
    name: "Julian Ramirez",
    title: "Lead Data Analyst & Blockchain Dev",
    ticker: "JULS",
    marketCap: "9Y Exp",
    price: 145.23,
    change: "+2.5%",
    summary: "Data Strategist and Blockchain Developer with over 9 years of international experience in data analytics, data engineering, and machine learning."
};

export const SKILLS: Skill[] = [
    { name: "SQL", level: "Expert", change: 9, icon: Database },
    { name: "PowerBI", level: "Expert", change: 8, icon: BarChart3 },
    { name: "RPA", level: "Expert", change: 8, icon: Layers },
    { name: "Viz", level: "Expert", change: 8, icon: PieChart },
    { name: "Python", level: "Expert", change: 7, icon: Code },
    { name: "ML", level: "Advanced", change: 6, icon: Cpu },
    { name: "Snowflake", level: "Advanced", change: 5, icon: Database },
    { name: "Blockchain", level: "Intermediate", change: 3, icon: Globe },
    { name: "React", level: "Novice", change: 1, icon: Code },
];

export const EXPERIENCE: Experience[] = [
    {
        company: "Freelancer",
        role: "Data Scientist & Blockchain Dev",
        period: "May 2024 - Present",
        duration: "Current",
        description: [
            "Designed and implemented data pipelines using SQL, Python, Airflow.",
            "Developed blockchain-based prototypes for DeFi applications.",
            "Lukso Blockchain Ambassador (2025)."
        ],
        impact: "+20% Ops Efficiency"
    },
    {
        company: "Macula Systems / BAT",
        role: "Senior Data Engineer",
        period: "Sept 2022 - Dec 2023",
        duration: "1y 4m",
        description: [
            "Engineered automated data ingestion workflows (Snowflake/WhereScape).",
            "Handled billions of data points daily."
        ],
        impact: "-30% Processing Time"
    },
    {
        company: "Ironhack",
        role: "Data Analytics Lead Teacher",
        period: "Nov 2020 - Oct 2021",
        duration: "11m",
        description: [
            "Led Data Analytics bootcamps.",
            "Oversaw curriculum and student progress."
        ],
        impact: "90% Completion Rate"
    },
    {
        company: "IFood & Cargamos",
        role: "Data Analytics Lead",
        period: "July 2019 - Sept 2022",
        duration: "3y 3m",
        description: [
            "Implemented ML models for predictive analytics.",
            "Developed strategic dashboards (PowerBI/Tableau)."
        ],
        impact: "+25% Ops Efficiency"
    },
    {
        company: "Deloitte",
        role: "Data Analyst",
        period: "Jan 2017 - July 2019",
        duration: "2y 7m",
        description: [
            "Managed server-database connections.",
            "Implemented RPA solutions."
        ],
        impact: "-40% Manual Workload"
    }
];

export interface CandleData {
    year: string;
    open: number;
    close: number;
    high: number;
    low: number;
    company: string;
    role: string;
    stack: string;
    logoDomain?: string; // helping with clearbit logo
}

export const CAREER_HISTORY_DATA: CandleData[] = [
    {
        year: '2017',
        company: 'Deloitte',
        role: 'Tax Technology Consultant',
        stack: 'PowerBI, Microsoft, SQL, SQL Server',
        open: 35, close: 42, high: 45, low: 34,
        logoDomain: 'deloitte.com'
    },
    {
        year: '2018',
        company: 'Deloitte',
        role: 'Tax Technology Consultant',
        stack: 'PowerBI, Azure, Microsoft, SQL, SQL Server',
        open: 42, close: 48, high: 50, low: 40,
        logoDomain: 'deloitte.com'
    },
    {
        year: '2019',
        company: 'Deloitte / SinDelantal',
        role: 'Tax Tech Cons. / Sr Data Analyst',
        stack: 'PowerBI, Azure, SQL / Python, Tableau',
        open: 48, close: 60, high: 65, low: 47,
        logoDomain: 'sindelantal.mx'
    },
    {
        year: '2020',
        company: 'SinDelantal / Ironhack',
        role: 'Sr Data Analyst / Lead Teacher',
        stack: 'Databricks, Python, GCP / SQL, Github',
        open: 60, close: 72, high: 75, low: 58,
        logoDomain: 'ironhack.com'
    },
    {
        year: '2021',
        company: 'Cargamos / Ironhack',
        role: 'Data Analytics Manager',
        stack: 'PowerBI, Python, Tableau, GCP',
        open: 72, close: 85, high: 88, low: 70,
        logoDomain: 'cargamos.com'
    },
    {
        year: '2022',
        company: 'Crystal System / Cargamos',
        role: 'Senior Data Analyst',
        stack: 'Snowflake, Airflow, Oracle, SQL',
        open: 85, close: 92, high: 98, low: 82,
        logoDomain: 'crystal-system.eu'
    },
    {
        year: '2023',
        company: 'Macula Systems',
        role: 'Data Engineer',
        stack: 'PowerBI, SQL, Snowflake',
        open: 92, close: 105, high: 110, low: 90,
        logoDomain: 'macula.io'
    },
    {
        year: '2024',
        company: 'Personal Break',
        role: 'Personal Sabbatical',
        stack: 'Self-Development',
        open: 105, close: 98, high: 106, low: 95,
        logoDomain: '' // No logo
    },
    {
        year: '2025',
        company: 'Freelance',
        role: 'Data Scientist & Blockchain Dev',
        stack: 'Hackathons, Blockchain, React, Rust',
        open: 98, close: 115, high: 125, low: 94,
        logoDomain: 'github.com'
    }
];

// Keep compatibility with old AreaChart if needed, or map it dynamically
export const PERFORMANCE_DATA = CAREER_HISTORY_DATA.map(d => ({
    year: d.year,
    value: d.close,
    label: d.company
}));
