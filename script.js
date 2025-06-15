const cardsData = [
  {
    name: "Abhi",
    img: "images/abhi.jpg",
    description: "A storyteller with a camera and a heart full of wanderlust.",
    title: "Who Rules the World?",
    insta: "https://instagram.com/oyee.abhii2"
  },
  {
    name: "Chill Guy",
    img: "images/abhi1.jpg",
    description: "Living in the moment, capturing smiles and sunsets.",
    title: "Silent Vibes",
    insta: "https://instagram.com/abhi_z2k6"
  },
  {
    name: "Car Guy",
    img: "images/abhi2.jpg",
    description: "Fueled by passion and horsepower.",
    title: "In Love With Speed",
    insta: "https://instagram.com/oyee.abhii02"
  },
  {
    name: "Rajput Munda",
    img: "images/abhi3.jpg",
    description: "Tradition, pride, and a love for legacy.",
    title: "Born Royal",
    insta: "https://instagram.com/kritisharma2006"
  }
];

function createCard(data) {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${data.img}" alt="${data.name}" onclick="openModal('${data.img}')">
        <h2>${data.name}</h2>
        <p class="description">${data.description}</p>
      </div>
      <div class="flip-card-back">
        <h3>${data.title}</h3>
        <div class="social-icons">
          <a href="${data.insta}" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-x-twitter"></i></a>
        </div>
        <div class="interact">
          <button class="like-btn"><i class="fa fa-heart"></i></button>
          <input type="text" class="comment" placeholder="Comment..."/>
        </div>
      </div>
    </div>
  `;
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  return card;
}

// Load initial cards
const container = document.getElementById('cardContainer');
cardsData.forEach(card => container.appendChild(createCard(card)));

// Dark mode toggle
document.getElementById('darkToggle').onclick = () => {
  document.body.classList.toggle('dark');
};

// Music toggle
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let playing = false;

musicBtn.onclick = () => {
  playing = !playing;
  playing ? music.play() : music.pause();
  musicBtn.textContent = playing ? '🔈 Pause Music' : '🔊 Play Music';
};

// Upload new photo
document.getElementById('uploadForm').addEventListener('submit', e => {
  e.preventDefault();
  const file = document.getElementById('imageInput').files[0];
  const name = document.getElementById('nameInput').value;
  const desc = document.getElementById('descInput').value;
  const title = document.getElementById('titleInput').value;

  if (!file || !name || !desc || !title) return;

  const reader = new FileReader();
  reader.onload = () => {
    const newCard = createCard({ name, img: reader.result, description: desc, title, insta: "#" });
    container.appendChild(newCard);
  };
  reader.readAsDataURL(file);
});

// Like button effect
document.addEventListener('click', e => {
  if (e.target.closest('.like-btn')) {
    e.target.closest('.like-btn').classList.toggle('liked');
  }
});

// Fullscreen image
function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}