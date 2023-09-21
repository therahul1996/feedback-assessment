import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import happy from "./images/happy.jpeg";
import close from "./images/close.png";
import Loader from "./loader/Loader";
const Grid = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItem, setPerPageItem] = useState(6);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        // console.log(data);
        setTimeout(() => {
          setFeedbackData(data);
          setLoading(false);
        }, 5000);
      } catch (error) {
        console.log("Data not found", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (feedbackId) => {
    const updateFeedback = feedbackData.filter(
      (feedback) => feedback.id !== feedbackId
    );
    setFeedbackData(updateFeedback);
  };
  const totalPages = Math.ceil(feedbackData.length / perPageItem);

  const handlePaginate = (numberOfPage) => {
    if (numberOfPage >= 1 && numberOfPage <= totalPages) {
      setCurrentPage(numberOfPage);
    }
  };
  const indexOfLastItem = currentPage * perPageItem;
  const indexOfFirstItem = indexOfLastItem - perPageItem;
  const currentItems = feedbackData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="main bg-light">
      <div className="left-sec">
        <Sidebar />
      </div>
      <div className="right-sec">
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <div className="row">
              {currentItems.map((feedback, index) => {
                return (
                  <div className="col-md-4 mb-3" key={index}>
                    <div className="card grid-card p-4">
                      <h1>{feedback.title}</h1>
                      <p>{feedback.body}</p>
                      <span>Mon, 21 Dec 2020 14.57 GMT</span>
                      <img src={happy} alt="happy" className="fedback-img" />
                      <button onClick={() => handleDelete(feedback.id)}>
                        <img src={close} alt="close" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="col-md-12">
                <div className="pagination">
                  <button
                    onClick={() => handlePaginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  <ul className="pagination-list">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        onClick={() => handlePaginate(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                      >
                        {index + 1}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePaginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Grid;
