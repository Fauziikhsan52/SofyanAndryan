import { Component } from '@angular/core';

@Component({
  selector: 'app-wisata-menarik',
  templateUrl: './wisata-menarik.component.html',
  styleUrls: ['./wisata-menarik.component.css']
})
export class WisataMenarikComponent {
  wisataList = [
    {
      name: 'Pantai Kuta, Bali',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKdIXtk9Nz3XVDf-kTMq4ygBd6qxmdFCfoGFeEI5aVdiOutuQ6nVWK9Yq&s=10',
      description: 'Pantai dengan pasir putih dan pemandangan sunset yang menawan, tempat populer untuk berselancar dan berjemur.'
    },
    {
      name: 'Gunung Bromo, Jawa Timur',
      image: 'https://www.wartakini.co/wp-content/uploads/2023/09/img_1516.jpg',
      description: 'Gunung berapi aktif dengan pemandangan kawah yang memukau, terutama saat matahari terbit.'
    },
    {
      name: 'Danau Toba, Sumatera Utara',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjbaFI2aCDNu8tpt0dGUG2xYn9GMxx8TugivNj9fvypEe4Hxr2RewnNjH&s=10',
      description: 'Danau vulkanik terbesar di Asia Tenggara dengan panorama indah, lengkap dengan Pulau Samosir di tengahnya.'
    },
    {
      name: 'Taman Mini Indonesia Indah, Jakarta',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2FXQtKKbaZJkuL9zpVlpxwjJSvFbmcz0eg&s',
      description: 'Destinasi wisata edukasi yang memperkenalkan budaya dan keragaman Indonesia dalam satu kawasan.'
    }
  ];
}