import type { Sentence } from "@/lib/types";

// Round 2 of expansions — 60+ more sentences across new scenarios and
// fleshing out L3-L5 in existing ones.
export const extraSentences2: Sentence[] = [
  // ============== HOTEL ==============
  { id: "h1", scenario: "hotel", level: 2, emoji: "🛎️", thai: "เช็คอินครับ", phonetic: "chék-in khráp", meaning: "Check in please (male)", words: [{ wordId: "khrap" }] },
  { id: "h2", scenario: "hotel", level: 2, emoji: "🔑", thai: "ขอกุญแจห้อง", phonetic: "khɔ̌ɔ gun-jɛɛ hɔ̂ng", meaning: "Room key please", words: [{ wordId: "khaw" }] },
  { id: "h3", scenario: "hotel", level: 3, emoji: "📶", thai: "รหัสไวไฟอะไร", phonetic: "rá-hàt wai-fai à-rai", meaning: "What's the wifi password?", words: [{ wordId: "arai" }] },
  { id: "h4", scenario: "hotel", level: 3, emoji: "🕐", thai: "เช็คเอาท์กี่โมง", phonetic: "chék-áo gìi moong", meaning: "What time is checkout?", words: [] },
  { id: "h5", scenario: "hotel", level: 3, emoji: "⏰", thai: "ขอเช็คเอาท์สาย", phonetic: "khɔ̌ɔ chék-áo sǎai", meaning: "Late checkout please", words: [{ wordId: "khaw" }] },
  { id: "h6", scenario: "hotel", level: 3, emoji: "🧹", thai: "ขอผ้าขนหนูใหม่", phonetic: "khɔ̌ɔ phâa-khǒn-nǔu mài", meaning: "New towels please", words: [{ wordId: "khaw" }, { wordId: "mai-new" }] },
  { id: "h7", scenario: "hotel", level: 4, emoji: "❄️", thai: "แอร์ไม่เย็น", phonetic: "ɛɛ mâi yen", meaning: "AC isn't cold", words: [{ wordId: "mai-neg" }, { wordId: "yen" }] },
  { id: "h8", scenario: "hotel", level: 4, emoji: "🔇", thai: "ห้องเสียงดังมาก", phonetic: "hɔ̂ng sǐang dang mâak", meaning: "The room is very noisy", words: [{ wordId: "maak" }] },
  { id: "h9", scenario: "hotel", level: 4, emoji: "🛏️", thai: "ขอย้ายห้องได้ไหม", phonetic: "khɔ̌ɔ yáai hɔ̂ng dâai mǎi", meaning: "Can I change rooms?", words: [{ wordId: "khaw" }, { wordId: "daai" }, { wordId: "mai-q" }] },

  // ============== MEDICAL / PHARMACY ==============
  { id: "m1", scenario: "medical", level: 2, emoji: "🤒", thai: "ผมไม่สบาย", phonetic: "phǒm mâi sà-baai", meaning: "I'm not feeling well (male)", words: [{ wordId: "phom" }, { wordId: "mai-neg" }, { wordId: "sabai" }] },
  { id: "m2", scenario: "medical", level: 2, emoji: "🤕", thai: "ปวดหัว", phonetic: "bpùat hǔa", meaning: "Headache", words: [{ wordId: "hua" }] },
  { id: "m3", scenario: "medical", level: 2, emoji: "🤢", thai: "ปวดท้อง", phonetic: "bpùat thɔ́ɔng", meaning: "Stomach ache", words: [{ wordId: "thawng" }] },
  { id: "m4", scenario: "medical", level: 3, emoji: "💊", thai: "มียาแก้ปวดไหม", phonetic: "mii yaa gɛ̂ɛ bpùat mǎi", meaning: "Do you have painkillers?", words: [{ wordId: "mii" }, { wordId: "mai-q" }] },
  { id: "m5", scenario: "medical", level: 3, emoji: "🤧", thai: "เป็นหวัด", phonetic: "bpen wàt", meaning: "I have a cold", words: [] },
  { id: "m6", scenario: "medical", level: 4, emoji: "🌡️", thai: "ผมมีไข้ตั้งแต่เมื่อวาน", phonetic: "phǒm mii khâi dtâng-dtɛ̀ɛ mʉ̂a-waan", meaning: "I've had a fever since yesterday (male)", words: [{ wordId: "phom" }, { wordId: "mii" }, { wordId: "muea-waan" }] },
  { id: "m7", scenario: "medical", level: 4, emoji: "🚫", thai: "ผมแพ้กุ้ง", phonetic: "phǒm phɛ́ɛ gûng", meaning: "I'm allergic to shrimp (male)", words: [{ wordId: "phom" }, { wordId: "gung" }] },
  { id: "m8", scenario: "medical", level: 4, emoji: "🩸", thai: "ผมต้องการหมอด่วน", phonetic: "phǒm dtɔ̂ng-gaan mɔ̌ɔ dùan", meaning: "I need a doctor urgently (male)", words: [{ wordId: "phom" }, { wordId: "mawkh" }] },

  // ============== MOTORBIKE / TRANSPORT ==============
  { id: "mb1", scenario: "motorbike", level: 2, emoji: "🛵", thai: "เช่ามอเตอร์ไซค์", phonetic: "châo mɔɔ-dtəə-sai", meaning: "Rent a motorbike", words: [] },
  { id: "mb2", scenario: "motorbike", level: 2, emoji: "💰", thai: "วันละเท่าไหร่", phonetic: "wan lá thâo-rài", meaning: "How much per day?", words: [{ wordId: "thaorai" }] },
  { id: "mb3", scenario: "motorbike", level: 3, emoji: "🪪", thai: "ต้องวางมัดจำเท่าไหร่", phonetic: "dtɔ̂ng waang mát-jam thâo-rài", meaning: "How much is the deposit?", words: [{ wordId: "thaorai" }] },
  { id: "mb4", scenario: "motorbike", level: 3, emoji: "🪖", thai: "มีหมวกกันน็อคไหม", phonetic: "mii mùak-gan-nɔ́k mǎi", meaning: "Do you have a helmet?", words: [{ wordId: "mii" }, { wordId: "mai-q" }] },
  { id: "mb5", scenario: "motorbike", level: 3, emoji: "⛽", thai: "น้ำมันหมด", phonetic: "nám-man mòt", meaning: "Out of petrol", words: [] },
  { id: "mb6", scenario: "motorbike", level: 4, emoji: "🛞", thai: "ยางแบน ช่วยปะให้ได้ไหม", phonetic: "yaang bɛɛn, chûai bpà hâi dâai mǎi", meaning: "Tyre's flat, can you patch it?", words: [{ wordId: "chuai" }, { wordId: "daai" }, { wordId: "mai-q" }] },
  { id: "mb7", scenario: "motorbike", level: 4, emoji: "🔑", thai: "กุญแจหายครับ", phonetic: "gun-jɛɛ hǎai khráp", meaning: "I lost the key (male)", words: [{ wordId: "khrap" }] },

  // ============== BEACH / MASSAGE ==============
  { id: "b1", scenario: "beach", level: 2, emoji: "💆", thai: "นวดน้ำมัน", phonetic: "nûat náam-man", meaning: "Oil massage", words: [] },
  { id: "b2", scenario: "beach", level: 2, emoji: "🦶", thai: "นวดเท้า", phonetic: "nûat tháao", meaning: "Foot massage", words: [{ wordId: "thaao" }] },
  { id: "b3", scenario: "beach", level: 3, emoji: "🧴", thai: "ขอเบาๆหน่อย", phonetic: "khɔ̌ɔ bao-bao nɔ̀i", meaning: "A bit gentler please", words: [{ wordId: "khaw" }, { wordId: "noi" }] },
  { id: "b4", scenario: "beach", level: 3, emoji: "💪", thai: "หนักหน่อย", phonetic: "nàk nɔ̀i", meaning: "A bit harder please", words: [{ wordId: "noi" }] },
  { id: "b5", scenario: "beach", level: 3, emoji: "⏱️", thai: "ชั่วโมงเท่าไหร่", phonetic: "chûa-moong thâo-rài", meaning: "How much per hour?", words: [{ wordId: "chua-mong" }, { wordId: "thaorai" }] },
  { id: "b6", scenario: "beach", level: 2, emoji: "🌊", thai: "ไปทะเล", phonetic: "bpai thá-leh", meaning: "Go to the beach/sea", words: [{ wordId: "bpai" }] },
  { id: "b7", scenario: "beach", level: 3, emoji: "☀️", thai: "วันนี้แดดแรง", phonetic: "wan-níi dɛ̀ɛt rɛɛng", meaning: "Strong sun today", words: [{ wordId: "wan-nii" }, { wordId: "daet" }] },

  // ============== MORE FOOD ==============
  { id: "f-x1", scenario: "food", level: 2, emoji: "🥤", thai: "ขอน้ำแข็ง", phonetic: "khɔ̌ɔ náam-khɛ̌ng", meaning: "Ice please", words: [{ wordId: "khaw" }] },
  { id: "f-x2", scenario: "food", level: 3, emoji: "🍺", thai: "ขอเบียร์เย็นๆหนึ่งขวด", phonetic: "khɔ̌ɔ bia yen-yen nɯ̀ng khùat", meaning: "One cold beer please", words: [{ wordId: "khaw" }, { wordId: "bia" }, { wordId: "yen" }, { wordId: "neung" }], adultOnly: true },
  { id: "f-x3", scenario: "food", level: 3, emoji: "🥬", thai: "เป็นมังสวิรัติ", phonetic: "bpen mang-sà-wí-rát", meaning: "I'm vegetarian", words: [] },
  { id: "f-x4", scenario: "food", level: 3, emoji: "🦐", thai: "ไม่มีกุ้งใช่ไหม", phonetic: "mâi mii gûng châi mǎi", meaning: "There's no shrimp, right?", words: [{ wordId: "mai-neg" }, { wordId: "mii" }, { wordId: "gung" }, { wordId: "chai" }, { wordId: "mai-q" }] },
  { id: "f-x5", scenario: "food", level: 4, emoji: "📦", thai: "เอากลับบ้านครับ ไม่กินที่นี่", phonetic: "ao glàp bâan khráp, mâi gin thîi-nîi", meaning: "Takeaway please, not eating in (male)", words: [{ wordId: "ao" }, { wordId: "baan" }, { wordId: "khrap" }, { wordId: "mai-neg" }, { wordId: "gin" }] },
  { id: "f-x6", scenario: "food", level: 3, emoji: "🥢", thai: "ขอตะเกียบ", phonetic: "khɔ̌ɔ dtà-gìap", meaning: "Chopsticks please", words: [{ wordId: "khaw" }] },
  { id: "f-x7", scenario: "food", level: 2, emoji: "🍌", thai: "ผลไม้สด", phonetic: "phǒn-lá-máai sòt", meaning: "Fresh fruit", words: [] },

  // ============== MORE SHOPPING ==============
  { id: "s-x1", scenario: "shopping", level: 3, emoji: "👕", thai: "ขอลองได้ไหม", phonetic: "khɔ̌ɔ lɔɔng dâai mǎi", meaning: "Can I try it on?", words: [{ wordId: "khaw" }, { wordId: "daai" }, { wordId: "mai-q" }] },
  { id: "s-x2", scenario: "shopping", level: 3, emoji: "📏", thai: "มีไซส์ใหญ่กว่าไหม", phonetic: "mii sai yài gwàa mǎi", meaning: "Do you have a bigger size?", words: [{ wordId: "mii" }, { wordId: "yai" }, { wordId: "mai-q" }] },
  { id: "s-x3", scenario: "shopping", level: 3, emoji: "💰", thai: "ลดเหลือเท่าไหร่", phonetic: "lót lʉ̌a thâo-rài", meaning: "Discount to how much?", words: [{ wordId: "lot" }, { wordId: "thaorai" }] },
  { id: "s-x4", scenario: "shopping", level: 4, emoji: "💳", thai: "จ่ายด้วยบัตรได้ไหม", phonetic: "jàai dûai bàt dâai mǎi", meaning: "Can I pay by card?", words: [{ wordId: "duai" }, { wordId: "daai" }, { wordId: "mai-q" }] },
  { id: "s-x5", scenario: "shopping", level: 3, emoji: "🏷️", thai: "อันนี้กับอันนั้น เลือกอันไหนดี", phonetic: "an-níi gàp an-nán, lʉ̂ak an nǎi dii", meaning: "This or that, which one's better?", words: [{ wordId: "an-nii" }, { wordId: "gap" }, { wordId: "an-nan" }, { wordId: "nai-q" }, { wordId: "dii" }] },

  // ============== MORE TAXI ==============
  { id: "t-x1", scenario: "taxi", level: 2, emoji: "🛵", thai: "เรียกแกร็บ", phonetic: "rîak grɛ́ɛp", meaning: "Call a Grab", words: [{ wordId: "riak" }] },
  { id: "t-x2", scenario: "taxi", level: 3, emoji: "📍", thai: "ไปที่อยู่นี้", phonetic: "bpai thîi-yùu níi", meaning: "Go to this address", words: [{ wordId: "bpai" }, { wordId: "nii" }] },
  { id: "t-x3", scenario: "taxi", level: 4, emoji: "🚦", thai: "รีบหน่อยได้ไหม", phonetic: "rîip nɔ̀i dâai mǎi", meaning: "Can you hurry a bit?", words: [{ wordId: "noi" }, { wordId: "daai" }, { wordId: "mai-q" }] },
  { id: "t-x4", scenario: "taxi", level: 3, emoji: "🚐", thai: "ไปอีกประมาณกี่นาที", phonetic: "bpai ìik bprà-maan gìi naa-thii", meaning: "How many minutes more?", words: [{ wordId: "bpai" }, { wordId: "naa-thii" }] },

  // ============== MORE SMALL TALK ==============
  { id: "st-x1", scenario: "smalltalk", level: 4, emoji: "🌧️", thai: "ฝนตกหนักมาก", phonetic: "fǒn dtòk nàk mâak", meaning: "It's raining heavily", words: [{ wordId: "fon" }, { wordId: "maak" }] },
  { id: "st-x2", scenario: "smalltalk", level: 4, emoji: "🌅", thai: "เห็นพระอาทิตย์ขึ้นไหม", phonetic: "hěn phrá-aa-thít khʉ̂n mǎi", meaning: "Did you see the sunrise?", words: [{ wordId: "hen" }, { wordId: "mai-q" }] },
  { id: "st-x3", scenario: "smalltalk", level: 4, emoji: "🤝", thai: "ยินดีที่ได้รู้จักครับ", phonetic: "yin-dii thîi dâai rúu-jàk khráp", meaning: "Nice to meet you (male)", words: [{ wordId: "daai" }, { wordId: "ruu-know" }, { wordId: "khrap" }] },
  { id: "st-x4", scenario: "smalltalk", level: 5, emoji: "💭", thai: "เดี๋ยวผมจะกลับมาบอกอีกที", phonetic: "dǐao phǒm jà glàp maa bɔ̀ɔk ìik thii", meaning: "I'll come back and tell you (male)", words: [{ wordId: "phom" }, { wordId: "maa" }] },
  { id: "st-x5", scenario: "smalltalk", level: 5, emoji: "🤔", thai: "คิดว่าจะอยู่ยาวๆ", phonetic: "khít wâa jà yùu yaao-yaao", meaning: "Thinking I'll stay a long while", words: [{ wordId: "khit" }, { wordId: "yuu" }] },

  // ============== MORE EMERGENCY ==============
  { id: "e-x1", scenario: "emergency", level: 2, emoji: "🆘", thai: "ฉุกเฉิน", phonetic: "chùk-chə̌ən", meaning: "Emergency", words: [] },
  { id: "e-x2", scenario: "emergency", level: 3, emoji: "💼", thai: "กระเป๋าหายครับ", phonetic: "grà-bpǎo hǎai khráp", meaning: "I lost my bag (male)", words: [{ wordId: "khrap" }] },
  { id: "e-x3", scenario: "emergency", level: 3, emoji: "📞", thai: "โทรหาตำรวจ", phonetic: "thoo hǎa dtam-rùat", meaning: "Call the police", words: [{ wordId: "haa" }, { wordId: "tam-ruat" }] },
  { id: "e-x4", scenario: "emergency", level: 4, emoji: "🚒", thai: "ไฟไหม้ที่ชั้นล่าง", phonetic: "fai-mâi thîi chán-lâang", meaning: "Fire on the ground floor", words: [] },

  // ============== MORE GREETINGS ==============
  { id: "g-x1", scenario: "greetings", level: 2, emoji: "🌅", thai: "อรุณสวัสดิ์", phonetic: "à-run sà-wàt", meaning: "Good morning (formal)", words: [] },
  { id: "g-x2", scenario: "greetings", level: 2, emoji: "🌙", thai: "ราตรีสวัสดิ์", phonetic: "raa-dtrii sà-wàt", meaning: "Good night (formal)", words: [] },
  { id: "g-x3", scenario: "greetings", level: 2, emoji: "👋", thai: "ลาก่อน", phonetic: "laa gɔ̀ɔn", meaning: "Goodbye", words: [] },
  { id: "g-x4", scenario: "greetings", level: 3, emoji: "🤗", thai: "นานๆเจอกันที", phonetic: "naan-naan jəə gan thii", meaning: "Long time no see", words: [{ wordId: "joe" }, { wordId: "gan" }] },
];
