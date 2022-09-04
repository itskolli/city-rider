import React from "react";
import { AppHeader } from "./components/header/header";
import { Maps } from "./components/maps/map";
import { AppRightPanel } from "./components/right-panel/right-panel";

export const Home = () => (
    <div className="app-container"><div class="app-main"><AppHeader>

    </AppHeader>
    <Maps></Maps>
    </div>
    <div className="app-panel">
    <AppRightPanel></AppRightPanel>
    </div>
    </div>
)