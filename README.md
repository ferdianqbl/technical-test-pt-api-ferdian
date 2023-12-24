# Dokumentasi Pengerjaan

Terima kasih atas kesempatan yang diberikan untuk dapat berada pada tahap seleksi ini. Saya sudah mencoba untuk mengerjakan sesuai dengan instruksi yang diberikan dan mencari beberapa sumber terhadap kendala - kendala yang ditemukan selama pengerjaan. Namun, hingga saat ini kendala saya adalah sebagai berikut :

- Dapat melakukan fetching data Google Login. Hasil dari fetching tersebut adalah data URL untuk login menggunakan google
- Tidak dapat menghandle callback dari google login. Saya terus mencoba mencari cara untuk menghandlenya, tetapi belum dapat saya temukan hingga saat ini. Error yang muncul adalah 404 atau halaman tidak ditemukan.
- Tidak dapat menggunakan API lainnya karena handle callback google yang tidak dapat dilakukan.

Sebagai gantinya, saya mencoba untuk menggunakan proses authentikasi menggunakan Next Auth dan Google Client sendiri. Selain itu, untuk callback menggunakan route `http://localhost:3000/api/auth/callback/google`. Langkah ini saya lakukan untuk tetap mengerjakan tugas pada poin - poin yang lain. Secara umum pengerjaan saya adalah sebagai berikut:

1. Pembuatan Login dengan google
2. Proteksi halaman sesuai dengan aturan.
3. Melakukan refactoring desain menggunakan Tailwind dan pembuatan _component based_. Seluruh komponen berada di folder **components**

> **ui** adalah folder untuk komponen terkecil
> **pages** adalah folder untuk komponen pada setiap halaman

> **(auth)** adalah folder yang berisi route yang dapat diakses user apabila user **belum** login dan tidak dapat diakses ketika user **sudah** login. Folder ini berisi halaman Login.

> **(private)** adalah folder yang berisi route yang dapat diakses user apabila user **sudah** login dan tidak dapat diakses ketika user **belum** login. Folder ini berisi halaman List semua anime dan detail dari setiap list.

> Halaman home dapat diakses user pada kondisi apapun

> Terdapat slide Profile yang dapat diakses atau tampil di navbar ketika user sudah login

Demikian pengerjaan Technical Test milik saya. Mohon maaf apabila masih belum 100% sesuai dengan brief karena keterbatasan pengetahuan saya. Saya sangat menghargai setiap keputusan yang akan diberikan selanjutnya. Terima kasih.
