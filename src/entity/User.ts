import {Entity, ObjectIdColumn, Column, ObjectID} from 'typeorm';
import Product from './Products';

@Entity()

class User  {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    name!: string;

    @Column()
    category!: string;

    @Column()
    email! : string

    @Column(type => Product)
    products! : Product[]
}


export default User