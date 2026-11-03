// Interactive anatomical body map (front view). Each organ is a tappable region with data-organ="id".
(function () {
  "use strict";

  const ORGANS = [
    { id: "brain", name: "Brain", blurb: "Neurodegeneration, psychiatric and neurological disease", hue: "#AF52DE" },
    { id: "eye", name: "Eye", blurb: "Retina, optic nerve and aqueous humour", hue: "#5856D6" },
    { id: "thyroid", name: "Thyroid", blurb: "Thyroid hormone excess and deficiency", hue: "#FF9F0A" },
    { id: "lungs", name: "Lungs", blurb: "Airways, alveoli and interstitium", hue: "#5AC8FA" },
    { id: "heart", name: "Heart", blurb: "Pump, rhythm and heart muscle", hue: "#FF3B30" },
    { id: "breast", name: "Breast", blurb: "Breast cancer subtypes", hue: "#FF2D55" },
    { id: "vessels", name: "Blood vessels", blurb: "Arteries, veins and pulmonary circulation", hue: "#D70015" },
    { id: "liver", name: "Liver", blurb: "Steatosis, hepatitis, cirrhosis and cancer", hue: "#A2845E" },
    { id: "stomach", name: "Stomach & oesophagus", blurb: "Acid, ulcers and reflux", hue: "#FF9500" },
    { id: "pancreas", name: "Pancreas", blurb: "Diabetes and pancreatic cancer", hue: "#FFCC00" },
    { id: "kidney", name: "Kidneys", blurb: "Filtration, fluid balance and renal cancer", hue: "#BF5AF2" },
    { id: "intestine", name: "Intestines", blurb: "Inflammatory bowel disease and colorectal cancer", hue: "#FF8A65" },
    { id: "bladder", name: "Bladder & prostate", blurb: "Lower urinary tract and prostate", hue: "#64D2FF" },
    { id: "reproductive", name: "Reproductive organs", blurb: "Uterus, ovaries and hormonal disorders", hue: "#FF6482" },
    { id: "joints", name: "Joints & bone", blurb: "Arthritis, gout and osteoporosis", hue: "#30B0C7" },
    { id: "blood", name: "Blood & bone marrow", blurb: "Leukaemia, lymphoma, myeloma and anaemia", hue: "#E5484D" },
    { id: "skin", name: "Skin", blurb: "Inflammatory skin disease and melanoma", hue: "#E8B27A" }
  ];
  const byId = Object.fromEntries(ORGANS.map((o) => [o.id, o]));

  const SILHOUETTE =
    "M136,104 L136,122 C120,126 96,128 80,138 C66,146 62,160 60,178 L52,260 C48,290 44,320 40,350 C38,365 36,380 38,392 " +
    "C40,404 52,404 55,394 C59,370 63,345 68,320 L78,250 L84,214 C86,250 90,290 92,330 C90,350 86,368 86,390 C86,430 90,480 94,520 " +
    "C96,555 96,585 98,612 C99,624 119,624 120,612 C122,580 126,540 130,500 C134,460 140,420 146,404 L150,402 L154,404 " +
    "C160,420 166,460 170,500 C174,540 178,580 180,612 C181,624 201,624 202,612 C204,585 204,555 206,520 C210,480 214,430 214,390 " +
    "C214,368 210,350 208,330 C210,290 214,250 216,214 L222,250 L232,320 C237,345 241,370 245,394 C248,404 260,404 262,392 " +
    "C264,380 262,365 260,350 C256,320 252,290 248,260 L240,178 C238,160 234,146 220,138 C204,128 180,126 164,122 L164,104 Z";

  // Each organ: list of SVG shapes (drawn in this order, so later = on top)
  const SHAPES = {
    skin: [`<path d="${SILHOUETTE}"/>`, `<ellipse cx="150" cy="66" rx="33" ry="41"/>`],
    brain: [`<path d="M124,62 C122,40 136,28 150,28 C166,28 178,40 176,62 C174,74 162,78 150,78 C138,78 126,74 124,62 Z"/>`],
    eye: [`<ellipse cx="138" cy="84" rx="5.5" ry="3.6"/>`, `<ellipse cx="162" cy="84" rx="5.5" ry="3.6"/>`],
    thyroid: [`<path d="M141,116 C137,110 144,108 148,113 L150,115 L152,113 C156,108 163,110 159,116 C157,122 151,122 150,119 C149,122 143,122 141,116 Z"/>`],
    lungs: [
      `<path d="M143,150 C122,146 104,168 101,198 C99,222 104,238 114,240 C128,242 140,232 143,220 Z"/>`,
      `<path d="M157,150 C178,146 196,168 199,198 C201,222 196,238 186,240 C172,242 160,232 157,220 Z"/>`
    ],
    breast: [`<path d="M88,206 C88,196 100,192 104,200 C106,210 98,218 90,214 Z"/>`, `<path d="M212,206 C212,196 200,192 196,200 C194,210 202,218 210,214 Z"/>`],
    vessels: [
      `<path class="vessel" d="M143,104 L144,150 M157,104 L156,150 M150,206 L150,362 C140,378 128,392 120,420 L112,520 M150,362 C160,378 172,392 180,420 L188,520 M138,152 C110,150 92,160 80,172 L66,260 M162,152 C190,150 208,160 220,172 L234,260"/>`
    ],
    heart: [`<path d="M150,190 C142,180 126,186 129,202 C132,216 146,226 157,234 C168,224 178,210 175,197 C172,184 158,181 152,191 Z"/>`],
    liver: [`<path d="M103,242 C122,234 152,236 170,246 C162,264 138,274 113,272 C104,264 101,252 103,242 Z"/>`],
    stomach: [`<path d="M170,246 C188,240 200,252 198,268 C196,286 180,294 167,288 C160,280 170,272 172,264 C170,258 167,252 170,246 Z"/>`],
    pancreas: [`<path d="M126,294 C138,286 162,284 182,288 C186,292 182,298 176,298 C160,300 140,302 128,302 C122,300 122,296 126,294 Z"/>`],
    kidney: [`<path d="M108,292 C100,294 98,318 108,322 C116,324 118,314 114,308 C118,302 116,290 108,292 Z"/>`, `<path d="M192,292 C200,294 202,318 192,322 C184,324 182,314 186,308 C182,302 184,290 192,292 Z"/>`],
    intestine: [`<path d="M118,312 C116,306 124,304 130,306 L172,306 C180,304 186,308 184,316 L184,360 C184,368 176,372 168,370 L132,370 C122,372 116,366 118,358 Z"/>`],
    bladder: [`<ellipse cx="150" cy="384" rx="13" ry="9"/>`],
    reproductive: [`<path d="M136,398 C140,394 160,394 164,398 C166,404 158,410 150,410 C142,410 134,404 136,398 Z"/>`],
    blood: [`<path class="bone" d="M120,418 L112,494 M180,418 L188,494"/>`],
    joints: [
      `<circle cx="84" cy="146" r="8"/>`, `<circle cx="216" cy="146" r="8"/>`,
      `<circle cx="112" cy="508" r="9"/>`, `<circle cx="188" cy="508" r="9"/>`,
      `<circle cx="46" cy="388" r="6.5"/>`, `<circle cx="254" cy="388" r="6.5"/>`
    ]
  };
  const ORDER = ["skin", "brain", "eye", "thyroid", "lungs", "breast", "vessels", "heart", "liver", "stomach", "pancreas", "kidney", "intestine", "bladder", "reproductive", "blood", "joints"];

  function svg(selected, counts = {}) {
    const groups = ORDER.map((id) => {
      const o = byId[id];
      const n = counts[id] || 0;
      return `<g class="organ o-${id}${selected === id ? " sel" : ""}${n ? "" : " empty"}" data-organ="${id}" style="--h:${o.hue}" tabindex="0" role="button" aria-label="${o.name}">
        <title>${o.name}${n ? ` (${n} diseases)` : ""}</title>${SHAPES[id].join("")}</g>`;
    }).join("");
    return `<svg class="body-svg" viewBox="20 18 260 612" role="img" aria-label="Interactive body map">${groups}</svg>`;
  }

  window.BodyMap = { ORGANS, byId, svg };
})();
