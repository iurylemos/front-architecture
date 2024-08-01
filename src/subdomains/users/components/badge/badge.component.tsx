"use client";

import React from "react";
import Image from "next/image";
import { UPDATE_USER } from "@/subdomains/users/queries";
import {
  ApolloQueryResult,
  OperationVariables,
  useMutation,
} from "@apollo/client";

type UserBadgeComponentProps = {
  user: Record<string, string | null | number>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};

export function UserBadgeComponent({
  user,
  refetch,
}: UserBadgeComponentProps): JSX.Element {
  const [updateUser] = useMutation(UPDATE_USER);

  const updateActiveStatus = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();

      if (!user) return;

      console.log("user", user);

      await updateUser({
        variables: {
          input: { id: Number(user.id), active: !user.active },
        },
      });
      refetch();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-row h-14 p-2 justify-between items-center bg-slate-100">
      <div className="flex flex-row gap-2">
        <div className="border border-black items-center flex p-2 h-10 w-10 rounded-full bg-white">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="m-0 text-sm text-gray-900">
            {user?.firstName} {user?.lastName}
          </span>
          <span className="text-[11px] text-gray-600">{user?.email}</span>
        </div>
      </div>
      <button
        onClick={updateActiveStatus}
        style={{
          backgroundColor: user?.active ? "green" : "red",
        }}
        className="h-3 w-3 rounded-full"
      ></button>
    </div>
  );
}
