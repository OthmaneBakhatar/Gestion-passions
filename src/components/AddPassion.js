import React, { Component } from 'react'
import {connect} from 'react-redux'

class AddPassion extends Component {
  state={
    
    name:"",
    age:"",
    phone:"",
    doctor:"",
    sikness:"",
    alergie:"",
    medicine:"",
    pic_url:"",
    errors:{}
  };
  submit=(e)=>{
    e.preventDefault();
    const{name,age,phone,doctor,sikness,alergie,medicine,pic_url}=this.state;

    if(name===""){
      this.setState({errors:{name:'Name is required'}});
      return;
    }
    if(age===""){
      this.setState({errors:{age:'Age is required'}});
      return;
    }
    if(phone===""){
      this.setState({errors:{phone:'phone is required'}});
      return;
    }
    if(doctor===""){
      this.setState({errors:{doctor:'doctor is required'}});
      return;
    }
    if(sikness===""){
      this.setState({errors:{sikness:'sikness is required'}});
      return;
    }
    if(medicine===""){
      this.setState({errors:{medicine:'medicine is required'}});
      return;
    }
    if(pic_url===""){
      this.setState({errors:{pic_url:'medicine is required'}});
      return;
    }
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
    this.props.addPassion(newpassion);
    
    this.setState({
      
      name:"",
      age:"",
      phone:"",
      doctor:"",
      sikness:"",
      alergie:"",
      medicine:"",
      pic_url:""
    });
    this.props.history.push("/");
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const{name,age,phone,doctor,sikness,alergie,medicine,pic_url,errors}=this.state;
    
    return (
      <div>
        <h2>Add Passion</h2>
        <form onSubmit={this.submit}>
          <div class="form-group" style={{marginTop:"1cm"}}>
           <label for="formGroupExampleInput" style={{marginLeft:"3cm"}}>Name</label>
           <input onChange={this.onChange} name="name" value={name} error={errors.name} style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter the name"/>
          </div>
          <div class="form-group" style={{marginTop:"0.75cm"}}>
           <label for="formGroupExampleInput2" style={{marginLeft:"3cm"}}>Age</label>
           <input onChange={this.onChange} name="age" value={age} error={errors.age} style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter the age"/>
          </div>
          <div class="form-group" style={{marginTop:"0.75cm"}}>
           <label for="formGroupExampleInput4" style={{marginLeft:"3cm"}}>Phone</label>
           <input onChange={this.onChange} name="phone" value={phone} error={errors.phone} style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput4" placeholder="Enter the phone number"/>
          </div>
          <div class="form-group" style={{marginTop:"0.75cm"}}>
           <label for="formGroupExampleInput5" style={{marginLeft:"3cm"}}>Doctor</label>
           <input onChange={this.onChange} name="doctor" value={doctor} error={errors.doctor} style={{width:"10cm",marginLeft:"3cm"}} type="text" class="form-control" id="formGroupExampleInput5" placeholder="Enter your name"/>
          </div>
          <div class="form-group" style={{marginTop:"-30%"}}>
           <label for="formGroupExampleInput6" style={{marginLeft:"59%"}}>Sikness</label>
           <input onChange={this.onChange} name="sikness" value={sikness} error={errors.sikness} style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput6" placeholder="Enter the sikness"/>
          </div >
          <div class="form-group" style={{marginTop:"2.75%"}}>
           <label for="formGroupExampleInput7" style={{marginLeft:"59%"}}>Alergie</label>
           <input onChange={this.onChange} name="alergie" value={alergie} style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput7" placeholder="Enter the alergies"/>
          </div>
          <div class="form-group" style={{marginTop:"2.75%"}}>
           <label for="formGroupExampleInput8" style={{marginLeft:"59%"}}>Medicine</label>
           <input onChange={this.onChange} name="medicine" value={medicine} error={errors.medicine} style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput8" placeholder="Enter the medicine"/>
          </div>
          <div class="form-group" style={{marginTop:"2.75%"}}>
           <label for="formGroupExampleInput9" style={{marginLeft:"59%"}}>URL Picture</label>
           <input onChange={this.onChange} name="pic_url" value={pic_url} error={errors.pic_url} style={{width:"10cm",marginLeft:"59%"}} type="text" class="form-control" id="formGroupExampleInput9"/>
          </div>
          <button  type="button" class="btn btn-success" type="submit" style={{marginBottom:"-3cm",marginLeft:"15cm",width:"5cm"}}>Submit</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addPassion:(newpassion)=>{
      dispatch({
        type:"ADD_PASSION",
        payload:newpassion
      })
    }
  }
}
export default connect(null,mapDispatchToProps)(AddPassion);
