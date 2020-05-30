import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Paginator = (props) => {
  function pagina(page_url) {
    //console.log(page_url);
    let url = new URL(page_url);
    let page_offset = url.searchParams.get("page[offset]");
    //console.log(page_offset);
    props.paginator("&page[offset]=" + page_offset);
    //setPager("page[offset]=" + page_offset);
  }
  return (
    <div className="container grid-md paginator">
      <ul className="pagination">
        {props.posts.links.hasOwnProperty("prev") ? (
          <li className="page-item">
            {/* Use href="/#" to replace href="#" OR href="javascript:;" OR href="javascript:void(0);" */}
            <a href="/#" onClick={() => pagina(props.posts.links.prev.href)}>
              <FaAngleDoubleLeft />
              <span>Previous</span>
            </a>
          </li>
        ) : (
          <li></li>
        )}
        {props.posts.links.hasOwnProperty("next") ? (
          <li className="page-item">
            <a href="/#" onClick={() => pagina(props.posts.links.next.href)}>
              <span>Next</span>
              <FaAngleDoubleRight />
            </a>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};

export default Paginator;
