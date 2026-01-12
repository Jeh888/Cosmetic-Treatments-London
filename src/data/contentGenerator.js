// locationContent.js - Unique 200-300 word content per location

const locationContent = {

  'croydon': {
    heroIntro: `Croydon has transformed from South London commuter hub into a genuine metropolitan centre. The fifteen-minute connection to London Bridge brings young professionals who expect the same cosmetic treatment standards they'd find in Zone 1 - but at South London prices.`,
    subHeadline: `Reach 390,000 potential customers in Croydon`,
    paragraph1: `Croydon's demographic split creates diverse cosmetic treatment demand. Young professionals around East Croydon station seek teeth whitening and Invisalign as career essentials. Established families in South Croydon invest in comprehensive smile makeovers. The borough's remarkable diversity means practitioners must demonstrate genuine expertise across all skin types.`,
    paragraph2: `We connect Croydon residents with verified cosmetic treatment providers across the borough - from dental practices near the Whitgift Centre to aesthetic clinics serving Purley and Sanderstead. Compare quotes, check credentials, and find practitioners who understand your specific requirements.`,
    facts: [
      `East Croydon processes 80,000+ daily commuters - young professionals driving teeth whitening demand`,
      `Croydon's Caribbean and South Asian communities require practitioners skilled in all skin types`,
      `The borough has seen 40% growth in Invisalign treatments since 2020`
    ],
    glance: {
      population: '390,000',
      borough: 'Croydon',
      keyDemographics: 'Young professionals, Diverse families, Commuters',
      mainAreas: 'East Croydon, South Croydon, Purley, Thornton Heath'
    }
  },

  'south-croydon': {
    heroIntro: `South Croydon's grammar school catchment areas tell you everything about who lives here - ambitious professional families who research thoroughly before any significant decision, including cosmetic treatments. Quality and credentials matter more than convenience or price.`,
    subHeadline: `Reach affluent families in South Croydon`,
    paragraph1: `The demographic here skews toward established professionals in their 40s and 50s with teenage children. Orthodontic treatment for adolescents drives significant demand - Invisalign Teen dominates because visible braces carry social costs during sensitive school years. Parents often address their own alignment issues while arranging children's treatment.`,
    paragraph2: `Anti-ageing treatments follow strict local rules: results must be undetectable. South Croydon residents want "you look well" compliments, never "have you had work done?" questions. We match you with practitioners who understand restraint and natural-looking results.`,
    facts: [
      `Grammar school presence drives 60% higher teenage orthodontic demand than borough average`,
      `Average household income 35% above Croydon average - quality prioritised over price`,
      `Family treatment coordination common - parents booking alongside teenagers`
    ],
    glance: {
      population: '85,000',
      borough: 'Croydon',
      keyDemographics: 'Professional families, Grammar school parents, Established residents',
      mainAreas: 'South Croydon, Sanderstead, Selsdon, Purley Oaks'
    }
  },

  'east-croydon': {
    heroIntro: `East Croydon exists in service of the commute. Eighty thousand people pass through the station daily, and the cosmetic treatment market here runs on their schedules - early morning appointments, lunch-hour Botox, Saturday availability. Efficiency isn't optional.`,
    subHeadline: `Reach time-pressed professionals in East Croydon`,
    paragraph1: `The young professionals in surrounding apartment towers work demanding City jobs. They need teeth whitening before job interviews, Invisalign that won't show in client meetings, and Botox appointments that fit between trains. Practitioners who only offer traditional hours lose this demographic entirely.`,
    paragraph2: `We connect East Croydon commuters with providers who understand professional schedules. Early slots before the 7:45 to London Bridge. Lunch appointments with time to spare. Weekend availability for longer treatments. Efficiency and quality, not one or the other.`,
    facts: [
      `Lunchtime Botox appointments up 55% - professionals treating between trains`,
      `Teeth whitening demand spikes 300% around job interview seasons`,
      `Clear aligner consultations peak on Saturdays - only available appointment time for many`
    ],
    glance: {
      population: '45,000',
      borough: 'Croydon',
      keyDemographics: 'City commuters, Young professionals, First-time buyers',
      mainAreas: 'East Croydon, Addiscombe, Park Hill, Shirley'
    }
  },

  'west-croydon': {
    heroIntro: `West Croydon's London Road is one of London's most authentically diverse high streets - Caribbean bakeries, African hair salons, South Asian grocers. The cosmetic treatment market here requires practitioners who genuinely understand different skin types, cultural contexts, and community values.`,
    subHeadline: `Reach diverse communities in West Croydon`,
    paragraph1: `Expertise in melanin-rich skin isn't optional here - it's essential. Hyperpigmentation risks from chemical peels and lasers are dramatically elevated without proper technique. Residents share stories of practitioners who caused damage through inexperience. Finding genuinely competent providers matters more than convenience.`,
    paragraph2: `We verify that providers serving West Croydon demonstrate real expertise across all skin types. Transparent pricing without hidden fees. Payment plans that enable access. Practitioners who've earned community trust over years, not months.`,
    facts: [
      `Over 40% of residents require practitioners skilled in treating melanin-rich skin`,
      `Wedding-related treatments peak March-August - significant cultural occasions`,
      `Word-of-mouth drives 70% of provider selections - community trust is everything`
    ],
    glance: {
      population: '52,000',
      borough: 'Croydon',
      keyDemographics: 'Caribbean community, African families, South Asian residents',
      mainAreas: 'West Croydon, Broad Green, Waddon, Wandle Park'
    }
  },

  'purley': {
    heroIntro: `Purley sits where London yields to Surrey - substantial houses, golf clubs, and residents who've spent successful careers accumulating resources. The cosmetic treatment market operates at the premium end without apology. Quality is expected; price is secondary.`,
    subHeadline: `Reach affluent residents in Purley`,
    paragraph1: `The demographic here trends older and wealthier than anywhere else in Croydon. Residents in their 50s and 60s seek sophisticated maintenance - Botox that softens lines while preserving movement, fillers that restore volume subtly, skin treatments improving texture gradually. The goal is always looking well, never looking "done."`,
    paragraph2: `Discretion matters in Purley more than flashier areas. We connect residents with practitioners who understand premium service expectations - unhurried consultations, genuine expertise, absolute confidentiality. Quality providers who match the standards Purley residents experience elsewhere in life.`,
    facts: [
      `Average property price £650,000+ ensures affluent, quality-focused demographic`,
      `Dental implant demand 3x borough average - investment in long-term solutions`,
      `Anti-ageing treatment focus: maintenance and subtlety over transformation`
    ],
    glance: {
      population: '48,000',
      borough: 'Croydon',
      keyDemographics: 'Affluent retirees, Senior professionals, Established families',
      mainAreas: 'Purley, Coulsdon, Kenley, Riddlesdown'
    }
  },

  'thornton-heath': {
    heroIntro: `Thornton Heath's identity is inseparable from the Caribbean community who've shaped it since the Windrush era. The cosmetic treatment market here reflects cultural values around presentation, community trust, and practitioners who genuinely understand diverse skin types.`,
    subHeadline: `Reach Thornton Heath's established community`,
    paragraph1: `Brilliant white teeth matter here - a bright smile signals self-respect and success. The preference often isn't for subtle "natural" whitening but visible transformation. Skilled practitioners deliver what clients actually want rather than imposing external aesthetic judgments.`,
    paragraph2: `Community trust is earned over years, not bought through advertising. Recommendations from church members and respected elders carry weight no marketing matches. We connect you with practitioners who've built genuine community relationships - providers people actually recommend to family.`,
    facts: [
      `Caribbean community presence since 1950s creates multi-generational provider relationships`,
      `Wedding season transforms demand - culturally significant events drive treatment timing`,
      `Practitioners must demonstrate genuine expertise in Black skin - hyperpigmentation risks are real`
    ],
    glance: {
      population: '58,000',
      borough: 'Croydon',
      keyDemographics: 'Caribbean families, African community, Young professionals',
      mainAreas: 'Thornton Heath, Norbury, Broad Green, Selhurst'
    }
  },

  'stratford': {
    heroIntro: `Westfield changed everything. Before Europe's largest urban shopping centre, seeking cosmetic treatments in E15 would have seemed absurd. Now Stratford draws clients from across East London who combine shopping with teeth whitening appointments and lunch after Botox consultations.`,
    subHeadline: `Reach Stratford's new metropolitan population`,
    paragraph1: `The demographic in new-build towers is young, professional, and image-conscious. They've grown up with social media normalising cosmetic enhancement. Teeth whitening and subtle aesthetics are routine maintenance, not special occasions.`,
    paragraph2: `These clients are research-obsessed - YouTube procedure videos, Reddit threads, Instagram results they want to replicate. Practitioners who dismiss client research lose this demographic instantly. We connect you with providers who engage with informed consumers.`,
    facts: [
      `Elizabeth line puts Liverpool Street 7 minutes away - competing with Central London providers`,
      `Olympic legacy extended self-improvement culture to aesthetic enhancement`,
      `Young professional demographic drives 90% clear aligner preference over traditional braces`
    ],
    glance: {
      population: '65,000',
      borough: 'Newham',
      keyDemographics: 'Young professionals, Tech workers, Creative industry',
      mainAreas: 'Stratford, Olympic Park, Maryland, Stratford International'
    }
  },

  'hackney': {
    heroIntro: `Hackney completed transformation from overlooked inner-city to one of London's most desirable and expensive areas. Creative industries drove initial gentrification; tech workers, financiers, and the generally well-resourced followed. Diversity persists - Caribbean, Turkish, Orthodox Jewish communities maintain presence.`,
    subHeadline: `Reach 280,000 potential customers in Hackney`,
    paragraph1: `The demographic is now predominantly affluent and creative-professional. Those arriving during gentrification's early stages accumulated property wealth and established families. Newer arrivals pay premium prices. Remaining diverse communities navigate rising costs.`,
    paragraph2: `Contemporary treatments are expected and normalised. Competition among providers is fierce. We connect Hackney residents with practitioners who deliver genuine quality, not just effective marketing.`,
    facts: [
      `Creative industry concentration brings design-conscious aesthetic expectations`,
      `Property prices up 300% since 2005 - affluent demographic with treatment budgets`,
      `Diverse communities persist - Turkish, Caribbean, Orthodox Jewish require cultural competence`
    ],
    glance: {
      population: '280,000',
      borough: 'Hackney',
      keyDemographics: 'Creative professionals, Tech workers, Diverse communities',
      mainAreas: 'Shoreditch, Dalston, Stoke Newington, Hackney Central, Homerton'
    }
  },

  'clapham': {
    heroIntro: `Clapham has become synonymous with young London professional life - "Clapham" functions as cultural shorthand for a particular demographic and lifestyle. The Common provides green space, restaurants and bars serve social lives, tube connections make City employment practical.`,
    subHeadline: `Reach Clapham's young professionals`,
    paragraph1: `The demographic is remarkably homogeneous by London standards. Young professionals late twenties through late thirties, well-educated, well-employed, oriented toward social lifestyle. Investment in appearance is culturally normalised - teeth whitening standard, clear aligners default, anti-wrinkle treatments routine.`,
    paragraph2: `Competition among providers is intense, benefiting consumers. The challenge is distinguishing excellent practitioners from effective marketers. We connect you with verified providers who deliver consistently, not just promise convincingly.`,
    facts: [
      `Young professional demographic drives treatment normalisation - peer influence powerful`,
      `Clear aligners dominate orthodontics - visible braces considered career liability`,
      `Preventative Botox starting late twenties increasingly common - "maintenance not correction"`
    ],
    glance: {
      population: '48,000',
      borough: 'Lambeth',
      keyDemographics: 'Young professionals, Singles, Professional couples',
      mainAreas: 'Clapham Old Town, Clapham Common, Clapham North, Clapham South'
    }
  },

  'brixton': {
    heroIntro: `Brixton carries cultural weight exceeding its geographical footprint - Caribbean community identity resonating globally through music, art, and political history. Contemporary Brixton is also gentrification's story - property prices soared, demographics shifted. This creates tension, vitality, and complex cosmetic treatment dynamics.`,
    subHeadline: `Reach Brixton's diverse community`,
    paragraph1: `Established Caribbean and African families maintain presence despite rising costs. Young professionals have discovered Brixton's energy. These groups coexist with different resources and expectations - practitioners must navigate both.`,
    paragraph2: `We connect Brixton residents with providers who understand this complexity. Established community members need cultural competence and fair pricing. Newcomers expect contemporary service. The best providers serve both effectively.`,
    facts: [
      `Caribbean community established since Windrush era - multi-generational provider relationships`,
      `Gentrification brought young professionals with metropolitan treatment expectations`,
      `Market segmentation significant - established vs newcomer demographics want different things`
    ],
    glance: {
      population: '85,000',
      borough: 'Lambeth',
      keyDemographics: 'Caribbean community, Young professionals, African families',
      mainAreas: 'Brixton, Brixton Hill, Loughborough Junction, Herne Hill borders'
    }
  },

  'peckham': {
    heroIntro: `Peckham exemplifies London's ongoing transformation - art scene attracting attention that property developers inevitably follow. Rye Lane's market traders and diverse shops maintain character while new residents bring different expectations. Neither force yet dominant; the tension creates energy.`,
    subHeadline: `Reach Peckham's evolving community`,
    paragraph1: `Young creatives and professionals priced out of Hackney discovered Peckham's energy. Established African and Caribbean communities maintain presence despite rising costs. These groups have different resources and service expectations.`,
    paragraph2: `We connect Peckham residents with providers navigating both demographics - contemporary quality for newcomers, cultural competence and fair pricing for established community, practitioners earning trust across the divide.`,
    facts: [
      `Art scene has driven 65% property price increase since 2018 - demographic shift accelerating`,
      `African community (particularly Nigerian and Ghanaian) requires cultural competence`,
      `Rye Lane diversity creates demand for practitioners skilled across all skin types`
    ],
    glance: {
      population: '72,000',
      borough: 'Southwark',
      keyDemographics: 'Creative professionals, African community, Caribbean families',
      mainAreas: 'Peckham, Peckham Rye, Queens Road, Nunhead borders'
    }
  },

  'dulwich': {
    heroIntro: `Dulwich exists as remarkable enclave - village atmosphere, outstanding schools, substantial green space, all within inner South London. The Dulwich Estate's management preserved character distinguishing the area from surroundings. Property prices reflect this exceptionalism.`,
    subHeadline: `Reach Dulwich's affluent families`,
    paragraph1: `Professional couples with children predominate, attracted by Dulwich College, JAGS, and excellent primary schools. Household incomes are substantial. The emphasis on education extends to investment in all aspects of children's development.`,
    paragraph2: `Orthodontics for children and teenagers represents significant demand. Parents seek comprehensive care and increasingly address their own concerns. We connect Dulwich families with practitioners matching expectations for expertise and professional service.`,
    facts: [
      `School reputation drives family relocation from across London - education-invested demographic`,
      `Village character creates tight word-of-mouth networks despite inner London location`,
      `Affluent demographic expects quality matching private schools and professional services`
    ],
    glance: {
      population: '45,000',
      borough: 'Southwark',
      keyDemographics: 'Affluent families, School parents, Professional couples',
      mainAreas: 'Dulwich Village, East Dulwich, West Dulwich, Dulwich Wood'
    }
  },

  'wimbledon': {
    heroIntro: `Wimbledon carries global recognition through tennis championships, but the residential area offers far more than tournament fame. Village atmosphere, excellent schools, Wimbledon Common's green space attract affluent families seeking quality of life within London boundaries.`,
    subHeadline: `Reach Wimbledon's affluent families`,
    paragraph1: `Professional couples with children predominate, often having relocated from more central areas as family size grew. Household incomes substantially exceed London average. Education emphasis extends to investment in all aspects of children's development.`,
    paragraph2: `Teenage orthodontics represents significant demand. Parents address their own concerns as children become independent. We connect Wimbledon families with practitioners matching quality expectations.`,
    facts: [
      `Tennis culture creates health and appearance-conscious demographic`,
      `Outstanding schools drive family relocation - education-invested parents`,
      `Village character enables word-of-mouth networks driving provider selection`
    ],
    glance: {
      population: '68,000',
      borough: 'Merton',
      keyDemographics: 'Affluent families, School parents, Tennis enthusiasts',
      mainAreas: 'Wimbledon, Wimbledon Village, Wimbledon Common, Raynes Park'
    }
  },

  'richmond': {
    heroIntro: `Richmond upon Thames is London's most affluent borough - magnificent park, riverside setting, village atmospheres defining various centres. Excellent schools, green space, and quality of life impossible closer to central London attract wealthy, established residents.`,
    subHeadline: `Reach Richmond's affluent residents`,
    paragraph1: `The demographic is wealthy and family-focused. Professional families with children predominate. Retired couples who've accumulated substantial wealth occupy large properties. Household incomes and assets substantially exceed London averages. Quality of life emphasis.`,
    paragraph2: `Quality is expected; budgets accommodate premium options without strain. We connect Richmond residents with practitioners matching expectations - comprehensive care, genuine expertise, service reflecting the standards experienced elsewhere.`,
    facts: [
      `Most affluent London borough - premium treatment expectations standard`,
      `Excellent schools attract education-invested families extending to children's dental care`,
      `Established population often has long-term relationships with trusted practitioners`
    ],
    glance: {
      population: '200,000',
      borough: 'Richmond upon Thames',
      keyDemographics: 'Affluent families, Established professionals, Wealthy retirees',
      mainAreas: 'Richmond, Twickenham, East Sheen, Kew, Barnes'
    }
  },

  'kensington': {
    heroIntro: `Kensington represents London at its most prestigious - diplomatic residences, royal palace proximity, property prices only the genuinely wealthy consider. International elites, established British wealth, and professionals serving them comprise the population.`,
    subHeadline: `Premium cosmetic treatments in Kensington`,
    paragraph1: `Household incomes and assets substantially exceed London averages - often by multiples. Expectations for service quality reflect lifelong experience of premium provision. The best available is expected as baseline.`,
    paragraph2: `Price is essentially irrelevant compared to quality. We connect Kensington residents with practitioners meeting exacting standards - genuine expertise, absolute discretion, results matching the finest available anywhere.`,
    facts: [
      `Among world's most expensive real estate - ultra-affluent demographic`,
      `International resident presence requires practitioners comfortable across cultures`,
      `Harley Street nearby - local expectations set by proximity to medical excellence`
    ],
    glance: {
      population: '156,000',
      borough: 'Kensington & Chelsea',
      keyDemographics: 'Ultra-affluent, International elites, Diplomatic community',
      mainAreas: 'Kensington, South Kensington, Holland Park, Notting Hill'
    }
  },

  'chelsea': {
    heroIntro: `Chelsea carries cultural associations transcending geography - King's Road, Sloane Rangers, particular form of British upper-class life. Contemporary Chelsea remains expensive and exclusive. Old money, new money, and international wealthy mix in streets where only the well-resourced live.`,
    subHeadline: `Premium cosmetic treatments in Chelsea`,
    paragraph1: `The demographic is affluent across all measures. Established families, wealthy individuals, those supported by family resources. Expectations for quality reflect experience of premium service across life. Discretion matters - Chelsea residents don't advertise cosmetic investments.`,
    paragraph2: `We connect Chelsea residents with practitioners meeting sophisticated expectations - premium service, expert delivery, natural-looking results, absolute confidentiality.`,
    facts: [
      `King's Road heritage creates aesthetic expectations reflecting fashion-conscious culture`,
      `International wealthy presence requires culturally adaptable premium service`,
      `Discretion valued highly - results should enhance without announcing intervention`
    ],
    glance: {
      population: '85,000',
      borough: 'Kensington & Chelsea',
      keyDemographics: 'Old money, International wealthy, Fashion industry',
      mainAreas: 'Chelsea, Kings Road, Sloane Square, Fulham Road'
    }
  },

  'battersea': {
    heroIntro: `Battersea's transformation epitomises London's capacity for reinvention. The Power Station development created an entirely new neighbourhood where industrial heritage once dominated. The Northern line extension finally delivered tube access. Property prices have soared, and the demographic has shifted toward wealthy professionals and international buyers.`,
    subHeadline: `Reach Battersea's affluent residents`,
    paragraph1: `Power Station residents occupy premium apartments, often working in finance, tech, or creative industries. The established streets house professional couples and young families who bought before prices exploded. Common to most: expectation of premium service and willingness to invest in appearance.`,
    paragraph2: `Premium treatments at premium prices find willing customers here. Full smile makeovers, sophisticated anti-ageing regimes, aesthetic enhancements from top practitioners. We connect Battersea residents with providers who match their quality expectations.`,
    facts: [
      `Power Station development added 4,000+ premium apartments with affluent residents`,
      `Average household income 45% above London average - premium treatments in demand`,
      `Northern line extension improved access, intensifying competition among providers`
    ],
    glance: {
      population: '75,000',
      borough: 'Wandsworth',
      keyDemographics: 'Wealthy professionals, International buyers, Young families',
      mainAreas: 'Battersea, Nine Elms, Battersea Park, Queenstown'
    }
  },

  'fulham': {
    heroIntro: `Fulham evolved from cheaper Chelsea alternative into expensive family territory. Victorian and Edwardian housing attracts families seeking space impossible in neighbouring areas. Excellent schools, transport connections, riverside setting - property prices ensure only the well-resourced consider Fulham.`,
    subHeadline: `Reach Fulham's affluent families`,
    paragraph1: `Professional couples with children predominate, often having moved from smaller Chelsea or Kensington properties as families grew. Household incomes substantially exceed London average. Emphasis on family life, education, and quality living.`,
    paragraph2: `Family orthodontics and comprehensive dental care represent substantial demand. We connect Fulham families with practitioners serving multiple generations with consistent quality.`,
    facts: [
      `School-age children demographic drives significant teenage orthodontic demand`,
      `Family coordination common - parents addressing concerns alongside children's treatment`,
      `Chelsea proximity sets premium service expectations across all categories`
    ],
    glance: {
      population: '95,000',
      borough: 'Hammersmith & Fulham',
      keyDemographics: 'Affluent families, Professional couples, School parents',
      mainAreas: 'Fulham, Parsons Green, Fulham Broadway, Sands End, Hurlingham'
    }
  },

  'islington': {
    heroIntro: `Islington established itself as gentrification's template decades before the term became common. Georgian terraces attracted middle-class pioneers in the 1960s; prices have risen seemingly without limit since. Upper Street's restaurants and boutiques serve substantial resources combined with cultural interests.`,
    subHeadline: `Reach Islington's affluent professionals`,
    paragraph1: `The demographic is affluent and professional. Media, law, and finance provide common career backgrounds. Cultural consumption defines lifestyle. The population skews older than trendy areas - established households rather than young professionals.`,
    paragraph2: `Quality is expected; budgets accommodate premium options. We connect Islington residents with practitioners matching sophisticated expectations - genuine expertise, unhurried consultations, results reflecting investment in excellence.`,
    facts: [
      `Media and professional demographic expects consultation quality matching solicitors`,
      `Harley Street minutes away - local providers must compete on quality`,
      `Established households mean considered, research-focused treatment decisions`
    ],
    glance: {
      population: '240,000',
      borough: 'Islington',
      keyDemographics: 'Media professionals, Lawyers, Affluent families',
      mainAreas: 'Upper Street, Highbury, Angel, Canonbury, Barnsbury'
    }
  },

  'greenwich': {
    heroIntro: `Greenwich carries World Heritage status and historical significance few London boroughs match. Royal Observatory, Cutty Sark, magnificent park rising to hilltop viewpoint - landmarks drawing global visitors while residents enjoy genuinely historic surroundings with village-centre character.`,
    subHeadline: `Reach 290,000 potential customers in Greenwich`,
    paragraph1: `Professional families appreciate excellent schools and historic character. Maritime Greenwich's tourism brings economic activity. The university adds academic dimension. Household incomes exceed London average though Greenwich lacks concentrated wealth of some boroughs.`,
    paragraph2: `We connect Greenwich residents with providers matching quality-focused, family-oriented expectations - comprehensive care across generations, practitioners whose professionalism matches the area's character.`,
    facts: [
      `World Heritage status attracts quality-conscious residents with high service expectations`,
      `Tourism economy creates commercial vibrancy supporting diverse provider market`,
      `University presence adds academic demographic with research-oriented approach to decisions`
    ],
    glance: {
      population: '290,000',
      borough: 'Greenwich',
      keyDemographics: 'Professional families, Academics, Heritage-conscious residents',
      mainAreas: 'Greenwich, Blackheath, Woolwich, Eltham, Charlton'
    }
  },

  'blackheath': {
    heroIntro: `Blackheath occupies elevated ground where open heath creates dramatic landscape unusual for inner London. Village atmosphere is genuine - independent shops, quality restaurants, community feel transcending marketing. Georgian and Victorian housing attracts those paying substantial premiums for character.`,
    subHeadline: `Reach Blackheath's affluent families`,
    paragraph1: `The population skews wealthy and established. Professional families predominate, often with children at local private schools or competing for grammar school places. Household incomes substantially exceed London average. Education emphasis extends to comprehensive dental and orthodontic investment.`,
    paragraph2: `Quality is prioritised absolutely over price. We connect Blackheath families with practitioners matching expectations - genuine expertise, unhurried consultations, results reflecting investment in excellence.`,
    facts: [
      `Grammar school competition creates education-invested demographic extending to children's dental care`,
      `Village character enables tight word-of-mouth networks - recommendations spread efficiently`,
      `Average property price £750,000+ ensures affluent, quality-focused clientele`
    ],
    glance: {
      population: '32,000',
      borough: 'Greenwich/Lewisham',
      keyDemographics: 'Affluent families, School parents, Established professionals',
      mainAreas: 'Blackheath, Blackheath Village, Blackheath Park, Lee borders'
    }
  },

  'kingston': {
    heroIntro: `Kingston upon Thames maintains historic market town character despite Greater London position. Riverside setting, excellent shopping, grammar school tradition attract families paying substantial premiums for quality of life. The demographic is affluent and family-focused.`,
    subHeadline: `Reach Kingston's families`,
    paragraph1: `Professional families with children predominate. Household incomes substantially exceed national averages. Historic character and relative self-containment create genuine community atmosphere. Education focus drives many residential decisions.`,
    paragraph2: `Comprehensive dental care, orthodontics for children, and quality treatments represent core demand. We connect Kingston families with practitioners matching expectations for expertise and professional service.`,
    facts: [
      `Grammar school tradition attracts education-invested families`,
      `Market town character creates unusually tight community for London`,
      `Self-contained feel means word-of-mouth within community networks powerful`
    ],
    glance: {
      population: '175,000',
      borough: 'Kingston upon Thames',
      keyDemographics: 'Affluent families, School parents, Established residents',
      mainAreas: 'Kingston, Surbiton, New Malden, Chessington, Tolworth'
    }
  },

};

// Export function to get location data by slug
export function getLocationData(slug) {
  return locationContent[slug] || null;
}

// Export all location slugs  
export function getAllLocationSlugs() {
  return Object.keys(locationContent);
}

export default locationContent;
