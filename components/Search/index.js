import { HeroImage } from "../HeroImage";
import dashboardImage from "../../styles/img/starwars.jpg";
import { SearchContainer, SearchInput, ContainerInput } from "./styles";

export const Search = ({ setSearchTerm, searchTerm }) => (
  <SearchContainer>
    <HeroImage src={dashboardImage} alt="" />
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
