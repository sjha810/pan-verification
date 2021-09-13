import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from "react-router-dom"

const Editemployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        pan: "",
        age: "",
        gender: "",
        email: "",
        city: ""
    })
    const history = useHistory()

    const { email, city, name, pan, age, gender } = employee

    const inputHandler = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    const { id } = useParams()

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/employee/${id}`, employee)
        history.push("/employeelist")

    }
    useEffect(() => {
        loadEmp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadEmp = async () => {
        const emp = await axios.get(`http://localhost:3001/employee/${id}`)
        setEmployee(emp.data)
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
                        <input type="text" name="pan" className="form-control" onChange={inputHandler} vlaue={pan} />
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
                    <button type="submit" className="btn btn-outline-primary" style={{ width: "10rem " }}>Update</button>
                </div>
            </form>


        </>

    )
}

export default Editemployee
