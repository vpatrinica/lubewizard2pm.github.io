
export interface BomItem {
  category: string;
  part: string;
  qty: number | string;
  unitPrice?: number;
  unitPrice1k?: number;
  moq?: number;
  total20: number | null;
  total200: number | null;
  total1k: number | null;
  reference?: string;
}

export type Volume = 20 | 200 | 1000;
