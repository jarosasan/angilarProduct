import { Injectable } from '@angular/core';

import { AngularFireDatabase} from 'angularfire2/database';

import * as firebase from 'firebase';

@Injectable()
export class ProductService {

    productRow: any;

    private uploadTask: firebase.storage.UploadTask;

    constructor(private afd: AngularFireDatabase) {
        this.productRow = afd.list('product');
    }

    getAllProducts() {
        return this.productRow.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }
    getOneProduct(key: string){
        const productPath = `product/${key}`;
        return this.afd.object(productPath);
    }

    updateProduct(key: string, form: any, upload: any) {
        this.productRow.update(key, form);
    }

    cteateProduct(form: any, upload: any) {
        //this is storage function ... built in
        let storageRef = firebase.storage().ref();

        //path to /folder
        this.uploadTask = storageRef.child(`products/${upload[0].name}`).put(upload[0]);
        //upload function to storage
        this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
        // upload in progress
                upload[0].progress = upload[0].progress = (this.uploadTask.snapshot.bytesTransferred / this.uploadTask.snapshot.totalBytes) * 100
            },
            (error) => {
        // upload failed
                console.log(error)
            },
            () => {
        //upload data to database
                form['file_name'] = upload[0].name;
                form['url'] = this.uploadTask.snapshot.downloadURL;
                this.productRow.push(form);
            }
        );
    }

    deleteProduct(key: string) {
        this.productRow.remove(key);
    }



}
