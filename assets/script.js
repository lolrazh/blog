document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = document.getElementById("blog-posts");
    const postCount = blogPosts.children.length;

    if (postCount === 1) {
        blogPosts.classList.add("single-post");
    } else if (postCount === 2) {
        blogPosts.classList.add("two-posts");
    } else if (postCount === 3) {
        blogPosts.classList.add("three-posts");
    } else if (postCount >= 4) {
        blogPosts.classList.add("more-posts");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = document.getElementById("blog-posts");

    // Fetch the blog posts from the JSON file, adjusted to the correct path
    fetch("assets/posts.json")
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                // Create a new blog post card for each post
                const card = document.createElement("article");
                card.classList.add("card");

                const postLink = document.createElement("a");
                postLink.href = post.link;  // Points to the markdown file
                postLink.innerHTML = post.title;

                const postTitle = document.createElement("h2");
                postTitle.appendChild(postLink);

                card.appendChild(postTitle);
                blogPosts.appendChild(card);
            });

            // Adjust layout based on the number of posts
            adjustLayout(blogPosts.children.length);
        })
        .catch(error => console.error("Error fetching posts:", error));
});

function adjustLayout(postCount) {
    const blogPosts = document.getElementById("blog-posts");
    
    // Reset classes
    blogPosts.classList.remove("single-post", "two-posts", "three-posts", "more-posts");

    if (postCount === 1) {
        blogPosts.classList.add("single-post");
    } else if (postCount === 2) {
        blogPosts.classList.add("two-posts");
    } else if (postCount === 3) {
        blogPosts.classList.add("three-posts");
    } else if (postCount >= 4) {
        blogPosts.classList.add("more-posts");
    }
}
