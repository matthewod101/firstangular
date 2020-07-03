export interface MediaListItem {
  id: string;
  title: string;
  kind: KindType;
  recommendedBy: string;
  consumed: boolean;
  dateConsumed: null | string;
  isTemporary: boolean;
}

export type KindType = 'show' | 'game';
