export interface MediaListItem {
  id: string;
  title: string;
  kind: KindType;
  recommendedBy: string;
  consumed: boolean;
  dateConsumed: null | string;
}

export type KindType = 'show' | 'game';
