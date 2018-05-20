import React, {Component} from 'react';
import SideBar from './component/SideBar/Sidebar';
import Topbar from './component/TopBar/TopBar';


class Home extends Component {
    render() {
        return (
            <div>
               <SideBar />
               <Topbar />
            </div>
        )
    }
}

export default Home;