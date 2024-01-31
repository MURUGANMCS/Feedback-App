import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  onFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-container">
            {emojis.map(each => (
              <li className="button-container" key={each.id}>
                <button
                  type="button"
                  onClick={this.onClickEmoji}
                  className="btn"
                >
                  <img src={each.imageUrl} alt={each.name} className="images" />
                </button>
                <br />
                <span className="emoji-name">{each.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  onThankYourFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="card-container">
          <img src={loveEmojiUrl} alt="love emoji" className="images" />
          <h1 className="heading">Thank You</h1>
          <p className="details">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div>
        {isFeedbackSelected
          ? this.onThankYourFeedback()
          : this.onFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
