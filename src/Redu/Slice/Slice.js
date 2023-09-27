import { createSlice } from "@reduxjs/toolkit"


const initialState=[
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},
    {name:"sachin",age:15,course:"MERN",batch:"Ea24"},

]
    

const StudentSlice=createSlice({
    name:"Stu_Data",
    initialState,
    reducers:{
        editStudent:(state,action)=>{
        state[action.payload.index]=action.payload.info
        },
        addStudent:(state, action)=>{
            state.push(action.payload); 
        }
    }
})
 export const {editStudent,addStudent}=StudentSlice.actions
export default StudentSlice.reducer