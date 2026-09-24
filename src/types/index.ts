export type EmployeeStatus = 'Testing' | 'Researching / Building' | 'Researching';

export interface AiEmployee {
  id: string;
  name: string;
  status: EmployeeStatus;
  statusDetails: string;
  problem: string;
  whatItDoes: string;
  technicalArchitecture: string[];
  currentMilestone: string;
  relatedToolId?: string;
  relatedOfferRoute?: string;
  buildLogId?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  problemMeasured: string;
  targetUser: string;
  status: string;
  externalUrl: string;
  isExternalVercel: boolean;
  notes: string;
  relatedOfferRoute: string;
}

export interface BuildLog {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  summary: string;
  problem: string;
  research: string;
  build: string;
  toolsUsed: string[];
  cost: string;
  whatBroke: string;
  testing: string;
  result: string;
  wouldIBuildItAgain: string;
  videoUrl?: string;
  videoPlaceholderText?: string;
  relatedTool?: {
    name: string;
    url: string;
  };
  relatedOffer?: {
    title: string;
    route: string;
  };
}
