import { Link } from 'react-router-dom';
import { UserConsumer } from '../../providers/UserProvider';

const Navbar = () => (
  <UserConsumer>
    { value => (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile">
                {value.username} 
                {" "}
                {value.membership}
                {" "}
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )}
  </UserConsumer>
)

export default Navbar;