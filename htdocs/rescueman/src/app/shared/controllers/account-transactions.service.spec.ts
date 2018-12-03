import { TestBed } from '@angular/core/testing';

import { AccountTransactionsService } from './account-transactions.service';

describe('AccountTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountTransactionsService = TestBed.get(AccountTransactionsService);
    expect(service).toBeTruthy();
  });
});
