import { Navbar, Logo, Button } from "../styles/global";
import skilled from "../images/logo-dark.svg";

function Nav() {
    <Navbar>
        <Logo src={skilled} alt="skilled logo" />
        <Button>Get Started</Button>
    </Navbar>
}

export default Nav;