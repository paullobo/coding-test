
import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';

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
         <div>
           { posts && posts.length>0 ? 
                <div>
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
                        posts.map((p=><div>
                            <div>{p.title}</div>
                            <div>{p.URL}</div>
                            <div>{p.created_at}</div>
                            <div>{p.author}</div>
                          </div>)): null
                      }
                </InfiniteScroll>
        </div>
      );
    }
  }
  
