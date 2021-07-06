import React, { Fragment, useEffect, useReducer } from 'react';
import styled from 'styled-components';
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';

//apis
import { fetchRooms } from '../apis/rooms';

//reducers
import {
  initialState,
  roomsActionTyps,
  roomsReducer,
} from '../reducers/rooms';

//images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
`;

const MainLogoImage = styled.img`
  height: 40px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 450px;
`;

export const Rooms = () => {
  const [state, dispatch] = useReducer(roomsReducer, initialState);
  useEffect(() => {
    dispatch({ type: roomsActionTyps.FETCHING });
    fetchRooms()
      .then((data) =>
        dispatch({
          type: roomsActionTyps.FETCH_SUCCESS,
          payload: {
            rooms: data.rooms
          }
        })
      )
  }, [])
  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      {
        state.roomsList.map(room =>
          <div>
            {room.name}
          </div>
        )
      }
    </Fragment>
  )
}
