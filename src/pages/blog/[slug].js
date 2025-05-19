import BlogDetailBnr from '@/components/Banner/BlogDetailBnr'
import Content from '@/components/BlogsDetails/Content';
import Explore from '@/components/BlogsDetails/Explore';
import React, { useState, useEffect } from 'react'
import API from '../../services/api'
import ChatBox from '@/components/BlogsDetails/ChatBox';
import CommonBnr from '@/components/Banner/CommonBnr';
import { motion } from 'framer-motion';

export async function getStaticPaths() {
  const res = await API.get('/api/blogs');
  const posts = res.data.data;

  const paths = posts.map((post) => ({
    params: { slug: post.Slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await API.get(`/api/blogs?filters[Slug][$eq]=${slug}&populate=*`);
  const slugData = res.data.data[0];

  if (!slugData) {
    return { notFound: true };
  }

  return {
    props: {
      slugData,
    },
  };
}



function blogDetail({ slugData }) {

  const [replies, setReplies] = useState([]);
  const [commentsRefresh, setCommentsRefresh] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const handleRefresh = () => {
    setCommentsRefresh(prevState => !prevState);
  };
  useEffect(() => {
    const getComments = async () => {
      try {
        const blogsRes = await API.get('/api/blogs?populate=*');
        setBlogs(blogsRes.data.data);

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    getComments();
  }, [commentsRefresh]);

  const detailBanner = {
    image: "/images/detail-bbg.png",
    layerfirst: "/images/tree1.png",
    layersecond: "/images/tree4.png",
    layerthree: "/images/tree5.png",

    imgpara: "Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids, ensuring you’re well-equipped to navigate the integration maze.",
  };

  const joinData = {
    heading: "Join the newsletter & stay up to date!",
    description: `Stay connected and informed! Join our newsletter to receive the latest updates, exclusive offers, and exciting news straight to your inbox`,
    buttonText: "Sign up now",
    buttonLink: "#",
    imageSrclayer2: "/images/ommonBnr-details.png",
    imageSrclayer: "/images/middle section.png",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BlogDetailBnr detail={slugData} detailBanner={detailBanner} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Content detail={slugData} blogs={blogs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Explore />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
        viewport={{ once: true }}
      >
        <ChatBox  postID={slugData.documentId} replies={replies}  />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <CommonBnr {...joinData} className={`${joinData.className || ''} join-bottom-bnr-details`} />
      </motion.div>
    </>
  )
}

export default blogDetail
