export type StampCategory = "self-ink" | "pre-ink" | "date" | "heavy-duty" | "round" | "special";

export interface Product {
  id: string;
  model: string;
  name: string;
  category: StampCategory;
  description: string;
  measurement: string;
  image: string;
  shape: "rectangle" | "round" | "triangle" | "oval";
}

// Shiny self-inking stamp product catalog
export const products: Product[] = [
  // Rectangle Self-Ink Stamps
  { id: "s-841", model: "S-841", name: "Shiny Printer S-841", category: "self-ink", description: "Compact self-inking stamp ideal for short text, initials, or small messages.", measurement: "10 × 26 mm", image: "/stamps/s-841.png", shape: "rectangle" },
  { id: "s-842", model: "S-842", name: "Shiny Printer S-842", category: "self-ink", description: "Self-inking stamp perfect for 3-line company stamps with contact details.", measurement: "14 × 38 mm", image: "/stamps/s-842.png", shape: "rectangle" },
  { id: "s-843", model: "S-843", name: "Shiny Printer S-843", category: "self-ink", description: "Medium self-inking stamp for 4-line company information and addresses.", measurement: "18 × 47 mm", image: "/stamps/s-843.png", shape: "rectangle" },
  { id: "s-844", model: "S-844", name: "Shiny Printer S-844", category: "self-ink", description: "Popular self-inking stamp for standard business stamps with full details.", measurement: "22 × 58 mm", image: "/stamps/s-844.png", shape: "rectangle" },
  { id: "s-845", model: "S-845", name: "Shiny Printer S-845", category: "self-ink", description: "Large self-inking stamp for company stamps with logo space.", measurement: "25 × 68 mm", image: "/stamps/s-845.png", shape: "rectangle" },
  { id: "s-846", model: "S-846", name: "Shiny Printer S-846", category: "self-ink", description: "Extra-large self-inking stamp for detailed company information.", measurement: "27 × 70 mm", image: "/stamps/s-846.png", shape: "rectangle" },
  { id: "s-826", model: "S-826", name: "Shiny Printer S-826", category: "date", description: "Self-inking date stamp with customizable text above and below date.", measurement: "24 × 41 mm", image: "/stamps/s-826.png", shape: "rectangle" },
  { id: "s-827", model: "S-827", name: "Shiny Printer S-827", category: "date", description: "Date stamp with extended text area for company name and date.", measurement: "25 × 50 mm", image: "/stamps/s-827.png", shape: "rectangle" },
  { id: "s-828", model: "S-828", name: "Shiny Printer S-828", category: "date", description: "Professional date stamp with ample space for text and date bands.", measurement: "33 × 56 mm", image: "/stamps/s-828.png", shape: "rectangle" },
  { id: "s-834", model: "S-834", name: "Shiny Printer S-834", category: "self-ink", description: "Versatile self-inking stamp for office use and documentation.", measurement: "22 × 58 mm", image: "/stamps/s-834.png", shape: "rectangle" },
  { id: "s-829", model: "S-829", name: "Shiny Printer S-829", category: "date", description: "Wide format date stamp for invoices and official documents.", measurement: "40 × 64 mm", image: "/stamps/s-829.png", shape: "rectangle" },
  { id: "s-837", model: "S-837", name: "Shiny Printer S-837", category: "self-ink", description: "Large format self-inking stamp with spacious impression area.", measurement: "40 × 64 mm", image: "/stamps/s-837.png", shape: "rectangle" },
  { id: "s-830", model: "S-830", name: "Shiny Printer S-830", category: "self-ink", description: "Extra-wide self-inking stamp for large format text and graphics.", measurement: "38 × 75 mm", image: "/stamps/s-830.png", shape: "rectangle" },
  { id: "s-510", model: "S-510", name: "Shiny Printer S-510", category: "self-ink", description: "Compact self-inking stamp for quick stamping tasks.", measurement: "12 × 26 mm", image: "/stamps/s-510.png", shape: "rectangle" },
  { id: "s-520", model: "S-520", name: "Shiny Printer S-520", category: "self-ink", description: "Slim self-inking stamp for narrow impression areas.", measurement: "4 × 40 mm", image: "/stamps/s-520.png", shape: "rectangle" },
  { id: "s-524", model: "S-524", name: "Shiny Printer S-524", category: "self-ink", description: "Mini self-inking stamp for quick marks and signatures.", measurement: "4 × 26 mm", image: "/stamps/s-524.png", shape: "rectangle" },
  { id: "s-530", model: "S-530", name: "Shiny Printer S-530", category: "self-ink", description: "Round self-inking stamp for small circular impressions.", measurement: "Ø 30 mm", image: "/stamps/s-530.png", shape: "round" },
  { id: "s-538", model: "S-538", name: "Shiny Printer S-538", category: "self-ink", description: "Mid-size self-inking stamp for professional use.", measurement: "14 × 38 mm", image: "/stamps/s-538.png", shape: "rectangle" },
  { id: "s-542", model: "S-542", name: "Shiny Printer S-542", category: "self-ink", description: "Versatile self-inking stamp for standard stamping needs.", measurement: "15 × 42 mm", image: "/stamps/s-542.png", shape: "rectangle" },
  { id: "s-308", model: "S-308", name: "Shiny Printer S-308", category: "self-ink", description: "Pocket-friendly self-inking stamp for mobile stamping.", measurement: "8 × 25 mm", image: "/stamps/s-308.png", shape: "rectangle" },
  { id: "s-310", model: "S-310", name: "Shiny Printer S-310", category: "self-ink", description: "Compact table-top self-inking stamp for office environments.", measurement: "12 × 26 mm", image: "/stamps/s-310.png", shape: "rectangle" },
  { id: "s-310a", model: "S-310A", name: "Shiny Printer S-310A", category: "self-ink", description: "Enhanced version with improved ink distribution system.", measurement: "12 × 26 mm", image: "/stamps/s-310a.png", shape: "rectangle" },
  { id: "s-831", model: "S-831", name: "Shiny Printer S-831", category: "self-ink", description: "High-quality self-inking stamp for professional office use.", measurement: "10 × 36 mm", image: "/stamps/s-831.png", shape: "rectangle" },
  { id: "s-832", model: "S-832", name: "Shiny Printer S-832", category: "self-ink", description: "Business-grade self-inking stamp for daily office operations.", measurement: "15 × 50 mm", image: "/stamps/s-832.png", shape: "rectangle" },
  { id: "s-833", model: "S-833", name: "Shiny Printer S-833", category: "self-ink", description: "Professional self-inking stamp for high-volume stamping.", measurement: "25 × 50 mm", image: "/stamps/s-833.png", shape: "rectangle" },

  // Special Shape Stamps
  { id: "s-tri-45", model: "S TRI-45", name: "Shiny Printer S TRI-45", category: "special", description: "Triangular self-inking stamp for unique triangular impressions.", measurement: "45 × 45 × 45 mm", image: "/stamps/s-tri-45.png", shape: "triangle" },
  { id: "o-3045", model: "O-3045", name: "Shiny Printer O-3045", category: "special", description: "Oval self-inking stamp for distinctive oval impressions.", measurement: "30 × 45 mm", image: "/stamps/o-3045.png", shape: "oval" },
  { id: "o-3555", model: "O-3555", name: "Shiny Printer O-3555", category: "special", description: "Large oval self-inking stamp for official oval seals.", measurement: "35 × 55 mm", image: "/stamps/o-3555.png", shape: "oval" },

  // Round Stamps
  { id: "r-512", model: "R-512", name: "Shiny Printer R-512", category: "round", description: "Small round self-inking stamp for compact circular marks.", measurement: "Ø 12 mm", image: "/stamps/r-512.png", shape: "round" },
  { id: "r-517", model: "R-517", name: "Shiny Printer R-517", category: "round", description: "Round self-inking stamp for small official seals.", measurement: "Ø 17 mm", image: "/stamps/r-517.png", shape: "round" },
  { id: "r-520", model: "R-520", name: "Shiny Printer R-520", category: "round", description: "Medium round stamp for inspection and approval marks.", measurement: "Ø 20 mm", image: "/stamps/r-520.png", shape: "round" },
  { id: "r-524", model: "R-524", name: "Shiny Printer R-524", category: "round", description: "Standard round self-inking stamp for company seals.", measurement: "Ø 24 mm", image: "/stamps/r-524.png", shape: "round" },
  { id: "r-532", model: "R-532", name: "Shiny Printer R-532", category: "round", description: "Professional round stamp for official company seals.", measurement: "Ø 32 mm", image: "/stamps/r-532.png", shape: "round" },
  { id: "r-538", model: "R-538", name: "Shiny Printer R-538", category: "round", description: "Large round stamp for prominent circular impressions.", measurement: "Ø 38 mm", image: "/stamps/r-538.png", shape: "round" },
  { id: "r-542", model: "R-542", name: "Shiny Printer R-542", category: "round", description: "Extra-large round stamp for government and official use.", measurement: "Ø 42 mm", image: "/stamps/r-542.png", shape: "round" },
  { id: "r-546", model: "R-546", name: "Shiny Printer R-546", category: "round", description: "Premium round stamp for large format circular impressions.", measurement: "Ø 46 mm", image: "/stamps/r-546.png", shape: "round" },
  { id: "r-552", model: "R-552", name: "Shiny Printer R-552", category: "round", description: "Maximum size round stamp for oversized official seals.", measurement: "Ø 52 mm", image: "/stamps/r-552.png", shape: "round" },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "self-ink", label: "Self Ink Stamps" },
  { id: "date", label: "Date Stamps" },
  { id: "round", label: "Round Stamps" },
  { id: "special", label: "Special Shapes" },
] as const;
