import { Meta, StoryObj } from "@storybook/react";
import GalleryImages from "../components/galleryImages";

export default {
  title: "Images",
  component: GalleryImages,
} as Meta<typeof GalleryImages>;

type Story = StoryObj<typeof GalleryImages>;

export const GalleryTemplate: Story = {
  args: {
    images: [],
  },
};

export const SimplePage: Story = {
  ...GalleryTemplate,
  args: {
    images: [
      { width: 678, height: 437, src: "https://loremflickr.com/678/437/cats" },
      { width: 494, height: 719, src: "https://loremflickr.com/494/719/cats" },
      { width: 576, height: 885, src: "https://loremflickr.com/576/885/cats" },
    ],
  },
};

export const FullImages: Story = {
  ...GalleryTemplate,
  args: {
    images: [
      { width: 274, height: 737, src: "https://loremflickr.com/274/737/cats" },
      { width: 494, height: 719, src: "https://loremflickr.com/494/719/cats" },
      { width: 314, height: 715, src: "https://loremflickr.com/314/715/cats" },
      { width: 576, height: 885, src: "https://loremflickr.com/576/885/cats" },
      { width: 678, height: 437, src: "https://loremflickr.com/678/437/cats" },
      { width: 494, height: 719, src: "https://loremflickr.com/494/719/cats" },
      { width: 934, height: 876, src: "https://loremflickr.com/934/876/cats" },
      { width: 678, height: 437, src: "https://loremflickr.com/678/437/cats" },
    ],
  },
};
