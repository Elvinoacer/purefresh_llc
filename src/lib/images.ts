// Curated image library for Purefresh — each image maps to a specific narrative beat
// All images are VLM-verified to be child-free and business-appropriate.
// Business model: Borehole water → 4-step RO purification → bowser distribution → kiosk refill → household use

export const IMAGES = {
  // Hero — water being poured/refilled (the product in motion)
  heroSplashWide: "https://sfile.chatglm.cn/images-ppt/0632d3f09e01.png",      // cinematic water splash (hero bg texture)
  heroGlassPour: "https://sfile.chatglm.cn/images-ppt/a1a23732e71b.jpg",       // water poured into glass

  // Refill infrastructure — the core business (no children, no people where possible)
  refillStation: "https://sfile.chatglm.cn/images-ppt/a2fecd8160ff.png",       // purified water filling station
  waterRefillKiosk: "https://sfile.chatglm.cn/images-ppt/799c200e1f0c.jpg",     // bulk water jugs outdoors (no people)
  waterDispenser: "https://sfile.chatglm.cn/images-ppt/7b3834d97203.jpg",      // modern water dispenser (no children)
  manBicycle: "https://sfile.chatglm.cn/images-ppt/7f0834af72cf.jpg",          // man transporting yellow water containers on bicycle

  // Containers — what customers bring (no people)
  jerricans: "https://sfile.chatglm.cn/images-ppt/b1310869ea26.jpg",           // stack of yellow water jerricans
  jerricanRefill: "https://sfile.chatglm.cn/images-ppt/5a6f4294d95a.jpg",      // water containers/jerricans
  jerricansStack: "https://sfile.chatglm.cn/images-ppt/a8b5b04cecbc.jpg",      // stacked yellow water containers (no people)

  // Bowser distribution — how water reaches kiosks (no people, no children)
  bowser: "https://sfile.chatglm.cn/images-ppt/3ca4a8c3416d.jpg",              // line of blue water tanker trucks (no people)
  bowserDispensing: "https://sfile.chatglm.cn/images-ppt/62870aa5d07f.jpg",    // white water tanker on dirt road (no people)

  // Water ATM / cashless kiosk — the future of distribution
  waterAtm: "https://sfile.chatglm.cn/images-ppt/4ce0df82f45a.jpeg",           // water vending machine, cashless
  waterAtmAlt: "https://sfile.chatglm.cn/images-ppt/257879d98b30.jpg",         // Ubuntu Waterhub Kenya — water access point

  // Purification — the RO technology
  roPlant: "https://sfile.chatglm.cn/images-ppt/2001dea9ba97.jpg",             // industrial RO plant blue framing
  roPlantAlt: "https://sfile.chatglm.cn/images-ppt/ccdc7f0ac8c2.jpg",          // stainless steel water treatment
  borehole: "https://sfile.chatglm.cn/images-ppt/9c3aa329665d.jpg",            // borehole water well
  boreholeAlt: "https://sfile.chatglm.cn/images-ppt/2b776306a003.png",         // borehole pump installation

  // Quality assurance — lab testing
  labTesting: "https://sfile.chatglm.cn/images-ppt/21b960f9f76c.jpg",          // water quality lab testing
  labTestingAlt: "https://sfile.chatglm.cn/images-ppt/1ba0466f95f1.jpg",       // lab technician with beaker

  // Water aesthetics — abstract/product shots
  waterDropClear: "https://sfile.chatglm.cn/images-ppt/8573a3e0429d.jpg",      // pure water droplet close-up
  waterSurface: "https://sfile.chatglm.cn/images-ppt/fc23823801fe.jpg",        // water surface texture

  // Landscape — context
  riftValley: "https://sfile.chatglm.cn/images-ppt/8bf4fc49f805.jpg",          // Kenya Rift Valley landscape
} as const

export type ImageKey = keyof typeof IMAGES
