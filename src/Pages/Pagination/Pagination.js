import React from 'react';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage,currentPage, paginate,pageBack,pageFront}) => {
    let pageNumbers = [];
    
    for( let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
  
    return (
        <div className=''>
            
           
            <div className="flex justify-center mt-5">
  <nav aria-label="Page navigation example">
    <ul className="flex list-style-none">
      <li className="page-item"><a
          className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none "
          href aria-label="Previous">
          <button onClick={() =>{pageBack()}} aria-hidden="true">&laquo;</button>
        </a></li>
         <li>
         {
                pageNumbers.map((number,index) =>{
                    return <button className= {
                        currentPage === number 
                        ? 'py-1.5 px-3 rounded border-0 bg-blue-600 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md'
                        :
                        'bg-white text-gray-800 font-semibold py-2 px-4 mr-2'
                    }
                    
                    
                    key={index} onClick ={() =>paginate(number)}>{number}</button>
                })
            }
         </li>
      <li className="page-item"><a href
          className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          aria-label="Next">
          <button onClick={() =>{pageFront()}} aria-hidden="true">&raquo;</button>
        </a></li>
    </ul>
  </nav>
</div>
            </div>
       
    );
};

export default Pagination;