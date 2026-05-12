export interface Region {
  code: string;
  name: string;
  type: string;
  cities: string[];
}

export const VANCOUVER_ISLAND_REGION: Region = {
  code: 'VI',
  name: 'Vancouver Island',
  type: 'Core Service Area',
  cities: [
    // Column 1
    'Victoria',
    'Saanich',
    'Langford',
    'Comox Valley',

    // Column 2
    'Sidney',
    'Duncan',
    'Campbell River',
    'Qualicum Beach',

    // Column 3
    'Nanaimo',
    'Courtenay',
    'Parksville',
    'Central Saanich',
  ],
};

