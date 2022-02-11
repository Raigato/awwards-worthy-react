import styled from "styled-components"

export const Container = styled.div``

export const Info = styled.div`
  background: white;
  padding: 3em;
  position: relative;
  margin-top: -0.5em;

  & > h2 {
    font-size: 2rem;
    margin-top: -5.5em;
    margin-bottom: 2.5em;
    font-weight: bold;
    color: white;
    text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
    max-width: min-content;
  }
`
