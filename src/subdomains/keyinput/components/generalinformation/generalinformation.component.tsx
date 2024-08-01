"use client";

import { useQuery } from "@apollo/client";
import {
  FETCH_CURRENCIES,
  FETCH_CUSTOMERS,
} from "@/subdomains/keyinput/queries";
import { Controller, useFormContext } from "react-hook-form";
import {
  Currency,
  Customer,
  KeyInputFormData,
} from "@/subdomains/keyinput/types";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useMemo } from "react";

export function KeyInputGeneralInformationComponent(): JSX.Element {
  const {
    loading: loadingCustomers,
    error: errorCustomers,
    data: dataCustomers,
  } = useQuery(FETCH_CUSTOMERS);

  const {
    loading: loadingCurrencies,
    error: errorCurrencies,
    data: dataCurrencies,
  } = useQuery(FETCH_CURRENCIES);

  console.log("customers", dataCustomers);
  console.log("currencies", dataCurrencies);

  const customers = useMemo(
    () =>
      dataCustomers && dataCustomers.customers ? dataCustomers.customers : [],
    [dataCustomers]
  );
  const currencies = useMemo(
    () =>
      dataCurrencies && dataCurrencies.currencies
        ? dataCurrencies.currencies
        : [],
    [dataCurrencies]
  );

  const {
    control,
    formState: { errors },
  } = useFormContext<KeyInputFormData>();

  return (
    <div className="mb-6">
      {/* Customer ID */}
      <label
        htmlFor="customerId"
        className="block text-sm font-medium text-gray-700"
      >
        Customer
      </label>
      <Controller
        name="generalInformations.customerId"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            id="customerId"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a customer</option>
            {customers &&
              customers.map((customer: Customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
          </select>
        )}
      />
      {errors.generalInformations?.customerId && (
        <p className="text-red-500 text-xs mt-1">
          {errors.generalInformations.customerId.message}
        </p>
      )}

      {/* Project */}
      <div className="my-3">
        <label
          htmlFor="project"
          className="block text-sm font-medium text-gray-700"
        >
          Project
        </label>
        <Controller
          name="generalInformations.project"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="project"
              type="text"
              placeholder="Project"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.project && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.project.message}
          </p>
        )}
      </div>

      {/* Model Vehicle */}
      <div className="mb-6">
        <label
          htmlFor="modelVehicle"
          className="block text-sm font-medium text-gray-700"
        >
          Model Vehicle
        </label>
        <Controller
          name="generalInformations.modelVehicle"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="modelVehicle"
              placeholder="Model Vehicle"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.modelVehicle && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.modelVehicle.message}
          </p>
        )}
      </div>

      {/* Country */}
      <div className="mb-6">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <Controller
          name="generalInformations.country"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="country"
              type="text"
              placeholder="Country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.country && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.country.message}
          </p>
        )}
      </div>

      {/* Production Site */}
      <div className="mb-6">
        <label
          htmlFor="productionSite"
          className="block text-sm font-medium text-gray-700"
        >
          Production Site
        </label>
        <Controller
          name="generalInformations.productionSite"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="productionSite"
              type="text"
              placeholder="Production Site"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.productionSite && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.productionSite.message}
          </p>
        )}
      </div>

      {/* Quote Dispatch Date */}
      <div className="mb-6">
        <label
          htmlFor="quoteDispatchDate"
          className="block text-sm font-medium text-gray-700"
        >
          Quote Dispatch Date
        </label>
        <Controller
          name="generalInformations.quoteDispatchDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              dateFormat="dd/MM/yyyy"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.quoteDispatchDate && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.quoteDispatchDate.message}
          </p>
        )}
      </div>

      {/* First Year of CAA */}
      <div className="mb-6">
        <label
          htmlFor="firstYearOfCAA"
          className="block text-sm font-medium text-gray-700"
        >
          First Year of CAA
        </label>
        <Controller
          name="generalInformations.firstYearOfCAA"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              id="firstYearOfCAA"
              placeholder="First Year of CAA"
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.firstYearOfCAA && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.firstYearOfCAA.message}
          </p>
        )}
      </div>

      {/* First SOP Date */}
      <div className="mb-6">
        <label
          htmlFor="firstSopDate"
          className="block text-sm font-medium text-gray-700"
        >
          First SOP Date
        </label>
        <Controller
          name="generalInformations.firstSopDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={field.onChange}
              dateFormat="dd/MM/yyyy"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}
        />
        {errors.generalInformations?.firstSopDate && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.firstSopDate.message}
          </p>
        )}
      </div>

      {/* Currency ID */}
      <div className="mb-6">
        <label
          htmlFor="currencyId"
          className="block text-sm font-medium text-gray-700"
        >
          Currency
        </label>
        <Controller
          name="generalInformations.currencyId"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              id="currencyId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a Currency</option>
              {currencies &&
                currencies.map((currency: Currency) => (
                  <option key={currency.id} value={currency.id}>
                    {currency.name}
                  </option>
                ))}
            </select>
          )}
        />
        {errors.generalInformations?.currencyId && (
          <p className="text-red-500 text-xs mt-1">
            {errors.generalInformations.currencyId.message}
          </p>
        )}
      </div>
    </div>
  );
}
