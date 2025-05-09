import BlogDetailBnr from '@/components/Banner/BlogDetailBnr'
import React from 'react'



const detailBanner = {
title: "Intro to the Salesforce Integration Decision Making Framework",
description:
"Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. In the next post, we’ll explore how to gather integration requirements so you’re not firing in the dark. ",
author: "Jay Prasad",
date: "March 24, 2025 <span></span> 5 min read",
image: "/images/agent.png",
layerfirst: "/images/layer1.png",
layersecond: "/images/layer2.png",
slug: "intro-to-salesforce-integration-decision-making-framework" ,
badge:"Salesforce Platform"
};


function blogDetail() {
  return (
    <>
    <BlogDetailBnr detail={detailBanner} />
    </>
  )
}

export default blogDetail
