export interface SystemArchitecture {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'PySpark & Distributed' | 'Snowflake & dbt' | 'GenAI & RAG';
  tags: string[];
  impact: string;
  metrics: { label: string; value: string }[];
  architecturalHighlights: string[];
  visualType: 'benford' | 'rag_matrix' | 'incremental_dag' | 'pharma_lineage' | 'temporal_snapshot' | 'index_reconciliation';
  isLarge?: boolean;
}

export interface CareerNode {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface SkillCategory {
  category: 'Languages' | 'Frameworks & Libraries' | 'Cloud & Platforms' | 'Databases';
  skills: { name: string; systemsCount: number; matchedSystemIds: string[] }[];
}

export interface CredentialItem {
  type: 'certification' | 'honor' | 'education';
  title: string;
  issuer: string;
  periodOrDate: string;
  details: string;
  tags?: string[];
  badge?: string;
}

export const SYSTEMS_DATA: SystemArchitecture[] = [
  {
    id: 'system-01',
    number: '01',
    title: 'Distributed ERP Exception-Detection Engine',
    subtitle: 'High-Throughput Risk & Anomaly Mining for Manufacturing Audit',
    category: 'PySpark & Distributed',
    tags: ['PySpark', 'SAP / Oracle ERP', 'Data Quality', 'Risk Analytics', 'Benford Algorithm'],
    impact: 'Engineered scalable, parameterized PySpark pipelines across automotive and agro-chemical manufacturing domains. Encoded complex audit and risk algorithms—including Three-Way Matching, Segregation of Duties (SoD) conflicts, and Benford\'s Law anomaly detection—with embedded end-to-end data integrity checks.',
    metrics: [
      { label: 'Data Processing Speed', value: '14.2x Faster' },
      { label: 'ERP Record Volume', value: '45M+ Tx/Run' },
      { label: 'Integrity Check Coverage', value: '100% Automated' },
      { label: 'False-Positive Reduction', value: '-38%' }
    ],
    architecturalHighlights: [
      'Parameterized DAG executing multi-tenant financial validations across heterogeneous SAP ECC and Oracle Cloud schemas.',
      'Custom vectorised UDFs computing digit frequency deviations against Benford distribution to isolate procurement fraud.',
      'Deterministic Three-Way Matching (PO vs Goods Receipt vs Invoice) flagging phantom accruals.'
    ],
    visualType: 'benford',
    isLarge: true
  },
  {
    id: 'system-02',
    number: '02',
    title: 'Enterprise Audit RAG Pipeline',
    subtitle: 'Automated Key Risk Indicator (KRI) Extraction from Complex PDFs',
    category: 'GenAI & RAG',
    tags: ['LangChain', 'FAISS', 'Azure OpenAI', 'Python', 'Vector DB', 'Enterprise RAG'],
    impact: 'Built a Retrieval-Augmented Generation (RAG) workflow for PDF-based audit report analysis, automating the extraction of Key Risk Indicators (KRIs) from unstructured documentation into structured, queryable outputs.',
    metrics: [
      { label: 'Document Review Velocity', value: '85% Reduction' },
      { label: 'KRI Extraction Precision', value: '98.4%' },
      { label: 'Chunk Cosine Overlap', value: '0.82 Hybrid' }
    ],
    architecturalHighlights: [
      'Multi-stage semantic chunking with metadata tagging preserving table hierarchy and compliance clauses.',
      'Dense vector indexing via FAISS with hybrid BM25 lexical reranking for domain-specific accounting terminology.',
      'Deterministic JSON schema validation preventing LLM hallucinations on audit sign-offs.'
    ],
    visualType: 'rag_matrix'
  },
  {
    id: 'system-03',
    number: '03',
    title: 'Global Manufacturing KPI & Incremental dbt Architecture',
    subtitle: 'Warehouse Scaling & Elimination of Cross-Join Query Bottlenecks',
    category: 'Snowflake & dbt',
    tags: ['Snowflake', 'dbt', 'SAP Data', 'SQL', 'Data Modeling', 'Cost Optimization'],
    impact: 'Built high-scale Snowflake/dbt pipelines computing financial and operational KPIs (inventory ageing, CEBITDA, revenue). Resolved recurring cross-join timeout bottlenecks using incremental dbt models and scheduled backfills.',
    metrics: [
      { label: 'Query Compute Cost', value: '-62% Warehouse Credits' },
      { label: 'Execution Runtime', value: '3.5h → 18min' },
      { label: 'Pipeline SLA Adherence', value: '99.9%' }
    ],
    architecturalHighlights: [
      'Refactored quadratic joins into windowed temporal partition scans with unique surrogate key hashing.',
      'Engineered incremental dbt models with merge keys and automated backfill reconciliation triggers.',
      'Materialized dimensional models for instant executive drill-down across inventory ageing brackets.'
    ],
    visualType: 'incremental_dag'
  },
  {
    id: 'system-04',
    number: '04',
    title: 'Pharma CMC Governed Data Modeling',
    subtitle: 'Audit-Proof Pharmaceutical Chemistry & Controls Transformation',
    category: 'Snowflake & dbt',
    tags: ['Snowflake', 'dbt', 'Data Governance', 'Lineage', 'Audit Trails'],
    impact: 'Developed and maintained production dbt models for pharmaceutical Chemistry, Manufacturing & Controls (CMC) data, translating complex scientist requirements into governed, auditable transformations.',
    metrics: [
      { label: 'Regulatory Traceability', value: '100% GxP Lineage' },
      { label: 'Scientist Formula Models', value: '40+ Pipelines' },
      { label: 'Schema Drift Detection', value: 'Real-Time Alerts' }
    ],
    architecturalHighlights: [
      'Strict dbt schema assertions validating assay concentration ranges, batch timestamps, and stability bounds.',
      'Immutable audit trail recording transformation hashes and upstream ERP lineage for regulatory review.',
      'Semantic layer bridging biochemical laboratory parameters into enterprise business analytics.'
    ],
    visualType: 'pharma_lineage'
  },
  {
    id: 'system-05',
    number: '05',
    title: 'End-to-End HR Analytics & Historical Snapshot Engine',
    subtitle: 'Unified Workforce Lifecycle & Temporal Trend Intelligence',
    category: 'PySpark & Distributed',
    tags: ['Databricks', 'PySpark', 'REST APIs', 'Power BI', 'Schema Evolution'],
    impact: 'Designed a unified pipeline tracking headcount, attrition, L&D, recruitment, and manpower cost. Diagnosed a snapshot-only data model blocking YoY/SPLY trend reporting and implemented historical snapshot accumulation while resolving schema-inference ingestion bugs.',
    metrics: [
      { label: 'YoY Reporting Capability', value: 'Enabled 5-Yr History' },
      { label: 'Ingestion Drift Failures', value: 'Zero Schema Errors' },
      { label: 'Workforce Dimensions', value: '18 Metric Domains' }
    ],
    architecturalHighlights: [
      'Engineered Delta Lake historical accumulation pipeline with Type 2 Slowly Changing Dimension (SCD) semantics.',
      'Replaced fragile runtime schema inference with strict JSON schema definitions for REST endpoint payloads.',
      'Optimized Z-Order clustering by employee department and reporting period for instant Power BI queries.'
    ],
    visualType: 'temporal_snapshot'
  },
  {
    id: 'system-06',
    number: '06',
    title: 'Automated Steel-Rate Variance & Settlement Pipeline',
    subtitle: 'SIAM Index Integration & Automotive Price Reconciliation',
    category: 'PySpark & Distributed',
    tags: ['Databricks', 'PySpark', 'SQL', 'External APIs', 'Financial Reconciliation'],
    impact: 'Integrated external SIAM steel-rate indices with internal procurement data for an automotive manufacturing client to automate price-variance analysis and customer settlement calculations.',
    metrics: [
      { label: 'Settlement Cycle Time', value: '3 Weeks → 1 Day' },
      { label: 'Reconciliation Accuracy', value: '99.98%' },
      { label: 'Index Feed Reliability', value: 'Failover-Backed' }
    ],
    architecturalHighlights: [
      'Automated API ingestion of monthly SIAM commodity benchmarks with anomaly sanity bounds.',
      'Complex multi-currency price variance rules evaluating alloy grades, scrap credits, and contracted escalation clauses.',
      'Generated audited settlement vouchers directly integrated with vendor accounts payable ERP modules.'
    ],
    visualType: 'index_reconciliation'
  }
];

export const CAREER_DATA: CareerNode[] = [
  {
    id: 'exp-ey',
    role: 'Consultant — Data Analytics / Engineering',
    company: 'Ernst & Young (EY)',
    period: 'Sep 2024 – Present',
    location: 'Mumbai, MH, India',
    badge: '🏆 Award: EY Client Extraordinaire',
    summary: 'Lead data engineering and risk analytics initiatives across global pharmaceutical, automotive manufacturing, and agrochemical enterprise clients.',
    achievements: [
      'Spearheaded enterprise PySpark pipelines processing tens of millions of ERP transaction records for audit exception detection.',
      'Designed governed Snowflake and dbt architectures, cutting warehouse costs by 62% and eliminating runtime join bottlenecks.',
      'Architected generative AI RAG workflows extracting Key Risk Indicators (KRIs) from compliance documentation with 98%+ precision.',
      'Honored with the EY Client Extraordinaire award for exceptional delivery and measurable client impact.'
    ],
    stack: ['PySpark', 'Snowflake', 'dbt', 'Databricks', 'LangChain', 'Azure OpenAI', 'SAP Data', 'SQL']
  },
  {
    id: 'exp-square-yards',
    role: 'Data Engineer',
    company: 'Square Yards',
    period: 'Oct 2023 – Sep 2024',
    location: 'Mumbai, MH, India',
    summary: 'Engineered high-scale data analytics pipelines for property pricing indices, mortgage financing, and consumer search behavior across major metropolitan markets.',
    achievements: [
      'Developed distributed Scala data pipelines aggregating millions of real estate listings, pricing tiers, and mortgage rate streams.',
      'Built reusable data widgets and API endpoints powering customer-facing analytical dashboards and loan eligibility engines.',
      'Optimized aggregation queries and partition strategies, reducing dashboard latency across top 10 Indian property markets.'
    ],
    stack: ['Scala', 'Apache Spark', 'SQL', 'REST APIs', 'PostgreSQL', 'Data Warehousing']
  },
  {
    id: 'exp-lti',
    role: 'Engineer — Cloud and Infrastructure',
    company: 'Larsen & Toubro Infotech (LTI)',
    period: 'Jun 2022 – Jan 2023',
    location: 'Mumbai, MH, India',
    summary: 'Engineered cloud infrastructure operations, automation scripts, and server maintenance for enterprise IT environments.',
    achievements: [
      'Managed cloud infrastructure provisioning, virtual machine lifecycle, and backup automation across enterprise environments.',
      'Maintained enterprise monitoring, incident remediation, and CI/CD operations upholding high availability SLAs.',
      'Formed foundational enterprise computing disciplines in distributed operating systems and networking.'
    ],
    stack: ['Cloud Infrastructure', 'Linux / Unix', 'Networking', 'Automation', 'CI/CD']
  }
];

export const SKILL_TOPOLOGY_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', systemsCount: 4, matchedSystemIds: ['system-01', 'system-02', 'system-05', 'system-06'] },
      { name: 'PySpark', systemsCount: 3, matchedSystemIds: ['system-01', 'system-05', 'system-06'] },
      { name: 'SQL', systemsCount: 5, matchedSystemIds: ['system-01', 'system-03', 'system-04', 'system-05', 'system-06'] },
      { name: 'Scala', systemsCount: 1, matchedSystemIds: ['system-01'] },
      { name: 'Snowpark', systemsCount: 2, matchedSystemIds: ['system-03', 'system-04'] }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Apache Spark', systemsCount: 3, matchedSystemIds: ['system-01', 'system-05', 'system-06'] },
      { name: 'dbt', systemsCount: 2, matchedSystemIds: ['system-03', 'system-04'] },
      { name: 'LangChain', systemsCount: 1, matchedSystemIds: ['system-02'] },
      { name: 'FAISS', systemsCount: 1, matchedSystemIds: ['system-02'] },
      { name: 'Pandas', systemsCount: 4, matchedSystemIds: ['system-01', 'system-02', 'system-05', 'system-06'] },
      { name: 'NumPy', systemsCount: 3, matchedSystemIds: ['system-01', 'system-02', 'system-06'] },
      { name: 'scikit-learn', systemsCount: 2, matchedSystemIds: ['system-01', 'system-02'] }
    ]
  },
  {
    category: 'Cloud & Platforms',
    skills: [
      { name: 'Databricks', systemsCount: 3, matchedSystemIds: ['system-01', 'system-05', 'system-06'] },
      { name: 'Snowflake', systemsCount: 2, matchedSystemIds: ['system-03', 'system-04'] },
      { name: 'Azure', systemsCount: 2, matchedSystemIds: ['system-01', 'system-02'] },
      { name: 'Google BigQuery', systemsCount: 1, matchedSystemIds: ['system-03'] },
      { name: 'Power BI', systemsCount: 2, matchedSystemIds: ['system-03', 'system-05'] },
      { name: 'Qlik Sense', systemsCount: 1, matchedSystemIds: ['system-05'] },
      { name: 'DBeaver', systemsCount: 4, matchedSystemIds: ['system-01', 'system-03', 'system-04', 'system-06'] }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MS SQL Server', systemsCount: 2, matchedSystemIds: ['system-01', 'system-06'] },
      { name: 'MySQL', systemsCount: 2, matchedSystemIds: ['system-01', 'system-05'] },
      { name: 'MongoDB', systemsCount: 1, matchedSystemIds: ['system-05'] }
    ]
  }
];

export const CREDENTIALS_DATA: CredentialItem[] = [
  {
    type: 'certification',
    title: 'Databricks Certified Generative AI Engineer Associate',
    issuer: 'Databricks Inc.',
    periodOrDate: 'Verified Credential',
    details: 'Demonstrates verified expertise in building, deploying, and evaluating production Generative AI applications on Databricks, including LLM fine-tuning, RAG system design, vector search, and MLflow governance.',
    badge: 'Certified GenAI Engineer',
    tags: ['Databricks', 'Vector Search', 'RAG Evaluation', 'MLflow', 'Prompt Engineering']
  },
  {
    type: 'honor',
    title: 'EY Client Extraordinaire Award',
    issuer: 'Ernst & Young (EY)',
    periodOrDate: 'FY 2024 – 2025',
    details: 'Prestigious internal honor awarded for exceptional performance in delivering client-critical data engineering pipelines, resolving systemic query performance bottlenecks, and innovating enterprise risk analytics.',
    badge: '🏆 EY Client Extraordinaire',
    tags: ['Consulting Excellence', 'Client Impact', 'Pipeline Optimization', 'Risk Engineering']
  },
  {
    type: 'education',
    title: 'Post Graduate Diploma in Big Data Analytics',
    issuer: 'Center for Development of Advanced Computing (C-DAC), Mumbai',
    periodOrDate: 'Mar 2023 – Sep 2023',
    details: 'Rigorous specialized curriculum covering distributed computing (Hadoop, Spark), data mining, warehouse modeling, machine learning, and high-performance computing architectures.',
    tags: ['Big Data Systems', 'Distributed Computing', 'Advanced Analytics']
  },
  {
    type: 'education',
    title: 'B.E. in Computer Engineering',
    issuer: 'A. C. Patil College of Engineering, Mumbai',
    periodOrDate: 'Aug 2018 – May 2022',
    details: 'Bachelor of Engineering grounding in algorithms, database design, software engineering, computer networks, and operating systems.',
    tags: ['Data Structures & Algorithms', 'Databases', 'Operating Systems']
  },
  {
    type: 'education',
    title: 'Higher Secondary Certificate (HSC) — Science',
    issuer: 'Ramnarain Ruia Jr. College, Mumbai',
    periodOrDate: 'Jul 2016 – Feb 2018',
    details: 'Core foundation in Mathematics, Physics, Chemistry, and Information Technology.',
    tags: ['Science & Mathematics', 'IT Foundation']
  }
];
