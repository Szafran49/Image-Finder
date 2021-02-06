import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'
import SearchBar from "../SearchBar"
import Image from '../Image'
const StyledImageContainer = styled.div`
  column-count: 3;
`
const StyledAvoidBreaker = styled.div`
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
`
const StyledSearchBarWrapper = styled.div`
  position: sticky;
  top:0;
  background-color:white;

`
//https://api.unsplash.com/search/photos?query=london&client_id=2CIGTbb0j0WvgJ_TI2k0fGeJ-YjtmTAthvAwgX4ytZE
export default function Results() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const { slug } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const options = {
      url: `https://api.unsplash.com/search/photos?query=${slug}&page=${pageNumber}&client_id=2CIGTbb0j0WvgJ_TI2k0fGeJ-YjtmTAthvAwgX4ytZE`,
      method: 'GET',
    }
    setIsLoading(true)
    const fetchData = async () => {
      setIsError(false);
      try {
        const response = await axios(options);
        if (response && response.data) {
          // use prev, which is the up-to-date state value
          setData(
            response.data.results.map(item => ({
              id: item.id,
              image: item.urls.regular,
              location: item.user.location,
              username: item.user.name,
              modalImage: item.urls.small,
            })),
          )
          setIsLoading(false);
        }
        console.log(data)
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <StyledSearchBarWrapper>
        <SearchBar />
      </StyledSearchBarWrapper>
      <StyledImageContainer>
        {isLoading ? ('') : (
          data.map(item => (
            <StyledAvoidBreaker >
              <Image image={item.image} location={item.location} id={item.id} username={item.username} modalImage={item.modalImage} />
            </StyledAvoidBreaker>)
          ))}
      </StyledImageContainer>
      {
        data.total === 0 ?
          (<div>Brak wyników wyszukiwania</div>) : ''
      }
    </>)
};
