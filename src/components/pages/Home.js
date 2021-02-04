import SearchBar from "../SearchBar";
import Container from "@material-ui/core/Container";
import ImagesContainer from "../ImagesContainer";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState(null);
  return (
    <Container maxWidth="xs">
      <SearchBar setInputValue={setInputValue} />
      <ImagesContainer inputValue={inputValue} />
    </Container>
  );
}
