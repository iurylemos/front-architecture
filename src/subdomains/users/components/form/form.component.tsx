"use client";

import React from "react";
import {
  ApolloQueryResult,
  OperationVariables,
  useMutation,
} from "@apollo/client";
import { useForm } from "react-hook-form";
import { CREATE_USER } from "@/subdomains/users/queries";

type UserFormComponentProps = {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};

export function UserFormComponent({
  refetch,
}: UserFormComponentProps): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [createUser] = useMutation(CREATE_USER);

  const onSubmit = async (data: any) => {
    try {
      const { age, firstName, lastName, email } = data || {};

      console.log("data", data);

      await createUser({
        variables: {
          input: {
            age: Number(age),
            firstName,
            lastName,
            email,
          },
        },
      });
      refetch();
      reset();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-3/4"
    >
      <h2 className="font-semibold text-xl text-[#121212] m-3 text-center dark:text-white">
        Create new user
      </h2>
      <div className="input-wrapper">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First name
        </label>
        <input
          type="text"
          id="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="First name"
          required
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>First name is required</span>}
      </div>

      <div className="input-wrapper">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="last name"
          required
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <span>Last name is required</span>}
      </div>

      <div className="input-wrapper">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
          required
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}
      </div>

      <div className="input-wrapper">
        <label
          htmlFor="age"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Age"
          required
          {...register("age", { required: true })}
        />
        {errors.age && <span>Age is required</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mx-auto my-4 bg-orange-500 text-white h-12 rounded-lg p-2"
      >
        Create User
      </button>
    </form>
  );
}
