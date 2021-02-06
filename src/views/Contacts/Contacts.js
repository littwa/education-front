import { connect, useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperation";

const Contacts = ({ allUsers, get }) => {
  return (
    <div>
      <h5>Contacts</h5>
      <button onClick={e => get()}>GetAllUsers!</button>
      <ul>
        {allUsers.map(el => (
          <li>
            <img alt="pic" />
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(s => ({ allUsers: s.users }), { get: authOperation.getAllUsers })(Contacts);
