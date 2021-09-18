import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
class Passions extends Component {
  
  componentDidMount(){
    this.props.getPassions();
  }
  
  onDeleteclick = id =>{
    this.props.deletePassion(id);
  };
  render() {
    const{thepassions}=this.props;
    
    return (
    <div>
      <div className="container">
       <div className="row">
       {thepassions.map(passion=>(
        <div className="col-md-4 my-2">
         <div class="card" style={{width:"18rem"}}>
            <img class="card-img-top" style={{height:"5.75cm"}} src={passion.pic_url} alt="Card image cap"/>
            <div class="card-body bg-warning" style={{color:"white"}}>
              <h5 class="card-title">{passion.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item bg-success" style={{color:"white"  , fontWeight:"bold"}}>Age : {passion.age}</li>
              <li class="list-group-item bg-danger" style={{color:"white" , fontWeight:"bold"}}>Sikness: {passion.sikness} Doctor : {passion.doctor}</li>
              <li class="list-group-item bg-secondary" style={{color:"white" , fontWeight:"bold"}}>Alergie : {passion.alergie} Medicine : {passion.medicine}</li>
              <li class="list-group-item bg-dark" style={{color:"white"  , fontWeight:"bold"}}>Phone : {passion.phone}</li>
            </ul>
           <div class="card-body">
           <Link to={`/passion/edit/${passion.phone}`}>
               <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"1cm",cursor:"pointer",color:"yellowgreen"}} width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
               </svg>
           </Link>
           <svg onClick={this.onDeleteclick.bind(this,passion.id)} xmlns="http://www.w3.org/2000/svg"style={{marginLeft:"1.25cm",cursor:"pointer",color:"red"}} width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" style={{cursor:"pointer", marginLeft:"1.3cm"}} width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
             <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
             <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
           </svg>
           </div>
         </div>
        </div>
        ))} 
        </div>
      </div>
    </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    thepassions:state.myPassions.passions
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getPassions:()=>{
      dispatch({
        type:'GET_PASSIONS'
      })
    },
    deletePassion:(id)=>{
      dispatch({
        type:'DELETE_PASSIONS',
        payload:id
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Passions);
