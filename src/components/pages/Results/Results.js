import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import styled from 'styled-components'
import SearchBar from "../../shared/SearchBar"
import Image from '../../shared/Image'

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

export default function Results() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isBottom, setIsBottom] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const { slug } = useParams();
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
            <StyledAvoidBreaker key={item.id}>
              <Image
                image={item.image}
                location={item.location}
                id={item.id}
                username={item.username}
                modalImage={item.modalImage} />
            </StyledAvoidBreaker>)
          ))}
      </StyledImageContainer>
      {
        data.total === 0 ?
          (<div>Brak wyników wyszukiwania</div>) : ''
      }
    </>)
};
