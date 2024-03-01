import React, { Suspense } from "react";
import { Metadata } from "next";
import SingleMovie from "@/app/blog/[id]/component";
import { getMovie } from "@/api";
// import { IBlog } from "@/types";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const movie = await getMovie(id).then((res) => {
    return res;
  });
  return {
    title: movie.name,
    openGraph: {
      images: movie.thumb_url,
      title: movie.name,
      description: movie.desc,
    },
  };
}
export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense>
      <SingleMovie id={params.id} />
    </Suspense>
  );
}
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = getAllMovies();
//   const movies = await res;
//
//   // Get the paths we want to pre-render based on posts
//   const paths = movies.map((movie: IBlog) => ({
//     params: { id: movie.id },
//   }));
//
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// This also gets called at build time
// export async function getStaticProps({ params }: any) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = getMovie(params.id);
//   const movie = await res;
//
//   // Pass post data to the page via props
//   return { props: { movie } };
// }
