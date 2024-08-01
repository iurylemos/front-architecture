"use client";

import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { KeyInputFormData } from "@/subdomains/keyinput/types";
import { FETCH_PRODUCTS } from "@/subdomains/keyinput/queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { Product } from "@prisma/client";

export function KeyInputRefsComponent(): JSX.Element {
  const { data: dataProducts } = useQuery(FETCH_PRODUCTS);

  const {
    control,
    formState: { errors },
  } = useFormContext<KeyInputFormData>();

  const products = useMemo(
    () => (dataProducts && dataProducts.products ? dataProducts.products : []),
    [dataProducts]
  );

  const {
    fields: refFields,
    append: appendRef,
    remove: removeRef,
  } = useFieldArray({
    control,
    name: "refs",
  });

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">Refs</label>
      {refFields.map((refField, index) => (
        <div
          key={refField.id}
          className="flex items-center space-x-4 mb-4 flex-col md:flex-row"
        >
          <Controller
            name={`refs.${index}.value` as any}
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Ref"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...field}
              />
            )}
          />
          <Controller
            name={`refs.${index}.productId` as const}
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="!ml-0 md:!ml-2 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a product</option>
                {products &&
                  products.map((product: Product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
              </select>
            )}
          />
          <button
            type="button"
            onClick={() => removeRef(index)}
            disabled={refFields.length <= 1}
            className={`px-2 py-1 text-xs bg-red-600 hover:bg-red-800 text-white focus:outline-none ${
              refFields.length > 1 ? "cursor-pointer" : "pointer-events-none"
            } rounded-md min-h-8 mt-3 md:mt-0 w-full md:w-auto !ml-0 md:!ml-2`}
          >
            Remove
          </button>
          {errors.refs && errors.refs[index] && (
            <p className="text-red-500 text-xs mt-1">
              {errors.refs[index]?.name?.message}
            </p>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendRef({ name: "", productId: 0 })}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
      >
        Add Ref
      </button>
    </div>
  );
}
