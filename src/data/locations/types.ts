export interface LocationFaq {
  question: string;
  answer: string;
}

export interface District {
  slug: string;
  name: string;
  intro: string;
  majorServiceAreas: string[];
  servicesAvailable: string[];
  faqs: LocationFaq[];
}

export interface Location {
  slug: string;
  name: string;
  districtSlug: string;
  districtName: string;
  priority?: 'High' | 'Medium';
  h1?: string;
  primaryKeyword?: string;
  intro: string;
  geography: string;
  useCases: string[];
  customerTypes: string[];
  electricityContext: string;
  nearbyAreas: string[];
  faqs: LocationFaq[];
  metaTitle: string;
  metaDescription: string;
}

