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

  // ============== LEVEL 5 — GOING FOR FLUENCY ==============
  // Opinion, nuance, conditionals, and socially fluent moves
  { id: "l5-s1", scenario: "smalltalk", level: 5, emoji: "💭", thai: "ถ้าถามผมนะ ผมว่าน่าลองดู", phonetic: "thâa thǎam phǒm ná, phǒm wâa nâa lɔɔng duu", meaning: "If you ask me, I'd say it's worth trying (male)", words: [{ wordId: "phom" }, { wordId: "na" }] },
  { id: "l5-s2", scenario: "smalltalk", level: 5, emoji: "🤷", thai: "ก็แล้วแต่สถานการณ์นะ", phonetic: "gɔ̂ɔ lɛ́ɛo-tɛ̀ɛ sà-thǎa-ná-gaan ná", meaning: "It depends on the situation", words: [{ wordId: "gaw" }, { wordId: "laew" }, { wordId: "na" }] },
  { id: "l5-s3", scenario: "smalltalk", level: 5, emoji: "😬", thai: "พูดตรงๆ นะ มันพูดง่ายกว่าทำ", phonetic: "phûut dtrong-dtrong ná, man phûut ngâai gwàa tham", meaning: "Honestly, that's easier said than done", words: [{ wordId: "na" }, { wordId: "man" }] },
  { id: "l5-s4", scenario: "smalltalk", level: 5, emoji: "🎯", thai: "ช่วยไม่ได้จริงๆ ครับ ขอโทษด้วย", phonetic: "chûai mâi dâai jing-jing khráp, khɔ̌ɔ-thôot dûai", meaning: "I really can't help, sorry (male)", words: [{ wordId: "mai-neg" }, { wordId: "khrap" }, { wordId: "khothot" }, { wordId: "duai" }] },
  { id: "l5-s5", scenario: "smalltalk", level: 5, emoji: "💬", thai: "ผมไม่ได้ตั้งใจจะหมายความอย่างนั้น", phonetic: "phǒm mâi dâai dtâng-jai jà mǎai-khwaam yàang-nán", meaning: "I didn't mean it that way (male)", words: [{ wordId: "phom" }, { wordId: "mai-neg" }] },
  { id: "l5-s6", scenario: "smalltalk", level: 5, emoji: "🤔", thai: "มองอีกมุมก็น่าสนใจนะ", phonetic: "mɔɔng ìik mum gɔ̂ɔ nâa-sǒn-jai ná", meaning: "Looking at it from another angle, it's actually interesting", words: [{ wordId: "gaw" }, { wordId: "na" }] },

  { id: "l5-f1", scenario: "food", level: 5, emoji: "🍽️", thai: "ปกติไม่กินเผ็ดแต่จานนี้โอเคครับ", phonetic: "bpà-gà-dtì mâi gin phèt, dtɛ̀ɛ jaan níi oo-kee khráp", meaning: "I don't normally eat spicy, but this dish is fine (male)", words: [{ wordId: "mai-neg" }, { wordId: "phet" }, { wordId: "khrap" }] },
  { id: "l5-f2", scenario: "food", level: 5, emoji: "🌶️", thai: "เผ็ดกำลังดี ไม่มากไป ไม่น้อยไป", phonetic: "phèt gam-lang dii, mâi mâak bpai, mâi nɔ́i bpai", meaning: "The spice is just right, not too much, not too little", words: [{ wordId: "phet" }, { wordId: "dii" }, { wordId: "mai-neg" }] },
  { id: "l5-f3", scenario: "food", level: 5, emoji: "🙏", thai: "ขอบคุณสำหรับคำแนะนำนะครับ", phonetic: "khɔ̀ɔp-khun sǎm-ràp kham-nɛ́-nam ná khráp", meaning: "Thank you for the recommendation (male)", words: [{ wordId: "khopkhun" }, { wordId: "na" }, { wordId: "khrap" }] },

  { id: "l5-sh1", scenario: "shopping", level: 5, emoji: "🤝", thai: "ถ้าลดอีกร้อยหนึ่งจะรับเลย", phonetic: "thâa lót ìik rɔ́ɔi nɯ̀ng, jà ráp ləəi", meaning: "If you knock off another hundred I'll take it", words: [{ wordId: "roi" }, { wordId: "neung" }, { wordId: "loei" }] },
  { id: "l5-sh2", scenario: "shopping", level: 5, emoji: "💭", thai: "ขอคิดดูก่อนนะครับ เดี๋ยวกลับมา", phonetic: "khɔ̌ɔ khít duu gɔ̀ɔn ná khráp, dǐao glàp maa", meaning: "Let me think about it, I'll come back (male)", words: [{ wordId: "na" }, { wordId: "khrap" }] },
  { id: "l5-sh3", scenario: "shopping", level: 5, emoji: "🎁", thai: "ช่วยห่อเป็นของขวัญได้ไหมครับ", phonetic: "chûai hɔ̀ɔ bpen khɔ̌ɔng-khwǎn dâai mǎi khráp", meaning: "Could you wrap it as a gift please? (male)", words: [{ wordId: "mai-q" }, { wordId: "khrap" }] },

  { id: "l5-t1", scenario: "taxi", level: 5, emoji: "🛣️", thai: "ถ้าทางนี้รถติดเกินไปเปลี่ยนทางได้นะครับ", phonetic: "thâa thaang-níi rót-dtìt gəən bpai, bplìian thaang dâai ná khráp", meaning: "If the traffic is too heavy this way, you can take another route (male)", words: [{ wordId: "na" }, { wordId: "khrap" }] },
  { id: "l5-t2", scenario: "taxi", level: 5, emoji: "🕐", thai: "ขอจอดรอประมาณสิบนาทีได้ไหมครับ", phonetic: "khɔ̌ɔ jɔ̀ɔt rɔɔ bprà-maan sìp naa-thii dâai mǎi khráp", meaning: "Could you wait about 10 minutes please? (male)", words: [{ wordId: "sip" }, { wordId: "mai-q" }, { wordId: "khrap" }] },

  { id: "l5-e1", scenario: "emergency", level: 5, emoji: "🆘", thai: "ขอโทษครับ มีเหตุฉุกเฉิน ต้องรีบไปโรงพยาบาล", phonetic: "khɔ̌ɔ-thôot khráp, mii hèet chùk-chə̌ən, dtɔ̂ng rîip bpai roong-phá-yaa-baan", meaning: "Sorry, there's an emergency, I need to rush to hospital (male)", words: [{ wordId: "khothot" }, { wordId: "khrap" }] },

  { id: "l5-so1", scenario: "smalltalk", level: 5, emoji: "🌏", thai: "อยู่เมืองไทยมานานก็รู้สึกเหมือนบ้าน", phonetic: "yùu mɯang-thai maa naan, gɔ̂ɔ rúu-sɯ̀k mɯ̌an bâan", meaning: "I've been in Thailand so long, it feels like home", words: [{ wordId: "gaw" }] },
  { id: "l5-so2", scenario: "smalltalk", level: 5, emoji: "😂", thai: "ยังไม่ถึงขั้นคล่อง แต่พอเอาตัวรอดได้", phonetic: "yang mâi thɯ̌ng khán khlɔ̂ng, dtɛ̀ɛ phɔɔ ao dtua rɔ̂ɔt dâai", meaning: "Not fluent yet, but enough to get by", words: [{ wordId: "mai-neg" }] },
  { id: "l5-so3", scenario: "smalltalk", level: 5, emoji: "👨‍👩‍👧", thai: "ว่าจะพาครอบครัวกลับมาเที่ยวอีก", phonetic: "wâa jà phaa khrɔ̂ɔp-khrua glàp maa thîao ìik", meaning: "Thinking of bringing the family back for another trip", words: [] },
  { id: "l5-so4", scenario: "smalltalk", level: 5, emoji: "🙇", thai: "ขอบคุณนะครับ ซึ้งใจจริงๆ", phonetic: "khɔ̀ɔp-khun ná khráp, sɯ̂ng-jai jing-jing", meaning: "Thank you, I truly appreciate it (male)", words: [{ wordId: "khopkhun" }, { wordId: "na" }, { wordId: "khrap" }] },
  { id: "l5-so5", scenario: "smalltalk", level: 5, emoji: "⏳", thai: "ถ้ามีอะไรให้ช่วยบอกได้เลยนะ", phonetic: "thâa mii à-rai hâi chûai, bɔ̀ɔk dâai ləəi ná", meaning: "If there's anything I can help with, just say", words: [{ wordId: "loei" }, { wordId: "na" }] },

  // ============== LEVEL 4 EXPANSION — conversational range ==============
  { id: "l4-s1", scenario: "smalltalk", level: 4, emoji: "🏝️", thai: "ช่วงนี้ฝนตกเกือบทุกวันเลย", phonetic: "chûang-níi fǒn-dtòk gɯ̀ap thúk wan ləəi", meaning: "It's been raining almost every day lately", words: [{ wordId: "fon" }, { wordId: "loei" }] },
  { id: "l4-s2", scenario: "smalltalk", level: 4, emoji: "🤔", thai: "คิดว่าจะอยู่ต่ออีกสักพัก", phonetic: "khít wâa jà yùu dtɔ̀ɔ ìik sàk phák", meaning: "I think I'll stay on a bit longer", words: [{ wordId: "khit" }] },
  { id: "l4-s3", scenario: "smalltalk", level: 4, emoji: "😌", thai: "ทำงานที่บ้าน สะดวกดี", phonetic: "tham-ngaan thîi bâan, sà-dùak dii", meaning: "I work from home, it's convenient", words: [{ wordId: "dii" }] },
  { id: "l4-s4", scenario: "smalltalk", level: 4, emoji: "🎉", thai: "เมื่อวานไปงานวันเกิดเพื่อน สนุกมาก", phonetic: "mɯ̂ɯa-waan bpai ngaan wan-gə̀ət phɯ̂an, sà-nùk mâak", meaning: "Yesterday I went to a friend's birthday, it was great fun", words: [{ wordId: "muea-waan" }, { wordId: "maak" }] },
  { id: "l4-s5", scenario: "smalltalk", level: 4, emoji: "🚶", thai: "พรุ่งนี้จะไปเดินตลาดนัด", phonetic: "phrûng-níi jà bpai dəən dtà-làat-nát", meaning: "Tomorrow I'm going to walk the weekend market", words: [{ wordId: "phrung-nii" }] },
  { id: "l4-s6", scenario: "smalltalk", level: 4, emoji: "😅", thai: "อากาศร้อนจนนอนไม่หลับเลย", phonetic: "aa-gàat rɔ́ɔn jon nɔɔn mâi làp ləəi", meaning: "The weather's so hot I couldn't sleep", words: [{ wordId: "rawn" }, { wordId: "mai-neg" }, { wordId: "loei" }] },

  { id: "l4-f1", scenario: "food", level: 4, emoji: "🍲", thai: "มีเมนูแนะนำไหมครับ?", phonetic: "mii mee-nuu nɛ́-nam mǎi khráp?", meaning: "Do you have a recommended dish? (male)", words: [{ wordId: "mii" }, { wordId: "mai-q" }, { wordId: "khrap" }] },
  { id: "l4-f2", scenario: "food", level: 4, emoji: "🥜", thai: "ผมแพ้ถั่วครับ", phonetic: "phǒm phɛ́ɛ thùa khráp", meaning: "I'm allergic to peanuts (male)", words: [{ wordId: "phom" }, { wordId: "khrap" }] },
  { id: "l4-f3", scenario: "food", level: 4, emoji: "🛍️", thai: "ห่อกลับบ้านได้ไหมครับ?", phonetic: "hɔ̀ɔ glàp bâan dâai mǎi khráp?", meaning: "Can I take it away? (male)", words: [{ wordId: "baan" }, { wordId: "mai-q" }, { wordId: "khrap" }] },
  { id: "l4-f4", scenario: "food", level: 4, emoji: "🌶️", thai: "ขอพริกน้ำปลาเพิ่มหน่อยครับ", phonetic: "khɔ̌ɔ phrík-náam-bplaa phə̂əm nɔ̀ɔi khráp", meaning: "A bit more chili fish sauce please (male)", words: [{ wordId: "khrap" }] },

  { id: "l4-sh1", scenario: "shopping", level: 4, emoji: "💳", thai: "รับบัตรเครดิตไหมครับ?", phonetic: "ráp bàt-khree-dìt mǎi khráp?", meaning: "Do you take credit cards? (male)", words: [{ wordId: "mai-q" }, { wordId: "khrap" }] },
  { id: "l4-sh2", scenario: "shopping", level: 4, emoji: "👕", thai: "มีไซส์อื่นไหมครับ?", phonetic: "mii sái ɯ̀ɯn mǎi khráp?", meaning: "Do you have another size? (male)", words: [{ wordId: "mii" }, { wordId: "mai-q" }, { wordId: "khrap" }] },
  { id: "l4-sh3", scenario: "shopping", level: 4, emoji: "🧾", thai: "ขอใบเสร็จด้วยครับ", phonetic: "khɔ̌ɔ bai-sèt dûai khráp", meaning: "Receipt please (male)", words: [{ wordId: "bai" }, { wordId: "duai" }, { wordId: "khrap" }] },

  { id: "l4-h1", scenario: "hotel", level: 4, emoji: "🔑", thai: "ลืมกุญแจไว้ในห้องครับ", phonetic: "lɯɯm gun-jɛɛ wái nai hɔ̂ng khráp", meaning: "I've left the key in the room (male)", words: [{ wordId: "nai-in" }, { wordId: "khrap" }] },
  { id: "l4-h2", scenario: "hotel", level: 4, emoji: "📶", thai: "ไวไฟใช้ไม่ได้ครับ", phonetic: "wai-fai chái mâi dâai khráp", meaning: "The WiFi isn't working (male)", words: [{ wordId: "mai-neg" }, { wordId: "khrap" }] },

  // ============== NUMBERS SCENARIO — thin -> fuller ==============
  { id: "num-x1", scenario: "numbers", level: 1, emoji: "📞", thai: "เบอร์โทรศัพท์ของคุณคืออะไร?", phonetic: "bəə thoo-rá-sàp khɔ̌ɔng khun khɯɯ à-rai?", meaning: "What's your phone number?", words: [{ wordId: "khun" }, { wordId: "arai" }] },
  { id: "num-x2", scenario: "numbers", level: 2, emoji: "🕐", thai: "ตอนนี้กี่โมงแล้ว?", phonetic: "dtɔɔn-níi gìi moong lɛ́ɛo?", meaning: "What time is it now?", words: [{ wordId: "dtɔɔn-nii" }, { wordId: "kii" }, { wordId: "laew" }] },
  { id: "num-x3", scenario: "numbers", level: 2, emoji: "🎂", thai: "ผมอายุสามสิบปี", phonetic: "phǒm aa-yú sǎam-sìp bpii", meaning: "I'm 30 years old (male)", words: [{ wordId: "phom" }, { wordId: "saam-sip" }] },
  { id: "num-x4", scenario: "numbers", level: 2, emoji: "🏠", thai: "บ้านเลขที่ 45", phonetic: "bâan lêek-thîi sìi-sìp-hâa", meaning: "House number 45", words: [{ wordId: "baan" }, { wordId: "sii-sip" }, { wordId: "haa" }] },
  { id: "num-x5", scenario: "numbers", level: 3, emoji: "💰", thai: "ราคาห้าร้อยบาท", phonetic: "raa-khaa hâa-rɔ́ɔi bàat", meaning: "Five hundred baht", words: [{ wordId: "haa" }, { wordId: "roi" }, { wordId: "baht" }] },

  // ============== DIRECTIONS SCENARIO — fuller with prepositions ==============
  { id: "dir-x1", scenario: "directions", level: 2, emoji: "⬆️", thai: "ตรงไปข้างหน้า", phonetic: "dtrong bpai khâang nâa", meaning: "Straight ahead", words: [{ wordId: "khaang" }, { wordId: "naa-front" }] },
  { id: "dir-x2", scenario: "directions", level: 2, emoji: "📍", thai: "อยู่ใกล้นี่เองครับ", phonetic: "yùu glâi nîi eeng khráp", meaning: "It's nearby (male)", words: [{ wordId: "yuu" }, { wordId: "glai" }, { wordId: "khrap" }] },
  { id: "dir-x3", scenario: "directions", level: 3, emoji: "🏧", thai: "ตู้เอทีเอ็มอยู่ข้างร้านสะดวกซื้อ", phonetic: "dtûu ee-thii-em yùu khâang ráan sà-dùak-sɯ́ɯ", meaning: "The ATM is next to the convenience store", words: [{ wordId: "yuu" }, { wordId: "khaang" }, { wordId: "raan" }] },
  { id: "dir-x4", scenario: "directions", level: 3, emoji: "🏢", thai: "ขึ้นลิฟต์ไปชั้นสาม", phonetic: "khɯ̂n líp bpai chán sǎam", meaning: "Take the lift to the third floor", words: [{ wordId: "bpai" }, { wordId: "saam" }] },
  { id: "dir-x5", scenario: "directions", level: 3, emoji: "🌉", thai: "ข้ามสะพานแล้วเลี้ยวขวา", phonetic: "khâam sà-phaan lɛ́ɛo líao khwǎa", meaning: "Cross the bridge then turn right", words: [{ wordId: "laew" }] },

  // ============== MEDICAL SCENARIO — fuller ==============
  { id: "med-x1", scenario: "medical", level: 2, emoji: "🤒", thai: "ผมไม่สบายครับ", phonetic: "phǒm mâi sà-baai khráp", meaning: "I'm not feeling well (male)", words: [{ wordId: "phom" }, { wordId: "mai-neg" }, { wordId: "sabai" }, { wordId: "khrap" }] },
  { id: "med-x2", scenario: "medical", level: 3, emoji: "🤧", thai: "ปวดท้องมาสองวันแล้วครับ", phonetic: "bpùat-thɔ́ɔng maa sɔ̌ɔng wan lɛ́ɛo khráp", meaning: "My stomach has hurt for two days (male)", words: [{ wordId: "song" }, { wordId: "laew" }, { wordId: "khrap" }] },
  { id: "med-x3", scenario: "medical", level: 3, emoji: "💊", thai: "ยานี้กินก่อนอาหารหรือหลังครับ?", phonetic: "yaa níi gin gɔ̀ɔn aa-hǎan rɯ̌ɯ lǎng khráp?", meaning: "Take this before or after food? (male)", words: [{ wordId: "aahaan" }, { wordId: "lang-back" }, { wordId: "khrap" }] },
  { id: "med-x4", scenario: "medical", level: 4, emoji: "🩺", thai: "ผมแพ้ยาปฏิชีวนะครับ", phonetic: "phǒm phɛ́ɛ yaa bpà-dtì-chii-wá-ná khráp", meaning: "I'm allergic to antibiotics (male)", words: [{ wordId: "phom" }, { wordId: "khrap" }] },
  { id: "med-x5", scenario: "medical", level: 4, emoji: "🏥", thai: "โรงพยาบาลที่ใกล้ที่สุดอยู่ที่ไหนครับ?", phonetic: "roong-phá-yaa-baan thîi glâi thîi-sùt yùu thîi-nǎi khráp?", meaning: "Where's the nearest hospital? (male)", words: [{ wordId: "glai" }, { wordId: "yuu" }, { wordId: "khrap" }] },
];
