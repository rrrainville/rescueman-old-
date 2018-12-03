import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/controllers/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnimalsComponent } from './animals/animals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { VetsComponent } from './vets/vets.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FinanceComponent } from './finance/finance.component';
import { AdminComponent } from './admin/admin.component';
import { ActivitiesComponent } from './activities/activities.component';
import { UsersComponent } from './admin/users/users.component';
import { OrganizationsComponent } from './admin/organizations/organizations.component';
import { DocumentsComponent } from './admin/documents/documents.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { SecurityRolesComponent } from './admin/securityroles/securityroles.component';
import { PaymentComponent } from './finance/payment/payment.component';
import { ReceivableComponent } from './finance/receivable/receivable.component';
import { TransferComponent } from './finance/transfer/transfer.component';
import { AccountsComponent } from './finance/accounts/accounts.component';
import { AccountComponent } from './finance/accounts/account/account.component';
import { ProductComponent } from './inventory/product/product.component';
import { VetComponent } from './vets/vet/vet.component';
import { PersonComponent } from './people/person/person.component';
import { AnimalComponent } from './animals/animal/animal.component';
import { OrganizationComponent } from './admin/organizations/organization/organization.component';
import { SecurityRoleComponent } from './admin/securityroles/securityrole/securityrole.component';
import { UserComponent } from './admin/users/user/user.component';
import { AppointmentsComponent } from './activities/appointments/appointments.component';
import { AppointmentComponent } from './activities/appointments/appointment/appointment.component';
import { EmailsComponent } from './activities/emails/emails.component';
import { EmailComponent } from './activities/emails/email/email.component';
import { EventsComponent } from './activities/events/events.component';
import { EventComponent } from './activities/events/event/event.component';
import { PhonecallsComponent } from './activities/phonecalls/phonecalls.component';
import { PhonecallComponent } from './activities/phonecalls/phonecall/phonecall.component';
import { TasksComponent } from './activities/tasks/tasks.component';
import { TaskComponent } from './activities/tasks/task/task.component';
import { TransportsComponent } from './activities/transports/transports.component';
import { TransportComponent } from './activities/transports/transport/transport.component';
import { VetvisitsComponent } from './activities/vetvisits/vetvisits.component';
import { VetvisitComponent } from './activities/vetvisits/vetvisit/vetvisit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './security/login/login.component';
import { ForgetPasswordComponent } from './security/forget-password/forget-password.component';
import { RegisterComponent } from './security/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { FormDebugComponent } from './shared/form-debug/form-debug.component';

import { GrdFilterPipe } from './shared/pipes/grd-filter.pipe';
import { CheckboxGroupComponent } from './shared/checkbox-group/checkbox-group.component';
import { CheckboxPermissionsComponent } from './admin/securityroles/checkbox-permissions/checkbox-permissions.component';
import { UsersGridComponent } from './admin/users/users-grid/users-grid.component';
import { NotesRecordComponent } from './shared/notes-record/notes-record.component';
import { AssignProductListComponent } from './inventory/assign-product-list/assign-product-list.component';
import { SearchEntityBoxComponent } from './shared/search-entity-box/search-entity-box.component';
import { SearchContactBoxComponent } from './shared/search-contact-box/search-contact-box.component';
import { SearchAnimalBoxComponent } from './shared/search-animal-box/search-animal-box.component';
import { SearchVeterinaryBoxComponent } from './shared/search-veterinary-box/search-veterinary-box.component';
import { AccountSummaryComponent } from './finance/accounts/account-summary/account-summary.component';
import { TransactionsListComponent } from './finance/transactions-list/transactions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    DashboardComponent,
    PeopleComponent,
    VetsComponent,
    InventoryComponent,
    FinanceComponent,
    AdminComponent,
    ActivitiesComponent,
    UsersComponent,
    OrganizationsComponent,
    DocumentsComponent,
    ReportsComponent,
    SecurityRolesComponent,
    PaymentComponent,
    ReceivableComponent,
    TransferComponent,
    AccountsComponent,
    AccountComponent,
    ProductComponent,
    VetComponent,
    PersonComponent,
    AnimalComponent,
    OrganizationComponent,
    SecurityRoleComponent,
    UserComponent,
    AppointmentsComponent,
    AppointmentComponent,
    EmailsComponent,
    EmailComponent,
    EventsComponent,
    EventComponent,
    PhonecallsComponent,
    PhonecallComponent,
    TasksComponent,
    TaskComponent,
    TransportsComponent,
    TransportComponent,
    VetvisitsComponent,
    VetvisitComponent,
    PageNotFoundComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    FormDebugComponent,
    GrdFilterPipe,
    CheckboxGroupComponent,
    CheckboxPermissionsComponent,
    UsersGridComponent,
    NotesRecordComponent,
    AssignProductListComponent,
    SearchEntityBoxComponent,
    SearchContactBoxComponent,
    SearchAnimalBoxComponent,
    SearchVeterinaryBoxComponent,
    AccountSummaryComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
