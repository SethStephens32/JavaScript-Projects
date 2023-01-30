const newPostBtn = document.getElementById("newPostBtn");
const newPost = document.getElementById("newPost");
const main = document.getElementById("main");
const blogContainer = document.querySelector(".blogContainer");
const newPostForm = document.getElementById("newPostForm");

let blogs = [];

const createBlog = (title, content) => {
  return {
    title: title,
    content: content,
  };
};

const renderBlogs = () => {
  blogContainer.innerHTML = "";
  blogs.forEach((blog, index) => {
    const blogEl = document.createElement("div");
    blogEl.classList.add("blog");

    const titleEl = document.createElement("h2");
    titleEl.innerText = blog.title;
    blogEl.appendChild(titleEl);

    const contentEl = document.createElement("p");
    contentEl.innerText = blog.content;
    blogEl.appendChild(contentEl);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      blogs = blogs.filter((_, i) => i !== index);
      renderBlogs();
    });
    blogEl.appendChild(deleteBtn);

    blogContainer.appendChild(blogEl);
  });
};

newPostBtn.addEventListener("click", () => {
  main.style.display = "none";
  newPost.style.display = "block";
});

newPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = event.target.elements.title.value;
  const content = event.target.elements.content.value;

  blogs.push(createBlog(title, content));
  renderBlogs();

  newPost.style.display = "none";
  main.style.display = "block";

  event.target.reset();
});

renderBlogs();
