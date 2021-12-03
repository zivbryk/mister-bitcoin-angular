import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';
import { ConfirmedTransactionsChartComponent } from './cmps/confirmed-transactions-chart/confirmed-transactions-chart.component';
import { UsdToBtcPipe } from './pipes/usd-to-btc.pipe';
import { DateDescPipe } from './pipes/date-desc.pipe';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { TransactionsListComponent } from './cmps/transactions-list/transactions-list.component';
import { BtcToUsdPipe } from './pipes/btc-to-usd.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    StatisticsPageComponent,
    AppHeaderComponent,
    MarketPriceChartComponent,
    ConfirmedTransactionsChartComponent,
    UsdToBtcPipe,
    DateDescPipe,
    SignupPageComponent,
    TransferFundComponent,
    TransactionsListComponent,
    BtcToUsdPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
