import styled from "styled-components"

export const Background = styled.div`
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1529034502960-57f42a966080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80");
  background-size: cover;
`

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
`

export const Content = styled.div`
  color: white;
  text-align: center;

  h1 {
    font-size: 4rem;
    margin-bottom: 0;
    font-weight: normal;
    transition: all 1.5s;
  }

  p {
    font-size: 1.3rem;
    transition: all 1.5s;
  }
`
