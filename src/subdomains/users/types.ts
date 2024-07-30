import { User } from "@/shared/modules/types/user.type";

type UpdateInputId = {
  id: number;
};

export type UpdateInput = UpdateInputId & User;
