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
