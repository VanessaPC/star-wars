import { HeroImage } from "../HeroImage";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { SearchContainer, SearchInput, ContainerInput } from "./styles";

export const Search = ({ setSearchTerm, searchTerm }) => {
  const theme = useContext(ThemeContext);
  return (
    <SearchContainer>
      <HeroImage src={theme.dashboardImage} alt="" />
      <ContainerInput>
        <SearchInput
          type="text"
          minLength={1}
          value={searchTerm}
          placeholder="Search your Star Wars character"
          debounceTimeout={500}
          onChange={(e) => setSearchTerm(e.target.value.trim())}
        />
      </ContainerInput>
    </SearchContainer>
  );
};
