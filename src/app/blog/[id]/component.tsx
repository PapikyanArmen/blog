"use client";
import React, { useEffect, useState } from "react";
import { IBlog } from "@/types";
import { addComment, getMovie } from "@/api";
import styles from "@/app/blog/[id]/page.module.scss";
import Image from "next/image";
import { shimmer, toBase64 } from "@/helper";
import Chip from "@/components/Chip/Chip";
import moment from "moment/moment";
import Loader from "@/components/Loader/Loader";
import Back from "@/components/Back/Back";
const SingleMovie = (props: { id: string }) => {
  const { id } = props;
  const [data, setData] = useState<IBlog | null>(null);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getMovie(id).then((res) => {
      setLoading(false);
      setData(res);
    });
  }, []);
  const handleClick = () => {
    addComment(id, data, [{ text: comment, date: new Date() }]).then((res) => {
      setData(res);
    });
    setComment("");
  };
  return data ? (
    <main className={styles.main}>
      <Back />
      <div className={styles.about}>
        <div className={styles.banner}>
          <Image
            src={data.image_url}
            alt={data.name}
            fill
            style={{ objectFit: "contain" }}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(32, 32))}`}
          />
        </div>
        <div className={styles.information}>
          <h1>{data.name}</h1>
          <div className={styles.chips}>
            {data.genre.map((el, i) => {
              return <Chip label={el} key={i} />;
            })}
          </div>
          <p className={styles.information_desc}>{data.desc}</p>
          <p className={styles.information_team}>
            <strong>Director - </strong>
            {data.directors.map((el, i) => {
              return (
                <span className={styles.information_director} key={i}>
                  {el}
                  {" | "}
                </span>
              );
            })}
          </p>
          <p className={styles.information_team}>
            <strong>Actors - </strong>
            {data.actors.map((el, i) => {
              return (
                <span className={styles.information_director} key={i}>
                  {el}
                  {" | "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.comment}>
        {data.comments ? <h3>Comments</h3> : null}
        {data.comments ? (
          <ul className={styles.comment_list}>
            {data.comments.map((el, i) => {
              return (
                <li key={i}>
                  <p>
                    {i + 1}.{" "}
                    <span className={styles.comment_list_date}>{moment(el.date).format("LLLL")}</span>
                    <span className={styles.comment_list_text}>{el.text}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        ) : null}

        <textarea
          value={comment}
          placeholder="Your Comment"
          className={styles.textarea}
          name=""
          id=""
          onChange={(e) => setComment(e.target.value)}
        />
        <button disabled={!comment || loading} onClick={() => handleClick()} className={styles.btn}>
          Submit
        </button>
      </div>
    </main>
  ) : (
    <Loader />
  );
};
export default SingleMovie;
