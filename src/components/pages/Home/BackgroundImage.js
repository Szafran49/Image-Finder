import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledImage = styled.img`
    position:absolute;
    height:100%;
`

export default function BackgroundImage() {
    const [data, setData] = useState()
    useEffect(() => {
        const options = {
            url: `https://api.unsplash.com/photos/random?w=1000&client_id=2CIGTbb0j0WvgJ_TI2k0fGeJ-YjtmTAthvAwgX4ytZE`,
            method: 'GET',
        }
        const fetchData = async () => {
            const response = await axios(options);
            setData(response.data.urls.custom)
        };
        fetchData();
    }, []);
    return <StyledImage src={data} alt="Background Image" />
}