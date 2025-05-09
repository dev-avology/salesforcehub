import React from "react";
import Link from "next/link";

const tags = [
  { label: "AI", url: "/tags/ai" },
  { label: "AI Research", url: "/tags/ai-research" }
];

function Explore() {
  return (
    <>
      <section className="explore-details">
        <div className="container">
          <div className="heading">
            <h3>Explore related content by topic</h3>
            <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <Link href={tag.url}>{tag.label}</Link>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
