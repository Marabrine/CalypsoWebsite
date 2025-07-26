const ITEMS = [
  {
    name: "Piano Bench",
    id: "BA222",
    description:
      "Calypso BA222 Piano Bench: adjustable height with a built-in bookcase for easy access to sheet music. Comfort and convenience for every pianist!",
    category: "ACCESSORIES",
    subCategory: "BENCH",
    pictureUrl: ["/images/piano-benches/BA222.png"],
  },
  {
    name: "Piano Bench",
    id: "BA223",
    description:
      "Calypso BA223 Piano Bench: adjustable height with a convenient bookcase for storing sheet music. Perfect for comfort and organization during your practice!",
    category: "ACCESSORIES",
    subCategory: "BENCH",

    pictureUrl: ["/images/piano-benches/BA223.png"],
  },
  {
    name: "Adjustable Piano Bench",
    id: "Q-90B",
    description:
      "Calypso Q-90B Adjustable Piano Bench: versatile and comfortable, featuring adjustable height for the perfect playing position. Ideal for musicians of all levels!",
    category: "ACCESSORIES",
    subCategory: "BENCH",

    pictureUrl: ["/images/piano-benches/Q-90B.png"],
  },
  {
    name: "Keyboard Bench",
    id: "Q111T",
    description:
      "Calypso Q-111T Keyboard Bench: sturdy and comfortable, designed for optimal support during play. Perfect for musicians of all levels!",
    category: "ACCESSORIES",
    subCategory: "BENCH",

    pictureUrl: ["/images/piano-benches/Q-111T.png"],
  },
  {
    name: "3m Cable",
    id: "X003",
    description:
      "Calypso X003 3m TS Cable: designed for reliability and superior sound quality, this cable ensures minimal interference for all your audio needs. Perfect for musicians and studio setups!",
    category: "ACCESSORIES",
    subCategory: "CABLE",
    pictureUrl: ["/images/cables/X003.png"],
  },
  {
    name: "5m Cable",
    id: "X005",
    description:
      "Calypso X005 5m TS Cable: built for durability and optimal sound quality, this cable minimizes interference for clear audio performance. Ideal for musicians and audio applications!",
    category: "ACCESSORIES",
    subCategory: "CABLE",
    pictureUrl: ["/images/cables/X005.png"],
  },
  {
    name: "3m Braided Cable",
    id: "XA03",
    description:
      "Calypso XA03 3m Braided TS Cable: designed for durability and flexibility, this cable ensures excellent sound quality with minimal interference. Ideal for all your audio connections!",
    category: "ACCESSORIES",
    subCategory: "CABLE",
    pictureUrl: ["/images/cables/XA03.png"],
  },
  {
    name: "6m Braided Cable",
    id: "XA06",
    description:
      "Calypso XA06 6m Braided TS Cable: durable and flexible, this cable provides excellent sound quality and minimal interference. Ideal for musicians and audio setups!",
    category: "ACCESSORIES",
    subCategory: "CABLE",
    pictureUrl: ["/images/cables/XA06 6m.png"],
  },
  {
    name: "Cymbal Stand",
    id: "G400",
    description:
      "Calypso G400 Cymbal Stand: sturdy and adjustable, designed for stability and ease of use. Perfect for drummers looking to enhance their setup!",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/G400.png"],
  },
  {
    name: "Cymbal Stand",
    id: "G410",
    description:
      "Calypso G410 Cymbal Stand: robust and stable, featuring adjustable height for versatile positioning. Ideal for drummers seeking reliability and performance in their setup!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/G410.png"],
  },
  {
    name: "African Drum Stand",
    id: "G201F",
    description:
      "Calypso G201F African Drum Stand: sturdy and designed for optimal support, this stand ensures your African drum is secure and accessible. Perfect for performances and practice!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/G201F.png"],
  },
  {
    name: "Practice Pad with Stand",
    id: "G7012",
    description:
      "Calypso G7012 Practice Pad with Stand: features a durable pad for quiet practice and a sturdy adjustable stand. Perfect for drummers looking to refine their skills anywhere!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/G7012.png"],
  },
  {
    name: "Foot Stool",
    id: "J-46",
    description:
      "Calypso J-46 Foot Stool offers comfort and stability for musicians. With a cushioned top and sturdy construction, it's perfect for elevating your feet during practice or performances. Compact and stylish, it's easy to store and transport.",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/J-46.png"],
  },
  {
    name: "Adjustable Foot Stool",
    id: "M-61",
    description:
      "Calypso M-61 Adjustable Foot Stool: designed for comfort and support, this foot stool features adjustable height for optimal playing posture. Perfect for musicians looking to enhance their performance!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/M-61.png"],
  },
  {
    name: "Self-Lock Guitar Stand",
    id: "1BYC",
    description:
      "Calypso 1BYC Self-Lock Guitar Stand offers secure support for your guitar with its automatic locking mechanism. Designed for all guitar types, it features a sturdy build, adjustable height, and protective padding to prevent scratches. Lightweight and portable, it's perfect for home or on-the-go use!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/1BYC.png"],
  },
  {
    name: "Guitar Stand",
    id: "J-31B",
    description:
      "Calypso J-31B Guitar Stand: durable and stable, designed to securely hold your guitar while keeping it easily accessible. Ideal for home or studio use!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/J-31B.png"],
  },
  {
    name: "Ukulele Stand",
    id: "J-40F",
    description:
      "Calypso J-40F Ukulele Stand: compact and sturdy, designed to securely hold your ukulele while showcasing its beauty. Perfect for home or stage use!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/J-40F.png"],
  },
  {
    name: "Headphones",
    id: "CH-08",
    description:
      "Calypso CH-08 Headphones deliver premium sound with deep bass and crisp audio. Designed for comfort, they feature plush ear cushions and a lightweight. Perfect for long listening sessions!",
    category: "ACCESSORIES",
    subCategory: "OTHER",
    pictureUrl: [],
  },
  {
    name: "Keyboard Stand",
    id: "Q-1XC",
    description:
      "Calypso Q-1XC Keyboard Stand: sleek X-shaped design for stability and support. Ideal for any keyboardist, whether at home or on stage!",
    subCategory: "STAND",
    category: "ACCESSORIES",
    pictureUrl: ["/images/stands/Q-1XC.png"],
  },
  {
    name: "Keyboard Stand",
    id: "Q-2XC-2",
    description:
      "Calypso Q-2XC-2 Keyboard Stand: durable double-X design for maximum stability, perfect for home or stage use. Ideal for all keyboardists!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/Q-2XC-2.png"],
  },
  {
    name: "Keyboard Stand",
    id: "QA210C",
    description:
      "Calypso QA210C Keyboard Stand: features a sturdy double-X design and an ergonomic handle (Crocodile) for easy adjustments. Perfect for stability and comfort during performances!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/QA210C.png"],
  },
  {
    name: "Microphone Stand",
    id: "M-200",
    description:
      "Calypso M-200 Microphone Stand: adjustable and sturdy, designed for optimal stability and convenience. Perfect for live performances, rehearsals, or studio use!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/M-200.png"],
  },
  {
    name: "Music Stand",
    id: "P-02",
    description:
      "Calypso P-02 Music Stand: compact and adjustable, designed for stability and convenience. Ideal for musicians needing reliable support for their sheet music!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/P-02.png"],
  },
  {
    name: "Adjustable Music Stand",
    id: "P-088",
    description:
      "Calypso P-088 Adjustable Music Stand: lightweight and portable, with adjustable height for optimal viewing. Perfect for musicians at home or on stage!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/P-088.png"],
  },
  {
    name: "Music Stand",
    id: "PA200",
    description:
      "Calypso PA200 Music Stand: sturdy and adjustable, perfect for musicians seeking reliable support for their sheet music. Lightweight and portable for easy transport!",
    category: "ACCESSORIES",
    subCategory: "STAND",
    pictureUrl: ["/images/stands/PA200.png"],
  },
  {
    name: "Tuner",
    id: "CCT-10",
    description:
      "\"Introducing the CCT-10: your ultimate companion for tuning and keeping time, compactly designed for musicians on the go. This versatile device combines the functionality of a tuner and a metronome in one sleek package.\nIn tuner mode, the CCT-10 offers precise tuning for a variety of instruments including Chromatic (C), Guitar (G), Bass (B), Ukulele (U), and Violin (V). With a detection range spanning from A0 (27.5Hz) to C8 (4186.00Hz) and a pitch range of 430Hz to 450Hz, you can achieve perfect tuning accuracy within 0.5 cent.\nSwitch seamlessly to metronome mode to practice with precision. The CCT-10 provides a tempo range from 30bpm to 260bpm and offers beats from 0 to 9, accommodating a wide range of musical styles and preferences.\nPowered by a built-in lithium battery (3.7V/110mAH), the CCT-10 ensures long-lasting performance. Compact in size with dimensions of 36.5*34*94 mm and weighing only 35g, it's designed for portability and convenience.\nIncluded with the CCT-10 are an owner's manual, 1 built-in lithium battery, and 1 USB charging line. Its 180° rotatory feature allows for easy switching between tuner mode and metronome mode, ensuring effortless usability.\nTake your tuning and timing to the next level with the CCT-10 – your reliable companion for practice sessions, performances, and rehearsals wherever your music takes you.\"",
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "Tuner",
    id: "CT-01",
    description:
      '"Introducing the CT-01 Tuner: your essential tool for precision tuning, designed to accommodate a variety of instruments with ease. This compact tuner offers versatility and accuracy to enhance your musical performance.\nWith tuning modes including Chromatic, Guitar, Bass, Violin, and Ukulele, the CT-01 ensures compatibility with a wide range of instruments. Its two-color backlight system, with green indicating in-tune and white indicating out-of-tune, provides intuitive visual feedback for effortless tuning.\nOperating at a pitch range of 440Hz, the CT-01 delivers reliable performance with a detection accuracy of 0.5%. The included CR2032 battery ensures long-lasting power, while its compact dimensions of 29x75×50mm make it perfect for on-the-go musicians.\nExperience convenience and precision tuning in a compact package with the CT-01 Tuner, your trusted companion for musical excellence."',
    category: "ACCESSORIES",
    pictureUrl: [],
  },
  {
    name: "Algerian Mandole Strings",
    id: "MS51546",
    description: "",
    category: "ACCESSORIES",
    subCategory: "OTHER",
    pictureUrl: [],
  },
  {
    name: "Bb Clarinet",
    id: "CL804SI-CL-ST",
    description:
      "Introducing the CL804SI CL-ST Bb Clarinet, a professional-grade instrument crafted to inspire and empower musicians of all levels. Constructed with precision and care, this clarinet features a sleek nickel-plated body with a modern matte finish, offering both durability and style. With its 17 keys and convenient thumb rest, players can navigate the instrument effortlessly, unlocking a world of musical possibilities. The double barrel design enhances tonal richness and flexibility, allowing for a nuanced and expressive performance. Complete with a sturdy canvas case for secure storage and transport, the CL804SI CL-ST Bb Clarinet is the perfect companion for your musical journey.",
    category: "BRASS-WIND",
    pictureUrl: ["/images/brass-wind/CL804SICL-ST.png"],
  },
  {
    name: "Flute",
    id: "FL805SI-FL-YH",
    description:
      "Introducing the FL805SI FL-YH Flute, a sophisticated instrument designed for discerning musicians seeking precision and elegance. Crafted with meticulous attention to detail, this flute features a sleek silver-plated body that exudes timeless sophistication. With its 16-hole design and C key configuration, this flute offers a wide range of musical possibilities, perfect for both beginners and seasoned players alike. The inclusion of a split E mechanism and offset G key enhances playability and ensures smooth, effortless performance. Complete with a durable ABS case for secure storage and transportation, the FL805SI FL-YH Flute is the perfect choice for musicians who demand excellence in both sound and style. Elevate your musical journey with the FL805SI FL-YH Flute today.",
    category: "BRASS-WIND",
    pictureUrl: ["/images/brass-wind/FL805SI FL-YH.png"],
  },
  {
    name: "Alto Saxophone",
    id: "AL802I SXA-ST",
    description:
      "Introducing the AL802I SXA-ST Alto Saxophone, a premium instrument designed to elevate your musical performance to new heights. Crafted with precision from high-quality yellow brass and finished with a lustrous gold lacquer, this saxophone boasts both exceptional sound quality and stunning visual appeal. Its Eb key configuration ensures smooth and effortless playability across various musical genres and styles. Plus, with the included durable canvas case, transporting and protecting your saxophone has never been easier. Elevate your musical journey with the AL802I SXA-ST Alto Saxophone today.",
    category: "BRASS-WIND",
    pictureUrl: ["/images/brass-wind/AL802l.png"],
  },
  {
    name: "Tenor Trombone",
    id: "TB700 TRB-ST",
    description:
      "Introducing the TB700 TRB-ST Tenor Trombone, a premium brass instrument designed to elevate your musical performance to new heights. Crafted with precision from high-quality materials and finished with a brilliant gold lacquer, this trombone boasts both exceptional sound quality and stunning visual appeal. Featuring a bell diameter of φ203mm and a bore diameter of φ12.7mm, it delivers a rich and resonant tone with remarkable projection and clarity. The Bb key configuration ensures versatility across various musical genres and styles, while the included durable canvas case offers convenient storage and transportation. Elevate your musical journey with the TB700 TRB-ST Tenor Trombone today.",
    category: "BRASS-WIND",
    pictureUrl: ["/images/brass-wind/TB700 TRB-ST.png"],
  },
  {
    name: "Trumpet",
    id: "TP807LI TR-ST",
    description:
      "Introducing the TP807LI TR-ST Trumpet, an exceptional instrument meticulously crafted to meet the demands of discerning musicians. Constructed from premium yellow brass and adorned with a radiant gold lacquer finish, this trumpet not only exudes elegance but also delivers unparalleled sound quality and projection. Equipped with a roso brass leadpipe, it offers enhanced responsiveness and clarity across the entire range, allowing players to achieve their desired tonal palette with ease. Complete with a durable canvas case, the TP807LI TR-ST Trumpet is the perfect choice for both aspiring and seasoned trumpet players alike, promising years of musical excellence and enjoyment. Elevate your performance with the TP807LI TR-ST Trumpet today.",
    category: "BRASS-WIND",
    pictureUrl: ["/images/brass-wind/TP807LI TR-ST.png"],
  },
  {
    name: "Intermediate Acoustic Drum Set",
    id: "DR-INT",
    description:
      '"Calypso DR-INT Intermediate Acoustic Drum Set\nTake your drumming to the next level with our Intermediate Acoustic Drum Set. This 6-piece kit is designed for musicians ready to enhance their skills and explore new rhythms.\nSet Includes:\nKick Drum: 22""\nSnare Drum: 14""\nTom 1: 10""\nTom 2: 12""\nFloor Tom: 14""\nHi-Hat: 14""\nCrash Cymbal: 16""\nRide Cymbal: 17""\nMaterials: Made from premium New Zealand pine wood and durable Chinese poplar, this set delivers a rich, resonant sound perfect for any genre.\nIncluded: Comes with a comfortable stool and all necessary stands, making it easy to set up and start playing right away.\nDesigned for durability and performance, this drum set inspires creativity and growth. Upgrade your drumming experience today!\n"',
    category: "DRUMS",
    subCategory: "DRUMSET",
    pictureUrl: ["/images/percussion/drumset/DR-INT.png"],
  },
  {
    name: "Student Acoustic Drum Set",
    id: "DR-ST",
    description:
      '"Calypso DR-St Student Acoustic Drum Set, designed for aspiring drummers looking to make their mark! This 5-piece kit includes:\n\nKick Drum: 22""\nSnare Drum: 14""\nTom 1: 10""\nTom 2: 12""\nFloor Tom: 16""\nHi-Hat: 14""\nCrash Cymbal: 16""\nCrafted from high-quality New Zealand pine wood and durable Chinese poplar, this set offers a rich, resonant sound that enhances your playing experience.\n\nComplete with a comfortable stool and all necessary stands, this drum set provides everything you need to start your musical journey. Perfect for students, it’s built for durability and ease of use, inspiring creativity and skill development from day one."',
    category: "DRUMS",
    subCategory: "DRUMSET",
    pictureUrl: ["/images/percussion/drumset/DR-ST.png"],
  },
  {
    name: "18-Inch Oriental Bass Drum",
    id: "TBL-MT-18",
    description:
      'Calypso TBL-MT 18-Inch Oriental Bass Drum, or "Tabol," delivers deep, resonant tones perfect for both traditional and contemporary music. Crafted for durability and featuring an elegant design, it’s ideal for solo performances or ensemble settings. Elevate your sound with the TBL-MT Tabol!',
    category: "DRUMS",
    subCategory: "ORIENTAL",
    pictureUrl: ["/images/percussion/oriental/TBL-MT-18.png"],
  },
  {
    name: "20-Inch Oriental Bass Drum",
    id: "TBL-MT-20",
    description:
      'Calypso TBL-MT 20-Inch Oriental Bass Drum, or "Tabol," delivers deep, resonant tones perfect for both traditional and contemporary music. Crafted for durability and featuring an elegant design, it’s ideal for solo performances or ensemble settings. Elevate your sound with the TBL-MT Tabol!',
    category: "DRUMS",
    subCategory: "ORIENTAL",
    pictureUrl: ["/images/percussion/oriental/TBL-MT-20.png"],
  },
  {
    name: "22-Inch Oriental Bass Drum",
    id: "TBL-MT-22",
    description:
      'Calypso TBL-MT 22-Inch Oriental Bass Drum, or "Tabol," delivers deep, resonant tones perfect for both traditional and contemporary music. Crafted for durability and featuring an elegant design, it’s ideal for solo performances or ensemble settings. Elevate your sound with the TBL-MT Tabol!',
    category: "DRUMS",
    subCategory: "ORIENTAL",
    pictureUrl: ["/images/percussion/oriental/TBL-MT-22.png"],
  },
  {
    name: "Lightning Drum",
    id: "TBL-RD-TRSP",
    description:
      '"Calypso TBL-RD-TRSP Lightning Drum delivers vibrant sound with powerful tones, perfect for various music styles. Its durable build and eye-catching lightning design make it ideal for both solo performances and ensemble settings. Elevate your sound with the Lightning Drum!\n\n\n"',
    category: "DRUMS",
    subCategory: "ORIENTAL",
    pictureUrl: ["/images/percussion/oriental/TBL-RD-TRSP1.png"],
  },
  {
    name: "Marching Snare",
    id: "MCH-ST14",
    description:
      "Calypso MCH-ST14 Marching Snare offers precision and a crisp, resonant sound, making it perfect for marching bands. Its durable yet lightweight design ensures easy transport, while adjustable straps provide a comfortable fit. Elevate your performance with this essential snare!",
    category: "DRUMS",
    subCategory: "MARCHING",
    pictureUrl: ["/images/percussion/marching/MCH-ST14.png"],
  },
  {
    name: "Marching Bass",
    id: "MCH-ST24",
    description:
      "Calypso Marching Bass MCH-ST24 delivers powerful sound and durability, making it ideal for marching bands. With a lightweight design and adjustable straps, it’s easy to carry and comfortable to play. Elevate your performance with this robust bass drum!",
    category: "DRUMS",
    subCategory: "MARCHING",
    pictureUrl: ["/images/percussion/marching/MCH-ST24.png"],
  },
  {
    name: "Acoustic Bass Guitar",
    id: "AC-BAS47-EQ-BK 1",
    description:
      "Introducing the Calypso AC-BAS47-EQ-BK acoustic bass guitar. With a sleek 47-inch cutaway body featuring white binding line, this instrument offers both style and functionality. Equipped with a neck truss rod and a 4-band EQ, it ensures optimal sound control and versatility. The elegant black color complements its top-grade Spruce top and Sapele back & sides. The Rosewood fingerboard and Nato neck provide smooth playability and durability. Designed by Calypso in Montreal, Canada, and meticulously handmade in China using carefully selected lumber and exotic materials, this bass guitar delivers exceptional quality and performance.",
    category: "Guitar and Bass",
    pictureUrl: [],
  },
  {
    name: "Acoustic Guitar 38-inches",
    id: "FG38",
    description:
      "Immerse yourself in the rich, soulful melodies with the Guitar Calypso Folk (38 Inches). Its impeccable sound quality will transport you to a world of musical bliss. The comfortable size makes it perfect for musicians of all levels, while the classic design adds a touch of elegance to your performance. Elevate your music experience with this exceptional guitar today!",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/FG38.png",
      "/images/specificImages/guitar/Acoustic/FG38/FG38-1.png",
      "/images/specificImages/guitar/Acoustic/FG38/FG38-2.png",
      "/images/specificImages/guitar/Acoustic/FG38/FG38-3.png",
    ],
  },
  {
    name: "Acoustic Guitar",
    id: "140MAS",
    description:
      "Immerse yourself in the rich tones of the Guitar Calypso Folk 140MAS, crafted for both elegance and comfort. Made with durable materials, this guitar ensures a lasting musical companion for your creative journey. Elevate your playing experience with the perfect blend of style and functionality â€“ strum away with the Guitar Calypso Folk 140MAS!",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/140MAS.png",
      "/images/specificImages/guitar/Acoustic/140MAS/140MAS-1.png",
      "/images/specificImages/guitar/Acoustic/140MAS/140MAS-2.png",
      "/images/specificImages/guitar/Acoustic/140MAS/140MAS-3.png",
    ],
  },
  {
    name: "Acoustic Guitar 38-inches",
    id: "FG38-BK",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Black! This stunning 38-inch guitar offers a versatile sound that will elevate your music to new heights. Its classic design exudes elegance, while the comfortable size makes it perfect for musicians of all levels. Dive into the world of music with the Guitar Calypso Folk Black â€“ a must-have for any aspiring guitarist!",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/FG38-BK.png",
      "/images/specificImages/guitar/Acoustic/FG38-BK/FG38-BK-1.png",
      "/images/specificImages/guitar/Acoustic/FG38-BK/FG38-BK-2.png",
      "/images/specificImages/guitar/Acoustic/FG38-BK/FG38-BK-3.png",
    ],
  },
  {
    name: "Acoustic Guitar 41-inches",
    id: "FG41-INT",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Intermediate (41 Inches). Experience its versatile sound that adapts to various music genres, making it a must-have for aspiring musicians. Crafted with precision and care, this guitar offers exceptional quality and durability. Elevate your playing experience with the comfortable size and superior craftsmanship of this instrument.",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/FG41-INT.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT/FG41-INT-1.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT/FG41-INT-2.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT/FG41-INT-3.png",
    ],
  },
  {
    name: "Acoustic Guitar 42-inches",
    id: "FG42-INT",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Intermediate! Dive into a world of versatile sounds that will captivate your audience. Designed for ease of play, this 42-inch guitar offers a smooth playing experience for musicians of all levels. Crafted with durable construction, this guitar is built to withstand your musical journey. Elevate your music game and bring your melodies to life with the Guitar Calypso Folk Intermediate!",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/FG42-INT.png",
      "/images/specificImages/guitar/Acoustic/FG42-INT/FG42-INT-1.png",
      "/images/specificImages/guitar/Acoustic/FG42-INT/FG42-INT-2.png",
      "/images/specificImages/guitar/Acoustic/FG42-INT/FG42-INT-3.png",
    ],
  },
  {
    name: "Acoustic Guitar 42-inches",
    id: "FG41-INT-BK",
    description:
      "Experience the captivating melodies with the Guitar Calypso Folk Intermediate Black (41 Inches). This versatile instrument offers a rich and vibrant sound that will inspire your musical journey. Its comfortable size and sleek design make it a perfect choice for intermediate players looking to enhance their skills. Elevate your music with the Guitar Calypso Folk â€“ get ready to strum your way to new heights!",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/FG41-INT-BK.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT-BK/FG41-INT-BK-1.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT-BK/FG41-INT-BK-2.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT-BK/FG41-INT-BK-3.png",
    ],
  },
  {
    name: "Electro-Acoustic Guitar 41-inches",
    id: "FG41-INT-EQ-BK",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Intermediate EQ Black! This 41-inch beauty offers a versatile sound that will elevate your playing experience to new heights. Designed for comfort and style, this guitar is the perfect companion for intermediate players looking to make a statement. Embrace the rhythm of the Calypso Folk and let your passion for music shine through!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG41-INT-EQ-BK.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-EQ-BK/FG41-INT-EQ-BK-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-EQ-BK/FG41-INT-EQ-BK-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-EQ-BK/FG41-INT-EQ-BK-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Guitar 42-inches",
    id: "FG42-INT-EQ-BK",
    description:
      "Indulge in the vibrant tunes with the Guitar Calypso Folk Intermediate EQ Black (42 Inches). Experience a versatile sound that enhances your musical journey to new heights. The comfortable size and stylish design make this guitar a perfect companion for aspiring musicians. Elevate your performance and stand out with this exceptional instrument!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG42-INT-EQ-BK.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG42-INT-EQ-BK/FG42-INT-EQ-BK-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG42-INT-EQ-BK/FG42-INT-EQ-BK-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG42-INT-EQ-BK/FG42-INT-EQ-BK-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Left Handed Electro-Acoustic Guitar 41-inches",
    id: "FG41-INT-EQ-LH",
    description:
      "Unleash your musical prowess with this 41-inch Guitar Calypso Folk designed specifically for left-handed players. Boasting an EQ system for fine-tuned sound control, this guitar is perfect for intermediate musicians looking to elevate their skills. Embrace your unique style and sound with this exceptional left-handed guitar!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG41-INT-EQ-LH.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-EQ-LH/FG41-INT-EQ-LH-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-EQ-LH/FG41-INT-EQ-LH-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-EQ-LH/FG41-INT-EQ-LH-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Left Handed Acoustic Guitar 41-inches",
    id: "FG41-INT-LH",
    description:
      "Strum your way into the world of calypso folk with this 41-inch left-handed guitar designed for intermediate players. Embrace your unique style with this specially crafted instrument, perfect for those who march to the beat of their own tune. Elevate your musical journey with the soulful melodies you can create using this exceptional guitar!",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: ["/images/guitars/Acoustic/FG41-INT-LH.png"],
  },
  {
    name: "Left Handed Acoustic Guitar 41-inches",
    id: "FG41-INT-LH-NAT",
    description: "",
    category: "GUITAR",
    subCategory: "ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/FG41-INT-LH-2.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT-LH-NAT/FG41-INT-LH-NAT-1.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT-LH-NAT/FG41-INT-LH-NAT-2.png",
      "/images/specificImages/guitar/Acoustic/FG41-INT-LH-NAT/FG41-INT-LH-NAT-3.png",
    ],
  },
  {
    name: "Electro-Acoustic Slim Guitar 41-inches",
    id: "FG41-INT-SLM-EQ-BK",
    description:
      "Unleash your inner musician with the Guitar Calypso Folk Intermediate Slim EQ Black! Embrace the slim design and EQ functionality that enhances your playing experience. Perfect for those captivated by the calypso folk style, this guitar is a harmonious blend of style and functionality. Elevate your musical journey with this sleek and versatile instrument!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG41-INT-SLM-EQ-BK.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-BK/FG41-INT-SLM-EQ-BK-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-BK/FG41-INT-SLM-EQ-BK-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-BK/FG41-INT-SLM-EQ-BK-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Slim Redline Guitar 41-inches",
    id: "FG41-INT-SLM-EQ-BK-RedLine",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Intermediate Slim EQ in Black Redline (41 Inches). Its sleek design not only catches the eye but also delivers a rich, resonant sound that will elevate your playing experience. With versatile EQ options, you can customize your sound to suit any musical style. Get ready to rock the stage with this exceptional guitar!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG41-INT-SLM-EQ-BK-Redline.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-BK-Redline/FG41-INT-SLM-EQ-BK-Redline-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-BK-Redline/FG41-INT-SLM-EQ-BK-Redline-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-BK-Redline/FG41-INT-SLM-EQ-BK-Redline-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Slim Guitar 41-inches",
    id: "FG41-INT-SLM-EQ",
    description:
      "Unleash your musical prowess with the Guitar Calypso Folk Intermediate Slim EQ! This 41-inch beauty boasts a sleek and slim design, perfect for players who appreciate comfort and style. Elevate your sound with the EQ feature, adding a whole new dimension to your music. Ideal for intermediate players seeking quality and performance, this guitar is a must-have for anyone looking to take their music to the next level.",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG41-INT-SLM-EQ.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ/FG41-INT-SLM-EQ-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ/FG41-INT-SLM-EQ-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ/FG41-INT-SLM-EQ-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Left Handed Slim Guitar 41-inches",
    id: "FG41-INT-SLM-EQ-LH",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Intermediate Slim EQ Left Hand (41 Inches). Designed specifically for left-handed players, this guitar features a slim profile that ensures maximum comfort during extended playing sessions. Enjoy the convenience of the built-in EQ, allowing you to fine-tune your sound effortlessly. Elevate your music journey with this exceptional left-handed guitar!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG41-INT-SLM-EQ-LH.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-LH/FG41-INT-SLM-EQ-LH-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-LH/FG41-INT-SLM-EQ-LH-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG41-INT-SLM-EQ-LH/FG41-INT-SLM-EQ-LH-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Slim Guitar 38-inches",
    id: "FG38-SLM-EQ",
    description:
      "Experience the harmonious blend of style and sound with the Guitar Calypso Folk Slim EQ. Its sleek design not only catches the eye but also delivers a rich, resonant sound quality that will captivate any music enthusiast. With versatile EQ options, you can customize your tone to suit your unique style and preferences. Elevate your musical journey with the Guitar Calypso Folk Slim EQ - a perfect companion for any aspiring musician!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG38-SLM-EQ.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-INT-SLM-EQ/FG38-INT-SLM-EQ-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-INT-SLM-EQ/FG38-INT-SLM-EQ-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-INT-SLM-EQ/FG38-INT-SLM-EQ-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Left Handed Slim Guitar 38-inches",
    id: "FG38-SLM-EQ-BK-LH",
    description:
      "Discover the perfect harmony with the Guitar Calypso Folk Slim EQ Black Left Hand! Designed specifically for left-handed players, this 38-inch beauty boasts a slim EQ for effortless adjustments, ensuring you achieve your desired sound with ease. Embrace the unique calypso folk style and unleash your musical creativity in a whole new way!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG38-SLM-EQ-BK-LH.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-BK-LH/FG38-SLM-EQ-BK-LH-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-BK-LH/FG38-SLM-EQ-BK-LH-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-BK-LH/FG38-SLM-EQ-BK-LH-3.png",

      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Left Handed Slim Guitar 38-inches",
    id: "FG38-SLM-EQ-LH",
    description:
      "Unleash your musical creativity with the Guitar Calypso Folk Slim EQ Left Hand, a perfect companion for left-handed players. Its slim design makes it portable and easy to carry, allowing you to play your tunes anywhere. Customize your sound effortlessly with the built-in EQ feature. Elevate your music experience with this 38-inch beauty â€“ grab yours now and let your melodies shine!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG38-SLM-EQ-LH.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-LH/FG38-SLM-EQ-LH-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-LH/FG38-SLM-EQ-LH-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-LH/FG38-SLM-EQ-LH-3.png",

      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Slim Guitar 38-inches",
    id: "FG38-SLM-EQ-SB",
    description:
      "Strum your way to musical bliss with the Guitar Calypso Folk Slim EQ Sunburn. Its sleek design not only catches the eye but also delivers rich tones that will elevate your playing experience. With a built-in EQ, you can easily fine-tune your sound to perfection. Unleash your creativity and dive into the world of music with this exceptional 38-inch guitar!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG38-SLM-EQ-SB.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-SB/FG38-SLM-EQ-SB-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-SB/FG38-SLM-EQ-SB-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG38-SLM-EQ-SB/FG38-SLM-EQ-SB-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-top.png",
      "/images/specificImages/guitar/Acoustic/Electro/EQ/EQ-bottom.png",
    ],
  },
  {
    name: "Electro-Acoustic Slim Guitar 40-inches",
    id: "FG40-088-SLM-SB-EQ",
    description:
      "Strum in style with the Guitar Calypso Folk Slim Sunburn EQ! Its slim design offers both comfort and elegance, perfect for passionate musicians. The eye-catching sunburst finish adds a touch of flair, while the built-in EQ ensures your tunes sound just right. Elevate your musical journey with this 40-inch beauty today!",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: [
      "/images/guitars/Acoustic/Electro/FG40-008SLM-SB-EQ.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG40-088-SLM-SB-EQ/FG40-088-SLM-SB-EQ-1.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG40-088-SLM-SB-EQ/FG40-088-SLM-SB-EQ-2.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG40-088-SLM-SB-EQ/FG40-088-SLM-SB-EQ-3.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG40-088-SLM-SB-EQ/FG40-088-SLM-SB-EQ-4.png",
      "/images/specificImages/guitar/Acoustic/Electro/FG40-088-SLM-SB-EQ/FG40-088-SLM-SB-EQ-5.png",
    ],
  },
  {
    name: "Classical Guitar 39-inches",
    id: "CL-INT39",
    description:
      "Introducing the Calypso CL-INT39 Classic Guitar. With a 39-inch body featuring white binding line and neck truss rod, this instrument offers both elegance and functionality. Crafted with a Spruce top and Linden back & sides, it delivers a rich, resonant tone. The dyed plywood fingerboard adds a touch of sophistication to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-INT39 Classic Guitar represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    subCategory: "CLASSIC",

    pictureUrl: ["/images/guitars/Classic/CL-INT39.png"],
  },
  {
    name: "Electric Guitar",
    id: "MF-805 SB",
    description:
      '"Calypso MF-805 Electric Guitar\n\nThe Model MF-805 features a solid alder body with a flamed maple top for stunning visuals and rich tone. Its maple neck and rosewood fingerboard ensure smooth playability.\n\nWith H-H pickups, it delivers powerful sound, controlled by 1 volume and 1 tone knob with a 3-way blade switch. Finished in a glossy 2TS color, this guitar is perfect for any player.\n\nTune it standard (E, A, D, G, B, E) and let your music shine!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Electric Guitar",
    id: "MST-BK",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Electric Guitar",
    id: "MST-BL",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Electric Guitar",
    id: "MST-RD",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Electric Guitar",
    id: "MST-SB",
    description:
      '"Calypso MST Electric Guitar\n\nThe MODEL MST features a solid alder body and a smooth maple neck for excellent playability. With a steel tremolo bridge and S-S-S single coil pickups, it delivers bright tones and expressive effects.\n\nControlled by 1 volume and 2 tone knobs with a 5-way switch, this guitar offers versatile sound options. Its sleek gloss finish and die-cast tuning pegs ensure style and stability. Perfect for any musician!"',
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Silent Electro-Acoustic Guitar",
    id: "EA-NAT",
    description:
      "Calypso Silent Electro Acoustic Guitar EA-NAT combines exceptional craftsmanship with advanced technology to deliver a superior playing experience. It features a solid Spruce top for a bright and resonant tone, complemented by an Okoume body that adds warmth and depth. The Mahogany neck ensures smooth, comfortable playability, while the Technical Rosewood fingerboard and bridge enhance durability and tonal richness. The glossy natural finish adds a touch of elegance to its classic design. Equipped with SAVAREZ strings for a vibrant, dynamic sound and a piezo preamp undersaddle bridge for precise amplification, this guitar is perfect for both practice and performance. It also includes a 10mm padded bag for secure protection and easy transport.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Silent Electro-Acoustic Guitar",
    id: "EA-SB",
    description:
      "Calypso Silent Electro Acoustic Guitar EA-SB offers a blend of traditional craftsmanship and modern performance features. It features a solid Spruce top that delivers a bright, resonant tone, paired with an Okoume body that provides warmth and depth. The Mahogany neck ensures smooth and comfortable playability, while the Technical Rosewood fingerboard and bridge enhance both durability and tonal richness. Finished in a sleek, glossy design, this guitar combines elegance with advanced functionality. Equipped with SAVAREZ strings for a vibrant sound and a piezo preamp undersaddle bridge for accurate amplification, it’s ideal for both practice and performance. The guitar comes with a 10mm padded bag for secure protection and convenient transport.",
    category: "GUITAR",
    pictureUrl: [],
  },
  {
    name: "Electro-Acoustic Guitar 41-inches",
    id: "FG41-INT-EQ",
    description:
      "Introducing the FG41-INT-EQ: an exceptional acoustic guitar designed for versatile performance. Crafted with a spruce top and linden back/sides, this model delivers a rich, resonant tone suitable for various musical styles. The dyed fingerboard and half-cast machine head ensure durability and smooth playability. Finished in a sophisticated brown color, this guitar exudes timeless elegance. Equipped with an MT-3 EQ, it offers precise sound control, making it an ideal choice for musicians seeking flexibility and quality in their sound.",
    category: "GUITAR",
    subCategory: "ELECTRO-ACOUSTIC",
    pictureUrl: ["/images/guitars/Acoustic/Electro/FG41-INT-EQ.png"],
  },
  {
    name: "Classical Guitar 3/4",
    id: "CG-34",
    description:
      "Introduce your little one to the world of music with the Guitar Calypso Classic! Designed specifically for kids, this 3/4 size guitar is not only kid-friendly but also easy to play, making it a perfect choice for budding musicians. Experience high-quality sound that will inspire your child's musical journey. Get the Guitar Calypso Classic today and watch your child's creativity flourish!",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/CG-34.png",
      "/images/specificImages/guitar/Classic/CG-34/CG-34-1.png",
      "/images/specificImages/guitar/Classic/CG-34/CG-34-2.png",
      "/images/specificImages/guitar/Classic/CG-34/CG-34-3.png",
    ],
  },
  {
    name: "Classical Guitar 1/4",
    id: "CG-BL-1/4",
    description:
      "Introduce your budding musician to the world of guitar with the Guitar Calypso Classic Blue 1/4! Designed with kids in mind, this vibrant blue guitar is not only visually appealing but also ideal for beginners. Let your child's musical journey begin with this kid-friendly instrument that promises hours of fun and learning.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/CG-14-BL.png",
      "/images/specificImages/guitar/Classic/CG-14-BL/CG-BL-14-1.png",
      "/images/specificImages/guitar/Classic/CG-14-BL/CG-BL-14-2.png",
      "/images/specificImages/guitar/Classic/CG-14-BL/CG-BL-14-3.png",
    ],
  },
  {
    name: "Classical Guitar",
    id: "CG851-GM",
    description:
      "The Guitar Calypso Classic CG851-GM offers a timeless design paired with a rich, resonant sound. Built for both beginners and seasoned players, its comfortable build ensures an easy and enjoyable playing experience. Perfect for various genres, this guitar is a reliable choice for practice or performance.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/CG851-GM.png",
      "/images/specificImages/guitar/Classic/Electro/CG851-GM/CG851-GM-1.png",
      "/images/specificImages/guitar/Classic/Electro/CG851-GM/CG851-GM-2.png",
      "/images/specificImages/guitar/Classic/Electro/CG851-GM/CG851-GM-3.png",
    ],
  },
  {
    name: "Classical Guitar 39-inches",
    id: "Calypso-CL-CE39-EQ",
    description:
      "Strum in style with the Guitar Calypso Classic EQ (39 Inches), featuring a classic design that exudes timeless elegance. Take your sound to the next level with the built-in EQ, allowing you to fine-tune your tunes effortlessly. At an ideal size of 39 inches, this guitar offers both portability and comfort without compromising on quality. Elevate your musical journey with the Guitar Calypso - a perfect blend of classic charm and modern functionality!",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/Electro/CL-CE39-EQ.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ/CL-CE39-EQ-1.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ/CL-CE39-EQ-2.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ/CL-CE39-EQ-3.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ/CL-CE39-EQ-4.png",
    ],
  },
  {
    name: "Classical Guitar 39-inches",
    id: "Calypso-CL-CE39-EQ-BK",
    description:
      "Unleash your inner musician with the Guitar Calypso Classic EQ Black! This 39-inch beauty features a classic design that exudes timeless elegance. Equipped with a built-in EQ, it offers versatility and allows you to fine-tune your sound effortlessly. Whether you're a beginner or a seasoned player, this guitar is the perfect size for comfortable playing. Elevate your musical journey with the Guitar Calypso Classic EQ Black today!",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/Electro/CL-CE39-EQ-BK.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ-BK/CL-CE39-EQ-BK-1.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ-BK/CL-CE39-EQ-BK-2.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ-BK/CL-CE39-EQ-BK-3.png",
      "/images/specificImages/guitar/Classic/Electro/CL-CE39-EQ-BK/CL-CE39-EQ-BK-4.png",
    ],
  },
  {
    name: "Classical Guitar 39-inches",
    id: "CL-INT39-EQ",
    description:
      "Unleash your inner musician with the Guitar Calypso Classic Intermediate EQ! Featuring a classic design that exudes timeless elegance, this guitar is perfect for intermediate players looking to enhance their skills. Take your performance to the next level with the built-in EQ, allowing you to fine-tune your sound effortlessly. Elevate your musical journey with the Guitar Calypso Classic Intermediate EQ – a must-have for any aspiring guitarist!",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: ["/images/guitars/Classic/Electro/CL-INT39-EQ.png"],
  },
  {
    name: "Classical Guitar 2/4",
    id: "INT-YW-2/4",
    description:
      "The Guitar Calypso Classic Intermediate Yellow 2/4 is designed with a vibrant yellow finish that captures attention. Its 2/4 size makes it an excellent choice for kids, offering comfortable playability tailored for smaller hands. Perfect for beginners or young learners, this guitar provides a balanced sound and durable build for lasting use.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/INT-YW-24.png",
      "/images/specificImages/guitar/Classic/INT-YW-24/INT-YW-24-1.png",
      "/images/specificImages/guitar/Classic/INT-YW-24/INT-YW-24-2.png",
      "/images/specificImages/guitar/Classic/INT-YW-24/INT-YW-24-3.png",
    ],
  },
  {
    name: "Classical Guitar 2/4",
    id: "CG-RD-2/4",
    description:
      "Introduce your little rockstar to the world of music with the Guitar Calypso Classic Red 2/4! Designed with kids in mind, this vibrant red guitar is not only visually appealing but also built to withstand the adventures of young musicians. Let your child's creativity shine with this durable and exciting musical companion!",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/CG-RD-24.png",
      "/images/specificImages/guitar/Classic/CG-RD-24/CG-RD-24-1.png",
      "/images/specificImages/guitar/Classic/CG-RD-24/CG-RD-24-2.png",
      "/images/specificImages/guitar/Classic/CG-RD-24/CG-RD-24-3.png",
    ],
  },
  {
    name: "Classical Guitar 3/4",
    id: "CG-RD-3/4",
    description:
      "Strum your way to musical joy with the Guitar Calypso Classic Red in the perfect 3/4 size for kids. Let the vibrant red color inspire creativity as your young musician creates beautiful melodies. Crafted for high-quality sound, this guitar is a fantastic choice to ignite a passion for music in your child.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/CG-RD-34.png",
      "/images/specificImages/guitar/Classic/CG-RD-34/CG-RD-34-1.png",
      "/images/specificImages/guitar/Classic/CG-RD-34/CG-RD-34-2.png",
      "/images/specificImages/guitar/Classic/CG-RD-34/CG-RD-34-3.png",
    ],
  },
  {
    name: "Classical Guitar 1/4",
    id: "CL-RDS-1/4",
    description:
      "Introducing the Guitar Calypso Classic 1/4 in Red Sunburn, specially designed for kids who are eager to embark on their musical journey. This guitar features a kid-friendly design that ensures comfortable playability and encourages young musicians to explore their musical talents. The vibrant red sunburn color option adds a touch of fun and excitement, making it visually appealing to young players. Crafted to be easy to play, this guitar is perfect for beginners learning the ropes of playing music. Give your child the gift of music with the Guitar Calypso Classic 1/4 in Red Sunburn and watch them create beautiful melodies with ease.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/CL-RDS-14.png",
      "/images/specificImages/guitar/Classic/CL-RDS-14/CL-RDS-14-1.png",
      "/images/specificImages/guitar/Classic/CL-RDS-14/CL-RDS-14-2.png",
      "/images/specificImages/guitar/Classic/CL-RDS-14/CL-RDS-14-3.png",
    ],
  },
  {
    name: "Classical Guitar 3/4",
    id: "CL-RDS-3/4",
    description:
      "The Guitar Calypso Classic Red Sunburn 3/4 is a kid-friendly instrument designed for young musicians. Its vibrant red sunburn finish captures attention, while the 3/4 size ensures a comfortable playing experience for smaller hands. Crafted from high-quality materials, this guitar delivers reliable sound and durability, making it an excellent choice for beginners.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [],
  },
  {
    name: "Classical Guitar 39-inches",
    id: "Calypso CL-INT39-SLM-EQ-BK",
    description:
      "Unleash your musical prowess with the Guitar Calypso Classic Slim EQ Black in a sleek 39-inch design. Elevate your performance with its built-in EQ for customized sound adjustments, delivering versatility and top-notch audio quality. Dive into a world of rich melodies and captivating rhythms – this guitar is your ticket to musical excellence!",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/Electro/CL-INT39-SLM-EQ-BK.png",
      "/images/specificImages/guitar/Classic/Electro/CL-INT39-SLM-EQ-BK/CL-INT39-SLM-EQ-BK-1.png",
      "/images/specificImages/guitar/Classic/Electro/CL-INT39-SLM-EQ-BK/CL-INT39-SLM-EQ-BK-2.png",
      "/images/specificImages/guitar/Classic/Electro/CL-INT39-SLM-EQ-BK/CL-INT39-SLM-EQ-BK-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "Student-BK",
    description:
      "The Guitar Calypso Classic Student Black is designed with beginners in mind, offering a comfortable playing experience and a timeless black finish. Its classic design pairs with versatile sound capabilities, making it suitable for various musical styles. This 3/4-sized guitar is lightweight and easy to handle, perfect for young learners or those starting their musical journey.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-BK.png",
      "/images/specificImages/guitar/Classic/STUDENT-BK/STUDENT-BK-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-BK/STUDENT-BK-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-BK/STUDENT-BK-3.png",
    ],
  },
  {
    name: "Student Classical Guitar 3/4",
    id: "STUDENT-BK-3/4",
    description:
      "Introduce your young musician to the world of music with the Guitar Calypso Classic Student in Black (3/4 size). Crafted from high-quality materials, this guitar is specifically designed for kids, ensuring a comfortable and enjoyable playing experience. Its classic design adds a touch of elegance to their musical journey. Get your hands on this perfect instrument for budding talents today!",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-BK-34.png",
      "/images/specificImages/guitar/Classic/STUDENT-BK-34/STUDENT-BK-34-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-BK-34/STUDENT-BK-34-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-BK-34/STUDENT-BK-34-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "STUDENT-BLS",
    description:
      "The Calypso Classic Student Bleu Sunburn guitar offers a vibrant design paired with reliable performance, ideal for beginners and enthusiasts alike. Its sunburst finish in shades of blue adds a unique aesthetic while maintaining the classic Calypso style. Crafted for comfort and durability, this guitar ensures a smooth playing experience. Perfect for practice sessions or casual performances.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-BLS.png",
      "/images/specificImages/guitar/Classic/STUDENT-BLS/STUDENT-BLS-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-BLS/STUDENT-BLS-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-BLS/STUDENT-BLS-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "STUDENT-RDS",
    description:
      "The Guitar Calypso Classic Student in Red Sunburn features a timeless design, perfect for beginners and students. Its vibrant red sunburn finish adds a touch of style, making practice sessions visually appealing. Crafted for ease of playability, it ensures a comfortable learning experience for aspiring musicians. Ideal for those starting their musical journey.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-RDS.png",
      "/images/specificImages/guitar/Classic/STUDENT-RDS/STUDENT-RDS-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-RDS/STUDENT-RDS-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-RDS/STUDENT-RDS-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "STUDENT-SB",
    description:
      "The Calypso Classic Student Guitar in Sunburn is designed for beginners seeking a balance of quality and style. Its classic design ensures comfortable playability, making it an ideal choice for learners. The vibrant Sunburn finish adds a touch of personality, perfect for those looking to stand out. Crafted for durability, this guitar offers a reliable option for daily practice.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-SB.png",
      "/images/specificImages/guitar/Classic/STUDENT-SB/STUDENT-SB-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-SB/STUDENT-SB-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-SB/STUDENT-SB-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "Student-YW",
    description:
      "The Guitar Calypso Classic Student Yellow is an excellent choice for beginners, featuring a vibrant yellow finish that adds a touch of personality. Its classic design ensures comfortable playability, making it suitable for learners of all ages. Crafted for durability and ease of use, this guitar provides a great introduction to music.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-YW.png",
      "/images/specificImages/guitar/Classic/STUDENT-YW/STUDENT-YW-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-YW/STUDENT-YW-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-YW/STUDENT-YW-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "Student-YW-INT",
    description:
      "The Guitar Calypso Classic Student Yellow Intermediate is designed for aspiring musicians at the intermediate level. Featuring a classic design and a vibrant yellow finish, this guitar is both functional and visually appealing. Its size and build make it an excellent choice for students seeking to enhance their skills.",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [],
  },
  {
    name: "Student Classical Guitar 1/4",
    id: "Student-YW-1/4",
    description:
      "Introduce your little one to the world of music with the Guitar Calypso Classic Yellow Student 1/4. This beginner-friendly instrument is perfect for young musicians, with its kid-sized design and vibrant yellow color that adds a playful touch. Let your child's musical journey begin in style with this eye-catching and easy-to-handle guitar!",
    category: "GUITAR",
    subCategory: "CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/STUDENT-YW-14.png",
      "/images/specificImages/guitar/Classic/STUDENT-YW-14/STUDENT-YW-14-1.png",
      "/images/specificImages/guitar/Classic/STUDENT-YW-14/STUDENT-YW-14-2.png",
      "/images/specificImages/guitar/Classic/STUDENT-YW-14/STUDENT-YW-14-3.png",
    ],
  },
  {
    name: "Student Classical Guitar",
    id: "Student-YW-EQ",
    description:
      "Strum your way into the world of music with the Guitar Calypso Classic in a vibrant yellow hue! Perfect for students, this guitar features a built-in EQ for easy tuning and customization. Unleash your creativity and musical talents with this student-friendly instrument that promises both style and functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/Electro/STUDENT-YW-EQ.png",
      "/images/specificImages/guitar/Classic/Electro/STUDENT-YW-EQ/STUDENT-YW-EQ-1.png",
      "/images/specificImages/guitar/Classic/Electro/STUDENT-YW-EQ/STUDENT-YW-EQ-2.png",
      "/images/specificImages/guitar/Classic/Electro/STUDENT-YW-EQ/STUDENT-YW-EQ-3.png",
      "/images/specificImages/guitar/Classic/Electro/STUDENT-YW-EQ/STUDENT-YW-EQ-4.png",
    ],
  },
  {
    name: "Digital Piano",
    id: "DP-4",
    description: "",
    category: "PIANO",
    subCategory: "DIGITAL",
    pictureUrl: ["/images/pianos/DP4.png"],
  },
  {
    name: "Digital Piano",
    id: "DP-71",
    description: "",
    subCategory: "DIGITAL",
    category: "PIANO",
    pictureUrl: ["/images/pianos/DP-71.png"],
  },
  {
    name: "Digital White Piano",
    id: "PN-2",
    subCategory: "DIGITAL",
    description: "",
    category: "PIANO",
    pictureUrl: ["/images/pianos/PN-2.png"],
  },
  {
    name: "Digital White Piano",
    id: "DP-21",
    subCategory: "DIGITAL",
    description: "",
    category: "PIANO",
    pictureUrl: ["/images/pianos/DP-21.png"],
  },

  {
    name: "Digital Keyboard",
    id: "PK1",
    description:
      '"Introducing the Calypso PK-1, a cutting-edge digital piano designed for musicians on the move. Available in sleek black, Red or pristine white, this portable digital piano combines convenience with professional-grade features.\n\nFeaturing a semi-weight standard keyboard powered by the Pure France DREAM 5 sound source, the Calypso PK-1 delivers exceptional sound quality and realistic playing experience with 128-note polyphony. Its extensive library boasts 200 tones, including 128 GM standard tones, and 60 dynamic demos to inspire your creativity.\n\nEquipped with a powerful record/play function and Bluetooth connectivity, you can effortlessly connect your phone or computer to play songs and integrate with compatible learning software. The auto sleep mode activates after 30 minutes of inactivity, conserving energy without interrupting your flow.\n\nEnhance your practice sessions with the built-in metronome offering nine different rhythms and a tempo range of 20 to 280 beats per minute. Plus, take advantage of the four sets of storage memory function keys for easy access to your favorite settings.\n\nAdditional features include split note, dual, reverb level, chorus level, percussion, USB jack for unlimited song recording storage, headphone outputs, MIDI IN/OUT, and audio in/out for seamless connectivity to your devices.\n\nPowered by a 15V3A adapter and featuring 12W speakers, the Calypso PK-1 ensures powerful sound projection for your performances. Plus, with the option to add a sustain pedal (choose from three pedals), you can truly customize your playing experience.\n\nExperience the ultimate blend of portability and performance with the Calypso PK-1 digital piano – your perfect musical companion wherever you go."',
    category: "PIANO",
    subCategory: "KEYBOARD",
    pictureUrl: ["/images/pianos/PK1.png"],
  },
  {
    name: "Digital Keyboard",
    id: "PN-2",
    description:
      "Calypso PN-2 Digital Keyboard offers a wide range of instrument voices and rhythms in a lightweight, portable design. With intuitive controls and built-in speakers, it’s perfect for musicians on the go. Elevate your music-making experience with the PN-2!",
    category: "PIANO",
    subCategory: "KEYBOARD",
    pictureUrl: [],
  },
  {
    name: "Digital Piano",
    id: "DP-15",
    description: "",
    category: "PIANO",
    subCategory: "DIGITAL",
    pictureUrl: ["/images/pianos/DP15.png"],
  },
  {
    name: "Digital Piano",
    id: "DP-81",
    description: "",
    category: "PIANO",
    subCategory: "DIGITAL",
    pictureUrl: ["/images/pianos/DP81.png"],
  },
  {
    name: "Sonata Digital Keyboard",
    id: "K-700",
    description:
      '"Calypso K-700 Digital Keyboard\nDiscover the Calypso K-700 Digital Keyboard—a perfect blend of innovation and creativity for musicians of all levels.\n\nKey Features:\n\n61 Light-Up Keys: Learn and play with ease as the keys illuminate to guide you through your musical journey.\n255 Timbres & 255 Rhythms: Explore a diverse range of sounds and backing styles to enrich your performances.\n50 Demo Songs: Get inspired and practice with a selection of professionally arranged songs.\nMetronome: Improve your timing and rhythm with the integrated metronome feature.\nAuto Bass Chords: Effortlessly create bass lines and chord progressions for a fuller sound.\nEffects: Enhance your music with various effects to add depth and character.\nRecording & Rhythm Programming: Capture your creative ideas and compose your own unique tracks."',
    category: "SONATA",
    subCategory: "KEYBOARD",

    pictureUrl: ["/images/sonata/K-700.png"],
  },
  {
    name: "Sonata Digital Keyboard",
    id: "K-600",
    description:
      '"Calypso K-600 Digital Keyboard\nFeatures:\n\n61 Touch-Sensitive Keys: Enjoy a responsive and dynamic playing experience.\n255 Timbres: Access a wide range of sounds to enhance your music.\n50 Demo Songs: Play along with built-in tracks for inspiration and practice.\n255 Rhythms: Dive into a diverse selection of rhythms to explore various styles.\nAuto Bass Chords: Easily add depth to your music with automatic bass support.\nRecording & Effects: Capture your creations and apply effects for a professional touch.\nMetronome: Stay on beat during practice sessions with the built-in metronome.\nRhythm Programming: Create custom rhythms tailored to your unique sound."',
    category: "SONATA",
    subCategory: "KEYBOARD",

    pictureUrl: ["/images/sonata/K-600.png"],
  },
  {
    name: "Sonata Digital Keyboard",
    id: "ST-200",
    description:
      '"Calypso ST-200 Digital Keyboard\nFeatures:\n\n61 Touch-Sensitive Keys: Experience expressive playing with responsive keys.\n255 Timbres: Enjoy a wide variety of sounds to fuel your creativity.\n255 Rhythms: Explore diverse musical genres with an extensive rhythm selection.\n24 Demo Songs: Play along with built-in tracks to inspire your compositions.\nAuto Bass Chords: Enhance your playing effortlessly with automatic bass support.\nRecording & Effects: Capture your music and apply effects for a polished sound.\nMetronome: Practice with precision using the built-in metronome.\nRhythm Programming: Customize and create unique rhythms to suit your style."',
    category: "SONATA",
    subCategory: "KEYBOARD",

    pictureUrl: ["/images/sonata/ST-200.png"],
  },
  {
    name: "Sonata Digital Keyboard",
    id: "ST-100",
    description:
      '"Calypso ST-100 Digital Keyboard\nFeatures:\n\n61 Touch-Sensitive Keys: Responsive keys for a dynamic playing experience.\n300 Timbres: A diverse selection of sounds to inspire your creativity.\n300 Rhythms: Explore various musical styles with an extensive rhythm library.\n21 Demo Songs: Play along with built-in songs to spark your imagination.\nAuto Bass Chords: Effortlessly add depth to your music with automatic bass support.\nRecording & Effects: Capture your ideas and enhance your sound with built-in effects.\nMetronome: Keep perfect time while practicing or composing.\nRhythm Programming: Create custom arrangements tailored to your style."',
    category: "SONATA",
    subCategory: "KEYBOARD",

    pictureUrl: ["/images/sonata/ST-100.png"],
  },
  {
    name: "5-string Banjo",
    id: "BJ52",
    description:
      'Introducing the Calypso BJ52 5-string banjo. With a sleek 26" body in a vibrant sunburst finish, this instrument exudes style. Crafted with a Spruce top and Mahogany back & sides, it delivers rich, resonant tones. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the BJ52 offers exceptional quality and playability.',
    category: "SPECIAL",
    subCategory: "BANJO",
    pictureUrl: ["/images/special/banjo/BJ52-1.png"],
  },
  {
    name: "Banjola",
    id: "BJA-ADV-29-EQ",
    description:
      "Introducing the Calypso BJA-ADV-29-EQ Banjola. Featuring a 29-inch body with an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a solid Spruce top and Mahogany back & sides, it delivers rich, resonant tones. The Rosewood fingerboard adds a touch of elegance to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the BJA-ADV-29-EQ Banjola combines premium craftsmanship with superior playability.",
    category: "SPECIAL",
    subCategory: "BANJO",

    pictureUrl: ["/images/special/banjo/BJA-ADV-29-EQ-1.png"],
  },
  {
    name: "Cuatro",
    id: "CU-ADV-27-EQ",
    description:
      "Introducing the Calypso CU-ADV-12-EQ Cuatro. Featuring a compact 12-inch body with an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a solid Spruce top and Maple back & sides, it delivers a crisp, resonant tone. The Rosewood fingerboard adds warmth and smooth playability. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-ADV-12-EQ Cuatro represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "SPECIAL",
    subCategory: "CUATRO",
    pictureUrl: ["/images/special/cuatro/CU-ADV-27-EQ.png"],
  },
  {
    name: "Cuatro",
    id: "CU-ADV-32-EQ",
    description:
      "Introducing the Calypso CU-ADV-15-EQ Cuatro. With a versatile 15-inch body featuring an integrated equalizer, this instrument offers exceptional sound control and resonance. Crafted with a solid Spruce top and Maple back & sides, it delivers a vibrant, well-balanced tone. The Rosewood fingerboard ensures smooth playability and adds to the instrument's elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-ADV-15-EQ Cuatro represents a fusion of craftsmanship and musical excellence.",
    category: "SPECIAL",
    subCategory: "CUATRO",
    pictureUrl: ["/images/special/cuatro/CU-ADV-32-EQ.png"],
  },
  {
    name: "Cuatro",
    id: "CU-ADV-35-EQ",
    description:
      "Introducing the Calypso CU-ADV-17-EQ Cuatro. With a spacious 17-inch body and an integrated equalizer, this instrument offers exceptional resonance and sound control. Crafted with a solid Spruce top and Maple back & sides, it delivers a rich, vibrant tone. The Rosewood fingerboard ensures smooth playability and adds a touch of elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-ADV-17-EQ Cuatro embodies quality craftsmanship and musical excellence.",
    category: "SPECIAL",
    subCategory: "CUATRO",
    pictureUrl: ["/images/special/cuatro/CU-ADV-35-EQ.png"],
  },
  {
    name: "Bass Cuatro",
    id: "CU-BS-ADV-33-EQ",
    description:
      "Introducing the Calypso CU-BS-ADV-33-EQ Bass Cuatro. With a commanding 33-inch body and an integrated equalizer, this instrument offers exceptional resonance and precise sound control. Crafted with a solid Spruce top and Maple back & sides, it delivers a deep, resonant bass tone with clarity and warmth. The Rosewood fingerboard ensures smooth playability and adds to the instrument's elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CU-BS-ADV-33-EQ Bass Cuatro represents the pinnacle of craftsmanship and musical excellence.",
    category: "SPECIAL",
    subCategory: "CUATRO",
    pictureUrl: ["/images/special/cuatro/CU-BS-ADV-33-EQ.png"],
  },
  {
    name: "Handpan Black",
    id: "HP-1BK",
    description:
      "Introducing the Calypso Handpan, a captivating musical instrument meticulously crafted to deliver unparalleled sound quality and durability. Featuring 22 inches with 10 pre-tuned notes in D Minor, including a distinctive center note (Ding) at D3, and 9 accompanying notes ranging from A3 to C5. Constructed from premium Nitrogen Steel material and enhanced through a meticulous Nitriding Heating process, the Calypso Handpan produces ethereal, warm tones with vibrant overtones. Its unique rubber edging design enhances sound collection, reduces dissonant resonance, and ensures clear overtones for a delightful auditory experience. Each handpan undergoes boundless manual tuning, resulting in finely controlled tightness across different sound areas, yielding balanced volume and an ethereal tone unique to each instrument. Complete with a versatile Calypso Drum Bag, which doubles as a backpack or handbag, providing comprehensive protection against scratches, impacts, and moisture, making it effortlessly portable for musicians on the go. Experience the harmonious blend of craftsmanship and musicality with the Calypso Handpan.",
    category: "SPECIAL",
    subCategory: "HANDPAN",
    pictureUrl: ["/images/special/handpan/HP-1BK.png"],
  },
  {
    name: "Handpan Golden Storm",
    id: "HP-1GDST",
    description:
      "Introducing the Calypso Handpan, a captivating musical instrument meticulously crafted to deliver unparalleled sound quality and durability. Featuring 22 inches with 10 pre-tuned notes in D Minor, including a distinctive center note (Ding) at D3, and 9 accompanying notes ranging from A3 to C5. Constructed from premium Nitrogen Steel material and enhanced through a meticulous Nitriding Heating process, the Calypso Handpan produces ethereal, warm tones with vibrant overtones. Its unique rubber edging design enhances sound collection, reduces dissonant resonance, and ensures clear overtones for a delightful auditory experience. Each handpan undergoes boundless manual tuning, resulting in finely controlled tightness across different sound areas, yielding balanced volume and an ethereal tone unique to each instrument. Complete with a versatile Calypso Drum Bag, which doubles as a backpack or handbag, providing comprehensive protection against scratches, impacts, and moisture, making it effortlessly portable for musicians on the go. Experience the harmonious blend of craftsmanship and musicality with the Calypso Handpan.",
    category: "SPECIAL",
    subCategory: "HANDPAN",
    pictureUrl: ["/images/special/handpan/HP-1GDST.png"],
  },
  {
    name: "Handpan Spiral Deep Gold",
    id: "HP-SPDGD",
    description:
      "Introducing the Calypso Handpan, a captivating musical instrument meticulously crafted to deliver unparalleled sound quality and durability. Featuring 22 inches with 10 pre-tuned notes in D Minor, including a distinctive center note (Ding) at D3, and 9 accompanying notes ranging from A3 to C5. Constructed from premium Nitrogen Steel material and enhanced through a meticulous Nitriding Heating process, the Calypso Handpan produces ethereal, warm tones with vibrant overtones. Its unique rubber edging design enhances sound collection, reduces dissonant resonance, and ensures clear overtones for a delightful auditory experience. Each handpan undergoes boundless manual tuning, resulting in finely controlled tightness across different sound areas, yielding balanced volume and an ethereal tone unique to each instrument. Complete with a versatile Calypso Drum Bag, which doubles as a backpack or handbag, providing comprehensive protection against scratches, impacts, and moisture, making it effortlessly portable for musicians on the go. Experience the harmonious blend of craftsmanship and musicality with the Calypso Handpan.",
    category: "SPECIAL",
    subCategory: "HANDPAN",
    pictureUrl: ["/images/special/handpan/HP-SPDGD.png"],
  },
  {
    name: "10-inch Steel Tongue Drum",
    id: "STD-10-11",
    description: "",
    category: "SPECIAL",
    subCategory: "TONGUE",
    pictureUrl: ["/images/special/tongue/STD-10-11.png"],
  },
  {
    name: "12-inch Steel Tongue Drum",
    id: "STD-12-13",
    description: "",
    category: "SPECIAL",
    subCategory: "TONGUE",
    pictureUrl: ["/images/special/tongue/STD-12-13.png"],
  },
  {
    name: "14-inch Steel Tongue Drum",
    id: "STD-14-15",
    description: "",
    category: "SPECIAL",
    subCategory: "TONGUE",
    pictureUrl: ["/images/special/tongue/STD-14-15.png"],
  },
  {
    name: "Intermediate Cello",
    id: "MC760R",
    description:
      "Introducing the Calypso Intermediate Cello, a refined instrument designed for advancing cellists seeking a higher level of performance. With a solid spruce top and solid maple back, this cello produces a rich, resonant sound with exceptional projection and depth. The rosewood parts add a touch of sophistication to the instrument's appearance, complementing its elegant design. Whether you're honing your skills in rehearsals or captivating audiences on stage, the Calypso Intermediate Cello delivers unparalleled tonal clarity and dynamic range. Elevate your musical expression and unlock new possibilities with the Calypso Intermediate Cello, where craftsmanship meets artistry for an unforgettable playing experience.",
    category: "STRINGS",
    subCategory: "CELLO",
    pictureUrl: ["/images/strings/cello/MC760R.png"],
  },
  {
    name: "Student Cello",
    id: "MC760L",
    description:
      "Introducing the Calypso Student Cello, a reliable companion for beginner cellists embarking on their musical journey. Crafted with a laminated spruce top and laminated maple back, this cello offers durability and resilience while producing clear and balanced tones. The rosewood parts add a touch of elegance to the instrument's appearance, enhancing its aesthetic appeal. Whether you're practicing at home or performing in a school orchestra, the Calypso Student Cello provides a comfortable playing experience and reliable performance. Dive into the world of music with confidence and passion, supported by the reliability and affordability of the Calypso Student Cello.",
    category: "STRINGS",
    subCategory: "CELLO",
    pictureUrl: ["/images/strings/cello/MC760L.png"],
  },
  {
    name: "Intermediate Cello",
    id: "INT-6011H",
    description:
      "Introducing the Calypso Student Cello, a reliable companion for beginner cellists embarking on their musical journey. Crafted with a laminated spruce top and laminated maple back, this cello offers durability and resilience while producing clear and balanced tones. The rosewood parts add a touch of elegance to the instrument's appearance, enhancing its aesthetic appeal. Whether you're practicing at home or performing in a school orchestra, the Calypso Student Cello provides a comfortable playing experience and reliable performance. Dive into the world of music with confidence and passion, supported by the reliability and affordability of the Calypso Student Cello.",
    category: "STRINGS",
    subCategory: "CELLO",
    pictureUrl: ["/images/strings/cello/INT-6011H.png"],
  },
  {
    name: "Advanced C Viola",
    id: "MVA012C",
    description:
      "Experience the pinnacle of craftsmanship and performance with the Calypso Advanced C Viola. Meticulously crafted with a solid spruce top and maple back and sides, this viola delivers a rich, resonant sound that captivates audiences and inspires players alike. The luxurious rosewood fingerboard and pegs offer a smooth and comfortable playing experience, allowing for effortless expression and control. Enhanced with a wengue tailpiece and chinrest, the Calypso Advanced C Viola embodies elegance and sophistication, both in appearance and sound. Elevate your musical journey with the precision and artistry of the Calypso Advanced C Viola, where unparalleled quality meets timeless beauty.",
    category: "STRINGS",
    subCategory: "VIOLA",
    pictureUrl: ["/images/strings/viola/MVA012C.png"],
  },
  {
    name: "Concert 12E Viola",
    id: "MVA012E",
    description:
      "Introducing the Calypso Concert 12E Viola, a masterpiece of elegance and precision designed for the discerning musician. Crafted with a solid spruce top and maple back and sides, this viola resonates with a rich, full-bodied sound that fills the concert hall with warmth and depth. The ebony fingerboard, pegs, and chinrest provide a luxurious playing experience, offering smoothness and stability that elevate your performance to new heights. Enhanced with a sleek metal tailpiece, the Calypso Concert 12E Viola ensures impeccable tuning and reliability, allowing you to focus on your artistry without distraction. Immerse yourself in the unparalleled beauty and craftsmanship of the Calypso Concert 12E Viola, where every note is a masterpiece and every performance is unforgettable.",
    category: "STRINGS",
    subCategory: "VIOLA",
    pictureUrl: ["/images/strings/viola/MVA012E.png"],
  },
  {
    name: "Concert 13E Viola",
    id: "MVA013E",
    description:
      "Introducing the Calypso Concert 13E Viola, a pinnacle of craftsmanship and performance. Crafted with a solid spruce top and maple back and sides, this viola delivers a rich, resonant sound that commands attention in any concert hall. The ebony fingerboard, pegs, and chinrest provide a luxurious playing experience, offering smoothness and stability for effortless expression. Enhanced with an aluminum tailpiece, the Calypso Concert 13E Viola ensures impeccable tuning and reliability, allowing you to focus on your artistry without distraction. Immerse yourself in the unparalleled beauty and craftsmanship of the Calypso Concert 13E Viola, where every note sings with clarity and depth, and every performance is unforgettable.",
    category: "STRINGS",
    subCategory: "VIOLA",
    pictureUrl: ["/images/strings/viola/MVA013E.png"],
  },
  {
    name: "Concert B Viola",
    id: "MVA013B",
    description:
      "Step into the world of musical excellence with the Calypso Concert B Viola. Handcrafted with a solid spruce top and maple back and sides, this viola delivers a refined and resonant sound that captivates audiences with its depth and clarity. The rosewood fingerboard ensures smooth and precise playability, while the boxwood pegs, tailpiece, and chinrest add an elegant touch of sophistication. Whether you're performing on stage or practicing at home, the Calypso Concert B Viola promises a premium playing experience, combining exquisite craftsmanship with superior tone quality. Elevate your musical journey to new heights with the Calypso Concert B Viola, where artistry and tradition converge in perfect harmony.",
    category: "STRINGS",
    subCategory: "VIOLA",
    pictureUrl: ["/images/strings/viola/MVA013B.png"],
  },
  {
    name: "Intermediate Viola",
    id: "MV406RS",
    description:
      "Introducing the Calypso Intermediate Viola - a harmonious blend of craftsmanship and quality, designed to elevate your musical expression. Crafted with a solid spruce top and maple back and sides, this viola resonates with clarity and warmth, allowing your melodies to soar effortlessly. The rich tones are complemented by a luxurious rosewood fingerboard, pegs, and chinrest, offering a smooth and comfortable playing experience. Complete with a durable metal tailpiece, the Calypso Intermediate Viola is built to withstand the demands of your musical journey, ensuring reliability and performance every time you play. Immerse yourself in the enchanting world of music with the Calypso Intermediate Viola, where tradition meets innovation for a truly unforgettable playing experience.",
    category: "STRINGS",
    subCategory: "VIOLA",
    pictureUrl: ["/images/strings/viola/MV406RS.png"],
  },
  {
    name: "Violin",
    id: "HM-1416",
    description:
      '"Calypso HM-1416 Hand-Crafted Violin Outfit – Superior Craftsmanship and Exceptional Sound.\nThe Calypso Hand-Crafted Violin Outfit is a masterpiece, meticulously crafted for discerning musicians. Featuring a solid hand-crafted spruce soundboard top and solid hand-crafted flame maple back and sides, this violin offers superior tone and resonance, ideal for serious players.\nThe hand-crafted neck and scroll with flame detailing, combined with carefully inlaid purfling, reflect the attention to detail and expert craftsmanship. Upgraded with ebony fittings—including the fingerboard, pegs, and chinrest—the violin is equipped with a carbon composite tailpiece with four built-in fine tuners for precise tuning. The Swiss eye peg ensures smooth and stable peg adjustments.\nWith aluminum-magnesium composite steel strings and a seasoned hand-carved bridge, this violin delivers outstanding sound quality, projection, and durability.\nIncludes:\nVLS95AC Lightweight Oblong Violin Case (Foam Shell)\nMVB24 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nA stunning violin outfit for advanced players who demand unparalleled craftsmanship and performance."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/HM-1416.png"],
  },
  {
    name: "Violin",
    id: "INT-1411",
    description:
      '"Calypso INT-1411 Full Solid Carved Violin Outfit – Rich Tone & Craftsmanship\nCrafted for advancing students and serious beginners, the Calypso Full Solid Carved Violin offers enhanced resonance and response. Built with a solid carved spruce top and solid carved maple back, sides, and neck, it delivers warm, expressive tone and lasting durability.\nThis model features inlaid purfling, a classic yellow-brown glossy finish, and black-dyed hardwood fittings. The aluminum tailpiece includes 4 built-in fine tuners, while strong steel strings and a seasoned, hand-carved bridge provide excellent playability and tuning stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA solid choice for players ready to elevate their sound with true carved wood quality."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1411.png"],
  },
  {
    name: "Violin",
    id: "INT-1413AT",
    description:
      '"Calypso INT-1413AT Ebony Fitting Solid Wood Violin Outfit – Premium Feel, Classic Sound\nDesigned for advancing players, the Calypso Ebony Fitting Violin Outfit offers exceptional tone and refined aesthetics. Built with a solid carved spruce top and solid carved maple back, sides, and neck, this model provides rich resonance and excellent projection.\nFinished in an elegant antique brown matte (ABM), it features inlaid purfling and upgraded ebony fittings—fingerboard, pegs, and chinrest—for enhanced durability and smoother playability. The aluminum tailpiece includes 4 built-in fine tuners, paired with strong steel strings and a seasoned, hand-carved bridge for optimal sound and tuning stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow with a Brazilwood stick and ebony frog\nRosin & Strong Nylon Hanger\nA stylish and high-performing violin outfit for dedicated students and intermediate players."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1413AT.png"],
  },
  {
    name: "Violin",
    id: "INT-1413PH",
    description:
      '"Calypso INT-1413PH  Ebony Fitting Solid Wood Violin Outfit – Premium Feel, Classic Sound\nDesigned for advancing players, the Calypso Ebony Fitting Violin Outfit offers exceptional tone and refined aesthetics. Built with a solid carved spruce top and solid carved maple back, sides, and neck, this model provides rich resonance and excellent projection.\nFinished in a warm Antique Brown Matte (ABM), it features inlaid purfling and upgraded ebony fittings—fingerboard, pegs, and chinrest—for enhanced durability and smoother playability. The aluminum tailpiece includes four built-in fine tuners, paired with strong steel strings and a seasoned, hand-carved bridge for optimal sound and tuning stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow – Brazilwood Stick & Ebony Frog\nRosin & Strong Nylon Hanger\nA stylish, high-performing violin outfit ideal for dedicated students and intermediate players."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: [],
  },
  {
    name: "Violin",
    id: "INT-1413YA",
    description:
      '"Calypso INT-1413YA Ebony Fitting Solid Wood Violin Outfit – Enhanced Craftsmanship, Superior Sound\nThe Calypso Ebony Fitting Solid Wood Violin Outfit is designed for players seeking both premium quality and exceptional sound. Featuring a solid carved spruce soundboard top and solid carved maple body & neck, this violin offers rich resonance and great projection.\nWith inlaid purfling and ebony fittings—including the fingerboard, pegs, chinrest, and Swiss eye peg—this violin combines aesthetic elegance with robust functionality. The aluminum tailpiece includes 4 built-in fine tuners for accurate tuning, and the strong steel strings and seasoned hand-carved bridge ensure excellent tone and stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nA sophisticated and reliable violin outfit designed for dedicated students and advancing musicians."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1413YA.png"],
  },
  {
    name: "Violin",
    id: "INT-1415BW",
    description:
      '"Calypso INT-1415BW Ebony Fitting Solid Wood Violin Outfit – Premium Craftsmanship, Enhanced Performance\nThe Calypso Ebony Fitting Solid Wood Violin Outfit is a premium choice for advancing players. Featuring a solid carved spruce top and solid carved maple body & neck, it offers rich tone and great resonance. The inlaid purfling adds an elegant touch to the design.\nUpgraded with ebony fittings—including the fingerboard, pegs, chinrest, and Swiss eye peg—this violin ensures durability and smooth playability. The aluminum tailpiece includes 4 built-in fine tuners for precise tuning. Equipped with strong steel strings and a seasoned hand-carved bridge, it provides excellent sound quality and stability.\nIncludes:\nVLS90 Shaped Lightweight Hard Foam Case\nMVB23 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nAn elegant and reliable outfit, designed for serious students and advancing musicians."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1415BW.png"],
  },
  {
    name: "Violin",
    id: "INT-1415RD",
    description:
      '"Calypso INT-1415RD Ebony Fittings Flame Solid Wood Violin Outfit – Stunning Tone, Bold Aesthetics\nThe Calypso Ebony Fittings Flame Solid Wood Violin Outfit offers exceptional craftsmanship with a blend of elegance and durability. Featuring a solid carved spruce soundboard top with tight grain, and a solid carved maple back with moderate flame, this violin is designed to provide rich resonance and projection. The maple solid wood neck and scroll add strength and stability, with a subtle fake flame detail for a distinctive look.\nThe violin’s inlaid purfling and RD color finish give it a classic yet refined appearance. Upgraded with ebony fittings—including the fingerboard, pegs, and chinrest—and a carbon composite tailpiece with 4 built-in fine tuners for easy tuning. The Swiss eye peg ensures smooth and precise adjustments.\nWith strong steel strings and a seasoned hand-carved bridge, this violin produces an excellent tone and reliable stability.\nIncludes:\nVLS95AC Lightweight Oblong Violin Case (Foam Shell)\nMVB24 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nA beautifully crafted violin outfit, ideal for advancing players who demand both style and performance."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1415RD.png"],
  },
  {
    name: "Violin",
    id: "INT-1419A",
    description:
      '"Calypso INT-1419A College Violin Outfit – Unmatched Craftsmanship for Serious Musicians\nThe Calypso College Violin Outfit is a top-tier choice for advanced students and dedicated musicians. Crafted with a solid hand-crafted spruce soundboard top and solid hand-crafted maple back and sides with exceptional flame, this violin offers superb tone, projection, and durability.\nThe hand-crafted neck and scroll, also featuring flame details, add to its elegance, while the hand-carved carefully inlaid purfling and matte finish give it a refined, classic appearance. Featuring premium ebony fittings, including the fingerboard, pegs, chinrest, and tailpiece with four built-in adjusters, this violin is designed for superior playability and tuning precision. The Swiss eye peg ensures smooth and stable peg adjustments.\nWith aluminum-magnesium composite steel strings and a seasoned hand-carved bridge, it delivers a rich, full sound ideal for demanding performance.\nIncludes:\nVLS95CC High-Grade Lightweight Oblong Violin Case\nMVB24 Bow with Brazilwood stick & ebony frog\nRosin & Strong Nylon Hanger\nAn exceptional violin outfit for serious musicians seeking premium performance and fine craftsmanship."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1419A.png"],
  },
  {
    name: "Violin",
    id: "INT-1421",
    description:
      '"Calypso INT-1421 Hand-Crafted Violin Outfit\nExperience the perfect harmony of craftsmanship and performance with the INT-1421 Violin Outfit. Expertly hand-carved for discerning musicians, this violin features a solid spruce soundboard top and solid maple back and sides, both meticulously hand-crafted and enhanced with top-grade flame for a stunning appearance and resonant tone.\nThe hand-carved neck and scroll, along with precisely inlaid purfling, showcase exceptional artistry. Ebony fittings—including fingerboard, pegs, chinrest, and Swiss eye pegs—offer both durability and classic aesthetic appeal. The ebony tailpiece includes four built-in fine tuners for easy and accurate tuning, while the strong nylon hanger ensures secure handling.\nOutfitted with aluminum-magnesium composite steel strings and a seasoned, hand-carved bridge, this violin delivers a rich, responsive sound.\nIncluded Accessories:\nVLS94CB Carbon Color ABS Polycarbonate Shaped Case – Lightweight and protective with a sleek design.\nMVB25AH Brazilwood Octagonal Stick Bow – Balanced and durable for refined control.\nWhether you\'re an advancing student or a passionate enthusiast, the INT-1421 is crafted to inspire and perform."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1421.png"],
  },
  {
    name: "Violin",
    id: "INT-1422",
    description:
      '"Calypso INT-1422 Hand-Crafted Violin Outfit – Unmatched Craftsmanship and Premium Tone\nThe Calypso Hand-Crafted Violin Outfit is designed for serious musicians who demand the finest quality and performance. Featuring a solid hand-crafted spruce soundboard top and solid hand-crafted maple back and sides with top-grade flame, this violin offers superior resonance, tonal richness, and exceptional projection.\nThe hand-crafted neck and scroll, with stunning flame detail, are paired with hand-carved carefully inlaid purfling to create a visually striking and acoustically refined instrument. The ebony fittings—including the fingerboard, pegs, chinrest, and tailpiece with four built-in adjusters—ensure smooth, reliable playability, while the Swiss eye peg offers stable and precise tuning adjustments.\nWith aluminum-magnesium composite steel strings and a seasoned hand-carved bridge, this violin produces an outstanding tone, ideal for demanding performances.\nIncludes:\nVLS94CB Carbon Color ABS Polycarbonate Shaped Case\nMVB25AH Brazilwood Octagonal Stick Bow\nRosin & Strong Nylon Hanger\nA premium violin outfit perfect for musicians seeking unparalleled craftsmanship and performance."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/INT-1422.png"],
  },
  {
    name: "Violin",
    id: "ST-14L",
    description:
      '"Calypso ST-14L 4/4 Laminated Violin Outfit – Canadian Craftsmanship, \nThe Calypso ST-14L 4/4 Violin combines durability, style, and solid performance—perfect for students and advancing players. Designed by a trusted Canadian brand, this full-size violin features a laminated linden top, back, and sides with a solid maple neck and scroll.\nIts vibrant orange-red glossy finish is paired with black-dyed hardwood fittings and an aluminum tailpiece with 4 fine tuners for easy, precise tuning.\nIncludes:\nVLS90 Shaped Lightweight Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA reliable, all-in-one violin outfit that offers great tone and value."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/ST-14L.png"],
  },
  {
    name: "Violin 3/4",
    id: "ST-14L-3/4",
    description:
      '"Calypso ST-14L 3/4 Laminated Violin Outfit – Canadian Craftsmanship\nThe Calypso ST-14L 3/4 Violin is a high-quality student instrument designed for younger players. With a linden laminated top, back, and sides, plus a solid maple neck and scroll, it offers durability and stable tone—ideal for learning and practice.\nIt features a classic orange-red glossy finish, drawn purfling, and black-dyed hardwood fingerboard, pegs, and chinrest. The aluminum tailpiece comes with four built-in fine tuners for easy and precise tuning.\nIncludes:\nVLS90 Shaped Lightweight Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA dependable 3/4-size violin outfit that combines value, playability, and Canadian design."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/ST-14L-34.png"],
  },
  {
    name: "Violin",
    id: "ST-14PF",
    description:
      '"Calypso ST-14PF Paint Flame Laminated Violin Outfit – Stylish Student Model\nThis Calypso violin outfit features a unique painted flame design on the back for an eye-catching look—perfect for students who want both style and sound. Crafted with a laminated linden top, back, and sides, and a solid maple neck and scroll, it offers durability and reliable tone for daily practice.\nFinished in a bright orange-yellow gloss, it includes drawn purfling, black-dyed hardwood fittings, and an aluminum tailpiece with 4 fine tuners. The painted flame adds a touch of elegance, making this a standout choice.\nIncludes:\nVLS90 Shaped Lightweight Foam Case\nMVB22 Bow with genuine white horsehair, hardwood stick, and wenge frog\nRosin & Strong Nylon Hanger\nA bold and dependable violin outfit for students ready to stand out."',
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/ST-14PF.png"],
  },
  {
    name: "Violin",
    id: "MV012C",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV012C.png"],
  },
  {
    name: "Violin",
    id: "MV012E",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV012E.png"],
  },
  {
    name: "Violin",
    id: "MV012L",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV012L.png"],
  },
  {
    name: "Violin",
    id: "MV013B",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV013B.png"],
  },
  {
    name: "Violin",
    id: "MV013E",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV013E.png"],
  },
  {
    name: "Violin",
    id: "MV013W",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV013W.png"],
  },
  {
    name: "Hornless Violin",
    id: "MV100B-HL",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV100BHL.png"],
  },
  {
    name: "Violin",
    id: "MV012RS",
    description: "",
    category: "STRINGS",
    subCategory: "VIOLIN",
    pictureUrl: ["/images/strings/violin/MV012RS.png"],
  },
  {
    name: "Slim Electro-Classical Guitar",
    id: "CL-INT39-SLM-EQ",
    description:
      "Introducing the Calypso CL-INT39-SLM-EQ Classic Guitar. With a slim 39-inch body featuring a cutaway, white binding line, neck truss rod, and an equalizer, this instrument offers enhanced playability and versatile sound control. Crafted with a Spruce top and Linden back & sides, it delivers a rich, resonant tone. The dyed plywood fingerboard adds a touch of elegance to its natural finish. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the CL-INT39-SLM-EQ Classic Guitar represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: [
      "/images/guitars/Classic/Electro/CL-INT39-SLM-EQ.png",
      "/images/specificImages/guitar/Classic/Electro/CL-INT39-SLM-EQ/CL-INT39-SLM-EQ-1.png",
      "/images/specificImages/guitar/Classic/Electro/CL-INT39-SLM-EQ/CL-INT39-SLM-EQ-2.png",
      "/images/specificImages/guitar/Classic/Electro/CL-INT39-SLM-EQ/CL-INT39-SLM-EQ-3.png",
    ],
  },
  {
    name: "Silent Electro-Classical Guitar",
    id: "EN-NAT",
    description:
      "Calypso Silent Electro Classical Guitar EN-NAT is designed for both exceptional acoustic quality and versatility, featuring a solid Spruce top that ensures a bright, resonant tone, complemented by an Okoume body that adds warmth and depth. The Mahogany neck provides smooth, comfortable playability, while the Technical Rosewood fingerboard and bridge enhance durability and tonal richness. The glossy natural finish adds a touch of elegance to its classic design. Equipped with SAVAREZ strings for a vibrant, dynamic sound and a piezo preamp undersaddle bridge for precise amplification, this guitar is perfect for both practice and performance. It also includes a 10mm padded bag for secure protection and easy transport, making it a perfect choice for musicians who appreciate high-quality craftsmanship and advanced features.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",
    pictureUrl: [
      "/images/guitars/Classic/Electro/EN-NAT.png",
      "/images/specificImages/guitar/Classic/Electro/EN-NAT/EN-1.png",
      "/images/specificImages/guitar/Classic/Electro/EN-NAT/EN-2.png",
    ],
  },
  {
    name: "Silent Electro-Classical Guitar",
    id: "EN-SB",
    description:
      "Calypso Silent Electro Classical Guitar EN-SB blends classic craftsmanship with modern technology for a superior playing experience. It features a solid Spruce top for a bright and resonant tone, complemented by an Okoume body that adds warmth and depth. The Mahogany neck ensures smooth, comfortable playability, while the Technical Rosewood fingerboard and bridge enhance both durability and tonal richness. Finished in a sleek glossy coating, this guitar exudes elegance and style. It is equipped with SAVAREZ strings for a vibrant sound and a piezo preamp undersaddle bridge for precise amplification. Packaged with a 10mm padded bag for excellent protection and easy transport, this model is ideal for musicians seeking a blend of refined design and advanced functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: [
      "/images/guitars/Classic/Electro/EN-SB.png",
      "/images/specificImages/guitar/Classic/Electro/EN-SB/EN-1.png",
      "/images/specificImages/guitar/Classic/Electro/EN-SB/EN-2.png",
    ],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-BM-BK",
    description:
      "Calypso Electro Classical Guitar G-BM-BK combines classic elegance with modern features, featuring the Manouch Bar mic for superior amplification. It boasts a Spruce top for a bright, resonant tone, complemented by Mahogany back and sides that deliver a warm, full-bodied sound. The Mahogany neck ensures smooth, comfortable playability, while SAVAREZ CJ500 strings provide a rich and vibrant performance. Finished in a sleek glossy black, this guitar not only looks stunning but is also equipped with 22 frets with rounded edges for effortless play. The 4-Band EQ allows for versatile sound adjustments, and the included 10mm padded bag offers excellent protection and convenient transport. Ideal for classical guitarists seeking both traditional craftsmanship and modern functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-BM-BK.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-BM-BKBK",
    description:
      "Calypso Electro Classical Guitar G-BM-BKBK offers a striking blend of modern features and classic design, enhanced by the Manouch Bar mic for superior acoustic performance. It features a Spruce top for a bright, resonant tone, while the Mahogany back, sides, and neck deliver a warm, rich sound. Equipped with SAVAREZ CJ500 strings, this guitar provides a vibrant and dynamic playing experience. The sleek black gloss finish gives it a contemporary look. With 22 frets and rounded edges for smooth playability, plus a 4-Band EQ for precise sound adjustments, this model is both versatile and stylish. It also includes a 10mm padded bag for secure protection and easy transport, making it an ideal choice for classical musicians who appreciate both form and function.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-BM-BKBK.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-BM-YL",
    description:
      "Calypso Electro Classical Guitar G-BM-YL combines sophisticated design with advanced features, featuring the Manouch Bar mic for exceptional acoustic performance. It sports a Spruce top for a bright, resonant tone, while the Mahogany back, sides, and neck deliver a warm, rich sound. The guitar is equipped with SAVAREZ CJ500 strings, known for their vibrant and dynamic sound. Its glossy dark yellow finish offers a striking and elegant appearance. With 22 frets and rounded edges for smooth playability, it also includes a 4-Band EQ for precise sound control. The included 10mm padded bag provides secure protection and easy transport, making this guitar an excellent choice for classical musicians who value both style and functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-BM-YL.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-BM-N",
    description:
      "Calypso Electro Classical Guitar G-BM-N offers a perfect fusion of classic craftsmanship and modern features, enhanced by the Manouch Bar mic for exceptional sound quality. It features a Spruce top that provides a bright and resonant tone, while the Mahogany back, sides, and neck deliver a warm, rich sound. The guitar is strung with SAVAREZ CJ500 strings for a vibrant and dynamic performance. Finished in a natural gloss, it boasts an elegant and timeless look. With 22 frets and rounded edges for smooth playability, it also includes a 4-Band EQ for precise sound adjustment. The guitar comes with a 10mm padded bag for secure protection and easy transport, making it an ideal choice for classical musicians who appreciate both style and advanced functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-BM-N.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-MIC-BK",
    description:
      "Calypso Electro Classical Guitar G-MIC-BK merges classic craftsmanship with modern technology, featuring the Manouch mic for superior acoustic performance. It boasts a Spruce top for a bright and resonant tone, while the Mahogany back, sides, and neck contribute to a warm and rich sound. The guitar is equipped with SAVAREZ CJ500 strings, known for their vibrant, dynamic quality. Finished in a sleek black gloss, it offers a stylish and contemporary appearance. With 22 frets featuring rounded edges for smooth playability and an integrated EQ with microphone for precise sound control, this model is both versatile and user-friendly. The guitar comes with a 10mm padded bag for excellent protection and convenient transport, making it an ideal choice for classical musicians seeking a blend of elegance and advanced features.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-MIC-BK.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-MIC-BKBK",
    description:
      "Calypso Electro Classical Guitar G-MIC-BKBK merges modern technology with classic elegance, featuring the Manouch mic for exceptional acoustic clarity. It boasts a Spruce top that provides a bright and resonant tone, complemented by Mahogany back, sides, and neck for a warm, rich sound. Strung with SAVAREZ CJ500 strings, it delivers a vibrant and dynamic performance. The sleek black gloss finish enhances its contemporary appeal. With 22 frets and rounded edges for smooth playability, and an integrated EQ with microphone for precise sound control, this guitar is both versatile and stylish. It comes with a 10mm padded bag for secure protection and convenient transport, making it an excellent choice for classical musicians seeking a blend of sophistication and functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-MIC-BKBK.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-MIC-N",
    description:
      "Calypso Electro Classical Guitar G-MIC-N combines exceptional craftsmanship with modern performance features, including the Manouch mic for outstanding sound quality. It features a Spruce top that provides a bright and resonant tone, while the Mahogany back, sides, and neck offer a warm, rich sound. The guitar is strung with SAVAREZ CJ500 strings for a vibrant, dynamic performance. Finished in a natural gloss, it showcases a classic and elegant appearance. With 22 frets and rounded edges for smooth playability, and an integrated EQ with microphone for precise sound control, this model is both versatile and stylish. It comes with a 10mm padded bag for secure protection and convenient transport, making it a great choice for classical musicians who value both aesthetic appeal and advanced functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-MIC-N.png"],
  },
  {
    name: "Manouche Electro-Classical Guitar",
    id: "G-MIC-YL",
    description:
      "Calypso Electro Classical Guitar G-MIC-YL offers a striking blend of classic elegance and modern performance, enhanced by the Manouch mic for exceptional sound quality. It features a Spruce top that delivers a bright and resonant tone, while the Mahogany back, sides, and neck provide a warm and rich sound. The guitar is strung with SAVAREZ CJ500 strings, known for their vibrant and dynamic tone. Finished in a glossy dark yellow, it combines a bold aesthetic with refined craftsmanship. With 22 frets and rounded edges for smooth playability, along with an integrated EQ with microphone for precise sound control, this guitar is both versatile and stylish. It also comes with a 10mm padded bag for secure protection and easy transport, making it an excellent choice for classical musicians who appreciate both beauty and functionality.",
    category: "GUITAR",
    subCategory: "ELECTRO-CLASSIC",

    pictureUrl: ["/images/guitars/Classic/Electro/G-MIC-YL.png"],
  },
  {
    name: "Guitalele",
    id: "UK-CG-28-INT-EQ",
    description:
      "Introducing the Calypso UK-CG-28-INT-EQ Guitalele. With a compact 28-inch body and an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Mahogany back and sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard adds to the instrument's playability and elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the UK-CG-28-INT-EQ Guitalele represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    subCategory: "GUITALELE",
    pictureUrl: [
      "/images/guitars/Guitalele/UK-CG-28-INT-EQ.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ/UK-CG-28-INT-EQ-1.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ/UK-CG-28-INT-EQ-2.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ/UK-CG-28-INT-EQ-3.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-EQ-1.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-EQ-2.png",
    ],
  },
  {
    name: "Guitalele",
    id: "UK-CG-28-INT-EQ-BK",
    description:
      "Introducing the Calypso UK-CG-28-INT-EQ Guitalele. With a compact 28-inch body and an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Mahogany back and sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard adds to the instrument's playability and elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the UK-CG-28-INT-EQ Guitalele represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    subCategory: "GUITALELE",
    pictureUrl: [
      "/images/guitars/Guitalele/UK-CG-28-INT-EQ-BK.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ-BK/UK-CG-28-INT-EQ-BK-1.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ-BK/UK-CG-28-INT-EQ-BK-2.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ-BK/UK-CG-28-INT-EQ-BK-3.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-EQ-1.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-EQ-2.png",
    ],
  },
  {
    name: "Guitalele",
    id: "UK-CG-28-INT-EQ-SB",
    description:
      "Introducing the Calypso UK-CG-28-INT-EQ Guitalele. With a compact 28-inch body and an integrated equalizer, this instrument offers versatility and exceptional sound control. Crafted with a Spruce top and Mahogany back and sides, it delivers a rich, resonant tone with depth and clarity. The Rosewood fingerboard adds to the instrument's playability and elegance. Designed by Calypso in Montreal, Canada, and meticulously handmade in China with selected lumber and exotic materials, the UK-CG-28-INT-EQ Guitalele represents a harmonious blend of quality craftsmanship and musical excellence.",
    category: "GUITAR",
    subCategory: "GUITALELE",
    pictureUrl: [
      "/images/guitars/Guitalele/UK-CG-28-INT-EQ-SB.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ-SB/UK-CG-28-INT-EQ-SB-1.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ-SB/UK-CG-28-INT-EQ-SB-2.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-28-INT-EQ-SB/UK-CG-28-INT-EQ-SB-3.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-EQ-1.png",
      "/images/specificImages/guitar/Guitalele/UK-CG-EQ-2.png",
    ],
  },
];
export default ITEMS;
