import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ATM from "../../../image/coins/atm.png";
import BTC from "../../../image/coins/btc.png";
import ETH from "../../../image/coins/eth.png";

function Tokens(props: any) {
  const Main = styled("div")`
    font-family: sans-serif;
    height: 40px;
  `;

  const DropDownContainer = styled("div")`
    width: 85px;
    margin: 0 auto;
  `;

  const DropDownHeader = styled("div")`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    font-weight: 500;
    font-size: 1.3rem;
    color: #3faffa;
  `;

  const DropDownListContainer = styled("div")``;

  const DropDownList = styled("ul")`
    padding: 0;
    margin: 0;
    padding-left: 1em;
    box-sizing: border-box;
    color: #3faffa;
    font-size: 1.3rem;
    font-weight: 500;
    &:first-child {
      padding-top: 0.8em;
    }
  `;

  const ListItem = styled("li")`
    list-style: none;
    margin-bottom: 1.8em;
  `;

  // useEffect(() => {
  //   console.log(props)
  // }, [])

  const [options, setOptions] = useState([ATM, BTC, ETH]);
  // const [renderOptions, setRenderOptions] = useState<string[]>(options.slice(1));
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => {
    setSelectedOption(value);
    setIsOpen(false);
    // const index = options.indexOf(selectedOption);
    // const render = [options.slice(0, index), options.slice(index + 1)]
    // setRenderOptions(render[0])
    // console.log(renderOptions)
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <img src={selectedOption} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem
                  onClick={() => onOptionClicked(option)}
                  key={Math.random()}
                >
                  <img src={option} />
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}

export default Tokens;
