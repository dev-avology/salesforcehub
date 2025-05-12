import BlogDetailBnr from '@/components/Banner/BlogDetailBnr'
import CommonBnr from '@/components/Banner/CommonBnr';
import ChatBox from '@/components/BlogsDetails/ChatBox';
import Content from '@/components/BlogsDetails/Content';
import Explore from '@/components/BlogsDetails/Explore';
import { Chat } from '@mui/icons-material';
import React from 'react'



const detailBanner = {
title: "Intro to the Salesforce Integration Decision Making Framework",
description:
"Whether you’re orchestrating a multi-million-dollar pipeline or a small startup’s first integration, a decision-making framework is your compass. In the next post, we’ll explore how to gather integration requirements so you’re not firing in the dark. ",
author: "Jay Prasad",
date: "March 24, 2025 <span></span> 5 min read",
image: "/images/detail-bbg.png",
layerfirst: "/images/tree1.png",
layersecond: "/images/tree4.png",
layerthree: "/images/tree5.png",
slug: "intro-to-salesforce-integration-decision-making-framework" ,
badge:"Salesforce Platform",
imgpara:"Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids, ensuring you’re well-equipped to navigate the integration maze.",
};

const joinData = {
heading: "Join the newsletter & stay up to date!",
description: `Stay connected and informed! Join our newsletter to receive the latest updates, exclusive offers, and exciting news straight to your inbox`,
buttonText: "Sign up now",
buttonLink: "#", // You can change this to the actual link
imageSrclayer2: "/images/ommonBnr-details.png",
 imageSrclayer: "/images/middle section.png",
};



function blogDetail() {
  return (
    <>
      <BlogDetailBnr detail={detailBanner} />
      <Content/>
      <Explore/>
      <ChatBox/>
    <CommonBnr {...joinData} className={`${joinData.className || ''} join-bottom-bnr-details`} />

    </>
  )
}

export default blogDetail
