// Additional sentences organised by level (1=newbie, 5=fluent).
// These are merged with data/sentences.ts at app load.
import type { Sentence } from "@/lib/types";

export const extraSentences: Sentence[] = [
  // ============== LEVEL 1 — newbie survival ==============
  { id: "x-l1-1", scenario: "greetings", level: 1, emoji: "👋", thai: "สวัสดี", phonetic: "sà-wàt-dii", meaning: "Hello / Goodbye", words: [{ wordId: "sawatdi" }] },
  { id: "x-l1-2", scenario: "greetings", level: 1, emoji: "✅", thai: "ใช่", phonetic: "châi", meaning: "Yes", words: [{ wordId: "chai" }] },
  { id: "x-l1-3", scenario: "greetings", level: 1, emoji: "❌", thai: "ไม่", phonetic: "mâi", meaning: "No / Not", words: [{ wordId: "mai-neg" }] },
  { id: "x-l1-4", scenario: "greetings", level: 1, emoji: "🙏", thai: "ขอบคุณ", phonetic: "khɔ̀ɔp-khun", meaning: "Thank you", words: [{ wordId: "khopkhun" }] },
  { id: "x-l1-5", scenario: "directions", level: 1, emoji: "👉", thai: "นี่", phonetic: "nîi", meaning: "Here / This", words: [{ wordId: "nii" }] },
  { id: "x-l1-6", scenario: "shopping", level: 1, emoji: "💰", thai: "เท่าไหร่", phonetic: "thâo-rài", meaning: "How much?", words: [{ wordId: "thaorai" }] },
  { id: "x-l1-7", scenario: "directions", level: 1, emoji: "🚽", thai: "ห้องน้ำ", phonetic: "hɔ̂ng-náam", meaning: "Bathroom", words: [{ wordId: "hongnaam" }] },
  { id: "x-l1-8", scenario: "food", level: 1, emoji: "💧", thai: "น้ำ", phonetic: "náam", meaning: "Water", words: [{ wordId: "naam" }] },

  // ============== LEVEL 2 — basics ==============
  { id: "x-l2-1", scenario: "greetings", level: 2, emoji: "🤗", thai: "สบายดีไหม", phonetic: "sà-baai dii mǎi", meaning: "How are you?", words: [{ wordId: "sabai" }, { wordId: "dii" }, { wordId: "mai-q" }] },
  { id: "x-l2-2", scenario: "smalltalk", level: 2, emoji: "🪪", thai: "คุณชื่ออะไร", phonetic: "khun chʉ̂ʉ à-rai", meaning: "What's your name?", words: [{ wordId: "khun" }, { wordId: "chue" }, { wordId: "arai" }] },
  { id: "x-l2-3", scenario: "smalltalk", level: 2, emoji: "🌍", thai: "คุณมาจากไหน", phonetic: "khun maa jàak nǎi", meaning: "Where are you from?", words: [{ wordId: "khun" }, { wordId: "maa" }, { wordId: "jaak" }, { wordId: "nai-q" }] },
  { id: "x-l2-4", scenario: "food", level: 2, emoji: "🌶️", thai: "ไม่เผ็ด", phonetic: "mâi phèt", meaning: "Not spicy", words: [{ wordId: "mai-neg" }, { wordId: "phet" }] },
  { id: "x-l2-5", scenario: "shopping", level: 2, emoji: "📉", thai: "ลดได้ไหม", phonetic: "lót dâai mǎi", meaning: "Can you discount?", words: [{ wordId: "lot" }, { wordId: "daai" }, { wordId: "mai-q" }] },
  { id: "x-l2-6", scenario: "taxi", level: 2, emoji: "🛑", thai: "จอดที่นี่", phonetic: "jɔ̀ɔt thîi-nîi", meaning: "Stop here", words: [{ wordId: "jawt" }, { wordId: "thii-nai" }] },
  { id: "x-l2-7", scenario: "smalltalk", level: 2, emoji: "🐢", thai: "พูดช้าๆ", phonetic: "phûut cháa-cháa", meaning: "Speak slowly", words: [{ wordId: "phuut" }, { wordId: "chaa-slow" }] },
  { id: "x-l2-8", scenario: "directions", level: 2, emoji: "📍", thai: "อยู่ที่นี่", phonetic: "yùu thîi-nîi", meaning: "It's here", words: [{ wordId: "yuu" }, { wordId: "thii-nai" }] },

  // ============== LEVEL 3 — everyday ==============
  { id: "x-l3-1", scenario: "food", level: 3, emoji: "🍜", thai: "เอาก๋วยเตี๋ยวต้มยำหมูสับ", phonetic: "ao gǔai-tǐao dtôm-yam mǔu sàp", meaning: "I'll have minced pork tom yum noodles", words: [{ wordId: "ao" }, { wordId: "tom-yam" }, { wordId: "muu" }] },
  { id: "x-l3-2", scenario: "food", level: 3, emoji: "🍳", thai: "ใส่ไข่ดาวด้วย", phonetic: "sài khài-daao dûai", meaning: "Add a fried egg too", words: [{ wordId: "sai" }, { wordId: "khai" }, { wordId: "duai" }] },
  { id: "x-l3-3", scenario: "smalltalk", level: 3, emoji: "💼", thai: "ผมทำงานออนไลน์", phonetic: "phǒm tham-ngaan ɔɔn-laai", meaning: "I work online (male)", words: [{ wordId: "phom" }, { wordId: "tham-ngan" }] },
  { id: "x-l3-4", scenario: "smalltalk", level: 3, emoji: "🎂", thai: "ผมอายุสามสิบปี", phonetic: "phǒm aa-yú sǎam-sìp bpii", meaning: "I'm 30 years old (male)", words: [{ wordId: "phom" }, { wordId: "saam" }, { wordId: "sip" }, { wordId: "pii" }] },
  { id: "x-l3-5", scenario: "smalltalk", level: 3, emoji: "🏠", thai: "ผมอยู่ที่กรุงเทพ", phonetic: "phǒm yùu thîi grung-thêep", meaning: "I live in Bangkok (male)", words: [{ wordId: "phom" }, { wordId: "yuu" }] },
  { id: "x-l3-6", scenario: "shopping", level: 3, emoji: "💳", thai: "รับบัตรเครดิตไหม", phonetic: "ráp bàt khreh-dìt mǎi", meaning: "Do you accept credit cards?", words: [{ wordId: "rap" }, { wordId: "mai-q" }] },
  { id: "x-l3-7", scenario: "taxi", level: 3, emoji: "🚦", thai: "รถติดมาก", phonetic: "rót dtìt mâak", meaning: "Traffic is heavy", words: [{ wordId: "rot" }, { wordId: "maak" }] },
  { id: "x-l3-8", scenario: "directions", level: 3, emoji: "🏪", thai: "เซเว่นอยู่ใกล้ๆ", phonetic: "seh-wên yùu glâi-glâi", meaning: "7-Eleven is nearby", words: [{ wordId: "yuu" }, { wordId: "glai-near" }] },

  // ============== LEVEL 4 — conversational ==============
  { id: "x-l4-1", scenario: "smalltalk", level: 4, emoji: "🇹🇭", thai: "ผมอยู่เมืองไทยมาหกเดือนแล้ว", phonetic: "phǒm yùu mʉang thai maa hòk dʉan lɛ́ɛo", meaning: "I've been in Thailand for 6 months (male)", words: [{ wordId: "phom" }, { wordId: "yuu" }, { wordId: "thai" }, { wordId: "maa" }, { wordId: "hok" }, { wordId: "duean" }, { wordId: "laew" }] },
  { id: "x-l4-2", scenario: "smalltalk", level: 4, emoji: "❤️", thai: "ผมชอบอาหารไทยมากที่สุด", phonetic: "phǒm chɔ̂ɔp aa-hǎan thai mâak thîi-sùt", meaning: "I love Thai food the most (male)", words: [{ wordId: "phom" }, { wordId: "chop" }, { wordId: "aahaan" }, { wordId: "thai" }, { wordId: "maak" }] },
  { id: "x-l4-3", scenario: "smalltalk", level: 4, emoji: "🗣️", thai: "ผมพูดไทยได้นิดหน่อย ขอโทษด้วย", phonetic: "phǒm phûut thai dâai nít-nɔ̀i, khɔ̌ɔ-thôot dûai", meaning: "I speak a little Thai, sorry", words: [{ wordId: "phom" }, { wordId: "phuut" }, { wordId: "thai" }, { wordId: "daai" }, { wordId: "nitnoi" }, { wordId: "khothot" }, { wordId: "duai" }] },
  { id: "x-l4-4", scenario: "food", level: 4, emoji: "🥬", thai: "ขอไม่ใส่ผักชีนะครับ", phonetic: "khɔ̌ɔ mâi sài phàk-chii ná khráp", meaning: "Please no coriander (male)", words: [{ wordId: "khaw" }, { wordId: "mai-neg" }, { wordId: "sai" }, { wordId: "phak" }, { wordId: "na" }, { wordId: "khrap" }] },
  { id: "x-l4-5", scenario: "smalltalk", level: 4, emoji: "📅", thai: "พรุ่งนี้ว่างไหม", phonetic: "phrûng-níi wâang mǎi", meaning: "Are you free tomorrow?", words: [{ wordId: "phrung-nii" }, { wordId: "mai-q" }] },
  { id: "x-l4-6", scenario: "smalltalk", level: 4, emoji: "📞", thai: "เดี๋ยวโทรหานะ", phonetic: "dǐao thoo hǎa ná", meaning: "I'll call you in a bit", words: [{ wordId: "haa" }, { wordId: "na" }] },

  // ============== LEVEL 5 — fluent ==============
  { id: "x-l5-1", scenario: "smalltalk", level: 5, emoji: "💭", thai: "ผมว่ามันแล้วแต่คุณเลย", phonetic: "phǒm wâa man lɛ́ɛo-tɛ̀ɛ khun ləəi", meaning: "I think it's totally up to you (male)", words: [{ wordId: "phom" }, { wordId: "man" }, { wordId: "laew" }, { wordId: "khun" }, { wordId: "loei" }] },
  { id: "x-l5-2", scenario: "smalltalk", level: 5, emoji: "🤝", thai: "ถ้าคุณไม่ว่าอะไรเดี๋ยวผมจัดการให้", phonetic: "thâa khun mâi wâa à-rai dǐao phǒm jàt-gaan hâi", meaning: "If you don't mind, I'll handle it (male)", words: [{ wordId: "khun" }, { wordId: "mai-neg" }, { wordId: "arai" }, { wordId: "phom" }, { wordId: "hai-give" }] },
  { id: "x-l5-3", scenario: "smalltalk", level: 5, emoji: "😅", thai: "เข้าใจแล้วแต่ยังพูดไม่คล่อง", phonetic: "khâo-jai lɛ́ɛo dtɛ̀ɛ yang phûut mâi khlɔ̂ng", meaning: "I understand but still can't speak fluently", words: [{ wordId: "khaojai" }, { wordId: "laew" }, { wordId: "phuut" }, { wordId: "mai-neg" }] },
  { id: "x-l5-4", scenario: "food", level: 5, emoji: "🌶️", thai: "เผ็ดน้อยน้อยพอประมาณนะ", phonetic: "phèt nɔ́i-nɔ́i phɔɔ bprà-maan ná", meaning: "Just slightly spicy please (a moderate amount)", words: [{ wordId: "phet" }, { wordId: "na" }] },
];
