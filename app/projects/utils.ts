// app/projects/utils.ts

import fs from "fs";
import path from "path";

type ProjectMetadata = {
  title: string;
  description: string;
  publishedAt: string;
};

export function getProjectData() {
  const dir = path.join(process.cwd(), "app/projects/posts"); // Adjust to your actual directory
  const files = fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const content = fs.readFileSync(path.join(dir, file), "utf-8");
    const frontMatter = parseFrontmatter(content);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata: frontMatter.metadata as ProjectMetadata,
      slug,
      content: frontMatter.content,
    };
  });
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");

  const metadata: Partial<ProjectMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    const value = valueArr.join(": ").trim();
    metadata[key.trim() as keyof ProjectMetadata] = value.replace(
      /^['"](.*)['"]$/,
      "$1"
    );
  });

  return { metadata, content };
}
