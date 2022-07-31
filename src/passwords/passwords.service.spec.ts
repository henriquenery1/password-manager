import { Test, TestingModule } from '@nestjs/testing';
import { PasswordsService } from './passwords.service';

describe('PasswordsService', () => {
  let service: PasswordsService;

  beforeAll(async () => {
    const passwordLength = 40
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordsService],
    }).compile();

    service = module.get<PasswordsService>(PasswordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be length equal', () => {
    expect(createPassword(passwordLength).length()).toBe(passwordLength)
  });

});
