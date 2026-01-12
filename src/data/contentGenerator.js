// Add this import at the top
import { 
  generatePageContent, 
  generateTreatmentContext,
  generateWhyLocalContent,
  generateMetaDescription 
} from '@/data/contentGenerator';

// Then in your component, use:
const mainContent = generatePageContent(location, service);
const treatmentContext = generateTreatmentContext(location, service);
const whyLocalContent = generateWhyLocalContent(location, service);


// locationContent.js - PART 1 OF 3
// Unique content blocks for each location page

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

  'norbury': {
    heroIntro: `Norbury exists in transition - established diverse communities sharing streets with young professionals who discovered Victorian terraces cost half what they'd pay in Clapham. The cosmetic treatment market serves both demographics with different expectations and budgets.`,
    
    subHeadline: `Reach Norbury's evolving community`,
    
    paragraph1: `The gentrifying professionals expect online booking, contemporary treatment options, and service standards matching trendier postcodes. Established residents value relationship, fair pricing, and practitioners who've demonstrated long-term commitment to the area. Successful providers navigate both.`,
    
    paragraph2: `Teeth whitening serves as common ground - accessible treatment that builds trust before larger commitments. We connect Norbury residents with providers who understand both demographics: contemporary service for professionals, relationship-based care for established families.`,
    
    facts: [
      `Property prices up 45% in 5 years - bringing new demographics with different expectations`,
      `Commuter demographic drives demand for evening and Saturday appointments`,
      `Portuguese and Caribbean communities maintain strong word-of-mouth networks`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Croydon',
      keyDemographics: 'Young professionals, Portuguese community, Established families',
      mainAreas: 'Norbury, Pollards Hill, Streatham Vale'
    }
  },

  'addiscombe': {
    heroIntro: `Addiscombe runs on school-gate recommendations. This tight-knit community of professional families shares everything - and a single satisfied patient generates referrals for years. Reputation is built word-by-word, not through advertising.`,
    
    subHeadline: `Reach Addiscombe's connected families`,
    
    paragraph1: `Family orthodontics drives significant business. Parents arranging teenage Invisalign often finally address their own alignment issues - treatment becomes family activity rather than individual indulgence. The consultation experience matters enormously; rushed appointments lose entire networks.`,
    
    paragraph2: `Anti-ageing treatments follow local rules: results must be undetectable. "No one can tell" is the highest compliment. We connect Addiscombe families with practitioners who understand restraint - providers whose work earns recommendations rather than raised eyebrows.`,
    
    facts: [
      `School-gate networks drive 80% of treatment recommendations`,
      `Family treatment coordination - parents and teenagers booking together - up 65%`,
      `Practitioners report clients explicitly requesting "nothing anyone would notice"`
    ],
    
    glance: {
      population: '28,000',
      borough: 'Croydon',
      keyDemographics: 'Professional families, School parents, Long-term residents',
      mainAreas: 'Addiscombe, Shirley, Spring Park, Monks Orchard'
    }
  },

  'selsdon': {
    heroIntro: `Selsdon feels more Surrey village than London suburb - 200 acres of ancient woodland, access to genuine countryside, and residents who've chosen tranquillity over convenience. The cosmetic treatment approach here matches: unhurried, quality-focused, never flashy.`,
    
    subHeadline: `Reach Selsdon's established residents`,
    
    paragraph1: `The demographic skews older and wealthier than anywhere else in Croydon. Retirees and senior executives seek maintenance treatments - looking well for their age rather than attempting to appear decades younger. They understand good results develop over months through staged interventions.`,
    
    paragraph2: `Dental implants find substantial demand here. Residents facing tooth loss view implants as obviously superior to alternatives - cost represents reasonable investment for quality of life. We connect Selsdon residents with specialists who match their expectations for expertise and unhurried care.`,
    
    facts: [
      `Average age significantly above London average - anti-ageing maintenance focus`,
      `Dental implant enquiries 4x borough average - long-term solution investment`,
      `Residents expect consultation quality matching other professional relationships`
    ],
    
    glance: {
      population: '22,000',
      borough: 'Croydon',
      keyDemographics: 'Retirees, Senior executives, Empty nesters',
      mainAreas: 'Selsdon, Forestdale, Hamsey Green, Farleigh'
    }
  },

  'coulsdon': {
    heroIntro: `Coulsdon functions as a genuine town rather than London suburb - residents prefer local services over trekking into central Croydon. Access to Farthing Downs and Happy Valley attracts families who chose Surrey borders for space, schools, and countryside.`,
    
    subHeadline: `Reach families in Coulsdon`,
    
    paragraph1: `Family dental care represents the core requirement. Households need practitioners serving everyone from toddlers through grandparents. The orientation is long-term: find a good provider, build a relationship over decades, refer friends and family.`,
    
    paragraph2: `The commuter reality shapes scheduling expectations. Many residents work in London, making weekday appointments require annual leave. We connect Coulsdon families with providers offering early morning, evening, and Saturday availability - baseline requirements, not convenient extras.`,
    
    facts: [
      `Self-contained town character means residents prefer comprehensive local providers`,
      `Family orthodontics spans all ages - children, teenagers, and adults addressing lifelong concerns`,
      `Countryside-active demographic creates sun damage awareness driving skin treatment demand`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Croydon',
      keyDemographics: 'Family-oriented, Commuters, Outdoor enthusiasts',
      mainAreas: 'Coulsdon, Old Coulsdon, Chipstead Valley, Woodmansterne'
    }
  },

  // BARNET BOROUGH

  'barnet': {
    heroIntro: `Barnet consistently ranks among London's most desirable family boroughs - excellent schools, abundant green space, and genuine community feel. The cosmetic treatment market follows the same logic: parents who invest in children's education naturally extend that investment to appearance and confidence.`,
    
    subHeadline: `Reach 400,000 potential customers in Barnet`,
    
    paragraph1: `The orthodontic market here is remarkably robust. Grammar schools and outstanding comprehensives create image-conscious teenagers surrounded by peers whose families can similarly afford treatment. Invisalign Teen dominates because visible braces carry social costs during already-difficult adolescent years.`,
    
    paragraph2: `The significant Jewish community brings particular contexts - bar/bat mitzvahs, weddings, and milestone celebrations where looking your best carries cultural weight. Word-of-mouth through synagogue networks shapes provider reputations over years. We connect Barnet residents with trusted practitioners who understand these dynamics.`,
    
    facts: [
      `School catchment competition drives teenage orthodontic demand 50% above London average`,
      `Jewish community milestone events create predictable treatment demand patterns`,
      `Professional demographic expects consultation quality matching solicitors and accountants`
    ],
    
    glance: {
      population: '400,000',
      borough: 'Barnet',
      keyDemographics: 'Professional families, Jewish community, Commuters',
      mainAreas: 'Finchley, Hendon, Barnet, Mill Hill, Edgware'
    }
  },

  'finchley': {
    heroIntro: `Finchley serves time-pressed professionals who chose Northern line access over trendier postcodes. Twenty-five minutes to the City works perfectly - if cosmetic treatment providers can accommodate schedules that start early and end late.`,
    
    subHeadline: `Reach Finchley's professional community`,
    
    paragraph1: `Dual-income professional households face calendar Tetris that makes traditional appointment hours nearly impossible. Practices offering 7:30am slots, evening availability, and Saturday bookings capture demand that traditional hours cannot touch.`,
    
    paragraph2: `Invisalign dominates adult orthodontics to an unusual degree. These professionals cannot contemplate visible braces in client meetings. Clear aligners let them complete eighteen-month programmes while colleagues notice nothing. We match you with providers who understand professional presentation requirements.`,
    
    facts: [
      `Northern line commuters drive 65% demand for early morning and Saturday appointments`,
      `Clear aligner treatments up 80% since 2019 - visibility concerns in professional settings`,
      `Teeth whitening viewed as professional maintenance, like haircuts and dry cleaning`
    ],
    
    glance: {
      population: '75,000',
      borough: 'Barnet',
      keyDemographics: 'City professionals, Young families, Commuters',
      mainAreas: 'North Finchley, East Finchley, Finchley Central, Woodside Park'
    }
  },

  'hendon': {
    heroIntro: `Middlesex University shapes Hendon's character - students create demand for affordable treatments, but they graduate into professionals who remember which providers treated them well on limited budgets. Today's student whitening client is tomorrow's veneer patient.`,
    
    subHeadline: `Reach Hendon's diverse community`,
    
    paragraph1: `The Orthodox Jewish community adds important context. Cultural considerations, gender-specific treatment preferences, and tight community recommendation networks all influence provider choices. Practitioners who understand these nuances build loyal followings.`,
    
    paragraph2: `Budget-conscious doesn't mean quality-indifferent. Students want good results at fair prices. We connect Hendon residents with providers offering genuine value - payment plans, student pricing, and quality that earns long-term loyalty.`,
    
    facts: [
      `University population creates demand for affordable teeth whitening - often first cosmetic treatment`,
      `Orthodox community requires practitioners understanding specific cultural considerations`,
      `Student-to-professional pipeline means affordable quality builds lifetime client relationships`
    ],
    
    glance: {
      population: '55,000',
      borough: 'Barnet',
      keyDemographics: 'Students, Orthodox Jewish community, Young families',
      mainAreas: 'Hendon, West Hendon, Hendon Central, Brent Cross'
    }
  },

  'golders-green': {
    heroIntro: `Community recommendation drives cosmetic treatment decisions in Golders Green more powerfully than anywhere else in North London. The tight-knit Jewish community shares information through synagogue networks, school relationships, and family connections that no marketing can replicate.`,
    
    subHeadline: `Reach Golders Green's connected community`,
    
    paragraph1: `A practitioner who earns trust here builds a practice sustained entirely by referrals. Word spreads through Friday night dinners and community events. But poor experiences spread equally fast - reputation is everything; advertising is almost nothing.`,
    
    paragraph2: `The cultural calendar concentrates treatment demand around significant events. Bar/bat mitzvahs, weddings, and milestone celebrations are occasions where families want to look their best. We connect you with practitioners the community actually trusts.`,
    
    facts: [
      `Synagogue network recommendations drive 85% of provider selections`,
      `Treatment demand peaks predictably around bar/bat mitzvah and wedding seasons`,
      `Japanese expat community (near Japanese School) adds unexpected diversity to local market`
    ],
    
    glance: {
      population: '38,000',
      borough: 'Barnet',
      keyDemographics: 'Jewish community, Japanese expats, Professional families',
      mainAreas: 'Golders Green, Hampstead Garden Suburb, Childs Hill'
    }
  },

  'edgware': {
    heroIntro: `The Northern line ends at Edgware, and the cosmetic treatment market serves families and commuters who've accepted longer journey times in exchange for affordable space. This isn't a premium market - it's practical people making practical decisions about fair value.`,
    
    subHeadline: `Reach families in Edgware`,
    
    paragraph1: `Residents want good treatment at fair prices without unnecessary upselling. Transparent pricing matters enormously - hidden fees destroy trust immediately. The question isn't "what's cheapest" but "am I getting fair value?"`,
    
    paragraph2: `Family dental care represents the market's foundation. Find a good dentist, stick with them for decades, refer friends and family. We connect Edgware residents with providers who build these long-term relationships through consistent quality.`,
    
    facts: [
      `Transport hub creates shopping-trip convenience for combining retail with appointments`,
      `Family orientation means practitioners must serve toddlers through grandparents`,
      `Asian community significant - providers need cultural competence across demographics`
    ],
    
    glance: {
      population: '78,000',
      borough: 'Barnet',
      keyDemographics: 'Commuter families, Asian community, First-time buyers',
      mainAreas: 'Edgware, Burnt Oak, Canons Park, Stanmore borders'
    }
  },

  'chipping-barnet': {
    heroIntro: `High Barnet maintains genuine market town character despite sitting within Greater London. Medieval church, historic pubs, twice-weekly market - and residents who choose providers based on reputation built over years, not marketing campaigns.`,
    
    subHeadline: `Reach High Barnet's established community`,
    
    paragraph1: `The tight community knows which practitioners deliver quality and which disappoint. Recommendations pass through local networks with efficiency no advertising matches. These aren't young professionals chasing trends but established residents who expect quality and can afford it.`,
    
    paragraph2: `Anti-ageing treatments find natural market in this demographic. Residents seek maintained, refreshed appearance appropriate to their life stage - not dramatic transformation that might look out of place. We connect you with practitioners who understand restraint.`,
    
    facts: [
      `Market town character creates unusually tight word-of-mouth networks for London`,
      `Demographic skews older and more established - quality over trend-chasing`,
      `Northern line terminus means residents chose High Barnet specifically for its character`
    ],
    
    glance: {
      population: '45,000',
      borough: 'Barnet',
      keyDemographics: 'Established professionals, Retirees, Long-term residents',
      mainAreas: 'Chipping Barnet, High Barnet, Arkley, Monken Hadley'
    }
  },

  'totteridge': {
    heroIntro: `Totteridge is London at its most exclusive - multi-million pound properties behind high hedges, many occupied by names you'd recognise. The cosmetic treatment market operates in a category entirely separate from the rest of Barnet. Privacy is non-negotiable.`,
    
    subHeadline: `Premium cosmetic treatments in Totteridge`,
    
    paragraph1: `Residents don't discuss cosmetic treatments and expect absolute discretion from providers. They're accustomed to confidentiality in every professional relationship. Price is essentially irrelevant compared to quality and discretion - these clients can access any treatment anywhere in the world.`,
    
    paragraph2: `The aesthetic preference is sophisticated and understated. Obvious work that might attract attention is precisely what Totteridge residents want to avoid. We connect you with practitioners whose expertise delivers natural-looking results from the most skilled hands available.`,
    
    facts: [
      `Average property price exceeds £2 million - ultra-affluent demographic`,
      `Privacy requirements mean many prefer practitioners who do home visits`,
      `Recommendations flow through private networks invisible to outsiders`
    ],
    
    glance: {
      population: '12,000',
      borough: 'Barnet',
      keyDemographics: 'Ultra-affluent, Celebrities, Senior executives',
      mainAreas: 'Totteridge, Whetstone, Oakleigh Park'
    }
  },

  'east-barnet': {
    heroIntro: `East Barnet offers quiet residential character for families who want community without price premiums of more fashionable addresses. The cosmetic treatment market follows accordingly - practical, family-focused, relationship-oriented over decades, not transactions.`,
    
    subHeadline: `Reach East Barnet's families`,
    
    paragraph1: `The typical client here isn't chasing Instagram aesthetics. They want a dentist who'll look after the whole family reliably for twenty years. Straightforward treatment when problems arise. Maybe teeth whitening or orthodontics eventually, but only after building trust over time.`,
    
    paragraph2: `Word-of-mouth through local networks drives decisions. Parents meet other parents at school events and sports fixtures. A practice's reputation builds patient by patient, year by year. We connect you with providers who've earned that trust.`,
    
    facts: [
      `Family orientation means multi-generational patient relationships common`,
      `Anti-ageing treatments growing but approached cautiously - "not sure this is for me"`,
      `Oak Hill Park community creates village-like recommendation networks`
    ],
    
    glance: {
      population: '42,000',
      borough: 'Barnet',
      keyDemographics: 'Young families, Long-term residents, First-time buyers',
      mainAreas: 'East Barnet, New Barnet, Cockfosters, Oakleigh Park'
    }
  },

  'new-barnet': {
    heroIntro: `New Barnet is commuter territory - Thameslink to Moorgate makes this practical for City workers who've traded shorter journeys for affordable family housing. The cosmetic treatment market exists in service of their schedules, not the other way around.`,
    
    subHeadline: `Reach New Barnet's commuting professionals`,
    
    paragraph1: `Residents leave early and return late. Traditional weekday hours are essentially inaccessible without taking leave. Providers who offer early morning, evening, or Saturday availability serve this market; those who don't simply lose it to competitors.`,
    
    paragraph2: `Teeth whitening and Invisalign serve professional presentation needs. A bright smile and straight teeth matter in corporate contexts. We connect New Barnet commuters with efficient providers who respect limited time and deliver reliable results.`,
    
    facts: [
      `Thameslink connection creates demand for appointments outside traditional hours`,
      `Young professional families mean both career presentation and children's dental needs`,
      `Efficiency valued highly - practices running late lose clients to competitors`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Barnet',
      keyDemographics: 'City commuters, Young families, Professionals',
      mainAreas: 'New Barnet, East Barnet, Cockfosters borders'
    }
  },

  'mill-hill': {
    heroIntro: `Mill Hill School shapes local identity - the prestigious independent school creates an affluent, education-focused community that approaches cosmetic treatments with characteristic thoroughness. Research before committing. Check credentials. Expect professional rigour.`,
    
    subHeadline: `Reach Mill Hill's discerning families`,
    
    paragraph1: `These residents check practitioner credentials, read reviews systematically, and seek recommendations from trusted friends. Consultations that feel superficial or sales-focused lose them immediately. They expect the same professional rigour they experience from solicitors and accountants.`,
    
    paragraph2: `The village atmosphere around Mill Hill Village provides genuine community character. Residents know each other; recommendations flow through established networks. We connect Mill Hill families with practitioners whose expertise and professionalism match local expectations.`,
    
    facts: [
      `Independent school presence creates exceptionally research-focused demographic`,
      `Scientific heritage (National Institute for Medical Research) means informed consumers`,
      `Village character enables word-of-mouth networks unusual for London`
    ],
    
    glance: {
      population: '32,000',
      borough: 'Barnet',
      keyDemographics: 'Affluent families, Academics, School parents',
      mainAreas: 'Mill Hill, Mill Hill Village, Mill Hill East, Holders Hill'
    }
  },

  'colindale': {
    heroIntro: `Colindale's residential towers are full of people who didn't exist there five years ago. The transformation from quiet suburb to dense new-build development has created a cosmetic treatment market that's emerging rather than established - young, digital-first, and still forming.`,
    
    subHeadline: `Reach Colindale's new residents`,
    
    paragraph1: `The demographic is young professionals and first-time buyers in their late twenties and early thirties. Digitally native, researching providers online before booking, expecting modern booking systems and clear digital presence. Metropolitan expectations in an area still developing infrastructure.`,
    
    paragraph2: `They want teeth whitening, Invisalign, and aesthetic treatments - the same services their friends in Clapham access. We connect Colindale residents with providers meeting contemporary expectations: online booking, transparent pricing, quality that competes with established areas.`,
    
    facts: [
      `New-build population means weak word-of-mouth networks - online reviews matter more`,
      `Young demographic drives demand for Instagram-era treatments: whitening, aligners, subtle aesthetics`,
      `Northern line access means competition from established providers elsewhere is real`
    ],
    
    glance: {
      population: '45,000',
      borough: 'Barnet',
      keyDemographics: 'Young professionals, First-time buyers, New residents',
      mainAreas: 'Colindale, The Hyde, Grahame Park'
    }
  },

  // NEWHAM BOROUGH

  'newham': {
    heroIntro: `Newham is London's most transformed and most diverse borough. The Olympics changed everything, but the remarkable diversity - South Asian, African, Caribbean, Eastern European communities - remains. Cosmetic treatment providers must demonstrate genuine expertise across all skin types and cultural contexts.`,
    
    subHeadline: `Reach 350,000 potential customers in Newham`,
    
    paragraph1: `The diversity isn't marketing speak. Newham has the highest proportion of non-white residents of any London borough. Practitioners must understand different skin types, aesthetic preferences, and cultural contexts around beauty. Generic approaches fail here.`,
    
    paragraph2: `Stratford's regeneration has attracted young professionals to new-build towers with different expectations - contemporary service, digital booking, efficient treatment. We connect Newham residents with providers who understand both demographics: established diverse communities and metropolitan newcomers.`,
    
    facts: [
      `Most ethnically diverse borough in UK - practitioners must demonstrate genuine skin type expertise`,
      `Median age just 32 - youngest London borough drives contemporary treatment demand`,
      `Olympic regeneration brought young professionals with metropolitan expectations`
    ],
    
    glance: {
      population: '350,000',
      borough: 'Newham',
      keyDemographics: 'Diverse communities, Young professionals, Families',
      mainAreas: 'Stratford, East Ham, West Ham, Canning Town, Forest Gate'
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

  'east-ham': {
    heroIntro: `East Ham's high street tells you who lives here - South Asian grocers, sari shops, gold jewellers serving a community with generations of local history. The cosmetic treatment market reflects cultural values around presentation, family, and significant life events.`,
    
    subHeadline: `Reach East Ham's established community`,
    
    paragraph1: `Wedding-related treatments drive enormous demand. South Asian weddings are major events where looking your best carries cultural weight. Teeth whitening, skin treatments, and smile enhancement concentrate in pre-wedding months. The bridal industry connections run deep.`,
    
    paragraph2: `Expertise in South Asian skin is essential. Skin concerns, treatment responses, and aesthetic goals often differ from mainstream assumptions. We connect East Ham residents with practitioners who demonstrate genuine competence and cultural understanding.`,
    
    facts: [
      `Bangladeshi and Pakistani communities have 3+ generations of local presence`,
      `Wedding season (April-September) sees 200% increase in cosmetic treatment enquiries`,
      `Word-of-mouth through mosque and family networks drives provider selection`
    ],
    
    glance: {
      population: '78,000',
      borough: 'Newham',
      keyDemographics: 'South Asian families, Bangladeshi community, Multi-generational',
      mainAreas: 'East Ham, Manor Park, Little Ilford, Plashet'
    }
  },

  'west-ham': {
    heroIntro: `West Ham sits between regenerated Stratford and traditional East Ham - established working-class community meeting young professionals priced out of trendier areas. The cosmetic treatment market serves both with different needs, expectations, and budgets.`,
    
    subHeadline: `Reach West Ham's mixed community`,
    
    paragraph1: `Established residents want practitioners they can trust long-term - reliable dental care from providers who respect their communities. Newcomers bring contemporary expectations: online booking, efficient service, the same treatments their friends access elsewhere.`,
    
    paragraph2: `Victoria Park nearby attracts families who value green space. Family dental services handling everyone from toddlers to grandparents suit these clients. We connect West Ham residents with providers who can serve both demographics effectively.`,
    
    facts: [
      `Transitional area means demographic mix with varied service expectations`,
      `Victoria Park families drive demand for comprehensive family dental services`,
      `Property prices rising 8% annually - gentrifying population bringing new expectations`
    ],
    
    glance: {
      population: '45,000',
      borough: 'Newham',
      keyDemographics: 'Working class families, Young professionals, Caribbean community',
      mainAreas: 'West Ham, Plaistow borders, Upton Park'
    }
  },

  'canning-town': {
    heroIntro: `Canning Town is regeneration incarnate - cranes everywhere, new towers rising constantly, population materialising as developments complete. The Jubilee line and DLR connections underpin everything, bringing young professionals to an area still developing infrastructure to match.`,
    
    subHeadline: `Reach Canning Town's growing population`,
    
    paragraph1: `New residents bring metropolitan treatment expectations to an area where established residents have different requirements - practical dental care, affordable treatments, providers who understand working-class East London rather than importing assumptions.`,
    
    paragraph2: `The cosmetic treatment market is emerging rather than established. We connect Canning Town residents with providers serving both demographics - contemporary quality for newcomers, trusted value for established community members.`,
    
    facts: [
      `Population growing 15% annually as new developments complete`,
      `Jubilee line access means residents can easily access providers across London`,
      `Young professional newcomers driving demand for teeth whitening and clear aligners`
    ],
    
    glance: {
      population: '28,000',
      borough: 'Newham',
      keyDemographics: 'New residents, Young professionals, Working class families',
      mainAreas: 'Canning Town, Custom House, Royal Victoria'
    }
  },

  'plaistow': {
    heroIntro: `Plaistow maintains working-class East London character that some neighbouring areas have lost to regeneration. The tight-knit community knows each other, and that shapes everything - including which cosmetic treatment providers succeed through genuine trust versus marketing.`,
    
    subHeadline: `Reach Plaistow's connected community`,
    
    paragraph1: `Word-of-mouth matters enormously. Recommendations from trusted neighbours carry weight advertising cannot match. Multi-generational households need providers handling children through grandparents. The relationship is expected to last decades.`,
    
    paragraph2: `Budget constraints are real - treatment decisions involve financial planning. Payment plans aren't premium extras but essential features. We connect Plaistow residents with providers offering quality at fair prices with transparent, flexible payment options.`,
    
    facts: [
      `Community trust built over years - practitioners earn reputation patient by patient`,
      `Multi-generational households need comprehensive family dental services`,
      `Budget consciousness means payment plans essential for treatment accessibility`
    ],
    
    glance: {
      population: '42,000',
      borough: 'Newham',
      keyDemographics: 'Working class families, South Asian community, Long-term residents',
      mainAreas: 'Plaistow, Upton Park, West Ham borders'
    }
  },

  'forest-gate': {
    heroIntro: `Forest Gate has become one of East London's talked-about areas - authentic diversity meeting gradual gentrification, with neither force yet dominant. The cosmetic treatment market serves multiple populations with genuinely different needs and expectations.`,
    
    subHeadline: `Reach Forest Gate's evolving community`,
    
    paragraph1: `Young professionals priced out of Hackney have discovered Victorian terraces they can actually afford. They bring contemporary treatment expectations alongside established diverse communities with different requirements and cultural contexts.`,
    
    paragraph2: `The Elizabeth line at nearby Maryland has improved connections dramatically. Forest Gate residents can access providers across London easily, meaning local practitioners must compete on quality, not just convenience. We connect you with providers who deliver both.`,
    
    facts: [
      `Property prices up 60% in 5 years - demographic shift accelerating`,
      `Elizabeth line access at Maryland means competition from providers across London`,
      `Caribbean, South Asian, and African communities require culturally competent practitioners`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Newham',
      keyDemographics: 'Young professionals, Caribbean community, South Asian families',
      mainAreas: 'Forest Gate, Manor Park borders, Wanstead Flats'
    }
  },

  'beckton': {
    heroIntro: `Beckton is purpose-built London - residential development on former industrial land, designed for families seeking modern housing at accessible prices. The cosmetic treatment market follows this practical, family-oriented character.`,
    
    subHeadline: `Reach Beckton's families`,
    
    paragraph1: `The demographic is predominantly families who chose Beckton for new-build homes, parking, and school places. They're not chasing metropolitan lifestyles - they want good services at fair prices without complications.`,
    
    paragraph2: `Family dental care is the core requirement. Find a good provider, build a relationship, refer friends. We connect Beckton families with practitioners who build these long-term relationships through consistent quality and comprehensive family services.`,
    
    facts: [
      `Family orientation means practitioners must serve all ages effectively`,
      `Somewhat isolated character creates loyalty to comprehensive local providers`,
      `DLR connection means Stratford's options accessible when local falls short`
    ],
    
    glance: {
      population: '25,000',
      borough: 'Newham',
      keyDemographics: 'Young families, Key workers, First-time buyers',
      mainAreas: 'Beckton, Cyprus, Royal Albert'
    }
  },

  'custom-house': {
    heroIntro: `The Elizabeth line has transformed Custom House from overlooked to connected. What was a slow DLR journey to anywhere is now quick direct service to Liverpool Street and Paddington. The cosmetic treatment market is emerging to serve a population materialising in real-time.`,
    
    subHeadline: `Reach Custom House's emerging community`,
    
    paragraph1: `Currently, Custom House remains largely working-class and diverse. Established residents have traditional requirements. But new developments are bringing different demographics with metropolitan expectations - contemporary service, online booking, quality matching established areas.`,
    
    paragraph2: `Local provision is limited currently. As population grows, providers will follow. We connect Custom House residents with accessible options while the local market develops - quality providers reachable via excellent new transport links.`,
    
    facts: [
      `Elizabeth line opens access to Central London providers in under 20 minutes`,
      `Royal Docks development will dramatically increase local population`,
      `Emerging market creates opportunity for practitioners establishing early`
    ],
    
    glance: {
      population: '15,000',
      borough: 'Newham',
      keyDemographics: 'Working class families, New residents, Diverse community',
      mainAreas: 'Custom House, Royal Victoria, Prince Regent'
    }
  },

  'manor-park': {
    heroIntro: `Manor Park maintains traditional East London residential character - streets of terraces, established communities, local shops serving everyday needs without intensive regeneration disruption. Family dental care across generations remains the core requirement.`,
    
    subHeadline: `Reach Manor Park's established community`,
    
    paragraph1: `The diverse population - significant South Asian and African communities - creates requirements generic approaches cannot serve. Practitioners must understand different skin types, aesthetic preferences, and cultural contexts. Wedding treatments carry particular importance.`,
    
    paragraph2: `Community trust is earned over years. Recommendations from religious networks, extended family, and respected community figures carry weight advertising cannot match. We connect Manor Park residents with practitioners who've built genuine community relationships.`,
    
    facts: [
      `Multi-generational South Asian and African families require culturally competent care`,
      `Wedding season drives concentrated demand for teeth whitening and smile enhancement`,
      `Elizabeth line nearby improves access to providers across London`
    ],
    
    glance: {
      population: '38,000',
      borough: 'Newham',
      keyDemographics: 'South Asian families, African community, Long-term residents',
      mainAreas: 'Manor Park, Little Ilford, Aldersbrook borders'
    }
  },

};

// Continue to Part 2...
// locationContent.js - PART 2 OF 3
// Paste directly after Part 1

  // WANDSWORTH BOROUGH

  'wandsworth': {
    heroIntro: `Wandsworth has earned its reputation as London's most desirable borough for young professionals and families - riverside setting, excellent schools, and notably lower council tax. The cosmetic treatment market reflects this: image-conscious professionals who view aesthetic investment as normal life maintenance.`,
    
    subHeadline: `Reach 330,000 potential customers in Wandsworth`,
    
    paragraph1: `Young professional couples dominate much of the demographic, often arriving after university, establishing careers, and eventually starting families without leaving the borough. They expect contemporary cosmetic treatments as standard - teeth whitening, clear aligners, preventative Botox.`,
    
    paragraph2: `The competitive cosmetic treatment market benefits consumers through quality and pricing. We connect Wandsworth residents with verified providers across the borough - from riverside Battersea to family-focused Southfields, bustling Clapham Junction to leafy Putney.`,
    
    facts: [
      `Lowest council tax in London attracts affluent professionals with disposable income`,
      `Young professional demographic drives 70% higher Invisalign demand than London average`,
      `Riverside regeneration has added 15,000 new residents in premium apartments since 2020`
    ],
    
    glance: {
      population: '330,000',
      borough: 'Wandsworth',
      keyDemographics: 'Young professionals, Affluent families, City workers',
      mainAreas: 'Battersea, Clapham Junction, Putney, Tooting, Balham'
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

  'clapham-junction': {
    heroIntro: `Britain's busiest railway station shapes everything about the surrounding area. The young professional population dominates - late twenties through early forties, careers in finance, consulting, media. Investment in appearance is culturally normalised and practically expected.`,
    
    subHeadline: `Reach Clapham Junction's professionals`,
    
    paragraph1: `Social lives centre on restaurants, bars, and fitness facilities. These residents are early adopters of cosmetic treatment trends, influenced by social media and peer behaviour. Invisalign is practically default; teeth whitening is routine maintenance; preventative Botox starts in late twenties.`,
    
    paragraph2: `Competition among providers is fierce, which benefits consumers. The challenge is distinguishing genuinely excellent practitioners from effective marketers. We connect you with verified providers who deliver on promises, not just promises.`,
    
    facts: [
      `Under-35 demographic 60% higher than London average - trend-driven treatment demand`,
      `Lunchtime Botox appointments up 80% since 2021 - fitting around professional schedules`,
      `Clear aligner treatments dominate - visible braces essentially non-existent among adults`
    ],
    
    glance: {
      population: '55,000',
      borough: 'Wandsworth',
      keyDemographics: 'Young professionals, Singles and couples, Media/finance workers',
      mainAreas: 'Clapham Junction, Battersea Rise, Lavender Hill, St Johns Hill'
    }
  },

  'putney': {
    heroIntro: `Putney occupies an enviable Thames-side position, character shaped by the river, the bridge, and rowing heritage. The area attracts affluent families who've moved from busier London as children arrive - excellent schools, green spaces, village atmosphere while maintaining city connections.`,
    
    subHeadline: `Reach Putney's affluent families`,
    
    paragraph1: `The demographic skews older and wealthier than Clapham Junction. Families with school-age children predominate. Household incomes are substantial - property prices ensure only the well-resourced can afford Putney. The emphasis is on established, quality living rather than trendy lifestyle.`,
    
    paragraph2: `Family orthodontics represents substantial demand - parents arranging teenage treatment, often addressing their own concerns simultaneously. We connect Putney families with practitioners who serve multiple generations with consistent quality.`,
    
    facts: [
      `School-age children demographic drives teenage orthodontic demand 55% above borough average`,
      `Family treatment coordination common - parents booking alongside teenagers`,
      `Riverside lifestyle creates active, health-conscious demographic extending to aesthetic care`
    ],
    
    glance: {
      population: '45,000',
      borough: 'Wandsworth',
      keyDemographics: 'Affluent families, School parents, Professional couples',
      mainAreas: 'Putney, Roehampton, Putney Heath, Putney Bridge'
    }
  },

  'tooting': {
    heroIntro: `Tooting's reputation is built on extraordinary food scene and genuine multicultural character. The South Asian community shaped the area's identity for decades. Young professionals have discovered the area, attracted by relative affordability and authenticity that manufactured neighbourhoods cannot replicate.`,
    
    subHeadline: `Reach Tooting's diverse community`,
    
    paragraph1: `The demographic mix creates particular energy. Established South Asian families maintain community presence. Young professionals bring metropolitan treatment expectations. Successful providers bridge both - contemporary quality alongside cultural competence.`,
    
    paragraph2: `Wedding-related treatments remain significant for established communities. Young professionals seek the same services their Clapham friends access. We connect Tooting residents with providers who understand both demographics and serve each effectively.`,
    
    facts: [
      `South Asian community creates wedding-season demand peaks April-September`,
      `Young professional influx driving 50% growth in clear aligner enquiries since 2020`,
      `Northern line access means providers compete with Central London alternatives`
    ],
    
    glance: {
      population: '65,000',
      borough: 'Wandsworth',
      keyDemographics: 'South Asian families, Young professionals, Diverse community',
      mainAreas: 'Tooting, Tooting Bec, Tooting Broadway, Furzedown'
    }
  },

  'balham': {
    heroIntro: `Balham perfected the formula defining desirable South London - Victorian housing, excellent transport, thriving high street, young professional demographic. Northern line delivers City workers in under twenty minutes. Property prices have risen accordingly, pushing out all but the well-resourced.`,
    
    subHeadline: `Reach Balham's professional community`,
    
    paragraph1: `The demographic is distinctive: young professionals late twenties through early forties, well-educated and well-employed, often couples without children or with young families. Careers in finance, law, consulting. Investment in appearance fits naturally within this value system.`,
    
    paragraph2: `Teeth whitening is essentially universal. Invisalign dominates orthodontics. Botox and subtle fillers are mainstream. We connect Balham residents with practitioners who meet expectations formed by this sophisticated, research-focused demographic.`,
    
    facts: [
      `Professional demographic drives treatment research - 85% check online reviews before booking`,
      `Peer influence significant - experiences spread rapidly through connected social networks`,
      `Saturday availability essential - weekday appointments impractical for most residents`
    ],
    
    glance: {
      population: '42,000',
      borough: 'Wandsworth',
      keyDemographics: 'Young professionals, Dual-income couples, Young families',
      mainAreas: 'Balham, Bedford Hill, Balham High Road, Nightingale'
    }
  },

  'wandsworth-town': {
    heroIntro: `Wandsworth Town offers calmer alternative to Clapham Junction's intensity - one stop away but noticeably more residential. Young families and established couples rather than singles and sharers. Many residents moved from busier areas as family size grew.`,
    
    subHeadline: `Reach Wandsworth Town families`,
    
    paragraph1: `The somewhat older demographic than Clapham Junction means less trend-driven demand. Residents approach treatments as considered investments rather than social necessities. Comprehensive family dental care, orthodontics for teenagers, adult treatments as circumstances permit.`,
    
    paragraph2: `Southside shopping centre provides convenient context for combining retail with appointments. We connect Wandsworth Town residents with providers who understand family-oriented service rather than volume-focused practice.`,
    
    facts: [
      `Family orientation drives multi-generational treatment relationships`,
      `Demographic slightly older than Clapham Junction - considered investment approach`,
      `Southside shopping centre creates convenient appointment-plus-shopping opportunities`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Wandsworth',
      keyDemographics: 'Young families, Professional couples, Growing households',
      mainAreas: 'Wandsworth Town, Southside, Old York Road, Wandsworth Common'
    }
  },

  'southfields': {
    heroIntro: `Southfields is defined by Wimbledon tennis - the Championships transform the area annually, and the All England Club shapes local identity year-round. Beyond tennis, excellent schools and Wimbledon Park's green space attract family-oriented, affluent residents.`,
    
    subHeadline: `Reach Southfields' affluent families`,
    
    paragraph1: `Professional couples with children predominate, often having relocated from more central locations as family size grew. Household incomes well above London average. The emphasis on education extends to investment in children's development - including comprehensive orthodontic care.`,
    
    paragraph2: `Teenage orthodontics is nearly universal among families who can afford private treatment. Parents address their own concerns as children become independent. We connect Southfields families with practitioners whose quality matches local expectations.`,
    
    facts: [
      `Tennis club culture creates health and appearance-conscious demographic`,
      `Outstanding school reputation attracts families prioritising children's development`,
      `Wimbledon proximity means premium service expectations across all categories`
    ],
    
    glance: {
      population: '28,000',
      borough: 'Wandsworth',
      keyDemographics: 'Affluent families, School parents, Tennis enthusiasts',
      mainAreas: 'Southfields, Wimbledon Park, Earlsfield borders'
    }
  },

  'earlsfield': {
    heroIntro: `Earlsfield functions as quieter residential alternative to Wandsworth's busier centres - independent shops, genuine neighbourhood character, slightly more affordable than neighbours. Young families and couples in early family formation stages predominate.`,
    
    subHeadline: `Reach Earlsfield's growing families`,
    
    paragraph1: `Many residents moved from Clapham Junction or Balham as relationships evolved and space requirements grew. Household incomes are comfortable but may be constrained by mortgage commitments. Quality matters but so does value.`,
    
    paragraph2: `Couples who developed aesthetic treatment habits in younger years continue these into family life. Children's dental needs enter as families grow. We connect Earlsfield residents with providers delivering quality at reasonable price points.`,
    
    facts: [
      `Slightly younger family demographic than Putney - early-stage family formation`,
      `Value-consciousness significant - quality expected but budgets aren't unlimited`,
      `High street independent character creates community recommendation networks`
    ],
    
    glance: {
      population: '32,000',
      borough: 'Wandsworth',
      keyDemographics: 'Young families, Growing households, First-time parents',
      mainAreas: 'Earlsfield, Summerstown, Garratt Lane'
    }
  },

  'nine-elms': {
    heroIntro: `Nine Elms represents London development at its most ambitious - billions invested transforming industrial land into new metropolitan quarter. US Embassy relocation anchored international attention. Northern line extension delivered tube access. The area remains under construction, with new phases completing constantly.`,
    
    subHeadline: `Reach Nine Elms' emerging population`,
    
    paragraph1: `The demographic is necessarily new - residents who didn't exist five years ago because their homes didn't exist. Early adopters tend toward young professionals and international buyers attracted by new housing and transport connections.`,
    
    paragraph2: `Contemporary treatments accessed through digital channels match this population's expectations. We connect Nine Elms residents with providers meeting metropolitan standards while the local market develops alongside the neighbourhood.`,
    
    facts: [
      `Population essentially created from scratch since 2015 - no established provider relationships`,
      `International buyer presence creates demand for English-fluent premium practitioners`,
      `Power Station development creates new commercial hub including cosmetic treatment providers`
    ],
    
    glance: {
      population: '25,000',
      borough: 'Wandsworth',
      keyDemographics: 'Young professionals, International buyers, New residents',
      mainAreas: 'Nine Elms, Battersea Power Station, New Covent Garden'
    }
  },

  // LAMBETH BOROUGH

  'lambeth': {
    heroIntro: `Lambeth spans remarkable diversity - South Bank cultural institutions through gentrifying Brixton to residential Streatham. This range makes borough-level generalisations meaningless; each neighbourhood operates with distinct character, demographic, and cosmetic treatment dynamics.`,
    
    subHeadline: `Reach 325,000 potential customers in Lambeth`,
    
    paragraph1: `The South Bank serves workers from surrounding offices. Brixton's evolving demographics create tension between established communities and gentrifying newcomers. Streatham's family orientation generates comprehensive dental care demand. Each requires different provider approaches.`,
    
    paragraph2: `We connect Lambeth residents with providers who understand these micro-market differences - from premium City-adjacent services to community-embedded practitioners serving diverse populations with cultural competence.`,
    
    facts: [
      `Borough spans from Zone 1 South Bank to Zone 3 Streatham - vastly different demographics`,
      `Brixton gentrification has created dual-market dynamics requiring different provider approaches`,
      `Diverse population requires practitioners with genuine expertise across all skin types`
    ],
    
    glance: {
      population: '325,000',
      borough: 'Lambeth',
      keyDemographics: 'Young professionals, Diverse communities, Families',
      mainAreas: 'Brixton, Streatham, Clapham, Vauxhall, Kennington'
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

  'streatham': {
    heroIntro: `Streatham stretches along one of South London's longest high streets, defying easy characterisation. Northern reaches blend into Brixton's energy, southern edges feel distinctly suburban. Recent years brought noticeable change - property prices rose, young professionals discovered the area.`,
    
    subHeadline: `Reach Streatham's mixed community`,
    
    paragraph1: `Young professional couples, often priced out of Brixton or Clapham, find Streatham's larger properties attractive. Established families, frequently Portuguese or Caribbean, have shaped local character for decades. Each demographic requires different service approaches.`,
    
    paragraph2: `We connect Streatham residents with providers offering breadth - contemporary treatments for newcomers, comprehensive family care for established residents, cultural competence across the diverse population.`,
    
    facts: [
      `Portuguese community significant - cultural competence across demographics essential`,
      `Property prices up 55% in 5 years - demographic shift accelerating`,
      `Family orientation in established community drives multi-generational care demand`
    ],
    
    glance: {
      population: '65,000',
      borough: 'Lambeth',
      keyDemographics: 'Young professionals, Portuguese community, Caribbean families',
      mainAreas: 'Streatham, Streatham Hill, Streatham Common, Streatham Vale'
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

  'vauxhall': {
    heroIntro: `Vauxhall has undergone transformation exemplifying London's reinvention capacity. The station area, once defined by LGBTQ+ nightlife, now bristles with residential towers housing populations unimaginable a decade ago. Transport connections are exceptional - Victoria line, mainline rail, bus interchange.`,
    
    subHeadline: `Reach Vauxhall's metropolitan residents`,
    
    paragraph1: `Young professionals, often international, occupy the apartment towers. They chose Vauxhall for transport convenience and modern housing rather than neighbourhood character. The LGBTQ+ community maintains historic presence through venues and cultural institutions.`,
    
    paragraph2: `Contemporary treatments accessed through digital channels match this population's expectations. We connect Vauxhall residents with providers meeting metropolitan standards - efficient booking, quality treatment, flexible scheduling.`,
    
    facts: [
      `Victoria line delivers West End access in minutes - competing with Central London providers`,
      `LGBTQ+ community may have specific aesthetic preferences and comfort requirements`,
      `International resident presence creates demand for culturally adaptable practitioners`
    ],
    
    glance: {
      population: '32,000',
      borough: 'Lambeth',
      keyDemographics: 'Young professionals, International residents, LGBTQ+ community',
      mainAreas: 'Vauxhall, Nine Elms borders, South Lambeth, Stockwell borders'
    }
  },

  'kennington': {
    heroIntro: `Kennington maintains particular character shaped by the Oval cricket ground, attractive Georgian housing, and position as one of London's most central residential areas. Property prices reflect centrality and housing quality, ensuring an affluent demographic.`,
    
    subHeadline: `Reach Kennington's professional residents`,
    
    paragraph1: `The population mixes young professionals attracted by transport and housing quality with established residents who've lived locally for decades. Political proximity to Westminster brings civil servants and policy professionals. Media types appreciate centrality and residential calm.`,
    
    paragraph2: `Quality is expected and budgets accommodate premium options. The emphasis is on sophisticated maintenance rather than dramatic transformation. We connect Kennington residents with practitioners matching their expectations for expertise and professional service.`,
    
    facts: [
      `Zone 1/2 border location means competition from Harley Street and West End providers`,
      `Professional demographic expects consultation quality matching solicitors and accountants`,
      `Georgian housing stock attracts design-conscious residents with aesthetic expectations`
    ],
    
    glance: {
      population: '28,000',
      borough: 'Lambeth',
      keyDemographics: 'Civil servants, Media professionals, Young professionals',
      mainAreas: 'Kennington, Oval, Kennington Park, Kennington Cross'
    }
  },

  'herne-hill': {
    heroIntro: `Herne Hill has quietly become one of South London's most desirable residential areas - Sunday farmers' market, Brockwell Park, community atmosphere that feels genuine rather than manufactured. The area escaped intensive gentrification that transformed neighbouring Brixton.`,
    
    subHeadline: `Reach Herne Hill's creative community`,
    
    paragraph1: `Professional couples with young children predominate, often working in media, education, or creative industries. The area attracts those who value community, independent businesses, and neighbourhood character over convenience or status signalling.`,
    
    paragraph2: `Word-of-mouth within the tight community carries exceptional weight. We connect Herne Hill residents with providers who earn recommendations - genuine expertise, personal service, fair pricing, relationship-focused care.`,
    
    facts: [
      `Creative industry demographic brings considered aesthetic preferences`,
      `Community-oriented character means word-of-mouth drives 75% of provider selections`,
      `Brockwell Park families drive demand for comprehensive family dental services`
    ],
    
    glance: {
      population: '22,000',
      borough: 'Lambeth',
      keyDemographics: 'Creative professionals, Young families, Community-minded residents',
      mainAreas: 'Herne Hill, Brockwell Park, Half Moon Lane'
    }
  },

  // SOUTHWARK BOROUGH

  'southwark': {
    heroIntro: `Southwark encompasses extraordinary diversity - global corporate towers of London Bridge through vibrant Borough Market to creative Peckham and beyond. Each area operates with distinct identity and market dynamics. What unites Southwark is its position as inner South London at its most varied.`,
    
    subHeadline: `Reach 315,000 potential customers in Southwark`,
    
    paragraph1: `London Bridge serves corporate workers seeking efficient treatments. Borough and Bermondsey attract design-conscious residents with aesthetic expectations. Peckham's evolving demographics create dual-market dynamics. Each requires different provider approaches.`,
    
    paragraph2: `We connect Southwark residents with providers understanding these micro-market differences - from premium City-adjacent services to practitioners embedded in evolving communities.`,
    
    facts: [
      `Borough spans from Zone 1 London Bridge to Zone 2/3 Peckham - vastly different demographics`,
      `Creative industry concentration in Peckham brings design-conscious aesthetic expectations`,
      `Bermondsey warehouse conversions attract affluent residents expecting premium service`
    ],
    
    glance: {
      population: '315,000',
      borough: 'Southwark',
      keyDemographics: 'Corporate workers, Creative professionals, Diverse families',
      mainAreas: 'London Bridge, Peckham, Bermondsey, Dulwich, Camberwell'
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

  'bermondsey': {
    heroIntro: `Bermondsey completed transformation from industrial dockside to desirable residential area - warehouse conversions commanding substantial premiums. Bermondsey Street's foodie scene, Friday antiques market, and London Bridge proximity attract affluent residents seeking urban character.`,
    
    subHeadline: `Reach Bermondsey's affluent residents`,
    
    paragraph1: `The demographic is predominantly professional and prosperous. Young professionals and couples in their thirties and forties occupy converted warehouses. Creative industries have significant presence - designers, architects, media professionals appreciating area's aesthetic.`,
    
    paragraph2: `These residents notice aesthetics and expect quality in all service experiences. We connect Bermondsey residents with providers matching design-conscious expectations - contemporary environments, sophisticated results, premium service.`,
    
    facts: [
      `Warehouse conversion demographic expects design-quality environments`,
      `Creative industry concentration brings sophisticated aesthetic expectations`,
      `London Bridge proximity means competition from City-adjacent premium providers`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Southwark',
      keyDemographics: 'Design professionals, Affluent couples, Creative industry',
      mainAreas: 'Bermondsey, Bermondsey Street, Jamaica Road, Shad Thames'
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

  'camberwell': {
    heroIntro: `Camberwell maintains genuinely diverse, unpretentious character distinguishing it from thoroughly gentrified neighbours. Camberwell College of Arts contributes creative energy. King's College Hospital brings medical professionals. This mix creates neighbourhood resisting easy characterisation.`,
    
    subHeadline: `Reach Camberwell's diverse community`,
    
    paragraph1: `Arts students add youthful energy on limited budgets. Medical professionals from King's represent substantial middle-class presence. Established diverse communities maintain generational roots. Each demographic has different requirements and resources.`,
    
    paragraph2: `The medical professional presence creates informed consumers understanding treatment options. We connect Camberwell residents with providers who can serve varied demographics - quality at accessible prices alongside premium options.`,
    
    facts: [
      `Medical professional concentration creates unusually informed consumer base`,
      `Arts college presence drives demand for affordable entry-level treatments`,
      `Denmark Hill hospital campus brings healthcare worker population seeking local services`
    ],
    
    glance: {
      population: '52,000',
      borough: 'Southwark',
      keyDemographics: 'Medical professionals, Arts students, Diverse families',
      mainAreas: 'Camberwell, Camberwell Green, Denmark Hill, Champion Hill'
    }
  },

  'borough': {
    heroIntro: `Borough functions differently depending on when you visit. Borough Market draws food enthusiasts during trading hours. Guy's Hospital brings medical activity. The Shard transformed surrounding area into commercial hub. Through this, residential communities maintain presence beyond the bustle.`,
    
    subHeadline: `Reach Borough's professionals`,
    
    paragraph1: `The demographic divides between long-established residents and professionals in newer developments attracted by transport connections. Daytime population - market visitors, office workers, hospital staff - vastly exceeds residential base.`,
    
    paragraph2: `We connect Borough residents with providers serving both residential community and professional population - comprehensive care for families alongside efficient treatments for time-pressed City workers.`,
    
    facts: [
      `Office worker concentration creates lunchtime and after-work treatment demand`,
      `Medical professional presence from Guy's Hospital brings informed consumers`,
      `London Bridge station accessibility means competition from providers across London`
    ],
    
    glance: {
      population: '25,000',
      borough: 'Southwark',
      keyDemographics: 'City workers, Medical professionals, Long-term residents',
      mainAreas: 'Borough, Borough Market, London Bridge, Bankside'
    }
  },

  'rotherhithe': {
    heroIntro: `Rotherhithe occupies Surrey Docks peninsula - maritime history, ongoing regeneration, relative isolation from rest of Southwark. Canada Water development created new residential density. The peninsula's geography creates somewhat enclosed community feel unusual for inner London.`,
    
    subHeadline: `Reach Rotherhithe's peninsula community`,
    
    paragraph1: `Canada Water towers attract young professionals seeking modern housing and transport links. Older Rotherhithe includes council estates and converted dockside buildings. The enclosed feel may create local loyalty when adequate provision exists.`,
    
    paragraph2: `We connect Rotherhithe residents with providers serving both demographics - contemporary service for new development residents, trusted care for established community members.`,
    
    facts: [
      `Peninsula geography creates enclosed community feel unusual for Zone 2 London`,
      `Canada Water development brought young professional demographic to previously quiet area`,
      `Jubilee line access means Canary Wharf and West End providers easily reachable`
    ],
    
    glance: {
      population: '42,000',
      borough: 'Southwark',
      keyDemographics: 'Young professionals, Docklands residents, Families',
      mainAreas: 'Rotherhithe, Canada Water, Surrey Quays, South Dock'
    }
  },

  // TOWER HAMLETS BOROUGH

  'tower-hamlets': {
    heroIntro: `Tower Hamlets encompasses extremes defining London's complexity - Canary Wharf's global corporate towers within same borough as Whitechapel's historic markets. Enormous wealth and significant deprivation exist in close proximity. Each area operates as essentially different market.`,
    
    subHeadline: `Reach 320,000 potential customers in Tower Hamlets`,
    
    paragraph1: `Canary Wharf supports premium providers targeting corporate workers with substantial incomes. Whitechapel and Bethnal Green serve diverse communities with different resources and expectations. Practitioners must understand which market segment they're serving.`,
    
    paragraph2: `We connect Tower Hamlets residents with providers matching their specific area dynamics - premium corporate services in Docklands, culturally competent care in established communities.`,
    
    facts: [
      `Borough contains both highest earners (Canary Wharf) and significant deprivation`,
      `Bangladeshi community largest in UK - cultural competence essential for much of borough`,
      `Young population (median age 31) drives contemporary treatment demand`
    ],
    
    glance: {
      population: '320,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Corporate workers, Bangladeshi community, Young professionals',
      mainAreas: 'Canary Wharf, Whitechapel, Bethnal Green, Bow, Mile End'
    }
  },

  'canary-wharf': {
    heroIntro: `Canary Wharf evolved from audacious Docklands development into established global financial centre. Banks, law firms, and corporations shape international commerce from these towers. The residential population has grown substantially - thousands now living in surrounding developments.`,
    
    subHeadline: `Reach Canary Wharf's professionals`,
    
    paragraph1: `The demographic is affluent and professional. Corporate employees work demanding hours in well-compensated roles. Residents chose modern housing and convenience to financial district employment. Both segments expect premium service and have resources to pay for quality.`,
    
    paragraph2: `Time pressure creates demand for efficient treatments - lunchtime appointments, minimal recovery, streamlined processes. We connect Canary Wharf professionals with practitioners who genuinely accommodate demanding schedules.`,
    
    facts: [
      `120,000+ workers create massive daytime population seeking convenient treatment options`,
      `Lunchtime Botox appointments standard - fitting treatment around meeting schedules`,
      `Premium pricing accepted when matched by quality, efficiency, and convenience`
    ],
    
    glance: {
      population: '18,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Financial professionals, Corporate workers, High earners',
      mainAreas: 'Canary Wharf, Heron Quays, West India Quay, Poplar borders'
    }
  },

  'whitechapel': {
    heroIntro: `Whitechapel represents Tower Hamlets at its most historically layered and diverse. The Bangladeshi community has shaped the area since the 1970s. The Royal London Hospital brings medical professionals. The Whitechapel Gallery adds cultural significance. Gentrification hasn't entirely erased working-class character.`,
    
    subHeadline: `Reach Whitechapel's diverse community`,
    
    paragraph1: `The demographic is predominantly Bangladeshi and other South Asian communities alongside African and Eastern European populations. Medical professionals around the Royal London add middle-class presence. Income levels generally below borough average.`,
    
    paragraph2: `Cultural competence and accessible pricing are essential. We connect Whitechapel residents with practitioners who understand the community - fair prices, cultural sensitivity, genuine expertise serving diverse populations.`,
    
    facts: [
      `Bangladeshi community largest concentration in UK - cultural competence essential`,
      `Royal London Hospital creates informed healthcare worker population`,
      `Elizabeth line improving access to Central London providers - local must compete on quality`
    ],
    
    glance: {
      population: '45,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Bangladeshi community, Medical professionals, Diverse families',
      mainAreas: 'Whitechapel, Aldgate East, Shadwell, Royal London'
    }
  },

  'bethnal-green': {
    heroIntro: `Bethnal Green experienced the gentrification trajectory characterising inner East London - artists seeking affordable space, their presence attracting mainstream interest, property prices rising, original residents facing displacement. The process is well-advanced but diversity persists.`,
    
    subHeadline: `Reach Bethnal Green's creative community`,
    
    paragraph1: `The creative community that arrived a generation ago is now established, often with families. Young professionals have discovered the area's energy. Established Bangladeshi and Vietnamese communities maintain presence though increasingly squeezed by costs.`,
    
    paragraph2: `The design-conscious demographic common in creative areas may have particular aesthetic expectations. We connect Bethnal Green residents with providers matching sophisticated preferences and varied budgets.`,
    
    facts: [
      `Creative industry concentration brings design-conscious aesthetic expectations`,
      `Vietnamese community (concentrated around Old Ford Road) requires cultural competence`,
      `Property prices up 70% since 2015 - demographic shift well advanced`
    ],
    
    glance: {
      population: '38,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Creative professionals, Bangladeshi community, Young families',
      mainAreas: 'Bethnal Green, Victoria Park borders, Globe Town, Cambridge Heath'
    }
  },

  'bow': {
    heroIntro: `Bow maintains more genuinely residential character than neighbouring areas - Victoria Park providing exceptional green space, canal network offering waterside walks unusual for inner London. Development around Fish Island and Olympic Park edges has brought change while community character persists.`,
    
    subHeadline: `Reach Bow's family community`,
    
    paragraph1: `Established working-class and diverse communities have roots spanning generations. Young professionals and families discovered the area's appeal - Victoria Park access, relative affordability, emerging creative energy. Both demographics need effective service.`,
    
    paragraph2: `Victoria Park's attraction of families creates demand for comprehensive dental services. We connect Bow residents with providers serving multiple generations with consistent quality.`,
    
    facts: [
      `Victoria Park attracts families driving demand for comprehensive family dental care`,
      `Fish Island creative quarter brings design-conscious young professionals`,
      `Olympic Park proximity creating ongoing residential development and population growth`
    ],
    
    glance: {
      population: '35,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Young families, Creative workers, Established community',
      mainAreas: 'Bow, Old Ford, Fish Island, Victoria Park borders'
    }
  },

  'mile-end': {
    heroIntro: `Mile End is defined by Queen Mary University - substantial student population bringing youthful energy to an area mixing academia with established diverse communities and increasing numbers of young professionals attracted by relative affordability.`,
    
    subHeadline: `Reach Mile End's mixed community`,
    
    paragraph1: `Students are transient but numerous. Academic staff add professional presence. Established Bangladeshi and Somali communities maintain roots. Young professionals, sometimes former students who stayed, discovered Mile End's practical appeal.`,
    
    paragraph2: `Student demand is budget-constrained but present - whitening before graduation, basic aesthetics for special occasions. We connect Mile End residents with providers serving varied demographics at appropriate price points.`,
    
    facts: [
      `Queen Mary University creates significant student population with budget constraints`,
      `Central line access means competition from providers across London`,
      `Diverse established communities require culturally competent practitioners`
    ],
    
    glance: {
      population: '28,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Students, Academics, Bangladeshi community, Young professionals',
      mainAreas: 'Mile End, Mile End Park, Stepney Green, Limehouse borders'
    }
  },

  'poplar': {
    heroIntro: `Poplar exists in Canary Wharf's shadow - significant wealth in towers overlooking communities facing genuine deprivation. DLR improved connectivity, regeneration pressure continues, but Poplar retains working-class character many neighbouring areas have lost.`,
    
    subHeadline: `Reach Poplar's community`,
    
    paragraph1: `The demographic is predominantly working-class and diverse. Bangladeshi, Somali, and other communities have substantial presence. Social housing remains significant. Income levels generally below borough average create real budget constraints.`,
    
    paragraph2: `Accessible pricing and genuine community engagement are essential. We connect Poplar residents with providers offering quality at fair prices - practitioners who understand and respect the community.`,
    
    facts: [
      `DLR connection provides access to Canary Wharf providers when local falls short`,
      `Working-class character means payment plans essential for treatment accessibility`,
      `Diverse community requires practitioners with genuine cultural competence`
    ],
    
    glance: {
      population: '32,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Working class families, Bangladeshi community, Somali families',
      mainAreas: 'Poplar, Blackwall, East India, Lansbury'
    }
  },

  'limehouse': {
    heroIntro: `Limehouse carries historical resonance as London's original Chinatown, though the Chinese community relocated westward long ago. Today's Limehouse is Docklands territory - waterside development, DLR connectivity, converted wharves and new-build apartments attracting professionals.`,
    
    subHeadline: `Reach Limehouse's professional residents`,
    
    paragraph1: `Young professionals in riverside developments chose Limehouse for practical reasons - housing value, transport links, water views. Canary Wharf proximity means many work in finance. Contemporary treatment expectations match the demographic.`,
    
    paragraph2: `We connect Limehouse residents with efficient providers meeting professional expectations - modern booking, quality treatment, scheduling that accommodates demanding careers.`,
    
    facts: [
      `DLR provides quick Canary Wharf access - many residents work in finance`,
      `Waterside development demographic expects contemporary service standards`,
      `Professional population drives demand for efficient, convenient treatment delivery`
    ],
    
    glance: {
      population: '18,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Young professionals, Financial workers, Docklands residents',
      mainAreas: 'Limehouse, Limehouse Basin, Narrow Street, Ratcliff'
    }
  },

  'isle-of-dogs': {
    heroIntro: `The Isle of Dogs encompasses both Canary Wharf's corporate towers and residential communities occupying the rest of the peninsula. Water on three sides creates enclosed community feel. Mudchute Farm provides improbable rural character amid the development.`,
    
    subHeadline: `Reach Isle of Dogs residents`,
    
    paragraph1: `Corporate workers accessing Canary Wharf's core seek premium, convenient treatments. Residents elsewhere on the peninsula have different resources and expectations. The enclosed geography creates potential local loyalty.`,
    
    paragraph2: `We connect Isle of Dogs residents with providers serving both demographics - premium services for corporate workers, quality care for residential community across the peninsula.`,
    
    facts: [
      `Peninsula geography creates self-contained character unusual for London`,
      `Corporate worker presence drives premium treatment demand near Canary Wharf`,
      `Jubilee line and DLR provide multiple connection options beyond peninsula`
    ],
    
    glance: {
      population: '28,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Corporate workers, Young families, Docklands residents',
      mainAreas: 'Isle of Dogs, Millwall, Mudchute, Cubitt Town'
    }
  },

  'wapping': {
    heroIntro: `Wapping completed transition from working docklands to premium residential neighbourhood - converted warehouses and waterside living defining character. Historic pubs maintain atmosphere while residents enjoy distinctive housing unavailable in new-build developments.`,
    
    subHeadline: `Reach Wapping's affluent residents`,
    
    paragraph1: `The demographic is affluent and established. Warehouse conversions attract those appreciating design and character, often creative or professional fields. The population trends older than some East London areas - accumulated resources enabling expensive property purchase.`,
    
    paragraph2: `Quality and expertise are expected. We connect Wapping residents with practitioners matching sophisticated expectations - premium service, genuine expertise, results matching the standards they experience elsewhere.`,
    
    facts: [
      `Warehouse conversion demographic expects design-quality environments and service`,
      `Affluent population researches thoroughly - credentials and reviews matter`,
      `City and West End providers readily accessible - local must compete on quality`
    ],
    
    glance: {
      population: '15,000',
      borough: 'Tower Hamlets',
      keyDemographics: 'Affluent professionals, Design-conscious residents, Creative industry',
      mainAreas: 'Wapping, Wapping High Street, St Katharine Docks borders'
    }
  },

};

// Continue to Part 3...
// Add import at top
import { getLocationData } from '@/data/locationContent';

// In your component:
const locationData = getLocationData(location.slug);

// Then use in JSX:
{locationData && (
  <>
    {/* Hero section */}
    <p className="text-xl text-primary-100 mb-6">
      {locationData.heroIntro}
    </p>

    {/* Why section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-primary-600 text-sm font-semibold mb-2">
              WHY COSMETIC TREATMENTS MATTER IN {location.name.toUpperCase()}
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {locationData.subHeadline}
            </h2>
            <p className="text-gray-600 mb-4">{locationData.paragraph1}</p>
            <p className="text-gray-600 mb-6">{locationData.paragraph2}</p>
            <ul className="space-y-3">
              {locationData.facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-600">✓</span>
                  <span className="text-gray-600">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* At a Glance box */}
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <h3 className="text-lg font-semibold mb-6">{location.name} at a Glance</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-400">Population</span>
                <span className="font-semibold">{locationData.glance.population}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-400">Borough</span>
                <span className="font-semibold">{locationData.glance.borough}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-400">Key Demographics</span>
                <span className="font-semibold text-right">{locationData.glance.keyDemographics}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Main Areas</span>
                <span className="font-semibold text-right">{locationData.glance.mainAreas}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)}
