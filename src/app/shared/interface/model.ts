export interface IVariationChart {
  chart?: IVariationResultChart;
}

export interface IVariationResultChart {
  error: string;
  result: IVariationResult[];
}

export interface IVariationResult {
  indicators?: Result;
  meta: any;
  timestamp: []
}

export interface Result {
  quotes: Quotes[]
}

export interface Quotes {
  exchDisp: string;
  exchange: string;
  index: string;
  isYahooFinance: boolean;
  quoteType: string;
  score: number;
  shortname: string;
  symbol?: string;
  typeDisp: string;
}

export interface VariationData {
  close: any;
  high: any;
  low: any;
  open: any;
  volume: any;
}

export interface IVariation {
  pregao: string;
  abertura: string;
  fechamento: number;
  diferencaPercentual: number | null;
  diferencaPercentualInicio: number | null;
}
