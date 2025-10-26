//Jenkins Shared Library Introduction
//Adalah fitur di jenkins pipeline untuk menyimpan kode pipeline di repository terpisah dari project yg menggunakan pipeline tersebut
//Saat menginstall jenkins pipeline, otomatis bisa menggunakan fitur shared library
//Keuntungan menggunakan shared library adalah tidak perlu membuat pipeline secara manual satu per satu di tiap project
//Bisa import satu shared library ke beberapa job pipeline, ketika ada perubahan hanya perlu update shared library saja
//Dengan membuat centralized repository yg berisikan pipeline, dan project yg membutuhkan pipeline tinggal menggunakan pipeline yg sudah dibuar shared library
//Shared library membutuhkan SCM seperti Git, jadi pastikan nanti menyimpan Shared Library di project repo seperti Git

//Create Shared Library
//Untuk membuat shared library hanya perlu membuat folder berisi kode Groovy yg strukturnya sudah ditentukan, kemudian simpan di Git repository
//Ini karena Jenkins Shared Library akan menggunakan Git untuk menyimpan & menggunakan di Jenkins Job yg membutuhkannya
//Struktur folder shared library yaitu :
//resource: berisi file yg bukan berisi kode program, misal text, json, gambar, dan lain lain
//src: berisi class kode program Groovy
//vars: berisi file groovy