import React from 'react';

export interface TechItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  bgLight?: string;
  verified?: boolean;
}

export const SnowflakeLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M4.93 19.07L19.07 4.93"
      stroke="#29B5E8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="#29B5E8" />
    <path
      d="M12 5L10 3M12 5L14 3M12 19L10 21M12 19L14 21M5 12L3 10M5 12L3 14M19 12L21 10M19 12L21 14"
      stroke="#29B5E8"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const DatabricksLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 3L2 8.5L12 14L22 8.5L12 3Z"
      fill="#FF3621"
    />
    <path
      d="M2 12L12 17.5L22 12"
      stroke="#FF3621"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 15.5L12 21L22 15.5"
      stroke="#FF3621"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2L14.5 8.5L21.5 9.5L16.5 14.5L18 21.5L12 18L6 21.5L7.5 14.5L2.5 9.5L9.5 8.5L12 2Z"
      fill="#E25A1C"
    />
    <path
      d="M12 6L13.5 10.5L18 11.2L14.5 14.5L15.5 19L12 16.8L8.5 19L9.5 14.5L6 11.2L10.5 10.5L12 6Z"
      fill="#F59E0B"
    />
  </svg>
);

export const DbtLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2L3 7.5V16.5L12 22L21 16.5V7.5L12 2Z"
      fill="#FF694B"
    />
    <path
      d="M12 2V12M12 12L21 7.5M12 12L3 7.5"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L12 22"
      stroke="#B33E26"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M11.9 2C8.3 2 8.6 3.6 8.6 3.6L8.6 5.2H12.1V5.7H5.2C5.2 5.7 2 5.3 2 9C2 12.6 4.8 12.4 4.8 12.4H6.4V10.8C6.4 8.9 8.1 8.9 8.1 8.9H12.1C13.8 8.9 13.8 7.3 13.8 7.3V3.6C13.8 3.6 14.2 2 11.9 2ZM10.3 3.6C10.7 3.6 11.1 3.9 11.1 4.4C11.1 4.8 10.7 5.2 10.3 5.2C9.8 5.2 9.5 4.8 9.5 4.4C9.5 3.9 9.8 3.6 10.3 3.6Z"
      fill="#3776AB"
    />
    <path
      d="M12.1 22C15.7 22 15.4 20.4 15.4 20.4L15.4 18.8H11.9V18.3H18.8C18.8 18.3 22 18.7 22 15C22 11.4 19.2 11.6 19.2 11.6H17.6V13.2C17.6 15.1 15.9 15.1 15.9 15.1H11.9C10.2 15.1 10.2 16.7 10.2 16.7V20.4C10.2 20.4 9.8 22 12.1 22ZM13.7 20.4C13.3 20.4 12.9 20.1 12.9 19.6C12.9 19.2 13.3 18.8 13.7 18.8C14.2 18.8 14.5 19.2 14.5 19.6C14.5 20.1 14.2 20.4 13.7 20.4Z"
      fill="#FFD43B"
    />
  </svg>
);

export const LangChainLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="6" fill="#1C3C3C" />
    <path
      d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="3" fill="#38BDF8" />
    <path
      d="M7 12L5 15H9L7 18"
      stroke="#10B981"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 12L19 15H15L17 18"
      stroke="#F59E0B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AzureLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M13.2 3L5.5 15.2H10.8L4 21L15 11.5H9.5L13.2 3Z"
      fill="#0089D6"
    />
    <path
      d="M12.5 3L18.5 16.5H13.5L12.5 3Z"
      fill="#0072C6"
    />
  </svg>
);

export const BigQueryLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="6" fill="#E8F0FE" />
    <circle cx="11" cy="11" r="5" stroke="#4285F4" strokeWidth="2" />
    <path d="M15 15L20 20" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M9 11H13M11 9V13" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PowerBILogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect x="3" y="11" width="4" height="10" rx="1" fill="#EAA300" />
    <rect x="9" y="7" width="4" height="14" rx="1" fill="#F2C811" />
    <rect x="15" y="3" width="4" height="18" rx="1" fill="#F9DE37" />
  </svg>
);

export const OpenAILogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M19.5 9.5C19 6.8 16.8 5 14 5C13.4 5 12.8 5.1 12.2 5.4C11.5 4.3 10.2 3.5 8.7 3.5C6.1 3.5 4 5.6 4 8.2C4 8.8 4.1 9.4 4.4 10C3.3 10.7 2.5 12 2.5 13.5C2.5 16.1 4.6 18.2 7.2 18.2C7.8 18.2 8.4 18.1 9 17.8C9.7 18.9 11 19.7 12.5 19.7C15.1 19.7 17.2 17.6 17.2 15C17.2 14.4 17.1 13.8 16.8 13.2C17.9 12.5 18.7 11.2 18.7 9.7L19.5 9.5Z"
      stroke="#10B981"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="#10B981" />
  </svg>
);

export const SqlLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <ellipse cx="12" cy="5" rx="8" ry="3" fill="#336791" />
    <path
      d="M4 5V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V5"
      stroke="#336791"
      strokeWidth="2"
    />
    <path
      d="M4 12V19C4 20.7 7.6 22 12 22C16.4 22 20 20.7 20 19V12"
      stroke="#336791"
      strokeWidth="2"
    />
  </svg>
);

export const MongoLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2C12 2 6 8.5 6 14C6 17.3 8.7 20 12 21C15.3 20 18 17.3 18 14C18 8.5 12 2 12 2Z"
      fill="#47A248"
    />
    <path d="M12 2V21" stroke="#3FA037" strokeWidth="1.5" />
    <path d="M12 21V23" stroke="#7A6856" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ScalaLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M4 17C10 15 16 16 20 18V21C16 19 10 18 4 20V17Z"
      fill="#DC322F"
    />
    <path
      d="M4 10C10 8 16 9 20 11V14C16 12 10 11 4 13V10Z"
      fill="#DC322F"
    />
    <path
      d="M4 3C10 1 16 2 20 4V7C16 5 10 4 4 6V3Z"
      fill="#DC322F"
    />
  </svg>
);

export const TECH_ITEMS: TechItem[] = [
  {
    id: 'snowflake',
    name: 'Snowflake',
    category: 'Cloud Warehouse',
    description: 'Data Cloud & Modeling',
    icon: <SnowflakeLogo className="w-8 h-8" />,
    bgLight: 'bg-[#29B5E8]/10'
  },
  {
    id: 'databricks',
    name: 'Databricks',
    category: 'Lakehouse Engine',
    description: 'PySpark & GenAI',
    icon: <DatabricksLogo className="w-8 h-8" />,
    bgLight: 'bg-[#FF3621]/10',
    verified: true
  },
  {
    id: 'pyspark',
    name: 'PySpark / Spark',
    category: 'Distributed Compute',
    description: '45M+ Tx Exception Engine',
    icon: <SparkLogo className="w-8 h-8" />,
    bgLight: 'bg-[#E25A1C]/10'
  },
  {
    id: 'dbt',
    name: 'dbt Labs',
    category: 'Transformation',
    description: 'Incremental Marts & Tests',
    icon: <DbtLogo className="w-8 h-8" />,
    bgLight: 'bg-[#FF694B]/10'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Core Language',
    description: 'Data Science & Automation',
    icon: <PythonLogo className="w-8 h-8" />,
    bgLight: 'bg-[#3776AB]/10'
  },
  {
    id: 'langchain',
    name: 'LangChain & RAG',
    category: 'Generative AI',
    description: 'KRI PDF Extraction & FAISS',
    icon: <LangChainLogo className="w-8 h-8" />,
    bgLight: 'bg-[#10B981]/10'
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    category: 'Cloud Platform',
    description: 'OpenAI, Blob & VMs',
    icon: <AzureLogo className="w-8 h-8" />,
    bgLight: 'bg-[#0089D6]/10'
  },
  {
    id: 'bigquery',
    name: 'Google BigQuery',
    category: 'Cloud Analytics',
    description: 'Serverless SQL Warehouse',
    icon: <BigQueryLogo className="w-8 h-8" />,
    bgLight: 'bg-[#4285F4]/10'
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'Business Intelligence',
    description: 'Executive KPI Dashboards',
    icon: <PowerBILogo className="w-8 h-8" />,
    bgLight: 'bg-[#F2C811]/10'
  },
  {
    id: 'sql',
    name: 'SQL & Relational',
    category: 'Database Architecture',
    description: 'MS SQL Server, MySQL',
    icon: <SqlLogo className="w-8 h-8" />,
    bgLight: 'bg-[#336791]/10'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Document Store',
    description: 'NoSQL Schemas & APIs',
    icon: <MongoLogo className="w-8 h-8" />,
    bgLight: 'bg-[#47A248]/10'
  },
  {
    id: 'scala',
    name: 'Scala',
    category: 'Distributed Language',
    description: 'Apache Spark Data Pipelines',
    icon: <ScalaLogo className="w-8 h-8" />,
    bgLight: 'bg-[#DC322F]/10'
  }
];
