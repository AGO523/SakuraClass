import React, { Fragment, useEffect } from 'react';
// import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';
import { fetchRooms } from '../apis/rooms';

export const Rooms = () => {
  useEffect(() => {
    fetchRooms()
      .then((data) =>
        console.log(data)
      )
  }, [])
  return (
    <Fragment>
      top page
    </Fragment>
  )
}
