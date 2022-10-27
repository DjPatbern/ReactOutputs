import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Outlet, useSearchParams } from "react-router-dom";

function Pagination() {
  // const [searchTerm, setSearchTerm] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 10;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = posts.filter((post) => {
                const x = searchParams.get("x");
                if(!x) return true;
                else {
                    const body = post.body.toLowerCase();
                    return body.includes(x.toLowerCase())
                }
            })
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return (
        <div key={post.id} className="li-div">
          <p className="li">
            <b>NO.{post.id}</b>
          </p>
          <p className="li">
            <b>TITLE:</b> {post.title}
          </p>
          <p className="li">
            <b>BODY:</b> {post.body}
          </p>
        </div>
      );
    });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const pageCount = Math.ceil(posts.length / postsPerPage);

  function changePage({ selected }) {
    setPageNumber(selected);
  }

  return (
    <>
      <h1>List Of Posts</h1>
{/* <input type="text" placeholder="Search..." onChange={event => setSearchTerm(event.target.value)}/> */}

       <input
         type="text"
         placeholder="search blog"
         value={searchParams.get("x") || ""}
        onChange={(event) => {
          const x = event.target.value;
          if (x) {
            setSearchParams({ x, y: 'true' });
           } else {
             setSearchParams({});
          }
         }}
       />

      {/* {
//         posts.filter((post) => {
//             const x = searchParams.get("x");
//             if(!x) return true;
//             else {
//                 const body = post.body.toLowerCase();
//                 return body.startsWith(x.toLowerCase())
//             }
//         }).map((post) => (
// <div key={post.id} className="li-div">
//           <p className="li">
//             <b>NO.{post.id}</b>
//           </p>
//           <p className="li">
//             <b>TITLE:</b> {post.title}
//           </p>
//           <p className="li">
//             <b>BODY:</b> {post.body}
//           </p>
//         </div>        ))
//       } */}

      <div className="pagination">{displayPosts}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
}

export default Pagination;
