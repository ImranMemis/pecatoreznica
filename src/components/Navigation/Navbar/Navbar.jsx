import Button from "../Helpers/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id = "navbar" className="navbar">
      <Link to ="/"
       id="Link"
      >
        <Button>
        Naslovna
        </Button>
      </Link> 
      <Link to="/pecati"
    id="Link"
      >
        <Button>
        Pečati
        </Button>
      </Link>
      <Link to="/natpisi-za-vrata"
      
    id="Link"
      >
        
        <Button>
        Natpisi za vrata
       </Button>
      </Link>
      <Link to="/o-nama"
    id="Link"
      >
       
       <Button>
       O Nama
        </Button>
      </Link>
      <Link to="/faq"
    id="Link"
      >
        <Button>
        FAQ
        </Button>
      </Link>
      <Link to="/Korpa"
    id="Link"
      >
        <Button>
        Korpa
        </Button>
      </Link>
    </nav>
  )
}

export default Navbar;
