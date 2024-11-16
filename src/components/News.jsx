import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import RightNavbar from "./RightNavbar";

const News = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <div className="w-11/12 mx-auto grid grid-cols-12 gap-6">
            <div className="col-span-9">
                <h1 className="text-2xl font-bold my-3">Dragon News</h1>
                <div className="card bg-base-100  shadow-xl">
                    <figure className=" pt-10">
                    <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.details}</p>
                    <div className="card-actions">
                        <Link to={`/category/${news?.category_id}`}className="btn bg-red-500 text-white">All news in this category</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className=" col-span-3">
                <RightNavbar></RightNavbar>
            </div>
        </div>
    </div>
  );
};

export default News;
