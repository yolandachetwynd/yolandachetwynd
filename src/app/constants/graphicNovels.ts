const invasionsBooklet: Booklet = {
    bookletPDFName: "final_invasion_with_links.pdf",
    collectionDescription: [`Yolanda Chetwynd has written a graphic novel, which takes about ten minutes to read. It includes the story of her mother's birth in 1940, as told to Yolanda by her grandmother in 1987.`,
    `You can listen to Yolanda Chetwynd speak about her graphic novel in a Delaware State of the Arts Podcast broadcast May 4, 2014`,
    ]
}
const gentienBooklet: Booklet = {
    bookletPDFName: "gentien_web_layout.pdf",
    collectionDescription: [`Here is Yolanda's unabridged draft version of her graphic novel about her family's survival during the Second World War, and how they traveled across three continents`,
    ]
}
const yoYoMaBooklet: Booklet = {
    bookletPDFName: "",
    collectionDescription: [`In the summer of 2008 I had just competed my first "Body for Life Challenge." The transformation so impressed my nephew, Oliver Cairns, that he draw a comic story for and about me. He was eleven at the time. I, in turn, was inspired by the superheroine costume and the story that I redrew  and edited it. I hope reading it will inspire you to become a superhero of your own.`,
    ]
}

const catalogBooklet: Booklet = {
    bookletPDFName: "",
    collectionDescription: [`Yolanda Chetwynd has a catalog of selected paintings`,
    ]
}




export const gnCollections = {
    "Invasions" : invasionsBooklet,
    "Gentien The Corporal": gentienBooklet,
    "2017 Catalog": catalogBooklet,
    "Yo Yo Ma": yoYoMaBooklet,

}



export type Page = {
    filename: string,
    pageNumber: number,
}


export type Booklet = {
    bookletPDFName: string,
    collectionDescription: string[],
    bookletPhotos?: [],
}

const invasionsPages: Page[] = [
    {filename: "invasion_page1.jpeg", pageNumber: 1},
    {filename: "invasion_page2.jpeg", pageNumber: 2},
    {filename: "invasion_page3.jpeg", pageNumber: 3},
    {filename: "invasion_page4.jpeg", pageNumber: 4},
    {filename: "invasion_page5.jpeg", pageNumber: 5},
    {filename: "invasion_page6.jpeg", pageNumber: 6},
    {filename: "invasion_page7.jpeg", pageNumber: 7},
    {filename: "invasion_page8.jpeg", pageNumber: 8},
    {filename: "invasion_page9.jpeg", pageNumber: 9},
    {filename: "invasion_page10.jpeg", pageNumber: 10},
    {filename: "invasion_page11.jpeg", pageNumber: 11},
    {filename: "invasion_page12.jpeg", pageNumber: 12},
    {filename: "invasion_page13.jpeg", pageNumber: 13},
    {filename: "invasion_page14.jpeg", pageNumber: 14},
    {filename: "invasion_page15.jpeg", pageNumber: 15},
    {filename: "invasion_page16.jpeg", pageNumber: 16},
    {filename: "invasion_page17.jpeg", pageNumber: 17},
    {filename: "invasion_page18.jpeg", pageNumber: 18},
    {filename: "invasion_page19.jpeg", pageNumber: 19},
    {filename: "invasion_page20.jpeg", pageNumber: 20},
]

const invasionHotSpots  = {
    2: [{shape: "rectangle", corods: "511,330", alt: "", filename:"invasions_ednas_wedding.pdf"}],
    4: [{corods: "", alt: "", filname: ""}],
    6: [{corods: "", alt: "", filname: ""}],
    7: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    8: [{corods: "", alt: "", filname: ""}],
    9: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    10: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    11: [{corods: "", alt: "", filname: ""}],
    13: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    14: [{corods: "", alt: "", filname: ""}],
    16: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    17: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    18: [{corods: "", alt: "", filname: ""}, {corods: "", alt: "", filname: ""}],
    20: [{corods: "", alt: "", filname: ""}]
}

const gentienPages: Page[] = [
    { filename: 'gentien_1.jpg', pageNumber: 1 },
  { filename: 'gentien_2.jpg', pageNumber: 2 },
  { filename: 'gentien_3.jpg', pageNumber: 3 },
  { filename: 'gentien_4.jpg', pageNumber: 4 },
  { filename: 'gentien_5.jpg', pageNumber: 5 },
  { filename: 'gentien_6.jpg', pageNumber: 6 },
  { filename: 'gentien_7.jpg', pageNumber: 7 },
  { filename: 'gentien_8.jpg', pageNumber: 8 },
  { filename: 'gentien_9.jpg', pageNumber: 9 },
  { filename: 'gentien_10.jpg', pageNumber: 10 },
  { filename: 'gentien_11.jpg', pageNumber: 11 },
  { filename: 'gentien_12.jpg', pageNumber: 12 },
  { filename: 'gentien_13.jpg', pageNumber: 13 },
  { filename: 'gentien_14.jpg', pageNumber: 14 },
  { filename: 'gentien_15.jpg', pageNumber: 15 },
  { filename: 'gentien_16.jpg', pageNumber: 16 },
  { filename: 'gentien_17.jpg', pageNumber: 17 },
  { filename: 'gentien_18.jpg', pageNumber: 18 },
  { filename: 'gentien_19.jpg', pageNumber: 19 },
  { filename: 'gentien_20.jpg', pageNumber: 20 },
  { filename: 'gentien_21.jpg', pageNumber: 21 },
  { filename: 'gentien_22.jpg', pageNumber: 22 },
  { filename: 'gentien_23.jpg', pageNumber: 23 },
  { filename: 'gentien_24.jpg', pageNumber: 24 },
  { filename: 'gentien_25.jpg', pageNumber: 25 },
  { filename: 'gentien_26.jpg', pageNumber: 26 },
  { filename: 'gentien_27.jpg', pageNumber: 27 },
  { filename: 'gentien_28.jpg', pageNumber: 28 },
  { filename: 'gentien_29.jpg', pageNumber: 29 },
  { filename: 'gentien_30.jpg', pageNumber: 30 },
  { filename: 'gentien_31.jpg', pageNumber: 31 },
  { filename: 'gentien_32.jpg', pageNumber: 32 },
  { filename: 'gentien_33.jpg', pageNumber: 33 },
  { filename: 'gentien_34.jpg', pageNumber: 34 },
  { filename: 'gentien_35.jpg', pageNumber: 35 },
  { filename: 'gentien_36.jpg', pageNumber: 36 },
  { filename: 'gentien_37.jpg', pageNumber: 37 },
  { filename: 'gentien_38.jpg', pageNumber: 38 },
  { filename: 'gentien_39.jpg', pageNumber: 39 },
  { filename: 'gentien_40.jpg', pageNumber: 40 },
  { filename: 'gentien_41.jpg', pageNumber: 41 },
  { filename: 'gentien_42.jpg', pageNumber: 42 },
  { filename: 'gentien_43.jpg', pageNumber: 43 },
  { filename: 'gentien_44.jpg', pageNumber: 44 },
  { filename: 'gentien_45.jpg', pageNumber: 45 },
  { filename: 'gentien_46.jpg', pageNumber: 46 },
  { filename: 'gentien_47.jpg', pageNumber: 47 },
  { filename: 'gentien_48.jpg', pageNumber: 48 },
  { filename: 'gentien_49.jpg', pageNumber: 49 },
  { filename: 'gentien_50.jpg', pageNumber: 50 },
  { filename: 'gentien_51.jpg', pageNumber: 51 },
  { filename: 'gentien_52.jpg', pageNumber: 52 },
  { filename: 'gentien_53.jpg', pageNumber: 53 },
  { filename: 'gentien_54.jpg', pageNumber: 54 },
  { filename: 'gentien_55.jpg', pageNumber: 55 },
  { filename: 'gentien_56.jpg', pageNumber: 56 },
  { filename: 'gentien_57.jpg', pageNumber: 57 },
  { filename: 'gentien_58.jpg', pageNumber: 58 },
  { filename: 'gentien_59.jpg', pageNumber: 59 },
  { filename: 'gentien_60.jpg', pageNumber: 60 },
  { filename: 'gentien_61.jpg', pageNumber: 61 },
  { filename: 'gentien_62.jpg', pageNumber: 62 },
  { filename: 'gentien_63.jpg', pageNumber: 63 },
  { filename: 'gentien_64.jpg', pageNumber: 64 },
  { filename: 'gentien_65.jpg', pageNumber: 65 },
  { filename: 'gentien_66.jpg', pageNumber: 66 },
  { filename: 'gentien_67.jpg', pageNumber: 67 },
  { filename: 'gentien_68.jpg', pageNumber: 68 },
  { filename: 'gentien_69.jpg', pageNumber: 69 },
  { filename: 'gentien_70.jpg', pageNumber: 70 },
  { filename: 'gentien_71.jpg', pageNumber: 71 },
  { filename: 'gentien_72.jpg', pageNumber: 72 },
  { filename: 'gentien_73.jpg', pageNumber: 73 },
  { filename: 'gentien_74.jpg', pageNumber: 74 },
  { filename: 'gentien_75.jpg', pageNumber: 75 },
  { filename: 'gentien_76.jpg', pageNumber: 76 },
  { filename: 'gentien_77.jpg', pageNumber: 77 },
  { filename: 'gentien_78.jpg', pageNumber: 78 },
  { filename: 'gentien_79.jpg', pageNumber: 79 },
  { filename: 'gentien_80.jpg', pageNumber: 80 },
  { filename: 'gentien_81.jpg', pageNumber: 81 },
  { filename: 'gentien_82.jpg', pageNumber: 82 },
  { filename: 'gentien_83.jpg', pageNumber: 83 },
  { filename: 'gentien_84.jpg', pageNumber: 84 },
  { filename: 'gentien_85.jpg', pageNumber: 85 },
  { filename: 'gentien_86.jpg', pageNumber: 86 },
  { filename: 'gentien_87.jpg', pageNumber: 87 },
  { filename: 'gentien_88.jpg', pageNumber: 88 },
  { filename: 'gentien_89.jpg', pageNumber: 89 },
  { filename: 'gentien_90.jpg', pageNumber: 90 },
  { filename: 'gentien_91.jpg', pageNumber: 91 },
  { filename: 'gentien_92.jpg', pageNumber: 92 },
  { filename: 'gentien_93.jpg', pageNumber: 93 },
  { filename: 'gentien_94.jpg', pageNumber: 94 },
  { filename: 'gentien_95.jpg', pageNumber: 95 },
  { filename: 'gentien_96.jpg', pageNumber: 96 },
  { filename: 'gentien_97.jpg', pageNumber: 97 },
  { filename: 'gentien_98.jpg', pageNumber: 98 },
  { filename: 'gentien_99.jpg', pageNumber: 99 },
  { filename: 'gentien_100.jpg', pageNumber: 100 },
  { filename: 'gentien_101.jpg', pageNumber: 101 },
  { filename: 'gentien_102.jpg', pageNumber: 102 },
  { filename: 'gentien_103.jpg', pageNumber: 103 },
  { filename: 'gentien_104.jpg', pageNumber: 104 },
  { filename: 'gentien_105.jpg', pageNumber: 105 },
  { filename: 'gentien_106.jpg', pageNumber: 106 },
  { filename: 'gentien_107.jpg', pageNumber: 107 },
  { filename: 'gentien_108.jpg', pageNumber: 108 }

]

const yoYoMaPages: Page[] = [
    { filename: 'yoyoma_1.jpg', pageNumber: 1 },
    { filename: 'yoyoma_2.jpg', pageNumber: 2 },
    { filename: 'yoyoma_3.jpg', pageNumber: 3 },
    { filename: 'yoyoma_4.jpg', pageNumber: 4 }
]

const catalogPages: Page[] = [
    { filename: '2017catalog_1.jpg', pageNumber: 1 },
    { filename: '2017catalog_2.jpg', pageNumber: 2 },
    { filename: '2017catalog_3.jpg', pageNumber: 3 },
    { filename: '2017catalog_4.jpg', pageNumber: 4 },
    { filename: '2017catalog_5.jpg', pageNumber: 5 },
    { filename: '2017catalog_6.jpg', pageNumber: 6 },
    { filename: '2017catalog_7.jpg', pageNumber: 7 },
    { filename: '2017catalog_8.jpg', pageNumber: 8 },
    { filename: '2017catalog_9.jpg', pageNumber: 9 },
    { filename: '2017catalog_10.jpg', pageNumber: 10 },
    { filename: '2017catalog_11.jpg', pageNumber: 11 },
    { filename: '2017catalog_12.jpg', pageNumber: 12 },
    { filename: '2017catalog_13.jpg', pageNumber: 13 },
    { filename: '2017catalog_14.jpg', pageNumber: 14 },
    { filename: '2017catalog_15.jpg', pageNumber: 15 },
    { filename: '2017catalog_16.jpg', pageNumber: 16 },
    { filename: '2017catalog_17.jpg', pageNumber: 17 },
    { filename: '2017catalog_18.jpg', pageNumber: 18 },
    { filename: '2017catalog_19.jpg', pageNumber: 19 },
    { filename: '2017catalog_20.jpg', pageNumber: 20 },
    { filename: '2017catalog_21.jpg', pageNumber: 21 },
    { filename: '2017catalog_22.jpg', pageNumber: 22 },
    { filename: '2017catalog_23.jpg', pageNumber: 23 },
    { filename: '2017catalog_24.jpg', pageNumber: 24 },
    { filename: '2017catalog_25.jpg', pageNumber: 25 },
    { filename: '2017catalog_26.jpg', pageNumber: 26 },
    { filename: '2017catalog_27.jpg', pageNumber: 27 },
    { filename: '2017catalog_28.jpg', pageNumber: 28 },
    { filename: '2017catalog_29.jpg', pageNumber: 29 },
    { filename: '2017catalog_30.jpg', pageNumber: 30 },
    { filename: '2017catalog_31.jpg', pageNumber: 31 },
    { filename: '2017catalog_32.jpg', pageNumber: 32 }
  ]
  

export const graphicNovels = {
    "Invasions" : invasionsPages,
    "Gentien The Corporal": gentienPages,
    "Yo Yo Ma": yoYoMaPages,
    "2017 Catalog": catalogPages,
}

export const  hotSpots = {
    "Invasions": invasionHotSpots,
}
