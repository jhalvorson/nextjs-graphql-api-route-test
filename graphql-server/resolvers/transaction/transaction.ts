import {  Query, Resolver } from "type-graphql";
import { Transaction } from "../../entities/transaction";

@Resolver(() => Transaction)
export class TransactionResolver {

    @Query(() => [Transaction])
    transactions(): Transaction[] {
        const fakeTransactions: Transaction[] = [
            {
                id: '123',
                type: 'something',
                state: 'lol this works',
                userTransactionTime: new Date(),
                settlementDate: new Date()
            },
            {
                id: '456',
                type: 'something',
                state: 'dont know if its great or shit',
                userTransactionTime: new Date(),
                settlementDate: new Date()
            }
        ];
        return fakeTransactions
    }

}