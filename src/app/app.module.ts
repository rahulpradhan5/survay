import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgesComponent } from './components/badges/badges.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SpinnersComponent } from './components/spinners/spinners.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { FormsElementsComponent } from './components/forms-elements/forms-elements.component';
import { FormsLayoutsComponent } from './components/forms-layouts/forms-layouts.component';
import { FormsEditorsComponent } from './components/forms-editors/forms-editors.component';
import { TablesGeneralComponent } from './components/tables-general/tables-general.component';
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { ChartsChartjsComponent } from './components/charts-chartjs/charts-chartjs.component';
import { ChartsApexchartsComponent } from './components/charts-apexcharts/charts-apexcharts.component';
import { IconsBootstrapComponent } from './components/icons-bootstrap/icons-bootstrap.component';
import { IconsRemixComponent } from './components/icons-remix/icons-remix.component';
import { IconsBoxiconsComponent } from './components/icons-boxicons/icons-boxicons.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthService } from "./shared/services/auth.service";
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { TotalOrdersComponent } from './pages/total-orders/total-orders.component';
import { CompletedOredersComponent } from './pages/completed-oreders/completed-oreders.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';
import { RejectedOrdersComponent } from './pages/rejected-orders/rejected-orders.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubCategoryComponent } from './pages/sub-category/sub-category.component';
import { AddSubCategoryComponent } from './pages/add-sub-category/add-sub-category.component';
import { ViewOnlinePaymentsComponent } from './pages/view-online-payments/view-online-payments.component';
import { ViewCashPaymentsComponent } from './pages/view-cash-payments/view-cash-payments.component';
import { DeliveryBoysComponent } from './pages/delivery-boys/delivery-boys.component';
import { ViewCashRecivedFromDeliveryBoyComponent } from './pages/view-cash-recived-from-delivery-boy/view-cash-recived-from-delivery-boy.component';
import { InstantOrderStatusComponent } from './pages/instant-order-status/instant-order-status.component';
import { OrderRangeDriverComponent } from './pages/order-range-driver/order-range-driver.component';
import { DeliveryPincodeComponent } from './pages/delivery-pincode/delivery-pincode.component';
import { BannersComponent } from './pages/banners/banners.component';
import { VendorListComponent } from './pages/vendor-list/vendor-list.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAat1gfqnYhE4hG8WRfcJdNIVD4ayfiVs",
  authDomain: "jar-app-60a7c.firebaseapp.com",
  projectId: "jar-app-60a7c",
  storageBucket: "jar-app-60a7c.appspot.com",
  messagingSenderId: "502505721750",
  appId: "1:502505721750:web:6cdb7484a091b917b017b7",
  measurementId: "G-FP0YZKC1CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    AlertsComponent,
    AccordionComponent,
    BadgesComponent,
    BreadcrumbsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    ListGroupComponent,
    ModalComponent,
    TabsComponent,
    PaginationComponent,
    ProgressComponent,
    SpinnersComponent,
    TooltipsComponent,
    FormsElementsComponent,
    FormsLayoutsComponent,
    FormsEditorsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    ChartsChartjsComponent,
    ChartsApexchartsComponent,
    IconsBootstrapComponent,
    IconsRemixComponent,
    IconsBoxiconsComponent,
    UsersProfileComponent,
    PagesFaqComponent,
    PagesContactComponent,
    PagesRegisterComponent,
    PagesLoginComponent,
    PagesError404Component,
    PagesBlankComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    TotalOrdersComponent,
    CompletedOredersComponent,
    PendingOrdersComponent,
    RejectedOrdersComponent,
    CategoryComponent,
    SubCategoryComponent,
    AddSubCategoryComponent,
    ViewOnlinePaymentsComponent,
    ViewCashPaymentsComponent,
    DeliveryBoysComponent,
    ViewCashRecivedFromDeliveryBoyComponent,
    InstantOrderStatusComponent,
    OrderRangeDriverComponent,
    DeliveryPincodeComponent,
    BannersComponent,
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
