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
          Hi, I’m Ali, a curious mind studying
          <strong> Computer Science at NYU</strong>. My journey is fueled by an
          insatiable thirst for knowledge, exploring profound questions that
          challenge our understanding of reality.
        </p>
        <p className="mb-4">
          <strong>What is Intelligence?</strong> Is it merely a measure of
          cognitive abilities, or is it the essence of creativity and
          adaptation? I delve into this enigma, examining how artificial
          intelligence can not only mimic human thought but also enhance our
          decision-making processes.
        </p>
        <p className="mb-4">
          <strong>What is the universe made of?</strong> This question intrigues
          me, inviting a deep exploration into the fundamental components of
          existence—from quantum particles to cosmic phenomena. My work in{" "}
          <strong>quantum computing</strong> and{" "}
          <strong>machine learning</strong> seeks to unravel these mysteries,
          blending theoretical inquiry with practical application.
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
