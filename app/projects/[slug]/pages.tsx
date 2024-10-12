import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getProjectPosts } from "app/projects/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let posts = getProjectPosts();
  console.log(
    "Generated slugs:",
    posts.map((post) => post.slug)
  ); // Log slugs
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getProjectPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/projects/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }) {
  console.log("Params received:", params); // Log params
  let post = getProjectPosts().find((p) => p.slug === params.slug);
  console.log("Post found:", post); // Log the found post

  if (!post) {
    notFound();
  }
  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
    </section>
  );
}
