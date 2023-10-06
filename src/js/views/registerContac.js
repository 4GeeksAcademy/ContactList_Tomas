import React, { useState } from "react";

export const RegisterContact =() => {

const [firstName, setFirstName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");

const saveContact = (e) => {
    e.preventDefault()
    console.log(firstName, email, phone, address);
    const body = {
        full_name: firstName,
        email: email,
        phone: phone,
        address: address,
        agenda_slug: " ",

    }
    fetch("https://playground.4geeks.com/apis/fake/contact/",
        {
            method: 'POST', // Método POST
            headers: {
            'Content-Type': 'application/json' // Tipo de contenido JSON
            },
            body: JSON.stringify(body) // Convierte el objeto a JSON y lo envía en el cuerpo de la solicitud
        });
}

    return(

            <form onSubmit={saveContact}>
                <div className="col-5  mx-auto">
                    First Name
                    <input onChange={(e) => setFirstName(e.target.value) }  className="form-control my-5" type="text"/>
                    Email
                    <input onChange={(e) => setEmail(e.target.value)} className="form-control my-5" type="text"/>
                    Phone
                    <input onChange={(e) => setPhone(e.target.value)} className="form-control my-5" type="text"/>
                    Address
                    <input onChange={(e) => setAddress(e.target.value)} className="form-control my-5" type="text"/>

                    <button className="btn btn-success">Guardar</button>
                    
                </div>
            </form>

    )

};