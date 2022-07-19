import React, { useEffect, useState } from "react";
 
const Record = (props) => (
 <tr>
   <td>{props.record.firstname}</td>
   <td>{props.record.lastname}</td>
   <td>{props.record.email}</td>
   <td>{props.record.phone}</td>
   <td>{props.record.timeslot}</td>
   <td>{props.record.date}</td>
   <td>{props.record.problem}</td>
   <td>{props.record.concern}</td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`https://healthbookserver.herokuapp.com/record`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className=" mx-auto">
     <h3 className="mt-5">Record List</h3>
     <table className="table table-primary table-striped mt-3 fw-slim table-responsive container-fluid">
       <thead >
         <tr>
           <th scope="col">firstname</th>
           <th scope="col">lastname</th>
           <th scope="col">email</th>
           <th scope="col">phone</th>
           <th scope="col">timeslot</th>
           <th scope="col">date</th>
           <th scope="col">problem</th>
           <th scope="col">concern message</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}