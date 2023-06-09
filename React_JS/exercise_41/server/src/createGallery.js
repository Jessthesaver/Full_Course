import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createImageList(totalImages, max = 250 * 2, min = 250) {
  const imageList = [];

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

function createGallery(totalImages, galleryId = "1") {
  // const galleryId = Date.now();
  return {
    galleryId,
    images: createImageList(totalImages),
  };
}

function fakeDB(totalGalleries) {
  const galleries = [];

  for (let i = 0; i < totalGalleries; i++) {
    const totalImages = getRandomNumber(5, 10);
    const gallery = createGallery(totalImages, "1");
    galleries.push(gallery);
  }

  return {
    galleryCollection: galleries,
  };
}

function createJSON(fileName, totalImages) {
  writeFileSync(fileName, JSON.stringify(createGallery(totalImages)));
}

// createJSON('Gallery', 5);

export default { fakeDB, createGallery, createJSON };
