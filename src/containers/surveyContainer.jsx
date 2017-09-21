import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import { Page } from '../components/page.jsx'

export default class SurveyContainer extends Component {
  constructor() {
    super()
    this.state = {
      metadata: {
        page: 1,
        num_pages: 4
      },
      pages: [{
        title: "ABOUT YOU",
        questions: [
          {
            type: "short-text",
            question: "What is your name?",
            answer: ""
          },
          {
            type: "short-text",
            question: "Where are you from",
            answer: ""
          },
          {
            type: "short-text",
            question: "What is your Band, DJ, or Performer name?",
            answer: ""
          },
          {
            type: "short-text",
            question: "What is your soundcloud URL? (ex: soundcloud.com/tipper)",
            answer: ""
          }
        ]
      },
      {
        title: "Software",
        questions: [
          {
            type: "short-text-multi",
            question: "What software do you use to produce?",
            answer: []
          },
          {
            type: "short-text-multi",
            question: "What software do you use live",
            answer: []
          }
        ]
      },
      {
        title: "Hardware",
        questions: [
          {
            type: "short-text-multi",
            question: "What controllers to you have for your live setup?",
            answer: []
          },
          {
            type: "short-text-multi",
            question: "What's your favorite thing about you live setup?",
            answer: []
          },
          {
            type: "short-text-multi",
            question: "What do you wish you could do with your live setup?",
            answer: []
          }
        ]
      },
      {
        title: "Thanks for participating in our Survey!",
        questions: [
          {
            type: "short-text-multi",
            question: "Would you like to join our email list?",
            answer: []
          }
        ]
      }
      ]
    }
  }

  // render() {
  //
  //   return (
  //     <Switch>
  //       {this.state.pages.map((page, index) => {
  //         return (
  //           <Route path={String(index + 1)} component={
  //             <Page
  //               metadata={this.state.metadata}
  //               page={page}
  //               handleNext={this.handleNext}
  //           />}/>
  //         )
  //       })}
  //     </Switch>
  //   )
  // }

  render() {

    return (
      <div>
        <Page
          metadata={this.state.metadata}
          page={this.state.pages[this.state.metadata.page - 1]}
          handleNext={this.handleNext}
        />
      </div>
    )
  }

  makeRouteUri(index) {
    let uri = '/' + index
    return uri
  }

  handleNext(metadata) {
    metadata.page = metadata.page + 1
    // this.forceUpdate()
  }
}
