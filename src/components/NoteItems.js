import React from 'react';
import styled from 'styled-components';
import MarkStar from '../assest/markstar.svg';

export const demoNoteItemArr = [
    { color: '#FCA1A1', name: '演講筆記_1', like: true },
    { color: '#93C8E0', name: '演講筆記_2', like: false },
    { color: '#699186', name: '演講筆記_3', like: false },
    { color: '#FCA1A1', name: '演講筆記_4', like: false },
    { color: '#835C50', name: '演講筆記_5', like: false },
]

const UlWrapper = styled.ul`
    margin-top:-15px;
    padding:initial;
    > li {
        display:flex;
        justify-content:space-between;
        margin-top: 10px;
        padding: 5px;
        margin-left:15px;
        margin-right:15px;
    }
    > li span {
        display:flex;
        align-items:center;
        font-weight:bold;
        span:last-child {
            color:#B2B2B2;
        }
    }
    > .the-chosen-one {
        background:#FFFFFF;
    }
`;

const Circle = styled.div`
    width:15px;
    height:15px;
    border-radius:50%;
    background:${props => props.color};
    margin-right:5px;
`;


export const NoteItems = ({ data, selected }) => {
    return (
        <UlWrapper>
            {
                data.map((obj, index) => {
                    return (
                        <li key={index}>
                            <span>
                                <Circle color={obj.color} />
                                {obj.name}
                            </span>
                            <span>
                                <img src={MarkStar} />
                                <span>．．．</span>
                            </span>
                        </li>
                    )
                })
            }
        </UlWrapper>
    )
}