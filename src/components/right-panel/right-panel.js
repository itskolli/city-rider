import React from "react";
import "./right-panel.css"

export const AppRightPanel = () => {
    return (
        <div>
            <div className="panel-heading">
            <h2>Upcoming Buses List</h2>
            </div>
            <div class="trans-list">
                <ul>
                    {new Array(10).fill("").map(() => (
                    <li>
                        <div>
                        <div className="avb-trans">
                            <span className="from-to">Delhi - Jaipur</span>
                            <div class="route-no-time"><span>D260</span> - <span className="time">15:30</span></div>
                            <span className="route-code">DL-BQ-1234</span>
                        </div>
                        <div className="facilities">
                            <span className="trans-dep">Rajashtan Roadways</span>
                        </div>
                        
                        </div>
                    </li>))}
                </ul>
            </div>
        </div>
    );
}