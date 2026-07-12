import type { PictureBook } from "@/types/story";
import ellieStory from "./ellie-and-the-tiny-lost-duck.json";
import pipStory from "./pip-and-the-sleepy-star-parade.json";

const stories: PictureBook[] = [pipStory as PictureBook, ellieStory as PictureBook];

export { stories };
