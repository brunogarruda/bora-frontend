import styled from "styled-components";

export const ModalStyle = styled.div`
  .modalc {
    width: 100%;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
    padding: 30px;
  }
`;

export const BotaoSubmitStyle = styled.div`
  .fancy {
    font-family: 'Marcellus SC', serif;
  }
  .gb {
    padding: 8px 20px;
    margin-right: 25px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 4px;
  }
  .gb-bordered {
    padding: 6px 20px;
    position: relative;
    border: 4px solid transparent;
    background-clip: padding-box;
    transition: 0.5s all;
  }
  .gb-bordered:after {
    transition: 0.5s all;
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    content: '';
    z-index: -1;
    border-radius: 4px;
  }
  .gb-rounded {
    border-radius: 50px;
  }
  .gb-rounded.gb-bordered:after {
    border-radius: 50px;
  }
  .hover-fill {
    transition: 0.6s all;
  }
  .hover-fill:hover {
    background-color: transparent;
    color: white;
  }
  .hover-fill.reverse {
    background-color: transparent;
    color: white;
  }
  .hover-fill.reverse:hover {
    background-color: white;
    color: #333;
  }
  .hover-slide {
    transition: 0.6s all;
  }
  .hover-slide:after {
    background-size: 200% 100%;
    background-position: 0% 0;
  }
  .hover-slide:hover:after {
    background-position: 100% 0;
  }

  #gb9 {
    background-color: transparent;
    color: white;
  }
  #gb9:after {
    background-image: linear-gradient(
        45deg,
        rgba(49, 74, 89, 0.45) 0%,
        rgba(49, 74, 89, 0.45) 12.5%,
        rgba(122, 86, 72, 0.45) 12.5%,
        rgba(122, 86, 72, 0.45) 25%,
        rgba(170, 94, 60, 0.45) 25%,
        rgba(170, 94, 60, 0.45) 37.5%,
        rgba(219, 102, 49, 0.45) 37.5%,
        rgba(219, 102, 49, 0.45) 50%,
        rgba(146, 90, 66, 0.45) 50%,
        rgba(146, 90, 66, 0.45) 62.5%,
        rgba(98, 82, 78, 0.45) 62.5%,
        rgba(98, 82, 78, 0.45) 75%,
        rgba(195, 98, 55, 0.45) 75%,
        rgba(195, 98, 55, 0.45) 87.5%,
        rgba(73, 78, 83, 0.45) 87.5%,
        rgba(73, 78, 83, 0.45) 100%
      ),
      linear-gradient(135deg, #750698, #6e22fb);
  }
  #gb9:hover {
    color: white;
  }
`;
