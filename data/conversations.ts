// Conversation pairs: a prompt in one language and the appropriate reply
// in the other. Used by the Conversation game (3 lives, pick the correct
// reply from 4 options).
export interface ConversationTurn {
  id: string;
  // Shown as the prompt
  thai: string;
  thaiPhonetic: string;
  // Shown as the correct response
  english: string;
  // Short category for distractor grouping variety
  category: string;
  emoji: string;
  // Optional short note explaining the exchange
  note?: string;
}

export const conversations: ConversationTurn[] = [
  // Greetings
  {
    id: "c-g1",
    thai: "สวัสดีครับ",
    thaiPhonetic: "sà-wàt-dii khráp",
    english: "Hello!",
    category: "greeting",
    emoji: "👋",
  },
  {
    id: "c-g2",
    thai: "สบายดีไหม",
    thaiPhonetic: "sà-baai dii mǎi",
    english: "I'm fine, thanks",
    category: "greeting",
    emoji: "🤗",
    note: "Question is 'How are you?' — standard reply is 'I'm fine'.",
  },
  {
    id: "c-g3",
    thai: "ขอบคุณครับ",
    thaiPhonetic: "khɔ̀ɔp-khun khráp",
    english: "You're welcome",
    category: "greeting",
    emoji: "🙏",
  },
  {
    id: "c-g4",
    thai: "ขอโทษครับ",
    thaiPhonetic: "khɔ̌ɔ-thôot khráp",
    english: "No worries",
    category: "greeting",
    emoji: "😌",
  },
  {
    id: "c-g5",
    thai: "คุณชื่ออะไร",
    thaiPhonetic: "khun chʉ̂ʉ à-rai",
    english: "My name is John",
    category: "smalltalk",
    emoji: "🪪",
  },
  {
    id: "c-g6",
    thai: "คุณมาจากไหน",
    thaiPhonetic: "khun maa jàak nǎi",
    english: "I'm from England",
    category: "smalltalk",
    emoji: "🌍",
  },

  // Food
  {
    id: "c-f1",
    thai: "เอาอะไรครับ",
    thaiPhonetic: "ao à-rai khráp",
    english: "I'll have pad thai, please",
    category: "food",
    emoji: "🍜",
  },
  {
    id: "c-f2",
    thai: "เผ็ดไหม",
    thaiPhonetic: "phèt mǎi",
    english: "Not spicy, please",
    category: "food",
    emoji: "🌶️",
  },
  {
    id: "c-f3",
    thai: "อร่อยไหม",
    thaiPhonetic: "à-rɔ̀i mǎi",
    english: "Very delicious!",
    category: "food",
    emoji: "🤤",
  },
  {
    id: "c-f4",
    thai: "รับอะไรดื่มไหม",
    thaiPhonetic: "ráp à-rai dɯ̀ɯm mǎi",
    english: "Water, please",
    category: "food",
    emoji: "💧",
  },
  {
    id: "c-f5",
    thai: "เก็บเงินด้วย",
    thaiPhonetic: "kèp ngəən dûai",
    english: "Check, please",
    category: "food",
    emoji: "🧾",
  },

  // Shopping
  {
    id: "c-sh1",
    thai: "เท่าไหร่ครับ",
    thaiPhonetic: "thâo-rài khráp",
    english: "Fifty baht",
    category: "shopping",
    emoji: "💰",
  },
  {
    id: "c-sh2",
    thai: "ลดได้ไหม",
    thaiPhonetic: "lót dâai mǎi",
    english: "Sorry, fixed price",
    category: "shopping",
    emoji: "📉",
  },
  {
    id: "c-sh3",
    thai: "เอาถุงไหม",
    thaiPhonetic: "ao thǔng mǎi",
    english: "No bag, thank you",
    category: "shopping",
    emoji: "🛍️",
  },
  {
    id: "c-sh4",
    thai: "มีอันนี้ไหม",
    thaiPhonetic: "mii an-níi mǎi",
    english: "Yes, we have it",
    category: "shopping",
    emoji: "🔎",
  },

  // Taxi
  {
    id: "c-t1",
    thai: "ไปไหนครับ",
    thaiPhonetic: "bpai nǎi khráp",
    english: "To the airport, please",
    category: "taxi",
    emoji: "🚕",
  },
  {
    id: "c-t2",
    thai: "เปิดมิเตอร์ด้วย",
    thaiPhonetic: "bpə̀ət mí-dtə̂ə dûai",
    english: "Okay, meter on",
    category: "taxi",
    emoji: "🧾",
  },
  {
    id: "c-t3",
    thai: "จอดตรงนี้",
    thaiPhonetic: "jɔ̀ɔt dtrong níi",
    english: "Stop right here",
    category: "taxi",
    emoji: "🛑",
  },

  // Directions
  {
    id: "c-d1",
    thai: "ห้องน้ำอยู่ที่ไหน",
    thaiPhonetic: "hɔ̂ng-náam yùu thîi-nǎi",
    english: "It's over there",
    category: "directions",
    emoji: "🚽",
  },
  {
    id: "c-d2",
    thai: "ใกล้ไหม",
    thaiPhonetic: "glâi mǎi",
    english: "Yes, very near",
    category: "directions",
    emoji: "📍",
  },

  // Small talk
  {
    id: "c-st1",
    thai: "พูดไทยได้ไหม",
    thaiPhonetic: "phûut thai dâai mǎi",
    english: "A little bit",
    category: "smalltalk",
    emoji: "🗣️",
  },
  {
    id: "c-st2",
    thai: "เข้าใจไหม",
    thaiPhonetic: "khâo-jai mǎi",
    english: "I don't understand",
    category: "smalltalk",
    emoji: "🤔",
  },
  {
    id: "c-st3",
    thai: "พูดช้าๆหน่อย",
    thaiPhonetic: "phûut cháa-cháa nɔ̀i",
    english: "Okay, I will",
    category: "smalltalk",
    emoji: "🐢",
  },
  {
    id: "c-st4",
    thai: "วันนี้ทำอะไร",
    thaiPhonetic: "wan-níi tham à-rai",
    english: "I'm going to the market",
    category: "smalltalk",
    emoji: "📅",
  },

  // Emergency
  {
    id: "c-e1",
    thai: "ช่วยด้วย",
    thaiPhonetic: "chûai dûai",
    english: "What happened?",
    category: "emergency",
    emoji: "🆘",
  },
  {
    id: "c-e2",
    thai: "ผมหลงทาง",
    thaiPhonetic: "phǒm lǒng-thaang",
    english: "Where are you going?",
    category: "emergency",
    emoji: "😵‍💫",
  },
];
