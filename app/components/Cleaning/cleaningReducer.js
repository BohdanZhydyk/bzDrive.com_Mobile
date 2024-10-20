import { dateFromYYYYMMDD, PostToApi } from "../../AppFunctions";


export const cleaningReducer = ({action, week, setWeek, job, setJob}) => {

  // console.log(action)

  switch (action.type) {
    case "GET_JOBS":        GET_JOBS();       break
    case "SAVE_JOB":        SAVE_JOB();       break
    case "DELETE_JOB":      DELETE_JOB();     break
    default:                                  break
  }

  function GET_JOBS(){
    const date = dateFromYYYYMMDD( job?.date )
    const dayOfWeek = action?.dayOfWeek ?? parseInt( `${date?.YYYY}${date?.MM}${date?.DD}` )
    const query = { GET_JOBS:true, dayOfWeek }
    PostToApi( '/getCleaning', query, (data)=> setWeek(data) )
  }

  function SAVE_JOB(){
    const query = {SAVE_JOB:true, job:action?.job}
    PostToApi( '/getCleaning', query, (data)=> GET_JOBS() )
  }

  function DELETE_JOB(){
    const query = {DELETE_JOB:true, _id:action?._id}
    PostToApi( '/getCleaning', query, (data)=> GET_JOBS() )
  }

}