import {Entity, Column, ObjectIdColumn, ObjectID} from 'typeorm';
import Feedback from './feedback';
import User from './User';

@Entity()
class Product{
    @ObjectIdColumn()
    id : ObjectID | undefined;

    @Column()
    name : string | undefined ;

    @Column(type => User)
    user! : User

    @Column(type => Feedback)
    feedback! : Feedback[]
}

export default Product