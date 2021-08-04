import React from "react";

class ButtonTemplate extends React.Component{

    render(){
        return (<button onClick = {this.props.buttonAction}
                className = {this.props.buttonType}>{this.props.buttonText}</button>
        );
    }
}

export default ButtonTemplate;