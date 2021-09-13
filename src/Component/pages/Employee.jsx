import React, { useState } from 'react'
import axios from 'axios'
// import { empSchema } from '../Validate'

const Employee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        pan: "",
        age: "",
        gender: "",
        email: "",
        city: ""
    })

    const { name, pan, age, gender, email, city } = employee

    const inputHandler = async (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // const empData = await empSchema.isValid(employee)

        await axios.post(`http://localhost:3001/employee`, employee)
        setEmployee({
            name: "",
            pan: "",
            age: "",
            gender: "",
            email: "",
            city: ""
        })
    }

    return (
        <>
            <form className=" shadow  p-3 w-75 rounded" onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" onChange={inputHandler} value={name} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="pan">Pan Number:</label>
                        <input type="text" name="pan" className="form-control" onChange={inputHandler} value={pan} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age:</label>
                        <input type="text" name="age" className="form-control" onChange={inputHandler} value={age} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="exampleFormControlSelect2">Gender:</label>
                        <select className="form-control" name="gender" onChange={inputHandler} value={gender} >
                            <option >Gender</option>
                            <option vlaue="Male">Male</option>
                            <option vlaue="female">Female</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" onChange={inputHandler} value={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" className="form-control" onChange={inputHandler} value={city} />
                </div>
                <div className="form-group d-flex justify-content-end">
                    <div className="mr-2 " style={{ width: "10rem" }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" style={{ width: "10rem " }}>Add</button>

                </div>
            </form>


        </>

    )
}

export default Employee
