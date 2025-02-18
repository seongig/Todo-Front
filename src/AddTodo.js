import React from 'react';
import {Button, Grid, Paper, TextField} from "@material-ui/core"

class AddTodo extends React.Component {
    constructor(props){
      super(props);
      this.state ={ item: {title:""} };
      this.add = props.add;
    }
    onInputChange =(e)=>{
        const thisItem  = this.state.item;
        thisItem.title = e.target.value;
        this.setState(thisItem)
    }
    
    onButtonClick =()=>{
        this.add(this.state.item);
        this.setState({itme:{title:""}});
    }

    enterKeyEventHandler =(e)=>{
        if(e.key === 'Enter'){
            this.onButtonClick();
        }
    }

    render(){
        return (
            <Paper style={{margine:16, padding:16}}>
                <Grid xs={11} md ={11} item style = {{paddingRight:16}}>
                    <TextField
                        placeholder="Add Todo here"
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={this.onButtonClick}
                    >
                        +
                    </Button>
                </Grid>
            </Paper>
        );
    }
}
export default AddTodo;