import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: gray;
`



const Header = (props) => {
    return (
        <ContainerHeader>
             <h3>Astromatch</h3>
             <div>
                <button onClick = {() => props.changePage('Home')}>Home</button>
                <button onClick ={() => props.changePage('MatchesPage')}>Seus Matches</button>
             </div>
            
        </ContainerHeader>
           
    )
}

export default Header