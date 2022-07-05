export const filterData = [
  {
    items: [
      { name: "Any", value: "any" },
      { name: "For Sale", value: "buying" },
      { name: "For Rent", value: "renting" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  // {
  //   items: [
  //     { name: 'Daily', value: 'daily' },
  //     { name: 'Weekly', value: 'weekly' },
  //     { name: 'Monthly', value: 'monthly' },
  //     { name: 'Yearly', value: 'yearly' },
  //   ],
  //   placeholder: 'Rent Frequency',
  //   queryName: 'rentFrequency',
  // },
  {
    items: [
      { name: "100,000", value: "100000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "850,000", value: "850000" },
      { name: "1,000,000", value: "1000000" },
    ],
    placeholder: "Min Price(DOP)",
    queryName: "minPrice",
  },
  {
    items: [
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "850,000", value: "850000" },
      { name: "1,000,000", value: "1000000" },
      { name: "1,500,000", value: "1500000" },
      { name: "1,750,000", value: "1750000" },
      { name: "2,000,000", value: "2000000" },
      { name: "3,000,000", value: "3000000" },
      { name: "4,000,000", value: "4000000" },
      { name: "5,000,000", value: "5000000" },
      { name: "7,500,000", value: "7500000" },
      { name: "10,000,000", value: "10000000" },
      { name: "15,000,000", value: "15000000" },
      { name: "20,000,000", value: "20000000" },
      { name: "30,000,000", value: "30000000" },
    ],
    placeholder: "Max Price(DOP)",
    queryName: "maxPrice",
  },
  {
    items: [
      { name: "None", value: "none" },
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-desc" },
      // { name: "Newest", value: "date-asc" },
      // { name: "Oldest", value: "date-desc" },
      // { name: "Verified", value: "verified-score" },
      // { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },
  {
    items: [
      { name: "1,000", value: "1000" },
      { name: "2,000", value: "2000" },
      { name: "3,000", value: "3000" },
      { name: "4,000", value: "4000" },
      { name: "5,000", value: "5000" },
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
    ],
    placeholder: "Max Area(sqm)",
    queryName: "areaMax",
  },
  {
    items: [
      { name: "-", value: 0 },
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
    ],
    placeholder: "Rooms",
    queryName: "roomsMin",
  },
  {
    items: [
      { name: "-", value: 0 },
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
    ],
    placeholder: "Baths",
    queryName: "bathsMin",
  },
  {
    items: [
      { name: "Any", value: "any" },
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },
  {
    items: [
      { name: "Any", value: "any" },
      { name: "Land", value: "land" },
      { name: "Residential", value: "residential" },
      // { name: "Townhouses", value: "16" },
      // { name: "Villas", value: "3" },
      // { name: "Penthouses", value: "18" },
      // { name: "Hotel Apartments", value: "21" },
      // { name: "Villa Compound", value: "19" },
      // { name: "Residential Plot", value: "14" },
      // { name: "Residential Floor", value: "12" },
      // { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "type",
  },
  {
    items: [
      { name: "Any", value: "any" },
      { name: "Verified", value: true },
      { name: "Not Verified", value: false },
    ],
    placeholder: "Verified",
    queryName: "isVerified",
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    type,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs,
    isVerified,
    furnishingStatus
  } = filterValues;

  const values = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "rentFrequency",
      value: rentFrequency,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },
    {
      name: "areaMax",
      value: areaMax,
    },
    {
      name: "roomsMin",
      value: roomsMin,
    },
    {
      name: "bathsMin",
      value: bathsMin,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "locationExternalIDs",
      value: locationExternalIDs,
    },
    {
      name: "type",
      value: type,
    },
    {
      name: "isVerified",
      value: isVerified,
    },
    {
      name: "furnishingStatus",
      value: furnishingStatus,
    },
  ];

  return values;
};
