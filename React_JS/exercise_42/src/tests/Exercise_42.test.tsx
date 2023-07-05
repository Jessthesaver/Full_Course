import { act, render, screen, waitFor } from "@testing-library/react";
import Gallery from "../components/gallery";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function TestComponent() {
  return (
    <Provider store={store}>
      <Gallery id="1" count={3} />
    </Provider>
  );
}

test("Check the component correctly rendering", async () => {
  render(<TestComponent />);

  const loading = screen.getAllByText("Loading...");

  expect(loading).toBeTruthy();
  const response = await fetch(
    "http://localhost:3500/api/gallery/1?count=3&page=1"
  );
  const data = await response.json();
  const URLFromResponse = data.images.map((element: any) => element.src);

  await waitFor(() => {
    const images = screen.getAllByRole("img");

    const imagesURL = images.map((element: any) => element.src);
    expect(imagesURL).toStrictEqual(URLFromResponse);
  });
});

test("Click on next arrow will render page no. 2", async () => {
  render(<TestComponent />);

  const nextButton = screen.getByLabelText("Go to next page");
  const response = await fetch(
    "http://localhost:3500/api/gallery/1?count=3&page=2"
  );
  const data = await response.json();
  const URLFromResponse = data.images.map((element: any) => element.src);

  await waitFor(() => {
    nextButton.click();
  });

  await waitFor(() => {
    const images = screen.getAllByRole("img");

    const imagesURL = images.map((element: any) => element.src);
    expect(imagesURL).toStrictEqual(URLFromResponse);
  });
});

test("Click on back arrow will render page no. 1", async () => {
  render(<TestComponent />);

  const nextButton = screen.getByLabelText("Go to previous page");
  const response = await fetch(
    "http://localhost:3500/api/gallery/1?count=3&page=1"
  );
  const data = await response.json();
  const URLFromResponse = data.images.map((element: any) => element.src);

  await waitFor(() => {
    nextButton.click();
  });

  await waitFor(() => {
    const images = screen.getAllByRole("img");

    const imagesURL = images.map((element: any) => element.src);
    expect(imagesURL).toStrictEqual(URLFromResponse);
  });
});
