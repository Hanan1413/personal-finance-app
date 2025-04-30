import pots from '../../data/pots.json'

import { createContext, useReducer, useContext, useEffect} from "react";




// const loadData = (key, defaultValue) =>{

// }

// Pot Actions
const POT_ACTIONS ={
    ADD_POT:'ADD_POT',
    DELETE_POT: 'DEETE_POT',
    EDIT_POT: 'EDIT_POT',
    ADD_MONY: 'ADD_MONY',
    WITHDRAW_MONY: 'WITHDRAW_MONEY',

}


// CreateReducer
const initialState={
    pots:[],
    deletPot:null,
    editPot:null,
    totalMony:0,
    addMony:0,
    withdrawMony:0,
    isLoading:false,
    error:null,

}




export const potReducer = (state, action) =>{
    switch(action.typ){
        case POT_ACTIONS.ADD_POT:
           const newPot = {
            id: uuidv4(),
            name: action.payload.name,
            target: action.payload.target,
            theme: action.payload.theme
           }

           return{
            ...state,
            pots:[...state.pots, newPot],

           };

           case POT_ACTIONS.DELETE_POT:
            const filteredPots = state.pots.filter((pot) => pot.id !== action.payload)
            return{
                ...state,
                pots:filteredPots,
                deletPot: action.payload,
            }

            case POT_ACTIONS.EDIT_POT:
                const editPot = state.pots.map((pot) => pot.id === action.payload.id ? {...pot, ...action.payload} : pot );
                return{
                    ...state,
                    pots:editPot, 
                    editPot: action.payload,
                }

                case POT_ACTIONS.ADD_MONY:
                    return{
                        ...state,
                        addMony: action.payload,
                    }
                case POT_ACTIONS.WITHDRAW_MONY:
                     return{

                        ...state,
                        withdrawMony: action.payload,

                     }
              case POT_ACTIONS.IS_LOADING:
                return{
                    ...state,
                    isLoading: action.payload,
                }
                case POT_ACTIONS.ERROR:
                    return{
                        ...state,
                        error: action.payload,
                    }

                    default:
                        return state;
                    
    }

}


export const PotContext = createContext();

// component provider

const PotProvider = ({children}) => {
    const [state, dispatch] = useReducer(potReducer, initialPot);

   
}
