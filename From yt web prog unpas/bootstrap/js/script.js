// event saat link di klik

$('.page-scroll').on('click', function() {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elemenTujuan = $(tujuan);

    // scrolling
    $('body').scrollTop(tujuan);
})