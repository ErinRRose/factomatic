import React from "react";
import { connect } from 'react-redux';
import {castVote} from "../actions/voteActions";

class VoteButton extends React.Component {

    onClick = () => {
        this.props.castVote({
            fact_id: this.props.fact_id,
            vote: this.props.vote
        });        
    }
    render() {
        return(
            <button onClick={this.onClick}>
                {this.props.text}
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
  }

export default connect(mapStateToProps, { castVote })(VoteButton)
