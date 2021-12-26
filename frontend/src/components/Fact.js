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
                <br/>
                {this.props?.fact?.text}
                <div><h4>{this.props?.truthiness}</h4></div>
                <VoteButton text="True" fact_id={this.props?.fact?.id} vote={true} />
                <VoteButton text="False" fact_id={this.props?.fact?.id} vote={false} />
                
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