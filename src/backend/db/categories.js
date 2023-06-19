import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Health",
    description:
      "Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.",
  },
  {
    _id: uuid(),
    categoryName: "Yoga",
    description:
      "Yoga is a group of physical, mental, and spiritual practices that originated in ancient India. It involves various postures, breathing exercises, and meditation to promote overall well-being.",
  },
  {
    _id: uuid(),
    categoryName: "Fasting",
    description:
      "Fasting is the practice of abstaining from food or drink for a specific period. It is often done for religious, health, or spiritual reasons and can have various benefits for the body and mind.",
  },
  {
    _id: uuid(),
    categoryName: "Songs",
    description:
      "Songs are musical compositions typically consisting of lyrics and melodies. They are a form of artistic expression and can evoke emotions, tell stories, and bring people together through the power of music.",
  },
  {
    _id: uuid(),
    categoryName: "Podcasts",
    description:
      "Podcasts are digital audio or video recordings that are available for streaming or downloading. They cover a wide range of topics and can be educational, entertaining, or informative, allowing listeners to explore their interests on-demand.",
  },
];
