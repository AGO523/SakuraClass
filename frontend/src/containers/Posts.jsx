import React from 'react';
import { withRouter } from 'react-router';
import BasicTextFields from '../components/form';
import ImformationsCard from '../components/card';
import Button from '@material-ui/core/Button';


class Posts extends React.Component {
  handleToRootPage = () => {
    this.props.history.push('/rooms')
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleToRootPage}>
          rootページへ遷移する
        </Button>
        <BasicTextFields />
        <ImformationsCard />
      </div>
    )
  }
}

export default withRouter(Posts)
