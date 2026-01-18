export const COMPANY = {
  name: 'Kutsch Roofing',
  tagline: "Nebraska's Premier Roofing Experts",
  phone: '(402) 764-6666',
  phoneHref: 'tel:+14027646666',
  email: 'info@kutschroofing.com',
  address: {
    street: '123 E 4th St Suite #3',
    city: 'Stromsburg',
    state: 'NE',
    zip: '68666',
    full: '123 E 4th St Suite #3, Stromsburg, NE 68666',
  },
  social: {
    google: 'https://www.google.com/maps/place/Kutsch+Roofing',
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
    slug: 'roof-repair',
    title: 'Roof Repair',
    shortDescription: 'Quick fixes for leaks, storm damage, and aging shingles.',
    description: 'Our expert team quickly diagnoses and repairs roof damage, from minor leaks to major storm damage. We use quality materials and proven techniques to extend your roof\'s lifespan and protect your home.',
    icon: 'Wrench',
    features: [
      'Leak detection & sealing',
      'Storm damage restoration',
      'Shingle replacement',
      'Flashing repairs',
      'Emergency tarping',
    ],
    benefits: [
      'Prevent costly water damage',
      'Extend your roof\'s lifespan',
      'Maintain home value',
      'Fast turnaround times',
    ],
  },
  {
    slug: 'roof-installation',
    title: 'Roof Installation',
    shortDescription: 'Expert installation for new construction and additions.',
    description: 'Building a new home or adding on? Our skilled installers ensure your new roof is built right from the start. We work with architects and builders to deliver roofing systems that perform for decades.',
    icon: 'Home',
    features: [
      'New construction roofing',
      'Addition coverage',
      'Code-compliant installation',
      'Material selection guidance',
      'Warranty documentation',
    ],
    benefits: [
      'Built to last from day one',
      'Energy-efficient options',
      'Seamless contractor coordination',
      'Manufacturer warranties included',
    ],
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    shortDescription: 'Complete tear-off and replacement with premium materials.',
    description: 'When repairs aren\'t enough, we provide complete roof replacement services. Our team handles everything from tear-off to final inspection, leaving you with a beautiful, durable new roof.',
    icon: 'Layers',
    featured: true,
    features: [
      'Full tear-off & disposal',
      'Premium underlayment',
      'Ventilation optimization',
      'Ice & water shield',
      'Manufacturer warranty',
    ],
    benefits: [
      'Restore structural integrity',
      'Boost curb appeal',
      'Increase home value',
      'Modern energy efficiency',
    ],
  },
  {
    slug: 'siding-installation',
    title: 'Siding Installation',
    shortDescription: 'Weather-resistant siding that boosts curb appeal.',
    description: 'Protect and beautify your home with professional siding installation. We offer a variety of materials and colors to match your style while providing superior weather protection.',
    icon: 'Square',
    features: [
      'Vinyl & fiber cement options',
      'Weather barrier systems',
      'Custom color matching',
      'Trim & accent work',
      'Old siding removal',
    ],
    benefits: [
      'Enhanced curb appeal',
      'Better energy efficiency',
      'Low maintenance',
      'Weather protection',
    ],
  },
  {
    slug: 'gutter-installation',
    title: 'Gutter Installation',
    shortDescription: 'Seamless gutters engineered to protect your foundation.',
    description: 'Proper water management protects your foundation and landscaping. Our seamless gutter systems are custom-fit to your home for maximum performance and minimal maintenance.',
    icon: 'Droplets',
    features: [
      'Seamless aluminum gutters',
      'Downspout optimization',
      'Gutter guard options',
      'Custom sizing',
      'Color matching',
    ],
    benefits: [
      'Protect your foundation',
      'Prevent erosion',
      'Reduce maintenance',
      'Prevent ice dams',
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
    quote: 'Absolutely the BEST. Meticulous in every detail. Professional process and our roof looks great too.',
    author: 'Larry Jacobsen',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Ron and his crew are top notch, did a great job of communicating, cleaning up, and follow up. Highly recommend!',
    author: 'Pat Powell',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Kutsch did an amazing job. So easy to work with, showed up when he said he would and left everything nice and clean.',
    author: 'Morgan Peterson',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Quick. Quality. Organized. Trustworthy. Just how you want it. Very professional process and our roof looks great.',
    author: 'Kerry Relihan',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote: 'Wow.. these guys are Amazing.. great work and they get the job done quickly!! Ron is Awesome to work with!!!!',
    author: 'Stephanie Stevens',
    source: 'Google Review',
    rating: 5,
  },
] as const;

export const FAQ = [
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 1–3 days depending on the size of your home, roof complexity, and weather conditions. We\'ll give you an accurate timeline during your free consultation.',
  },
  {
    question: 'Are your estimates free?',
    answer: 'Yes! All our estimates are 100% free with no obligation. We\'ll visit your property, assess your roof, and provide a detailed quote — no pressure, no hidden fees.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer: 'Absolutely. We document all storm damage with photos and detailed reports, and we\'ll work directly with your insurance company to make the claims process as smooth as possible.',
  },
  {
    question: 'What roofing materials do you offer?',
    answer: 'We work with premium asphalt shingles, metal roofing, and other high-performance materials suited for Nebraska\'s climate. We\'ll help you choose the best option for your home and budget.',
  },
  {
    question: 'Do you offer warranties?',
    answer: 'Yes! We provide labor warranties on all our work and honor all manufacturer warranties on materials. Your investment is protected for years to come.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your property, assess your roof\'s condition, and provide a detailed, no-obligation quote.',
  },
  {
    number: '02',
    title: 'Professional Execution',
    description: 'Our skilled crew arrives on time, uses premium materials, and keeps your property clean every day.',
  },
  {
    number: '03',
    title: 'Final Walkthrough',
    description: 'We inspect every detail with you, answer questions, and share tips to extend your roof\'s lifespan.',
  },
] as const;
