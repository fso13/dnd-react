import React from "react";
import {
    Navbar,
    NavbarBrand,
    Button,
} from "reactstrap";
import Logo from "./Logo";

const Header = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    return (
        <Navbar color="white" light expand="md" className="fix-header">
            <div className="d-flex align-items-center">
                <div className="d-lg-block d-none me-5 pe-3">
                    <Logo/>
                </div>
                <NavbarBrand href="/">
                    <img className="rounded-circle d-lg-none" height={73} width={73}
                         src="https://sun9-63.userapi.com/s/v1/if1/_86rarat6d7LPOE5G6LfVegJuItSP73RjyPkwFpimEMdzEdshZG8VighmXowAFCf3YFTnvUY.jpg?size=100x100&quality=96&crop=20,20,503,503&ava=1"
                         alt={"logo"}/>
                </NavbarBrand>
                <Button
                    color="primary"
                    className=" d-lg-none"
                    onClick={() => showMobilemenu()}
                >
                    <i className="bi bi-list"></i>
                </Button>
            </div>


        </Navbar>
    );
};

export default Header;
