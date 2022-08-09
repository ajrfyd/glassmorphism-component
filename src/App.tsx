import styled, { createGlobalStyle } from 'styled-components';
import Glass from './component/Glass';

const App = () => {

  return (
    <Container>
      <Glass width={2000}/>
      <Glass />
      <Glass />
      <Glass />
      <Glass />
      <Glass />
      <Glass />
      <Glass />
      <GlobalStyle />
    </Container>
  )
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    align-items: center;
    align-items: center;
    min-height: 100vh;
    background-color: #161623;
  }

  body:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(30% at right 70%);
  }

  body:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 10% 10%);

  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  /* max-width: 1200px; */
  width: 100vw;
  flex-wrap: wrap;
  z-index: 1;
`