const INITIAL_STATE = {
    diseaseOpen: '' 
};

const OPEN_DISEASE_DETAILS = 'OPEN_DISEASE_DETAILS';
const CLOSE_DISEASE_DETAILS = 'CLOSE_DISEASE_DETAILS';

const openDiseaseDetails = (diseaseName) => {
    return dispatch => {
        dispatch({
            type: OPEN_DISEASE_DETAILS,
            payload: diseaseName
        });
    };
}

const closeDiseaseDetails = () => {
    return dispatch => {
        dispatch({
            type: OPEN_DISEASE_DETAILS,
            payload: ''
        });
    };
}

export const actionsDashboard =  {
    openDiseaseDetails: openDiseaseDetails,
    closeDiseaseDetails: closeDiseaseDetails
}

export const reducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case OPEN_DISEASE_DETAILS: {
            return {
                ...state, 
                diseaseOpen: action.payload 
            }
        }
        case CLOSE_DISEASE_DETAILS: {
            return {
                ...state, 
                diseaseOpen: '' 
            }
        }
        default: {
            return state;
        }
    }
}

