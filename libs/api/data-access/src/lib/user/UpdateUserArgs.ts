import { User } from "@generated/type-graphql";
import { MaxLength } from "class-validator";
import { ArgsType, Field, InputType } from "type-graphql";

@InputType()
class UserUpdateInput implements Partial<User> {
  @Field()
  @MaxLength(30)
  name!: string;
}

@ArgsType()
export class UpdateUserArgs {
  @Field(() => UserUpdateInput)
  data!: UserUpdateInput;
}
