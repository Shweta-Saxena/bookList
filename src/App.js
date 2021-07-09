 import React, { useState, useEffect } from 'react';
import Pagination from "./Pagination";
import Post from './Post';
import { Table } from 'react-bootstrap'
import './assets/App.scss'

export default function App() {
  const [posts, setPosts] = useState([]);
  
  const values = useState({
    id: '',
    book_author: [],
    book_title: '',
    book_publication_year: '',
    book_publication_country: '',
    book_publication_city: '',
    book_pages: '',
});

  useEffect(() => {
     
      let data = values
      fetch("http://nyx.vima.ekt.gr:3000/api/books", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      }).then((result) => {
          result.json().then((resp) => {
              console.warn("resp", resp.books)
             
              setPosts(resp.books)
             
          })
      })
  }, []);

 

  return (
    <div>
      {posts.length > 0 ? (
        <>
        
     
        <Table  className="tablecontainer">
         <thead >
             <tr>
             <th className="tableHeader">id</th>
                 <th className="tableHeader">Book Title</th>
                 <th className="tableHeader">Book Author</th>
                 <th className="tableHeader"> Publication Year</th>
                 <th className="tableHeader"> Country</th>
                 <th className="tableHeader">Book Publication City</th>
                 <th className="tableHeader">Book Pages</th>
             </tr>
         </thead>
        
           </Table>
          
     
          <Pagination
            data={posts}
      
            RenderComponent={Post}
            pageLimit={5}
            dataLimit={5}
          />
     
           </>
      ) : (
       <h1>No Posts to display</h1>
      )}
      
    </div>
  );
}


