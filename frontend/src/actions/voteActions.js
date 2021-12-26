import { fetchFacts } from '../actions/factActions'

export const castVote = (vote) => {
    return dispatch => {
        fetch(`http://localhost:3001/facts/`,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(vote)
        })
        .then(() => {
            dispatch(fetchFacts());
        });
    };
};
