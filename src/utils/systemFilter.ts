import { SystemArchitecture, SYSTEMS_DATA } from './portfolioData';

export type SystemFilterCategory = 'All' | 'PySpark & Distributed' | 'Snowflake & dbt' | 'GenAI & RAG';

export function filterSystems(
  systems: SystemArchitecture[],
  category: SystemFilterCategory,
  activeSkillTag: string | null = null
): SystemArchitecture[] {
  let filtered = systems;

  if (category !== 'All') {
    filtered = filtered.filter((s) => s.category === category);
  }

  if (activeSkillTag) {
    const query = activeSkillTag.toLowerCase();
    filtered = filtered.filter((s) =>
      s.tags.some((t) => t.toLowerCase().includes(query) || query.includes(t.toLowerCase())) ||
      s.title.toLowerCase().includes(query) ||
      s.impact.toLowerCase().includes(query)
    );
  }

  return filtered;
}

export function getSystemById(id: string): SystemArchitecture | undefined {
  return SYSTEMS_DATA.find((s) => s.id === id);
}

export function getRelatedSystemsForSkill(skillName: string): string[] {
  const query = skillName.toLowerCase();
  return SYSTEMS_DATA
    .filter((s) =>
      s.tags.some((t) => t.toLowerCase().includes(query) || query.includes(t.toLowerCase())) ||
      s.title.toLowerCase().includes(query) ||
      s.impact.toLowerCase().includes(query)
    )
    .map((s) => s.id);
}
