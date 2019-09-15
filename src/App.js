import React from 'react';
import './App.css';
import styled from 'styled-components';
import { FunctionBar, BarOptions } from './components/FunctionBar';
import Search from './assest/search.svg';
import Grid_Selected from './assest/grid_selected.svg';
import List_Unselected from './assest/list_unselected.svg';
import { NoteItems, demoNoteItemArr } from './components/NoteItems';
const AppWrapper = styled.div`
  display:flex;
  height:100%;
  width:100%;
`;

const SideBar = styled.aside`
  height:100vh;
  background:#D0D5D9;
  width:15vw;
`;

const NoteItemWrapper = styled.div`
  display:flex;
  flex-direction:column;
  background:#E7ECF1;
  align-content:flex-start;
  width:20vw;
`;

const SerachBar = styled.div`
  display:flex;
  width:150px;
  margin:0 auto;
  margin-top:32px;
  border:1px solid #FFFFFF;
  > input {
    background:#FFFFFF;
  }
`;

const DisplayWay = styled.div`
  display:flex;
  width:100%;
  padding: 20px;
`;

const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  background:#FFFFFF;
  width:65vw;
`;

function App() {
  return (
    <AppWrapper>
      <SideBar>
        <FunctionBar options={BarOptions} selected={0}/>
      </SideBar>
      <NoteItemWrapper>
        <SerachBar>
          <input />
          <span><img src={Search} /></span>
        </SerachBar>
        <DisplayWay>
          <img src={Grid_Selected} />
          <img src={List_Unselected} />
        </DisplayWay>
        <NoteItems data={demoNoteItemArr} selected={0} />
      </NoteItemWrapper>
      <MainWrapper>
        <h1 style={{margin:'0 auto'}}>To be done</h1>
      </MainWrapper>
    </AppWrapper>
  );
}

export default App;
