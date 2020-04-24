
import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import axios from 'axios';
import  {PostsTable} from '../../components/PostsTable';
import { connect } from "react-redux";
import  { updateSelectedPost } from '../../reducer/action';

class PostDetailsSelf extends Component {


    constructor(props){
        super(props);
        this.state ={
           
        }
    }

    componentDidMount(){
      
    }

    render() {
      return (<div>
        <div>{this.props.selectedPost ? JSON.stringify(this.props.selectedPost) : 'No Selected Post'}</div>
        </div>
     );
  }
}

const mapStateToProps = state => {
  return state.common
};

export const PostDetails= connect(
  mapStateToProps,
  null
)(PostDetailsSelf);