import { BlogPosts } from "app/components/posts";
import { ProjectPosts } from "app/components/projectList";

export default function Page() {
  return (
    <section>
      <img
        className="rounded-full w-48 h-48 object-cover"
        src="/profile.jpg"
        alt="Profile Picture"
      />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> </h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Syed Ali Haider
      </h1>

      <div>
        <p className="mb-6">
          <strong> Welcome to My Intellectual Journey</strong>
        </p>
        <p className="mb-4">
          Hi, I’m Ali an undergraduate student studying{" "}
          <strong> Computer Science at NYU</strong>.
        </p>
        <p className="mb-4">
          <strong>Point 1</strong>
        </p>
        <p className="mb-4">
          <strong>Point 2</strong>
        </p>
        <p className="mb-5">
          <strong>Projects</strong>
        </p>
        <div className="my-8">
          <ProjectPosts />
        </div>
      </div>
      <p className="mb-5">
        <strong>Blogs</strong>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
