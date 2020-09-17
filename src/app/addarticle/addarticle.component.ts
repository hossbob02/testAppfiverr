import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  message=''
  errMessage=''
  constructor(private fs:AngularFirestore) {

   }

  ngOnInit(): void {
  }
  addArticle(f){
    let data=f.value
    this.fs.collection('articles/').add({
      titre:data.titre,
      descriptions:data.descriptions
    }).then(()=>{
      this.message='added'
    }).catch(()=>{
      this.errMessage='not added'
    })
  }
}
