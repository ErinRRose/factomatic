export const fetchFacts = () => {
    return dispatch => {
        dispatch({ type: "LOADING_FACTS" });
        fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)
        .then((resp) => {
            try { return resp.json(); }
            catch { console.error(`bad response: ${resp.text}`)};
        })
        .then((randomFact) => {
            dispatch({ type: "ADD_FACT", fact: randomFact });
            fetch(`http://localhost:3001/facts/${randomFact.id}`)
            .then((resp) => {
        
                try { return resp.json(); }
                catch { console.error(`bad response: ${resp.text}`)};
            })
            .then((truthy) => {
                truthy = truthy[0];
                let truthiness =  truthy.total ? `${Math.round((truthy.truthy / truthy.total) * 100)}% Truthy` : "No Data" 
                dispatch({ type: "ADD_TRUTHY", truthiness: truthiness });
             })
        })
    };
};
