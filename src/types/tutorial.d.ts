export type Instruction = {
  label: string;
  description: string;
  command?: string;
};

export type Tutorial = {
  id: string;
  title: string;
  instructions: Instruction[];
  publishedAt: string;
  publishedBy: string;
  done?: boolean;
};
