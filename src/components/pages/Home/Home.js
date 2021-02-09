import SearchBar from "../../shared/SearchBar";
import styled from 'styled-components'
import BackgroundImage from './BackgroundImage'

const StyledBackground = styled.div`
  display: flex;
  position: relative;
  width: 98vw;
  height: 98vh;
  justify-content: center;
  left:0;
  right:0;
  margin:auto;
`

export default function Home() {
  return (
    <StyledBackground>
      <BackgroundImage />
      <SearchBar />
    </StyledBackground>
  );
}
