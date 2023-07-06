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
  max: number = 250 * 2,
  min: number = 250
): Image[] {
  const imageList: Image[] = [];

  for (let i = 0; i < totalImages; i++) {
    const width = getRandomNumber(max, min);
    const height = getRandomNumber(max, min);
    const img = {
      width,
      height,
      src: faker.image.cats(width, height),
    };

    imageList.push(img);
  }

  return imageList;
}

function createGallery(totalImages: number, galleryId: string = "1") {
  // const galleryId = Date.now();
  return {
    galleryId,
    images: createImageList(totalImages),
  };
}

function fakeDB(totalGalleries: number): {
  galleryCollection: GalleryCollection[];
} {
  const galleries: GalleryCollection[] = [];

  for (let i = 0; i < totalGalleries; i++) {
    const totalImages = getRandomNumber(5, 10);
    const gallery = createGallery(totalImages, "1");
    galleries.push(gallery);
  }

  return {
    galleryCollection: galleries,
  };
}

function createJSON(fileName: string, totalImages: number): void {
  writeFileSync(fileName, JSON.stringify(createGallery(totalImages)));
}

export default { fakeDB, createGallery, createJSON };
