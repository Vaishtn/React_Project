import {Link} from "react-router-dom"
export const Title = () => (
  <a link="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWeMhSa2GNCHH27wLCMm-EBxnZopGfsFdZ8IsagDEZhTMezVuAnWoxpJTVqDTNxYCrzw&usqp=CAU"
      alt="logo"
    />
  </a>
);

//Component
//functional component

export const Header = () => {
  return (
    <div className="header">
      {/* <Title /> */}
      <a href="/">
      <h1>Home</h1>

      </a>
      <div className="nav-item">
        <ul>
        <Link to="/about"><li className="item">About</li></Link>
          <Link to="/product"><li>Product</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
