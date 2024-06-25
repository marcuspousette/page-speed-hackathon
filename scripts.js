function run() {
  document.addEventListener('DOMContentLoaded', function () {
    fetch('https://dummyjson.com/posts?limit=1000')
      .then((response) => response.json())
      .then((data) => {
        displayPosts(data.posts);
        addNavbar();
        addHero();
        addFooter();
      })
      .catch((error) => console.error('Error fetching posts:', error));
  });
}

function displayPosts(posts) {
  const postsContainer = document.createElement('section');
  postsContainer.classList.add('posts');
  postsContainer.setAttribute('id', 'posts');
  postsContainer.innerHTML = '';
  const body = document.querySelector('.body');
  body.appendChild(postsContainer);

  const cleanPosts = posts
    .map(({ title, body, reactions, views, id }) => {
      return {
        title,
        body,
        reactions,
        views,
        id,
      };
    })
    .filter((post) => post.id < 500)
    .sort((a, b) => b.reactions.likes - a.reactions.likes);

  cleanPosts.forEach((post) => {
    createPostEntry(post, postsContainer);
  });
}

function createPostEntry(post, postsContainer) {
  const postElement = document.createElement('article');
  postElement.classList.add('post');

  const avatar = document.createElement('img');
  avatar.src = './img/happy-mac.jpg';
  avatar.alt = 'Marcus';
  avatar.classList.add('avatar-image');
  postElement.appendChild(avatar);

  const postTitle = document.createElement('h2');
  postTitle.textContent = post.title;
  postElement.appendChild(postTitle);

  const postBody = document.createElement('p');
  postBody.textContent = post.body;
  postElement.appendChild(postBody);

  const postLikes = document.createElement('p');
  postLikes.textContent = `Likes: ${post.reactions.likes}`;
  postElement.appendChild(postLikes);

  const postViews = document.createElement('p');
  postViews.textContent = `Views: ${post.views}`;
  postElement.appendChild(postViews);

  postsContainer.appendChild(postElement);
}

function addNavbar() {
  // Skapa en ny ul-element
  const navElement = document.createElement('nav');
  const ulElement = document.createElement('ul');

  // Skapa en array av länkar
  const links = [
    { href: '#hero', text: 'Hero' },
    { href: '#posts', text: 'Posts' },
  ];

  // Skapa li-element för varje länk och lägg till dem i ul-elementet
  links.forEach((link) => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.href = link.href;
    aElement.textContent = link.text;
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  // Lägg till ul-elementet i body-taggen
  navElement.appendChild(ulElement);
  document.querySelector('body').appendChild(navElement);
}

function createIframe(sectionElement) {
  const newIframe = document.createElement('iframe');
  newIframe.width = '100%';
  newIframe.height = 'auto';

  newIframe.src =
    'https://www.youtube-nocookie.com/embed/IeH00LdQhBE?si=Y0eCsLVoiLHcQvk4';
  newIframe.title = 'YouTube video player';
  newIframe.frameBorder = '0';
  newIframe.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  newIframe.referrerPolicy = 'strict-origin-when-cross-origin';
  newIframe.allowFullscreen = true;
  sectionElement.append(newIframe);
}

function addHero() {
  // Skapa en ny section-element
  const sectionElement = document.createElement('section');
  sectionElement.id = 'hero';

  // Skapa h1-elementet
  const h1Element = document.createElement('h1');
  h1Element.textContent = 'Welcome to My Amazing Blog posts';
  sectionElement.appendChild(h1Element);

  // Skapa p-elementet
  const pElement = document.createElement('p');
  pElement.textContent = 'Your daily dose of awesome articles';
  sectionElement.appendChild(pElement);

  // Skapa img-elementet
  const imgElement = document.createElement('img');
  imgElement.src = './img/mac.jpeg';
  imgElement.alt = 'Large Image';
  imgElement.classList.add('large-image');
  sectionElement.appendChild(imgElement);

  const imgElement2 = document.createElement('img');
  imgElement2.src = './img/mac.jpeg';
  imgElement2.alt = 'Large Image';
  imgElement2.classList.add('large-image');
  sectionElement.appendChild(imgElement2);

  createIframe(sectionElement);

  const body = document.querySelector('body');
  const referenceElement = body.children[1];
  body.insertBefore(sectionElement, referenceElement);
}

function addFooter() {
  // Skapa en ny footer-element
  const footerElement = document.createElement('footer');

  // Skapa p-elementet
  const pElement = document.createElement('p');
  pElement.textContent = '© 2024 My Blog. All rights reserved.';

  // Lägg till p-elementet i footer-elementet
  footerElement.appendChild(pElement);

  // Lägg till footer-elementet längst bak i body-taggen
  document.querySelector('body').appendChild(footerElement);
}

run();
