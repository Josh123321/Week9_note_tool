import React from 'react';
import styled from 'styled-components';
import Note from '../assest/note.svg';
import HashTag from '../assest/hashtag.svg';
import Star from '../assest/star.svg';
import Delete from '../assest/delete.svg';

const FunctionBarWrapper = styled.ul`
    margin-top:32px;  
    padding: initial;
    > li {
        display: flex;
        justify-content: center;
        align-content:center;
        font-weight:bold;
        margin-top: 10px;
        padding: 5px;
        align-items: center;
    }
    > li > span {
        margin-left: 20px;
    }
    > .the-chosen-one {
        background:#FFFFFF;
    }
`;

function getRelIcon(index) {
    switch (index) {
        case 1:
            return Note;
        case 2:
            return HashTag;
        case 3:
            return Star;
        case 4:
            return Delete;
    }
}

export const BarOptions = [
    { iconId: 1, name: "筆記" },
    { iconId: 2, name: "標籤" },
    { iconId: 3, name: "星號" },
    { iconId: 4, name: "刪除" },
]

export const FunctionBar = ({ options,selected }) => {
    return (
        <FunctionBarWrapper>
            {
                options.map((item, index) => {
                    return (
                        <li key={index} className={selected === index ? 'the-chosen-one' : null}>
                            <img src={getRelIcon(item.iconId)} />
                            <span>{item.name}</span>
                        </li>
                    )
                })
            }
        </FunctionBarWrapper>
    )
}