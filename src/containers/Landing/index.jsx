
import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import axios from 'axios';
import  {PostsTable} from '../../components/PostsTable';
import { connect } from "react-redux";
import  { updateSelectedPost } from '../../reducer/action';
import './LandingStyle.css';
var fetchLocked = false;

class LandingSelf extends Component {


    constructor(props){
        super(props);
        this.state ={
            fetchingData:true,
            pageCount:0,
            posts:[]
        }
    }

    componentDidMount(){
        this.fetchData(0);
    }


    componentWillMount =() =>{
        this.triggerAutomaticPostFetching()
    }

    componentWillReceiveProps(nextProps){
        console.log('PROPS::::',nextProps)
      }

    triggerAutomaticPostFetching =() =>{
        const _this = this;
        setInterval(() => {
            _this.fetchData(_this.state.pageCount++);
        }, 10000);
    }



    fetchData=async(pageCount)=>{
        if(!fetchLocked){
            try{
                fetchLocked = true;
                this.setState({fetchingData:true});
                const pageNo = pageCount;
                const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNo}`;
                const response = await axios.get(url);
                if(response.data && response.data.hits && response.data.hits.length>0){
                    const prevPosts = this.state.posts;
                    const newPosts = [...prevPosts,...response.data.hits];
                    this.setState({posts:newPosts,pageCount:pageNo});
                }else{
                    throw('No Data Found !');
                }
                fetchLocked = false;
                this.setState({fetchingData:false});
            }catch(e){
                console.log('Error::',e)
            }
        }
    }

    handlePostDetails =(p)=>{
        this.props.updateSelectedPost(p);
        this.props.history.push('/postDetails')
    }

    render() {
      return (
         <div>
             <div>
                 <div>
                     {this.state.fetchingData && this.state.posts.length===0 ? 
                     'Fetching data...': 
                     <PostsTable 
                        posts={this.state.posts} 
                        loadMore={()=>this.fetchData(this.state.pageCount++)}
                        selectedPost={(p)=> this.handlePostDetails(p)}
                      />}
                </div>
             </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return state
  };
  
  export const Landing= connect(
    mapStateToProps,
    {updateSelectedPost}
  )(LandingSelf);