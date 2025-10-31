export interface JobExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: JobExperience[] = [
  {
    role: "Associate Lawyer",
    company: "Wetmen Sinaga & Rekan Law Firm",
    period: "2023 - 2025",
    description:
      "Led drafting and reviewing corporate and commercial contracts, represented clients in litigation proceedings.",
  },
  {
    role: "Junior Corporate Lawyer",
    company: "Lubis Ganie Surowidjojo Law Firm",
    period: "2017 - 2022",
    description:
      "Supported senior lawyers through legal research, legal administration and coordinated with relevant officials to satisty clients needs.",
  },
  {
    role: "Front Officer",
    company: "PT Bank UOB Indonesia",
    period: "2015 - 2017",
    description:
      "Resolved customers complaints, assisted in transactions, and verified customer data to comply with KYC and relevant regulations.",
  },
];
