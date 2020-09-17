import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  dataArticles=[]
  constructor(private fs:AngularFirestore) { 
    
  }

  ngOnInit(): void {
    this.fs.collection('articles').valueChanges().subscribe(data=>{
      this.dataArticles=data
    })
  }

}
