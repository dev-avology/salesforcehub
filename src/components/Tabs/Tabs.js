import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";

function Tabs({ tabs }) {
  const [value, setValue] = useState(tabs[0]?.value || "all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  // Render each post card
  const renderPost = (post, index) => (
    <div className="flex-tbs" key={index}>
      <div className="flex-tbs-img">
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}${post.Image?.url}` || 'No img'}
          alt="Guide"
          className="card-img"
        />
      </div>
      <div className="flex-tbs-content">
        <a
          className={`custom-badge ${post.badgeColor || ""}`}
          href={post.link || "/blog#"}
        >
          {post.category}
        </a>
        <Link  href={`/blogs/${post.Slug}`}>
          <h3 className="title-custom">{post.Title}</h3>
        </Link>
        <ul className="custom-flex">
          <li>
            <a href="/blog">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}${post.author_logo?.url}`} alt="Date icon" />
              <span>{post.author}</span>
            </a>
            <span>{new Date(post.Date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </li>
        </ul>
        <div>
          {post.Content?.map((block, idx) => (
            <p key={idx}>{block.children?.[0]?.text}</p>
          ))}
        </div>
      </div>
    </div>
  );


  // Handle next and previous page changes
  const handleNext = (tab) => {
    const maxPages = Math.ceil(tab.content.length / postsPerPage);
    if (currentPage < maxPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Dynamic tabs">
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.content
              .filter((post) =>
                tab.value === "all" ? true : post.category === tab.value
              )
              .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
              .map(renderPost)}

            <div className="pagination">
              {/* Previous Button */}
              <span
                className={`arrow ${currentPage === 1 ? "disabled" : ""}`}
                onClick={currentPage === 1 ? null : handlePrev}
                style={currentPage === 1 ? { pointerEvents: "none" } : {}}
              >
                <img src="images/icon-arrow.svg fill.png" alt="Guide" className="card-img" />
                Previous
              </span>

              {/* Pagination Numbers */}
              <div className="pagination-center">
                {(() => {
                  const filteredContent =
                    tab.value === "all"
                      ? tab.content
                      : tab.content.filter((item) => item.category === tab.value);

                  const totalPages = Math.ceil(filteredContent.length / postsPerPage);
                  const pageNumbers = [];
                  const maxDisplayed = 5;
                  const sideCount = Math.floor(maxDisplayed / 2);

                  let start = Math.max(currentPage - sideCount, 1);
                  let end = Math.min(currentPage + sideCount, totalPages);

                  if (currentPage <= sideCount) {
                    end = Math.min(maxDisplayed, totalPages);
                  } else if (currentPage + sideCount > totalPages) {
                    start = Math.max(totalPages - maxDisplayed + 1, 1);
                  }

                  if (start > 1) {
                    pageNumbers.push(
                      <a
                        key="first"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(1);
                        }}
                      >
                        1
                      </a>
                    );
                    if (start > 2) pageNumbers.push(<span key="start-ellipsis">…</span>);
                  }

                  for (let i = start; i <= end; i++) {
                    pageNumbers.push(
                      <a
                        key={i}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i);
                        }}
                        className={currentPage === i ? "current underline" : ""}
                      >
                        {i}
                      </a>
                    );
                  }

                  if (end < totalPages) {
                    if (end < totalPages - 1) pageNumbers.push(<span key="end-ellipsis">…</span>);
                    if (!pageNumbers.find((el) => el.key === String(totalPages))) {
                      pageNumbers.push(
                        <a
                          key={totalPages}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(totalPages);
                          }}
                        >
                          {totalPages}
                        </a>
                      );
                    }
                  }

                  return pageNumbers;
                })()}
              </div>

              {/* Next Button */}
              <span
                className={`arrow ${currentPage ===
                  Math.ceil(
                    (tab.value === "all"
                      ? tab.content
                      : tab.content.filter((item) => item.category === tab.value)
                    ).length / postsPerPage
                  )
                  ? "disabled"
                  : ""
                  }`}
                onClick={() => {
                  const totalPages = Math.ceil(
                    (tab.value === "all"
                      ? tab.content
                      : tab.content.filter((item) => item.category === tab.value)
                    ).length / postsPerPage
                  );
                  if (currentPage < totalPages) {
                    handleNext(tab);
                  }
                }}
                style={
                  currentPage ===
                    Math.ceil(
                      (tab.value === "all"
                        ? tab.content
                        : tab.content.filter((item) => item.category === tab.value)
                      ).length / postsPerPage
                    )
                    ? { pointerEvents: "none" }
                    : {}
                }
              >
                Next
                <img src="images/icon-arrow.svg fill.svg" alt="Guide" className="card-img" />
              </span>
            </div>





          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

export default Tabs;
