"use client";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { getData } from "@/api";
import Blog from "@/components/Blog/Blog";
import { IBlog } from "@/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Pagination from "@/components/Pagination/Pagination";
import Loader from "@/components/Loader/Loader";

const Home = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const limit = Number(searchParams.get("_limit"));
  const page = Number(searchParams.get("_page"));
  const [data, setData] = useState<IBlog[] | []>([]);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    page
      ? getData(page, limit).then((res) => {
          setData(res.movieList);
          setTotal(res.total);
          setTimeout(() => {
            setLoading(false);
          }, 300);
        })
      : router.push(`/?_page=${page || 1}&_limit=${limit || 10}`);
  }, [page]);
  const handlePageClick = (selectedItem: { selected: number }) => {
    const { selected } = selectedItem;
    router.push(`/?_page=${selected + 1}&_limit=${limit}`);
  };
  return (
    <>
      <h1 className={styles.title}>IMDb Top 250 Movies</h1>
      {loading ? <Loader /> : null}
      {data.map((el: IBlog, i: number) => {
        return (
          <Blog
            key={el.id}
            actors={el.actors}
            desc={el.desc}
            directors={el.directors}
            genre={el.genre}
            image_url={el.image_url}
            thumb_url={el.thumb_url}
            imdb_url={el.imdb_url}
            name={el.name}
            rating={el.rating}
            year={el.year}
            id={el.id}
            index={i + 1}
          />
        );
      })}
      {data.length ? (
        <Pagination
          initialPage={page}
          total={total}
          limit={limit}
          handlePageClick={(selectedItem: { selected: number }) => handlePageClick(selectedItem)}
        />
      ) : null}
    </>
  );
};
export default Home;
