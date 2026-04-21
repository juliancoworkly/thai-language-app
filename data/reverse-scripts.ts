import type { Level } from "@/lib/types";

export interface ReverseScriptTurn {
  speaker: string; // English label
  speakerTh?: string; // Thai label
  english: string;
  thaiPhonetic: string; // Thai-script approximation of the English
  thaiMeaning: string; // Thai translation
  note?: string; // Thai-language note
}

export interface ReverseScript {
  id: string;
  title: string; // English title
  titleThai: string;
  emoji: string;
  category: string;
  description: string; // Thai
  descriptionEn: string;
  level: Level;
  order: number;
  turns: ReverseScriptTurn[];
}

export const reverseScripts: ReverseScript[] = [
  {
    id: "meet-classmate",
    title: "Meeting a new classmate",
    titleThai: "แนะนำตัวกับเพื่อนใหม่",
    emoji: "👋",
    category: "school",
    description: "การแนะนำตัวกับเพื่อนใหม่ที่โรงเรียน",
    descriptionEn: "Introducing yourself to a new classmate.",
    level: 1,
    order: 1,
    turns: [
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Hi! I'm Nong. What's your name?",
        thaiPhonetic: "ไฮ ไอม์-นง วอทส์-ยัวร์-เนม",
        thaiMeaning: "สวัสดี ฉันชื่อ นง แล้วคุณชื่ออะไร",
      },
      {
        speaker: "Classmate",
        speakerTh: "เพื่อน",
        english: "I'm Alex. Nice to meet you.",
        thaiPhonetic: "ไอม์-อะ-เล็กซ์ ไนซ์-ทู-มีท-ยู",
        thaiMeaning: "ฉันชื่อ อเล็กซ์ ยินดีที่ได้รู้จัก",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Where are you from?",
        thaiPhonetic: "แวร์-อาร์-ยู-ฟรอม",
        thaiMeaning: "คุณมาจากไหน",
      },
      {
        speaker: "Classmate",
        speakerTh: "เพื่อน",
        english: "I'm from Australia. And you?",
        thaiPhonetic: "ไอม์-ฟรอม-ออส-เตร-เลีย แอนด์-ยู",
        thaiMeaning: "ฉันมาจากออสเตรเลีย แล้วคุณล่ะ",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "I'm from Thailand. How old are you?",
        thaiPhonetic: "ไอม์-ฟรอม-ไท-แลนด์ ฮาว-โอลด์-อาร์-ยู",
        thaiMeaning: "ฉันมาจากประเทศไทย คุณอายุเท่าไหร่",
      },
      {
        speaker: "Classmate",
        speakerTh: "เพื่อน",
        english: "I'm ten. Let's be friends!",
        thaiPhonetic: "ไอม์-เท็น เล็ทส์-บี-เฟรนด์ส์",
        thaiMeaning: "ฉันอายุ 10 ขวบ มาเป็นเพื่อนกันนะ",
        note: "Let's ใช้ชวนทำอะไรด้วยกัน เหมือนคำว่า 'มา...กันเถอะ' ในภาษาไทย",
      },
    ],
  },

  {
    id: "ask-teacher",
    title: "Asking the teacher",
    titleThai: "ถามคุณครู",
    emoji: "🧑‍🏫",
    category: "school",
    description: "ประโยคใช้ถามคุณครูในห้องเรียน",
    descriptionEn: "Classroom phrases for asking your teacher.",
    level: 1,
    order: 2,
    turns: [
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Excuse me, teacher. I have a question.",
        thaiPhonetic: "เอ็กซ์-คิวส์-มี ที-เช่อร์ ไอ-แฮฟ-อะ-เควส-ชั่น",
        thaiMeaning: "ขอโทษค่ะ/ครับ คุณครู หนูมีคำถาม",
      },
      {
        speaker: "Teacher",
        speakerTh: "คุณครู",
        english: "Yes, what is it?",
        thaiPhonetic: "เยส วอท-อิส-อิท",
        thaiMeaning: "ได้จ้ะ/ครับ เรื่องอะไร",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "I don't understand this word.",
        thaiPhonetic: "ไอ-ด็อนท์-อัน-เดอร์-สแตนด์-ดิส-เวิร์ด",
        thaiMeaning: "หนูไม่เข้าใจคำนี้",
      },
      {
        speaker: "Teacher",
        speakerTh: "คุณครู",
        english: "No problem. Let me explain it.",
        thaiPhonetic: "โน-พร็อบ-เล่ม เล็ท-มี-เอ็กซ์-เพลน-อิท",
        thaiMeaning: "ไม่เป็นไรจ้ะ/ครับ ให้ครูอธิบายให้ฟัง",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Can you repeat that, please?",
        thaiPhonetic: "แคน-ยู-รี-พีท-แดท-พลีส",
        thaiMeaning: "ช่วยพูดอีกครั้งได้ไหมคะ/ครับ",
        note: "ถ้าฟังไม่ทัน ใช้ประโยคนี้ได้เลย ครูจะไม่โกรธแน่นอน",
      },
      {
        speaker: "Teacher",
        speakerTh: "คุณครู",
        english: "Of course. Listen carefully.",
        thaiPhonetic: "ออฟ-คอร์ส ลิส-เซ่น-แคร์-ฟู-ลี่",
        thaiMeaning: "ได้เลย ตั้งใจฟังนะ",
      },
    ],
  },

  {
    id: "buy-something",
    title: "Buying something at a shop",
    titleThai: "ซื้อของที่ร้าน",
    emoji: "🛍️",
    category: "shopping",
    description: "ไปซื้อของที่ร้านและถามราคา",
    descriptionEn: "Asking about price and paying.",
    level: 2,
    order: 3,
    turns: [
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Excuse me, how much is this?",
        thaiPhonetic: "เอ็กซ์-คิวส์-มี ฮาว-มัช-อิส-ดิส",
        thaiMeaning: "ขอโทษค่ะ/ครับ ราคาเท่าไหร่",
      },
      {
        speaker: "Shopkeeper",
        speakerTh: "พนักงาน",
        english: "It's 250 baht.",
        thaiPhonetic: "อิทส์-ทู-ฮัน-เดรด-ฟิฟ-ตี้-บาท",
        thaiMeaning: "250 บาทค่ะ/ครับ",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Do you have this in another color?",
        thaiPhonetic: "ดู-ยู-แฮฟ-ดิส-อิน-อะ-นา-เธ่อร์-คัล-เล่อร์",
        thaiMeaning: "มีสีอื่นไหมคะ/ครับ",
      },
      {
        speaker: "Shopkeeper",
        speakerTh: "พนักงาน",
        english: "We have blue and green.",
        thaiPhonetic: "วี-แฮฟ-บลู-แอนด์-กรีน",
        thaiMeaning: "มีสีฟ้ากับสีเขียวค่ะ/ครับ",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "I'll take the blue one. Can I pay by card?",
        thaiPhonetic: "ไอล์-เทค-เดอะ-บลู-วัน แคน-ไอ-เพย์-บาย-คาร์ด",
        thaiMeaning: "เอาสีฟ้าค่ะ/ครับ จ่ายด้วยบัตรได้ไหม",
      },
      {
        speaker: "Shopkeeper",
        speakerTh: "พนักงาน",
        english: "Yes, of course. Here is your receipt.",
        thaiPhonetic: "เยส ออฟ-คอร์ส เฮียร์-อิส-ยัวร์-รี-ซีท",
        thaiMeaning: "ได้ค่ะ/ครับ นี่ใบเสร็จนะ",
      },
    ],
  },

  {
    id: "at-the-doctor",
    title: "At the doctor",
    titleThai: "หาหมอ",
    emoji: "🩺",
    category: "medical",
    description: "บอกอาการที่หมอและตอบคำถามของหมอ",
    descriptionEn: "Describing symptoms to a doctor.",
    level: 2,
    order: 4,
    turns: [
      {
        speaker: "Doctor",
        speakerTh: "หมอ",
        english: "Hello. What's the problem today?",
        thaiPhonetic: "เฮล-โล วอทส์-เดอะ-พร็อบ-เล่ม-ทู-เดย์",
        thaiMeaning: "สวัสดี วันนี้มีอาการอะไร",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "I have a headache and a fever.",
        thaiPhonetic: "ไอ-แฮฟ-อะ-เฮด-เอค-แอนด์-อะ-ฟี-เว่อร์",
        thaiMeaning: "หนูปวดหัวและเป็นไข้",
      },
      {
        speaker: "Doctor",
        speakerTh: "หมอ",
        english: "How long have you felt sick?",
        thaiPhonetic: "ฮาว-ลอง-แฮฟ-ยู-เฟลท์-ซิค",
        thaiMeaning: "ป่วยมากี่วันแล้ว",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Two days.",
        thaiPhonetic: "ทู-เดย์ส",
        thaiMeaning: "สองวันแล้วค่ะ/ครับ",
      },
      {
        speaker: "Doctor",
        speakerTh: "หมอ",
        english: "Any allergies?",
        thaiPhonetic: "เอ็ก-นี่-แอล-เลอ-จี้ส์",
        thaiMeaning: "แพ้ยาอะไรไหม",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "No, none.",
        thaiPhonetic: "โน นัน",
        thaiMeaning: "ไม่มีค่ะ/ครับ",
      },
      {
        speaker: "Doctor",
        speakerTh: "หมอ",
        english: "Take this medicine three times a day. Rest at home.",
        thaiPhonetic:
          "เทค-ดิส-เมด-ดิ-ซิ่น-ทรี-ไทม์ส-อะ-เดย์ เรสท์-แอท-โฮม",
        thaiMeaning: "กินยานี้วันละสามครั้ง และพักผ่อนที่บ้าน",
      },
    ],
  },

  {
    id: "order-coffee",
    title: "Ordering at a café",
    titleThai: "สั่งกาแฟที่ร้าน",
    emoji: "☕",
    category: "food",
    description: "สั่งกาแฟกับพนักงานด้วยภาษาอังกฤษ",
    descriptionEn: "Ordering coffee in English.",
    level: 2,
    order: 5,
    turns: [
      {
        speaker: "Barista",
        speakerTh: "พนักงาน",
        english: "Hi! What can I get you?",
        thaiPhonetic: "ไฮ วอท-แคน-ไอ-เก็ท-ยู",
        thaiMeaning: "สวัสดีค่ะ/ครับ รับอะไรดี",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "A cappuccino, please.",
        thaiPhonetic: "อะ-แคพ-พู-ชี-โน่ พลีส",
        thaiMeaning: "ขอคาปูชิโน่หนึ่งแก้ว",
      },
      {
        speaker: "Barista",
        speakerTh: "พนักงาน",
        english: "Hot or iced?",
        thaiPhonetic: "ฮอท-ออร์-ไอซ์ด",
        thaiMeaning: "ร้อนหรือเย็น",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Iced, please.",
        thaiPhonetic: "ไอซ์ด-พลีส",
        thaiMeaning: "เย็นค่ะ/ครับ",
      },
      {
        speaker: "Barista",
        speakerTh: "พนักงาน",
        english: "Any size? Small, medium, or large?",
        thaiPhonetic: "เอ็ก-นี่-ไซซ์ สมอล-มี-เดียม-ออร์-ลาร์จ",
        thaiMeaning: "ขนาดไหน เล็ก กลาง หรือใหญ่",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "Medium, please. And one croissant.",
        thaiPhonetic: "มี-เดียม-พลีส แอนด์-วัน-ครัว-ซอง",
        thaiMeaning: "ขนาดกลางค่ะ/ครับ กับครัวซองต์หนึ่งชิ้น",
      },
      {
        speaker: "Barista",
        speakerTh: "พนักงาน",
        english: "That's 150 baht. For here or to go?",
        thaiPhonetic: "แดทส์-วัน-ฮัน-เดรด-ฟิฟ-ตี้-บาท ฟอร์-เฮียร์-ออร์-ทู-โก",
        thaiMeaning: "150 บาทค่ะ/ครับ ทานที่ร้านหรือใส่ถุงไป",
      },
      {
        speaker: "You",
        speakerTh: "คุณ",
        english: "To go, please. Thank you!",
        thaiPhonetic: "ทู-โก-พลีส แท็งก์-คิว",
        thaiMeaning: "ใส่ถุงไปค่ะ/ครับ ขอบคุณ",
      },
    ],
  },
];
