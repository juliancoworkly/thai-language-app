import type { Level } from "@/lib/types";

export interface ScriptTurn {
  speaker: string; // e.g. "Waiter", "You", "Driver"
  speakerTh?: string; // Thai label, e.g. "พนักงาน"
  thai: string;
  phonetic: string;
  meaning: string;
  note?: string; // optional cultural or grammar note
}

export interface Script {
  id: string;
  title: string;
  titleThai: string;
  emoji: string;
  scenario: string; // links to existing scenarios when relevant
  description: string;
  level: Level;
  order: number;
  turns: ScriptTurn[];
}

export const scripts: Script[] = [
  {
    id: "order-kra-pao",
    title: "Ordering pad kra pao",
    titleThai: "สั่งกะเพรา",
    emoji: "🍳",
    scenario: "food",
    description:
      "The everyday Thai fast-food order. A full exchange from hello to paying.",
    level: 2,
    order: 1,
    turns: [
      {
        speaker: "Waiter",
        speakerTh: "พนักงาน",
        thai: "สวัสดีครับ รับอะไรดีครับ?",
        phonetic: "sà-wàt-dii khráp, ráp à-rai dii khráp?",
        meaning: "Hello, what would you like?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ขอกะเพราหมูกับไข่ดาวครับ",
        phonetic: "khɔ̌ɔ grà-phrao mǔu gàp khài-daao khráp",
        meaning: "Pad kra pao with pork and a fried egg please",
      },
      {
        speaker: "Waiter",
        speakerTh: "พนักงาน",
        thai: "เผ็ดไหมครับ?",
        phonetic: "phèt mǎi khráp?",
        meaning: "Spicy?",
        note: "If you can't eat spicy, say ไม่เผ็ด (mâi phèt). Middle ground: เผ็ดน้อย (a little spicy).",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "เผ็ดน้อยๆ ครับ",
        phonetic: "phèt nɔ́i-nɔ́i khráp",
        meaning: "Just a little spicy, please",
      },
      {
        speaker: "Waiter",
        speakerTh: "พนักงาน",
        thai: "รับเครื่องดื่มอะไรไหมครับ?",
        phonetic: "ráp khrɯ̂ang-dɯ̀ɯm à-rai mǎi khráp?",
        meaning: "Any drinks?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "น้ำเปล่าเย็นๆ ครับ",
        phonetic: "náam-bplàao yen-yen khráp",
        meaning: "Cold water please",
      },
      {
        speaker: "Waiter",
        speakerTh: "พนักงาน",
        thai: "ทั้งหมด 80 บาทครับ",
        phonetic: "tháng-mòt bpàet-sìp bàat khráp",
        meaning: "That's 80 baht total",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "นี่ครับ ขอบคุณครับ",
        phonetic: "nîi khráp, khɔ̀ɔp-khun khráp",
        meaning: "Here you go, thank you",
      },
    ],
  },

  {
    id: "taxi-to-hotel",
    title: "Taking a taxi to the hotel",
    titleThai: "ขึ้นแท็กซี่ไปโรงแรม",
    emoji: "🚕",
    scenario: "taxi",
    description:
      "Meter, destination, traffic, arrival. The core of any Bangkok taxi ride.",
    level: 2,
    order: 2,
    turns: [
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ไปโรงแรมมณเฑียร เปิดมิเตอร์ด้วยนะครับ",
        phonetic: "bpai roong-rɛɛm mon-thian, bpə̀ət mí-dtə̂ə dûai ná khráp",
        meaning: "To the Montien Hotel, please turn on the meter",
        note: "Always ask for the meter. Not all drivers offer it unprompted.",
      },
      {
        speaker: "Driver",
        speakerTh: "คนขับ",
        thai: "ได้ครับ รัดเข็มขัดด้วยนะ",
        phonetic: "dâai khráp, rát khěm-khàt dûai ná",
        meaning: "Sure. Put your seatbelt on",
      },
      {
        speaker: "Driver",
        speakerTh: "คนขับ",
        thai: "ช่วงนี้รถติดนะครับ",
        phonetic: "chûang-níi rót-dtìt ná khráp",
        meaning: "Traffic is bad right now",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ไม่เป็นไรครับ ไม่รีบ",
        phonetic: "mâi-bpen-rai khráp, mâi rîip",
        meaning: "No worries, I'm not in a rush",
      },
      {
        speaker: "Driver",
        speakerTh: "คนขับ",
        thai: "ถึงแล้วครับ 180 บาท",
        phonetic: "thɯ̌ng lɛ́ɛo khráp, nɯ̀ng-rɔ́ɔi-bpàet-sìp bàat",
        meaning: "We're here. 180 baht",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "200 ครับ ไม่ต้องทอน ขอบคุณครับ",
        phonetic: "sɔ̌ɔng-rɔ́ɔi khráp, mâi dtɔ̂ng thɔɔn, khɔ̀ɔp-khun khráp",
        meaning: "Two hundred, keep the change, thank you",
      },
    ],
  },

  {
    id: "hotel-checkin",
    title: "Checking into a hotel",
    titleThai: "เช็คอินโรงแรม",
    emoji: "🏨",
    scenario: "hotel",
    description:
      "Passport, reservation, key card, breakfast hours. A full reception exchange.",
    level: 3,
    order: 3,
    turns: [
      {
        speaker: "Receptionist",
        speakerTh: "พนักงานต้อนรับ",
        thai: "สวัสดีค่ะ เช็คอินใช่ไหมคะ?",
        phonetic: "sà-wàt-dii khâ, chék-in châi mǎi khá?",
        meaning: "Hello, checking in?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ใช่ครับ จองในนามจอห์น สมิธ",
        phonetic: "châi khráp, jɔɔng nai naam jɔɔn sà-mít",
        meaning: "Yes, the booking is under John Smith",
      },
      {
        speaker: "Receptionist",
        speakerTh: "พนักงานต้อนรับ",
        thai: "ขอดูพาสปอร์ตหน่อยค่ะ",
        phonetic: "khɔ̌ɔ duu pháat-sà-phɔ̀ɔt nɔ̀ɔi khâ",
        meaning: "Could I see your passport please?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "นี่ครับ",
        phonetic: "nîi khráp",
        meaning: "Here you go",
      },
      {
        speaker: "Receptionist",
        speakerTh: "พนักงานต้อนรับ",
        thai: "ห้องคุณเบอร์ 512 ค่ะ อาหารเช้า 6 ถึง 10 โมง",
        phonetic:
          "hɔ̂ng khun bəə hâa-nɯ̀ng-sɔ̌ɔng khâ, aa-hǎan-cháao hòk thɯ̌ng sìp moong",
        meaning: "Your room is 512. Breakfast is from 6 to 10",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "รหัสไวไฟคืออะไรครับ?",
        phonetic: "rá-hàt wai-fai khɯɯ à-rai khráp?",
        meaning: "What's the WiFi password?",
      },
      {
        speaker: "Receptionist",
        speakerTh: "พนักงานต้อนรับ",
        thai: "เขียนไว้บนใบนี้ค่ะ ขอให้พักผ่อนให้สบายนะคะ",
        phonetic:
          "khǐan wái bon bai-níi khâ, khɔ̌ɔ-hâi phák-phɔ̀ɔn hâi sà-baai ná khá",
        meaning: "It's on this card. Have a comfortable stay",
      },
    ],
  },

  {
    id: "market-bargain",
    title: "Bargaining at the market",
    titleThai: "ต่อรองราคาที่ตลาด",
    emoji: "🛍️",
    scenario: "shopping",
    description:
      "How to knock a few hundred baht off without causing offence. Soft, with a smile.",
    level: 3,
    order: 4,
    turns: [
      {
        speaker: "Vendor",
        speakerTh: "แม่ค้า",
        thai: "อันนี้ 800 ค่ะ คุณภาพดี",
        phonetic: "an níi bpàet-rɔ́ɔi khâ, khun-ná-phâap dii",
        meaning: "This one is 800. Good quality",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ลดหน่อยได้ไหมครับ แพงไปนิดนึง",
        phonetic: "lót nɔ̀ɔi dâai mǎi khráp, phɛɛng bpai nít nɯng",
        meaning: "Could you give a discount? A little pricey",
        note: "Smile when you say this. Bargaining is social, not confrontational.",
      },
      {
        speaker: "Vendor",
        speakerTh: "แม่ค้า",
        thai: "ลดให้ 700 ค่ะ สุดแล้ว",
        phonetic: "lót hâi jèt-rɔ́ɔi khâ, sùt lɛ́ɛo",
        meaning: "700, that's my best price",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ถ้าลดอีกร้อยหนึ่งจะรับเลยครับ",
        phonetic: "thâa lót ìik rɔ́ɔi nɯ̀ng jà ráp ləəi khráp",
        meaning: "If you knock off another hundred I'll take it",
      },
      {
        speaker: "Vendor",
        speakerTh: "แม่ค้า",
        thai: "ได้ค่ะ 600 เลย ซื้ออะไรอีกไหม?",
        phonetic:
          "dâai khâ, hòk-rɔ́ɔi ləəi, sɯ́ɯ à-rai ìik mǎi?",
        meaning: "Okay, 600 it is. Anything else?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "เอาแค่นี้ครับ ขอบคุณมากครับ",
        phonetic: "ao khɛ̂ɛ níi khráp, khɔ̀ɔp-khun mâak khráp",
        meaning: "Just this, thank you very much",
      },
    ],
  },

  {
    id: "pharmacy-help",
    title: "Getting help at the pharmacy",
    titleThai: "ขอยาที่ร้านขายยา",
    emoji: "💊",
    scenario: "medical",
    description:
      "Headache, fever, or an upset stomach. What to say so the pharmacist can help.",
    level: 3,
    order: 5,
    turns: [
      {
        speaker: "Pharmacist",
        speakerTh: "เภสัชกร",
        thai: "มาธุระอะไรคะ?",
        phonetic: "maa thú-rá à-rai khá?",
        meaning: "How can I help?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ไม่สบายครับ ปวดหัวและเป็นไข้",
        phonetic: "mâi sà-baai khráp, bpùat hǔa lɛ́ bpen khâi",
        meaning: "I'm not feeling well. Headache and a fever",
      },
      {
        speaker: "Pharmacist",
        speakerTh: "เภสัชกร",
        thai: "เป็นมากี่วันแล้วคะ?",
        phonetic: "bpen maa gìi wan lɛ́ɛo khá?",
        meaning: "How many days now?",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "สองวันครับ",
        phonetic: "sɔ̌ɔng wan khráp",
        meaning: "Two days",
      },
      {
        speaker: "Pharmacist",
        speakerTh: "เภสัชกร",
        thai: "ลองพาราเซตามอลก่อน กินทุก 6 ชั่วโมง",
        phonetic:
          "lɔɔng paa-raa-see-dtaa-mɔɔn gɔ̀ɔn, gin thúk hòk chûa-moong",
        meaning: "Try paracetamol first. Take it every 6 hours",
        note:
          "Paracetamol is over-the-counter across Thailand. If symptoms last more than 3 days, see a doctor.",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        thai: "ขอบคุณครับ เท่าไหร่ครับ?",
        phonetic: "khɔ̀ɔp-khun khráp, thâo-rài khráp?",
        meaning: "Thank you. How much?",
      },
    ],
  },
];
