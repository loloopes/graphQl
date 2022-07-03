import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType({ isAbstract: true })
export class CreatePetInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int)
  ownerId: number;
}
