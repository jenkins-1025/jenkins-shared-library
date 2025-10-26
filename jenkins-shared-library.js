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

//Registrasi Shared Library
//Untuk meregistrasikan Shared Library pada jenkins, bisa melalui menu Manage Jenkins -> Configure System/System -> Global Trusted Pipeline Libraries
//Tambahkan nama project sesuai nama di git repository, masukkan juga repository url by ssh dan credentials nya
//Jenkins shared library yg diregistrasi bisa lebih dari satu, asal nama project nya tidak sama

//Menggunakan Shared Library
//Setelah shared library teregistrasi di jenkins, sudah bisa digunakan dengan menggunakan Groovy Pipeline plugin
plugins.jenkins.io/pipeline-groovy-lib/ //secara default ikut terinstall ketika install jenkins pipeline
//Untuk menggunakan shared library bisa dengan perintah @Library, misal :
@Library("nama-shared-library")
@Library("nama-shared-library@tag")
@Library("nama-shared-library@branch")
//Saat menggunakan @Library, perlu menyebutkan class Groovy satu per satu jika ingin digunakan
//kadang ingin import(menggunakan) file groovy di vars secara otomatis tanpa harus import satu per satu
@Library("nama-shared-library@branch")_ //bisa tambahkan (_) agar file di vars menjadi global variable dan bisa digunakan

//Groovy Class
//Pada struktur shared library, bisa membuat kode kode groovy class di dalam folder src
groovy-lang.org/ //dokumentasi groovy
//Jika groovy class pada vars bisa langsung digunakan, maka di src harus di import di Jenkinsfile terlebih dahulu
//Pada Groovy Class hanya bisa menggunakan fitur di bahasa pemrograman Groovy, jika sebelumnya menggunakan echo() bawaan pipeline, maka harus diganti println() yg dari groovy

//Mengakses Steps
//Jika ingin mengakses Jenkins Pipeline Library dari Groovy Class, bisa kirim object Steps melalui parameter
//Nanti secara otomatis bisa mengakses jenkins pipeline library melalui parameter tersebut

//Global Variable
//Saat membuat file Groovy di folder vars, otomatis file tersebut akan menjadi Global Variable yg bisa diakses melalui Jenkinsfile
//Nama Global Variable akan sama dengan nama filenya, misal jika nama file adalah author.groovy, maka nama variablenya adalah author
//Semua definisi function, variable, dan class di file tersebut bisa diakses melalui Global Variable