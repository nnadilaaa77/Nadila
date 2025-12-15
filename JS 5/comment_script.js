const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');
const errorComment = document.getElementById('errorComment');

// event listener click ke submitComment
submitComment.addEventListener('click', function() {
    //nilai dari textarea
    const commentText = commentInput.value; 
    //bersihkan pesan error
    errorComment.textContent = '';
    //validasi
    const trimmedComment = commentText.trim();
    
    if (trimmedComment === '') {
        errorComment.textContent = 'Komentar tidak boleh kosong!';
        commentInput.focus();
        return; // hentikan proses
    }
    
    if (trimmedComment.length < 5) {
        errorComment.textContent = 'Komentar harus minimal 5 karakter!';
        commentInput.focus();
        return;
    }
    
    // jika valid, buat elemen komentar baru
    createCommentElement(trimmedComment);
    // kosongkan kembali nilai textarea
    commentInput.value = '';
});

//buatelemen komentar baru
function createCommentElement(commentText) {
    //div baru untuk setiap komentar
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    //p untuk menampilkan teks komentar
    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = commentText;
    // Buat tombol "Hapus"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    // Tambahkan event listener untuk tombol hapus
    deleteButton.addEventListener('click', function() {
        commentList.removeChild(commentItem);
    });
    
    //elemen p dan tombol hapus ke dalam div komentar
    commentItem.appendChild(commentParagraph);
    commentItem.appendChild(deleteButton);
    //spasi antara tombol dan teks komentar
    deleteButton.style.marginLeft = '10px';
    //komentar baru ke daftar komentar
    commentList.appendChild(commentItem); 
}