"use client";

import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USERS } from "@/subdomains/users/constants";
import { UserBadgeComponent } from "@/subdomains/users/components/badge/badge.component";
import { UserFormComponent } from "@/subdomains/users/components/form/form.component";

export function UsersInterface(): JSX.Element {
  // will update this to fetch users from the db
  const { loading, error, data, refetch } = useQuery(FETCH_USERS);

  return (
    <section className="flex flex-row gap-12 items-center justify-evenly p-24">
      {error && <p>Error : {error.message}</p>}
      {loading && <p>Loading...</p>}

      <div className="h-4/5 w-1/3 px-4 py-6 flex flex-col gap-2 overflow-y-auto max-h-[700px] border border-slate-500 rounded bg-slate-100">
        <h1 className="text-black">List of all users</h1>
        {data?.users?.map((user: Record<string, string | null | number>) => (
          <Fragment key={user?.id}>
            <UserBadgeComponent user={user} refetch={refetch} />
          </Fragment>
        ))}
      </div>
      <div className="h-4/5 w-1/3 px-2 py-5 justify-center flex border border-slate-500 rounded bg-slate-100 dark:bg-slate-500">
        <UserFormComponent refetch={refetch} />
      </div>
    </section>
  );
}
