// https://adamcollier.co.uk/blog/adding-an-updated-date-to-markdown-and-mdx-posts
const fs = require("fs").promises;
const matter = require("gray-matter");

const updateFrontmatter = async () => {
  const [, , ...mdFilePaths] = process.argv;

  mdFilePaths.forEach(async (path) => {
    const file = matter.read(path);
    const { data: currentFrontmatter } = file;

    if (Boolean(currentFrontmatter.datePublished)) {
      const updatedFrontmatter = {
        ...currentFrontmatter,
        dateModified: new Date().toISOString(),
      };

      file.data = updatedFrontmatter;
      const updatedFileContent = matter.stringify(file);
      fs.writeFile(path, updatedFileContent);
    }
  });
};

updateFrontmatter();
