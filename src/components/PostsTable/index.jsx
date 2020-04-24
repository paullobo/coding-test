
import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import './PostsTableStyle.css';
export class PostsTable extends Component {

    constructor(props){
        super(props);
        this.state ={
           
        }
    }

    componentDidMount(){
       
    }

    

    render() {
       const {posts} = this.props;
      return (
         <div className={'tableContainer'}>
        
           { posts && posts.length>0 ? 
                <div className={'tableRow tableHead'}>
                    <div>TITLE</div>
                    <div>URL</div>
                    <div>CREATED AT</div>
                    <div>AUTHOR</div>
                  </div>: null
              }
               <InfiniteScroll
                pageStart={0}
                loadMore={()=>this.props.loadMore()}
                hasMore={true}
                loader={<div className="loader" key={0}>Loading ...</div>}
                >
                  { posts && posts.length>0 ? 
                        posts.map((p=><div onClick={()=>this.props.selectedPost(p)} className={'tableRow'}>
                            <div>{p.title}</div>
                            <div>{p.url}</div>
                            <div>{p.created_at}</div>
                            <div>{p.author}</div>
                          </div>)): null
                      }
                </InfiniteScroll>
        </div>
      );
    }
  }


