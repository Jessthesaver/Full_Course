import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

type Image = {
  width: number;
  height: number;
  src: string;
};

type GalleryCollection = {
  galleryId: string;
  images: Image[];
};

function getRandomNumber(max: number, min: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createImageList(
  totalImages: number,
  max: number = 250 * 4,
  min: number = 250
): Image[] {
  const imageList: Image[] = [];

  let i = 0;

  while (i < totalImages) {
    const width = getRandomNumber(max, min);
    const height = getRandomNumber(max, min);
    const img = {
      width,
      height,
      src: faker.image.cats(width, height),
    };

    imageList.push(img);
    i++;
  }

  return imageList;
}

function createGallery(totalImages: number, galleryId: string = "1") {
  return {
    galleryId,
    images: createImageList(totalImages),
  };
}

function fakeDB(totalGalleries: number): {
  galleryCollection: GalleryCollection[];
} {
  const galleries: GalleryCollection[] = [];

  let i = 0;

  while (i < totalGalleries) {
    const totalImages = getRandomNumber(20, 100);
    const gallery = createGallery(totalImages, "1");
    galleries.push(gallery);
    i++;
  }

  return {
    galleryCollection: galleries,
  };
}

function createJSON(fileName: string, totalImages: number): void {
  writeFileSync(fileName, JSON.stringify(createGallery(totalImages)));
}

export default { fakeDB, createGallery, createJSON };
