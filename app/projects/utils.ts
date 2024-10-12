import fs from "fs";
import path from "path";

// Define a Metadata type for project details
type Metadata = {
  title: string;
  description: string;
  publishedAt: string;
};

// Function to parse the front matter and content from a markdown file
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let content = fileContent.replace(frontmatterRegex, "").trim();

  // Initialize metadata with default values
  let metadata: Metadata = {
    title: "",
    description: "",
    publishedAt: "",
  };

  if (match) {
    let frontMatterBlock = match[1];
    let frontMatterLines = frontMatterBlock.trim().split("\n");

    frontMatterLines.forEach((line) => {
      let [key, ...valueArr] = line.split(": ");
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
      metadata[key.trim() as keyof Metadata] = value;
    });
  }

  return { metadata, content };
}

// Function to get all markdown files in the specified directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

// Function to read and parse a markdown file
function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

// Function to get the data of all markdown files in the specified directory
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

// Function to get project posts data
export function getProjectData() {
  return getMDXData(path.join(process.cwd(), "app", "projects", "[id]"));
}

// Format date function (you can reuse the one from your blog utils)
export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
