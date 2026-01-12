// reviews.js - Customer testimonials

export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Clapham',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'Found an amazing clinic through this site. The whole process was so easy - filled in the form and had three quotes within 24 hours. My teeth are now 6 shades whiter!',
    date: '2024-11-15'
  },
  {
    id: 2,
    name: 'James T.',
    location: 'Canary Wharf',
    treatment: 'Invisalign',
    rating: 5,
    text: 'Being able to compare Invisalign providers saved me over £1,000. The clinic I chose was professional, affordable, and my teeth are perfectly straight now.',
    date: '2024-11-10'
  },
  {
    id: 3,
    name: 'Priya K.',
    location: 'Wembley',
    treatment: 'Botox',
    rating: 5,
    text: 'I was nervous about getting Botox but the provider I found through this service made me feel completely at ease. Natural results and half the price of other quotes.',
    date: '2024-11-08'
  },
  {
    id: 4,
    name: 'Michael R.',
    location: 'Brixton',
    treatment: 'Veneers',
    rating: 5,
    text: 'Always wanted a Hollywood smile but thought it was out of reach. Compared quotes from five clinics and found one with finance options. Best decision ever!',
    date: '2024-10-28'
  },
  {
    id: 5,
    name: 'Emma L.',
    location: 'Putney',
    treatment: 'Lip Fillers',
    rating: 5,
    text: 'Used this site to find a reputable lip filler provider after a bad experience elsewhere. The practitioner was highly qualified and my lips look amazing - subtle but fuller.',
    date: '2024-10-25'
  },
  {
    id: 6,
    name: 'David H.',
    location: 'Stratford',
    treatment: 'Dental Crowns',
    rating: 5,
    text: 'Needed crowns on two teeth and the quotes I received varied massively. This site helped me find a great dentist who did excellent work at a fair price.',
    date: '2024-10-20'
  },
  {
    id: 7,
    name: 'Sophie W.',
    location: 'Bromley',
    treatment: 'Smile Makeover',
    rating: 5,
    text: 'My complete smile makeover journey started here. The clinic I chose offered a full consultation, digital preview, and flexible payments. Life-changing results!',
    date: '2024-10-15'
  },
  {
    id: 8,
    name: 'Amir N.',
    location: 'Finchley',
    treatment: 'Dermal Fillers',
    rating: 5,
    text: 'Wanted to reduce my nasolabial folds and wasn\'t sure where to start. Got connected with an excellent aesthetic practitioner who delivered exactly what I wanted.',
    date: '2024-10-12'
  },
  {
    id: 9,
    name: 'Rebecca T.',
    location: 'Lewisham',
    treatment: 'Dental Bonding',
    rating: 5,
    text: 'Had a chipped front tooth that was really affecting my confidence. Found a dentist who fixed it in one visit with bonding - looks completely natural!',
    date: '2024-10-08'
  },
  {
    id: 10,
    name: 'Chris P.',
    location: 'Uxbridge',
    treatment: 'Teeth Whitening',
    rating: 5,
    text: 'Quick and easy to get quotes. The clinic was convenient for me and did an incredible job. Would definitely recommend using this comparison service.',
    date: '2024-10-05'
  },
  {
    id: 11,
    name: 'Nina S.',
    location: 'Battersea',
    treatment: 'Botox',
    rating: 5,
    text: 'As a first-timer, I really appreciated being able to compare practitioners. Found someone highly experienced who took time to explain everything.',
    date: '2024-10-01'
  },
  {
    id: 12,
    name: 'Tom B.',
    location: 'Croydon',
    treatment: 'Invisalign',
    rating: 5,
    text: 'The comparison saved me hours of research. All the providers who contacted me were legitimate and professional. Now 6 months into treatment with great results!',
    date: '2024-09-28'
  }
];

export function getAllReviews() {
  return reviews;
}

export function getReviewsByTreatment(treatment) {
  return reviews.filter(review => review.treatment === treatment);
}

export function getReviewsByLocation(location) {
  return reviews.filter(review => review.location.toLowerCase().includes(location.toLowerCase()));
}

export function getFeaturedReviews(count = 6) {
  return reviews.slice(0, count);
}

export function getAverageRating() {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return (total / reviews.length).toFixed(1);
}

export default reviews;
