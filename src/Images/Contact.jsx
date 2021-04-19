import React, { useState } from 'react';

function Contact(props) {

    const [detail, setDetails]= useState({
        name: '',
        phone: '',
        email: '',
        message:''
    })

    const InputEvent = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setDetails((oldvalue)=>{
           return {...oldvalue, [name]:value}
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`Name: ${detail.name} \nPhone Number: ${detail.phone}\nEmail:${detail.email}\nMessage:${detail.message}`)
    }
    return (
        <>
           <div className="my-5">
               <h1 className='text-center'>Contact Us</h1>
           </div>
           <div className="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="type" class="form-control" id="exampleFormControlInput1" 
                            Name="name"
                            value={detail.name}
                            onChange={InputEvent}
                            placeholder="Enter your Name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Phone Number</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            Name="phone"
                            value={detail.phone}
                            onChange={InputEvent}
                            placeholder="Enter your Phone number" />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" 
                            Name="email"
                            value={detail.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                        </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            Name="message"
                            value={detail.message}
                            onChange={InputEvent}
                            ></textarea>
                        </div>
                        <div className="col-12 my-2">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                   </div>
               </div>
           </div>
        </>
    );
}

export default Contact;