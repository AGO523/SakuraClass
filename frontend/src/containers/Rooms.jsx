import React, { Fragment, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

// components
import Skeleton from '@material-ui/lab/Skeleton';

//apis
import { fetchRooms } from '../apis/rooms';

//reducers
import {
  initialState,
  roomsActionTyps,
  roomsReducer,
} from '../reducers/rooms';

// constants
import { REQUEST_STATE } from '../constants';

//images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';
import RoomImage from '../images/room-image.jpg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 60px;
`;

const MainLogoImage = styled.img`
  height: 60px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 270px;
  width: 700px;
  padding: 4px;
  border-radius: 24px;
`;

const RoomsContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const RoomsContentWrapper = styled.div`
  width: 450px;
  height: 300px;
  padding: 8px;
`;

const RoomsImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
`;

export const Rooms = () => {
  // const [state, dispatch] = useReducer(roomsReducer, initialState);
  // useEffect(() => {
  //   dispatch({ type: roomsActionTyps.FETCHING });
  //   fetchRooms()
  //     .then((data) =>
  //       dispatch({
  //         type: roomsActionTyps.FETCH_SUCCESS,
  //         payload: {
  //           rooms: data.rooms
  //         }
  //       })
  //     )
  // }, [])
  return (
    <Fragment>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      <RoomsContentsList>
        {/* {
          state.fetchState === REQUEST_STATE.LOADING ?
            <Fragment>
              <Skeleton variant="rect" width={600} height={400} />
              <Skeleton variant="rect" width={600} height={400} />
              <Skeleton variant="rect" width={600} height={400} />
            </Fragment>
            :
            state.roomsList.map((item, index) =>
              <Link to={`/rooms/${item.id}/foods`} key={index} style={{ textDecoration: 'none' }}>
                <RoomsContentWrapper>
                  <RoomsImageNode src={RoomImage} />
                  <MainText>{item.name}</MainText>
                  <SubText>{`配送料：${item.fee}円 ${item.time_required}分`}</SubText>
                </RoomsContentWrapper>
              </Link>
            )
        } */}
      </RoomsContentsList>
    </Fragment>
  )
}
