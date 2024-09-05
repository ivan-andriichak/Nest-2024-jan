import { ArticleListQueryDto } from '../req/article-list.query.dto';
import { ArticleListItemResDto } from './aticle-list-item.res.dto';

export class ArticleListResDto extends ArticleListQueryDto {
  data: ArticleListItemResDto[];
  total: number;
}
