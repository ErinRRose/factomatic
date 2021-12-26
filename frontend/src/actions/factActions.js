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
            return randomFact;
        })
        .then((randomFact) => {
           //call api to get truthiness
            return {total:1,truthy:1};
        })
        // .then((resp) => {
        //     try { return resp.json(); }
        //     catch { console.error(`bad response: ${resp.text}`)};
        // })
        .then((truthy) => {
            let truthiness = `69%`; // truthy.truthy / truthy.total (todo: remember to handle 0) repsponse
            dispatch({ type: "ADD_TRUTHY", truthiness: truthiness });
         })

    };
};
