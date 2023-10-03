import { FunctionComponent, useEffect, useState } from "react";
import { useGetGalleryQuery, usePrefetch } from "../redux/slices/apiSlice";
import { Box, Pagination } from "@mui/material";
import GalleryImages from "./galleryImages";

interface Props {
  id: string;
  count: number;
}

const Gallery: FunctionComponent<Props> = ({ id, count }) => {
  const [page, setPage] = useState(1);

  const prefetchNext = usePrefetch("getGallery");

  useEffect(() => {
    if (page === count) return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - 1
      ) {
        prefetchNext({ galleryId: id, page: page + 1, count }, { force: true });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data, isError, isLoading, isSuccess } = useGetGalleryQuery({
    galleryId: id,
    page: page,
    count,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else if (isSuccess) {
    content = <GalleryImages images={data.images} />;
  }

  return (
    <Box>
      {content}
      <Pagination
        variant="outlined"
        color="secondary"
        count={count}
        page={page}
        size="large"
        onChange={handleChange}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      />
    </Box>
  );
};

export default Gallery;
