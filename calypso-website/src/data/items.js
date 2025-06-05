const ITEMS = [
  {
    name: "PIANO BENCH",
    id: "BA222",
    description:
      "Calypso BA222 Piano Bench: adjustable height with a built-in bookcase for easy access to sheet music. Comfort and convenience for every pianist!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "PIANO BENCH",
    id: "BA223",
    description:
      "Calypso BA223 Piano Bench: adjustable height with a convenient bookcase for storing sheet music. Perfect for comfort and organization during your practice!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "PIANO BENCH",
    id: "Q-90B",
    description:
      "Calypso Q-90B Adjustable Keyboard Bench: versatile and comfortable, featuring adjustable height for the perfect playing position. Ideal for musicians of all levels!",
    category: "ACCESSORIES",

    pictureUrl: [],
  },
  {
    name: "PIANO BENCH",
    id: "Q111T",
    description:
      "Calypso Q-111T Keyboard Bench: sturdy and comfortable, designed for optimal support during play. Perfect for musicians of all levels!",
    category: "ACCESSORIES",

    pictureUrl: [],
  },
  {
    name: "CABLE 3m",
    id: "X003",
    description:
      "Calypso X003 3m TS Cable: designed for reliability and superior sound quality, this cable ensures minimal interference for all your audio needs. Perfect for musicians and studio setups!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "CABLE 5m",
    id: "X005",
    description:
      "Calypso X005 5m TS Cable: built for durability and optimal sound quality, this cable minimizes interference for clear audio performance. Ideal for musicians and audio applications!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "BRAIDED CABLE 3m",
    id: "XA03",
    description:
      "Calypso XA03 3m Braided TS Cable: designed for durability and flexibility, this cable ensures excellent sound quality with minimal interference. Ideal for all your audio connections!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "braided cable 6m",
    id: "XA06",
    description:
      "Calypso XA06 6m Braided TS Cable: durable and flexible, this cable provides excellent sound quality and minimal interference. Ideal for musicians and audio setups!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "CYMBAL STAND",
    id: "G400",
    description:
      "Calypso G400 Cymbal Stand: sturdy and adjustable, designed for stability and ease of use. Perfect for drummers looking to enhance their setup!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "CYMBAL STAND",
    id: "G410",
    description:
      "Calypso G410 Cymbal Stand: robust and stable, featuring adjustable height for versatile positioning. Ideal for drummers seeking reliability and performance in their setup!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "DJEMBE STAND",
    id: "G201F",
    description:
      "Calypso G201F African Drum Stand: sturdy and designed for optimal support, this stand ensures your African drum is secure and accessible. Perfect for performances and practice!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "PRACTICE PAD",
    id: "G7012",
    description:
      "Calypso G7012 Practice Pad with Stand: features a durable pad for quiet practice and a sturdy adjustable stand. Perfect for drummers looking to refine their skills anywhere!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "FOOT STOOL",
    id: "J-46",
    description:
      "Calypso J-46 Foot Stool offers comfort and stability for musicians. With a cushioned top and sturdy construction, it's perfect for elevating your feet during practice or performances. Compact and stylish, it's easy to store and transport.",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "FOOT STOOL",
    id: "M-61",
    description:
      "Calypso M-61 Adjustable Foot Stool: designed for comfort and support, this foot stool features adjustable height for optimal playing posture. Perfect for musicians looking to enhance their performance!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "SELF-LOCK GUITAR STAND",
    id: "1BYC",
    description:
      "Calypso 1BYC Self-Lock Guitar Stand offers secure support for your guitar with its automatic locking mechanism. Designed for all guitar types, it features a sturdy build, adjustable height, and protective padding to prevent scratches. Lightweight and portable, it's perfect for home or on-the-go use!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "FLOOR STAND",
    id: "J-31B",
    description:
      "Calypso J-31B Guitar Stand: durable and stable, designed to securely hold your guitar while keeping it easily accessible. Ideal for home or studio use!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "UKULELE STAND",
    id: "J-40F",
    description:
      "Calypso J-40F Ukulele Stand: compact and sturdy, designed to securely hold your ukulele while showcasing its beauty. Perfect for home or stage use!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "HEADPHONES",
    id: "CH-08",
    description:
      "Calypso CH-08 Headphones deliver premium sound with deep bass and crisp audio. Designed for comfort, they feature plush ear cushions and a lightweight. Perfect for long listening sessions!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "KEYBOARD STAND",
    id: "Q-1XC",
    description:
      "Calypso Q-1XC Keyboard Stand: sleek X-shaped design for stability and support. Ideal for any keyboardist, whether at home or on stage!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "KEYBOARD STAND",
    id: "Q-2XC-2",
    description:
      "Calypso Q-2XC-2 Keyboard: durable double-X design for maximum stability, perfect for home or stage use. Ideal for all keyboardists!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "KEYBOARD STAND",
    id: "QA210C",
    description:
      "Calypso QA210C Keyboard Stand: features a sturdy double-X design and an ergonomic handle (Crocodile) for easy adjustments. Perfect for stability and comfort during performances!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "MICROPHONE STAND",
    id: "M-200",
    description:
      "Calypso M-200 Microphone Stand: adjustable and sturdy, designed for optimal stability and convenience. Perfect for live performances, rehearsals, or studio use!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "MUSIC STAND",
    id: "P-02",
    description:
      "Calypso P-02 Music Stand: compact and adjustable, designed for stability and convenience. Ideal for musicians needing reliable support for their sheet music!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "MUSIC STAND",
    id: "P-088",
    description:
      "Calypso P-088 Adjustable Music Stand: lightweight and portable, with adjustable height for optimal viewing. Perfect for musicians at home or on stage!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "MUSIC STAND",
    id: "PA200",
    description:
      "Calypso PA200 Music Stand: sturdy and adjustable, perfect for musicians seeking reliable support for their sheet music. Lightweight and portable for easy transport!",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "TUNER",
    id: "CCT-10",
    description:
      "\"Introducing the CCT-10: your ultimate companion for tuning and keeping time, compactly designed for musicians on the go. This versatile device combines the functionality of a tuner and a metronome in one sleek package.\nIn tuner mode, the CCT-10 offers precise tuning for a variety of instruments including Chromatic (C), Guitar (G), Bass (B), Ukulele (U), and Violin (V). With a detection range spanning from A0 (27.5Hz) to C8 (4186.00Hz) and a pitch range of 430Hz to 450Hz, you can achieve perfect tuning accuracy within 0.5 cent.\nSwitch seamlessly to metronome mode to practice with precision. The CCT-10 provides a tempo range from 30bpm to 260bpm and offers beats from 0 to 9, accommodating a wide range of musical styles and preferences.\nPowered by a built-in lithium battery (3.7V/110mAH), the CCT-10 ensures long-lasting performance. Compact in size with dimensions of 36.5*34*94 mm and weighing only 35g, it's designed for portability and convenience.\nIncluded with the CCT-10 are an owner's manual, 1 built-in lithium battery, and 1 USB charging line. Its 180° rotatory feature allows for easy switching between tuner mode and metronome mode, ensuring effortless usability.\nTake your tuning and timing to the next level with the CCT-10 – your reliable companion for practice sessions, performances, and rehearsals wherever your music takes you.\"",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "TUNER",
    id: "CT-01",
    description:
      '"Introducing the CT-01 Tuner: your essential tool for precision tuning, designed to accommodate a variety of instruments with ease. This compact tuner offers versatility and accuracy to enhance your musical performance.\nWith tuning modes including Chromatic, Guitar, Bass, Violin, and Ukulele, the CT-01 ensures compatibility with a wide range of instruments. Its two-color backlight system, with green indicating in-tune and white indicating out-of-tune, provides intuitive visual feedback for effortless tuning.\nOperating at a pitch range of 440Hz, the CT-01 delivers reliable performance with a detection accuracy of 0.5%. The included CR2032 battery ensures long-lasting power, while its compact dimensions of 29x75×50mm make it perfect for on-the-go musicians.\nExperience convenience and precision tuning in a compact package with the CT-01 Tuner, your trusted companion for musical excellence."',
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "CLARINET B FLAT",
    id: "CL804SI CL-ST",
    description:
      "Introducing the CL804SI CL-ST Bb Clarinet, a professional-grade instrument crafted to inspire and empower musicians of all levels. Constructed with precision and care, this clarinet features a sleek nickel-plated body with a modern matte finish, offering both durability and style. With its 17 keys and convenient thumb rest, players can navigate the instrument effortlessly, unlocking a world of musical possibilities. The double barrel design enhances tonal richness and flexibility, allowing for a nuanced and expressive performance. Complete with a sturdy canvas case for secure storage and transport, the CL804SI CL-ST Bb Clarinet is the perfect companion for your musical journey.",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "FLUTE",
    id: "FL805SI FL-YH",
    description:
      "Introducing the FL805SI FL-YH Flute, a sophisticated instrument designed for discerning musicians seeking precision and elegance. Crafted with meticulous attention to detail, this flute features a sleek silver-plated body that exudes timeless sophistication. With its 16-hole design and C key configuration, this flute offers a wide range of musical possibilities, perfect for both beginners and seasoned players alike. The inclusion of a split E mechanism and offset G key enhances playability and ensures smooth, effortless performance. Complete with a durable ABS case for secure storage and transportation, the FL805SI FL-YH Flute is the perfect choice for musicians who demand excellence in both sound and style. Elevate your musical journey with the FL805SI FL-YH Flute today.",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "SAXOPHONE ALTO",
    id: "AL802I SXA-ST",
    description:
      "Introducing the AL802I SXA-ST Alto Saxophone, a premium instrument designed to elevate your musical performance to new heights. Crafted with precision from high-quality yellow brass and finished with a lustrous gold lacquer, this saxophone boasts both exceptional sound quality and stunning visual appeal. Its Eb key configuration ensures smooth and effortless playability across various musical genres and styles. Plus, with the included durable canvas case, transporting and protecting your saxophone has never been easier. Elevate your musical journey with the AL802I SXA-ST Alto Saxophone today.",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "TROMBONE",
    id: "TB700 TRB-ST",
    description:
      "Introducing the TB700 TRB-ST Tenor Trombone, a premium brass instrument designed to elevate your musical performance to new heights. Crafted with precision from high-quality materials and finished with a brilliant gold lacquer, this trombone boasts both exceptional sound quality and stunning visual appeal. Featuring a bell diameter of φ203mm and a bore diameter of φ12.7mm, it delivers a rich and resonant tone with remarkable projection and clarity. The Bb key configuration ensures versatility across various musical genres and styles, while the included durable canvas case offers convenient storage and transportation. Elevate your musical journey with the TB700 TRB-ST Tenor Trombone today.",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "TRUMPET",
    id: "TP807LI TR-ST",
    description:
      "Introducing the TP807LI TR-ST Trumpet, an exceptional instrument meticulously crafted to meet the demands of discerning musicians. Constructed from premium yellow brass and adorned with a radiant gold lacquer finish, this trumpet not only exudes elegance but also delivers unparalleled sound quality and projection. Equipped with a roso brass leadpipe, it offers enhanced responsiveness and clarity across the entire range, allowing players to achieve their desired tonal palette with ease. Complete with a durable canvas case, the TP807LI TR-ST Trumpet is the perfect choice for both aspiring and seasoned trumpet players alike, promising years of musical excellence and enjoyment. Elevate your performance with the TP807LI TR-ST Trumpet today.",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "ACOUSTIC DRUMS",
    id: "DR-INT",
    description:
      '"Calypso DR-INT Intermediate Acoustic Drum Set\nTake your drumming to the next level with our Intermediate Acoustic Drum Set. This 6-piece kit is designed for musicians ready to enhance their skills and explore new rhythms.\nSet Includes:\nKick Drum: 22""\nSnare Drum: 14""\nTom 1: 10""\nTom 2: 12""\nFloor Tom: 14""\nHi-Hat: 14""\nCrash Cymbal: 16""\nRide Cymbal: 17""\nMaterials: Made from premium New Zealand pine wood and durable Chinese poplar, this set delivers a rich, resonant sound perfect for any genre.\nIncluded: Comes with a comfortable stool and all necessary stands, making it easy to set up and start playing right away.\nDesigned for durability and performance, this drum set inspires creativity and growth. Upgrade your drumming experience today!\n"',
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "ACOUSTIC DRUMS",
    id: "DR-ST",
    description:
      '"Calypso DR-St Student Acoustic Drum Set, designed for aspiring drummers looking to make their mark! This 5-piece kit includes:\n\nKick Drum: 22""\nSnare Drum: 14""\nTom 1: 10""\nTom 2: 12""\nFloor Tom: 16""\nHi-Hat: 14""\nCrash Cymbal: 16""\nCrafted from high-quality New Zealand pine wood and durable Chinese poplar, this set offers a rich, resonant sound that enhances your playing experience.\n\nComplete with a comfortable stool and all necessary stands, this drum set provides everything you need to start your musical journey. Perfect for students, it’s built for durability and ease of use, inspiring creativity and skill development from day one."',
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "TABEL",
    id: "TBL-MT-18",
    description:
      'Calypso TBL-MT 18-Inch Oriental Bass Drum, or "Tabol," delivers deep, resonant tones perfect for both traditional and contemporary music. Crafted for durability and featuring an elegant design, it’s ideal for solo performances or ensemble settings. Elevate your sound with the TBL-MT Tabol!',
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "TABEL",
    id: "TBL-MT-20",
    description:
      'Calypso TBL-MT 20-Inch Oriental Bass Drum, or "Tabol," delivers deep, resonant tones perfect for both traditional and contemporary music. Crafted for durability and featuring an elegant design, it’s ideal for solo performances or ensemble settings. Elevate your sound with the TBL-MT Tabol!',
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "TABEL",
    id: "TBL-MT-22",
    description:
      'Calypso TBL-MT 22-Inch Oriental Bass Drum, or "Tabol," delivers deep, resonant tones perfect for both traditional and contemporary music. Crafted for durability and featuring an elegant design, it’s ideal for solo performances or ensemble settings. Elevate your sound with the TBL-MT Tabol!',
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "LIGHTENING TABEL",
    id: "TBL-RD-TRSP",
    description:
      '"Calypso TBL-RD-TRSP Lightning Drum delivers vibrant sound with powerful tones, perfect for various music styles. Its durable build and eye-catching lightning design make it ideal for both solo performances and ensemble settings. Elevate your sound with the Lightning Drum!\n\n\n"',
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "MARCHING SNARE",
    id: "MCH-ST14",
    description:
      "Calypso MCH-ST14 Marching Snare offers precision and a crisp, resonant sound, making it perfect for marching bands. Its durable yet lightweight design ensures easy transport, while adjustable straps provide a comfortable fit. Elevate your performance with this essential snare!",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "MARCHING BASS",
    id: "MCH-ST24",
    description:
      "Calypso Marching Bass MCH-ST24 delivers powerful sound and durability, making it ideal for marching bands. With a lightweight design and adjustable straps, it’s easy to carry and comfortable to play. Elevate your performance with this robust bass drum!",
    category: "Brass and Wind",
    pictureUrl: [],
  },
  {
    name: "ACOUSTIC BASS",
    id: "AC-BAS47-EQ-BK 1",
    description:
      "Introducing the Calypso AC-BAS47-EQ-BK acoustic bass guitar. With a sleek 47-inch cutaway body featuring white binding line, this instrument offers both style and functionality. Equipped with a neck truss rod and a 4-band EQ, it ensures optimal sound control and versatility. The elegant black color complements its top-grade Spruce top and Sapele back & sides. The Rosewood fingerboard and Nato neck provide smooth playability and durability. Designed by Calypso in Montreal, Canada, and meticulously handmade in China using carefully selected lumber and exotic materials, this bass guitar delivers exceptional quality and performance.",
    category: "Guitar and Bass",
    pictureUrl: [],
  },
  {
    name: "CLASSICAL GUITAR",
    id: "CL39",
    description:
      "Introducing our latest model featuring premium linden wood construction for the top, back, and sides, providing a rich and resonant tone. The sleek dyed plywood fingerboard offers both durability and aesthetic appeal. With a clean design free of binding lines and finished in a sophisticated brown color, this instrument is a stylish addition to any collection.",
    category: "Guitar and Bass",
    pictureUrl: [],
  },
  {
    name: "CLASSICAL GUITAR",
    id: "CL-INT39",
    description:
      "Introducing the Calypso CL-INT39 Classic Guitar. With a 39-inch body featuring white binding line and neck truss rod, this instrument offers both elegance and functionality. Crafted with a Spruce top and Linden back & sides, it delivers a rich, resonant tone. The dyed plywood fingerboard adds a touch of sophistication to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-INT39 Classic Guitar represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "Guitar and Bass",
    pictureUrl: [],
  },
  {
    name: "ELECTRIC GUITAR",
    id: "MF-805 SB",
    description:
      '"Calypso MF-805 Electric Guitar\n\nThe Model MF-805 features a solid alder body with a flamed maple top for stunning visuals and rich tone. Its maple neck and rosewood fingerboard ensure smooth playability.\n\nWith H-H pickups, it delivers powerful sound, controlled by 1 volume and 1 tone knob with a 3-way blade switch. Finished in a glossy 2TS color, this guitar is perfect for any player.\n\nTune it standard (E, A, D, G, B, E) and let your music shine!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRIC GUITAR",
    id: "MST-BK",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRIC GUITAR",
    id: "MST-BL",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRIC GUITAR",
    id: "MST-RD",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRIC GUITAR",
    id: "MST-SB",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "SILENT ELECTRO-ACOUSTIC GUITAR",
    id: "EA-NAT",
    description:
      "Calypso Silent Electro Acoustic Guitar EA-NAT combines exceptional craftsmanship with advanced technology to deliver a superior playing experience. It features a solid Spruce top for a bright and resonant tone, complemented by an Okoume body that adds warmth and depth. The Mahogany neck ensures smooth, comfortable playability, while the Technical Rosewood fingerboard and bridge enhance durability and tonal richness. The glossy natural finish adds a touch of elegance to its classic design. Equipped with SAVAREZ strings for a vibrant, dynamic sound and a piezo preamp undersaddle bridge for precise amplification, this guitar is perfect for both practice and performance. It also includes a 10mm padded bag for secure protection and easy transport.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "SILENT ELECTRO-ACOUSTIC GUITAR",
    id: "EA-SB",
    description:
      "Calypso Silent Electro Acoustic Guitar EA-SB offers a blend of traditional craftsmanship and modern performance features. It features a solid Spruce top that delivers a bright, resonant tone, paired with an Okoume body that provides warmth and depth. The Mahogany neck ensures smooth and comfortable playability, while the Technical Rosewood fingerboard and bridge enhance both durability and tonal richness. Finished in a sleek, glossy design, this guitar combines elegance with advanced functionality. Equipped with SAVAREZ strings for a vibrant sound and a piezo preamp undersaddle bridge for accurate amplification, it’s ideal for both practice and performance. The guitar comes with a 10mm padded bag for secure protection and convenient transport.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-ACOUSTIC GUITAR",
    id: "FG38-SLM-EQ",
    description:
      "Introducing the Calypso FG38-SLM-EQ Folk Guitar. With a sleek 38-inch slim body featuring a curved design, white binding line, neck truss rod, and an equalizer, this instrument offers enhanced playability and versatile sound control. Crafted with Linden for the top, back, and sides, it delivers a balanced tone with clarity and warmth. The dyed plywood fingerboard adds a touch of sophistication to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the FG38-SLM-EQ Folk Guitar embodies quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-ACOUSTIC GUITAR",
    id: "FG40-008-SLM-SB-EQ",
    description:
      "Introducing the Calypso FG40-088-SLM-SB-EQ Folk Guitar. With a sleek 40-inch slim body featuring a cutaway, white binding line, neck truss rod, and an equalizer, this instrument offers enhanced playability and precise sound control. Crafted with a Spruce top and Rosewood back & sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard and Nato neck ensure smooth playability and durability. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the FG40-088-SLM-SB-EQ Folk Guitar embodies quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-ACOUSTIC GUITAR",
    id: "FG41-INT-EQ",
    description:
      "Introducing the FG41-INT-EQ: an exceptional acoustic guitar designed for versatile performance. Crafted with a spruce top and linden back/sides, this model delivers a rich, resonant tone suitable for various musical styles. The dyed fingerboard and half-cast machine head ensure durability and smooth playability. Finished in a sophisticated brown color, this guitar exudes timeless elegance. Equipped with an MT-3 EQ, it offers precise sound control, making it an ideal choice for musicians seeking flexibility and quality in their sound.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-ACOUSTIC GUITAR",
    id: "FG41-INT-SLM-EQ",
    description:
      "Introducing the FG41-INT-SLM-EQ: a versatile acoustic guitar crafted for exceptional performance. Featuring a spruce top and linden back/sides, this model delivers a rich, resonant tone perfect for various musical styles. The dyed fingerboard and half-cast machine head ensure durability and smooth playability. Finished in a sophisticated brown color, this guitar exudes timeless elegance. With its slim design and equipped with an MT-3 EQ, it offers precise sound control and comfortable playability, making it an ideal choice for musicians of all levels.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ACOUSTIC PIANO",
    id: "BABY GRAND BLACK",
    description: "",
    category: "PIANO",
    pictureUrl: [],
  },
  {
    name: "ACOUSTIC PIANO",
    id: "BABY GRAND WALLNUT",
    description: "",
    category: "PIANO",
    pictureUrl: [],
  },
  {
    name: "ACOUSTIC PIANO",
    id: "BABY GRAND WHITE",
    description: "",
    category: "PIANO",
    pictureUrl: [],
  },
  {
    name: "DIGITAL KEYBOARD",
    id: "PK1",
    description:
      '"Introducing the Calypso PK-1, a cutting-edge digital piano designed for musicians on the move. Available in sleek black, Red or pristine white, this portable digital piano combines convenience with professional-grade features.\n\nFeaturing a semi-weight standard keyboard powered by the Pure France DREAM 5 sound source, the Calypso PK-1 delivers exceptional sound quality and realistic playing experience with 128-note polyphony. Its extensive library boasts 200 tones, including 128 GM standard tones, and 60 dynamic demos to inspire your creativity.\n\nEquipped with a powerful record/play function and Bluetooth connectivity, you can effortlessly connect your phone or computer to play songs and integrate with compatible learning software. The auto sleep mode activates after 30 minutes of inactivity, conserving energy without interrupting your flow.\n\nEnhance your practice sessions with the built-in metronome offering nine different rhythms and a tempo range of 20 to 280 beats per minute. Plus, take advantage of the four sets of storage memory function keys for easy access to your favorite settings.\n\nAdditional features include split note, dual, reverb level, chorus level, percussion, USB jack for unlimited song recording storage, headphone outputs, MIDI IN/OUT, and audio in/out for seamless connectivity to your devices.\n\nPowered by a 15V3A adapter and featuring 12W speakers, the Calypso PK-1 ensures powerful sound projection for your performances. Plus, with the option to add a sustain pedal (choose from three pedals), you can truly customize your playing experience.\n\nExperience the ultimate blend of portability and performance with the Calypso PK-1 digital piano – your perfect musical companion wherever you go."',
    category: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "DIGITAL KEYBOARD",
    id: "PN-2",
    description:
      "Calypso PN-2 Digital Keyboard offers a wide range of instrument voices and rhythms in a lightweight, portable design. With intuitive controls and built-in speakers, it’s perfect for musicians on the go. Elevate your music-making experience with the PN-2!",
    category: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "SONATA KEYBOARD",
    id: "K-700",
    description:
      '"Calypso K-700 Digital Keyboard\nDiscover the Calypso K-700 Digital Keyboard—a perfect blend of innovation and creativity for musicians of all levels.\n\nKey Features:\n\n61 Light-Up Keys: Learn and play with ease as the keys illuminate to guide you through your musical journey.\n255 Timbres & 255 Rhythms: Explore a diverse range of sounds and backing styles to enrich your performances.\n50 Demo Songs: Get inspired and practice with a selection of professionally arranged songs.\nMetronome: Improve your timing and rhythm with the integrated metronome feature.\nAuto Bass Chords: Effortlessly create bass lines and chord progressions for a fuller sound.\nEffects: Enhance your music with various effects to add depth and character.\nRecording & Rhythm Programming: Capture your creative ideas and compose your own unique tracks."',
    category: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "SONATA KEYBOARD",
    id: "K-600",
    description:
      '"Calypso K-600 Digital Keyboard\nFeatures:\n\n61 Touch-Sensitive Keys: Enjoy a responsive and dynamic playing experience.\n255 Timbres: Access a wide range of sounds to enhance your music.\n50 Demo Songs: Play along with built-in tracks for inspiration and practice.\n255 Rhythms: Dive into a diverse selection of rhythms to explore various styles.\nAuto Bass Chords: Easily add depth to your music with automatic bass support.\nRecording & Effects: Capture your creations and apply effects for a professional touch.\nMetronome: Stay on beat during practice sessions with the built-in metronome.\nRhythm Programming: Create custom rhythms tailored to your unique sound."',
    category: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "SONATA KEYBOARD",
    id: "ST-200",
    description:
      '"Calypso ST-200 Digital Keyboard\nFeatures:\n\n61 Touch-Sensitive Keys: Experience expressive playing with responsive keys.\n255 Timbres: Enjoy a wide variety of sounds to fuel your creativity.\n255 Rhythms: Explore diverse musical genres with an extensive rhythm selection.\n24 Demo Songs: Play along with built-in tracks to inspire your compositions.\nAuto Bass Chords: Enhance your playing effortlessly with automatic bass support.\nRecording & Effects: Capture your music and apply effects for a polished sound.\nMetronome: Practice with precision using the built-in metronome.\nRhythm Programming: Customize and create unique rhythms to suit your style."',
    category: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "SONATA KEYBOARD",
    id: "ST-100",
    description:
      '"Calypso ST-100 Digital Keyboard\nFeatures:\n\n61 Touch-Sensitive Keys: Responsive keys for a dynamic playing experience.\n300 Timbres: A diverse selection of sounds to inspire your creativity.\n300 Rhythms: Explore various musical styles with an extensive rhythm library.\n21 Demo Songs: Play along with built-in songs to spark your imagination.\nAuto Bass Chords: Effortlessly add depth to your music with automatic bass support.\nRecording & Effects: Capture your ideas and enhance your sound with built-in effects.\nMetronome: Keep perfect time while practicing or composing.\nRhythm Programming: Create custom arrangements tailored to your style."',
    category: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "BANJO 5 STRINGS",
    id: "BJ52",
    description:
      'Introducing the Calypso BJ52 5-string banjo. With a sleek 26" body in a vibrant sunburst finish, this instrument exudes style. Crafted with a Spruce top and Mahogany back & sides, it delivers rich, resonant tones. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the BJ52 offers exceptional quality and playability.',
    category: "BANJO",
    pictureUrl: [],
  },
  {
    name: "BONJOLA",
    id: "BJA-ADV-29-EQ",
    description:
      "Introducing the Calypso BJA-ADV-29-EQ Banjola. Featuring a 29-inch body with an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a solid Spruce top and Mahogany back & sides, it delivers rich, resonant tones. The Rosewood fingerboard adds a touch of elegance to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the BJA-ADV-29-EQ Banjola combines premium craftsmanship with superior playability.",
    category: "BANJO",
    pictureUrl: [],
  },
  {
    name: "CUATRO 12 inch",
    id: "CU-ADV-12-EQ",
    description:
      "Introducing the Calypso CU-ADV-12-EQ Cuatro. Featuring a compact 12-inch body with an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a solid Spruce top and Maple back & sides, it delivers a crisp, resonant tone. The Rosewood fingerboard adds warmth and smooth playability. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-ADV-12-EQ Cuatro represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "CUATRO",
    pictureUrl: [],
  },
  {
    name: "CUATRO 15 inch",
    id: "CU-ADV-15-EQ",
    description:
      "Introducing the Calypso CU-ADV-15-EQ Cuatro. With a versatile 15-inch body featuring an integrated equalizer, this instrument offers exceptional sound control and resonance. Crafted with a solid Spruce top and Maple back & sides, it delivers a vibrant, well-balanced tone. The Rosewood fingerboard ensures smooth playability and adds to the instrument's elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-ADV-15-EQ Cuatro represents a fusion of craftsmanship and musical excellence.",
    category: "CUATRO",
    pictureUrl: [],
  },
  {
    name: "CUATRO 17 inch",
    id: "CU-ADV-17-EQ",
    description:
      "Introducing the Calypso CU-ADV-17-EQ Cuatro. With a spacious 17-inch body and an integrated equalizer, this instrument offers exceptional resonance and sound control. Crafted with a solid Spruce top and Maple back & sides, it delivers a rich, vibrant tone. The Rosewood fingerboard ensures smooth playability and adds a touch of elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-ADV-17-EQ Cuatro embodies quality craftsmanship and musical excellence.",
    category: "CUATRO",
    pictureUrl: [],
  },
  {
    name: "CUATRO BASS",
    id: "CU-BS-ADV-33-EQ",
    description:
      "Introducing the Calypso CU-BS-ADV-33-EQ Bass Cuatro. With a commanding 33-inch body and an integrated equalizer, this instrument offers exceptional resonance and precise sound control. Crafted with a solid Spruce top and Maple back & sides, it delivers a deep, resonant bass tone with clarity and warmth. The Rosewood fingerboard ensures smooth playability and adds to the instrument's elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-BS-ADV-33-EQ Bass Cuatro represents the pinnacle of craftsmanship and musical excellence.",
    category: "CUATRO",
    pictureUrl: [],
  },
  {
    name: "HANDPAN BLACK",
    id: "HP-1BK",
    description:
      "Introducing the Calypso Handpan, a captivating musical instrument meticulously crafted to deliver unparalleled sound quality and durability. Featuring 22 inches with 10 pre-tuned notes in D Minor, including a distinctive center note (Ding) at D3, and 9 accompanying notes ranging from A3 to C5. Constructed from premium Nitrogen Steel material and enhanced through a meticulous Nitriding Heating process, the Calypso Handpan produces ethereal, warm tones with vibrant overtones. Its unique rubber edging design enhances sound collection, reduces dissonant resonance, and ensures clear overtones for a delightful auditory experience. Each handpan undergoes boundless manual tuning, resulting in finely controlled tightness across different sound areas, yielding balanced volume and an ethereal tone unique to each instrument. Complete with a versatile Calypso Drum Bag, which doubles as a backpack or handbag, providing comprehensive protection against scratches, impacts, and moisture, making it effortlessly portable for musicians on the go. Experience the harmonious blend of craftsmanship and musicality with the Calypso Handpan.",
    category: "HANDPAN",
    pictureUrl: [],
  },
  {
    name: "HANDPAN GOLDEN STORM",
    id: "HP-1GDST",
    description:
      "Introducing the Calypso Handpan, a captivating musical instrument meticulously crafted to deliver unparalleled sound quality and durability. Featuring 22 inches with 10 pre-tuned notes in D Minor, including a distinctive center note (Ding) at D3, and 9 accompanying notes ranging from A3 to C5. Constructed from premium Nitrogen Steel material and enhanced through a meticulous Nitriding Heating process, the Calypso Handpan produces ethereal, warm tones with vibrant overtones. Its unique rubber edging design enhances sound collection, reduces dissonant resonance, and ensures clear overtones for a delightful auditory experience. Each handpan undergoes boundless manual tuning, resulting in finely controlled tightness across different sound areas, yielding balanced volume and an ethereal tone unique to each instrument. Complete with a versatile Calypso Drum Bag, which doubles as a backpack or handbag, providing comprehensive protection against scratches, impacts, and moisture, making it effortlessly portable for musicians on the go. Experience the harmonious blend of craftsmanship and musicality with the Calypso Handpan.",
    category: "HANDPAN",
    pictureUrl: [],
  },
  {
    name: "HANDPAN SPIRAL DEEP GOLD",
    id: "HP-SPDGD",
    description:
      "Introducing the Calypso Handpan, a captivating musical instrument meticulously crafted to deliver unparalleled sound quality and durability. Featuring 22 inches with 10 pre-tuned notes in D Minor, including a distinctive center note (Ding) at D3, and 9 accompanying notes ranging from A3 to C5. Constructed from premium Nitrogen Steel material and enhanced through a meticulous Nitriding Heating process, the Calypso Handpan produces ethereal, warm tones with vibrant overtones. Its unique rubber edging design enhances sound collection, reduces dissonant resonance, and ensures clear overtones for a delightful auditory experience. Each handpan undergoes boundless manual tuning, resulting in finely controlled tightness across different sound areas, yielding balanced volume and an ethereal tone unique to each instrument. Complete with a versatile Calypso Drum Bag, which doubles as a backpack or handbag, providing comprehensive protection against scratches, impacts, and moisture, making it effortlessly portable for musicians on the go. Experience the harmonious blend of craftsmanship and musicality with the Calypso Handpan.",
    category: "HANDPAN",
    pictureUrl: [],
  },
  {
    name: "INTERMEDIATE CELLO",
    id: "MC760R",
    description:
      "Introducing the Calypso Intermediate Cello, a refined instrument designed for advancing cellists seeking a higher level of performance. With a solid spruce top and solid maple back, this cello produces a rich, resonant sound with exceptional projection and depth. The rosewood parts add a touch of sophistication to the instrument's appearance, complementing its elegant design. Whether you're honing your skills in rehearsals or captivating audiences on stage, the Calypso Intermediate Cello delivers unparalleled tonal clarity and dynamic range. Elevate your musical expression and unlock new possibilities with the Calypso Intermediate Cello, where craftsmanship meets artistry for an unforgettable playing experience.",
    category: "CELLO",
    pictureUrl: [],
  },
  {
    name: "STUDENT CELLO",
    id: "MC760L",
    description:
      "Introducing the Calypso Student Cello, a reliable companion for beginner cellists embarking on their musical journey. Crafted with a laminated spruce top and laminated maple back, this cello offers durability and resilience while producing clear and balanced tones. The rosewood parts add a touch of elegance to the instrument's appearance, enhancing its aesthetic appeal. Whether you're practicing at home or performing in a school orchestra, the Calypso Student Cello provides a comfortable playing experience and reliable performance. Dive into the world of music with confidence and passion, supported by the reliability and affordability of the Calypso Student Cello.",
    category: "CELLO",
    pictureUrl: [],
  },
  {
    name: "VIOLA ADVANCED C",
    id: "MVA12C",
    description:
      "Experience the pinnacle of craftsmanship and performance with the Calypso Advanced C Viola. Meticulously crafted with a solid spruce top and maple back and sides, this viola delivers a rich, resonant sound that captivates audiences and inspires players alike. The luxurious rosewood fingerboard and pegs offer a smooth and comfortable playing experience, allowing for effortless expression and control. Enhanced with a wengue tailpiece and chinrest, the Calypso Advanced C Viola embodies elegance and sophistication, both in appearance and sound. Elevate your musical journey with the precision and artistry of the Calypso Advanced C Viola, where unparalleled quality meets timeless beauty.",
    category: "VIOLA",
    pictureUrl: [],
  },
  {
    name: "VIOLA CONCERT 12E",
    id: "MVA012E",
    description:
      "Introducing the Calypso Concert 12E Viola, a masterpiece of elegance and precision designed for the discerning musician. Crafted with a solid spruce top and maple back and sides, this viola resonates with a rich, full-bodied sound that fills the concert hall with warmth and depth. The ebony fingerboard, pegs, and chinrest provide a luxurious playing experience, offering smoothness and stability that elevate your performance to new heights. Enhanced with a sleek metal tailpiece, the Calypso Concert 12E Viola ensures impeccable tuning and reliability, allowing you to focus on your artistry without distraction. Immerse yourself in the unparalleled beauty and craftsmanship of the Calypso Concert 12E Viola, where every note is a masterpiece and every performance is unforgettable.",
    category: "VIOLA",
    pictureUrl: [],
  },
  {
    name: "VIOLA CONCERT 13E",
    id: "MVA013E",
    description:
      "Introducing the Calypso Concert 13E Viola, a pinnacle of craftsmanship and performance. Crafted with a solid spruce top and maple back and sides, this viola delivers a rich, resonant sound that commands attention in any concert hall. The ebony fingerboard, pegs, and chinrest provide a luxurious playing experience, offering smoothness and stability for effortless expression. Enhanced with an aluminum tailpiece, the Calypso Concert 13E Viola ensures impeccable tuning and reliability, allowing you to focus on your artistry without distraction. Immerse yourself in the unparalleled beauty and craftsmanship of the Calypso Concert 13E Viola, where every note sings with clarity and depth, and every performance is unforgettable.",
    category: "VIOLA",
    pictureUrl: [],
  },
  {
    name: "VIOLA CONCERT B",
    id: "MVA013B",
    description:
      "Step into the world of musical excellence with the Calypso Concert B Viola. Handcrafted with a solid spruce top and maple back and sides, this viola delivers a refined and resonant sound that captivates audiences with its depth and clarity. The rosewood fingerboard ensures smooth and precise playability, while the boxwood pegs, tailpiece, and chinrest add an elegant touch of sophistication. Whether you're performing on stage or practicing at home, the Calypso Concert B Viola promises a premium playing experience, combining exquisite craftsmanship with superior tone quality. Elevate your musical journey to new heights with the Calypso Concert B Viola, where artistry and tradition converge in perfect harmony.",
    category: "VIOLA",
    pictureUrl: [],
  },
  {
    name: "VIOLA INTERMEDIATE",
    id: "MV406RSMC",
    description:
      "Introducing the Calypso Intermediate Viola - a harmonious blend of craftsmanship and quality, designed to elevate your musical expression. Crafted with a solid spruce top and maple back and sides, this viola resonates with clarity and warmth, allowing your melodies to soar effortlessly. The rich tones are complemented by a luxurious rosewood fingerboard, pegs, and chinrest, offering a smooth and comfortable playing experience. Complete with a durable metal tailpiece, the Calypso Intermediate Viola is built to withstand the demands of your musical journey, ensuring reliability and performance every time you play. Immerse yourself in the enchanting world of music with the Calypso Intermediate Viola, where tradition meets innovation for a truly unforgettable playing experience.",
    category: "VIOLA",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "HM-1416",
    description:
      '"Calypso HM-1416 Hand-Crafted Violin Outfit – Superior Craftsmanship and Exceptional Sound.\nThe Calypso Hand-Crafted Violin Outfit is a masterpiece, meticulously crafted for discerning musicians. Featuring a solid hand-crafted spruce soundboard top and solid hand-crafted flame maple back and sides, this violin offers superior tone and resonance, ideal for serious players.\nThe hand-crafted neck and scroll with flame detailing, combined with carefully inlaid purfling, reflect the attention to detail and expert craftsmanship. Upgraded with ebony fittings—including the fingerboard, pegs, and chinrest—the violin is equipped with a carbon composite tailpiece with four built-in fine tuners for precise tuning. The Swiss eye peg ensures smooth and stable peg adjustments.\nWith aluminum-magnesium composite steel strings and a seasoned hand-carved bridge, this violin delivers outstanding sound quality, projection, and durability.\nIncludes:\nVLS95AC Lightweight Oblong Violin Case (Foam Shell)\nMVB24 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nA stunning violin outfit for advanced players who demand unparalleled craftsmanship and performance."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1411",
    description:
      '"Calypso INT-1411 Full Solid Carved Violin Outfit – Rich Tone & Craftsmanship\nCrafted for advancing students and serious beginners, the Calypso Full Solid Carved Violin offers enhanced resonance and response. Built with a solid carved spruce top and solid carved maple back, sides, and neck, it delivers warm, expressive tone and lasting durability.\nThis model features inlaid purfling, a classic yellow-brown glossy finish, and black-dyed hardwood fittings. The aluminum tailpiece includes 4 built-in fine tuners, while strong steel strings and a seasoned, hand-carved bridge provide excellent playability and tuning stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA solid choice for players ready to elevate their sound with true carved wood quality."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1413AT",
    description:
      '"Calypso INT-1413AT Ebony Fitting Solid Wood Violin Outfit – Premium Feel, Classic Sound\nDesigned for advancing players, the Calypso Ebony Fitting Violin Outfit offers exceptional tone and refined aesthetics. Built with a solid carved spruce top and solid carved maple back, sides, and neck, this model provides rich resonance and excellent projection.\nFinished in an elegant antique brown matte (ABM), it features inlaid purfling and upgraded ebony fittings—fingerboard, pegs, and chinrest—for enhanced durability and smoother playability. The aluminum tailpiece includes 4 built-in fine tuners, paired with strong steel strings and a seasoned, hand-carved bridge for optimal sound and tuning stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow with a Brazilwood stick and ebony frog\nRosin & Strong Nylon Hanger\nA stylish and high-performing violin outfit for dedicated students and intermediate players."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1413PH",
    description:
      '"Calypso INT-1413PH  Ebony Fitting Solid Wood Violin Outfit – Premium Feel, Classic Sound\nDesigned for advancing players, the Calypso Ebony Fitting Violin Outfit offers exceptional tone and refined aesthetics. Built with a solid carved spruce top and solid carved maple back, sides, and neck, this model provides rich resonance and excellent projection.\nFinished in a warm Antique Brown Matte (ABM), it features inlaid purfling and upgraded ebony fittings—fingerboard, pegs, and chinrest—for enhanced durability and smoother playability. The aluminum tailpiece includes four built-in fine tuners, paired with strong steel strings and a seasoned, hand-carved bridge for optimal sound and tuning stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow – Brazilwood Stick & Ebony Frog\nRosin & Strong Nylon Hanger\nA stylish, high-performing violin outfit ideal for dedicated students and intermediate players."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1413YA",
    description:
      '"Calypso INT-1413YA Ebony Fitting Solid Wood Violin Outfit – Enhanced Craftsmanship, Superior Sound\nThe Calypso Ebony Fitting Solid Wood Violin Outfit is designed for players seeking both premium quality and exceptional sound. Featuring a solid carved spruce soundboard top and solid carved maple body & neck, this violin offers rich resonance and great projection.\nWith inlaid purfling and ebony fittings—including the fingerboard, pegs, chinrest, and Swiss eye peg—this violin combines aesthetic elegance with robust functionality. The aluminum tailpiece includes 4 built-in fine tuners for accurate tuning, and the strong steel strings and seasoned hand-carved bridge ensure excellent tone and stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nA sophisticated and reliable violin outfit designed for dedicated students and advancing musicians."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1415BW",
    description:
      '"Calypso INT-1415BW Ebony Fitting Solid Wood Violin Outfit – Premium Craftsmanship, Enhanced Performance\nThe Calypso Ebony Fitting Solid Wood Violin Outfit is a premium choice for advancing players. Featuring a solid carved spruce top and solid carved maple body & neck, it offers rich tone and great resonance. The inlaid purfling adds an elegant touch to the design.\nUpgraded with ebony fittings—including the fingerboard, pegs, chinrest, and Swiss eye peg—this violin ensures durability and smooth playability. The aluminum tailpiece includes 4 built-in fine tuners for precise tuning. Equipped with strong steel strings and a seasoned hand-carved bridge, it provides excellent sound quality and stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nAn elegant and reliable outfit, designed for serious students and advancing musicians."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1415RD",
    description:
      '"Calypso INT-1415RD Ebony Fittings Flame Solid Wood Violin Outfit – Stunning Tone, Bold Aesthetics\nThe Calypso Ebony Fittings Flame Solid Wood Violin Outfit offers exceptional craftsmanship with a blend of elegance and durability. Featuring a solid carved spruce soundboard top with tight grain, and a solid carved maple back with moderate flame, this violin is designed to provide rich resonance and projection. The maple solid wood neck and scroll add strength and stability, with a subtle fake flame detail for a distinctive look.\nThe violin’s inlaid purfling and RD color finish give it a classic yet refined appearance. Upgraded with ebony fittings—including the fingerboard, pegs, and chinrest—and a carbon composite tailpiece with 4 built-in fine tuners for easy tuning. The Swiss eye peg ensures smooth and precise adjustments.\nWith strong steel strings and a seasoned hand-carved bridge, this violin produces an excellent tone and reliable stability.\nIncludes:\nVLS95AC Lightweight Oblong Violin Case (Foam Shell)\nMVB24 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nA beautifully crafted violin outfit, ideal for advancing players who demand both style and performance."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1419A",
    description:
      '"Calypso INT-1419A College Violin Outfit – Unmatched Craftsmanship for Serious Musicians\nThe Calypso College Violin Outfit is a top-tier choice for advanced students and dedicated musicians. Crafted with a solid hand-crafted spruce soundboard top and solid hand-crafted maple back and sides with exceptional flame, this violin offers superb tone, projection, and durability.\nThe hand-crafted neck and scroll, also featuring flame details, add to its elegance, while the hand-carved carefully inlaid purfling and matte finish give it a refined, classic appearance. Featuring premium ebony fittings, including the fingerboard, pegs, chinrest, and tailpiece with four built-in adjusters, this violin is designed for superior playability and tuning precision. The Swiss eye peg ensures smooth and stable peg adjustments.\nWith aluminum-magnesium composite steel strings and a seasoned hand-carved bridge, it delivers a rich, full sound ideal for demanding performance.\nIncludes:\nVLS95CC High-Grade Lightweight Oblong Violin Case\nMVB24 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nAn exceptional violin outfit for serious musicians seeking premium performance and fine craftsmanship."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1421",
    description:
      '"INT-1421 Hand-Crafted Violin Outfit\nExperience the perfect harmony of craftsmanship and performance with the INT-1421 Violin Outfit. Expertly hand-carved for discerning musicians, this violin features a solid spruce soundboard top and solid maple back and sides, both meticulously hand-crafted and enhanced with top-grade flame for a stunning appearance and resonant tone.\nThe hand-carved neck and scroll, along with precisely inlaid purfling, showcase exceptional artistry. Ebony fittings—including fingerboard, pegs, chinrest, and Swiss eye pegs—offer both durability and classic aesthetic appeal. The ebony tailpiece includes four built-in fine tuners for easy and accurate tuning, while the strong nylon hanger ensures secure handling.\nOutfitted with aluminum-magnesium composite steel strings and a seasoned, hand-carved bridge, this violin delivers a rich, responsive sound.\nIncluded Accessories:\nVLS94CB Carbon Color ABS Polycarbonate Shaped Case – Lightweight and protective with a sleek design.\nMVB25AH Brazilwood Octagonal Stick Bow – Balanced and durable for refined control.\nWhether you\'re an advancing student or a passionate enthusiast, the INT-1421 is crafted to inspire and perform."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "INT-1422",
    description:
      '"Calypso INT-1422 Hand-Crafted Violin Outfit – Unmatched Craftsmanship and Premium Tone\nThe Calypso Hand-Crafted Violin Outfit is designed for serious musicians who demand the finest quality and performance. Featuring a solid hand-crafted spruce soundboard top and solid hand-crafted maple back and sides with top-grade flame, this violin offers superior resonance, tonal richness, and exceptional projection.\nThe hand-crafted neck and scroll, with stunning flame detail, are paired with hand-carved carefully inlaid purfling to create a visually striking and acoustically refined instrument. The ebony fittings—including the fingerboard, pegs, chinrest, and tailpiece with four built-in adjusters—ensure smooth, reliable playability, while the Swiss eye peg offers stable and precise tuning adjustments.\nWith aluminum-magnesium composite steel strings and a seasoned hand-carved bridge, this violin produces an outstanding tone, ideal for demanding performances.\nIncludes:\nVLS94CB Carbon Color ABS Polycarbonate Shaped Case\nMVB25AH Brazilwood Octagonal Stick Bow\nRosin & Strong Nylon Hanger\nA premium violin outfit perfect for musicians seeking unparalleled craftsmanship and performance."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "ST-14L",
    description:
      '"Calypso ST-14L 4/4 Laminated Violin Outfit – Canadian Craftsmanship, \nThe Calypso ST-14L 4/4 Violin combines durability, style, and solid performance—perfect for students and advancing players. Designed by a trusted Canadian brand, this full-size violin features a laminated linden top, back, and sides with a solid maple neck and scroll.\nIts vibrant orange-red glossy finish is paired with black-dyed hardwood fittings and an aluminum tailpiece with 4 fine tuners for easy, precise tuning.\nIncludes:\nVLS90 Shaped Lightweight Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA reliable, all-in-one violin outfit that offers great tone and value."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "ST-14L 3/4",
    description:
      '"Calypso ST-14L 3/4 Laminated Violin Outfit – Canadian Craftsmanship\nThe Calypso ST-14L 3/4 Violin is a high-quality student instrument designed for younger players. With a linden laminated top, back, and sides, plus a solid maple neck and scroll, it offers durability and stable tone—ideal for learning and practice.\nIt features a classic orange-red glossy finish, drawn purfling, and black-dyed hardwood fingerboard, pegs, and chinrest. The aluminum tailpiece comes with four built-in fine tuners for easy and precise tuning.\nIncludes:\nVLS90 Shaped Lightweight Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA dependable 3/4-size violin outfit that combines value, playability, and Canadian design."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "VIOLIN",
    id: "ST-14PF",
    description:
      '"Calypso ST-14PF Paint Flame Laminated Violin Outfit – Stylish Student Model\nThis Calypso violin outfit features a unique painted flame design on the back for an eye-catching look—perfect for students who want both style and sound. Crafted with a laminated linden top, back, and sides, and a solid maple neck and scroll, it offers durability and reliable tone for daily practice.\nFinished in a bright orange-yellow gloss, it includes drawn purfling, black-dyed hardwood fittings, and an aluminum tailpiece with 4 fine tuners. The painted flame adds a touch of elegance, making this a standout choice.\nIncludes:\nVLS90 Shaped Lightweight Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA bold and dependable violin outfit for students ready to stand out."',
    category: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-CLASSICAL GUITAR",
    id: "CL-CE39-EQ",
    description:
      "Introducing the Calypso CL-CE39-EQ Classic Guitar. With a 39-inch body and cutaway design, this instrument offers enhanced playability and comfort. Equipped with a 2-band EQ, it ensures precise tone shaping. Crafted with Linden for the top, back, and sides, and featuring a dyed plywood fingerboard, it delivers a balanced tone with a natural aesthetic. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-CE39-EQ Classic Guitar embodies quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-CLASSICAL GUITAR",
    id: "CL-CE39-EQ-BK",
    description:
      "Introducing the Calypso CL-CE39-EQ Classic Guitar. With a 39-inch body and cutaway design, this instrument offers enhanced playability and comfort. Equipped with a 2-band EQ, it ensures precise tone shaping. Crafted with Linden for the top, back, and sides, and featuring a dyed plywood fingerboard, it delivers a balanced tone with a natural aesthetic. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-CE39-EQ Classic Guitar embodies quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-CLASSICAL GUITAR",
    id: "CL-INT39-EQ",
    description:
      "Introducing the Calypso CL-INT39-EQ Classic Guitar. With a 39-inch body featuring white binding line, neck truss rod, and an equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Linden back & sides, it delivers a rich, resonant tone. The dyed plywood fingerboard adds a touch of elegance to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-INT39-EQ Classic Guitar represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-CLASSICAL GUITAR",
    id: "CL-INT39-SLM-EQ",
    description:
      "Introducing the Calypso CL-INT39-SLM-EQ Classic Guitar. With a slim 39-inch body featuring a cutaway, white binding line, neck truss rod, and an equalizer, this instrument offers enhanced playability and versatile sound control. Crafted with a Spruce top and Linden back & sides, it delivers a rich, resonant tone. The dyed plywood fingerboard adds a touch of elegance to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-INT39-SLM-EQ Classic Guitar represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "ELECTRO-CLASSICAL GUITAR",
    id: "CL-INT39-SLM-EQ-BK",
    description:
      "Introducing the Calypso CL-INT39-SLM-EQ-BK Classic Guitar. Featuring a sleek 39-inch slim body with a cutaway, white binding line, neck truss rod, and an equalizer, this instrument offers enhanced playability and versatile sound control. Crafted with a Spruce top and Linden back & sides, it delivers a rich, resonant tone. The dyed plywood fingerboard adds a touch of sophistication to its modern black finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-INT39-SLM-EQ-BK Classic Guitar embodies quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "SILENT ELECTRO-CLASSICAL GUITAR",
    id: "EN-NAT",
    description:
      "Calypso Silent Electro Classical Guitar EN-NAT is designed for both exceptional acoustic quality and versatility, featuring a solid Spruce top that ensures a bright, resonant tone, complemented by an Okoume body that adds warmth and depth. The Mahogany neck provides smooth, comfortable playability, while the Technical Rosewood fingerboard and bridge enhance durability and tonal richness. The glossy natural finish adds a touch of elegance to its classic design. Equipped with SAVAREZ strings for a vibrant, dynamic sound and a piezo preamp undersaddle bridge for precise amplification, this guitar is perfect for both practice and performance. It also includes a 10mm padded bag for secure protection and easy transport, making it a perfect choice for musicians who appreciate high-quality craftsmanship and advanced features.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "SILENT ELECTRO-CLASSICAL GUITAR",
    id: "EN-SB",
    description:
      "Calypso Silent Electro Classical Guitar EN-SB blends classic craftsmanship with modern technology for a superior playing experience. It features a solid Spruce top for a bright and resonant tone, complemented by an Okoume body that adds warmth and depth. The Mahogany neck ensures smooth, comfortable playability, while the Technical Rosewood fingerboard and bridge enhance both durability and tonal richness. Finished in a sleek glossy coating, this guitar exudes elegance and style. It is equipped with SAVAREZ strings for a vibrant sound and a piezo preamp undersaddle bridge for precise amplification. Packaged with a 10mm padded bag for excellent protection and easy transport, this model is ideal for musicians seeking a blend of refined design and advanced functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCHE ELECTRO-CLASSICAL GUITAR",
    id: "G-BM-BK",
    description:
      "Calypso Electro Classical Guitar G-BM-BK combines classic elegance with modern features, featuring the Manouch Bar mic for superior amplification. It boasts a Spruce top for a bright, resonant tone, complemented by Mahogany back and sides that deliver a warm, full-bodied sound. The Mahogany neck ensures smooth, comfortable playability, while SAVAREZ CJ500 strings provide a rich and vibrant performance. Finished in a sleek glossy black, this guitar not only looks stunning but is also equipped with 22 frets with rounded edges for effortless play. The 4-Band EQ allows for versatile sound adjustments, and the included 10mm padded bag offers excellent protection and convenient transport. Ideal for classical guitarists seeking both traditional craftsmanship and modern functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCHE ELECTRO-CLASSICAL GUITAR",
    id: "G-BM-BKBK",
    description:
      "Calypso Electro Classical Guitar G-BM-BKBK offers a striking blend of modern features and classic design, enhanced by the Manouch Bar mic for superior acoustic performance. It features a Spruce top for a bright, resonant tone, while the Mahogany back, sides, and neck deliver a warm, rich sound. Equipped with SAVAREZ CJ500 strings, this guitar provides a vibrant and dynamic playing experience. The sleek black gloss finish gives it a contemporary look. With 22 frets and rounded edges for smooth playability, plus a 4-Band EQ for precise sound adjustments, this model is both versatile and stylish. It also includes a 10mm padded bag for secure protection and easy transport, making it an ideal choice for classical musicians who appreciate both form and function.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCHE ELECTRO-CLASSICAL GUITAR",
    id: "G-BM-YL",
    description:
      "Calypso Electro Classical Guitar G-BM-YL combines sophisticated design with advanced features, featuring the Manouch Bar mic for exceptional acoustic performance. It sports a Spruce top for a bright, resonant tone, while the Mahogany back, sides, and neck deliver a warm, rich sound. The guitar is equipped with SAVAREZ CJ500 strings, known for their vibrant and dynamic sound. Its glossy dark yellow finish offers a striking and elegant appearance. With 22 frets and rounded edges for smooth playability, it also includes a 4-Band EQ for precise sound control. The included 10mm padded bag provides secure protection and easy transport, making this guitar an excellent choice for classical musicians who value both style and functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCHE ELECTRO-CLASSICAL GUITAR",
    id: "G-BM-N",
    description:
      "Calypso Electro Classical Guitar G-BM-N offers a perfect fusion of classic craftsmanship and modern features, enhanced by the Manouch Bar mic for exceptional sound quality. It features a Spruce top that provides a bright and resonant tone, while the Mahogany back, sides, and neck deliver a warm, rich sound. The guitar is strung with SAVAREZ CJ500 strings for a vibrant and dynamic performance. Finished in a natural gloss, it boasts an elegant and timeless look. With 22 frets and rounded edges for smooth playability, it also includes a 4-Band EQ for precise sound adjustment. The guitar comes with a 10mm padded bag for secure protection and easy transport, making it an ideal choice for classical musicians who appreciate both style and advanced functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCH ELECTRO-CLASSICAL GUITAR",
    id: "G-MIC-BK",
    description:
      "Calypso Electro Classical Guitar G-MIC-BK merges classic craftsmanship with modern technology, featuring the Manouch mic for superior acoustic performance. It boasts a Spruce top for a bright and resonant tone, while the Mahogany back, sides, and neck contribute to a warm and rich sound. The guitar is equipped with SAVAREZ CJ500 strings, known for their vibrant, dynamic quality. Finished in a sleek black gloss, it offers a stylish and contemporary appearance. With 22 frets featuring rounded edges for smooth playability and an integrated EQ with microphone for precise sound control, this model is both versatile and user-friendly. The guitar comes with a 10mm padded bag for excellent protection and convenient transport, making it an ideal choice for classical musicians seeking a blend of elegance and advanced features.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCH ELECTRO-CLASSICAL GUITAR",
    id: "G-MIC-BKBK",
    description:
      "Calypso Electro Classical Guitar G-MIC-BKBK merges modern technology with classic elegance, featuring the Manouch mic for exceptional acoustic clarity. It boasts a Spruce top that provides a bright and resonant tone, complemented by Mahogany back, sides, and neck for a warm, rich sound. Strung with SAVAREZ CJ500 strings, it delivers a vibrant and dynamic performance. The sleek black gloss finish enhances its contemporary appeal. With 22 frets and rounded edges for smooth playability, and an integrated EQ with microphone for precise sound control, this guitar is both versatile and stylish. It comes with a 10mm padded bag for secure protection and convenient transport, making it an excellent choice for classical musicians seeking a blend of sophistication and functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCH ELECTRO-CLASSICAL GUITAR",
    id: "G-MIC-N",
    description:
      "Calypso Electro Classical Guitar G-MIC-N combines exceptional craftsmanship with modern performance features, including the Manouch mic for outstanding sound quality. It features a Spruce top that provides a bright and resonant tone, while the Mahogany back, sides, and neck offer a warm, rich sound. The guitar is strung with SAVAREZ CJ500 strings for a vibrant, dynamic performance. Finished in a natural gloss, it showcases a classic and elegant appearance. With 22 frets and rounded edges for smooth playability, and an integrated EQ with microphone for precise sound control, this model is both versatile and stylish. It comes with a 10mm padded bag for secure protection and convenient transport, making it a great choice for classical musicians who value both aesthetic appeal and advanced functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "MANOUCH ELECTRO-CLASSICAL GUITAR",
    id: "G-MIC-YL",
    description:
      "Calypso Electro Classical Guitar G-MIC-YL offers a striking blend of classic elegance and modern performance, enhanced by the Manouch mic for exceptional sound quality. It features a Spruce top that delivers a bright and resonant tone, while the Mahogany back, sides, and neck provide a warm and rich sound. The guitar is strung with SAVAREZ CJ500 strings, known for their vibrant and dynamic tone. Finished in a glossy dark yellow, it combines a bold aesthetic with refined craftsmanship. With 22 frets and rounded edges for smooth playability, along with an integrated EQ with microphone for precise sound control, this guitar is both versatile and stylish. It also comes with a 10mm padded bag for secure protection and easy transport, making it an excellent choice for classical musicians who appreciate both beauty and functionality.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "FOLK GUITAR",
    id: "FG38",
    description:
      "Introducing the MD48-ADV-EQ: an advanced acoustic guitar designed for discerning musicians. Crafted with a spruce top and sapele back/side, this model delivers a rich and balanced tone suitable for a wide range of musical genres. The rosewood fingerboard offers smooth playability and adds a touch of elegance to the instrument. Equipped with an EQ system for precise sound shaping, the MD48-ADV-EQ ensures versatile performance capabilities. Finished in a stunning sunburst color, this guitar combines style and substance for an exceptional playing experience.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "FOLK GUITAR",
    id: "FG41-INT",
    description:
      "Introducing the FG41-INT: an exceptional acoustic guitar designed for versatile performance. Crafted with a spruce top and linden back/sides, this model delivers a rich, resonant tone suitable for various musical styles. The dyed fingerboard and half-cast machine head ensure durability and smooth playability. Finished in a sophisticated brown color, this guitar exudes timeless elegance, making it a perfect choice for musicians seeking both style and substance in their instrument.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "FOLK GUITAR",
    id: "FG42-INT",
    description:
      "Introducing the FG42-INT: a premium acoustic guitar designed for exceptional performance. Crafted with a spruce top and linden back/sides, this model delivers a balanced and resonant tone perfect for various musical styles. The rosewood fingerboard offers smooth playability and adds a touch of elegance to the instrument. With its high-quality construction and versatile sound, the FG42-INT is an ideal choice for both aspiring and experienced musicians.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "GUITALELE",
    id: "UK-CG-28-INT-EQ",
    description:
      "Introducing the Calypso UK-CG-28-INT-EQ Guitalele. With a compact 28-inch body and an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Mahogany back and sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard adds to the instrument's playability and elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the UK-CG-28-INT-EQ Guitalele represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "GUITALELE",
    id: "UK-CG-28-INT-EQ-BK",
    description:
      "Introducing the Calypso UK-CG-28-INT-EQ Guitalele. With a compact 28-inch body and an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Mahogany back and sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard adds to the instrument's playability and elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the UK-CG-28-INT-EQ Guitalele represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "GUITALELE",
    id: "UK-CG-28-INT-EQ-SB",
    description:
      "Introducing the Calypso UK-CG-28-INT-EQ Guitalele. With a compact 28-inch body and an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Mahogany back and sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard adds to the instrument's playability and elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the UK-CG-28-INT-EQ Guitalele represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    pictureUrl: [],
  },
];

export default ITEMS;
