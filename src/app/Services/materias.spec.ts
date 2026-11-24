import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MateriasService } from './materias';

describe('MateriasService', () => {
  let service: MateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MateriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});