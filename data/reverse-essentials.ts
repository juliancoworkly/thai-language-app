export interface ReverseEssential {
  id: string;
  title: string; // Thai title
  subtitle: string; // English title
  emoji: string;
  description: string; // Thai description
  descriptionEn: string;
  order: number;
}

export const reverseEssentials: ReverseEssential[] = [
  {
    id: "alphabet",
    title: "ตัวอักษร",
    subtitle: "The alphabet",
    emoji: "🔤",
    description: "ตัวอักษรภาษาอังกฤษทั้ง 26 ตัว พร้อมคำศัพท์ตัวอย่าง",
    descriptionEn: "All 26 English letters with example words.",
    order: 1,
  },
  {
    id: "numbers",
    title: "ตัวเลข",
    subtitle: "Numbers",
    emoji: "🔢",
    description: "1 ถึง 100 และตัวเลขสำคัญอื่นๆ",
    descriptionEn: "One to one hundred and beyond.",
    order: 2,
  },
  {
    id: "colors",
    title: "สี",
    subtitle: "Colors",
    emoji: "🎨",
    description: "สิบสองสีสำหรับใช้ทุกวัน",
    descriptionEn: "Twelve colors for everyday use.",
    order: 3,
  },
  {
    id: "animals",
    title: "สัตว์",
    subtitle: "Animals",
    emoji: "🦁",
    description: "สัตว์ในบ้าน ในฟาร์ม และในสวนสัตว์",
    descriptionEn: "Pets, farm, and zoo animals.",
    order: 4,
  },
  {
    id: "family",
    title: "ครอบครัว",
    subtitle: "Family",
    emoji: "👨‍👩‍👧",
    description: "พ่อ แม่ พี่ น้อง ปู่ ย่า ตา ยาย",
    descriptionEn: "Mum, dad, siblings, grandparents.",
    order: 5,
  },
  {
    id: "body",
    title: "ร่างกาย",
    subtitle: "Body parts",
    emoji: "👤",
    description: "ตั้งแต่หัวจรดเท้า",
    descriptionEn: "Head to toe.",
    order: 6,
  },
  {
    id: "days-months",
    title: "วันและเดือน",
    subtitle: "Days & months",
    emoji: "📅",
    description: "เจ็ดวันในสัปดาห์ สิบสองเดือนในปี",
    descriptionEn: "Seven days of the week, twelve months.",
    order: 7,
  },
  {
    id: "food",
    title: "อาหาร",
    subtitle: "Food & drink",
    emoji: "🍎",
    description: "ผลไม้ ผัก เนื้อ และเครื่องดื่ม",
    descriptionEn: "Fruits, vegetables, meats, drinks.",
    order: 8,
  },
  {
    id: "weather",
    title: "อากาศ",
    subtitle: "Weather",
    emoji: "☀️",
    description: "ร้อน หนาว ฝน แดด",
    descriptionEn: "Hot, cold, rainy, sunny.",
    order: 9,
  },
  {
    id: "greetings",
    title: "ทักทาย",
    subtitle: "Greetings & manners",
    emoji: "👋",
    description: "คำทักทายและคำสุภาพพื้นฐาน",
    descriptionEn: "Hello, please, thank you, sorry.",
    order: 10,
  },
  {
    id: "actions",
    title: "การกระทำ",
    subtitle: "Actions",
    emoji: "🏃",
    description: "กิน ดื่ม นอน เล่น วิ่ง",
    descriptionEn: "Eat, drink, sleep, play, run.",
    order: 11,
  },
];
