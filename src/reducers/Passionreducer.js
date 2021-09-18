const initialstate={
  passions:[
    {
      id:1,
      name:"Lamia aarafi",
      age:"22",
      doctor:"Dr Berrada",
      sikness:"Covid-19",
      alergie:"flowers",
      medicine:"Vitamine C / Paracetamol",
      phone:"078854321",
      pic_url:"https://images.pexels.com/photos/1399288/pexels-photo-1399288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id:2,
      name:"Imrane zaydi",
      age:"19",
      doctor:"Dr aaraf",
      sikness:"fiver",
      alergie:"none",
      medicine:"Doliprane / Aspirine",
      phone:"0654321233",
      pic_url:"https://images.pexels.com/photos/1447009/pexels-photo-1447009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      id:3,
      name:"Zineb lechah",
      age:"35",
      doctor:"Dr mousalim",
      sikness:"headache",
      alergie:"none",
      medicine:"Vitamine C / Paracetamol",
      phone:"0644321255",
      pic_url:"https://images.pexels.com/photos/3784425/pexels-photo-3784425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id:4,
      name:"Said lechah",
      age:"64",
      doctor:"Dr moutaki",
      sikness:"Diabetes",
      alergie:"none",
      medicine:"Diamicron / Glyco",
      phone:"0678996543",
      pic_url:"https://images.pexels.com/photos/3018993/pexels-photo-3018993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ],
 
};
export default function(state=initialstate,action){
  switch(action.type){
    case 'GET_PASSIONS':
    return {
     ...state
    }
    case 'DELETE_PASSIONS':
    return {
      ...state,
      passions:state.passions.filter(passion=>passion.id!==action.payload)
    }
    case 'POST_PASSION':
    return{
      ...state,
      passions:state.passions.map(passion=>passion.phone===action.payload.phone ? passion===action.payload:passion!==action.payload)
       
    }
    case 'ADD_PASSION':
    return {
      ...state,
      passions:[action.payload,...state.passions]
    }
   
    default:{
      return state;
    }
  }
}