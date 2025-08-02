// file: .eleventy.js (phiên bản cuối cùng, chính xác)
module.exports = function(eleventyConfig) {
  // Copy các thư mục JS và Images.
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");

  return {
    // ================== THÊM VÀO ĐÂY ==================
    // Thay "english-vite" bằng tên repo của bạn nếu khác
    pathPrefix: "/english-vite/",
    // ===============================================

    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site"
    }
  };
};