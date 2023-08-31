//Ganti Nama di home page
let nama = prompt("Nama Anda?")
document.getElementById("name").innerHTML=nama

//Menampilkan hasil Message Us
document.getElementById("submit").addEventListener("click",function(){
    const nama = document.getElementById("nama")
    const tanggal = document.getElementById("tanggal")
    const laki = document.getElementById("laki")
    const perempuan = document.getElementById("perempuan")
    const radio = document.getElementsByClassName("jenisKelamin")
    const pesan = document.getElementById("pesan")

    //Validation
    if(nama.value==""){
        nama.style.border="1px solid red"
        nama.placeholder="Mohon isi nama!"
    } else{
        nama.style.border="1px solid black"
    }

    if(tanggal.value==""){
        tanggal.style.border="1px solid red"
    } else{
        tanggal.style.border="1px solid black"
    }

    if(!(laki.checked || perempuan.checked)){
        document.getElementById("labelLaki").style.color="red"
        document.getElementById("labelPerempuan").style.color="red"
    } else{
        document.getElementById("labelLaki").style.color="black"
        document.getElementById("labelPerempuan").style.color="black"
    }

    if(pesan.value==""){
        pesan.style.border="1px solid red"
    } else{
        pesan.style.border="1px solid black"
    }

    if(!(nama.value=="" || tanggal.value=="" || !(laki.checked || perempuan.checked) || pesan.value=="")){
        document.getElementById("displayNama").innerHTML="Nama: " + nama.value
        document.getElementById("displayTanggal").innerHTML="Tanggal: " + tanggal.value
        if(laki.checked){
            document.getElementById("displayJenisKelamin").innerHTML="Jenis Kelamin: " + laki.value
        } else if(perempuan.checked){
            document.getElementById("displayJenisKelamin").innerHTML="Jenis Kelamin: " + perempuan.value
        }
        document.getElementById("displayPesan").innerHTML="Pesan: " + pesan.value
    }
})

