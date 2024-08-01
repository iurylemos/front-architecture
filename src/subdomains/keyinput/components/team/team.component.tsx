"use client";

import { Controller, useFormContext } from "react-hook-form";
import { KeyInputFormData } from "@/subdomains/keyinput/types";

export function KeyInputTeamComponent(): JSX.Element {
  const {
    control,
    formState: { errors },
  } = useFormContext<KeyInputFormData>();

  return (
    <div className="mb-6">
      {/* Platform Manager */}
      <div className="mb-6">
        <label
          htmlFor="platformManager"
          className="block text-sm font-medium text-gray-700"
        >
          Platform Manager
        </label>
        <Controller
          name="team.platformManager"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="platformManager"
              type="text"
              placeholder="Platform Manager"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.platformManager && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.platformManager.message}
          </p>
        )}
      </div>

      {/* Team Leader */}
      <div className="mb-6">
        <label
          htmlFor="technicalProjectLeader"
          className="block text-sm font-medium text-gray-700"
        >
          Technical Project Leader
        </label>
        <Controller
          name="team.technicalProjectLeader"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="technicalProjectLeader"
              type="text"
              placeholder="Technical Project Leader"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.technicalProjectLeader && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.technicalProjectLeader.message}
          </p>
        )}
      </div>

      {/* Project Manager */}
      <div className="mb-6">
        <label
          htmlFor="purchasingLeader"
          className="block text-sm font-medium text-gray-700"
        >
          Purchasing Leader
        </label>
        <Controller
          name="team.purchasingLeader"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="purchasingLeader"
              type="text"
              placeholder="Purchasing Leader"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.purchasingLeader && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.purchasingLeader.message}
          </p>
        )}
      </div>

      {/* Technical Lead */}
      <div className="mb-6">
        <label
          htmlFor="processLeader"
          className="block text-sm font-medium text-gray-700"
        >
          Process Leader
        </label>
        <Controller
          name="team.processLeader"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="processLeader"
              type="text"
              placeholder="Process Leader"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.processLeader && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.processLeader.message}
          </p>
        )}
      </div>

      {/* QA Lead */}
      <div className="mb-6">
        <label
          htmlFor="financeContributor"
          className="block text-sm font-medium text-gray-700"
        >
          Finance Contributor
        </label>
        <Controller
          name="team.financeContributor"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="financeContributor"
              type="text"
              placeholder="Finance Contributor"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.financeContributor && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.financeContributor.message}
          </p>
        )}
      </div>

      {/* Product Owner */}
      <div className="mb-6">
        <label
          htmlFor="salesLeader"
          className="block text-sm font-medium text-gray-700"
        >
          Sales Leader
        </label>
        <Controller
          name="team.salesLeader"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="salesLeader"
              type="text"
              placeholder="Sales Leader"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.salesLeader && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.salesLeader.message}
          </p>
        )}
      </div>

      {/* Scrum Master */}
      <div className="mb-6">
        <label
          htmlFor="projectName"
          className="block text-sm font-medium text-gray-700"
        >
          Project Name
        </label>
        <Controller
          name="team.projectName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="projectName"
              type="text"
              placeholder="Project Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.projectName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.projectName.message}
          </p>
        )}
      </div>

      {/* Business Analyst */}
      <div className="mb-6">
        <label
          htmlFor="productName"
          className="block text-sm font-medium text-gray-700"
        >
          Product Name
        </label>
        <Controller
          name="team.productName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="productName"
              type="text"
              placeholder="Product Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.team?.productName && (
          <p className="text-red-500 text-xs mt-1">
            {errors.team.productName.message}
          </p>
        )}
      </div>
    </div>
  );
}
