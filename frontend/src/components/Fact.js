import React from "react";
import { connect } from 'react-redux';
import VoteButton from './VoteButton';
import { fetchFacts } from '../actions/factActions'

class Fact extends React.Component {
    componentDidMount(){
        this.props.fetchFacts();
      }
    render() {
        return(
            <div>
                {this.props?.fact?.text}
                <div>{this.props?.truthiness}</div>
                <VoteButton text="yes" fact_id={this.props?.fact?.id} vote={true} />
                <VoteButton text="no" fact_id={this.props?.fact?.id} vote={false} />
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       fact: state.fact,
       truthiness: state.truthiness,
       loading: state.loading
    }
  }

export default connect(mapStateToProps, { fetchFacts })(Fact)