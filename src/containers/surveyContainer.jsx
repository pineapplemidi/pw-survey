import React, {Component} from 'react';

import AboutYou from '../components/aboutYou.jsx'
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
        title: "Technology",
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
        ]}
      ]
    }
  }

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

  handleNext(metadata) {
    metadata.page = metadata.page + 1
  }
}
