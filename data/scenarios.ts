import type { Scenario } from "@/lib/types";

export const scenarios: Scenario[] = [
  {
    id: "greetings",
    title: "Greetings & Politeness",
    emoji: "🙏",
    description: "Hello, thanks, yes/no — the daily essentials.",
    order: 1,
  },
  {
    id: "food",
    title: "Ordering Food",
    emoji: "🍜",
    description: "Street food, restaurants, spicy or not, check please.",
    order: 2,
  },
  {
    id: "shopping",
    title: "Shops & 7-Eleven",
    emoji: "🛒",
    description: "How much, discount, bag or no bag, do you have?",
    order: 3,
  },
  {
    id: "taxi",
    title: "Taxi & Grab",
    emoji: "🚕",
    description: "Meter on, straight, turn left, stop here.",
    order: 4,
  },
  {
    id: "numbers",
    title: "Numbers & Money",
    emoji: "💰",
    description: "Count, prices, baht — the backbone of every transaction.",
    order: 5,
  },
  {
    id: "directions",
    title: "Directions",
    emoji: "🧭",
    description: "Where is, near, far, right there.",
    order: 6,
  },
  {
    id: "smalltalk",
    title: "Small Talk",
    emoji: "💬",
    description: "Your name, where you're from, how long in Thailand.",
    order: 7,
  },
  {
    id: "emergency",
    title: "Help & Emergency",
    emoji: "🚑",
    description: "Doctor, hospital, lost, help me.",
    order: 8,
  },
];
