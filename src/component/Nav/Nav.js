import React, {Component} from 'react';

class Nav extends Component{
    
    render(){
        function nave(){
            return <div>Nav</div>
        }
        return(
            <div>
                <button>Home</button>
                <button>New Post</button>
                <button>Logout</button>
                
            </div>
        )
    }
}

export default Nav;