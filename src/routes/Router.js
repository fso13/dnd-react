import {lazy} from "react";
import {Navigate} from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Monsters = lazy(() => import("../views/ui/Monsters"));
const Monster = lazy(() => import("../views/ui/Monster"));
const Spells = lazy(() => import("../views/ui/Spells"));
const Spell = lazy(() => import("../views/ui/Spell"));

/*****Routes******/

const ThemeRoutes = [
    {
        path: "/",
        element: <FullLayout/>,
        children: [
            {path: "/", element: <Navigate to="/spells"/>},
            {path: "/monsters", exact: true, element: <Monsters/>},
            {path: "/monsters/:name", exact: true, element: <Monster/>},
            {path: "/spells", exact: true, element: <Spells/>},
            {path: "/spells/:name", exact: true, element: <Spell/>},
        ],
    },
];

export default ThemeRoutes;