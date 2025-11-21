import React from 'react'

const TestProps = (props) => {
    const name = props.name
    const age = props.age
    const isStudent = props.isStudent
    return (
        <>
        Name : 
        {props.name+" "}
        Age:
        {props.age+" "}
        Status:  
        {" "+props.isStudent ? 'Student' : 'Not a Student'}
        </>
        
    )
}

export default TestProps