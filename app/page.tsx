import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Syed Ali Haider
      </h1>
      # add image
      <img
        className="w-48 h-48 rounded-full"
        src="/profile.jpg"
        alt="Profile Picture"
      />
      <p className="mb-4">
        {`Welcome to my world of innovation, where technology meets creativity.
Hi, I’m Syed Ali Haider—an aspiring AI/ML researcher, engineer, and innovator, passionate about unraveling the mysteries of data to create impactful solutions. Over the years, I’ve worn many hats: from developing AI-powered recommendation systems that understand human preferences to crafting autonomous vehicle steering models driven by cutting-edge machine learning.

The journey so far? It’s been fueled by curiosity, an unyielding passion for solving complex problems, and a desire to push boundaries in fields like artificial intelligence, quantum computing, and personalized technology. My work spans academic research, product development, and practical engineering, making me as comfortable coding deep learning models as I am navigating the nuances of quantum game theory.

Why do I do what I do? I believe in the transformative power of technology—whether it’s automating processes to make life easier or enhancing human learning through intelligent systems. I’m fascinated by how AI can not only reflect human behavior but also amplify our decision-making and creativity. Through my experiences at NYU and beyond, I’ve had the privilege to work alongside thought leaders, contributing to projects that address real-world challenges—from optimizing recommendation engines to pioneering educational chatbots that personalize learning experiences.

What drives me? It’s the belief that the best solutions emerge from collaboration. Whether it’s leading teams in academic research or working at fast-paced startups, I strive to foster a creative, dynamic, and problem-solving culture that delivers results. And in every project, I see technology not as a tool but as a canvas—where algorithms and creativity merge to paint the future.

So, whether you're a researcher exploring the frontier of AI, a company seeking innovation, or a fellow technologist eager to collaborate, I invite you to connect, explore my work, and join me on this journey of discovery.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
