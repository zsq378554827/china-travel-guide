export type City = {
  id: string;
  name: string;
  region: string;
  tagline: string;
  bestFor: string[];
  recommendedDays: string;
  mustSee: string;
  lat: number;
  lng: number;
  href: string;
  freeGuideHref: string;
  twoDayHref: string;
  threeDayHref: string;
  color: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const cities: City[] = [
  {
    id: "beijing",
    name: "Beijing",
    region: "North China",
    tagline: "Imperial landmarks, hutongs, and the Great Wall.",
    bestFor: ["History", "Culture", "Easy transit"],
    recommendedDays: "1-3 days",
    mustSee: "Forbidden City, Temple of Heaven, Mutianyu Great Wall",
    lat: 39.9042,
    lng: 116.4074,
    href: "/cities/beijing/",
    freeGuideHref: "/cities/beijing/1-day-itinerary/",
    twoDayHref: "/cities/beijing/2-day-itinerary/",
    threeDayHref: "/cities/beijing/3-day-itinerary/",
    color: "#C62828",
    image: "/images/cities/beijing-cover.jpg",
    imageAlt: "Beijing skyline of the Forbidden City and the Great Wall",
    imagePosition: "center center",
  },
  {
    id: "shanghai",
    name: "Shanghai",
    region: "East China",
    tagline: "Modern skyline, river views, and charming old streets.",
    bestFor: ["City life", "Shopping", "Riverside"],
    recommendedDays: "1-3 days",
    mustSee: "The Bund, Pudong skyline, Yu Garden",
    lat: 31.2304,
    lng: 121.4737,
    href: "/cities/shanghai/",
    freeGuideHref: "/cities/shanghai/1-day-itinerary/",
    twoDayHref: "/cities/shanghai/2-day-itinerary/",
    threeDayHref: "/cities/shanghai/3-day-itinerary/",
    color: "#2E7D62",
    image: "/images/cities/shanghai-cover.jpg",
    imageAlt: "Shanghai skyline along the Huangpu River",
    imagePosition: "center center",
  },
  {
    id: "xian",
    name: "Xi'an",
    region: "Northwest China",
    tagline: "Ancient capital energy and the Terracotta Army.",
    bestFor: ["History", "Heritage", "Culture"],
    recommendedDays: "1-3 days",
    mustSee: "Terracotta Warriors, City Wall, Muslim Quarter",
    lat: 34.3416,
    lng: 108.9398,
    href: "/cities/xian/",
    freeGuideHref: "/cities/xian/1-day-itinerary/",
    twoDayHref: "/cities/xian/2-day-itinerary/",
    threeDayHref: "/cities/xian/3-day-itinerary/",
    color: "#D4AF37",
    image: "/images/cities/xian-cover.jpg",
    imageAlt: "Terracotta Warriors and Xi'an city wall",
    imagePosition: "center center",
  },
  {
    id: "chengdu",
    name: "Chengdu",
    region: "Southwest China",
    tagline: "Pandas, hotpot, teahouses, and laid-back life.",
    bestFor: ["Pandas", "Food", "Local life"],
    recommendedDays: "1-3 days",
    mustSee: "Panda Base, People's Park, Kuanzhai Alley",
    lat: 30.5728,
    lng: 104.0668,
    href: "/cities/chengdu/",
    freeGuideHref: "/cities/chengdu/1-day-itinerary/",
    twoDayHref: "/cities/chengdu/2-day-itinerary/",
    threeDayHref: "/cities/chengdu/3-day-itinerary/",
    color: "#2E7D62",
    image: "/images/cities/chengdu-cover.jpg",
    imageAlt: "Panda and teahouse scene in Chengdu",
    imagePosition: "center center",
  },
  {
    id: "zhangjiajie",
    name: "Zhangjiajie",
    region: "Hunan",
    tagline: "Avatar mountains, glass bridges, and dramatic viewpoints.",
    bestFor: ["Nature", "Hiking", "Scenery"],
    recommendedDays: "1-3 days",
    mustSee: "National Forest Park, Tianmen Mountain, glass bridge",
    lat: 29.1171,
    lng: 110.4792,
    href: "/cities/zhangjiajie/",
    freeGuideHref: "/cities/zhangjiajie/1-day-itinerary/",
    twoDayHref: "/cities/zhangjiajie/2-day-itinerary/",
    threeDayHref: "/cities/zhangjiajie/3-day-itinerary/",
    color: "#C62828",
    image: "/images/cities/zhangjiajie-cover.jpg",
    imageAlt: "Sandstone pillar peaks in Zhangjiajie",
    imagePosition: "center center",
  },
  {
    id: "guilin-yangshuo",
    name: "Guilin / Yangshuo",
    region: "Guangxi",
    tagline: "Karst peaks, river views, bamboo rafts, and countryside.",
    bestFor: ["Nature", "Scenery", "Relax"],
    recommendedDays: "1-3 days",
    mustSee: "Li River, Yangshuo, Longji Rice Terraces",
    lat: 25.026,
    lng: 110.3933,
    href: "/cities/guilin-yangshuo/",
    freeGuideHref: "/cities/guilin-yangshuo/1-day-itinerary/",
    twoDayHref: "/cities/guilin-yangshuo/2-day-itinerary/",
    threeDayHref: "/cities/guilin-yangshuo/3-day-itinerary/",
    color: "#D4AF37",
    image: "/images/cities/guilin-yangshuo-cover.jpg",
    imageAlt: "Karst river landscape in Guilin and Yangshuo",
    imagePosition: "center center",
  },
];

export const cityById = new Map(cities.map((city) => [city.id, city]));
