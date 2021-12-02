import { PaginationArgs } from 'src/common/dto/pagination-args.dto';

import { Paginator } from 'src/common/dto/paginator.dto';
import { Influencer } from '../entities/shop.entity';

export class ShopPaginator extends Paginator<Influencer> {
  data: Influencer[];
}

export class GetShopsDto extends PaginationArgs {
  orderBy?: string;
  search?: string;
  sortedBy?: string;
  is_active?: boolean;
}
