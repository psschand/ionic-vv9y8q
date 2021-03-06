import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {CartService} from '../../providers/cart.service';
import {AuthService} from '../../providers/auth.service';
//import { AppUpdate } from '@ionic-native/app-update';
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
  providers: [CartService,AuthService]
})
export class ProductDetailsPage {

  product : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public cartService: CartService,
              public authService: AuthService 
             ) {
  }

  ionViewDidLoad() {
    //this.appUpdate.checkAppUpdate(this.cartService.updateApp()).then(() => { console.log('Update available') });
    this.product = this.navParams.data;
  }
  goBack() {
      this.navCtrl.pop();
  }

  addToCart(product)  : void  {
    this.cartService.addCartItem(this.authService.getLoggedUID(), this.product );
  }

}
