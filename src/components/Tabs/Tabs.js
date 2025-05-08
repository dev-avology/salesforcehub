import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function Tabs({ tabs = [] }) {
  const [value, setValue] = useState(tabs[0]?.value || "1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderPost = (post, index) => (
    <div className="flex-tbs" key={index}>
      <div className="flex-tbs-img">
        <img
          src={post.image || "/images/step.png"}
          alt="Guide"
          className="card-img"
        />
      </div>
      <div className="flex-tbs-content">
        <a
          className={`custom-badge ${post.badgeColor || ""}`}
          href={post.link || "/blog#"}
        >
          {post.badgeText}
        </a>
        <h3 className="title-custom">
          {typeof post.title === "string" ? post.title : post.title}
        </h3>
        <ul className="custom-flex">
          <li>
            <a href="/blog">
              <img src="/images/circle-bnr.png" alt="Author" />
              <span>{post.author}</span>
            </a>
            <span>{post.date}</span>
          </li>
        </ul>
        <p>{post.description}</p>
        <p className="lorem-color">
          Lorem ipsum <span /> Lorem ipsum
        </p>
      </div>
    </div>
  );

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
            {tab.content.map(renderPost)}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

export default Tabs;
