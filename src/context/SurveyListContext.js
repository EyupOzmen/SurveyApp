import React,{createContext,useState,useEffect} from 'react';
import axios from "../axios"
import requests from "../requests"

export const SurveyListContext = createContext()

const SurveyListContextProvider = (props) => {
  

  const[surveys,setSurveys] = useState([])
  const [editItem,setEditItem]=useState(null)
  const[flag,setFlag]=useState(false)

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchSurveyList)
            console.log(request.data);
            setSurveys(request.data)
      }
        fetchData()
           
    },[flag])

    const addSurvey = async (title) => {
        const obj ={Name:title}
        await axios.post(requests.fetchSurveyList,obj)
        setSurveys([...surveys,obj])
        setFlag(!flag)
    }

    const removeSurvey = async ID => {
        setSurveys(surveys.filter(task => task.ID !==ID))
        await axios.delete(`${requests.fetchSurveyList}/${ID}`)
        setFlag(!flag)
    }

   

    const findItem = ID =>{
        const item = surveys.find(task => task.ID ===ID)
        setEditItem(item)
    }

    const editSurvey = async (title,ID)=> {
        const newSurveys =surveys.map(survey => survey.ID===ID?{title,ID}:survey)
        const upt ={ID:ID,Name:title}
        await axios.put(`${requests.fetchSurveyList}/${ID}`,upt)
        console.log(newSurveys)
        setSurveys([newSurveys])
        setEditItem(null)
        setFlag(!flag)
    }

    return (
        <SurveyListContext.Provider value={{surveys,editSurvey,editItem,findItem,addSurvey,removeSurvey}}>
            {props.children}
        </SurveyListContext.Provider>
    )
}

export default SurveyListContextProvider