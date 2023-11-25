export type TAnalysis = {
  exportDocsCount: number;
  fdaCount: number;
  warehousingCount: number;
};

export type TDashboardGraphItem = Record<'createdAt', string>;

export type TDashboardLineChartData = {
  exportDocs: TDashboardGraphItem[];
  fdaRegistration: TDashboardGraphItem[];
};

export type TDashboardLineChartDTO = Partial<
  Record<'startDate' | 'endDate', string>
>;
