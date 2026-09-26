import type { ExampleField } from '../content/examples/field-season';
import { formatNumber } from '../domain/format';
import type { UIStrings } from '../i18n';

/** "Field 31" and "Barley · 18.4 ha" for the current locale. */
export function fieldParts(field: ExampleField, t: UIStrings, intl: string): { name: string; detail: string } {
  const crop = t.crops[field.crop] ?? field.crop;
  return { name: t.field(field.id), detail: `${crop} · ${formatNumber(field.areaHa, intl, 1)} ${t.units.area.ha}` };
}

/** "Field 31 · Barley · 18.4 ha" for the current locale. */
export function fieldLabel(field: ExampleField, t: UIStrings, intl: string): string {
  const p = fieldParts(field, t, intl);
  return `${p.name} · ${p.detail}`;
}
