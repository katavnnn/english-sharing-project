module.exports = function(eleventyConfig) {
  // Copy các thư mục JS và Images.
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  // Copy file robots.txt
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    // ================== QUAN TRỌNG NHẤT ==================
    // Đây là nơi duy nhất chúng ta định nghĩa tên repo.
    // Eleventy sẽ tự động sử dụng nó khi có filter | url
    pathPrefix: "/english-sharing-project/",
    // ===================================================

    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    }
  };
};