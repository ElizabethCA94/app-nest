import { Vehicle } from './entities/vehicle.entity';

describe('Vehicle', () => {
  it('should be defined', () => {
    expect(new Vehicle()).toBeDefined();
  });
});
