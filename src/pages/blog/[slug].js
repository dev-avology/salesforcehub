import BlogDetailBnr from '@/components/Banner/BlogDetailBnr'
import Content from '@/components/BlogsDetails/Content';
import Explore from '@/components/BlogsDetails/Explore';
import React from 'react'
import API from '../../services/api'

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



function blogDetail({slugData }) {
  
const detailBanner = {
  image: "/images/detail-bbg.png",
  layerfirst: "/images/tree1.png",
  layersecond: "/images/tree2.png",
  imgpara:"Over the next seven blogs, we’ll tackle each pillar with a deeper dive and more visual aids, ensuring you’re well-equipped to navigate the integration maze.",
  };

  return (
    <>
    <BlogDetailBnr detail={slugData} detailBanner={detailBanner}/>
      <Content  detail={slugData}/>
      <Explore/>
    </>
  )
}

export default blogDetail
