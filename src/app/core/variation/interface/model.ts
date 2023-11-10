export interface IVariationChart {
  chart?: IVariationResultChart;
}

export interface IVariationResultChart {
  error: string;
  result: IVariationResult[];
}


export interface IVariationResult {
  indicators: {
    quote: []
  };
  meta: any;
  timestamp: []
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
