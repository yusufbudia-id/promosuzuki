// Product interface
export interface Product {
  id: string
  model: string
  type: string
  transmission: string
  otrPrice: number
  bonusPromo: number | null
  nettPrice: number
  hasPromo: boolean
  image: string
  isRepresentative: boolean
}

// All products data
const allProducts: Product[] = [
  // Fronx
  {
    id: 'fronx-gl-mt',
    model: 'Fronx',
    type: 'GL',
    transmission: 'MT',
    otrPrice: 263800000,
    bonusPromo: 14000000,
    nettPrice: 249800000,
    hasPromo: true,
    isRepresentative: true,
  },
  {
    id: 'fronx-gl-at',
    model: 'Fronx',
    type: 'GL',
    transmission: 'AT',
    otrPrice: 275800000,
    bonusPromo: 14000000,
    nettPrice: 261800000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'fronx-gx-mt',
    model: 'Fronx',
    type: 'GX',
    transmission: 'MT',
    otrPrice: 280800000,
    bonusPromo: 9000000,
    nettPrice: 271800000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'fronx-gx-at',
    model: 'Fronx',
    type: 'GX',
    transmission: 'AT',
    otrPrice: 298800000,
    bonusPromo: 9000000,
    nettPrice: 289800000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'fronx-sgx-one-tone-at',
    model: 'Fronx',
    type: 'SGX One Tone',
    transmission: 'AT',
    otrPrice: 324800000,
    bonusPromo: 9000000,
    nettPrice: 315800000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'fronx-sgx-two-tone-at',
    model: 'Fronx',
    type: 'SGX Two Tone',
    transmission: 'AT',
    otrPrice: 326800000,
    bonusPromo: 9000000,
    nettPrice: 317800000,
    hasPromo: true,
    isRepresentative: false,
  },

  // XL7 Hybrid
  {
    id: 'xl7-hybrid-zeta-mt',
    model: 'XL7 Hybrid',
    type: 'Zeta',
    transmission: 'MT',
    otrPrice: 272350000,
    bonusPromo: 23000000,
    nettPrice: 249350000,
    hasPromo: true,
    isRepresentative: true,
  },
  {
    id: 'xl7-hybrid-zeta-at',
    model: 'XL7 Hybrid',
    type: 'Zeta',
    transmission: 'AT',
    otrPrice: 283500000,
    bonusPromo: 23000000,
    nettPrice: 260500000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-beta-mt',
    model: 'XL7 Hybrid',
    type: 'Beta',
    transmission: 'MT',
    otrPrice: 294500000,
    bonusPromo: 25000000,
    nettPrice: 269500000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-beta-at',
    model: 'XL7 Hybrid',
    type: 'Beta',
    transmission: 'AT',
    otrPrice: 305500000,
    bonusPromo: 25000000,
    nettPrice: 280500000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-alpha-mt',
    model: 'XL7 Hybrid',
    type: 'Alpha',
    transmission: 'MT',
    otrPrice: 305700000,
    bonusPromo: 25000000,
    nettPrice: 280700000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-alpha-at',
    model: 'XL7 Hybrid',
    type: 'Alpha',
    transmission: 'AT',
    otrPrice: 316600000,
    bonusPromo: 25000000,
    nettPrice: 291600000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-alpha-2-tone-at',
    model: 'XL7 Hybrid',
    type: 'Alpha 2 Tone',
    transmission: 'AT',
    otrPrice: 318700000,
    bonusPromo: 25000000,
    nettPrice: 293700000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-alpha-kuro-at',
    model: 'XL7 Hybrid',
    type: 'Alpha Kuro',
    transmission: 'AT',
    otrPrice: 320600000,
    bonusPromo: 22000000,
    nettPrice: 298600000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'xl7-hybrid-alpha-kuro-2-tone-at',
    model: 'XL7 Hybrid',
    type: 'Alpha Kuro 2 Tone',
    transmission: 'AT',
    otrPrice: 322700000,
    bonusPromo: 22000000,
    nettPrice: 300700000,
    hasPromo: true,
    isRepresentative: false,
  },

  // Ertiga Hybrid
  {
    id: 'ertiga-hybrid-gl-mt',
    model: 'Ertiga Hybrid',
    type: 'GL',
    transmission: 'MT',
    otrPrice: 268150000,
    bonusPromo: 26000000,
    nettPrice: 242150000,
    hasPromo: true,
    isRepresentative: true,
  },
  {
    id: 'ertiga-hybrid-gl-at',
    model: 'Ertiga Hybrid',
    type: 'GL',
    transmission: 'AT',
    otrPrice: 279200000,
    bonusPromo: 26000000,
    nettPrice: 253200000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'ertiga-hybrid-gx-mt',
    model: 'Ertiga Hybrid',
    type: 'GX',
    transmission: 'MT',
    otrPrice: 283250000,
    bonusPromo: 26000000,
    nettPrice: 257250000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'ertiga-hybrid-gx-at',
    model: 'Ertiga Hybrid',
    type: 'GX',
    transmission: 'AT',
    otrPrice: 294400000,
    bonusPromo: 26000000,
    nettPrice: 268400000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'ertiga-hybrid-cruise-mt',
    model: 'Ertiga Hybrid',
    type: 'Cruise',
    transmission: 'MT',
    otrPrice: 296400000,
    bonusPromo: 24000000,
    nettPrice: 272400000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'ertiga-hybrid-cruise-2-tone-mt',
    model: 'Ertiga Hybrid',
    type: 'Cruise 2 Tone',
    transmission: 'MT',
    otrPrice: 298400000,
    bonusPromo: 24000000,
    nettPrice: 274400000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'ertiga-hybrid-cruise-at',
    model: 'Ertiga Hybrid',
    type: 'Cruise',
    transmission: 'AT',
    otrPrice: 307400000,
    bonusPromo: 24000000,
    nettPrice: 283400000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'ertiga-hybrid-cruise-2-tone-at',
    model: 'Ertiga Hybrid',
    type: 'Cruise 2 Tone',
    transmission: 'AT',
    otrPrice: 309400000,
    bonusPromo: 24000000,
    nettPrice: 285400000,
    hasPromo: true,
    isRepresentative: false,
  },

  // Carry Pickup
  {
    id: 'carry-pickup-fd',
    model: 'Carry Pickup',
    type: 'FD',
    transmission: '-',
    otrPrice: 179350000,
    bonusPromo: 34000000,
    nettPrice: 145350000,
    hasPromo: true,
    isRepresentative: true,
  },
  {
    id: 'carry-pickup-wd',
    model: 'Carry Pickup',
    type: 'WD',
    transmission: '-',
    otrPrice: 180450000,
    bonusPromo: 34000000,
    nettPrice: 146450000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'carry-pickup-fd-ac-ps',
    model: 'Carry Pickup',
    type: 'FD AC PS',
    transmission: '-',
    otrPrice: 187350000,
    bonusPromo: 34000000,
    nettPrice: 153350000,
    hasPromo: true,
    isRepresentative: false,
  },
  {
    id: 'carry-pickup-wd-ac-ps',
    model: 'Carry Pickup',
    type: 'WD AC PS',
    transmission: '-',
    otrPrice: 188250000,
    bonusPromo: 34000000,
    nettPrice: 154250000,
    hasPromo: true,
    isRepresentative: false,
  },

  // S-Presso
  {
    id: 's-presso-standard-mt',
    model: 'S-Presso',
    type: 'Standard',
    transmission: 'MT',
    otrPrice: 188900000,
    bonusPromo: 16000000,
    nettPrice: 172900000,
    hasPromo: true,
    isRepresentative: true,
  },
  {
    id: 's-presso-standard-ags',
    model: 'S-Presso',
    type: 'Standard',
    transmission: 'AGS',
    otrPrice: 199400000,
    bonusPromo: 16000000,
    nettPrice: 183400000,
    hasPromo: true,
    isRepresentative: false,
  },

  // Grand Vitara
  {
    id: 'grand-vitara-glx-one-tone-at',
    model: 'Grand Vitara MC',
    type: 'GLX One Tone',
    transmission: 'AT',
    otrPrice: 445000000,
    bonusPromo: null,
    nettPrice: 445000000,
    hasPromo: false,
    isRepresentative: true,
  },
  {
    id: 'grand-vitara-glx-two-tone-at',
    model: 'Grand Vitara MC',
    type: 'GLX Two Tone',
    transmission: 'AT',
    otrPrice: 448000000,
    bonusPromo: null,
    nettPrice: 448000000,
    hasPromo: false,
    isRepresentative: false,
  },

  // Jimny
  {
    id: 'jimny-3-door-one-tone-mt',
    model: 'Jimny',
    type: '3 Door One Tone',
    transmission: 'MT',
    otrPrice: 496200000,
    bonusPromo: null,
    nettPrice: 496200000,
    hasPromo: false,
    isRepresentative: true,
  },
  {
    id: 'jimny-3-door-one-tone-at',
    model: 'Jimny',
    type: '3 Door One Tone',
    transmission: 'AT',
    otrPrice: 510400000,
    bonusPromo: null,
    nettPrice: 510400000,
    hasPromo: false,
    isRepresentative: false,
  },
  {
    id: 'jimny-3-door-two-tone-mt',
    model: 'Jimny',
    type: '3 Door Two Tone',
    transmission: 'MT',
    otrPrice: 499200000,
    bonusPromo: null,
    nettPrice: 499200000,
    hasPromo: false,
    isRepresentative: false,
  },
  {
    id: 'jimny-3-door-two-tone-at',
    model: 'Jimny',
    type: '3 Door Two Tone',
    transmission: 'AT',
    otrPrice: 513400000,
    bonusPromo: null,
    nettPrice: 513400000,
    hasPromo: false,
    isRepresentative: false,
  },
  {
    id: 'jimny-5-door-one-tone-mt',
    model: 'Jimny',
    type: '5 Door One Tone',
    transmission: 'MT',
    otrPrice: 511900000,
    bonusPromo: null,
    nettPrice: 511900000,
    hasPromo: false,
    isRepresentative: false,
  },
  {
    id: 'jimny-5-door-one-tone-at',
    model: 'Jimny',
    type: '5 Door One Tone',
    transmission: 'AT',
    otrPrice: 526300000,
    bonusPromo: null,
    nettPrice: 526300000,
    hasPromo: false,
    isRepresentative: false,
  },
  {
    id: 'jimny-5-door-two-tone-mt',
    model: 'Jimny',
    type: '5 Door Two Tone',
    transmission: 'MT',
    otrPrice: 514900000,
    bonusPromo: null,
    nettPrice: 514900000,
    hasPromo: false,
    isRepresentative: false,
  },
  {
    id: 'jimny-5-door-two-tone-at',
    model: 'Jimny',
    type: '5 Door Two Tone',
    transmission: 'AT',
    otrPrice: 529300000,
    bonusPromo: null,
    nettPrice: 529300000,
    hasPromo: false,
    isRepresentative: false,
  }
]

// Get representative products (1 per model) - for catalog
export const products = allProducts.filter(p => p.isRepresentative)

// Get all products (for detail pages and internal use)
export const allProductsList = allProducts



// Get image path based on model
export function getProductImage(model: string): string {
  const imageMap: Record<string, string> = {
    'Fronx': '/suzuki-fronx-hero.png',
    'S-Presso': '/suzuki-s-presso.png',
    'XL7 Hybrid': '/suzuki-xl7-hybrid.png',
    'Ertiga Hybrid': '/suzuki-ertiga-hybrid.png',
    'Carry Pickup': '/suzuki-carry-pickup.png',
    'Grand Vitara MC': '/suzuki-grand-vitara.png',
    'Jimny': '/suzuki-jimny.png',
  }
  return imageMap[model] || '/suzuki-fronx-hero.png'
}


// Get unique models
export const uniqueModels = Array.from(new Set(allProducts.map(p => p.model)))

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return allProducts.find(p => p.id === id)
}

// Get all variants of a model (for detail page)
export function getVariantsByModel(model: string): Product[] {
  return allProducts.filter(p => p.model === model)
}

// Get representative product of a model
export function getRepresentativeByModel(model: string): Product | undefined {
  return allProducts.find(p => p.model === model && p.isRepresentative)
}

// Get min and max price for a model
export function getPriceRange(model: string): { min: number, max: number } {
  const variants = getVariantsByModel(model)
  const prices = variants.map(p => p.nettPrice)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  }
}

// Format price to Indonesian Rupiah
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Format price short (in millions)
export function formatPriceShort(price: number): string {
  const juta = Math.floor(price / 1000000)
  const ribu = Math.floor((price % 1000000) / 100000)
  if (ribu === 0) {
    return `${juta} Juta`
  }
  return `${juta}.${ribu} Juta`
}

// Get model description
export function getModelDescription(model: string): string {
  const descriptions: Record<string, string> = {
    'Fronx': 'Suzuki Fronx - Crossover compact yang stylish dan canggih',
    'XL7 Hybrid': 'Suzuki XL7 Hybrid - MPV hybrid yang irit bahan bakar',
    'Ertiga Hybrid': 'Suzuki Ertiga Hybrid - MPV hybrid dengan kenyamanan premium',
    'Carry Pickup': 'Suzuki Carry Pickup - Pikap andal dan tangguh',
    'S-Presso': 'Suzuki S-Presso - City car kompak dan irit',
    'Grand Vitara MC': 'Suzuki Grand Vitara MC - SUV kompak dengan fitur modern',
    'Jimny': 'Suzuki Jimny - SUV legendaris dengan kemampuan offroad'
  }
  return descriptions[model] || ''
}
