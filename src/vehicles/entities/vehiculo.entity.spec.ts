import { Vehiculo } from './vehiculo.entity';

describe('Vehiculo', () => {
  it('should be defined', () => {
    expect(new Vehiculo()).toBeDefined();
  });
});
