import { TasksComponent } from './activities/tasks/tasks.component';
import { TransportsComponent } from './activities/transports/transports.component';
import { VetvisitsComponent } from './activities/vetvisits/vetvisits.component';
import { PhonecallsComponent } from './activities/phonecalls/phonecalls.component';
import { EmailsComponent } from './activities/emails/emails.component';
import { AppointmentsComponent } from './activities/appointments/appointments.component';
import { SecurityrolesComponent } from './admin/securityroles/securityroles.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { OrganizationsComponent } from './admin/organizations/organizations.component';
import { DocumentsComponent } from './admin/documents/documents.component';
import { UsersComponent } from './admin/users/users.component';
import { AccountComponent } from './finance/accounts/account/account.component';
import { AccountsComponent } from './finance/accounts/accounts.component';
import { RegisterComponent } from './security/register/register.component';
import { ForgetPasswordComponent } from './security/forget-password/forget-password.component';
import { AuthGuard } from './guards/auth.guard';
import { EventsComponent } from './activities/events/events.component';
import { TransferComponent } from './finance/transfer/transfer.component';
import { ReceivableComponent } from './finance/receivable/receivable.component';
import { PaymentComponent } from './finance/payment/payment.component';
import { VetComponent } from './vets/vet/vet.component';
import { ProductComponent } from './inventory/product/product.component';
import { PersonComponent } from './people/person/person.component';
import { AnimalComponent } from './animals/animal/animal.component';
import { FinanceComponent } from './finance/finance.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ActivitiesComponent } from './activities/activities.component';
import { VetsComponent } from './vets/vets.component';
import { PeopleComponent } from './people/people.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalsComponent } from './animals/animals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserComponent } from './admin/users/user/user.component';
import { OrganizationComponent } from './admin/organizations/organization/organization.component';
import { ReportComponent } from './admin/reports/report/report.component';
import { SecurityroleComponent } from './admin/securityroles/securityrole/securityrole.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent, canActivate: [AuthGuard] },
  { path: 'animals/:id', component: AnimalComponent, canActivate: [AuthGuard] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthGuard] },
  { path: 'people/:id', component: PersonComponent, canActivate: [AuthGuard] },
  { path: 'vets', component: VetsComponent, canActivate: [AuthGuard] },
  { path: 'vets/:id', component: VetComponent, canActivate: [AuthGuard] },
  { path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard] },
  { path: 'activities/events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'activities/appointments', component: AppointmentsComponent },
  { path: 'activities/emails', component: EmailsComponent, canActivate: [AuthGuard] },
  { path: 'activities/phonecalls', component: PhonecallsComponent, canActivate: [AuthGuard] },
  { path: 'activities/tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'activities/transports', component: TransportsComponent, canActivate: [AuthGuard] },
  { path: 'activities/vetvisits', component: VetvisitsComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'inventory/:id', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'finance', component: FinanceComponent, canActivate: [AuthGuard] },
  { path: 'finance/accounts', component: AccountsComponent, canActivate: [AuthGuard] },
  { path: 'finance/accounts/:id', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'finance/transfer/:id', component: TransferComponent, canActivate: [AuthGuard] },
  { path: 'finance/deposit/:id', component: ReceivableComponent, canActivate: [AuthGuard] },
  { path: 'finance/payment/:id', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'admin/users/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'admin/documents', component: DocumentsComponent, canActivate: [AuthGuard] },
  { path: 'admin/documents/:id', component: DocumentsComponent, canActivate: [AuthGuard] },
  { path: 'admin/organizations', component: OrganizationsComponent, canActivate: [AuthGuard] },
  { path: 'admin/organizations/:id', component: OrganizationComponent, canActivate: [AuthGuard] },
  { path: 'admin/reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'admin/reports/:id', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'admin/securityroles', component: SecurityrolesComponent, canActivate: [AuthGuard] },
  { path: 'admin/securityroles/:id', component: SecurityroleComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
