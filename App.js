// Selecionar ícones de coração
const likeIcons = document.querySelectorAll('.fa-heart');

likeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Alternar entre adicionar/remover a classe 'liked'
        this.classList.toggle('liked');
    });
});

// Estilizar ícones quando estiverem curtidos
const css = `
    .liked {
        color: red;
    }
`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
// Abrir o modal
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('post-modal');
const closeModalBtn = document.getElementsByClassName('close')[0];
const postBtn = document.getElementById('post-btn');

// Abrir o modal de postagem
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Fechar o modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Postar a imagem
postBtn.addEventListener('click', function() {
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const feed = document.getElementById('feed');

            // Criar um novo post com a imagem carregada
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `
                <div class="post-header">
                    <img src="user-avatar.jpg" alt="avatar" class="avatar">
                    <p>@novoUsuario</p>
                </div>
                <img src="${e.target.result}" alt="Imagem postada" class="post-image">
                <div class="post-actions">
                    <a href="#" class="like-btn"><i class="fas fa-heart"></i></a>
                    <a href="#"><i class="fas fa-comment"></i></a>
                    <a href="#"><i class="fas fa-share"></i></a>
                </div>
                <p class="likes-count">0 curtidas</p>
            `;

            // Adicionar o novo post ao feed
            feed.prepend(newPost);

            // Fechar o modal após a postagem
            modal.style.display = 'none';
            fileInput.value = ''; // Limpar o input

            // Adicionar evento de curtida ao novo post
            addLikeEvent(newPost);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione uma imagem para postar.');
    }
});

// Função para gerenciar curtidas
function addLikeEvent(postElement) {
    const likeBtn = postElement.querySelector('.like-btn');
    likeBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link
        const likeIcon = likeBtn.querySelector('i');
        const likesCountElem = postElement.querySelector('.likes-count');
        let likesCount = parseInt(likesCountElem.innerText);

        // Verificar se já foi curtido
        if (likeIcon.classList.contains('liked')) {
            likeIcon.classList.remove('liked');
            likesCount--;
        } else {
            likeIcon.classList.add('liked');
            likesCount++;
        }

        // Atualizar a contagem de curtidas
        likesCountElem.innerText = `${likesCount} curtidas`;
    });
}

// Inicializar eventos de curtida nos posts existentes (se houver)
document.querySelectorAll('.post').forEach(post => {
    addLikeEvent(post);
});


const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.onload = function() {
    const desiredWidth = 300; // Largura desejada
    const desiredHeight = img.height * (desiredWidth / img.width);
    canvas.width = desiredWidth;
    canvas.height = desiredHeight;
    ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);
    const dataUrl = canvas.toDataURL('image/jpeg'); // ou 'image/png'

    // Use dataUrl para a imagem postada
    newPost.innerHTML = `
        <div class="post-header">
            <img src="user-avatar.jpg" alt="avatar" class="avatar">
            <p>@novoUsuario</p>
        </div>
        <img src="${dataUrl}" alt="Imagem postada" class="post-image">
        ...
    `;
};
img.src = e.target.result; // Aqui você define a fonte da imagem carregada
