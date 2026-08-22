export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Elevated Structures' | 'Hill Topography';
  location: string;
  district: string;
  capacity: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: '5 kW Elevated Rooftop Solar in Dehradun',
    category: 'Elevated Structures',
    location: 'Vasant Vihar, Dehradun',
    district: 'Dehradun',
    capacity: '5 kW',
    description: 'Hot-dip galvanized elevated structure providing 8 ft headroom for terrace gardening and recreation.',
  },
  {
    id: '2',
    title: '3 kW PM Surya Ghar Rooftop Plant in Haldwani',
    category: 'Residential',
    location: 'Kusumkhera, Haldwani',
    district: 'Nainital',
    capacity: '3 kW',
    description: 'Short-leg ballasted mounting with TopCon 550W bifacial modules.',
  },
  {
    id: '3',
    title: '150 kW Industrial Shed Solar in Rudrapur',
    category: 'Industrial',
    location: 'SIDCUL Pantnagar',
    district: 'Udham Singh Nagar',
    capacity: '150 kW',
    description: 'Trapezoidal metal shed array using non-penetrating seam clamps.',
  },
  {
    id: '4',
    title: '30 kW Hybrid Resort Solar in Ramnagar',
    category: 'Commercial',
    location: 'Dhikuli, Jim Corbett',
    district: 'Nainital',
    capacity: '30 kW',
    description: 'Boutique wildlife resort hybrid solar with 40 kWh lithium energy storage.',
  },
  {
    id: '5',
    title: '10 kW Sloped Roof Solar in Mussoorie',
    category: 'Hill Topography',
    location: 'Landour, Mussoorie',
    district: 'Dehradun',
    capacity: '10 kW',
    description: 'Engineered slope-roof mounting with snow load and mountain wind bracing.',
  },
  {
    id: '6',
    title: '40 kW Ashram Solar Installation in Rishikesh',
    category: 'Commercial',
    location: 'Swargashram, Rishikesh',
    district: 'Dehradun',
    capacity: '40 kW',
    description: 'Multi-block rooftop array serving spiritual center and guest accommodations.',
  },
  {
    id: '7',
    title: '25 kW Multi-Specialty Hospital Solar in Haldwani',
    category: 'Commercial',
    location: 'Nainital Road, Haldwani',
    district: 'Nainital',
    capacity: '25 kW',
    description: 'Commercial rooftop system powering hospital daytime clinical and cooling loads.',
  },
  {
    id: '8',
    title: '6 kW Residential Hybrid Solar in Ranikhet',
    category: 'Hill Topography',
    location: 'Majkhali, Ranikhet',
    district: 'Almora',
    capacity: '6 kW',
    description: 'Pine forest cottage installation with hybrid inverter and battery backup.',
  },
];
