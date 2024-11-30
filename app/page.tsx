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

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Syed Ali Haider
      </h1>

      <div>
        <p className="text-sm mb-4">
          Hi, I'm a senior at <strong>NYU</strong> studying and building
          intelligent systems.
        </p>

        <p className="text-sm mb-4">
          Along the way, I’ve had the privilege of learning from and working
          with incredible mentors, including{" "}
          <a
            href="https://whongyi.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Prof. Hongyi Wen</strong>
          </a>
          ,{" "}
          <a
            href="https://www.di.ens.fr/~ponce/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Prof. Jean Ponce</strong>
          </a>
          , and{" "}
          <a
            href="https://www.umarsaif.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Dr. Umar Saif</strong>
          </a>
          . Their guidance has shaped my research interests and approach to
          solving challenging problems.
        </p>

        <p className="text-sm mb-4">
          My journey so far has been about exploring how systems can learn and
          adapt, just like we do. I’ve worked on exciting projects in areas like{" "}
          <strong>recommendation systems, computer vision, and NLP</strong>,
          always aiming to make technology more intuitive and accessible.
        </p>

        <p className="text-sm mb-4">
          On the side I’ve been exploring the intersection of{" "}
          <strong>quantum technologies</strong> and computation, exploring their
          potential under the mentorship of{" "}
          <a
            href="https://shanghai.nyu.edu/academics/faculty/directory/tim-byrnes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Prof. Tim Byrnes</strong>
          </a>
        </p>

        <div className="my-8">
          <ProjectPosts />
        </div>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
