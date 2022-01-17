import styled from 'styled-components';

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100vw;
  background-color: white;
  z-index: 1;

  input, button, select {
    margin-right: 35px;
  }

  .title {
    font-weight: bold;
    font-size: 1.2em;
  }

  .inputs {
    float: right;
  }
`;
