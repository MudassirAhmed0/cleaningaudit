export interface GapNarrative {
  heading: string;
  whyItMatters: string;
  whatTopSitesDo: string;
  costLine: string;
}

/** Interpolate {market}, {pct}, {count} into narrative templates */
export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}

/** Gap narratives — populate when cleaning audit data is available */
export const gapNarratives: Record<string, GapNarrative> = {};
