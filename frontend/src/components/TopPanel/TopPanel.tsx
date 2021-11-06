import React from "react";
import "./TopPanel.scss";

interface ITopPanelProps {
    checked: boolean;
    onChecked: () => void;
}

const TopPanel: React.FC<ITopPanelProps> = ({checked, onChecked}) => {
    return (
        <div className="top-panel">
            <label htmlFor="menu-burger" className="menu-burger">
                <input 
                    type="checkbox" 
                    name="menu-burger" 
                    id="menu-burger"
                    checked={checked}
                    onChange={e => onChecked()}
                />
                <div className="menu-burger__line"></div>
            </label>
        </div>
    );
}

export default TopPanel;
