import React, { Component } from 'react'
import {connect} from 'react-redux'

class EditPassion extends Component {
  state={
    
    name:"",
    age:"",
    phone:"",
    doctor:"",
    sikness:"",
    alergie:"",
    medicine:"",
    pic_url:"",
   
  };
  componentDidMount(){
    const phone=this.props.match.params.phone;
   
  }
  submit=(e)=>{
    e.preventDefault();
    const{name,age,phone,doctor,sikness,alergie,medicine,pic_url}=this.state;
    
    const newpassion={
     
     name,
     age,
     phone,
     doctor,
     sikness,
     alergie,
     medicine,
     pic_url
    };
    
    
    
    this.setState({
      
      name:newpassion.name,
      age:newpassion.age,
      phone:newpassion.phone,
      doctor:newpassion.doctor,
      sikness:newpassion.sikness,
      alergie:newpassion.alergie,
      medicine:newpassion.medicine,
      pic_url:newpassion.pic_url
    });
    this.props.postPassion(newpassion);
    console.log(newpassion)
    this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const{name,age,phone,doctor,sikness,alergie,medicine,pic_url,errors}=this.state;
    
    return (
      <div>
        <h2>Edit Passion</h2>
        <form onSubmit={this.submit}>
          <div class="form-group" style={{marginTop:"1cm"}}>
           <label for="formGroupExampleInput" style={{marginLeft:"3cm"}}>Name</label>
           <input onChange={this.onChange} name="name" value={name}  style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the name"/>
          </div>
          <div class="form-group" style={{marginTop:"0.75cm"}}>
           <label for="formGroupExampleInput2" style={{marginLeft:"3cm"}}>Age</label>
           <input onChange={this.onChange} name="age" value={age}  style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter the age"/>
          </div>
          <div class="form-group" style={{marginTop:"0.75cm"}}>
           <label for="formGroupExampleInput4" style={{marginLeft:"3cm"}}>Phone</label>
           <input onChange={this.onChange} name="phone" value={phone}  style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput4" placeholder="Enter the phone number"/>
          </div>
          <div class="form-group" style={{marginTop:"0.75cm"}}>
           <label for="formGroupExampleInput5" style={{marginLeft:"3cm"}}>Doctor</label>
           <input onChange={this.onChange} name="doctor" value={doctor}  style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput5" placeholder="Enter your name"/>
          </div>
          <div class="form-group" style={{marginTop:"-30%"}}>
           <label for="formGroupExampleInput6" style={{marginLeft:"59%"}}>Sikness</label>
           <input onChange={this.onChange} name="sikness" value={sikness}  style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput6" placeholder="Enter the sikness"/>
          </div >
          <div class="form-group" style={{marginTop:"2.75%"}}>
           <label for="formGroupExampleInput7" style={{marginLeft:"59%"}}>Alergie</label>
           <input onChange={this.onChange} name="alergie" value={alergie} style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput7" placeholder="Enter the alergies"/>
          </div>
          <div class="form-group" style={{marginTop:"2.75%"}}>
           <label for="formGroupExampleInput8" style={{marginLeft:"59%"}}>Medicine</label>
           <input onChange={this.onChange} name="medicine" value={medicine}  style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput8" placeholder="Enter the medicine"/>
          </div>
          <div class="form-group" style={{marginTop:"2.75%"}}>
           <label for="formGroupExampleInput9" style={{marginLeft:"59%"}}>URL Picture</label>
           <input onChange={this.onChange} name="pic_url" value={pic_url}  style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput9"/>
          </div>
          <button  type="button" class="btn btn-danger" type="submit" style={{marginBottom:"-3cm",marginLeft:"15cm",width:"5cm"}}>Update Passion</button>
        </form>
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
    postPassion:(passion)=>{
      dispatch({
        type:"POST_PASSION",
        payload:passion
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditPassion);