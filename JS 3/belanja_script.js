//deklarasikan array kosng unutuk daftar belanja
let shoppingList = [];

// Fungsi untuk merender daftar belanja
function renderList() {
    //koosngkan innerHTML dari ul#itemBelanja
    const itemsList = document.getElementById('itemBelanja');
    itemsList.innerHTML = '';
    //for loop utk mengintersi shoopingList
    for (let i = 0; i < shoppingList.length; i++) {
        //elemen <li> utk setiap item
        const listItem = document.createElement('li');
        listItem.textContent = shoppingList[i];
        itemsList.appendChild(listItem);
    }
    
    //perbarui teks di penjumlahan
    const jumlahItemElement = document.getElementById('jumlahItem');
    jumlahItemElement.textContent = `Jumlah item: ${shoppingList.length}`;
}

// Fungsi untuk menambah item baru
function tambahItem() {
    const newItemInput = document.getElementById('newItem');
    const newItemValue = newItemInput.value.trim();
    
    if (newItemValue !== '') {
        shoppingList.push(newItemValue);
        newItemInput.value = '';
        renderList();
    }
}

// Fungsi untuk menghapus item terakhir
function hapusItemTerakhir() {
    if (shoppingList.length > 0) {
        shoppingList.pop();
        renderList();
    }
}