import React from "react";
import { NavigationModel } from "../../models/admin/NavigationModel";

interface INavProps {
    childs: NavigationModel[];
    allData: NavigationModel[];
}

const Nav: React.FC<INavProps> = ({childs, allData}) => {

    return (
        <>
        {
            childs.map((nav) => (
                <>
                <div key={nav.id}>{nav.title}</div>
                {
                    allData.filter(w => w.parent_id === nav.id).map((child) => (
                        <div key={child.id} style={{paddingLeft: "1rem"}}></div>
                    ))
                }
                </>
            ))
        }
        </>
    );
}

export default Nav;
