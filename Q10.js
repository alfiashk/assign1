// ## Section E: Advanced Challenges

// ### Question 10: Social Media Analytics

const posts = [
  { id: 1, author: "user1", content: "Hello world!", likes: 15, tags: ["greeting", "first"] },
  { id: 2, author: "user2", content: "JavaScript is awesome", likes: 2, tags: ["programming", "js"] },
  { id: 3, author: "user1", content: "Learning arrays", likes: 18, tags: ["programming", "learning"] },
  { id: 4, author: "user3", content: "Good morning!", likes: 8, tags: ["greeting"] }
];


// a) Find the most popular post (highest likes)
let high = posts.reduce((a, b) => a.likes > b.likes ? a : b);
//console.log(high);

// b) Get all unique tags used across all posts
let tags = [];
let arr = posts.forEach((e) => {
    e.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
            tags.push(tag);
        }
    });
});

//console.log(tags);

// c) Calculate average likes per author
let avg = {};
let avgLikes = posts.forEach((post) => {
    let auth = post.author;
    if (!avg[auth]) {
        avg[auth] = [];
        avg[auth].push(post);
    } else {
        avg[auth].push(post);
    }
})

for (let a in avg) {
    let user = avg[a];
    let total = user.reduce((a, b) => a + b.likes, 0);
    let average = total/ user.length;
    avg[a] = average;
}
//console.log(avg);

// d) Find posts containing the word "JavaScript" or "programming" in content or tags
let words = posts.filter((p) => {
    let cont = p.content.toLowerCase();
    let tag = p.tags.map((t => t.toLowerCase()));
    return cont.includes("javascript") || cont.includes("programming") ||
            tag.includes("javascript") || tag.includes("programming")
});
//console.log(words);


// e) Create a leaderboard of authors sorted by total likes
let leader = {};
let leaderboard = posts.forEach((post) => {
    let auth = post.author;
    if (!leader[auth]) {
        leader[auth] = [];
        leader[auth].push(post);
    } else {
        leader[auth].push(post);
    }
});

for (let like in leader) {
    let authorLike = leader[like];
    let totalLikes = authorLike.reduce((a, b) => a + b.likes, 0);
    leader[like] = totalLikes;
}

let sorted = Object.entries(leader);
console.log(sorted.sort((a, b) => b[1] - a[1]));

