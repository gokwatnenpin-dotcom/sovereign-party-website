export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "mission", label: "Our Mission" },
  { id: "policies", label: "Policies" },
  { id: "leadership", label: "Leadership" },
  { id: "news", label: "News" },
  { id: "events", label: "Events" },
  { id: "join", label: "Join Us" },
];

export const TICKER_ITEMS = [
  "National Rally — Lagos, Oct 12",
  "New Economic Blueprint Released",
  "Free Town Hall — Register Now",
  "Volunteer Drive Across 18 States",
  "Youth Empowerment Fund Launched",
];

export const HERO_STATS = [
  { value: "2.4M+", label: "Registered Supporters" },
  { value: "18", label: "States Represented" },
  { value: "47", label: "Sitting Members of Parliament" },
  { value: "2026", label: "Election Cycle" },
];

export const VALUES = [
  {
    title: "Accountability",
    text: "Every naira of public funds tracked and reported. Open budgets, open contracts, open books — no exceptions, no hiding places.",
  },
  {
    title: "Inclusion",
    text: "Policies built with, not for, marginalized communities. From ward consultations to the national assembly, every voice counts.",
  },
  {
    title: "Sovereignty",
    text: "Economic independence from foreign debt dependency. Our resources, our industries, our future — owned and directed by our people.",
  },
];

export const POLICIES = [
  {
    icon: "💼",
    title: "Economic Reform",
    text: "Cut business registration to 48 hours. Grow the SME sector by 40% by 2028 through tax relief and access to credit.",
  },
  {
    icon: "🏗",
    title: "Infrastructure",
    text: "12,000km of paved roads connecting every region. Power to every ward by 2027 through grid and off-grid investment.",
  },
  {
    icon: "🎓",
    title: "Education First",
    text: "Free secondary education for every child. 500 new technical colleges funded to train the builders of tomorrow.",
  },
  {
    icon: "🏥",
    title: "Universal Healthcare",
    text: "One primary health center per ward. A zero maternal mortality initiative with trained birth attendants nationwide.",
  },
  {
    icon: "⚖️",
    title: "Justice Reform",
    text: "End cash bail. Independent judiciary funding. A police accountability board with real powers and citizen oversight.",
  },
  {
    icon: "🌱",
    title: "Green Sovereignty",
    text: "Renewable energy for 60% of the national grid. Zero open burning by 2030 and green jobs for 500,000 youths.",
  },
];

export const LEADERS = [
  {
    name: "Fatima Eze",
    role: "Vice-Presidential Candidate",
    desc: "Former central banker and architect of the SME credit guarantee scheme. Leads our economic sovereignty agenda.",
    handle: "@FatimaEze_SP",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop",
  },
  {
    name: "Dr. Chukwuemeka Bello",
    role: "Policy Director",
    desc: "Constitutional scholar with 20 years in public reform. Author of the 6-Point Plan for National Renewal.",
    handle: "@DrBello_SP",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop",
  },
  {
    name: "Ngozi Okonkwo",
    role: "Youth Affairs Secretary",
    desc: "Founded the 80,000-strong Youth Corps. Champion of the Youth Empowerment Fund and technical college rollout.",
    handle: "@NgoziO_SP",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&fit=crop",
  },
];

export const NEWS = [
  {
    category: "ECONOMY",
    title: "Sovereign Party Unveils ₦200B Infrastructure Bond Proposal",
    date: "Sept 28, 2026",
    author: "Adaeze Nwosu",
    excerpt:
      "The bond will finance 3,000km of rural roads and 40 mini-grids — repaid from project revenues, not new taxes.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80&fit=crop",
  },
  {
    category: "HEALTH",
    title: "Free Healthcare Pilot Launches in 3 Northern States",
    date: "Sept 19, 2026",
    author: "Ibrahim Musa",
    excerpt:
      "Twelve ward health centers open their doors with free maternal care, immunization, and essential drugs in stock.",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80&fit=crop",
  },
  {
    category: "YOUTH",
    title: "Youth Corps Reaches 80,000 Volunteers Nationwide",
    date: "Sept 08, 2026",
    author: "Tunde Alabi",
    excerpt:
      "From voter registration drives to community clean-ups, the Corps is now the largest civic network in the country.",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&q=80&fit=crop",
  },
];

export const EVENTS = [
  {
    day: "12",
    month: "OCT",
    title: "National Youth Rally",
    location: "Lagos — Freedom Square",
    time: "10:00 AM",
    mode: "In Person",
  },
  {
    day: "18",
    month: "OCT",
    title: "Economic Policy Debate",
    location: "Abuja — Hilton Congress Hall",
    time: "6:00 PM",
    mode: "In Person",
  },
  {
    day: "24",
    month: "OCT",
    title: "Free Town Hall",
    location: "Kano — Central Hall",
    time: "2:00 PM",
    mode: "Online",
  },
  {
    day: "01",
    month: "NOV",
    title: "Party Convention",
    location: "Lagos — Eko Convention Centre",
    time: "9:00 AM",
    mode: "In Person",
  },
];

export const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "FCT — Abuja", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

export const DONATION_AMOUNTS = [1000, 5000, 25000];

export function formatNaira(n) {
  return "₦" + n.toLocaleString("en-NG");
}
