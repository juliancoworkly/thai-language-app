import type { Level } from "@/lib/types";

export interface Essential {
  id: string;
  title: string;
  titleThai?: string;
  emoji: string;
  description: string;
  level: Level;
  order: number;
}

export const essentials: Essential[] = [
  {
    id: "numbers",
    title: "Numbers",
    titleThai: "ตัวเลข",
    emoji: "🔢",
    description: "Counting, prices, phone numbers. 0 to 1,000.",
    level: 1,
    order: 1,
  },
  {
    id: "days-months",
    title: "Days & Months",
    titleThai: "วันและเดือน",
    emoji: "📅",
    description: "Seven days of the week and twelve months. Essential for plans and bookings.",
    level: 1,
    order: 2,
  },
  {
    id: "time",
    title: "Time & Clock",
    titleThai: "เวลาและนาฬิกา",
    emoji: "🕐",
    description: "Thailand's six-period clock. Morning, afternoon, evening, night.",
    level: 2,
    order: 3,
  },
  {
    id: "colors",
    title: "Colors",
    titleThai: "สี",
    emoji: "🎨",
    description: "Ten colors for clothes, food, objects. Plus the word for \"colored\".",
    level: 1,
    order: 4,
  },
  {
    id: "family",
    title: "Family",
    titleThai: "ครอบครัว",
    emoji: "👨‍👩‍👧",
    description: "Parents, siblings, grandparents, aunts and uncles. Thai family terms tell age and side.",
    level: 2,
    order: 5,
  },
  {
    id: "classifiers",
    title: "Classifiers",
    titleThai: "ลักษณนาม",
    emoji: "📐",
    description: "The little grammar trick behind every Thai count. Fifteen you'll actually need.",
    level: 2,
    order: 6,
  },
  {
    id: "tones",
    title: "The 5 Tones",
    titleThai: "วรรณยุกต์",
    emoji: "🎵",
    description: "Low, mid, high, falling, rising. Why Thais don't understand you (yet).",
    level: 1,
    order: 7,
  },
];
