import { ThemeContext } from "styled-components"
import { HeroImage } from "../HeroImage";
import dashboardImageDark from "../../styles/img/starwars.jpg";
import dashboardImageLight from '../../styles/img/starwars-light.jpg'
import { SearchContainer, SearchInput, ContainerInput } from "./styles";
import { useContext } from 'react'

export const Search = ({ setSearchTerm, searchTerm }) => {
  const theme = useContext(ThemeContext)
  const dashboardImage = (theme.id === "01") ? dashboardImageLight : dashboardImageDark

  return (
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
}
