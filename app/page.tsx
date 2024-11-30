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
        <p className="mb-4">
          Hi, a Computer Science student at <strong>NYU</strong> with a passion
          for understanding and building intelligent systems.
        </p>

        <p className="mb-4">
          Along the way, I’ve had the privilege of learning from and working
          with incredible mentors, including{" "}
          <a
            href="https://cs.nyu.edu/people/faculty.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Prof. Jean Ponce</strong>
          </a>
          ,{" "}
          <a
            href="https://cs.nyu.edu/people/faculty.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Dr. Annase Bari</strong>
          </a>
          , and{" "}
          <a
            href="https://cs.nyu.edu/people/faculty.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Dr. Divya Singhvi</strong>
          </a>
          . Their guidance has shaped my research interests and approach to
          solving challenging problems.
        </p>
        <p className="mb-4">
          My journey so far has been about exploring how systems can learn and
          adapt, just like we do. I’ve worked on exciting projects in areas like{" "}
          <strong>recommendation systems, computer vision, and NLP</strong>,
          always aiming to make technology more intuitive and accessible.
        </p>
        <p className="mb-5">
          <strong>Projects</strong>:
        </p>
        <div className="my-8">
          <ProjectPosts />
        </div>
      </div>
      <p className="mb-5">
        <strong>Blogs</strong>:
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
