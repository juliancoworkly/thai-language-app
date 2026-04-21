import { Eyebrow, SubHeading } from "../shell";

const GROUPS: { label: string; items: { emoji: string; en: string; phonetic: string; th: string }[] }[] = [
  {
    label: "Fruits · ผลไม้",
    items: [
      { emoji: "🍎", en: "Apple", phonetic: "แอ็พ-เพิ่ล", th: "แอปเปิล" },
      { emoji: "🍌", en: "Banana", phonetic: "บะ-แน-น่า", th: "กล้วย" },
      { emoji: "🍊", en: "Orange", phonetic: "ออ-เรนจ์", th: "ส้ม" },
      { emoji: "🍉", en: "Watermelon", phonetic: "วอ-เต้อร์-เม็ล-เลิ่น", th: "แตงโม" },
      { emoji: "🥭", en: "Mango", phonetic: "แมง-โก้", th: "มะม่วง" },
      { emoji: "🍇", en: "Grapes", phonetic: "เกรพส์", th: "องุ่น" },
      { emoji: "🍓", en: "Strawberry", phonetic: "สตรอ-เบอร์-รี่", th: "สตรอว์เบอร์รี" },
      { emoji: "🥥", en: "Coconut", phonetic: "โค-โค-นัท", th: "มะพร้าว" },
      { emoji: "🍍", en: "Pineapple", phonetic: "ไพ-แนพ-เพิ่ล", th: "สับปะรด" },
    ],
  },
  {
    label: "Vegetables · ผัก",
    items: [
      { emoji: "🥕", en: "Carrot", phonetic: "แค-เรียท", th: "แครอท" },
      { emoji: "🥬", en: "Cabbage", phonetic: "แค็บ-บิจ", th: "กะหล่ำปลี" },
      { emoji: "🥦", en: "Broccoli", phonetic: "บร็อก-โค-ลี่", th: "บร็อคโคลี" },
      { emoji: "🍅", en: "Tomato", phonetic: "โท-เม-โท", th: "มะเขือเทศ" },
      { emoji: "🧄", en: "Garlic", phonetic: "การ์-ลิค", th: "กระเทียม" },
      { emoji: "🧅", en: "Onion", phonetic: "อัน-เนี่ยน", th: "หัวหอม" },
      { emoji: "🌶️", en: "Chili", phonetic: "ชิล-ลี่", th: "พริก" },
      { emoji: "🌽", en: "Corn", phonetic: "คอร์น", th: "ข้าวโพด" },
    ],
  },
  {
    label: "Meat & Protein · เนื้อ",
    items: [
      { emoji: "🍗", en: "Chicken", phonetic: "ชิค-เก้น", th: "ไก่" },
      { emoji: "🥩", en: "Beef", phonetic: "บีฟ", th: "เนื้อวัว" },
      { emoji: "🥓", en: "Pork", phonetic: "พอร์ค", th: "หมู" },
      { emoji: "🐟", en: "Fish", phonetic: "ฟิช", th: "ปลา" },
      { emoji: "🍤", en: "Shrimp", phonetic: "ชริมพ์", th: "กุ้ง" },
      { emoji: "🥚", en: "Egg", phonetic: "เอ้ก", th: "ไข่" },
    ],
  },
  {
    label: "Staples · อาหารหลัก",
    items: [
      { emoji: "🍚", en: "Rice", phonetic: "ไรซ์", th: "ข้าว" },
      { emoji: "🍞", en: "Bread", phonetic: "เบรด", th: "ขนมปัง" },
      { emoji: "🍜", en: "Noodles", phonetic: "นู-เดิ่ลส์", th: "ก๋วยเตี๋ยว" },
      { emoji: "🧀", en: "Cheese", phonetic: "ชีส", th: "ชีส" },
      { emoji: "🥛", en: "Milk", phonetic: "มิลค์", th: "นม" },
      { emoji: "🧈", en: "Butter", phonetic: "บัท-เต้อร์", th: "เนย" },
    ],
  },
  {
    label: "Drinks · เครื่องดื่ม",
    items: [
      { emoji: "💧", en: "Water", phonetic: "วอ-เต้อร์", th: "น้ำ" },
      { emoji: "☕", en: "Coffee", phonetic: "คอฟ-ฟี่", th: "กาแฟ" },
      { emoji: "🍵", en: "Tea", phonetic: "ที", th: "ชา" },
      { emoji: "🧃", en: "Juice", phonetic: "จูส", th: "น้ำผลไม้" },
      { emoji: "🥤", en: "Soda", phonetic: "โซ-ด้า", th: "น้ำอัดลม" },
      { emoji: "🍺", en: "Beer", phonetic: "เบียร์", th: "เบียร์" },
    ],
  },
];

export function FoodContent() {
  return (
    <div className="space-y-10">
      {GROUPS.map((g) => (
        <section key={g.label} className="space-y-3">
          <Eyebrow>{g.label}</Eyebrow>
          <SubHeading>{g.items.length} items</SubHeading>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((it) => (
              <div
                key={it.en}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
                  {it.emoji}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-stone-900">{it.en}</div>
                  <div className="thai text-xs text-mint-700">{it.phonetic}</div>
                  <div className="thai text-[11px] text-stone-500">{it.th}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
