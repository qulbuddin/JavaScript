var job = prompt('Tebak Pekerjaan Saya !!!');
switch (job) {
    case 'Programmer':
        console.log('Saya adalah seorang Trainer');
        break; // Break Untuk Stop looping.
    case 'Driver':
        console.log('Saya bukan seorang Driver');
        break;
    case 'Polisi':
        console.log('Polisi bertugas menangkap maling');
        break;
    default:
        console.log('Saya bukan Driver dan Polisi.');
}