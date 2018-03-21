const SET_DISEASE_TO_CHANGE = 'SET_DISEASE_TO_CHANGE';
const UNSET_DISEASE_TO_CHANGE = 'UNSET_DISEASE_TO_CHANGE';
const SAVE_DISEASE_SELECTED = 'SAVE_DISEASE_SELECTED';
const CHANGE_PEOPLE_FROM_DISEASE_SELECTED = 'CHANGE_PEOPLE_FROM_DISEASE_SELECTED';

const INITIAL_STATE = {
    diseases: [
        { 
            id: 1,
            name: "Cancer",
            data: [ { year: 2000, people: 15040 }, { year: 2001, people: 17569 }, { year: 2002, people: 19568 }, { year: 2003, people: 15040 },{ year: 2004, people: 15040 }, { year: 2005, people: 28950 } ]
        },
        { 
            id: 2,
            name: "Diabetes", 
            data: [ { year: 2000, people: 10233 }, { year: 2001, people: 11233 }, { year: 2002, people: 32321 }, { year: 2003, people: 70596 }, { year: 2005, people: 70596 } ]
        },
        { 
            id: 3,
            name: "Heart Attack", 
            data: [ { year: 2000, people: 23123 }, { year: 2001, people: 43356 }, { year: 2002, people: 68864 }, { year: 2003, people: 80903 } ]
        },
        { 
            id: 4,
            name: "Respiratory arrest", 
            data: [ { year: 2000, people: 25125 }, { year: 2001, people: 35621 }, { year: 2002, people: 45623 }, { year: 2003, people: 60023 } ]
        }
    ],
    diseaseSelected: {}
}


export const actions = {

  setDiseaseToChange: (diseaseId) => {
    return dispatch => {
      dispatch({
        type: SET_DISEASE_TO_CHANGE,
        payload: diseaseId
      });
    }
  },
  unsetDiseaseToChange: () => {
    return dispatch => {
      dispatch({
        type: UNSET_DISEASE_TO_CHANGE
      });
    }
  },
  saveDiseaseSelected: () => {
    return dispatch => {
      dispatch({
        type: SAVE_DISEASE_SELECTED,
      });
    }
  },
  changeValuesFromDiseaseSelected: (diseaseId, year, peopleNumber) => {
    return dispatch => {
      dispatch({
        type: CHANGE_PEOPLE_FROM_DISEASE_SELECTED,
        payload: {
          diseaseId: diseaseId,
          year: year,
          people: peopleNumber
        }
      });
    }
  }
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_DISEASE_TO_CHANGE: {
      const selectedDisease = state.diseases.find(disease => disease.id === action.payload);
      return { ...state, diseaseSelected: selectedDisease };
    }
    case UNSET_DISEASE_TO_CHANGE: {
      return { ...state, diseaseSelected: {} };
    }
    case CHANGE_PEOPLE_FROM_DISEASE_SELECTED: {
      const { diseaseSelected } = state;
      const newData = [ ...diseaseSelected.data.filter(data => data.year !== action.payload.year), { year: action.payload.year, people: action.payload.people } ]
      const diseaseChanged =  {
          ...diseaseSelected,  
          data: newData.sort((a, b) => a.year - b.year )
      }
      console.log(diseaseChanged);
      return { 
          ...state, 
          diseaseSelected: diseaseChanged
      };
    }
    case SAVE_DISEASE_SELECTED: {
      const { diseases, diseaseSelected }= state;
      const newDiseases = [ ...diseases.filter(disease => disease.id !== diseaseSelected.id), diseaseSelected ]
      return { ...state, diseases: newDiseases.sort((a,b) => a.id - b.id) };
    }
    default: {
      return state;
    }
  }
}