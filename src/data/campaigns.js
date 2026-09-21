export const campaigns = [
  {
    id: "youngun",
    number: "01",
    name: "Youngun",
    type: "Twitter Campaign",
    description: "Campaign created meme on a given template.",
    media: [
      {
        id: "youngun-post-1",
        type: "image",
        src: "campaign-jurm.jpg",
        alt: "Youngun campaign meme",
        url: "#TODO",
      },
      {
        id: "youngun-post-2",
        type: "image",
        src: "new-jurm.jpeg",
        alt: "Youngun campaign social post",
        url: "#TODO",
      },
    ],
    featuredBy: [
      { name: "Tumblr", logo: "logo-tumblr.jpg", url: "#TODO" },
      { name: "ScoopWhoop", logo: "logo-scoopwhoop.png", url: "#TODO" },
    ],
  },
  {
    id: "meme-d",
    number: "02",
    name: "Meme'd",
    type: "Social Campaign Content",
    description: "Created short-form reel.",
    media: [
      {
        id: "meme-d-reel",
        type: "video",
        src: "content-reel.mp4",
        alt: "Meme'd short-form campaign reel",
        url: "#TODO",
      },
    ],
    featuredBy: [
      { name: "RVCJ", logo: "logo-rvcj.png", url: "#TODO" },
      { name: "BoreCure", logo: "logo-borecure.jpg", url: "#TODO" },
    ],
  },
];
