const INITIAL_STATE = {
    diseases: [
        { 
            name: "Cancer",
            data: [ { year: 2000, people: 15040 }, { year: 2001, people: 17569 }, { year: 2002, people: 19568 }, { year: 2003, people: 15040 }, { year: 2005, people: 28950 } ]
        },
        { 
            name: "Diabetes", 
            data: [ { year: 2000, people: 10233 }, { year: 2001, people: 11233 }, { year: 2002, people: 32321 }, { year: 2003, people: 70596 }, { year: 2005, people: 70596 } ]
        },
        { 
            name: "Heart Attack", 
            data: [ { year: 2000, people: 23123 }, { year: 2001, people: 43356 }, { year: 2002, people: 68864 }, { year: 2003, people: 80903 } ]
        },
        { 
            name: "Respiratory arrest", 
            data: [ { year: 2000, people: 25125 }, { year: 2001, people: 35621 }, { year: 2002, people: 45623 }, { year: 2003, people: 60023 } ]
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    return state;
}
