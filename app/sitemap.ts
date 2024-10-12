import { getBlogPosts } from "app/blog/utils";
import { getProjectPosts } from "app/projects/utils"; // Import the function to get project data

export const baseUrl = "https://syedhaider.vercel.app";

export default async function sitemap() {
  // Get blog posts for the sitemap
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  // Get project data for the sitemap
  let projects = getProjectPosts().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`, // Update the URL path as needed
    lastModified: post.metadata.publishedAt,
  }));

  // Add main routes for the sitemap
  let routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects]; // Combine all entries
}
