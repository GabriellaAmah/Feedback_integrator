import {Entity, Column, ObjectIdColumn, ObjectID} from 'typeorm';
import Product from './Products';

@Entity()
class Feedback{
    @ObjectIdColumn()
    id : ObjectID | undefined;

    @Column(type => Product)
    product: Product | undefined

    @Column()
    description : string | undefined ;

}

export default Feedback