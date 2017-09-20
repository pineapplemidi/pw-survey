import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <div>
          <img className='logo' src="../../build/PW_logo_04-vert-stacked_2.png" />
          <div className='slogan-continue'>
            <h2 className='slogan'>MIDI SURVEY</h2>
            <LinkContainer to="/test">
              <Button className='continue-button'>BEGIN</Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
