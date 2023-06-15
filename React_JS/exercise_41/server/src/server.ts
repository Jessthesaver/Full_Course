import express from "express";
import cors from "cors";
import galleryCreator from "./createGallery";

const PORT = 3500;
const app = express();
const { fakeDB } = galleryCreator;
const { galleryCollection } = fakeDB(1);

app.use(cors());
app.use(express.json());

app.get("/api/gallery/:id", (req, res) => {
  try {
    const { id } = req.params;
    const count = Number(req.query.count);
    const page = Number(req.query.page);
    const gallery = galleryCollection.find(
      (element) => String(element.galleryId) === id
    );

    if (!gallery) {
      return res.status(404).send("The gallery does not exist");
    }

    const total = gallery.images.length;

    const imagesPerPage = Math.ceil(total / count);

    const slicedImages = new Array(imagesPerPage)
      .fill(0)
      .map((_, i) => gallery.images.slice(i * count, i * count + count));

    const pageImages = slicedImages[page - 1];

    const outputPage = {
      id,
      page,
      images: pageImages,
      total,
    };

    return res.status(200).send(outputPage);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
