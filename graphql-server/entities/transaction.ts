import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Transaction {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    type: string

    @Field(() => String)
    state: string;

    // user_transaction_time
    @Field(() => Date)
    userTransactionTime: Date

    // settlement_date
    @Field(() => Date)
    settlementDate: Date
}
