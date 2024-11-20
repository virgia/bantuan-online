
// Ambil peran dan username yang disimpan di sessionStorage
const userRole = sessionStorage.getItem('userRole');
const username = sessionStorage.getItem('username');

// Tampilkan peran dan username di halaman profil
if (userRole && username) {
    document.querySelector('.info-card').innerHTML = `
        <h1>WELCOME DI BANTUAN ONLINE</h1>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Sebagai:</strong> ${userRole.charAt(0).toUpperCase() + userRole.slice(1)}</p>
    `;
}

function showSection(sectionId, title) {
console.log(`Mencoba menampilkan: ${sectionId} dengan judul: ${title}`);

// Sembunyikan semua bagian
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('bantuan-section').style.display = 'none';
    document.getElementById('user-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';

// Tampilkan bagian yang dipilih
document.getElementById(sectionId).style.display = 'block';

// Ubah teks judul
document.getElementById('main-title').textContent = title;
}


// Icon Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('shrink');
});

// Highlight the active menu item
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Fungsi untuk mengubah status menjadi Closed
document.querySelectorAll('.btn.closed').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.closest('tr');
        const statusCell = row.querySelector('.status');
        
        // Ubah teks status menjadi "Closed" dan tambahkan kelas "closed"
        statusCell.textContent = 'Closed';
        statusCell.classList.remove('open');
        statusCell.classList.add('closed');
        
        // Nonaktifkan tombol "Jawab" dan "Closed"
        row.querySelector('.btn.jawab').classList.add('disabled');
        row.querySelector('.btn.closed').classList.add('disabled');
    });
});

// Fungsi untuk menampilkan nama file yang dipilih
function handleFileSelect(index) {
            const fileInput = document.getElementById(`heroImageFile${index}`);
            const fileNameSpan = document.getElementById(`fileName${index}`);
            const file = fileInput.files[0];
            if (file) {
                fileNameSpan.textContent = file.name;
                localStorage.setItem(`heroImageName${index}`, file.name); // Simpan nama file ke localStorage
            }
        }
    
        function uploadHeroImage(index) {
            const fileInput = document.getElementById(`heroImageFile${index}`);
            const file = fileInput.files[0];
            
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    localStorage.setItem(`heroImage${index}`, event.target.result);
                    alert(`Gambar ${index} berhasil diunggah!`);
                };
                reader.readAsDataURL(file);
            } else {
                alert("Harap pilih file gambar terlebih dahulu.");
            }
        }
    
        function removeHeroImage(index) {
            localStorage.removeItem(`heroImage${index}`);
            localStorage.removeItem(`heroImageName${index}`);
            document.getElementById(`fileName${index}`).textContent = ""; // Kosongkan nama file di tampilan
            alert(`Gambar hero ${index} berhasil dihapus!`);
        }
    
        // Mengisi nama file dari localStorage saat halaman dimuat
        window.onload = function() {
            for (let i = 1; i <= 3; i++) {
                const storedFileName = localStorage.getItem(`heroImageName${i}`);
                if (storedFileName) {
                    document.getElementById(`fileName${i}`).textContent = storedFileName;
                }
            }
        };

        function searchTable() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const rows = document.querySelectorAll("#userTable tbody tr");

    rows.forEach(row => {
        const name = row.children[1].textContent.toLowerCase();
        row.style.display = name.includes(searchInput) ? "" : "none";
    });
}
function filterByRole() {
const selectedRole = document.getElementById("roleDropdown").value;
const rows = document.querySelectorAll("#userTable tbody tr");

rows.forEach(row => {
const role = row.getAttribute("data-category");
row.style.display = selectedRole === "" || role === selectedRole ? "" : "none";
});
}

function searchTable() {
const searchInput = document.getElementById("searchBar").value.toLowerCase();
const selectedRole = document.getElementById("roleDropdown").value;
const rows = document.querySelectorAll("#userTable tbody tr");

rows.forEach(row => {
const name = row.children[1].textContent.toLowerCase();
const role = row.getAttribute("data-category");
const matchesSearch = name.includes(searchInput);
const matchesRole = selectedRole === "" || role === selectedRole;
row.style.display = matchesSearch && matchesRole ? "" : "none";
});
}