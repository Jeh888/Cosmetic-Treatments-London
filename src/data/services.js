// services.js - All cosmetic treatment services

export const services = [
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    shortDescription: 'Professional teeth whitening treatments for a brighter, whiter smile',
    description: 'Transform your smile with professional teeth whitening treatments. Compare top-rated providers offering in-clinic laser whitening, custom take-home kits, and combination treatments for dramatic, long-lasting results.',
    longDescription: 'Professional teeth whitening is one of the most popular cosmetic dental treatments, offering dramatic results in just one session. Unlike over-the-counter products, professional treatments use higher concentrations of whitening agents applied by trained practitioners, ensuring safe and effective results. Treatments can lighten teeth by several shades, removing years of staining from coffee, tea, wine, and other sources.',
    benefits: [
      'Results visible after just one session',
      'Removes deep stains from coffee, tea, and wine',
      'Long-lasting results with proper care',
      'Safe application by trained professionals',
      'Custom-fitted trays for take-home treatments',
      'Boosts confidence and self-esteem'
    ],
    features: [
      'In-clinic laser whitening',
      'Custom take-home whitening kits',
      'Combination treatment packages',
      'Pre-treatment assessment',
      'Sensitivity management',
      'Aftercare guidance'
    ],
    priceRange: '£250 - £800',
    timeline: '1-2 weeks',
    icon: 'sparkles',
    category: 'dental'
  },
  {
    slug: 'invisalign',
    name: 'Invisalign',
    shortDescription: 'Clear aligners for discreet teeth straightening without traditional braces',
    description: 'Straighten your teeth discreetly with Invisalign clear aligners. Find certified Invisalign providers offering comprehensive treatment plans, 3D scanning, and ongoing support throughout your smile transformation journey.',
    longDescription: 'Invisalign uses a series of custom-made, virtually invisible aligners to gradually move your teeth into the desired position. This revolutionary orthodontic treatment offers a discreet alternative to traditional metal braces, allowing you to straighten your teeth without anyone noticing. Each set of aligners is worn for about two weeks before moving to the next set, with the entire treatment typically taking 6-18 months depending on complexity.',
    benefits: [
      'Virtually invisible aligners',
      'Removable for eating and cleaning',
      'No dietary restrictions',
      'Fewer dental visits than traditional braces',
      'Predictable results with 3D treatment planning',
      'Comfortable with no metal wires or brackets'
    ],
    features: [
      '3D digital scanning and treatment planning',
      'Custom-made clear aligners',
      'Regular progress check-ups',
      'Refinement aligners if needed',
      'Retainers for maintaining results',
      'Virtual monitoring options'
    ],
    priceRange: '£2,500 - £5,500',
    timeline: '6-18 months',
    icon: 'smile',
    category: 'dental'
  },
  {
    slug: 'botox',
    name: 'Botox',
    shortDescription: 'Anti-wrinkle injections to smooth fine lines and prevent ageing signs',
    description: 'Reduce fine lines and wrinkles with Botox treatments from qualified practitioners. Compare clinics offering anti-wrinkle injections for forehead lines, crow\'s feet, and frown lines with natural-looking results.',
    longDescription: 'Botox (botulinum toxin) is a highly effective anti-ageing treatment that temporarily relaxes facial muscles to smooth out wrinkles and fine lines. When administered by trained practitioners, Botox provides natural-looking results that can take years off your appearance. The treatment is quick, with minimal discomfort, and results typically last 3-6 months. Common treatment areas include forehead lines, frown lines between the eyebrows, and crow\'s feet around the eyes.',
    benefits: [
      'Visible reduction in fine lines and wrinkles',
      'Quick treatment with no downtime',
      'Natural-looking results',
      'Prevents formation of new wrinkles',
      'Results last 3-6 months',
      'Can treat excessive sweating'
    ],
    features: [
      'Comprehensive consultation',
      'Facial assessment and treatment planning',
      'Premium botulinum toxin products',
      'Precise injection techniques',
      'Follow-up appointments',
      'Top-up treatments available'
    ],
    priceRange: '£150 - £400 per area',
    timeline: 'Results in 7-14 days',
    icon: 'syringe',
    category: 'aesthetic'
  },
  {
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    shortDescription: 'Restore volume and contour to your face for a youthful appearance',
    description: 'Restore facial volume and enhance your features with dermal fillers. Find experienced practitioners offering cheek enhancement, jawline contouring, nasolabial fold treatment, and more.',
    longDescription: 'Dermal fillers are injectable treatments that add volume, smooth wrinkles, and enhance facial contours. Made primarily from hyaluronic acid, a naturally occurring substance in the skin, fillers can restore youthful plumpness to cheeks, smooth deep lines, enhance lips, and define the jawline. Results are immediate and can last from 6 months to 2 years depending on the product used and treatment area.',
    benefits: [
      'Immediate visible results',
      'Restores lost facial volume',
      'Smooths deep lines and wrinkles',
      'Enhances facial contours',
      'Natural-looking enhancement',
      'Reversible with hyaluronidase'
    ],
    features: [
      'Detailed facial analysis',
      'Premium hyaluronic acid fillers',
      'Multiple treatment areas',
      'Numbing cream for comfort',
      'Same-day treatment',
      'Follow-up review appointments'
    ],
    priceRange: '£200 - £600 per syringe',
    timeline: 'Immediate results, lasting 6-24 months',
    icon: 'droplet',
    category: 'aesthetic'
  },
  {
    slug: 'veneers',
    name: 'Veneers',
    shortDescription: 'Porcelain or composite veneers for a perfect Hollywood smile',
    description: 'Achieve your dream smile with dental veneers. Compare providers offering porcelain veneers, composite veneers, and minimal prep options for transforming chipped, stained, or misaligned teeth.',
    longDescription: 'Dental veneers are thin, custom-made shells designed to cover the front surface of teeth, dramatically improving their appearance. Veneers can correct a wide range of cosmetic concerns including discolouration, chips, cracks, gaps, and minor misalignment. Porcelain veneers offer superior durability and natural aesthetics, while composite veneers provide a more affordable option with less tooth preparation required.',
    benefits: [
      'Dramatic smile transformation',
      'Natural-looking results',
      'Stain-resistant porcelain options',
      'Corrects multiple cosmetic issues',
      'Long-lasting with proper care',
      'Minimal prep options available'
    ],
    features: [
      'Digital smile design',
      'Custom shade matching',
      'Porcelain or composite options',
      'Minimal preparation techniques',
      'Temporary veneers while waiting',
      'Precision fitting and bonding'
    ],
    priceRange: '£400 - £1,200 per tooth',
    timeline: '2-3 weeks',
    icon: 'star',
    category: 'dental'
  },
  {
    slug: 'dental-bonding',
    name: 'Dental Bonding',
    shortDescription: 'Quick, affordable cosmetic fix for chipped or discoloured teeth',
    description: 'Fix minor imperfections quickly and affordably with dental bonding. Find skilled practitioners offering tooth-coloured composite resin treatments for chips, gaps, and discolouration.',
    longDescription: 'Dental bonding is a cost-effective cosmetic procedure where tooth-coloured composite resin is applied to repair chips, close gaps, reshape teeth, or cover discolouration. Unlike veneers, bonding typically requires minimal tooth preparation and can often be completed in a single visit. While not as durable as porcelain veneers, bonding offers an excellent solution for minor cosmetic improvements at a fraction of the cost.',
    benefits: [
      'Completed in a single visit',
      'Minimal tooth preparation',
      'Cost-effective solution',
      'Natural-looking results',
      'Preserves natural tooth structure',
      'Easy to repair if damaged'
    ],
    features: [
      'Same-day treatment',
      'Shade-matched composite resin',
      'No anaesthesia often needed',
      'Sculpting and shaping expertise',
      'Polish for natural finish',
      'Quick touch-up repairs'
    ],
    priceRange: '£100 - £400 per tooth',
    timeline: 'Single appointment',
    icon: 'puzzle',
    category: 'dental'
  },
  {
    slug: 'smile-makeover',
    name: 'Smile Makeover',
    shortDescription: 'Comprehensive smile transformation combining multiple treatments',
    description: 'Complete smile transformations combining multiple cosmetic treatments. Compare providers offering bespoke smile makeover packages including veneers, whitening, orthodontics, and more.',
    longDescription: 'A smile makeover is a comprehensive approach to transforming your smile by combining multiple cosmetic dental treatments tailored to your specific needs and goals. This may include teeth whitening, veneers, dental bonding, orthodontics, gum contouring, and other procedures. Working with skilled cosmetic dentists, you\'ll receive a personalised treatment plan designed to achieve your dream smile while considering facial aesthetics, skin tone, and personal preferences.',
    benefits: [
      'Complete smile transformation',
      'Personalised treatment planning',
      'Addresses multiple concerns at once',
      'Coordinated treatment approach',
      'Long-lasting results',
      'Improved confidence and self-esteem'
    ],
    features: [
      'Comprehensive dental assessment',
      'Digital smile design preview',
      'Multi-treatment coordination',
      'Phased treatment options',
      'Before and after documentation',
      'Long-term maintenance plans'
    ],
    priceRange: '£2,000 - £15,000+',
    timeline: '2-12 months',
    icon: 'sparkles',
    category: 'dental'
  },
  {
    slug: 'lip-fillers',
    name: 'Lip Fillers',
    shortDescription: 'Enhance lip volume and shape for fuller, more defined lips',
    description: 'Achieve fuller, beautifully shaped lips with lip filler treatments. Find experienced injectors offering natural enhancement, lip augmentation, and lip border definition.',
    longDescription: 'Lip fillers use hyaluronic acid-based dermal fillers to add volume, enhance shape, and define the lip borders. Whether you want subtle enhancement or more dramatic results, skilled practitioners can create natural-looking, balanced lips that complement your facial features. Treatment is customisable to achieve your desired outcome, from correcting asymmetry to adding volume to creating a more defined cupid\'s bow.',
    benefits: [
      'Immediate visible enhancement',
      'Customisable results',
      'Natural-looking fullness',
      'Corrects asymmetry',
      'Defines lip borders',
      'Hydrates lips from within'
    ],
    features: [
      'Detailed consultation',
      'Premium hyaluronic acid fillers',
      'Topical numbing for comfort',
      'Gradual enhancement options',
      'Dissolving option if needed',
      'Follow-up appointments'
    ],
    priceRange: '£200 - £500',
    timeline: 'Immediate results, lasting 6-12 months',
    icon: 'heart',
    category: 'aesthetic'
  },
  {
    slug: 'dental-crowns',
    name: 'Dental Crowns',
    shortDescription: 'Restore damaged teeth with custom-made porcelain or ceramic crowns',
    description: 'Protect and restore damaged teeth with dental crowns. Compare providers offering porcelain, ceramic, and zirconia crowns with precise colour matching and comfortable fit.',
    longDescription: 'Dental crowns are custom-made caps that cover damaged, decayed, or aesthetically compromised teeth, restoring their shape, size, strength, and appearance. Modern crowns are crafted from high-quality materials like porcelain, ceramic, or zirconia that closely mimic natural teeth. Whether you need to protect a weakened tooth, restore a broken one, or improve the appearance of a discoloured tooth, crowns provide a durable, long-lasting solution.',
    benefits: [
      'Restores tooth strength and function',
      'Natural-looking aesthetics',
      'Long-lasting durability',
      'Protects weakened teeth',
      'Improves bite alignment',
      'Custom shade matching'
    ],
    features: [
      'Digital impressions',
      'Same-day crown options',
      'Premium materials',
      'Precise colour matching',
      'Comfortable fit',
      'Long-term warranty options'
    ],
    priceRange: '£400 - £1,000 per crown',
    timeline: '1-2 weeks',
    icon: 'crown',
    category: 'dental'
  },
  {
    slug: 'treatment-costs',
    name: 'Treatment Costs',
    shortDescription: 'Compare cosmetic treatment prices and find affordable options',
    description: 'Understand and compare cosmetic treatment costs across London. Get transparent pricing information, payment plan options, and find providers offering competitive rates.',
    longDescription: 'Understanding the costs involved in cosmetic treatments helps you make informed decisions about your care. Prices vary based on treatment complexity, practitioner experience, clinic location, and materials used. Many providers offer payment plans and finance options to make treatments more accessible. Getting multiple quotes allows you to compare value, not just price, ensuring you receive quality treatment at a fair cost.',
    benefits: [
      'Transparent pricing information',
      'Compare costs across providers',
      'Understand what\'s included',
      'Find payment plan options',
      'Avoid hidden charges',
      'Make informed decisions'
    ],
    features: [
      'Free initial consultations',
      'Written treatment quotes',
      'Finance options available',
      'No hidden fees',
      'Price match guarantees',
      'Package discounts'
    ],
    priceRange: 'Varies by treatment',
    timeline: 'Consultation required',
    icon: 'calculator',
    category: 'information'
  },
  {
    slug: 'dental-marketing',
    name: 'Dental Marketing',
    shortDescription: 'Marketing services to help dental practices attract more patients',
    description: 'Connect with dental marketing specialists to grow your practice. Find providers offering SEO, PPC, social media, and patient acquisition strategies tailored for dental clinics.',
    longDescription: 'Dental marketing services help dental practices attract new patients and grow their business through targeted digital marketing strategies. From search engine optimisation (SEO) and pay-per-click advertising to social media management and reputation management, specialist dental marketers understand the unique challenges and opportunities in the dental industry. Effective marketing helps practices stand out in competitive local markets and build lasting patient relationships.',
    benefits: [
      'Attract more new patients',
      'Improve online visibility',
      'Build practice reputation',
      'Targeted local marketing',
      'Measurable results',
      'Industry-specific expertise'
    ],
    features: [
      'Dental SEO services',
      'Google Ads management',
      'Social media marketing',
      'Reputation management',
      'Website design',
      'Patient acquisition campaigns'
    ],
    priceRange: '£500 - £3,000/month',
    timeline: 'Ongoing service',
    icon: 'megaphone',
    category: 'b2b'
  }
];

// Helper functions
export function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

export function getAllServices() {
  return services;
}

export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}

export function getServicesByCategory(category) {
  return services.filter(service => service.category === category);
}

export function getCategories() {
  return [...new Set(services.map(service => service.category))];
}

// For compatibility with the template
export function getAllSubServices() {
  return services.map(service => ({
    ...service,
    parentCategory: service.category
  }));
}

export default services;
