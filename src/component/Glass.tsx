import styled from "styled-components";

type GlassProps = {
  width?: number;
  height?: number;
}

const Glass = ({ width = 280, height = 400 }: GlassProps) => {

  const customStyle = {
    width: width + 'px',
    height: height + 'px',
  }

  return (
    <Container style={customStyle}>
      <h1 style={{ color: '#fff' }}>Glass Component</h1>
    </Container>
  )
}

export default Glass;

const Container = styled.div`
  position: relative;
  /* width: 280px;
  height: 400px; */
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, .5);
  border-left: 1px solid rgba(255, 255, 255, .5);
  backdrop-filter: blur(5px);
`