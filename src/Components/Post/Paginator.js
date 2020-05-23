import React from "react";

const Paginator = (props) => {
  function pagina(page_url) {
    //console.log(page_url);
    let url = new URL(page_url);
    let page_offset = url.searchParams.get("page[offset]");
    //console.log(page_offset);
    props.paginator("page[offset]=" + page_offset);
    //setPager("page[offset]=" + page_offset);
  }
  return (
    <div className="paginador">
      <ul className="pagination">
        {props.children.links.hasOwnProperty("prev") ? (
          <li className="page-item">
            {/* Use href="/#" to replace href="#" OR href="javascript:;" OR href="javascript:void(0);" */}
            <a href="/#" onClick={() => pagina(props.children.links.prev.href)}>
              Previous
            </a>
          </li>
        ) : null}
        {props.children.links.hasOwnProperty("next") ? (
          <li className="page-item">
            <a href="/#" onClick={() => pagina(props.children.links.next.href)}>
              Next
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Paginator;
