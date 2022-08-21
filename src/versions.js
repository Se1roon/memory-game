const versions = [
  {
    id: "153866436",
    name: "Gotei 13 Capitans",
    numberOfCards: 13,
    cards: [
      {
        id: 1,
        source: "Shigekuni-Yamamoto.webp",
      },
      {
        id: 2,
        source: "Sui-Fong.webp",
      },
      {
        id: 3,
        source: "Gin-Ichimaru.webp",
      },
      {
        id: 4,
        source: "Retsu-Unohana.webp",
      },
      {
        id: 5,
        source: "Souske-Aizen.webp",
      },
      {
        id: 6,
        source: "Byakuya-Kuchiki.webp",
      },
      {
        id: 7,
        source: "Sajin-Komamura.webp",
      },
      {
        id: 8,
        source: "Shunsui-Kyoraku.webp",
      },
      {
        id: 9,
        source: "Mayuri-Kurotsuchi.webp",
      },
      {
        id: 10,
        source: "Toshiro-Hitsugaya.webp",
      },
      {
        id: 11,
        source: "Kaname-Tousen.webp",
      },
      {
        id: 12,
        source: "Jushiro-Ukitake.webp",
      },
      {
        id: 13,
        source: "Kenpachi-Zaraki.webp",
      },
    ],
  },
  {
    id: "135764502",
    name: "Espada",
    numberOfCards: 10,
    cards: [
      {
        id: 1,
        source: "Yammy-Llargo.webp",
      },
      {
        id: 2,
        source: "Coyote-Starrk.webp",
      },
      {
        id: 3,
        source: "Baraggan.webp",
      },
      {
        id: 4,
        source: "Harribel.webp",
      },
      {
        id: 5,
        source: "Ulquiorra-Cifer.webp",
      },
      {
        id: 6,
        source: "Nnoitora.webp",
      },
      {
        id: 7,
        source: "Grimmjow.webp",
      },
      {
        id: 8,
        source: "Zommari.webp",
      },
      {
        id: 9,
        source: "Szayelaporro.webp",
      },
      {
        id: 10,
        source: "Aaroniero.webp",
      },
    ],
  },
  {
    id: "294401234",
    name: "Fullbringers and Quincy",
    numberOfCards: 14,
    cards: [
      {
        id: 1,
        source: "Ginjo.webp",
      },
      {
        id: 2,
        source: "Giriko.webp",
      },
      {
        id: 3,
        source: "Riruka.webp",
      },
      {
        id: 4,
        source: "Jackie.webp",
      },
      {
        id: 5,
        source: "Tsukishima.webp",
      },
      {
        id: 6,
        source: "Yukio.webp",
      },
      {
        id: 7,
        source: "Sado.webp",
      },
      {
        id: 8,
        source: "Shishigawara.webp",
      },
      {
        id: 9,
        source: "Ichigo.webp",
      },
      {
        id: 10,
        source: "Yhwach.webp",
      },
      {
        id: 11,
        source: "Ishida.webp",
      },
      {
        id: 12,
        source: "Haschwalth.webp",
      },
      {
        id: 13,
        source: "Ryuken.webp",
      },
      {
        id: 14,
        source: "Masaki.webp",
      },
    ],
  },
  {
    id: "307732871",
    name: "15 Male Characters",
    numberOfCards: 15,
    cards: [
      {
        id: 1,
        source: "Urahara.webp",
      },
      {
        id: 2,
        source: "Aizen2.webp",
      },
      {
        id: 3,
        source: "Hisagi.webp",
      },
      {
        id: 4,
        source: "Ichibe.webp",
      },
      {
        id: 5,
        source: "Tenjirou.webp",
      },
      {
        id: 6,
        source: "Oetsu.webp",
      },
      {
        id: 7,
        source: "Rose.webp",
      },
      {
        id: 8,
        source: "Hirako.webp",
      },
      {
        id: 9,
        source: "Zangetsu.webp",
      },
      {
        id: 10,
        source: "Renji.webp",
      },
      {
        id: 11,
        source: "Ichigo.webp",
      },
      {
        id: 12,
        source: "Byakuya-Kuchiki.webp",
      },
      {
        id: 13,
        source: "Shunsui-Kyoraku.webp",
      },
      {
        id: 14,
        source: "Ulquiorra-Cifer.webp",
      },
      {
        id: 15,
        source: "Ginjo.webp",
      },
    ],
  },
  {
    id: "362038672",
    name: "15 Female Characters",
    numberOfCards: 15,
    cards: [
      {
        id: 1,
        source: "Rukia.webp",
      },
      {
        id: 2,
        source: "Hikifune.webp",
      },
      {
        id: 3,
        source: "Senjumaru.webp",
      },
      {
        id: 4,
        source: "Hiyori.webp",
      },
      {
        id: 5,
        source: "Unohana2.webp",
      },
      {
        id: 6,
        source: "Harribel.webp",
      },
      {
        id: 7,
        source: "Riruka.webp",
      },
      {
        id: 8,
        source: "Sui-Fong.webp",
      },
      {
        id: 9,
        source: "Yachiru.webp",
      },
      {
        id: 10,
        source: "Rangiku.webp",
      },
      {
        id: 11,
        source: "Orihime.webp",
      },
      {
        id: 12,
        source: "Tatsuki.webp",
      },
      {
        id: 13,
        source: "Hinamori.webp",
      },
      {
        id: 14,
        source: "Apacci.webp",
      },
      {
        id: 15,
        source: "Sung-Sun.webp",
      },
    ],
  },
];

function getVersions() {
  return versions;
}

export { getVersions };
