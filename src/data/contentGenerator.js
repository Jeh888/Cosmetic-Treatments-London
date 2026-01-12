// contentGenerator.js - Generates unique content for each location-service combination

// Regional characteristics for content variation
const regionCharacteristics = {
  'North London': {
    vibe: 'leafy and prosperous',
    demographic: 'established families and professionals',
    lifestyle: 'suburban comfort with excellent transport links to the City',
    transportNote: 'Northern line access'
  },
  'South London': {
    vibe: 'diverse and dynamic',
    demographic: 'young professionals, families, and multicultural communities',
    lifestyle: 'vibrant high streets and strong community spirit',
    transportNote: 'Thameslink and Southern rail connections'
  },
  'East London': {
    vibe: 'creative and rapidly evolving',
    demographic: 'young creatives, tech workers, and diverse communities',
    lifestyle: 'regeneration, innovation, and cultural diversity',
    transportNote: 'Elizabeth line and DLR connectivity'
  },
  'West London': {
    vibe: 'affluent and cosmopolitan',
    demographic: 'wealthy professionals and international residents',
    lifestyle: 'premium shopping, fine dining, and elegant living',
    transportNote: 'District and Piccadilly line access'
  },
  'South West London': {
    vibe: 'family-friendly and green',
    demographic: 'affluent families and young professionals',
    lifestyle: 'riverside living, excellent schools, and village atmosphere',
    transportNote: 'excellent rail links to Waterloo and Victoria'
  },
  'South East London': {
    vibe: 'up-and-coming and characterful',
    demographic: 'first-time buyers, young families, and creatives',
    lifestyle: 'historic charm mixed with modern regeneration',
    transportNote: 'Southeastern rail and emerging Elizabeth line connections'
  },
  'Central London': {
    vibe: 'prestigious and bustling',
    demographic: 'high-net-worth individuals and international professionals',
    lifestyle: 'luxury living at the heart of the capital',
    transportNote: 'unparalleled tube and rail connectivity'
  }
};

// Borough-specific characteristics
const boroughCharacteristics = {
  'Croydon': 'South London\'s commercial hub with excellent transport and growing regeneration',
  'Barnet': 'one of London\'s most desirable family boroughs with outstanding schools',
  'Newham': 'London\'s most transformed borough following Olympic regeneration',
  'Westminster': 'the heart of London with iconic landmarks and prestigious addresses',
  'Camden': 'eclectic mix of alternative culture and Georgian grandeur',
  'Islington': 'trendy North London borough popular with media professionals',
  'Hackney': 'creative East London hub with thriving arts and food scenes',
  'Tower Hamlets': 'historic docklands meets modern Canary Wharf finance',
  'Lambeth': 'diverse South London borough from Brixton culture to riverside living',
  'Southwark': 'historic borough from Borough Market to Peckham\'s creative scene',
  'Lewisham': 'diverse South East London borough with strong community identity',
  'Greenwich': 'World Heritage maritime history meets modern regeneration',
  'Brent': 'diverse North West London borough anchored by Wembley',
  'Ealing': 'leafy West London borough known as "Queen of the Suburbs"',
  'Hounslow': 'West London gateway with excellent Heathrow connections',
  'Richmond upon Thames': 'London\'s most affluent borough with riverside elegance',
  'Kingston upon Thames': 'historic market town with premium retail and riverside setting',
  'Merton': 'home to Wimbledon with village charm and excellent schools',
  'Wandsworth': 'young professionals\' favourite with riverside regeneration',
  'Hammersmith and Fulham': 'riverside West London with excellent schools and transport',
  'Kensington and Chelsea': 'London\'s most prestigious residential borough',
  'Haringey': 'diverse North London from Muswell Hill affluence to Tottenham regeneration',
  'Enfield': 'leafy outer London with strong Greek Cypriot and Turkish communities',
  'Waltham Forest': 'emerging East London borough with strong creative community',
  'Redbridge': 'diverse outer East London with excellent schools and green spaces',
  'Havering': 'Essex-border borough with suburban character and countryside access',
  'Barking and Dagenham': 'regenerating East London with strong community spirit',
  'Bexley': 'quiet South East London suburb with village atmosphere',
  'Bromley': 'leafy South East London borough bordering Kent countryside',
  'Sutton': 'family-friendly South London with outstanding grammar schools',
  'Harrow': 'diverse North West London known for its prestigious school',
  'Hillingdon': 'West London\'s largest borough with Heathrow and countryside'
};

// Treatment-specific local content generators
const treatmentLocalContent = {
  'teeth-whitening': (location) => ({
    localDemand: `Residents in ${location.name} increasingly seek professional teeth whitening to maintain a confident, polished appearance. The ${location.region} lifestyle, with its emphasis on ${regionCharacteristics[location.region]?.lifestyle || 'quality living'}, drives demand for this popular cosmetic dental treatment.`,
    whyLocal: `Choosing a teeth whitening provider in ${location.name} means convenient appointments that fit around your schedule. Whether you work locally or commute via ${location.landmarks?.[0] || 'local transport links'}, you can achieve a brighter smile without lengthy travel.`,
    idealFor: `${location.name} professionals seeking a quick confidence boost, couples preparing for special occasions, and anyone wanting to reverse years of staining from coffee, tea, or wine.`
  }),
  'invisalign': (location) => ({
    localDemand: `Clear aligner treatment has become increasingly popular among ${location.name} residents who value discretion. The ${regionCharacteristics[location.region]?.demographic || 'local community'} appreciate being able to straighten teeth without the visibility of traditional braces.`,
    whyLocal: `Invisalign treatment requires regular check-ups over 6-18 months. Having a provider in ${location.name} makes these appointments convenient, especially given the ${regionCharacteristics[location.region]?.transportNote || 'local transport options'}.`,
    idealFor: `Adults and teens in ${location.name} who want straighter teeth without metal braces - particularly professionals in client-facing roles and image-conscious residents.`
  }),
  'botox': (location) => ({
    localDemand: `Anti-wrinkle treatments are sought after in ${location.name}, where ${regionCharacteristics[location.region]?.demographic || 'residents'} invest in maintaining a youthful, refreshed appearance. The area's ${regionCharacteristics[location.region]?.vibe || 'character'} demographic values subtle, natural-looking results.`,
    whyLocal: `Botox typically requires follow-up appointments and touch-ups every 3-6 months. A ${location.name} provider offers the convenience of maintaining your treatment regime locally, with easy access for any adjustments needed.`,
    idealFor: `${location.name} residents looking to smooth forehead lines, crow's feet, or frown lines - from young professionals preventing early ageing signs to those seeking to refresh their appearance.`
  }),
  'dermal-fillers': (location) => ({
    localDemand: `Dermal filler treatments are popular among ${location.name} residents seeking to restore facial volume or enhance features. The ${location.borough} area has seen growing interest in non-surgical facial rejuvenation options.`,
    whyLocal: `Finding an experienced dermal filler practitioner in ${location.name} ensures you can easily attend consultations, treatments, and follow-up appointments. Local expertise means your practitioner understands the aesthetic preferences of ${location.region} clients.`,
    idealFor: `${location.name} residents wanting to address volume loss, enhance cheekbones or jawlines, or smooth deep lines - those seeking natural enhancement without surgery.`
  }),
  'veneers': (location) => ({
    localDemand: `Dental veneers have become a popular choice for ${location.name} residents wanting to transform their smile. ${boroughCharacteristics[location.borough] ? 'In ' + location.borough + ', ' + boroughCharacteristics[location.borough] + ', ' : ''}residents understand the value of investing in a confident smile.`,
    whyLocal: `Veneer treatment requires multiple appointments for consultations, preparation, and fitting. A ${location.name} provider makes this process convenient, and local practitioners can advise on the best options for your lifestyle and budget.`,
    idealFor: `${location.name} residents with chipped, stained, or slightly misaligned teeth who want a complete smile transformation - professionals, brides-to-be, and anyone seeking a Hollywood-worthy smile.`
  }),
  'dental-bonding': (location) => ({
    localDemand: `Dental bonding offers ${location.name} residents a quick, affordable solution for minor cosmetic dental issues. The treatment's same-day convenience appeals to the busy ${regionCharacteristics[location.region]?.demographic || 'local population'}.`,
    whyLocal: `Dental bonding can often be completed in a single appointment, making a ${location.name} provider ideal for residents who want to address chips or gaps efficiently without multiple visits.`,
    idealFor: `${location.name} residents seeking a cost-effective fix for chipped teeth, small gaps, or minor discolouration - perfect for those wanting improvement without the commitment of veneers.`
  }),
  'smile-makeover': (location) => ({
    localDemand: `Comprehensive smile makeovers are increasingly requested by ${location.name} residents who want to address multiple concerns in a coordinated treatment plan. The ${regionCharacteristics[location.region]?.vibe || 'sophisticated'} character of the area reflects residents who value quality and are willing to invest in transformative results.`,
    whyLocal: `Smile makeovers involve multiple treatments over several months. A ${location.name} provider means convenient access for consultations, treatments, and follow-ups - essential for achieving your perfect smile without disrupting your daily life.`,
    idealFor: `${location.name} residents ready to invest in a complete smile transformation - those with multiple cosmetic concerns who want a coordinated approach rather than piecemeal treatments.`
  }),
  'lip-fillers': (location) => ({
    localDemand: `Lip enhancement treatments are popular among ${location.name} residents seeking fuller, more defined lips. The ${location.region} area has seen particular growth in demand for natural-looking lip augmentation.`,
    whyLocal: `Lip filler results can be fine-tuned with follow-up appointments. Having a skilled practitioner in ${location.name} means you can easily return for adjustments to achieve your ideal look.`,
    idealFor: `${location.name} residents wanting to add volume, correct asymmetry, or define lip borders - from subtle enhancement to more noticeable augmentation, tailored to individual preferences.`
  }),
  'dental-crowns': (location) => ({
    localDemand: `Quality dental crowns are sought by ${location.name} residents needing to restore damaged teeth while maintaining natural aesthetics. The area's ${regionCharacteristics[location.region]?.demographic || 'residents'} expect durable, well-crafted restorations.`,
    whyLocal: `Crown treatment typically requires at least two appointments. A ${location.name} dental provider ensures convenient access for impressions, fitting, and any adjustments needed for a perfect fit.`,
    idealFor: `${location.name} residents with weakened, broken, or heavily restored teeth who need a durable, natural-looking solution - those wanting to protect their dental health while achieving excellent aesthetics.`
  }),
  'treatment-costs': (location) => ({
    localDemand: `${location.name} residents are savvy consumers who research cosmetic treatment costs thoroughly before committing. Understanding pricing across ${location.borough} helps ensure value for money without compromising quality.`,
    whyLocal: `Comparing treatment costs from ${location.name} providers allows you to find competitive pricing while maintaining access to convenient appointments. Local comparison shopping ensures you understand what's included in each quote.`,
    idealFor: `Budget-conscious ${location.name} residents who want to understand their options - those seeking quality treatments at fair prices with clear, transparent pricing structures.`
  }),
  'dental-marketing': (location) => ({
    localDemand: `Dental practices in ${location.name} face increasing competition and recognise the need for effective digital marketing. The ${location.borough} area presents unique opportunities for practices to connect with local patients through targeted campaigns.`,
    whyLocal: `A dental marketing specialist with ${location.region} expertise understands the local competitive landscape, patient demographics, and effective channels for reaching ${location.name} residents seeking dental care.`,
    idealFor: `${location.name} dental practices looking to attract more patients, build their online presence, and compete effectively in the local market - from new practices to established clinics seeking growth.`
  })
};

// Generate unique intro paragraph for location-service page
export function generateLocalIntro(location, service) {
  const regionInfo = regionCharacteristics[location.region] || {};
  const boroughInfo = boroughCharacteristics[location.borough] || '';
  
  const intros = [
    `${location.name} residents seeking ${service.name.toLowerCase()} can compare verified local providers through this free service. Located in ${location.borough}${boroughInfo ? ' – ' + boroughInfo : ''} – the area offers ${regionInfo.vibe || 'excellent'} surroundings with ${regionInfo.transportNote || 'good transport links'} for convenient appointments.`,
    
    `Looking for ${service.name.toLowerCase()} in ${location.name}? This ${location.region} area, known for its ${regionInfo.vibe || 'character'} atmosphere, is home to ${regionInfo.demographic || 'diverse residents'} who value quality cosmetic treatments. Compare local providers and get free quotes today.`,
    
    `${location.name}, in the heart of ${location.borough}, provides an ideal location to access quality ${service.name.toLowerCase()} treatments. The ${regionInfo.demographic || 'local community'} have excellent options for ${service.name.toLowerCase()}, with providers understanding the specific needs of ${location.region} clients.`
  ];
  
  // Use location slug to consistently select an intro variant
  const index = location.slug.length % intros.length;
  return intros[index];
}

// Generate treatment-specific local content
export function generateTreatmentLocalContent(location, service) {
  const generator = treatmentLocalContent[service.slug];
  if (generator) {
    return generator(location);
  }
  
  // Default content for any treatment not specifically handled
  return {
    localDemand: `${service.name} is increasingly popular among ${location.name} residents. The ${location.borough} area has seen growing interest in this treatment, with local providers offering convenient access to quality care.`,
    whyLocal: `Choosing a ${service.name.toLowerCase()} provider in ${location.name} means easy access to consultations, treatments, and follow-up appointments. Local expertise ensures practitioners understand the preferences of ${location.region} clients.`,
    idealFor: `${location.name} residents interested in ${service.name.toLowerCase()} who want to compare verified local providers and find the best option for their needs and budget.`
  };
}

// Generate unique "Why Choose Local" section content
export function generateWhyChooseLocal(location, service) {
  const regionInfo = regionCharacteristics[location.region] || {};
  const population = parseInt(location.population?.replace(/,/g, '') || '0');
  const populationDesc = population > 100000 ? 'major' : population > 50000 ? 'significant' : population > 20000 ? 'substantial' : 'close-knit';
  
  const paragraphs = [
    `${location.name} offers distinct advantages for your ${service.name.toLowerCase()} treatment. As part of ${location.borough}, the area combines ${regionInfo.vibe || 'local'} character with practical accessibility. The ${populationDesc} ${location.name} community is served by experienced practitioners who understand local expectations and preferences.`,
    
    `Transport connections make ${location.name} particularly convenient for cosmetic treatments. ${location.landmarks?.[0] ? location.landmarks[0] + ' provides' : 'Local transport offers'} easy access whether you're coming from nearby ${location.nearbyAreas?.[0] || 'areas'} or further afield. This is especially valuable for treatments like ${service.name.toLowerCase()} which ${service.timeline?.includes('month') ? 'require multiple appointments over several months' : 'benefit from easy follow-up access'}.`,
    
    `The ${location.name} aesthetic treatment market reflects broader ${location.region} trends. ${regionInfo.demographic ? 'The ' + regionInfo.demographic + ' who live here' : 'Local residents'} typically seek ${service.priceRange?.includes('£2') || service.priceRange?.includes('£3') || service.priceRange?.includes('£4') || service.priceRange?.includes('£5') ? 'premium' : 'quality'} treatments from verified practitioners. By comparing multiple ${service.name.toLowerCase()} providers in ${location.name}, you can ensure you're getting competitive pricing without sacrificing expertise.`,
    
    `Practitioners serving ${location.name} understand that the ${location.industries?.[0] || 'professional'} and ${location.industries?.[1] || 'business'} communities here have specific needs – whether that's flexible scheduling for busy professionals or weekend appointments for families. This local knowledge translates to better service and more relevant recommendations for your ${service.name.toLowerCase()} treatment.`
  ];
  
  return paragraphs;
}

// Generate area-specific stats/highlights
export function generateAreaHighlights(location) {
  const regionInfo = regionCharacteristics[location.region] || {};
  
  return {
    areaType: location.isBorough ? 'London Borough' : 'Neighbourhood',
    character: regionInfo.vibe || 'established residential area',
    demographic: regionInfo.demographic || 'diverse local community',
    transport: regionInfo.transportNote || 'good transport connections',
    keyIndustries: location.industries?.slice(0, 3).join(', ') || 'Various sectors'
  };
}

// Generate unique meta description
export function generateMetaDescription(location, service) {
  const regionInfo = regionCharacteristics[location.region] || {};
  
  const templates = [
    `Compare ${service.name.toLowerCase()} providers in ${location.name}, ${location.borough}. ${service.shortDescription} Get free quotes from verified ${location.region} practitioners.`,
    `Find trusted ${service.name.toLowerCase()} in ${location.name}. Compare prices from qualified providers in ${location.borough}. ${service.priceRange}. Free quotes, no obligation.`,
    `${service.name} in ${location.name} – compare verified local providers. ${regionInfo.demographic || 'Local residents'} trust our free comparison service. Get quotes today.`
  ];
  
  const index = (location.slug.length + service.slug.length) % templates.length;
  return templates[index];
}

export default {
  generateLocalIntro,
  generateTreatmentLocalContent,
  generateWhyChooseLocal,
  generateAreaHighlights,
  generateMetaDescription
};
