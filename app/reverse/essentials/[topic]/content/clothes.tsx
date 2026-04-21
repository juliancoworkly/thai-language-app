import { Callout, Eyebrow, SubHeading } from "../shell";

const TOPS = [
  { emoji: "👕", en: "T-shirt", phonetic: "ที-เชิ้ต", th: "เสื้อยืด" },
  { emoji: "👔", en: "Shirt", phonetic: "เชิ้ต", th: "เสื้อเชิ้ต" },
  { emoji: "🧥", en: "Jacket", phonetic: "แจ็ค-เก็ต", th: "แจ็คเก็ต" },
  { emoji: "🧥", en: "Coat", phonetic: "โค้ท", th: "เสื้อโค้ท" },
  { emoji: "🧶", en: "Sweater", phonetic: "สเวท-เต้อร์", th: "เสื้อกันหนาว" },
  { emoji: "👗", en: "Dress", phonetic: "เดรส", th: "เดรส" },
  { emoji: "👚", en: "Blouse", phonetic: "เบลาส์", th: "เสื้อเบลาส์" },
];

const BOTTOMS = [
  { emoji: "👖", en: "Jeans", phonetic: "จีนส์", th: "กางเกงยีนส์" },
  { emoji: "👖", en: "Trousers / Pants", phonetic: "ทราว-เซอร์ส / แพนท์ส", th: "กางเกงขายาว" },
  { emoji: "🩳", en: "Shorts", phonetic: "ชอร์ทส์", th: "กางเกงขาสั้น" },
  { emoji: "👗", en: "Skirt", phonetic: "สเกิร์ต", th: "กระโปรง" },
];

const FEET = [
  { emoji: "👟", en: "Sneakers", phonetic: "สนี-เก้อร์ส์", th: "รองเท้าผ้าใบ" },
  { emoji: "👞", en: "Shoes", phonetic: "ชูส์", th: "รองเท้า" },
  { emoji: "🥾", en: "Boots", phonetic: "บู้ทส์", th: "รองเท้าบู๊ต" },
  { emoji: "🩴", en: "Sandals / Flip-flops", phonetic: "แซน-เดิ่ลส / ฟลิป-ฟล็อพส์", th: "รองเท้าแตะ" },
  { emoji: "🧦", en: "Socks", phonetic: "ซ็อคส์", th: "ถุงเท้า" },
];

const ACCESSORIES = [
  { emoji: "🎩", en: "Hat", phonetic: "แฮท", th: "หมวก" },
  { emoji: "🧢", en: "Cap", phonetic: "แค็พ", th: "หมวกแก็ป" },
  { emoji: "👓", en: "Glasses", phonetic: "กลาส-เซ่ส", th: "แว่นตา" },
  { emoji: "🕶️", en: "Sunglasses", phonetic: "ซัน-กลาส-เซ่ส", th: "แว่นกันแดด" },
  { emoji: "🧣", en: "Scarf", phonetic: "สการ์ฟ", th: "ผ้าพันคอ" },
  { emoji: "🧤", en: "Gloves", phonetic: "โกลฟส์", th: "ถุงมือ" },
  { emoji: "👜", en: "Bag", phonetic: "แบ็ก", th: "กระเป๋า" },
  { emoji: "⌚", en: "Watch", phonetic: "ว็อช", th: "นาฬิกาข้อมือ" },
  { emoji: "💍", en: "Ring", phonetic: "ริง", th: "แหวน" },
];

export function ClothesContent() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <Eyebrow>ส่วนบน · Tops</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TOPS.map((t) => (
            <ItemCard key={t.en} {...t} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ส่วนล่าง · Bottoms</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {BOTTOMS.map((t) => (
            <ItemCard key={t.en} {...t} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>เท้า · Footwear</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {FEET.map((t) => (
            <ItemCard key={t.en} {...t} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>เครื่องประดับ · Accessories</Eyebrow>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ACCESSORIES.map((t) => (
            <ItemCard key={t.en} {...t} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <Eyebrow>ประโยคที่ใช้ในร้าน · In the shop</Eyebrow>
        <Callout label="ลองใช้ · Try it">
          <p><strong>Do you have this in blue?</strong> <span className="thai text-stone-500">มีสีฟ้าไหม</span></p>
          <p className="mt-1"><strong>What size is this?</strong> <span className="thai text-stone-500">ตัวนี้ไซส์อะไร</span></p>
          <p className="mt-1"><strong>Can I try it on?</strong> <span className="thai text-stone-500">ขอลองใส่ได้ไหม</span></p>
          <p className="mt-1"><strong>It's too small / big.</strong> <span className="thai text-stone-500">เล็กไป / ใหญ่ไป</span></p>
          <p className="mt-1"><strong>I'll take it.</strong> <span className="thai text-stone-500">เอาตัวนี้</span></p>
        </Callout>
      </section>
    </div>
  );
}

function ItemCard({ emoji, en, phonetic, th }: { emoji: string; en: string; phonetic: string; th: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-3">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-mint-50 text-2xl">
        {emoji}
      </div>
      <div className="min-w-0">
        <div className="font-bold text-stone-900">{en}</div>
        <div className="thai text-xs text-mint-700">{phonetic}</div>
        <div className="thai text-[11px] text-stone-500">{th}</div>
      </div>
    </div>
  );
}
