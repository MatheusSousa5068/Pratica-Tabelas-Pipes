import { TestBed } from '@angular/core/testing';

import { MensagemControleService } from './mensagem-controle.service';

describe('MensagemControleService', () => {
  let service: MensagemControleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemControleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
