import styled from 'styled-components'

const StyledWrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:red;
`

const StyledBackground = styled.div`
    
`

export default function HomeLayout({ children }) {

    return <StyledWrapper> {children}
    </StyledWrapper>
}