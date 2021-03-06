import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PreviewProdutoComponent } from './preview-produto/preview-produto.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { ImgComponent } from './img/img.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ListCartsComponent } from './list-carts/list-carts.component';
import { TeamComponent } from './team/team.component';
import { OrderComponent } from './order/order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { AboutComponent } from './about/about.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { AdminComponent } from './admin/admin.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AlertComponent } from './alert/alert.component';
import { ListNewProductComponent } from './list-new-product/list-new-product.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { ListNewUserComponent } from './list-new-user/list-new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { StackComponent } from './stack/stack.component';
import { AccountComponent } from './account/account.component';
import { AdminListOrdersComponent } from './admin-list-orders/admin-list-orders.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOrderItemComponent } from './admin-order-item/admin-order-item.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductHorizontalComponent } from './product-horizontal/product-horizontal.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { AlimentosComponent } from './category/alimentos/alimentos.component';
import { BemestarComponent } from './category/bemestar/bemestar.component';
import { VestuarioComponent } from './category/vestuario/vestuario.component';
import { UtensiliosComponent } from './category/utensilios/utensilios.component';
import { AcessoriosComponent } from './category/acessorios/acessorios.component';
import { SearchComponent } from './search/search.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PreviewProdutoComponent,
    HomeComponent,
    AllProductsComponent,
    ProductComponent,
    ImgComponent,
    CartComponent,
    CartItemComponent,
    ListCartsComponent,
    TeamComponent,
    OrderComponent,
    ListOrdersComponent,
    AboutComponent,
    OrderItemComponent,
    AdminComponent,
    NewProductComponent,
    AlertComponent,
    ListNewProductComponent,
    NewProductFormComponent,
    NewProductComponent,
    ListNewUserComponent,
    NewUserFormComponent,
    StackComponent,
    AccountComponent,
    AdminListOrdersComponent,
    AdminOrderComponent,
    AdminOrderItemComponent,
    NewUserComponent,
    EditUserComponent,
    ProductHorizontalComponent,
    ProductsCategoryComponent,
    AlimentosComponent,
    BemestarComponent,
    VestuarioComponent,
    UtensiliosComponent,
    AcessoriosComponent,
    SearchComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
