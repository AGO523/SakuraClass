import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Movebar extends React.Component {

  handleToPostsPage = () => {
    this.props.history.push('/posts')
  }
  // handleToChatPage = () => {
  //   this.props.history.push('/chats')
  // }
  handleToRoomsPage = () => {
    this.props.history.push('/rooms')
  }

  render() {
    return (
      <div>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={this.handleToRoomsPage}>
            rooms
          </Button>
          <Button onClick={this.handleToPostsPage}>
            posts
          </Button>
          {/* <Button onClick={this.handleToChatPage}>
            rootページへ遷移する
          </Button> */}
        </ButtonGroup>
      </div>

    )
  }
}

export default withRouter(Movebar)




