export const defaultCategories = [
  // 💰 Income Categories
  {
    id: "salary",
    name: "Salary",
    type: "INCOME",
    color: "linear-gradient(135deg, #22c55e, #4ade80)", // green → mint
    icon: "Wallet",
  },
  {
    id: "freelance",
    name: "Freelance",
    type: "INCOME",
    color: "linear-gradient(135deg, #06b6d4, #67e8f9)", // cyan → sky
    icon: "Laptop",
  },
  {
    id: "investments",
    name: "Investments",
    type: "INCOME",
    color: "linear-gradient(135deg, #6366f1, #818cf8)", // indigo → violet
    icon: "TrendingUp",
  },
  {
    id: "business",
    name: "Business",
    type: "INCOME",
    color: "linear-gradient(135deg, #ec4899, #f472b6)", // pink → rose
    icon: "Building",
  },
  {
    id: "rental",
    name: "Rental",
    type: "INCOME",
    color: "linear-gradient(135deg, #f59e0b, #fde047)", // amber → yellow
    icon: "Home",
  },
  {
    id: "other-income",
    name: "Other Income",
    type: "INCOME",
    color: "linear-gradient(135deg, #64748b, #94a3b8)", // slate → soft gray
    icon: "Plus",
  },

  // 💸 Expense Categories
  {
    id: "housing",
    name: "Housing",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #ef4444, #f87171)", // red → coral
    icon: "Home",
    subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
  },
  {
    id: "transportation",
    name: "Transportation",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #f97316, #fdba74)", // orange → peach
    icon: "Car",
    subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
  },
  {
    id: "groceries",
    name: "Groceries",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #84cc16, #bef264)", // lime → light green
    icon: "Shopping",
  },
  {
    id: "utilities",
    name: "Utilities",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #06b6d4, #22d3ee)", // cyan → aqua
    icon: "Zap",
    subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #8b5cf6, #a78bfa)", // violet → lavender
    icon: "Film",
    subcategories: ["Movies", "Games", "Streaming Services"],
  },
  {
    id: "food",
    name: "Food",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #f43f5e, #fb7185)", // rose → soft red
    icon: "UtensilsCrossed",
  },
  {
    id: "shopping",
    name: "Shopping",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #ec4899, #f9a8d4)", // pink → pastel pink
    icon: "ShoppingBag",
    subcategories: ["Clothing", "Electronics", "Home Goods"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #14b8a6, #5eead4)", // teal → mint
    icon: "HeartPulse",
    subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
  },
  {
    id: "education",
    name: "Education",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #6366f1, #93c5fd)", // indigo → blue
    icon: "GraduationCap",
    subcategories: ["Tuition", "Books", "Courses"],
  },
  {
    id: "personal",
    name: "Personal Care",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #d946ef, #f0abfc)", // fuchsia → lilac
    icon: "Smile",
    subcategories: ["Haircut", "Gym", "Beauty"],
  },
  {
    id: "travel",
    name: "Travel",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #0ea5e9, #7dd3fc)", // sky → light blue
    icon: "Plane",
  },
  {
    id: "insurance",
    name: "Insurance",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #64748b, #cbd5e1)", // slate → silver
    icon: "Shield",
    subcategories: ["Life", "Home", "Vehicle"],
  },
  {
    id: "gifts",
    name: "Gifts & Donations",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #f472b6, #fbcfe8)", // pink → blush
    icon: "Gift",
  },
  {
    id: "bills",
    name: "Bills & Fees",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #fb7185, #fecdd3)", // rose → soft pink
    icon: "Receipt",
    subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
  },
  {
    id: "other-expense",
    name: "Other Expenses",
    type: "EXPENSE",
    color: "linear-gradient(135deg, #3e4857ff, #e2e8f0)", // gray → light gray
    icon: "MoreHorizontal",
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});