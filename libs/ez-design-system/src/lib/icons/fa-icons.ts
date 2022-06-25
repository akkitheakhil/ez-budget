import * as FONTAWESOME from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

const FAIcons = new Map(Object.entries(FONTAWESOME));

export type FAIcon = IconDefinition;

export const getFAIcon = (name: string): FAIcon => {
  return FAIcons.get(name) as IconDefinition;
}
