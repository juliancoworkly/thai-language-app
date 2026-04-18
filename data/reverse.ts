// Reverse mode: English phrases for Thai speakers.
// Thai-script phonetic approximation helps Thais pronounce the English.
export interface ReverseSentence {
  id: string;
  english: string;
  thaiPhonetic: string; // how a Thai would read it in Thai script
  meaning: string; // Thai translation
  category: string;
  emoji: string;
}

export const reverseSentences: ReverseSentence[] = [
  // Greetings
  {
    id: "r-g1",
    english: "Hello",
    thaiPhonetic: "เฮ-โล",
    meaning: "สวัสดี",
    category: "greetings",
    emoji: "👋",
  },
  {
    id: "r-g2",
    english: "Thank you",
    thaiPhonetic: "แท็งก์-คิว",
    meaning: "ขอบคุณ",
    category: "greetings",
    emoji: "🙏",
  },
  {
    id: "r-g3",
    english: "You're welcome",
    thaiPhonetic: "ยัวร์-เวล-คัม",
    meaning: "ไม่เป็นไร",
    category: "greetings",
    emoji: "😊",
  },
  {
    id: "r-g4",
    english: "Sorry",
    thaiPhonetic: "ซอ-รี่",
    meaning: "ขอโทษ",
    category: "greetings",
    emoji: "🙇",
  },
  {
    id: "r-g5",
    english: "How are you?",
    thaiPhonetic: "ฮาว-อาร์-ยู",
    meaning: "สบายดีไหม",
    category: "greetings",
    emoji: "🤗",
  },
  {
    id: "r-g6",
    english: "I'm fine, thank you",
    thaiPhonetic: "ไอม์-ไฟน์ แท็งก์-คิว",
    meaning: "สบายดี ขอบคุณ",
    category: "greetings",
    emoji: "😌",
  },

  // Tourist service (hotel, cafe, shop staff)
  {
    id: "r-s1",
    english: "Can I help you?",
    thaiPhonetic: "แคน-ไอ-เฮลพ์-ยู",
    meaning: "ให้ช่วยอะไรไหม",
    category: "service",
    emoji: "🛎️",
  },
  {
    id: "r-s2",
    english: "Please wait a moment",
    thaiPhonetic: "พลีส-เวท-อะ-โม-เมนต์",
    meaning: "กรุณารอสักครู่",
    category: "service",
    emoji: "⏳",
  },
  {
    id: "r-s3",
    english: "What would you like?",
    thaiPhonetic: "ว็อท-วูด-ยู-ไลค์",
    meaning: "คุณต้องการอะไร",
    category: "service",
    emoji: "📋",
  },
  {
    id: "r-s4",
    english: "Here you are",
    thaiPhonetic: "เฮียร์-ยู-อาร์",
    meaning: "นี่ครับ/ค่ะ",
    category: "service",
    emoji: "🤲",
  },
  {
    id: "r-s5",
    english: "The bill is 200 baht",
    thaiPhonetic: "เดอะ-บิล-อิส-ทู-ฮัน-เดรด-บาท",
    meaning: "บิลสองร้อยบาท",
    category: "service",
    emoji: "🧾",
  },
  {
    id: "r-s6",
    english: "Cash or card?",
    thaiPhonetic: "แคช-ออร์-คาร์ด",
    meaning: "เงินสดหรือบัตร",
    category: "service",
    emoji: "💳",
  },

  // Directions
  {
    id: "r-d1",
    english: "Where are you going?",
    thaiPhonetic: "แวร์-อาร์-ยู-โก-อิ้ง",
    meaning: "คุณจะไปไหน",
    category: "directions",
    emoji: "🧭",
  },
  {
    id: "r-d2",
    english: "Turn left",
    thaiPhonetic: "เทิร์น-เลฟท์",
    meaning: "เลี้ยวซ้าย",
    category: "directions",
    emoji: "⬅️",
  },
  {
    id: "r-d3",
    english: "Turn right",
    thaiPhonetic: "เทิร์น-ไรท์",
    meaning: "เลี้ยวขวา",
    category: "directions",
    emoji: "➡️",
  },
  {
    id: "r-d4",
    english: "Go straight",
    thaiPhonetic: "โก-สเตรท",
    meaning: "ตรงไป",
    category: "directions",
    emoji: "⬆️",
  },
  {
    id: "r-d5",
    english: "It's on the right",
    thaiPhonetic: "อิทส์-ออน-เดอะ-ไรท์",
    meaning: "อยู่ทางขวา",
    category: "directions",
    emoji: "👉",
  },

  // Small talk
  {
    id: "r-st1",
    english: "What's your name?",
    thaiPhonetic: "ว็อทส์-ยัวร์-เนม",
    meaning: "คุณชื่ออะไร",
    category: "smalltalk",
    emoji: "🪪",
  },
  {
    id: "r-st2",
    english: "My name is ...",
    thaiPhonetic: "มาย-เนม-อิส",
    meaning: "ฉันชื่อ...",
    category: "smalltalk",
    emoji: "🗣️",
  },
  {
    id: "r-st3",
    english: "Nice to meet you",
    thaiPhonetic: "ไนซ์-ทู-มีท-ยู",
    meaning: "ยินดีที่ได้รู้จัก",
    category: "smalltalk",
    emoji: "🤝",
  },
  {
    id: "r-st4",
    english: "I don't understand",
    thaiPhonetic: "ไอ-โดนท์-อัน-เดอ-สแตนด์",
    meaning: "ฉันไม่เข้าใจ",
    category: "smalltalk",
    emoji: "🤔",
  },
  {
    id: "r-st5",
    english: "Can you speak slowly?",
    thaiPhonetic: "แคน-ยู-สปีค-สโลว์-ลี่",
    meaning: "พูดช้า ๆ ได้ไหม",
    category: "smalltalk",
    emoji: "🐢",
  },
];

export const reverseCategories: { id: string; title: string; emoji: string }[] = [
  { id: "greetings", title: "Greetings", emoji: "👋" },
  { id: "service", title: "Service & Work", emoji: "🛎️" },
  { id: "directions", title: "Directions", emoji: "🧭" },
  { id: "smalltalk", title: "Small Talk", emoji: "💬" },
];
