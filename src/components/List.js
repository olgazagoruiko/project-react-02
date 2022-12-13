function List(data) {
  console.log(data);
  return (
    <div>
        <table className="table-users">
        <caption className="table-caption">List users</caption>
        <tbody>
          <tr>
            <th>user_passport</th><th>user_name</th><th>user_age</th>
          </tr>
          {data.users.map((item,index) =>
          (
            <tr key={index}>
              <td>{item.passport}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
            )
          )}    
        </tbody>
      </table>
   </div>
  )
  
}
export default List;
