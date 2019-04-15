import { Vehiculo } from './entities/vehiculo.entity';

describe('Vehiculo', () => {
  it('should be defined', () => {
    expect(new Vehiculo()).toBeDefined();
  });
});
