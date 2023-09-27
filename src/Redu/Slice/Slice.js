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
        editStudent: (state, action) => {
            const { index, info } = action.payload;
            state[index] = info;
        },
        
        addStudent:(state, action)=>{
            state.push(action.payload); 
        }
    }
})
 export const {editStudent,addStudent}=StudentSlice.actions
export default StudentSlice.reducer
