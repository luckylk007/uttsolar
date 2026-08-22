// Comprehensive Uttarakhand Postal Directory (PIN Codes & Post Offices for all 13 Districts)

export interface PostalOffice {
  name: string;
  pincode: string;
}

export interface DistrictPostalInfo {
  districtSlug: string;
  districtName: string;
  pincodes: {
    code: string;
    postOffices: string[];
  }[];
}

export const UTTARAKHAND_POSTAL_DATA: Record<string, DistrictPostalInfo> = {
  dehradun: {
    districtSlug: 'dehradun',
    districtName: 'Dehradun',
    pincodes: [
      {
        code: '248001',
        postOffices: ['Dehradun GPO', 'Paltan Bazaar', 'Clock Tower SO', 'Dilaram Bazar', 'Karanpur', 'Chander Nagar', 'Astley Hall', 'Paltan Bazar SO', 'Gandhi Road', 'Darshani Gate', 'Jhanda Mohalla'],
      },
      {
        code: '248002',
        postOffices: ['Dehradun City SO', 'Laxman Chowk', 'Govind Nagar', 'Subhash Nagar Dehradun', 'Patel Nagar East', 'Dehradun Kutchery'],
      },
      {
        code: '248003',
        postOffices: ['Forest Research Institute (FRI) SO', 'Kaulagarh', 'Ballupur', 'Vasant Vihar Dehradun', 'Indira Nagar Dehradun', 'Wadia Institute', 'Chakrata Road SO'],
      },
      {
        code: '248004',
        postOffices: ['IMA (Indian Military Academy) SO', 'Premnagar SO', 'Nanda Ki Chowki', 'Bidholi', 'Manduwala', 'Sudhowala', 'Jhajra', 'Donga', 'Selaqui Industrial Area'],
      },
      {
        code: '248005',
        postOffices: ['Clement Town SO', 'Subhash Nagar (Clement Town)', 'Bharuwala Grant', 'Turner Road', 'Mohabewala Industrial Area', 'Bell Road'],
      },
      {
        code: '248006',
        postOffices: ['Hathibarkala SO', 'Survey of India', 'Anarwala', 'Dilaram Chowk', 'Vijay Colony', 'Garhi Cantt'],
      },
      {
        code: '248007',
        postOffices: ['ONGC Telbhavan SO', 'Kaulagarh Road', 'Govt Press', 'Chander Nagar Chowk'],
      },
      {
        code: '248008',
        postOffices: ['New Forest SO', 'FRI Campus', 'Panditwari', 'Haridwar Byepass'],
      },
      {
        code: '248009',
        postOffices: ['Raipur SO', 'Ordnance Factory Raipur', 'Ladpur', 'Nehrugram', 'Nathanpur', 'Ring Road Dehradun', 'Miyawala', 'Tapovan'],
      },
      {
        code: '248011',
        postOffices: ['Sahasradhara Road SO', 'Dhoran Khas', 'Kandoli', 'Kewal Vihar', 'IT Park Dehradun', 'Aman Vihar', 'Rajpur Road Bypass'],
      },
      {
        code: '248013',
        postOffices: ['Doiwala SO', 'Bhaniawala', 'Jolly Grant Airport', 'Rishikesh Road', 'Kudawala', 'Markham Grant', 'Ranipokhari SO'],
      },
      {
        code: '248014',
        postOffices: ['Dakra Bazar SO', 'Garhi Cantt SO', 'Birpur', 'Nimbuwala'],
      },
      {
        code: '248015',
        postOffices: ['Vikasnagar SO', 'Herbertpur SO', 'Dakpathar SO', 'Kalsi SO', 'Langha', 'Dharmawala', 'Chharba', 'Sahaspur SO', 'Timli', 'Kattapathar'],
      },
      {
        code: '248016',
        postOffices: ['Selakui SO', 'Central Hope Town', 'Bahadurpur', 'Rampur Selaqui'],
      },
      {
        code: '248121',
        postOffices: ['Rishikesh SO', 'Muni Ki Reti', 'Triveni Ghat', 'Veerbhadra (IDPL) SO', 'Shyampur Rishikesh', 'Gumaniwala', 'Kharakmaf', 'Pashulok'],
      },
      {
        code: '248122',
        postOffices: ['IDPL Virbhadra SO', 'Barrage Colony', 'Seema Dental College', 'AIIMS Rishikesh Camp'],
      },
      {
        code: '248171',
        postOffices: ['Mussoorie HO', 'Kulri SO', 'Library Bazaar', 'Landour Cantt', 'Happy Valley', 'Jharipani', 'Bhatta Fall', 'Barlowganj SO', 'Kempty Fall Road'],
      },
      {
        code: '248179',
        postOffices: ['Chakrata SO', 'Kalsi Tehsil', 'Tuini SO', 'Hanol', 'Tyuni', 'Kwanu', 'Sahiya SO', 'Nagthat', 'Chakrata Cantt'],
      },
      {
        code: '248197',
        postOffices: ['Rishikesh Market SO', 'Rishikesh Railway Station', 'Railway Road Rishikesh', 'Ganga Nagar Rishikesh'],
      },
    ],
  },
  haridwar: {
    districtSlug: 'haridwar',
    districtName: 'Haridwar',
    pincodes: [
      {
        code: '249401',
        postOffices: ['Haridwar HO', 'Har Ki Pauri SO', 'Bhimgauda', 'Kankhal SO', 'Mayapur', 'Lalta Rao Bridge', 'Moti Bazar', 'Upper Road', 'Jwalapur Chowk', 'Kharkhari SO'],
      },
      {
        code: '249402',
        postOffices: ['Bahadrabad SO', 'Salempur', 'Atmalpur', 'Ruhalki', 'Daluwala', 'Daudpur'],
      },
      {
        code: '249403',
        postOffices: ['BHEL Ranipur SO', 'Sector 1 BHEL', 'Sector 4 BHEL', 'Sector 5 BHEL', 'Shivalik Nagar SO', 'Roshanabad SO', 'Collectorate Roshanabad'],
      },
      {
        code: '249404',
        postOffices: ['Gurukul Kangri SO', 'Singh Dwar', 'Arya Nagar Jwalapur', 'Jagjeetpur', 'Sitapur Haridwar'],
      },
      {
        code: '249407',
        postOffices: ['Jwalapur SO', 'Jwalapur Railway Station', 'Kotwali Jwalapur', 'Peepli', 'Sarai Jwalapur', 'Subhash Nagar Jwalapur'],
      },
      {
        code: '249408',
        postOffices: ['Kankhal SO', 'Daksh Prajapati Temple Area', 'Sati Ghat', 'Sandesh Nagar', 'Bairagi Camp'],
      },
      {
        code: '249410',
        postOffices: ['Rishikul SO', 'Devpura', 'Railway Station Haridwar', 'Govindpuri'],
      },
      {
        code: '247667',
        postOffices: ['Roorkee HO', 'IIT Roorkee SO', 'Civil Lines Roorkee', 'CBRI Roorkee', 'NIH Roorkee', 'BEG & Centre', 'Ramnagar Roorkee', 'Ganeshpur Roorkee'],
      },
      {
        code: '247666',
        postOffices: ['Roorkee Cantt SO', 'Military Hospital Roorkee', 'Landeha', 'Piran Kaliyar SO'],
      },
      {
        code: '247656',
        postOffices: ['Bhagwanpur SO', 'Chudiyala', 'Sikanderpur', 'Choli', 'Iqbalpur SO', 'Karaundi', 'Raipur Bhagwanpur'],
      },
      {
        code: '247663',
        postOffices: ['Laksar SO', 'Sultanpur Laksar', 'Raisi SO', 'Khanpur SO', 'Govardhanpur', 'Dhandera SO', 'Landhaura SO', 'Manglaur SO', 'Gurukul Narsan SO'],
      },
    ],
  },
  nainital: {
    districtSlug: 'nainital',
    districtName: 'Nainital',
    pincodes: [
      {
        code: '263001',
        postOffices: ['Nainital HO', 'Mallital SO', 'Tallital SO', 'Ayarpatta', 'Snow View', 'Raj Bhavan Nainital', 'High Court Campus', 'Sukhatal', 'Nainital Club'],
      },
      {
        code: '263002',
        postOffices: ['Tallital SO', 'Bhimtal Road', 'Haldwani Road Toll', 'Jeolikote SO', 'Pangot', 'Kilbury'],
      },
      {
        code: '263139',
        postOffices: ['Haldwani HO', 'Kaladhungi Road', 'Nainital Road Haldwani', 'Tikonia', 'Heera Nagar', 'Bhotia Parao', 'Bareilly Road Haldwani', 'Pilikothi', 'Awas Vikas Haldwani', 'Gas Godam Road', 'Rampur Road Haldwani', 'Kusumkhera SO'],
      },
      {
        code: '263126',
        postOffices: ['Kathgodam SO', 'Kathgodam Railway Station', 'Damuadhunga', 'Sheeshmahal', 'Kalan Khera'],
      },
      {
        code: '263136',
        postOffices: ['Bhimtal SO', 'Naukuchiatal', 'Bhowali SO', 'Ghorakhal', 'Sattal', 'Bhowali Sanatorium', 'Kainchi Dham SO'],
      },
      {
        code: '263132',
        postOffices: ['Mukteshwar SO', 'IVRI Mukteshwar', 'Dhanachuli', 'Paharpani', 'Bhatelia', 'Ramgarh SO', 'Gagar', 'Hartola'],
      },
      {
        code: '263135',
        postOffices: ['Ramnagar HO', 'Corbett National Park Office', 'Dhikala Road', 'Pirumadara SO', 'Chilkiya', 'Garjia SO', 'Mohan', 'Bailparao SO', 'Kotabagh SO'],
      },
      {
        code: '263140',
        postOffices: ['Kaladhungi SO', 'Chhoti Haldwani', 'Kamola', 'Dhamola', 'Pandeygaon'],
      },
      {
        code: '263144',
        postOffices: ['Lalkuan SO', 'Century Pulp & Paper Mill Area', 'Bindukhatta', 'Haldumod', 'Golapar SO', 'Chorgallia SO'],
      },
      {
        code: '263153',
        postOffices: ['Mukhani SO', 'Lama Chaur', 'Haripur Nayak', 'Kamaluaganja', 'Fatehpur Haldwani'],
      },
    ],
  },
  'udham-singh-nagar': {
    districtSlug: 'udham-singh-nagar',
    districtName: 'Udham Singh Nagar',
    pincodes: [
      {
        code: '263153',
        postOffices: ['Rudrapur HO', 'Civil Lines Rudrapur', 'Awas Vikas Rudrapur', 'Collectorate Rudrapur', 'SIDCUL Rudrapur SO', 'Pantnagar Industrial Estate', 'Kichha Bypass', 'Danpur', 'Fulsunga', 'Rampura Rudrapur'],
      },
      {
        code: '263145',
        postOffices: ['Pantnagar SO', 'GB Pant University Campus', 'Nagla', 'Pantnagar Airport Area', 'Haldi SO', 'Shantipuri SO'],
      },
      {
        code: '263148',
        postOffices: ['Kichha SO', 'Kichha Mandi', 'Sirsa', 'Dungarpur', 'Baradari', 'Bungachi'],
      },
      {
        code: '244713',
        postOffices: ['Kashipur HO', 'Kundeshwari SO', 'Aliganj Kashipur', 'Mahuakheraganj SO', 'Cheema Paper Mill Area', 'Bazpur Road Kashipur', 'Station Road Kashipur'],
      },
      {
        code: '262405',
        postOffices: ['Sitarganj SO', 'Eldeco SIDCUL Sitarganj', 'Nanakmatta SO', 'Bijti', 'Sarkara', 'Tanakpur Road Sitarganj', 'Amariya Road'],
      },
      {
        code: '262406',
        postOffices: ['Khatima HO', 'Tanakpur Road Khatima', 'Melaghat', 'Jhula Pul', 'Lohiyahead', 'Majhola Border Area', 'Bigra Bagh', 'Chakarpur SO'],
      },
      {
        code: '262401',
        postOffices: ['Bazpur SO', 'Bannakhera', 'Doraha', 'Gularbhoj SO', 'Kelakhera SO', 'Sultanpur Patti SO', 'Beriat Daulat'],
      },
      {
        code: '262402',
        postOffices: ['Gadarpur SO', 'Dineshpur SO', 'Kulha', 'Motahaldu Border', 'Gaughat'],
      },
      {
        code: '244715',
        postOffices: ['Jaspur SO', 'Patrampur', 'Afzalgarh Road', 'Bhagwantpur', 'Megawala'],
      },
      {
        code: '262311',
        postOffices: ['Nanakmatta Gurdwara SO', 'Dhaura Dam', 'Deori', 'Bariyan'],
      },
    ],
  },
  almora: {
    districtSlug: 'almora',
    districtName: 'Almora',
    pincodes: [
      {
        code: '263601',
        postOffices: ['Almora HO', 'Lala Bazar', 'Mall Road Almora', 'Dharanaula SO', 'Brighton End Corner', 'Kasar Devi', 'Matena', 'Binsar Sanctuary Road', 'Khatyari'],
      },
      {
        code: '263628',
        postOffices: ['Ranikhet HO', 'Ranikhet Cantt', 'KRC Centre', 'Chaubatia Garden SO', 'Chiliyanaula SO', 'Majkhali SO', 'Tarikhet SO', 'Sauni', 'Kalika'],
      },
      {
        code: '263656',
        postOffices: ['Dwarahat SO', 'Engineering College Dwarahat', 'Chaukhutiya SO', 'Ganai', 'Masi SO', 'Bhikiyasain SO', 'Dunagiri Temple SO', 'Syaldey SO'],
      },
      {
        code: '263623',
        postOffices: ['Someshwar SO', 'Kausani Road', 'Chanoda', 'Lodhiya', 'Hawalbagh SO', 'Takula SO'],
      },
      {
        code: '263622',
        postOffices: ['Bageshwar Road Almora', 'Binta', 'Kosi SO', 'Katarmal Sun Temple Area'],
      },
      {
        code: '263646',
        postOffices: ['Jageshwar Dham SO', 'Dhauladevi SO', 'Bhanoli SO', 'Chitrashila', 'Artola', 'Barechhina SO'],
      },
      {
        code: '263658',
        postOffices: ['Sult SO', 'Manila SO', 'Jalali SO', 'Bhikyasen SO', 'Deghat SO'],
      },
    ],
  },
  bageshwar: {
    districtSlug: 'bageshwar',
    districtName: 'Bageshwar',
    pincodes: [
      {
        code: '263642',
        postOffices: ['Bageshwar HO', 'Bagnath Temple Area', 'Kanda SO', 'Kapkot SO', 'Dharamghar SO', 'Baijnath SO', 'Garur SO', 'Kausani SO', 'Pindari Glacier Base', 'Shama SO'],
      },
      {
        code: '263641',
        postOffices: ['Garur SO', 'Baijnath Heritage Area', 'Gwaldam Road Garur', 'Dungri', 'Loharkhet', 'Song'],
      },
      {
        code: '263631',
        postOffices: ['Kanda SO', 'Vijaypur', 'Sani Udiyar', 'Rawatsera'],
      },
      {
        code: '263632',
        postOffices: ['Kapkot SO', 'Himalayan Range Base', 'Bharadi', 'Khati', 'Wachham'],
      },
    ],
  },
  chamoli: {
    districtSlug: 'chamoli',
    districtName: 'Chamoli',
    pincodes: [
      {
        code: '246401',
        postOffices: ['Gopeshwar HO', 'Chamoli Market SO', 'Collectorate Gopeshwar', 'Mandal', 'Pokhari SO', 'Nandprayag SO', 'Ghat SO'],
      },
      {
        code: '246443',
        postOffices: ['Joshimath SO', 'Auli Camp', 'Badrinath Dham SO', 'Govindghat SO', 'Valley of Flowers Base', 'Hemkund Sahib Route', 'Pandukeshwar SO', 'Mana Village'],
      },
      {
        code: '246444',
        postOffices: ['Karnaprayag SO', 'Gauchar SO', 'Mehalchauri', 'Adibadri SO', 'Gwaldam SO', 'Simli SO', 'Tharali SO', 'Dewal SO'],
      },
      {
        code: '246473',
        postOffices: ['Pipalkoti SO', 'Birahi', 'Helang', 'Gulabkoti'],
      },
      {
        code: '246422',
        postOffices: ['Badrinath Dham SO', 'Mana Post', 'Hanuman Chatti'],
      },
    ],
  },
  champawat: {
    districtSlug: 'champawat',
    districtName: 'Champawat',
    pincodes: [
      {
        code: '262523',
        postOffices: ['Champawat HO', 'Baleshwar Temple Area', 'Lohaghat SO', 'Mayawati Ashram SO', 'Abbott Mount', 'Devidhura SO', 'Purnagiri Temple Area', 'Tanakpur SO', 'Banu Basa SO'],
      },
      {
        code: '262524',
        postOffices: ['Lohaghat SO', 'Koli Dhwek', 'Raika', 'Rithasathib'],
      },
      {
        code: '262527',
        postOffices: ['Tanakpur SO', 'Sharda Barrage', 'Banbasa SO', 'Tanakpur Railway Station'],
      },
      {
        code: '262580',
        postOffices: ['Devidhura SO', 'Varahi Devi Temple Area', 'Pulla', 'Khetikhan SO'],
      },
    ],
  },
  'pauri-garhwal': {
    districtSlug: 'pauri-garhwal',
    districtName: 'Pauri Garhwal',
    pincodes: [
      {
        code: '246001',
        postOffices: ['Pauri HO', 'Civil Lines Pauri', 'Kandolia', 'Ransi Ground', 'Srinagar Garhwal SO', 'HNB Garhwal University Campus', 'Khirsu SO', 'Thalisain SO'],
      },
      {
        code: '246149',
        postOffices: ['Kotdwar HO', 'Badrinath Road Kotdwar', 'Station Road Kotdwar', 'Balawala', 'Kanvashram', 'Kishanpur', 'Siddhabali Temple Area', 'Ratanpur Kotdwar'],
      },
      {
        code: '246174',
        postOffices: ['Srinagar Garhwal SO', 'Medical College Srinagar', 'Alaknanda Hydel Area', 'Chhan', 'Srikot Gangnali', 'Kirtinagar Bridge'],
      },
      {
        code: '246155',
        postOffices: ['Lansdowne SO', 'Lansdowne Cantt', 'Jaiharikhal SO', 'Gumkhal SO', 'Dugadda SO', 'Yamkeshwar SO', 'Rikhnikhal SO'],
      },
      {
        code: '246127',
        postOffices: ['Satpuli SO', 'Ekeshwar SO', 'Bironkhal SO', 'Chakisain SO', 'Pokhra SO', 'Naugaonkhal SO'],
      },
    ],
  },
  pithoragarh: {
    districtSlug: 'pithoragarh',
    districtName: 'Pithoragarh',
    pincodes: [
      {
        code: '262501',
        postOffices: ['Pithoragarh HO', 'Siltham', 'Naya Bazar Pithoragarh', 'Wadda SO', 'Chandak', 'Kumaur', 'Aincholi', 'Pithoragarh Airport Area'],
      },
      {
        code: '262520',
        postOffices: ['Dharchula SO', 'Tawaghat', 'Gunji', 'Lipulekh Route', 'Narayan Ashram Route', 'Jauljibi SO', 'Askot SO'],
      },
      {
        code: '262551',
        postOffices: ['Didihat SO', 'Berinag SO', 'Chaukori SO', 'Gangolihat SO', 'Patal Bhuvaneshwar SO', 'Munsiari SO', 'Madkot', 'Birthi Fall Area'],
      },
      {
        code: '262530',
        postOffices: ['Gangolihat SO', 'Hat Kalika Temple Area', 'Banthal', 'Dasholi'],
      },
      {
        code: '262554',
        postOffices: ['Munsiari SO', 'Panchachuli Base', 'Madkot', 'Girgaon', 'Quiti'],
      },
    ],
  },
  rudraprayag: {
    districtSlug: 'rudraprayag',
    districtName: 'Rudraprayag',
    pincodes: [
      {
        code: '246171',
        postOffices: ['Rudraprayag HO', 'Sangam Bazar', 'Belni', 'Tilwara SO', 'Agastyamuni SO', 'Chandrapuri', 'Syalsaur', 'Kund SO', 'Guptkashi SO'],
      },
      {
        code: '246439',
        postOffices: ['Guptkashi SO', 'Phata SO', 'Sonprayag SO', 'Gaurikund SO', 'Kedarnath Dham SO', 'Triyuginarayan SO', 'Ukhimath SO', 'Chopta Route', 'Tungnath Base', 'Sari Village'],
      },
      {
        code: '246471',
        postOffices: ['Ukhimath SO', 'Omkareshwar Temple Area', 'Mansuna', 'Ransi', 'Madhyamaheshwar Base'],
      },
      {
        code: '246421',
        postOffices: ['Jakholi SO', 'Mayali SO', 'Chirbatiya', 'Lwarkha'],
      },
      {
        code: '246445',
        postOffices: ['Kedarnath Dham SO', 'Lincholi', 'Jungle Chatti', 'Kedarnath Shrine Base'],
      },
    ],
  },
  'tehri-garhwal': {
    districtSlug: 'tehri-garhwal',
    districtName: 'Tehri Garhwal',
    pincodes: [
      {
        code: '249001',
        postOffices: ['New Tehri HO', 'Baurari', 'Collectorate Tehri', 'Tehri Dam Site SO', 'Koti Colony (Tehri Lake)', 'Bhagirathipuram SO', 'Chamba SO', 'Dhanaulti SO', 'Kanatal SO', 'Kaddukhal (Surkanda Devi)'],
      },
      {
        code: '249145',
        postOffices: ['Chamba SO', 'Rishikesh-Gangotri Highway Area', 'Sursinghdhar', 'Thauldhar SO', 'Jakhnidhar SO'],
      },
      {
        code: '249175',
        postOffices: ['Narendra Nagar SO', 'Ananda Resort Area', 'Kunjapuri Temple Area', 'Fakot SO', 'Muni Ki Reti (Tehri Side) SO', 'Dhalwala SO', 'Tapovan (Tehri Side) SO'],
      },
      {
        code: '249124',
        postOffices: ['Devprayag SO', 'Bhagirathi-Alaknanda Sangam', 'Hindolakhal SO', 'Ghansali SO', 'Chamyala SO', 'Pilkhir', 'Kandi Saur SO', 'Pratapnagar SO', 'Lambgaon SO'],
      },
      {
        code: '249180',
        postOffices: ['Dhanaulti SO', 'Eco Park Area', 'Buranskhanda', 'Suwakholi', 'Kanatal SO'],
      },
    ],
  },
  uttarkashi: {
    districtSlug: 'uttarkashi',
    districtName: 'Uttarkashi',
    pincodes: [
      {
        code: '249193',
        postOffices: ['Uttarkashi HO', 'Vishwanath Temple Area', 'NIM (Nehru Institute of Mountaineering)', 'Bhatwari SO', 'Maneri SO', 'Harsil SO', 'Gangotri Dham SO', 'Dharasu SO', 'Chinyalisaur SO'],
      },
      {
        code: '249141',
        postOffices: ['Barkot SO', 'Yamunotri Dham Route', 'Janki Chatti SO', 'Hanuman Chatti SO', 'Naugaon SO', 'Purola SO', 'Mori SO', 'Sankri (Har Ki Dun Base) SO'],
      },
      {
        code: '249135',
        postOffices: ['Gangotri Dham SO', 'Gaumukh Route', 'Bhaironghati', 'Lanka', 'Harsil Apple Valley Area'],
      },
      {
        code: '249152',
        postOffices: ['Chinyalisaur SO', 'Tehri Lake Airstrip Area', 'Dharasu Band', 'Matli SO', 'Dunda SO'],
      },
      {
        code: '249185',
        postOffices: ['Purola SO', 'Kamal Valley', 'Mori SO', 'Naitwar SO', 'Sankri SO'],
      },
    ],
  },
};

// Helper lookup functions
export function getPostalDataForDistrict(districtSlug: string): DistrictPostalInfo | undefined {
  return UTTARAKHAND_POSTAL_DATA[districtSlug];
}

export function getAllPincodesForDistrict(districtSlug: string): string[] {
  const district = UTTARAKHAND_POSTAL_DATA[districtSlug];
  if (!district) return [];
  return district.pincodes.map((p) => p.code).sort();
}

export function getAllPostOfficesForDistrict(districtSlug: string): PostalOffice[] {
  const district = UTTARAKHAND_POSTAL_DATA[districtSlug];
  if (!district) return [];
  const list: PostalOffice[] = [];
  const seen = new Set<string>();

  for (const pin of district.pincodes) {
    for (const po of pin.postOffices) {
      if (!seen.has(po)) {
        seen.add(po);
        list.push({ name: po, pincode: pin.code });
      }
    }
  }

  return list.sort((a, b) => a.name.localeCompare(b.name));
}

export function getPostOfficesByPincode(districtSlug: string, pincode: string): string[] {
  const district = UTTARAKHAND_POSTAL_DATA[districtSlug];
  if (!district) return [];
  const match = district.pincodes.find((p) => p.code === pincode);
  return match ? [...match.postOffices].sort() : [];
}

export function getPincodeForPostOffice(districtSlug: string, postOfficeName: string): string | undefined {
  const district = UTTARAKHAND_POSTAL_DATA[districtSlug];
  if (!district) return undefined;
  for (const pin of district.pincodes) {
    if (pin.postOffices.includes(postOfficeName)) {
      return pin.code;
    }
  }
  return undefined;
}

export function validatePostalCombination(districtSlug: string, pincode: string, postOfficeName?: string): boolean {
  const district = UTTARAKHAND_POSTAL_DATA[districtSlug];
  if (!district) return false;
  const pinObj = district.pincodes.find((p) => p.code === pincode);
  if (!pinObj) return false;
  if (postOfficeName && !pinObj.postOffices.includes(postOfficeName)) {
    return false;
  }
  return true;
}
