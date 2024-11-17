import { render, screen, fireEvent } from "@testing-library/react";
import SearchComponent from "../search-component/SearchComponent";

test("renders Search Component", () => {
  render(<SearchComponent />);
  const linkElement = screen.getByText("Search");
  expect(linkElement).toBeInTheDocument();
});

test("find articles by search", () => {
  const { container } = render(<SearchComponent />);
  const inputElement = screen.getByPlaceholderText("Search...");
  fireEvent.change(inputElement, {
    target: {
      value: "work",
    },
  });
  expect(inputElement.value).toBe("work");
  const filteredArticles = container.querySelectorAll(".article-div");
  expect(filteredArticles.length).toBe(3);
});

test("find only one article by search", () => {
  const { container } = render(<SearchComponent />);
  const inputElement = screen.getByPlaceholderText("Search...");
  fireEvent.change(inputElement, {
    target: {
      value: "open",
    },
  });
  expect(inputElement.value).toBe("open");
  const filteredArticles = container.querySelectorAll(".article-div");
  expect(filteredArticles.length).toBe(1);
  const foundArticle = screen.getByText(/My Laptop and Saw this/i);
  expect(foundArticle).toBeInTheDocument();
});
