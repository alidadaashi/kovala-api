import { PickType } from '@nestjs/swagger';
import { Influencer } from '../entities/shop.entity';

export class CreateShopDto extends PickType(Influencer, [
  'name',
  'address',
  'description',
  'cover_image',
  'logo',
  'settings',
  'balance',
]) {
  categories: number[];
}

export class ApproveShopDto {
  id: number;
  admin_commission_rate: number;
}
