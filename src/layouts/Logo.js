import {NavHashLink} from "react-router-hash-link";

const Logo = () => {
    return (
            <NavHashLink to={`/`}>
            <img className="rounded-circle" height={73} width={73}
                 src="https://sun9-63.userapi.com/s/v1/if1/_86rarat6d7LPOE5G6LfVegJuItSP73RjyPkwFpimEMdzEdshZG8VighmXowAFCf3YFTnvUY.jpg?size=100x100&quality=96&crop=20,20,503,503&ava=1"
                 alt={"logo"}/>
        </NavHashLink>
    );
};

export default Logo;
