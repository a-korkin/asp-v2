import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FaAngleLeft } from "react-icons/fa";
import { NavigationModel } from "../../models/admin/NavigationModel";
import Loading from "../Loading";
import Menu from "./Menu";

import "./Sidebar.scss";

const Sidebar: React.FC = () => {
    const { fetchNavigations } = useActions();
    const { isLoading, error, data } = useTypedSelector(state => state.navigation);
    
    useEffect(() => {
        fetchNavigations();
    }, []);
    
    // console.log(data);

    const getMainNav = (nav: NavigationModel) => {
        return (
            <div className="menu__block">
                <input 
                    className="menu__block-input" 
                    type="checkbox" 
                    name={nav.id} 
                    id={nav.id} 
                />

                <label 
                    htmlFor={nav.id} 
                    className="menu__block-label"
                >
                    <span className="menu__block-title">
                        {nav.title}
                    </span>
                    <span className="menu__block-icon">
                        <FaAngleLeft />
                    </span>
                </label>

                {
                    data.some(w => w.parent_id === nav.id) &&
                    getChildNav(nav)
                }
            </div>
        );
    }

    const getChildNav = (nav: NavigationModel) => {
        const childs = data.filter(w => w.parent_id === nav.id);

        return (
            <div className="menu__block-list">
                {
                    childs.sort(sortNavs).map((nav) => 
                        <div 
                            key={nav.id} 
                            className="menu__block-list-item"
                        >
                            <a href="#">{nav.title}</a>
                        </div>
                    )
                }
            </div>
        );
    }

    const getNav = (nav: NavigationModel): JSX.Element => {
        if (nav.block) {
            console.log(nav);
            return getMainNav(nav);
        }
        else 
            return getChildNav(nav);
    }

    const sortNavs = (a: NavigationModel, b: NavigationModel) => {
        if (a.order > b.order)
            return 1;
        return -1;
    }

    const createChilds = (childs: NavigationModel[]) => {
        return (
            childs.map((nav) => (
                <>
                <div key={nav.id}>{nav.title}</div>
                {
                    data.filter(w => w.parent_id === nav.id).map((child) => {
                        const subChilds = data.filter(w => w.parent_id === child.id).map(a => a.title);
                        if (subChilds.length > 0) {
                            // createChilds(subChilds);
                            // console.log(subChilds);

                        } 
                        return (
                            <div style={{paddingLeft: '1rem'}} key={child.id}>
                                {child.title}
                                {subChilds.join("|")}
                            </div>
                        )
                    })
                }
                </>
            ))
        );
    }

    const createNavs = () => {
        return (
            data.filter(w => w.parent_id === null).map((nav) => (
                <>
                <div key={nav.id}>{nav.title}</div>
                {
                    data.filter(w => w.parent_id === nav.id).map((child) => 
                        <div style={{paddingLeft: '1rem'}} key={child.id}>{child.title}</div>
                    )
                    
                    // console.log("fds")
                    // createChilds(data.filter(w => w.parent_id === nav.id))
                }
                </>
            ))
        );
    }

    return (
        <div className="sidebar">
            <div className="menu">
                {isLoading && <Loading />}
                <Menu items={data.filter(w => w.parent_id === null)} />

                {/* {
                    !isLoading && !error &&
                    // data.sort(sortNavs).filter(w => w.parent_id === null).map((nav) => 
                    data.sort(sortNavs).map((nav) => 
                        getNav(nav)
                    )

                    // createNavs()
                    // createChilds(data.filter(w => w.parent_id === null))
                    // <Nav childs={data.filter(w => w.parent_id === null)} allData={data} />
                } */}
            </div>
        </div>
    );
}

export default Sidebar;
