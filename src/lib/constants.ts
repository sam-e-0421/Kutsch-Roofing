export const COMPANY = {
  name: 'Kutsch Painting',
  tagline: "Nebraska's Premier Painting Professionals",
  phone: '(402) 764-7777',
  phoneHref: 'tel:+14027647777',
  email: 'info@kutschpainting.com',
  address: {
    street: '123 E 4th St Suite #5',
    city: 'Stromsburg',
    state: 'NE',
    zip: '68666',
    full: '123 E 4th St Suite #5, Stromsburg, NE 68666',
  },
  social: {
    google: 'https://www.google.com/maps/place/Kutsch+Painting',
    facebook: '#',
    instagram: '#',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting',
    shortDescription: 'Transform your living spaces with expert color and finish.',
    description: 'Our interior painting services bring your vision to life with precision and care. From accent walls to whole-home transformations, we deliver flawless results that elevate your space.',
    icon: 'Home',
    featured: true,
    features: [
      'Wall & ceiling painting',
      'Trim & baseboard finishing',
      'Color consultation included',
      'Furniture protection & prep',
      'Clean, dust-free process',
    ],
    benefits: [
      'Refresh your living spaces',
      'Increase home value',
      'Expert color matching',
      'Minimal disruption',
    ],
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    shortDescription: 'Boost curb appeal with durable, weather-resistant finishes.',
    description: 'Protect and beautify your home\'s exterior with professional painting that stands up to Nebraska weather. We use premium paints and proper preparation for results that last.',
    icon: 'Paintbrush',
    features: [
      'Siding & trim painting',
      'Power washing & prep',
      'Caulking & repairs',
      'Weather-resistant finishes',
      'Multi-year durability',
    ],
    benefits: [
      'Enhanced curb appeal',
      'Protection from elements',
      'Increased property value',
      'Long-lasting results',
    ],
  },
  {
    slug: 'cabinet-refinishing',
    title: 'Cabinet Refinishing',
    shortDescription: 'Give your kitchen a fresh look without full renovation.',
    description: 'Transform outdated cabinets into stunning focal points. Our refinishing process delivers a factory-smooth finish at a fraction of replacement cost.',
    icon: 'Square',
    features: [
      'Kitchen cabinet painting',
      'Bathroom vanity refinishing',
      'Professional spray application',
      'Hardware removal & reinstall',
      'Smooth, durable finish',
    ],
    benefits: [
      'Save vs. replacement',
      'Custom color options',
      'Factory-quality finish',
      'Quick turnaround',
    ],
  },
  {
    slug: 'deck-staining',
    title: 'Deck & Fence Staining',
    shortDescription: 'Preserve and protect your outdoor wood surfaces.',
    description: 'Extend the life and beauty of your deck, fence, and outdoor structures with professional staining and sealing services designed for Nebraska\'s climate.',
    icon: 'Fence',
    features: [
      'Deck staining & sealing',
      'Fence treatment',
      'Power washing prep',
      'UV protection finishes',
      'Pergola & arbor staining',
    ],
    benefits: [
      'Prevent wood rot',
      'UV & weather protection',
      'Restore natural beauty',
      'Extended lifespan',
    ],
  },
  {
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    shortDescription: 'Professional painting for businesses and commercial spaces.',
    description: 'Minimize downtime while maximizing impact. Our commercial painting services are designed for businesses that need quality results on schedule.',
    icon: 'Building',
    features: [
      'Office & retail spaces',
      'Warehouse & industrial',
      'After-hours scheduling',
      'Minimal business disruption',
      'Safety-compliant practices',
    ],
    benefits: [
      'Professional appearance',
      'Flexible scheduling',
      'Fast project completion',
      'Competitive pricing',
    ],
  },
] as const;

export const SERVICE_AREAS = [
  { name: 'Douglas County', state: 'NE' },
  { name: 'Lancaster County', state: 'NE' },
  { name: 'Platte County', state: 'NE' },
  { name: 'Hall County', state: 'NE' },
  { name: 'Buffalo County', state: 'NE' },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'The attention to detail was incredible. Every edge was crisp, and the color matching was perfect. Our home looks brand new!',
    author: 'Sarah Mitchell',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Professional from start to finish. They protected all our furniture, finished on time, and left everything spotless.',
    author: 'James Crawford',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Kutsch Painting transformed our outdated kitchen cabinets. We saved thousands compared to replacing them. Highly recommend!',
    author: 'Linda Hoffman',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'They painted our entire exterior in just two days. The quality is outstanding and the crew was respectful of our property.',
    author: 'Mike Anderson',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Best painting company we\'ve ever worked with. Fair pricing, excellent communication, and beautiful results.',
    author: 'Rachel Peterson',
    source: 'Google Review',
    rating: 5,
  },
] as const;

export const FAQ = [
  {
    question: 'How long does an interior painting project take?',
    answer: 'Most interior projects take 1–3 days depending on the scope. A single room can often be completed in a day, while whole-home projects may take a week. We\'ll provide an accurate timeline during your free consultation.',
  },
  {
    question: 'Do you provide color consultations?',
    answer: 'Yes! We offer complimentary color consultations with every project. Our team can help you choose colors that complement your space, lighting, and personal style.',
  },
  {
    question: 'What type of paint do you use?',
    answer: 'We use premium paints from trusted brands like Sherwin-Williams and Benjamin Moore. We\'ll recommend the best products for your specific project — from low-VOC interior paints to weather-resistant exterior coatings.',
  },
  {
    question: 'Do I need to move my furniture?',
    answer: 'No! We handle all furniture moving and protection. We carefully cover and move everything, then return it to its place when we\'re done. You don\'t need to lift a finger.',
  },
  {
    question: 'Are your estimates free?',
    answer: 'Absolutely! All our estimates are 100% free with no obligation. We\'ll assess your project, discuss your goals, and provide a detailed quote — no pressure, no hidden fees.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your property, discuss your vision, help with color selection, and provide a detailed, no-obligation quote.',
  },
  {
    number: '02',
    title: 'Expert Preparation',
    description: 'We protect your belongings, repair surfaces, prime as needed, and ensure everything is ready for a flawless finish.',
  },
  {
    number: '03',
    title: 'Beautiful Results',
    description: 'Our skilled painters apply premium finishes with precision. We clean up completely and walk through the results with you.',
  },
] as const;
