import React, {useState} from 'react';
import styled from "styled-components";

const DropDownContainer = styled("div")`
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  //border: 1px solid #FFFFFF;
  z-index: 10;
  border-radius: 15px;
  margin-top: 15px;
`;

const DropDownHeader = styled("div")`
    z-index: 10;

  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 15px;
  padding: 13px 25px;
`;

const DropDownListContainer = styled("div")`
    z-index: 10;

  position: relative;
`;

const DropDownList = styled("ul")`
    z-index: 10;

  background-color: black;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #FFFFFF;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  //background: transparent;
  box-sizing: border-box;
  width: 100%;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
    z-index: 10;

  list-style: none;
  padding: 9px 0 9px 10px;
`;

const PayMethodContainer = ({options, setSelectedOption, selectedOption}) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOptionClicked = option => () => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const toggling = () => setIsOpen(!isOpen);
    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption || "Выбрать"}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {options.map(el => (
                            <ListItem onClick={onOptionClicked(el.option)} key={el.id}>
                                {el.option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
};

export default PayMethodContainer;
