import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

const EmployeeTable = () => {
    const [employeeTable, setEmployeeTable] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [empPerPage] = useState(10)

    useEffect(() => {
        getEmp()
    }, [])

    const getEmp = async () => {
        const res = await axios.get("http://localhost:3001/employee")
        setEmployeeTable(res.data)
    }

    const deleteEmp = async (id) => {
        await axios.delete(`http://localhost:3001/employee/${id}`)
        getEmp()
    }

    const indexOfLastEmp = currentPage * empPerPage;
    const indexOfFirstEmp = indexOfLastEmp - empPerPage;
    const currentEmp = employeeTable.slice(indexOfFirstEmp, indexOfLastEmp)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="mt-5">
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Pan Number</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentEmp.map((employees) => {
                            return (
                                <tr key={employees.id}>
                                    <td>{employees.id}</td>
                                    <td>{employees.name}</td>
                                    <td>{employees.pan}</td>
                                    <td>{employees.age}</td>
                                    <td>{employees.gender}</td>
                                    <td>{employees.email}</td>
                                    <td>{employees.city}</td>
                                    <td>
                                        <Link className="btn btn-primary mr-2" style={{ width: "5rem" }} to={`/employee/edit/${employees.id}`} >Edit</Link>
                                        <Link className="btn btn-danger" style={{ width: "5rem" }} onClick={() => deleteEmp(employees.id)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Pagination paginate={paginate} empPerPage={empPerPage} totalEmp={employeeTable.length} />
        </div>
    )
}

export default EmployeeTable
