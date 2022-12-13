import { useDispatch } from 'react-redux';
import { addNewUser } from '../action';

function AddUser() {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.elements);
    // console.log(event.target.elements.passport);
    let dataUser = event.target.elements;
    dispatch(addNewUser(dataUser.passport.value, dataUser.name.value, dataUser.age.value));
  };

  return (
    <div>
      <form onSubmit={formHandler} className='form-add-user'>
        <h2>Add new user</h2>
        <div className='form-field'>
          <label htmlFor="passport">Id passport</label>
          <input type="text" name='passport' defaultValue='097865423' />
        </div>
        <div className='form-field'>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' defaultValue='Vita Marchenko'/>
        </div>
        <div className='form-field'>
          <label htmlFor="age">Age</label>
          <input type="number" name='age' defaultValue='40' />
        </div>
        <div className='form-btn'>
          <button type='submit'>Add new user</button>
        </div>
      </form>

    </div>
  );
}
export default AddUser;