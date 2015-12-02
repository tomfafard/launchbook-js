// Exercise: Find the top navbar by query for the element type, which is <nav>.

document.getElementsByTagName('nav');

// Exercise: Find the sidebar on the right by using it's id.

document.getElementById('sidebar-left');

// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.

document.getElementsByClassName('pages');
document.getElementsByClassName('groups');

// Exercise: Find all of the comments on the page.

document.getElementsByClassName('comments');

// Exercise: Find the first comment on the page.

document.getElementsByClassName('comments')[0];

// Exercise: Find the last comment on the page.

var comments = document.getElementsByClassName('comments');
var lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];

// Exercise: Find the fourth comment on the page.

document.getElementsByClassName('comments')[3];

// Exercise: Find one of the ads in the sidebar and hide them.

var ad = document.getElementsByClassName('ad-slot')[0];
ad.style.visibility = "hidden";

// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.

var ad = document.getElementsByClassName('ad-slot')[0];
ad.style.visibility = "visible";

// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.

var ad = document.getElementsByClassName('ad-slot')[0];
var img = ad.getElementsByTagName('img')[0];
img.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change it's text to something incredible.

var post = document.getElementsByClassName('post media')[3];
var postBody = post.getElementsByClassName('media-body')[0];
var postText = postBody.getElementsByTagName('p')[0];
postText.innerHTML = 'Sam\'s going to be so pissed when he sees this.';

// Exercise: Find the first post and add the .post-liked class to it.

var allPosts = document.getElementsByClassName('posts')[0];
var post = allPosts.getElementsByClassName('post media')[0];
post.className = post.className + " post-liked";

// Exercise: Find the second post and remove the .post-liked class.

var allPosts = document.getElementsByClassName('posts')[0];
var secondPost = allPosts.getElementsByClassName('post post-liked media')[0];
secondPost.classList.remove("post-liked");
